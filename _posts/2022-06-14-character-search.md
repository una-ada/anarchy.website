---
author: una
description: >
  Finally putting in the work for Aokan, a tool for streamlining searches for characters with the same VAs. In this first development log, I research different third-party APIs to acquire the necessary data and how I can implement them into the project's tech stack.
entry: 1
lang: en
layout: post
license: BY-ND
series: aokan
series_index: 1
subtitle: Third-Party API Exploration
tags: anime api blog graphql javascript nodejs programming typescript
title: Anime Character Search
---

- toc
{:toc}

## Preface

This is a project I started last year and then procrastinated on until it was
all but forgotten. Basically, there's a lot of times watching anime, especially
anime dubbed in your first language, where you recognize a character's voice and
really want to place where you've heard it before. Sometimes this is a simple
recall, but more often than not you have to look it up.
{:.dropcap}

Searching for this sort of thing usually follows a specific flow: got to
MyAnimeList, search for the character whose voice is recognized, find their VA,
scroll thru all the other roles said VA played until you find the one you were
thinking of the whole time. Of course, if you don't really know the name of the
character, then you have to first search for the anime you're watching and
scroll thru all the characters in the show.
{:.no-indent}

This is a repetitive and data-oriented task, which makes it ripe for automation.
So, I wanted to make a tool to simplify this flow. The first step of which would
be to take the data you would be searching through and present it all in a
simplified user flow, then further development could go into algorithmic
prediction to prioritize results in such a way that it's more likely to first
show the desired results.
{:.no-indent}

The state of this project at the moment is far below par, so I want to go back
and reconsider all the moving parts one-by-one to create a more fluid and
desirable experience. Currently, I've started on a UI and built a few API routes
to serve it, but I should really focus on building an API that can support the
app before even thinking about what the UI would look like... which is exactly
what this blog is going to be about, specifically the first step of the flow
which is to be able to search for and select a character.

## I. _Available APIs_
{:#i}

Some preliminary research is needed on this, because the current API being used
by my API for finding characters with a string search is not doing a very good
job of it, and doesn't seem like it can be made to do a better job. To remedy
this, I want to go through different APIs for anime and anime character
databases that can be used to get the necessary data in fast and convenient
ways.
{:.dropcap}

Before that, I ought to define what a "good job" would look like. This can
really be defined by two features: string similarity and relevance. The results
of the search should be based on similarity of the character names to the search
string, not simply substring matching which would not account for user error.
Furthermore, getting a bunch of random side characters from a manga a couple
thousand people read because the names are similar when you're trying to find a
main character from a popular anime series is a bad result.

So, let's first talk about the API I'm currently using and its shortcomings.
{:.no-indent}

### I-1. Jikan
{:#i-1}

[Jikan][1] is an unofficial API for [MyAnimeList][2] written in PHP. It uses
scraping to offer greater read functionality than the current [Official MAL
API][3] which is currently in public beta for its second version, where the
first version was closed circa 2018. Both a public [REST API][4] and a
self-hostable [PHP API][5] are available, with the former being on its fourth
version and latter on its third.

The name "Jikan" comes from the Japanese word <ruby> <rtc>じかん</rtc> <rbc>｢時
間｣</rbc> <rtc>jikan</rtc> </ruby> meaning "time," as they claim that this API
will save you time. This was also the inspiration for the name of my project,
<ruby> <rtc>あおかん</rtc> <rbc>｢青姦｣</rbc> <rtc>aokan</rtc> </ruby>, which
shares the final two mora of the API's name while also fitting into my newly
decided alphabetical project naming scheme (this being the first project in said
scheme and thus beginning with "a").[^1]
{:.no-indent}

[^1]:
    I must apologize to anyone who takes me very seriously as a developer or
    source of information, as this name does refer to public sex or
    exhibitionism. In my defense, I do have a podcast where my girlfriend and I
    review hentai, so this type of thing should be somewhat expected.

As a scraper, the functionality is limited to read-only routes, which is fine
for my purposes here. Its rate limits (60 requests/min, 3 requests/second) and
default 24 hour TTL caching are fine as well. The only potential need for more
frequently updated date, such as user anime lists, would be for prioritizing
results which is such an abstraction that quick updates wouldn't necessarily be
a huge factor.

Given the needs of this project, the primary concern will be with character and
people routes, with some consideration given to available routes for anime which
may give lists of relevant characters. In that regard, Jikan has the following
endpoints available:

| Method                       | Endpoint                      |
| ---------------------------- | ----------------------------- |
| [getCharacterById][6]        | `GET /characters/{id}`        |
| [getCharacterVoiceActors][7] | `GET /characters/{id}/voices` |
| [getCharactersSearch][8]     | `GET /characters`             |
| [getPersonById][9]           | `GET /people/{id}`            |
| [getPersonVoices][10]        | `GET /people/{id}/voices`     |
| [getPeopleSearch][11]        | `GET /people`                 |

This list is severely abbreviated as a number of additional routes are available
to retrieve specific data per entity similar to the `/voices` routes, such as
`/anime` or `/pictures`.
{:.no-indent}

Implementing calls to these endpoints is simplified quite a bit by the extensive
availability of wrappers for the API in various languages. The [list of
wrappers][12] given in the GitHub repository has separate categories for
JavaScript, Node.js, and TypeScript, which is somewhat interesting. Among the
Node.js wrappers, I had started this project using [jikan-node][13], but since
the deprecation of Jikan v3 which that was built on I switched to
[Jikan4JS][14].

I will note that since I am using TypeScript for this project, one might
consider using a TypeScript wrapper, but both of the listed wrappers are
deprecated as well. More curiously, Jikan4JS is _written_ in TypeScript, but it
doesn't export any interfaces, so that doesn't matter.[^2]
{:.no-indent}

[^2]:
    I couldn't even steal their interface code for implementing front-end API
    calls (which would be receiving JSON more or less directly from the wrapper)
    as their source code just doesn't have any, leading me to write my own based
    entirely off their own [documentation][15]!

Now, why can't I use this? The string search leaves a lot to be desired. If I'm
trying to find Madoka Kaname, then the search string "Madoka Kaname" works
perfectly. A close substring will work as well, such as "Madoka Kanam;" however,
something like "Madoka Kan" will result in keyword matches only, giving results
for "Madoka" and "Kan." This outcome is curious, as using the search on
MyAnimeList's site at `/search/all?q=` will return Madoka Kaname as the first
result for the string "Madoka Kan."
{:.no-indent}

Pushing this test further, if I were to misspell the search string and use
"Madoka Kanamw," all of the results are purely from the keyword "Madoka." Again,
MAL itself handles string similarity issues like this decently, but Jikan is
absolutely useless here. So, maybe I should just use MAL's _official_ API?
{:.no-indent}

### I-2. MyAnimeList
{:#i-2}

The [Official MyAnimeList API][3] is currently in open beta for its second
version. Usage requires registering via an [API panel][16] and signing off on
the [API License and Developer Agreement][17]. This is an HTTP API available at
the URL <https://api.myanimelist.net/v2>. As opposed to previous versions,
public API endpoints [can be queried without user authentication][18] by putting
the developer's Client ID in the `X-MAL-CLIENT-ID` header! Such a system is
necessary due to both the registration requirement and the availability of OAuth
2.0 tokens through the API, the documentation for which can be found [here][19].

OAuth is one of the bigger reasons why an official API might be preferable to an
unofficial one. If you're building an application that will heavily integrate
and build off of MyAnimeList, then the ability to connect the services via such
a system is great. When comparing to something like Jikan, which uses page
scraping to acquire its data, then even with caching optimizations there could
be a significant improvement in both speed and accuracy. Given that my current
implementation takes something on the order of hundreds to thousands of
milliseconds to process a query, this is an important consideration.

Let's talk about coverage then, per the ["Getting started with the API"
guide][20] the API can retrieve information about an anime, a manga, general and
seasonal rankings, and the authenticated user. It can also update user lists and
read forum topics. What it cannot do is retrieve news and articles, post
comments on the forums, send private messages, and (most importantly) search for
characters or people!

Basically, for the purporses of this project, the official API is currently
useless. Moving on.
{:.no-indent}

### I-3. Anime Characters Database
{:#i-3}

Let's just put MyAnimeList aside and look at some other databases' APIs; after
all, there isn't that much of a reason to rely on MAL as the primary information
source here. The [Anime Characters Database][21] (ACDB) describes itself as "the
visual search engine for all animated characters," which does make it seem like
an obvious choice when it comes to searching for anime characters. It does have
an API, the documentation for which is... probably somewhere. On the [ACDB
Wiki][22], there is a [page about accessing the API][23], which describes a
restriction on the `HTTP_USER_AGENT` header for requests to weed out DDoS
threats as well as a rate limit of one request per second.[^3] This then links
to what appears to be [an index of API endpoints][24], which are as follows:

[^3]:
    Technically, this is not strictly enforced according to the article, acting
    more as a code of conduct. The listed `nginx.conf` rates are 5r/s and 90r/s
    for the "one" and "fast" zone respectively. These technical details are,
    however, not necessary for implementation, but the transparency is
    appreciated.

| Resource               | Endpoint                         |
| ---------------------- | -------------------------------- |
| Character information  | `GET ?character_id=NUMERIC`      |
| Characters search      | `GET ?character_q=STRING`        |
| Characters by Birthday | `GET ?month=NUMERIC&day=NUMERIC` |
| Anime information      | `GET ?anime_id=NUMERIC`          |
| Anime search           | `GET ?anime_q=STRING`            |
| Quotes                 | `GET ?character_quotes=NUMERIC`  |
| Wikipedia links[^4]    | `GET ?title_wiki_links`          |

[^4]:
    It's not really worth discussing in the main text of this article, but this
    endpoint is literally just a JSON file describing the appropriate Wikipedia
    page for every anime listed in the database, sorted by id. Weird.

The lack of documentation for this API is, frankly, annoying. So I'll just
describe what the `?character_q` endpoint returns a bit here:
{:.no-indent}

```typescript
interface SearchResults {
  search_term: String;
  search_results: [CharacterResult];
}
interface CharacterResult {
  anime_id: Number;
  anime_name: String;
  anime_image: String;
  character_image: String;
  id: Number;
  gender: String;
  name: String;
  desc: String;
}
```

As you can see, this just returns characters who match the query string, with
some display information such as `character_image` and `desc` and the associated
anime. Not super useful, but what if we take this `id` to query the
`?character_id` endpoint? We'd get something like this:
{:.no-indent}

```typescript
interface Character {
  id: Number;
  anime_id: Number;
  anime_image: String;
  character_image: String;
  origin: String;
  gender: String;
  name: String;
  desc: String;
}
```

This is literally all the same information! With one minor change: `anime_name`
has been renamed to `origin`. Not great! However, if the search itself is good,
then I can at least use that to cross-reference with other databases to get more
information.
{:.no-indent}

Let's do some tests like I did with Jikan. "Madoka" gives a list of every
character who's name matches the keyword. The ordering of these is unclear, but
Madoka Kaname is about halfway down the returned list of 100 characters, whereas
"Madoka" from "R\*pe Has Been Legalized~!!!" is sixth. The close substring
"Madoka Kanam" returns just Madoka Kaname; the less close "Madoka Kan" returns
Madoka Kaname and Madoka Kanzaki. These are both good results. The misspelled
"Madoka Kanamw" returns a page that just says `-1`... cool, cool.

Overall, this is a huge disappointment. Presumably, this JSON REST API is just a
stub of features cobbled together so that they have such an API.

If I was to dig into the site, then I could find much more fun stuff. For
instance, the [wiki page for search tools][25] lists a [rapid search][26] not
even shown on the [site menu][27]. Diggin through the page source on this, I can
find the AJAX call to a separate [PHP script][28] that powers this. The returns
on this are all HTML, of course, but the results are still an improvement over
the API endpoint; namely, they are ordered more intuitively. Of course, this
also has issues with typos and string distance in general, but still!
{:.no-indent}

What really sucks about this is that amount of information that the API neglects
to convey. The character resource in the ACDB is so much more expansive, and I'd
love to be able to access all of that! There's something like 1440 different
character tags! That's _on top of_ the built-in character detail fields like eye
color, hair color, hair length, age, and if they have animal ears; plus some
fields only moderators can input like the character's role or fucking hair color
highlights. Then... THEN! There's the extra details: birthday, height, blood
type, bust, waist, hip, weight, nationality, et cetera. Honestly, now I'm
wondering if there's a third-party page scraper to get all this.[^5]
{:.no-indent}

[^5]: There is not.

### I-4. AniDB
{:#i-4}

[AniDB][29] is, per their [about page][30], a "non-profit anime database that is
open freely to the public." The three objectives of the database are to 1) store
information on anime, 2) allow users to maintain lists of anime they have or
haven't seen, and 3) store information relating to files. That last point is
quite unique, hashes and audio/video information for all the different files
associated with any given anime and its episodes are all stored there, it's
pretty cool. Unlike MAL and ACDB, AniDB has three different official APIs, which
I'll have to go over individually!

Before any of that, though, they also have the [data dump][31]. This is a daily
updated dump of all the anime titles in the database, which is basically a free
cache handout. It could be quite useful for anime searching, but that doesn't
help with the task at hand, sadly.
{:.no-indent}

#### I-4.1 HTTP API
{:#i-4-1}

The [wiki page on the APIs][32] refers to the HTTP API as "only interesting for
people interested in non-file/episode related information for a specific anime."
This doesn't necessarily exclude my project, but I'll have to read further into
the docs to really garner an opinion there. It does require [registration][33]
of the client making the requests; not a huge deal, but it's something to
consider.
{:.no-indent}

Digging into the [documentation][34], I'm getting a bit of a general overview
here. Responses on this API are UTF8 encoded and gzip compressed XML files, not
the now typical JSON responses. Heavy caching is recommended, multiple requests
for large files and flooding requests in general can lead to a ban, rates are
limited to 2r/s. For client verification, a couple URL parameters are also
required, namely `client={string}`, `clientver={integer}`, and
`protover={integer}`; the first couple there would be given during registration,
the last is an abbreviation of "protocol version" and can only be `1` for now.

So, with the base URL of `http://api.anidb.net:9001/httpapi`, what endpoints are
even available? Well, uhh, it's not great! They weren't lying when saying it's
really only interesting for specific anime.

| Resource                            | Endpoint                            |
| ----------------------------------- | ----------------------------------- |
| [Anime by AniDB Anime ID (AID)][35] | `GET ?request=anime&aid={integer}`  |
| [Random Recommendation][36]         | `GET ?request=randomrecommendation` |
| [Random Similar][37]                | `GET ?request=randomsimilar`        |
| [Hot Anime][38]                     | `GET ?request=hotanime`             |
| [Main (combined randoms & hot)][39] | `GET ?request=main`                 |

For something like searching for anime, they recommend just using the data dump.
Basically, this doesn't give much information. Well, it does return a lot of
data if you're using the `?request=anime` endpoint, but it's not very useful for
my purposes. I'm not going to dig any further into this one, it's great for
pulling in a bunch of metadata for a media server, though!
{:.no-indent}

#### I-4.2 UDP API
{:#i-4-2}

The UDP API is, actually, their [recommended][40] first look into their APIs.
It's public and provides read/write functionality. The [documentation][41] gives
a rate limit of one request every two seconds, or no more than one request every
four seconds for an arbitrary "extended amount of time." Registration is also
necessary here, but it also has to be done with [another form][42] for API
Clients?
{:.no-indent}

This is, of course, all UDP stuff, so there's a lot of tables of integers
indicating different responses and requests. I'm not going to mirror that all
here, I'm probably not going to use this. Not that I'm _scared_ by UDP... I'm
not scared. Look, here, uhh, have a list of data commands I _could_ use:

- `ANIME` Retrieve Anime Data
- `ANIMEDESC` Retrieve Anime Description
- `CHARACTER` Get Character Information
- `CREATOR` Get Creator Information

Now consider, with the rate limit, how long would it take to find the VA for a
character if you only know the anime they are in? At _minimum_ 6 seconds, that's
if you check the time deltas or have a separate library ensure that requests are
sent as quickly as possible. That's not considering the long term slowdown to
once every four seconds, making this a 12 second request. I won't stand for
this, it would all be cut out and replaced down the line if I ever wanted to
optimize it. I'd have to cache the entire database to lower that time, and the
UDP API can't really be used for that.
{:.no-indent}

#### I-4.3 TCP API
{:#i-4-3}

Finally, there's the TCP API. Likely, this would be the best option for doing
these sort of high resource count operations (searching characters and such),
but... about all the information given on it is in the [API lists page][43]:
{:.no-indent}

> _Access to the TCP API is only provided on request and with restrictions.
> Please contact EXP or Der Idiot on AniDB for additional information. Note that
> if you consider developing a TCP Client you will have to put up with in memory
> en- and decryption of data streams and no data is ever to be allowed to put
> unencrypted on HDD._

There's no documentation, it requires talking to people, it sounds like a lot of
work! I don't know if any of that would pay off, so I can't use this! I can't
use any of the AniDB APIs, really[^6]... moving on then!
{:.no-indent}

[^6]:
    I should note, that same API page has an important section on screen
    scraping. This is important because it mentions that they may be open to
    expanding resource availability upon request. Of course, that means more
    talking to people! I may consider this option in the future.

### I-5. Anime News Network
{:#i-5}

[Anime News Network][44] is a news site for anime with its own
[encyclopedia][45] of anime and manga for supplementary information. That
encyclopedia has [an API][46]! It's an HTTP API with XML responses, no
registration needed. There's two base URLs, one for reports and [one for
anime/manga details][47] (the one that I actually care about). It's also rate
limited to 1r/s... that's okay, there's options for bundling requests to
something like five requests every five seconds as well. There's basically three
endpoints on this, but you can mess with it a bit:

| Resource           | Endpoint                   |
| ------------------ | -------------------------- |
| Anime              | `GET ?anime={id}`          |
| Anime(s)           | `GET ?anime={id}/{id}/...` |
| Anime search       | `GET ?anime=~{string}`     |
| Manga              | `GET ?manga={id}`          |
| Manga(s)           | `GET ?manga={id}/{id}/...` |
| Manga search       | `GET ?manga=~{string}`     |
| Anime/Manga        | `GET ?title={id}`          |
| Anime/Manga(s)     | `GET ?title={id}/{id}/...` |
| Anime/Manga search | `GET ?title=~{string}`     |

Any of these paramaters can be specified more than once for batching as well,
limited to 50 titles at once. The `~{string}` search parameter only matches
primary names, not alternative names, which is fine. The data actually returned
by all this is pretty cool, all the stuff you'd expect from an encyclopedia
article. It's neat, a good reference for metadata like AniDB, but would require
basically caching everything to do a character search. Moving on!
{:.no-indent}

### I-6. AniList
{:#i-6}

I'm going to be honest here, I almost completely forgot AniList exists. I
greatly regret this at the moment. [AniList][48] is another anime database and
user list service, like MAL and AniDB. It has anime, manga, and manhwa[^7],
including information about characters and VAs. Everything you'd expect![^8]
They have an official API which, get this, uses fucking [GraphQL][50]! That
means I'd probably have to use a library for building GraphQL queries, but
that's a helluvalot better than the wrappers and scrapers (and wrappers for
scrapers) I've seen thus far!

[^7]: [Manhwa][49] (만화) is the Korean equivalent to "manga."
[^8]:
    Unless you were expecting information about hentai, like both MAL and AniDB
    have... oof. Not that it really matters _much_ here.

The [documentation][51] goes over some licensing which... basically if my
project makes more than $150/mo. I'll have to apply for a commercial license.
Whatever, I'm not planning on monetizing this project ever. It also touches on
the whole "don't use this to copy our database or make a competing product"
thing, but the section on rate limiting is on a whole [separate page][52]. The
limit is \[drumroll\] 90 requests per minute, _and_ they accept applications for
increased limits per IP address! This is comparably amazing... what days are
these that I am excited over ~670ms delays. Actually, I'm right to not care,
because with GraphQL I can _probably_ avoid requiring multiple API calls in a
function.

I'd like to verify this possibility, so I'm going through the [documentation
explorer][53] (not my preferred format for documentation) and testing it with
the [GraphiQL][54]. For now, just testing the character search itself:
{:.no-indent}

<table><thead><td>Query</td><td>Response</td></thead>
<tr><td markdown="block" style="width:50%">
```
{
  Character(search: "madoka"){
    name {
      full
    }
  }
}
```
</td><td markdown="block">
```json
{
  "data": {
    "Character": {
      "name": {
        "full": "Madoka Kaname"
      }
    }
  }
}
```
</td></tr>
</table>

I think I've got a basic handle on the syntax here, never really used GraphQL
before! But I ran it through my typical battery of searches. The substring
searches all did fine; more or less to be expected at this point. Then, I tried
the typo search, which went like this:
{:.no-indent}

<table>
<tr><td markdown="block" style="width:50%">
```
{
  Character(search: "madoka kanamw"){
    name {
      full
    }
  }
}
```
</td><td markdown="block">
```json
{
  "errors": [
    {
      "message": "Not Found.",
      "status": 404,
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ]
    }
  ],
  "data": {
    "Character": null
  }
}
```
</td></tr>
</table>

And with that, it performs about as well as any of the other searches. Nice
error result, though! However, this is only returning _one result_ and it's the
one I want! So it's doing better than everyone else there, it can get a list of
results, too:
{:.no-indent}

<table>
<tr><td markdown="block" style="width:50%">
```
{
  Page {
    characters(search: "madoka"){
      name {
        full
      }
    }
  }
}
```
</td><td markdown="block">
```json
{
  "data": {
    "Page": {
      "characters": [
        {
          "name": {
            "full": "Madoka Kaname"
          }
        } ...
```
</td></tr>
</table>

The important question at this point, ignoring that it doesn't perform much
better on user error, is how can I get the VAs? Well, AniList uses
[connections][55] for one-to-many and many-to-many relations between resources,
and "edges" show that connection on a given resource. So, if I have a character,
that character has media connections and within those are the edges which list
things like their role in that media. That's good and all but how do I get it to
say "Character A is played by Person B in Media C?" Looking at the [source
code][56] for [chi 歳][57], it seems to be possible, despite all the
`voiceActors` fields being `null` in GraphQL. Regardless, looking possible is
good enough for me! I'm just going to run with this API for now.

## II. _API Setup_
{:#ii}

This whole project was already a sort of cobbled together MEAN stack,[^9] I had
considered some sort of mono-repo framework, such as Nx, but I didn't want to
complicate things _too_ much for myself and decided to save that for future
projects. The important part is that I already have an Express.js server set up
for this project.
{:.dropcap}

[^9]:
    More like an EAN stack, I haven't bothered to actually hook in MongoDB with
    Mongoose. I kind of figured I won't need it for a while... I need to do a
    lot of caching and stuff, eventually.

The question, then, is what will it take to switch my current back-end to
something more conducive to GraphQL queries. Since I'm already going to be 
making GraphQL queries to AniList's API, I might as well use GraphQL for my
end-to-end, right? The answer is "yes."
{:.no-indent}

### II-1. Picking a GraphQL Library
{:#ii-1}

Given that I've decided to use [GraphQL][50] to access a third-party API and to
handle my own API, I need some sort of library that can make and handle GraphQL
queries on the back-end and one to make GraphQL queries on the front-end. Back
to shopping around for my tech stack then!

GraphQL maintains [a list][58] of tools for working with the language on their
site, which is a huge help. My back-end will be in JavaScript and my front-end
in TypeScript, so I should look for tools in those languages... however,
TypeScript is frequently not distinguished from JavaScript for lists like this,
since they can more or less be interchangeable.
{:.no-indent}

I'll spare you the details of this search, there's not much to really consider.
I prefer a client with support for Angular, as my front-end is built in
Angular.[^10] I also prefer the client and server libraries to be as similarly
formatted as possible, using the same patterns throughout the code base is
always a good idea. With these first preference alone, almost all of the client
libraries are ommitted; not surprising, GraphQL and React are both Facebook
inventions, so it's expected more work is put into integrating them. With the
second preference, I'm all but left with [Apollo][59].
{:.no-indent}

[^10]:
    This is merely a preference, because no support for a front-end framework at
    all is just fine. All that would mean is extra work for integration.
    However, being React exclusive would be bad.

Congratulations, Apollo! You won! The [pricing page][60] on their site made me
do a double take, why would they have that?[^11] Well, they provide more than
just the libraries I was looking for, they also have development tools (such as
Chrome DevTools and a VS Code extension) and cloud services.

[^11]:
    The bigger shock on their website is actually that the first company in the
    typical list of users is fucking Peloton. I get that it's a big meme right
    now, but all I can think of is some cringe marketing tagling like "when you
    think of data schema unification, think Peloton!"

These cloud services, collectively called "[Apollo Studio][61]" are broken into
three categories: develop, deliver, and observe. This all sounds great for
enterprise solutions using GraphQL schemas, but it's well outside the scope of
my little project here. Cool stuff to keep in mind if I ever do need to, like,
build something bigger?
{:.no-indent}

### II-2. Apollo Client on Back-End
{:#ii-2}

You ever feel like tech stacks are getting bloated by marketing? Like, it's not
that things are really that much more complicated than they used to be, just
that every library is a "stack layer." Like, GraphQL is basically just adding
more schemas into your model layer for your controllers and/or views to use,
something that handles that integration isn't really a new layer. Anyway, Apollo
has a lot of neat client stuff for integrations with [UI frameworks][63] and
[webcomponents][62], but I just want something to make hooking into AniList
easier in my back-end code.

From what I can tell, in order to not use the integrations with React, since the
[client documentation][64] is all about React, all I need to do is not use them.
That sounds tautological, I mean that it doesn't seem like it _needs_ React in
order to function on its own. I'll have to see if that's really the case by just
trying it out.

#### II-2.1 Installing Apollo Client
{:#ii-2-1}

I might actually end up committing some code to the project now! Wow! Ok, so per
the [getting started][65] guide, I'm going to need to install some dependencies
here:
{:.no-indent}

```
npm i graphql @apollo/client
```

This command was met with a chorus of applause... by applause I mean
"unsupported engine" errors, because Node v16.3.0 and NPM 8.9.0 doesn't match 
Angluar pacakges' demands of Node `^12.30.0 || 14.15.0 || >=16.10.0` and NPM
`^6.22.0 || ^7.5.6 || >=8.0.0` somehow.[^12] I do not care, to be honest, just 
going to [commit this][66] as is.
{:.no-indent}

[^12]: Really says a lot about Una that I didn't realize 10 is bigger than 3.

Next, the guide says to import parts of the library. I'm not going to use their
exact code, because it includes the `ApolloProvider` and `useQuery` which are
for React. Bad tutorial. For now, I'm just going to do this in
`/controllers/char`, because testing reasons? Anyway, here's the imports:

```javascript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
```

With everything imported, I can create a client to make the queries, which looks
something like this for now:
{:.no-indent}

```javascript
const aniList = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});
```

Just testing this, I immediately get the classic named export not found error!
Fan-fucking-tastic! Apparently it's CommonJS, so not using it in React is an
issue... why!? There is an [open feature request][67] for updating from CJS to
ESM, but I'll need to use a temporary fix "for now":
{:.no-indent}

```javascript
import apollo from '@apollo/client';
const { ApolloClient, InMemoryCache, gql } = apollo;
```

With this little fix, I'm no longer getting named export errors! I'm getting
`Error: Cannot find module 'react'` which is making me think this was all a
stupid fucking waste of time. Ok, there's a [StackOverflow answer][68] about
this, I just change the import location from `@apollo/client` to
`@apollo/client/core`:
{:.no-indent}

```javascript
import apollo from '@apollo/client/core';
```

Which removes the React ommission error and _replaces it_ with
`Error [ERR_UNSUPPORTED_DIR_IMPORT]`! Hurray! This would be so much better if
they just had documentation for literally anything other than React integration!
Anyway, this error is saying I can't import the `@apollo/client/core` directory,
instead I should import the file `@apollo/client/core/index.js`. Which means I
can also return to my original ESM import code, but with a different source.
Doing that yields yet another error, because I hadn't read that whole
StackOverflow answer:
{:.no-indent}

> Invariant Violation: "fetch" has not been found globally and no fetcher has
> been configured. To fix this, install a fetch package (like `cross-fetch`),
> instantiate the fetcher, and pass it into your `HttpLink` constructor.

This basically says I need to use `cross-fetch` and an `HttpLink` rather than
the basic `uri` option. Just a little extra code and now my import and
declaration look like this:
{:.no-indent}

```javascript
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client/core/index.js';
import fetch from 'cross-fetch';
const aniList = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.anilist.co',
    fetch,
  }),
  cache: new InMemoryCache(),
});
```

#### II-2.2 Querying AniList
{:#ii-2-2}

Finally, writing the actual query for the character search, replacing the
previous Jikan implementation! This is definitely a temporary thing, if I'm
going to make my API use GraphQL then this will all have to be replaced again!
This is another hitting my head against the wall sort of thing, though.
{:.no-indent}

Basically, I tried calling `aniList.query()` with the test queries I'd been
using, and I'm getting some confusing `400` errors with not much help in them.
[Apparently][69], this could be because Apollo's errors aren't real `Error`
objects? All my attempts to debug it blind aren't working, so let's try some
better logging! This is so medicore, but:
{:.no-indent}

```javascript
.catch((err) => {
  if (err instanceof ApolloError)
    console.log(err?.networkError.result.errors);
  next(err);
}),
```

With that, I get the epic and cool error message:
`Unknown argument "asHTML" on field "description" of type "Character". Did you mean "asHtml"?`
Excellent, excellent.
{:.no-indent}

This is the part where I complain about having to manually restart the server every time I make a change, I should fix that. I tried using `nodemon` but it
complains about Angualr CLI issues and crashes... I could fix those issues too! 
I probably should! It wants me to update Node.js so:

```
sudo npm cache clean -f
sudo npm i -g n
sudo n stable
```

Ah, now if I do `nodemon npm run server` it runs `ng serve npm run server`.
Should've noticed that earlier. It's using the `ng` scripts, I want it to use
the `server` script in my `package.json`, but `nodemon server` runs
`node server.js`! Guess I'll just manually do `nodemon ./bin/www.js`? That
works!
{:.no-indent}

Back on task, here's the very cool controller code:

```javascript
export default {
  search: (req, res, next) =>
    aniList
      .query({
        query: gql`
          query ($search: String) {
            Page {
              characters(search: $search) {
                id
                name {
                  full
                  native
                }
                image {
                  large
                  medium
                }
                description(asHtml: true)
              }
            }
          }
        `,
        variables: {
          search: req.params.name,
        },
      })
      .then(results => res.json(results))
      .catch(err => {
        if (err instanceof ApolloError)
          console.log(err?.networkError.result.errors);
        next(err);
      }),
};
```

I like the part where it says `query({ query: query`. This is a joke, I hate it,
but it's what I [pushed][77].[^13] I need to find a way to load the queries in
from a separate file at some point. Is that point now?

[^13]:
    Did you know that you can shorten the links to GitHub commits by cutting the
    hash down to the first seven characters? It's pretty neat and means none of
    the link definitions in the Markdown for this blog have to be more than 80
    characters.

#### II-2.3 Loading `.graphql` Files
{:#ii-2-3}

Apparently, this [can be done][70] using [GraphQL Tools][71], a [Babel
plugin][72], or a [WebPack loader][73]. The WebPack loader might be a good
consideration for front-end stuff, but not so much the back-end. It's really
tempting to keep that nice `import <something> from '<file>.graphql'` syntax,
ugh. Nonetheless, GraphQL tools it is!
{:.no-indent}

The [documentation][74] for GraphQL Tools is a surprising pain in the ass,
giving me a new appreciation for starting documentation with a `npm i` command.
Let's just roll with [`@graphql-tools/load`][75] and
[`@graphql-tools/graphql-file-loader`][76] for now:

```
npm i @graphql-tools/load @graphql-tools/graphql-file-loader
```

With that [installed][78], I can move any queries to `/queries/*.graphql`.[^14]
Then I just need to import the necessary parts from GraphQL Tools like so:
{:.no-indent}

[^14]: Going to add the [GraphQL extension][79] into my VS Code for this.

```javascript
import { loadDocuments } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
```

Then with some careful checking of the [documentation][80], I can write the
function to load this into the controller:
{:.no-indent}

```javascript
const queries = await loadDocuments('./queries/characterSearch.graphql', {
  loaders: [new GraphQLFileLoader()],
});
```

The documentation did say that this can be used to load in operations and
fragments, but the type on that file location is `UnnormalizedTypeDefPointer`.
Not pulling my hair out over that, I promise. I do need to pick apart the
[`Promise<Source[]>`][81] return type, though. Just trying something like:

```javascript
aniList.query({
  query: queries[0].schema,
  variables: {
    search: req.params.name,
  },
});
```

Gives me a little error: "Invariant Violation: query option is required. You
must specify your GraphQL document in the query option." Which is not fantastic.
Checking [more documentation][82] only helped because it mentioned the return
type is actually `DocumentSource[]`, so I should do this:
{:.no-indent}

```javascript
aniList.query({
  query: queries[0].document,
  variables: {
    search: req.params.name,
  },
});
```

Hurray! Now let's not think about how sketchy that `queries[0]` access is and
just [commit it][83]!
{:.no-indent}


## III. _Client-Side Parsing_
{:#iii}

I considered moving directly into implementing the Apollo Server from here;
however, the current functionality of the back-end is basically at a point where
it could all be handled on the front-end. All I'm doing is making a query on the
AniList API and returning the results, that could be done in the Angular code.
So, until I start getting into heavier processing and storing of data, I won't
be expanding on the infrastructure of the API.
{:.dropcap}

That being said, the front-end I had thrown together won't be able to handle the
server's current response. What it expects is something of type `Character[]`,
which is defined by this interface:

```typescript
interface Character {
  about?: string;
  favorites: number;
  id: number;
  image: ContentImage;
  name: string;
  nameKanji?: string;
  nicknames: Array<string>;
  url: string;
}
```

I would have simply imported the type from the Jikan4.js library, but, as I
certainly mentioned, it doesn't export or even define such interfaces. Instead,
this was written based on the [documentation][84] and [source][85] of the
wrapper.
{:.no-indent}

Starting from the top, the character service contains a method for calling the
getting search results from the API:

```typescript
class CharService {
  // ...
  search(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}search/${name}`);
  }
}
```

This gets called by an input handler on a form in the index component to update
a `searchResults` property:
{:.no-indent}

```typescript
class IndexComponent implements OnInit {
  searchResults: Character[] | undefined;
  // ...
  characterNameInput(): void {
    this.characterService
      .search(this.characterSelect.value.characterName)
      .subscribe(list => (this.searchResults = list));
  }
}
```

Which in turn updates the `<app-characters>` to a new collection of
`<app-character>` components:
{:.no-indent}

{% raw %}
```markup
<mat-card>
  <mat-card-header>
    <mat-card-subtitle>{{ character?.nameKanji }}</mat-card-subtitle>
    <mat-card-title>{{ character?.name }}</mat-card-title>
    <img mat-card-avatar src="{{ character?.image?.jpg?.medium }}" />
  </mat-card-header>
  <mat-card-content>
    <p [innerHTML]="character?.about"></p>
  </mat-card-content>
</mat-card>
```
{% endraw %}

And that's about everything that's specifically dependent on the structure of
the API's response.
{:.no-indent}

### III-1. Type Updates
{:#iii-1}

So, to make this new API work, I'm going to first need to write new interfaces.
I do wonder if there's a way to make a GraphQL scheme and an interface at the
same time, but that's a future consideration... lots of those building up. What
I have here is GraphQL responses, which will return some `Page` object that, in
this case, holds an array of `Character` objects.

Modelling the GraphQL responses feels like a temporary sort of thing, since I'll
eventually be adding Apollo to the front-end and that might handle the typing?
Whatever, I'm thinking it's something like this:

```typescript
export interface GraphQLErrorLocation {
  line: number;
  column: number;
}
export interface GraphQLError {
  message: string;
  locations: GraphQLErrorLocation[];
}
export interface GraphQLResponse<T> {
  data?: T;
  error?: GraphQLError;
  loading: boolean;
  networkStatus: number;
}
```

Using a generic for the response itself but then adding in a little bit of the
error stuff? Probably possible to do the `GraphQLErrorLocation` thing inline?
It's fine as is, I think. I would put all the interfaces in different files, but
at this point I just want this whole thing to be over with! This is just copying
over all the available fields from the GraphQL docs for AniList into an
interface with basically everything set to optional (`| undefined` technically),
which I'm not going to show here! It's a lot, I wasted a lot of time on this.
Sadly, I don't feel like bothering with making the `Page` type some sort of
generic to do something like `Page<Character>`, too much work for something this
temporary. Updated types on the `search` method make it look like this:
{:.no-indent}

```typescript
import { Page } from '../interfaces/AniList';
export class CharService {
  // ...
  search(name: string): Observable<GraphQLResponse<Page>> {
    return this.http.get<GraphQLResponse<Page>>(
      `${this.baseUrl}search/${name}`
    );
  }
}
```

Yeah... this is also why a generic for `Page` would suck. I do not want to put
something like `Observable<GraphQLResponse<Page<Character>>>` in my code! But
then I also have to do additional parsing to get the `Page` from the `data`
field of the `GraphQLResponse`. Not too much work, just doing
`this.searchResults = list.data.characters` instead of `= list` in the 
component.
{:.no-indent}

### III-2. Updating Components
{:#iii-2}

Updating the types in the components was just a basic swap from the old
`Character` interface to the new one, thanks to all the upstream work. I should
probably add some error handling into that at some point? In case it's a
`GraphQLError` kind of response? For now I just need to go thru and rename
fields! Since all the `characters` component needed was a little type update,
this is all going on in `character`. Specifically, after updating the type in
`character.component.ts` I need to fix up `character.component.html`'s
templating.

{% raw %}
```markup
<mat-card>
  <mat-card-header>
    <mat-card-subtitle>{{ character?.name?.native }}</mat-card-subtitle>
    <mat-card-title>{{ character?.name?.full }}</mat-card-title>
    <img mat-card-avatar src="{{ character?.image?.medium }}" />
  </mat-card-header>
  <mat-card-content>
    <p [innerHTML]="character?.description"></p>
  </mat-card-content>
</mat-card>
```
{% endraw %}

And that's it! Just kidding! I haven't tested this yet! But I will [push
it][86], before trying to test it. Now to run `ng serve` and hope I do not get
any errors. Which I did not, so I can open up `https://localhost:4200` and try
out the search bar... no errors, but nothing happened at all. Huh, so, logging
it, I can see a little oopsie! It's not `data: Page`, it's `data: {Page: Page}`!
Absurd, really.
{:.no-indent}

My temporary solution to this is to update the interface for the response to
this:

```typescript
export interface GraphQLResponse<T> {
  data?: { [key: string]: T };
  error?: GraphQLError;
  loading: boolean;
  networkStatus: number;
}
```

and then accessing the data with an annoyingly more complicated line:
{:.no-indent}

```typescript
list => (this.searchResults = list.data && list.data['Page']?.characters);
```

With that [committed][87] and the branch finally [pulled][88], everything is
back to how it was before I started all this updating! Hurray! I'll save all the
styling and such for the future, don't want to go into everything I've been
doing with [Angular Material][89] in this post, but could make another entry in
the future?
{:.no-indent}

## Notes

- footnotes
{:footnotes}

## Errata

July 6, 2025: Re-publish article with various typo fixes and addition of 
abbreviation definitions.
{:.citation}

[1]: https://jikan.moe/
[2]: https://myanimelist.net/
[3]: https://myanimelist.net/clubs.php?cid=13727
[4]: https://docs.api.jikan.moe/
[5]: https://jikan-me.github.io/jikan-docs/
[6]: https://docs.api.jikan.moe/#operation/getCharacterById
[7]: https://docs.api.jikan.moe/#operation/getCharacterVoiceActors
[8]: https://docs.api.jikan.moe/#operation/getCharactersSearch
[9]: https://docs.api.jikan.moe/#operation/getPersonById
[10]: https://docs.api.jikan.moe/#operation/getPersonVoices
[11]: https://docs.api.jikan.moe/#operation/getPeopleSearch
[12]: https://github.com/jikan-me/jikan-rest#wrappers
[13]: https://github.com/xy137/jikan-node
[14]: https://github.com/rizzzigit/jikan4.js
[15]: https://rizzzigit.github.io/jikan4.js/
[16]: https://myanimelist.net/apiconfig
[17]: https://myanimelist.net/static/apiagreement.html
[18]: https://myanimelist.net/forum/?topicid=1973077
[19]: https://myanimelist.net/apiconfig/references/authorization
[20]: https://myanimelist.net/forum/?topicid=1973141
[21]: https://www.animecharactersdatabase.com/
[22]: http://wiki.animecharactersdatabase.com/
[23]: http://wiki.animecharactersdatabase.com/index.php?title=API_Access
[24]: https://www.animecharactersdatabase.com/api_series_characters.php
[25]: http://wiki.animecharactersdatabase.com/index.php?title=Search_Tools
[26]: https://www.animecharactersdatabase.com/rapidsearch.php
[27]: https://www.animecharactersdatabase.com/sitemenu2.php#link-13
[28]: https://www.animecharactersdatabase.com/rapidsearch_ajax.php?s=
[29]: https://anidb.net/
[30]: https://wiki.anidb.net/AniDB:About
[31]: https://wiki.anidb.net/API#Anime_Titles
[32]: https://wiki.anidb.net/API#HTTP_API_(limited)
[33]: https://anidb.net/perl-bin/animedb.pl?show=client
[34]: https://wiki.anidb.net/HTTP_API_Definition
[35]: https://wiki.anidb.net/HTTP_API_Definition#Access
[36]: https://wiki.anidb.net/HTTP_API_Definition#Random_Recommendation
[37]: https://wiki.anidb.net/HTTP_API_Definition#Random_Similar
[38]: https://wiki.anidb.net/HTTP_API_Definition#Hot_Anime
[39]: https://wiki.anidb.net/HTTP_API_Definition#Main
[40]: https://wiki.anidb.net/API#UDP_API
[41]: https://wiki.anidb.net/UDP_API_Definition
[42]: https://anidb.net/software/add
[43]: https://wiki.anidb.net/API#TCP_API_(private)
[44]: https://www.animenewsnetwork.com/
[45]: https://www.animenewsnetwork.com/encyclopedia/
[46]: https://www.animenewsnetwork.com/encyclopedia/api.php
[47]: https://cdn.animenewsnetwork.com/encyclopedia/api.xml
[48]: https://anilist.co/
[49]: https://en.wikipedia.org/wiki/Manhwa
[50]: https://graphql.org/
[51]: https://anilist.gitbook.io/anilist-apiv2-docs/
[52]: https://anilist.gitbook.io/anilist-apiv2-docs/overview/rate-limiting
[53]: https://anilist.github.io/ApiV2-GraphQL-Docs/
[54]: https://anilist.co/graphiql
[55]: https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/connections
[56]: https://github.com/supreme-chocomint/chitose
[57]: https://supreme-chocomint.github.io/chitose/
[58]: https://graphql.org/code/
[59]: https://www.apollographql.com/
[60]: https://www.apollographql.com/pricing
[61]: https://www.apollographql.com/studio/develop/
[62]: https://apolloelements.dev/
[63]: https://www.apollographql.com/docs/react/integrations/
[64]: https://www.apollographql.com/docs/react/
[65]: https://www.apollographql.com/docs/react/get-started
[66]: https://github.com/una-ada/Aokan/commit/09461d4
[67]: https://github.com/apollographql/apollo-feature-requests/issues/287
[68]: https://stackoverflow.com/a/64569073
[69]: https://stackoverflow.com/a/61659443
[70]: https://stackoverflow.com/a/62292237
[71]: https://www.graphql-tools.com/
[72]: https://github.com/detrohutt/babel-plugin-import-graphql
[73]: https://github.com/apollographql/graphql-tag
[74]: https://www.graphql-tools.com/docs/introduction
[75]: https://www.npmjs.com/package/@graphql-tools/load
[76]: https://www.npmjs.com/package/@graphql-tools/graphql-file-loader
[77]: https://github.com/una-ada/Aokan/commit/f081269
[78]: https://github.com/una-ada/Aokan/commit/b4b46bd
[79]: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
[80]: https://www.graphql-tools.com/docs/api/modules/load_src
[81]: https://www.graphql-tools.com/docs/api/interfaces/utils_src.Source
[82]: https://www.graphql-tools.com/docs/documents-loading
[83]: https://github.com/una-ada/Aokan/commit/4b9c90d
[84]: https://rizzzigit.github.io/jikan4.js/classes/Character.html
[85]: https://github.com/rizzzigit/jikan4.js/blob/main/src/resource/character.ts
[86]: https://github.com/una-ada/Aokan/commit/185e41a
[87]: https://github.com/una-ada/Aokan/commit/33457c6
[88]: https://github.com/una-ada/Aokan/pull/10
[89]: https://material.angular.io/

*[ACDB]: Anime Character Database
*[REST API]: Representational State Transfer API
*[API]: Application Programming Interface
*[APIs]: Application Programming Interfaces
*[CJS]: CommonJS
*[CLI]: Command Line Interface
*[ESM]: ECMAScript Modules
*[HDD]: Hard Drive Disk
*[HTTP]: HyperText Transfer Protocol
*[ID]: Identifier
*[IP]: Internet Protocol
*[JSON]: JavaScript Object Notation
*[MAL]: MyAnimeList
*[MEAN]: MongoDB Express.js Angular Node.js
*[NPM]: Node.js Package Manager
*[PHP]: PHP Hypertext Preprocessor
*[TCP]: Transmission Control Protocol
*[TTL]: Time-to-live
*[UDP]: User Data Protocol
*[UI]: User Interface
*[URL]: Uniform Resource Locator
*[URLs]: Uniform Resource Locators
*[VA]: Voice Actor
*[VAs]: Voice Actors
*[XML]: Extensible Markup Language
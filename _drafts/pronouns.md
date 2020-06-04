---
author: una
description: >
    How does one talk without pronouns? Are pronouns not a necessary staple of
    language? When broken down to their fundamental function, what even are
    pronouns? Wouldn't, even if such an act were possible, the words become at
    the very least awkward?
layout: post
permalink: /implicitus
subtitle: English Without Pronouns
tags: >
    linguistics pronouns grammar topic-focus ontology philosophy anaphora
    binding gender declension inflection pronominal expletives epicene
title: Implicitus
---

<!-- Maybe one day I'll act like I care and add this to the stylesheet. -->
<style>
    thead.r1, col.c1 {
        background: #fff0f8;
    }
    thead.r1 th, table.t1 td {
        border: 1px solid #888;
        text-align: center;
        vertical-align: middle;
    }
    thead.r1 th {
        vertical-align: bottom !important;
    }
    html.dark thead.r1, html.dark col.c1 {
        background: #181818;
    }
</style>

- toc
{:toc}

## Preface

As with most of what I write, I have a bit of a vested interest in this topic,
perhaps even more so as this one has a bit less of an abstract relationship to
myself. Specifically, I've had a notable discomfort the past few years with
attempting to assert myself as "non-binary" and using "they/them" pronouns. I
don't really hold the entire concept there in contempt, but I'm not really
comfortable with catch-all categories, they give me this feeling of being
"other." I'm fine not being "normal," especially since I don't believe in such a
thing; on the other hand, if there is no "normal" then why is there an "other"?
Why not simply opt out? What this means in terms of gender as a whole is a topic
for another discussion, the relevance is what it means for pronouns.

My pronouns are "none," but what does that actually mean? Certainly, it's
immediately obvious that I'm fine using first person pronouns... for now. Give
me a few months and it'll all be inference and "Una this," "Una that," et
cetera. Second person pronouns are fine as well, I guess. However, third person
pronouns, in English especially, are a problem for me. I've stuck with
"they/them" for a while now[^1] simply because I do not really know how to tell
people not to use any pronouns. I can throw "no pronouns" in my bio, a few will
understand that here and there, but it's hard to assert around people who
struggle to even handle "they/them." I did _eventually_ do that, back in April,
during a bit of breakdown in which I essentially decided to just drop the act
and stop pretending I cared about being convenient for others. Human interaction
requires effort of both parties regardless, so why not assert who you really
are?

[^1]:   I've only mentioned the possibility of not doing so once or twice,
        mostly offhandedly, e.g. "I could do without having pronouns. Do not
        speak of me. Infer if you must," from "[Been a while...][1]" back in
        February. Actually, that might have been one of the only times, though I
        do recall once saying "wait, you really can do that?" or something to
        that effect on a Discord server much further back when I was still just
        like "well, if I'm not particularly comfortable with any pronouns, I'll
        just go with any/all."

>   Held myself back from too much for too long; if all desire keeps being
    locked away there'll be nothing left to feel. So, I'm, at the very
    least, admitting I don't care for "they/them" or any other pronouns.
    Don't use pronouns for me. If that's difficult, get over it. &mdash; Una

This is, of course, a nice statement and all, but it kind of neglects those who
might be well meaning but simply ill informed; also, just the concept of trying
to remove "parts of speech" from a language is an interesting exercise on its
own from a linguistics perspective. With that said, a bit of a discussion is in
order. Well, more like a lesson in grammar. I'll try to keep this pretty brief
and entertaining, reading about grammar for any period of time is generally
pretty boring, after all.

For the sake of consistency, all example sentences will use the same
characters. While the temptation exists to use the generic cast of characters
used in cryptography (Alice, Bob, Eve, etc.), it would be more fun and exemplary
of certain issues with the discussed linguistics to use our own less culturally
cemented characters. To that end, I'll be using a variety of gender neutral
names: Alex, Beau, Saša, and Yuki.

These characters will have various genders throughout the implied narrative and
in the end they all live together as a happy little polycule in an anarchist
commune built atop an abandoned industrial town in an undisclosed boreal forest.
This narrative will also serve to try to keep this whole article entertaining.
If you don't like linguistic discussions on their own, you can just think of
this as an annotated short story... though I cannot promise the story on its own
will be very good.

## I. Introduction to Pronouns

First off, it's important that everyone is on the same page regarding the basics
here. So, what exactly is a pronoun?

Simply put, pronouns are words used to replace nouns. In a generic case, the
pronoun is used in a spot one could otherwise have stated a noun. For example,
take the following statement:

$$
\text{Alex doesn't sleep at night, }\pmb{she}
\text{ just sits in bed and cries.}\tag1
$$

Here, "she" is acting in the place of restating "Alex;" alternatively, we could
say:

$$
\text{Alex doesn't sleep at night, }\pmb{Alex}
\text{ just sits in bed and cries.}\tag2
$$

This is equally valid, but has a significantly different tone to it, coming off
as emphatic and mocking. This is more or less foreshadowing a lot of issues we
will be running into as we discuss alternative grammar styles: connotative tone.
A lot of tone in language, despite what the "people don't talk face-to-face
anymore" crowd will try selling you, comes from word choice and sentence
structure. Vocal tone, while similarly expressive, primarily works in tandem
with this, while a dissonance between the two types adds a level of depth to
expression.

...

Personal pronouns are perhaps the most relevant among pronouns in general to the discussion at hand and so will be the primary focus in regards to examples of pronouns' functions. These are pronouns which refer to a grammatical person, which are typically[^2] divided into three categories: first, the speaker; second, the one spoken to; and third, separate from the previous two.

[^2]:   Some languages distinguish between proximate and obviative third
        persons, essentially a hierarchy of relevance to the topic (or
        "salience") where the former is more topical than the latter; the
        obviate third person is sometimes considered a "fourth person."

    Alternatively, "fourth person" could refer to generics, e.g. "one" in
    English. In other languages this may also be considered "zero person" as it
    leaves the referent open (i.e. the person is unspecified).

...

Here we have the so-called Standard English inventory of personal pronouns, a
more complete list can be found in [Supplement A][2]:

<br/>

<table class="t1">
    <colgroup>
        <col span="3" class="c1"/>
        <col span="5" style="width:16%;"/>
    </colgroup>
    <thead class="r1">
        <th colspan="3"></th>
        <th>Subject</th><th>Object</th>
        <th>Possessive</th><th>Independent Possessive</th>
        <th>Reflexive</th>
    </thead><tr>
        <td rowspan="2">First</td>
        <td colspan="2">Singular</td>
        <td>I</td><td>me</td>
        <td>my</td><td>mine</td>
        <td>myself</td>
    </tr><tr>
        <td colspan="2">Plural</td>
        <td>we</td><td>us</td>
        <td>our</td><td>ours</td>
        <td>ourselves</td>
    </tr><tr>
        <td colspan="3">Second</td>
        <td colspan="2">you</td>
        <td>your</td><td>yours</td>
        <td>yourself</td>
    </tr><tr>
        <td rowspan="5">Third</td>
        <td rowspan="4">Singular</td>
        <td>Epicene</td>
        <td>they</td><td>them</td>
        <td>their</td><td>theirs</td>
        <td>themselves, themself</td>
    </tr><tr>
        <td>Feminine</td>
        <td>she</td><td colspan="2">her</td>
        <td>hers</td>
        <td>herself</td>
    </tr><tr>
        <td>Masculine</td>
        <td>he</td><td>him</td>
        <td colspan="2">his</td>
        <td>himself</td>
    </tr><tr>
        <td>Neuter</td>
        <td colspan="2">it</td>
        <td colspan="2">its</td>
        <td>itself</td>
    </tr><tr>
        <td colspan="2">Plural</td>
        <td>they</td><td>them</td>
        <td>their</td><td>theirs</td>
        <td>themselves</td>
    </tr>
</table>

**TABLE 1.** Standard English pronoun inventory.

<br/>

...

We may also note the use of the term "epicene" in **TABLE 1** for the singular third person pronoun "they." To distinguish this from "gender neutral," we require a bit further explanation on what gender means in the context of grammar, specifically.

Gender is sycophancy. Epicenity is liberalism. Abolition is necessary.

Anaphora. Context, Antecedents, Binding

Demonstrative, Relative, Interrogative, Indefinite

Expletives. Like in "**it** is raining" (suck my dick, Chomsky).

Dummy pronouns? Do they count?

## II. Philosophical Considerations

This topic gets its own section. The other section is about the function of
pronouns in grammar and basic linguistics, this one is about the function in
culture.

<https://en.wikipedia.org/wiki/Charles_Sanders_Peirce>

<https://plato.stanford.edu/entries/peirce/>

<blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">
        "Nooo~! You can't just force interrogative pronouns to emulate their
        relative form regardless of context to act as third personal
        pronouns!!"" I hear you shouting already, but nonetheless, I start
        pulling indefinite pronouns out of my pockets.
    </p>&mdash; una (@unasareyou)
    <a href="https://twitter.com/unasareyou/status/1256702524733652993">
        May 2, 2020
    </a>
</blockquote>

<https://en.wikipedia.org/wiki/Spivak_pronoun>

## III. Canonical Solutions

Tip-toeing around using pronouns as much as possible. Like, wording statements
to avoid needing to say a pronoun... this can be kind of dehumanizing,
sometimes.

What if just not? Like, always use the full noun?
Existential clauses?

Breaking repetition by inflecting.

Saša -> Sa/Saš

Saša isn't feeling well, have you talked to Saš lately?

Sa drinks Sas Ovaltine.

## IV. Topic and Comment

East Asian languages, mostly.

Some linguists argue that Japanese pronouns are not grammatically pronouns. I
don't remember the source on this, and it's kind of prescriptivist?

Topic and comment. Topic-prominence. Etc.

## V. English Without Pronouns

Trying to make it sound natural. Or just giving up on that and forcing it? We'll
see how it goes, lol.

"He loves her." Like, undefined subjects and objects? Should they just be done
away with? Even tho they're so poetic or whatever?

Talking about the prospect of complete abolition here. Can we just not have any
pronouns in English?

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8">
</script>

## Footnotes

[1]:    https://anarchy.website/2020/02/07/update.html
[2]:    /supplements/pronouns

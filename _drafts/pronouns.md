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
names: $\text{Alex}$, $\text{Beau}$, $\text{Sa}\check{\text{s}}\text{ha}$, and
$\text{Yuki}$.

These characters will have various genders throughout the implied narrative and
in the end they all live together as a happy little polycule in an anarchist
commune built atop an abandoned industrial town in an undisclosed boreal forest.
This narrative will also serve to try to keep this whole article entertaining.
If you don't like linguistic discussions on their own, you can just think of
this as an annotated short story... though I cannot promise the story on its own
will be very good.

## I. _Introduction to Pronouns_

For the sake of having a common basis here, such that further discussion on
particular details goes smoother going forward, let's start with basic English
grammar. From there we can discuss the function of pronouns within said grammar before diving into the specifics of personal pronouns and their declension.

### I-1. English Grammar

Beginning with linguistic typology, specifically word order, as a means to define the general form of English sentences within the context of languages as a whole: the constituent word order for clauses in English is _Subject-Verb-Object_ (SVO). _Constituent_ here refers to words and phrases that perform a singular function within the grammar's structure; for instance a _subject_ defines who or what the sentence is about, _verb_ the action or state of the sentence, and _object_ the argument[^3] of the verb. These are, of course, very superficial definitions, and more depth will be added as necessary when discussing the details of their function going forward.

[^3]:   "Argument" is used here for the sake of brevity. While this beginning
        section attempts to be as introductory as possible, there are very few
        terms that will accurately describe the function of an object. In this
        case, one can read "argument" in the same manner as one would in terms
        of computer programming, some variable that is sent to a function to be
        acted upon or otherwise used in its operation.

$$
\underset{\text{subj.}}{\text{Beau}} \;
\underset{\text{verb}}{\text{hates}} \;
\underbrace{\text{the loneliness}}_{\text{obj.}}.
\tag1
$$

English primarily holding to an SVO word order is peculiar in that while English is generally considered a Germanic language by its origin and vocabulary, members of the Germanic language family usually use _Verb Second_ (V2) word order, wherein the verb is preceded by exactly one constituent. Take, for example, the following phrases in German.[^7]

[^7]:   English grammar notations are used in all examples within this article;
        however, in German grammar the terms _Linke Satzklammer_ (left bracket)[^8] and _Rechte Satzklammer_ (right bracket) are used respectively for the auxiliary (aux.) and verb, _Mittelfeld_ (central field) for the contents of the main clause, and _Vorfeld_ (first field) and _Nachfeld_ (final field) for subordinate clauses preceding and following the main clause.

    Per this terminology, in main clauses the finite verb constitutes the Linke Satzklammer and the non-finite verb the Rechte Satzklammer; whereas in embedded clauses the conjunction is in the Linke and the verb in the Rechte, with any finite form following and non-finite forms.

[^8]:   The English equivalents listed here are not literal translations, which
        would be left sentence bracket, right sentence bracket, middle field,
        before field, and after field respectively.

$$\begin{align}
\underset{\text{subj.}}{\text{Er}}&\;
\underset{\text{aux.}}{\mathbf{hat}}\;
\underset{\text{obj.}}{\text{dich}}\;
\underset{\text{adv.}}{\text{nicht}}\;
\underset{\text{verb}}{\mathit{angerufen}}.
\tag2\\
\underbrace{\text{Sobald er Zeit hat}}_{\text{prep.}}&\;
\underset{\text{aux.}}{\mathbf{wird}}\;
\underset{\text{subj.}}{\text{er}}\;
\underset{\text{obj.}}{\text{dich}}\;
\underset{\text{verb}}{\mathit{anrufen}}.
\tag3
\end{align}$$

In many cases, this is indistinguishable from SVO, since SV implies the verb is second; however, SVO only describes the relative position of subject, verb, and object, without describing positions for any other elements in the sentence, such as adverbials. V2, on the other hand, describes the position of only the verb (such that all other phrases and words within the sentence must move to ensure that it is always second) and so can be seen more as a constraint than a full word order. Continuing in German, specifically, consider:

$$\begin{align}
\underset{\text{subj.}}{\text{Alex}}&\;
\underset{\text{verb}}{\mathbf{schreibt}}\;
\underbrace{\text{im Internet}}_{\text{preposition}}\;
\underset{\text{object}}{\text{Beitr}\ddot{\text{a}}\text{ge}}.
\tag{4a}\label{4a}\\
\underset{\text{object}}{\text{Beitr}\ddot{\text{a}}\text{ge}}&\;
\underset{\text{verb}}{\mathbf{schreibt}}\;
\underset{\text{subj.}}{\text{Alex}}\;
\underbrace{\text{im Internet}}_{\text{preposition}}.
\tag{4b}\\
\underbrace{\text{Im Internet}}_{\text{preposition}}&\;
\underset{\text{verb}}{\mathbf{schreibt}}\;
\underset{\text{subj.}}{\text{Alex}}\;
\underset{\text{object}}{\text{Beitr}\ddot{\text{a}}\text{ge}}.
\tag{4c}
\end{align}$$

While each of these examples meet the V2 requirement and are valid sentences in German,[^9] example $\eqref{4a}$ in particular has the familiar SVO word order whereas the others do not. Directly translating this first example will clearly show, however, that the word order is not entirely natural in English:

[^9]:   Bold claim coming from someone who got bored of showing up to German
        class in college and eventually just dropped it altogether. Shoutout to
        the girl who sat next to me, she was nice 🥰.

$$
\underset{\text{subj.}}{\text{Alex}}\;
\underset{\text{verb}}{\mathbf{writes}}\;
\underbrace{\text{on the internet}}_{\text{preposition}}\;
\underset{\text{object}}{\text{posts}}.
\tag5
$$

This brings forward a minor issue with the aforementioned descriptions of word order; as these descriptors are intended as broad categorizations of languages, they do not fully clarify the order of other constituents. In this example, the prepositional phrase "on the internet" is a (locative) adverbial adjunct[^5] which modified the verb "writes" which is itself a _transitive verb_ as it has an object ("posts"). Typically, with a transitive verb, English grammar dictates that adverb phrases either precede the subject or follow the object:

[^5]:   Adjunct phrases are those which are not structurally integral to the
        statement, i.e. they are not predicates or arguments of the verb, but
        nonetheless add information pertaining to the clause. Notably, locative
        phrases may act as such, e.g. in the sentence "the cat sits _in the
        corner_," the latter half is an adjunct phrase.  _Valency theory_
        delves deeper into the distinctions stated here.

$$\begin{align}
\underset{\text{subj.}}{\text{Alex}}\;
\underset{\text{verb}}{\text{writes}}\;
\underset{\text{object}}{\text{posts}}\;
\underbrace{\mathbf{on\,the\,internet}}_{\text{adjunct}}.
\tag{6a}\\
\underbrace{\mathbf{On\,the\,internet}}_{\text{adjunct}},\;
\underset{\text{subj.}}{\text{Alex}}\;
\underset{\text{verb}}{\text{writes}}\;
\underset{\text{object}}{\text{posts}}.
\tag{6b}
\end{align}$$

Word order typology is, of course, not prescriptive but rather an attempt to describe the most common or default word order of a language. For instance, following the verb second constraint in English can produce the following sentences:

$$\begin{align}
\underset{\text{adj.}}{\text{Who}}&\;
\underset{\text{aux.}}{\mathbf{can}}\;
\underset{\text{subj.}}{\text{Yuki}}\;
\underset{\text{verb}}{\mathit{love}}?
\tag7\label{7}\\
\underset{\text{adj.}}{\text{Such}}&\;
\underset{\text{verb}}{\mathbf{was}}\;
\underbrace{\text{their sadness}}_{\text{subject}}.
\tag8\label{8}\\
\underbrace{\text{Behind the screen}}_{\text{adjunct}}&\;
\underset{\text{verb}}{\mathbf{stared}}\;
\underbrace{\text{many eyes}}_{\text{subject}}.
\tag9\label{9}
\end{align}$$

None of these use subject-object-verb word order, yet each of them is easily intelligible English, order can be ignored for style or historical phrases. In the latter case, the aforementioned V2 order is typical, again due to English's Germanic origins.

However, in the former case, that of stylistic deviation from the typical word order, the term _anastrophe_ is used. Anastrophe (from the Greek "ἀναστροφή," a turning around) is then considered a _figure of speech_, a deviation from typical language for effect. More specifically it is a _scheme_,[^4] a variation on sequence, which here brings emphasis to the words whose position in the statement is abnormal. _Subject-verb inversion_ is a common form, one which may be most obvious in its usage as a style, which as the name implies involved "inverting" the positions of the subject and verb phrases. This can then be divided into the categories of locative, directive, quotative, and copular inversions.

[^4]:   Figures of speech can be classified into two broad categories: schemes
        and tropes. The former varies the sequence of words (i.e. literary devices concerned with syntax), such as alliteration, ellipsis, mimesis, parallelism, syncope, or tautology. The latter adds further meaning to the words used (i.e. literary devices concerned with semantics), such as allusion, allegory, cliché, euphemism, irony, or puns. Inversions are seemingly syntactic devices, but often in English function semantically, e.g. in questions (see the following discussion on subject-auxiliary inversions).

With the exception of the lattermost group, each of these is of little interest in terms of further discussion. Locative inversion shifts an adjunct phrase which would typically follow a finite verb[^6] to a position preceding said verb. As this places a single adjunct phrase before the verb, sentences following such a structure follow V2 word order, a vestige from older English grammar.

[^6]:   Finite verbs are likely to be what one thinks of when considering verbs
        in general, they have a subject and can act as the root of an
        _independent clause_ (that is, a clause which can stand alone as a
        complete statement). Typically, these contain information about the
        sentence such as gender (though not usually the case in English),
        number, tense, voice, &c.

$$\begin{align}
\underset{\text{noun}}{\text{Beau}} \;
\underset{\text{verb}}{\text{cried}} &\;
\underbrace{\mathbf{in\,the\,corner}}_{\text{adjunct}}.
\tag{Xa}\\
\underbrace{\mathbf{In\,the\,corner}}_{\text{adjunct}} &\;
\underset{\text{verb}}{\text{cried}} \;
\underset{\text{noun}}{\text{Beau}}.
\tag{Xb}
\end{align}$$

...

$$\begin{align}
\underset{\text{noun}}{\text{The squirrel}} \;
\underset{\text{verb}}{\text{fell}} &\;
\underbrace{\mathbf{out\,of\,the\,tree}}_{\text{adjunct}}.
\tag{Xa}\\
\underbrace{\mathbf{Out\,of\,the\,tree}}_{\text{adjunct}} &\;
\underset{\text{verb}}{\text{fell}} \;
\underset{\text{noun}}{\text{the squirrel}}.
\tag{Xb}
\end{align}$$

On the other hand, some deviations of word order are not considered deviations at all as they serve a specific purpose in the grammar; namely, _subject-auxiliary inversion_ is a form of inversion typically considered distinct from subject-verb inversion and usually used in English to denote a sentence as interrogative. Here _auxiliary_ refers to specific types of verbs which are functional in regards to syntax rather than holding semantic meaning on their own. Generally, these verbs are used in conjunction with other verbs, thus the term "auxiliary," and are usually forms of "do," "have," "be," and modal verbs such as "can."

<https://en.wikipedia.org/wiki/Negative_inversion>

... Copula

### I-2. Pronominal Phrases

### I-3. Personal Pronouns

Personal pronouns are perhaps the most relevant among pronouns in general to
the discussion at hand and so will be the primary focus in regards to examples
of pronouns' functions. These are pronouns which refer to a grammatical person,
which are typically[^2] divided into three categories: first, the speaker;
second, the one spoken to; and third, separate from the previous two.

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

We may also note the use of the term "epicene" in **TABLE 1** for the singular
third person pronoun "they." To distinguish this from "gender neutral," we
require a bit further explanation on what gender means in the context of
grammar, specifically.

Gender is sycophancy. Epicenity is liberalism. Abolition is necessary.

Anaphora. Context, Antecedents, Binding

Demonstrative, Relative, Interrogative, Indefinite

Expletives. Like in "**it** is raining" (suck my dick, Chomsky).

Dummy pronouns? Do they count?

## II. _Philosophical Considerations_

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

## III. _Canonical Solutions_

Tip-toeing around using pronouns as much as possible. Like, wording statements
to avoid needing to say a pronoun... this can be kind of dehumanizing,
sometimes.

What if just not? Like, always use the full noun?
Existential clauses?

Breaking repetition by inflecting.

Saša -> Sa/Saš

Saša isn't feeling well, have you talked to Saš lately?

Sa drinks Sas Ovaltine.

## IV. _Topic and Comment_

East Asian languages, mostly.

Some linguists argue that Japanese pronouns are not grammatically pronouns. I
don't remember the source on this, and it's kind of prescriptivist?

Topic and comment. Topic-prominence. Etc.

Polysyndeton / asyndeton / syndeton.
<https://en.wikipedia.org/wiki/Polysyndeton>

## V. _English Without Pronouns_

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

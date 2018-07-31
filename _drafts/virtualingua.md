---
author:  trewbot
description: >
         A discussion and development log for AI driven speech synthesis using
         a neural network given a predefined vocal tract.
layout:  post
license: BY-SA
tags:    ai blog machine-learning programming speech-synthesis text-to-speech
title:   VirtuaLingua
---

##  Introduction

Recent developments in neural networks have led to an explosion in the amount of
experiments done in machine learning and the variety of applications of AI that
are being explored. While plenty of new areas are being sought out, old ones are
being solidified and enriched by these newer technologies; one such field of
particular interest is speech synthesis.

Previously, speech synthesis was accomplished through the manipulation of a
collection of voice samples taken from real humans. These samples would be
categorized by the phoneme they represent and some system would convert the
desired text to a list of the phrase's constituent phonemes and simply call the
predefined samples in order (sometimes with some tone and pitch manipulation in
an attempt to make the voice sound more natural). For examples of this technique
you can look to [Apple][12]'s [Siri][13] or the [Vocaloid][14] synthesizer.

<https://www.wired.com/story/how-apple-finally-made-siri-sound-more-human/>

<https://www.youtube.com/watch?v=jSsMqjMcRAg>

##  Bibliography

1.  [Lu, Hui-Ling][5] and [Julius O. Smith III][4]. ["Glottal source modeling
    for singing voice synthesis."][6]

1.  Mullen, Jack. ["Physical Modelling of the Vocal Tract with the 2D Digital
    Waveguide Mesh."][2] PhD thesis, University of York, 2016.

1.  Mullen, Jack, David M. Howard, and [Damian T. Murphy][7]. ["Waveguide
    Physical Modeling of Vocal Tract Acoustics: Flexible Formant Bandwidth
    Control From Increased Model Dimensionality."][1] *IEEE Transactions on
    Audio, Speech, and Language Processing* 14, 3 (May 2006): 964-971.

1.  Mullen, Jack, David M. Howard, and [Damian T. Murphy][7]. ["Real-Time
    Dynamic Articulations in the 2-D Waveguide Mesh Vocal Tract Model."][8]
    *IEEE Transactions on Audio, Speech, and Language Processing* 15, 2
    (Feb. 2007): 577-585.

1.  [Thapen, Neil][10]. ["Pink Trombone"][11] (March 2017).

1.  [Smith, Julius O., III][4]. ["Physical Audio Signal Processing (For Virtual
    Musical Instruments and Audio Effects)."][3]

1.  Story, Brad H. ["A parametric model of the vocal tract area function for
    vowel and consonant simulation."][9] *The Journal of the Acoustical Society
    of America* 117, 5 (May 2005): 3231-3254.

[1]:    https://core.ac.uk/download/pdf/51614.pdf
[2]:    http://www-users.york.ac.uk/~dtm3/Download/JackThesis.pdf
[3]:    https://ccrma.stanford.edu/~jos/pasp/
[4]:    https://ccrma.stanford.edu/~jos/
[5]:    https://ccrma.stanford.edu/~vickylu/
[6]:    http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.142.5360&rep=rep1&type=pdf
[7]:    http://www-users.york.ac.uk/~dtm3/
[8]:    http://eprints.whiterose.ac.uk/3710/1/murphy4.pdf
[9]:    http://sal.arizona.edu/sites/default/files/story_jasa2005.pdf
[10]:   http://users.math.cas.cz/~thapen/
[11]:   https://dood.al/pinktrombone/
[12]:   https://apple.com
[13]:   https://www.macworld.com/article/2056718/vox-technica-how-siri-gets-its-voice.html
[14]:   https://www.vocaloid.com/en/

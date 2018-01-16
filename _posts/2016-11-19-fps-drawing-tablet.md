---
layout: post
title: Playing an FPS on a Drawing Tablet
tags: column
---

*This post was submitted to [Student Voice](https://uwrfvoice.com) but not
published, for some reason.*

Let’s say you have a drawing tablet for your computer, like, one with no screen
and a pen. I don’t really care why or how you do, but let’s say you do. You can
use it as a mouse, move the cursor around, click on things, takes a bit to get
used to but it can be done. So you get the bright idea to use your computer for
the one thing computers are designed for: play video games.

Now, don’t get me wrong, playing games with a drawing tablet isn’t inherently
crazy. In fact, some games are pretty popular to play like this. You may notice
that games where you move the mouse around to click on different things are
quite easy to do this with. But point-and-click adventures are a thing of the
past and Osu! is for weeaboos, you want to play a First Person Shooter (FPS)
because you are a Real Gamer (RG). Obviously, unlike me, you have a ton of these
games installed on your computer and don’t need to shuffle through your
installed programs to finally settle on The Stanley Parable as the only game
with a first person perspective you have with which to test this.  You then open
up one of those games just to have your view tweak around sporadically like it’s
on meth or something.

“What is this bizarre behavior I am observing, and how can I circumvent it in
order to achieve the truly enjoyable experience of playing my favorite video
game with my drawing tablet?!” you would retort. In fact, upon interviewing a
random sample of students, Joe Peichel, a Computer Science major, went so far as
to say “I have this problem all the time. It’s the worst!”

“Is this even possible, Trevor?” people would ask at this point. Well, I’m glad
you asked. This question has bothered the greatest minds of user interfaces for
millennia, and I’m here to answer it for you. Let us begin with the basics: what
is mouse movement and how do these games handle it?

Beginning with your normal computer mouse, one that you drag around and has
anywhere from one to a lot of buttons depending on if it’s a Mac mouse or some
RPG mouse you spent $200 on. When this is just sitting there, imagine its
current spot as a “zero point” which is coincidentally where the cursor on
screen currently is. When you move the mouse it takes the distance you moved the
mouse and move the cursor some appropriately scaled amount in the same direction
(this scale is your sensitivity setting). On a trackpad like that of a laptop,
the same idea applies except that the aforementioned zero point is where you
first set your finger and the movement is that of your finger. The tablet is
completely different in this regard: there is no zero point, you do not tell the
cursor how to move, but rather to where it should move. Knowing this distinction
is fundamental for being able to use it at your will.

Next you need to understand the way that first person games handle an input. On
a normal screen the cursor is at some point on the screen and you move it
another point on that same screen. However, in a first person game the mouse is
in the center and the input is used to move the screen around this center. It
does this by acknowledging the new position of the cursor after your movement,
and moving the view to be centered around this new spot. This way the moving of
the mouse feels like the moving of your in-game head, or whatever is relevant to
whichever game you’re playing.

How, then, is this system going to treat a tablet input? Well, points on the
tablet are relative to points on the screen, pointing the pen at one point will
tell the cursor to be at the associated point on your screen. When you point
somewhere and the game sees that, it measures the difference from its perceived
zero point (where the cursor currently is) and your new position, then it moves
the view that distance. The issue is that it then redefines the cursor’s
position as that center again, and when it checks your input it will see that
you have once again said the cursor should be in that other position. The game
will do this every time it checks for an input, the rate of which will depend on
the computer or game’s settings. This means that you are defining a velocity
rather than a change in position.

In order to move in a desired manner, you’ll first need to master sitting still.
At rest your view should not move, so in order to find a velocity of zero, the
distance the pen is from center should then be zero. In other words: keep the
pen at the center of the tablet (however that may be set by the device’s
drivers). Then you should practice moving around, remember that your pen is like
a throttle, defining the speed in some direction. You should move a bit in the
direction you wish to turn and immediately return to the center to stop said
movement. Again, this will take a lot of practice, but it isn’t extremely
difficult and it can be learned.

Is there a benefit to this in any of this? Well, when you want to move your head
around a lot with a regular mouse, you need to move it in some direction more
than your mouse pad, table, or the cord on the mouse will let you, and you’ll
need to lift the mouse and move it to a new zero point. With the tablet, such an
issue does not exist. Other than that: no.

_Trevor J Hoglund is a Physics Option I and Mathematics major with a minor in Computer Science, secretary of the UWRF Chapters of the Society of Physics Students and the Association for Computing Machinery, and treasurer of the Society for Undergraduate Research, Scholarly, and Creative Activity. He sleeps sometimes._

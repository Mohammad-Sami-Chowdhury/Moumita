import React, { useState } from "react";
import Sectiontitle from "../section-title";
import strory1 from "../../images/story/story1.png";
import strory2 from "../../images/story/story2.png";
import strory3 from "../../images/story/story3.png";
import strory4 from "../../images/story/story4.png";
import "./style.css";

const stories = [
  {
    title: "First time we met",
    date: "May 13, 2025",
    img: strory1,
    align: "left-align-text",
    text: `Firstly we met on the common place at DIU. But we started
talking from the DIU library. We laughed, told many untold
stories, had fun, played games. From the very first day I was
like I love her. And I was like if I was able to get her I
will treat her as a princess. Cause she is the PRINCESS. I
still remember she was coming to me and sat down opposite of
me and all the time I was looking her and checking her out
secretly. She gave me chocolates, key rings, notepads and many
more that I cant even end it. From that day I was hoping that
if she is single or not and I was very nervous to say her that
“I LOVE HER”. Whenever I heard that her transport time is
exactly like mine I was the happiest person alive. Cause I got
some extra time for gossiping. She told many things of her
that only I know. I had that confidence that if I get her I
will show what real love is and how to treated right. Although
I don’t know am I really giving the best treatment or not but
I want her as a fish needs water to alive. I want her as I
wanted on the first meet. Cause from my pov, Love don’t die if
you know how to keep the person you want in your life. So my
love, Will you be my last and prove everyone that not every
person leave some stays like glue?`,
  },
  {
    title: "Our first hangout",
    date: "July 5, 2025",
    img: strory2,
    align: "right-align-text",
    text: `Our first hangout was on Dhanmondi. I was prepared enough to
show you how beautiful the places are so that we can have a
nice night walk after our marriage. You came with your friend
Tazin and Ushma. You wore a green and mint mixed dress and
looked like a flower garden. I bought some flowers for my
personal flower. You were blushing and turned your face red,
and I was so happy because I made you happy and blushed. We
rode on rickshaw which was my dream comes true moment. Then we
also captured couple photos and gave you my first ring as a
proposal ring. We shot some ballons and played uno where you
were the first as always. Then we went on pinewood where we
captured more pictures and you and your friends were kinda
lost but I was tensed because I invited you guys there. Sorry
for that incident. But I still remember I was the luckiest
person cause you were so happy that day and I believe I was
able to show you what love is.`,
  },
  {
    title: "My inner promises",
    img: strory3,
    align: "left-align-text",
    text: `Sometimes I look at you and I cant believe, how someone before
me couldn’t see what I see Sometimes I look at you and I cant
understand, how someone before me couldn’t notice a whole
universe of peace hidden inside you. Among a million stars,
you are the one that lights up my whole sky with beautiful
colors. You are really my favourite person and I cant loose
you. I need you every time and you’re important to me. Don’t
leave me love, you are the last one I can truly trust and
love. There are so many things that I love about you. I love
the way you make me feel special i love the way you hold me I
love the way you look at me while I’m not looking at you. i
love the way you feel me understand me love me. your love
gives me wings. i will never stop reminding you how much you
mean to me and how deeply im attached with you... make sure to
use the card i gave you trust me you gonna know how important
you are to me. I’m the luckiest one to have you in my life.
you are so special to me. I hate it whenever you are hard with
yourself. you deserve every thing good and perfect and I’m
trying my best to give you all the good things that you wished
for. I’m not perfect by any means but you boy is trying hard
to be the person you always wanted. i want to be with you help
you and support you as long as you let me do it. thank you for
being you. I loveee youu so muchhh.`,
  },
  {
    title: "MY first Approach",
    date: "May 18, 2025",
    img: strory4,
    align: "right-align-text",
    text: `So it’s a long story. 16 may we faced a problem that still get
me mad. But I was going to say all about my feelings on that
day but for that day I couldn’t. Your friend Tazin and Raimu
came to our campus and we played and enjoyed some moments. But
my heart was trying to say that I love you. Whenever I came
home that day I was hoping that I’m able to say you
everything. But didn’t got the confidence. After taking 1 day
on 18 may 12.45am(approx.) I approached to you about my
everything. But trust me I never thought you were loving me
too. When I saw that you were loving me secretly I was so
blessed that yes I’m the one she loves. I’m the one who she
thinks can handle her and treat her perfectly. My life has
changed from that day. This heartless boy became careful Men.
This sad boy became the loveable one. This depressed boy
became the happiest again. If I could show you what I feel
about you my love trust me you will be dancing all day that
you got someone that loves you for infinity.   You are the
reason I got my laugh back you are the one who understand me
so well you are the person who made me fall in love you are
the one who deserve everything I repeat EVERYTHING you are
worth of every single thing in the whole world you are the
reason I have a smile on my face 24/7 you are the reason I
have trust and faith in loyalty you are the person that made
me feel what BEAUTIFUL is not a word You are the motivation of
mine that I get to do the things I get afraid of you are the
reason that my problems doesn’t feel so bad. You are the
person that reminds me to be safe because you worry about me,
and I love the way you take care of me. You truly have made my
life better just by being in it. & my love, I promise I will
support you every time I promise I will show you that some
people really show what is LOVE I promise I will show you What
real love is I promise I will show you that everyone doesn’t
leave some people give everything to get the girl they really
love. I promise I will keep your heart safe and secure. I
promise I will pick you up whenever you fall, crack,
frightened, worried. and love, I will be the one that you are
looking for I will make myself better to get you. I cant
replace you never ever because you are the person I dreamed of
every day and night. I could have the whole world, but without
you its feel like a empty bucket with no feeling, it would
feel all empty. You are the only piece that makes it complete.
I love being with you every time. And I lovee you. I know
sometimes it's hard but trust me I'm standing with you in
every path. Remember that the right person will never get
tired of you even in the worst times.`,
  },
];

const Story = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);
  const previewLength = 250;

  const handleToggle = (idx) => {
    setExpanded((expanded) =>
      expanded.map((val, i) => (i === idx ? !val : val))
    );
  };

  return (
    <div id="story" className="story-area section-padding">
      <Sectiontitle section={"Our Love Story"} />
      <div className="container">
        <div className="story-wrap">
          {stories.map((story, idx) => (
            <div className="row" key={idx}>
              <div
                className={
                  idx % 2 === 0
                    ? "col-lg-6 col-md-12 col-12 pr-n order-lg-1 order-1"
                    : "col-lg-6 col-md-12 col-12 pl-n order-lg-2 order-1"
                }
              >
                <div
                  className={`story-img ${
                    idx === 0
                      ? "first"
                      : idx === 1
                      ? "second"
                      : idx === 2
                      ? "third"
                      : "fourth"
                  }`}
                >
                  <img src={story.img} alt="" />
                </div>
              </div>
              {/* TEXT COLUMN */}
              <div
                className={
                  idx % 2 === 0
                    ? "col-lg-6 col-md-12 col-12 order-lg-2 order-2"
                    : "col-lg-6 col-md-12 col-12 order-lg-1 order-2"
                }
              >
                <div className={`story-text ${story.align}`}>
                  <h3>{story.title}</h3>
                  <span className="date">{story.date}</span>
                  <p>
                    {expanded[idx]
                      ? story.text
                      : story.text.length > previewLength
                      ? story.text.slice(0, previewLength) + "..."
                      : story.text}
                  </p>
                  {story.text.length > previewLength && (
                    <div className="story-button">
                      <button
                        className="theme-btn"
                        onClick={() => handleToggle(idx)}
                      >
                        {expanded[idx] ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;

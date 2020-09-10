---
layout: single
title: Why and when you might want to add Google AMP to your website
date: 2017-07-07
categories:
  - programming
---
## What is AMP?

Short answer: AMP is a quick fix for the web from Google, due to the fact that not all engineers could make fast and friendly websites for mobile users. With Google provided syntax, even amateur can make good websites!

Full answer: AMP is the next step of Google in their plan to dominate the www. As Facebook grow from a one-man army to a whole empire that rival even Google, they realized that engineers are the force to be recon with. Thus they want to make us-engineers obsoleted by enable everyone to create fast and reliable websites, and soon we will become an ancient race like the Viking, Samurai and Templar.

## What does AMP do under the hood?

It does some sensible things like:
- Lazyload images that come into users' views.
- Require Above the Fold CSS to be inlined in HTML.
- Provide some fast and useful components such as lightbox, slide-bar, carousel, so that we do not have to find and benchmark these components from myriad of available libraries.
- Standardize ads and limit the number of ads in each page, which improve UX.
- Automatically cache your page on Google's servers, like a extremely capable CDN, which is completely free.

It also does some crazy things like:
- Forbid all Non-Google-Authorized JavaScript. Stop looking for article like "Should jQuery be used in 2017" anymore guys! Even vanilla JavaScript is not allowed!
- It create it own set of HTML tags! It seems like Google has decided that the WC3 Committee is not fast enough to implement these features, thus Google just go YOLO and create their own HTML6 standard.

## Ok, I just want to know whether should I add AMP to my websites. Could you just give me the answer?

The short answer is: "It depends on your resources"

### If you have good engineers, you may not need to

All optimizations that AMP provided can be implemented by using available libraries, without adding AMP to your websites:
- Lazyload images
- Prioritize Above the Fold CSS
- Use fast and reliable components
- Limit ads
- Use CDN

All without AMP's limitation!

And if you take a step further with adding backend code optimization, migrating to http2, optimizing your caching strategy, I am sure as hell that your websites will be fast enough for majority cases.

I am living in Vietnam, our 3G connection is not really that good, but I have never gotten any problem loading my websites.

### If you do not have good engineers, you may want AMP

Sometimes you might not have good engineers, or you simply want to save cost, then adding AMP is a sane choice. By complying with AMP set of rules, your website will automatically get faster and cleaner.

### If your website is a blog, news or recipe page, AMP is for you

Text and images oriented pages are very suitable for AMP. They require little JavaScript, their main competitive points are their contents, thus AMP's limitation does not affect them much. Especially if you are using Wordpress, there are already lots of plugins to help you adding AMP effortlessly.

## My personal opinions on AMP

In my opinion, AMP is just another tool for engineers in other to make good website. And like every tool, it is suitable sometimes, and sometimes it's not.

However being backed by Google and the rumors that AMP help with page ranking on Google Search have put AMP in a weird position. Many try to implement AMP in their website even though it is not really needed. And many managers force their engineers to implement AMP to improve their products bottom line. Without proper understanding from product owners, AMP might become a developer foe instead of friend.

AMP should not be viewed for more than what it is: a simple way to create fast websites. With proper training and experience, many engineers could make website as fast and user-friendly as what AMP is capable of.

With its limitation and the way Google cache AMP pages on their server, sometimes AMP may do more harm than good for your websites.
However, by understanding what AMP does, you may learn a lot on how to optimize your websites, which in turn will make you a better developer. By all means please have a look at it.

---
layout: single
title: Elm is brilliant, but I will not use it for my next project
date: 2017-06-09
categories: elm
---

Because most times, Javascript is good enough.

After 4 months using Elm for my side project, I have totally fallen in love with it.
It has many pros that help you to build a solid web-apps:
- It gives useful errors messages if there is something wrong when compiling. The best I've seen until now.
- No runtime errors, ever.
- Modern architecture (people call it The Elm Architecture - TEA). Note: Redux is heavily influenced by it.
- It is functional. I love functional. The code is easy to read, thus easy to maintain.

Despite its pros, there are many cons that you need to aware if you want to use it for your next big project:
- You cannot use only Elm. Elm's eco system is not big, if not lacking in some aspects. Want to persist data to local-storage? You will need to write a port and do the saving and parsing in Javascript. Thus lead to...
- Many easy to implement features in Javascript like autocomplete, carousel does not presented in Elm. You have to write ports, which lead to some headache when trying to coordinate code execution between Elm and Javascript. E.g. after user click on a new product, Elm code will load and render the new product with its images. I will want to load a carousel after the images are rendered. Unfortunately, there is no call-back like that in Elm. The best I found is ```window.requestAnimationFrame()```, which has some subtle bugs that I luckily managed to solve.
- Its start-up time is long. In my test, it takes about 800ms for Elm to finish loading after the code fully downloaded to clients' browsers. Thus make it nearly impossible to make page load happen in sub-2secs.
- Elm is not well supported by Webpack. In my case I want to load two Elm apps. The bundled code does not able to share codes, so my JS size was doubled.
- Elm is a one-man show. Even though Evan Czaplicki has been doing an admirable job to keep improving Elm, there is limit for what a person can do, and I don't think Elm has been evolving fast enough.

On the other hand, Javascript has been constantly evolving. Now you might use TEA in Javascript using libraries like Redux, VueJS. The libraries are easy to use, heavily backed by the community and you don't have to learn another totally different language.

Elm is not simple to learn and super hard to master. Javascript is easier (also hard to master). There is a certainly difficulty when I tried to wrap my head around Elm's static types.

Elm is heavily based on Haskell, and Haskell is notoriously difficult to learn. These will be big factors when I decide my stacks for my next big projects.

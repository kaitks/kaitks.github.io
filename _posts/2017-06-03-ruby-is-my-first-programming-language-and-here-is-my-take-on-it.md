---
layout: single
title: Ruby is my first programming language, and here is my take on it
categories: ruby
---
Three years ago, I decided to become a programmer. After some researches, I decided Ruby will be my first programming language. I got good grade at math in high school (people joke that Vietnamese learn enough math in high school to finish Murican University). As learning resources are plenty on the Internet, I thought that the process will be smooth.

But I was wrong.

Ruby itself is intuitive, but it is tightly coupled with Rails, which is a deceptive simple-looking framework.

So with some tips, I hope your ride will be easier than mine.

## Learn enough of HTML, CSS, Ruby before Rails

Your first Ruby project is likely to be written in Rails. And you do not need to be good at HTML, CSS nor Ruby to start using Rails. Rails has commands and templates (called scaffold) to help you bootstrap your projects. Its default configures are sensible for many kinds of project, so you do not have to change them.

But if you do not get the basic right, you will encounter many hard-to-debug errors as you start to write your own code (not the code that you copy from example projects). And then you will be confused because you do not understand what is happening under its hood. Then you try to list out all the things you need to understand:
- Active Record
- Active Support
- Concerns
- Meta-programming
- Lambda
- ...

You will be overwhelmed.

So it is better to start slow and speed up later.

### Learn HTML and CSS

HTML and CSS are the basic building blocks of the Internet. Before using PHP or Ruby, people have been able to make beautiful websites using only HTML and CSS.

First, navigate to [w3school](https://www.w3schools.com/html/) and have a quick look on all the common HTML5 tags and their purposes.

Second, navigate to its [CSS](https://www.w3schools.com/css/default.asp) section and try to style some HTML elements.

After this, try to evaluate your understanding by answering some basic questions:
- What are the basic tags that make up a HTML5 page?
- What goes into <head>? What goes into <body>?
- How to make a HTML5 form? List out some common input tags and their usages.
- How to center elements with CSS? How to style text? How to distance, group elements.
- What is GET request? What is POST request? Their differences?

If you get all that, move on to learn Ruby.

### Learn Ruby

Your goals are:
- To be familiar with Ruby syntax as much as possible.
- To understand Ruby's inheritance: Class, Module, method override with supper(). Be able to differentiate class variable and instance variable...
- To grasp lambda, meta-programming. If you cannot understand them immediately, don't be frustrated and just skip them. You will likely to understand them when you have a little more experiences.

[Ruby Monk](https://rubymonk.com/) is all you need to achieve this.

And don't border to learn Vim. You will not want to learn two things at the same-time. Just get Sublime Text and be done with it.

### Learn Rails

Many recommend [railstutorial](https://www.railstutorial.org/book), but I think [Rails' official starter guide]( http://guides.rubyonrails.org/getting_started.html) is more friendly to newcomer.

Following up, try to create some projects with [this book](https://pragprog.com/book/rails51/agile-web-development-with-rails-51).

Then, try to start your own project. Any idea is OK: your own CMS, your monthly expense summary tool, etc. And don't forget to read all the [Rails' official guide](http://guides.rubyonrails.org/).

After this, you are good to go.

### Next steps

The above knowledges are not enough to make a good website. You will need to understand basic concepts about networking. [High Performance
Browser Networking](https://hpbn.co/?utm_source=igvita&utm_medium=referral&utm_campaign=igvita-homepage) is a good read on this.

Then you need to learn Javascript. Good understanding of Javascript will help you understanding Ruby better. It is also used to create SPA or to build rich UI. [You don't know JS](https://github.com/getify/You-Dont-Know-JS) is a well written book series to help learning Javascript.

And that is all the basic you need to start your career as a Ruby programmer. Good luck.

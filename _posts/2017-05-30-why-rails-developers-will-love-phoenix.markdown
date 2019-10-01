---
layout: single
title:  Why Rails developers will love Phoenix
categories: elixir
---

Has been working with Ruby for 3 years, I found it is a great language to read/write. The syntax is clean, the libraries are fantastic and it has a big community around to support it.

However to use Ruby with Rails in production environment, one have to learn more about server setup (Passenger/Nginx + Puma, because Webrick is not production ready) and caching (Redis, because Rails without caching is slow).

Although the learning curve is trivial, it is still one more thing to learn, and it costs time and money to maintain without adding any feature to the product, which results in fewer satisfied customers.

## Phoenix to the rescue

Phoenix - powered by Elixir, is a better version of Rails. It is fast, stable and have almost all the goodies to write web-apps. And the best part is that it is easy to learn (thanks to similar syntax between Elixir and Ruby).

### Phoenix is fast

[This](https://github.com/mroth/phoenix-showdown) is a benchmark between phoenix and its counterparts. Even though not the fastest, Phoenix performs extremely well and surpasses Rails by a large margin.

In reality, I have build websites in Phoenix and it is easy to achieve good response time (sub 100ms, request round trip + query database + render view) without adding caching.

### Cowboy - Phoenix's server is also fast

When using Rails, we often have to put a Nginx in front of Puma/Unicorn to speed up static file serving. With Phoenix's default server, you don't have to do this as Cowboy is already fast. I tried switching between Nginx/Cowboy and the different in speed is minimal.

### Phoenix's asset packaging is easier to customize than Rails

By default, Rails come with sprockets and Phoenix come with Brunch. I will not debate which is better between sprockets and Brunch as both do their jobs well.

However sprockets is tightly coupled with Rails, while with Phoenix you can simply replace Brunch with whatever module bundler you like (Webpack anyone?). And to me this is a big point because as developers, we should not be limited so much by our framework.

### Elixir is a pleasure to work with

Elixir is a functional language, which mean it has no class, no instance variable. All the arguments of a function is provided to it when calling. Thus it is very easy to read and understand.

Together with the pipeline syntax, you can understand Elixir code at a glance.

Example:

{% highlight elixir %}
  def show(conn, %{"id" => slug}) do
    # get product by slug
    product =
      from(p in Product,
      where: p.slug == ^slug,
      select: [:id, :name, :slug, :detail, :msrp])
      |> Repo.one!

    # add breadcrumb, get recent viewed products and render product detail page
    conn
    |> add_breadcrumb(name: "Home", url: page_path(conn, :index))
    |> add_breadcrumb(name: product.title)
    |> put_recent_view_products
    |> render("show.html", product: product)
  end
{% endhighlight %}

### And more...

Others do better job at explaining this than me. Please read:
- [Elixir and Phoenix: The Future of Web APIs and Apps?](http://blog.carbonfive.com/2016/04/19/elixir-and-phoenix-the-future-of-web-apis-and-apps/)
- [Why Phoenix is exciting for the modern web](https://14islands.com/blog/2016/08/16/phoenix-framework/)
- [The Obligatory "Flame War" Phoenix vs Node.js](http://www.akitaonrails.com/2015/12/03/the-obligatory-flame-war-phoenix-vs-node-js)

## Conclusion

So with all the pros, it seems that Phoenix is the future for Rails developers. However, it is not quite correct and I do not encourage you to go 100% Phoenix. Because:
- In Vietnam, open position for Elixir Developer is scarce, thus your opportunity will be limited.
- Rails market is big. There are many job offers for experienced Rails developers and the pay is competitive.
- Even though having many drawbacks, Rails is a matured framework with tons of support. And Ruby is also getting faster. They will be relevant for a long time.

However, if you...
- Eager to learn and want to get in touch with better tools.
- Want to try functional programming.

...then Phoenix and Elixir are good choices. They are modern, production tested and you can already create great products with them.

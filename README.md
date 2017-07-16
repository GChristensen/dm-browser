## 'Dark Matter' Browser

(C) 2012 g/christensen (gchristnsn@gmail.com)

### Yo dawg, we heard you like browsers, so we put a browser into your browser so you can browse while you browse.

# [DEPRECATED]

See the [Dark Flow](https://github.com/GChristensen/dark-flow) addon.

__Dark Matter__, a spin-off of the
[feedxcavator](https://github.com/GChristensen/feedxcavator#readme) project.

That's how it used to look like: [youtube](https://youtu.be/TeAGkIjRn7s?t=36&rel=0&autoplay=1)

Paginated forums (imageboards are the most ubiquity species nowadays) are not so
convenient to browse as is, especialy highly loaded ones. This application allows to
batch-grab the specified amount of the forum content and
transform it according to the user requirements, so user can have a large picture
of the available data, transform the data and get some additional features which 
are not provided by the forum software. 

User's requirements and transformations are expressed with a simple
query language embedded into URLs (a sort of a text command interface). It's also
possible to build a simple indexed imageboard search engine on the base of this
aggregator (which was done only as a proof of concept at the moment).

Key features:

* Ability to load content from multiple pages of an imageboard
* Ability to display content of several thematic boards in a single thread stream 
  using chained links
* Manual and automatic content filtering
* Condensed RSS-like thread stream view
* It' possible to permanently pin threads of interest to the top of a thread 
  stream and monitor the posting dynamics
* Ability to view the whole imageboard and its threads as image folders
* Cron-based automatic thread archive (may not work with a standalone instance)
* Mobile view (available through the `/m' page)

#### Requirements

* [GAE](http://appspot.com) account or Java 1.6+ [the application could be run on a GAE 
  account (multiuser mode) or using local GAE emulation (single user only)].

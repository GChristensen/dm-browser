## 'Dark Matter' Browser

(C) 2012 g/christensen (gchristnsn@gmail.com)

### Yo dawg, we heard you like browsers, so we put a browser into your browser so
    you can browse while you browse.

__Dark Matter__ is a prototype of a middleware intended to boost the paginated
forum browsing (currently applicable only to imageboards), or it could be called
an "imageboard aggregator" (a spin-off of the
[feedxcavator](https://github.com/GChristensen/feedxcavator#readme) project).

Paginated forums (imageboards are the most ubiquity species nowadays) not so
convenient to browse with bare hands, especialy highly loaded ones. The
straightforward logical step towards the browsing automatization is the
aggregated browsing of such forums (disregarding the moral aspects of the
browsing act) by batch-grabing the specified amount of the forum content and
transforming it according the user requirements, so user can have a large picture
of available data and could have some additional features which are not provided 
by the forums themselves. 

Due to regular structure of most imageboards, derived from a common ancestor,
it's possible to write almost universal data extraction engine (which Lisp allows
to do with ease) to cover wide range of imageboards, and the most interesting
part: the user's requirements and transformations are expressed with a simple
query language embedded into URLs (a sort of a text command interface). It's also
possible to build a simple indexed imageboard search engine on the base of this
aggregator (which was done only as a proof of concept at the moment).

Key features:

* Ability to load content from multiple pages of an imageboard
* It's also possible to display content of several thematic boards in a single 
  thread stream using the chained links
* Manual and automatic content filtering
* Condensed RSS-like thread stream view
* It' possible to permanently pin threads of interest to the top of a thread 
  stream and monitor the posting dynamics
* Ability to view the whole imageboard and its threads as image folders
* Cron-based automatic thread archive

The complete list of implemented concepts could be found in the
[manual](https://github.com/gchristensen/dm-browser/wiki/manual.png).

#### Requirements:

* Unicode-enabled fonts
* A [GAE](http://appspot.com) account or Java 1.6+ [could be run on a GAE 
  account (multiuser mode) or using the local GAE emulation (single user only)]

#### Downloads

## License

### Source code

BSD
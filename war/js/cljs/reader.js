goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____42280 = reader;
if(and__3822__auto____42280)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____42280;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__1990__auto____42281 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____42282 = (cljs.reader.read_char[goog.typeOf(x__1990__auto____42281)]);
if(or__3824__auto____42282)
{return or__3824__auto____42282;
} else
{var or__3824__auto____42283 = (cljs.reader.read_char["_"]);
if(or__3824__auto____42283)
{return or__3824__auto____42283;
} else
{throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____42288 = reader;
if(and__3822__auto____42288)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____42288;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__1990__auto____42289 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____42290 = (cljs.reader.unread[goog.typeOf(x__1990__auto____42289)]);
if(or__3824__auto____42290)
{return or__3824__auto____42290;
} else
{var or__3824__auto____42291 = (cljs.reader.unread["_"]);
if(or__3824__auto____42291)
{return or__3824__auto____42291;
} else
{throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__42292 = this;
if(cljs.core.empty_QMARK_(cljs.core.deref(this__42292.buffer_atom)))
{var idx__42293 = cljs.core.deref(this__42292.index_atom);
cljs.core.swap_BANG_.cljs$lang$arity$2(this__42292.index_atom,cljs.core.inc);
return (this__42292.s[idx__42293]);
} else
{var buf__42294 = cljs.core.deref(this__42292.buffer_atom);
cljs.core.swap_BANG_.cljs$lang$arity$2(this__42292.buffer_atom,cljs.core.rest);
return cljs.core.first(buf__42294);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__42295 = this;
return cljs.core.swap_BANG_.cljs$lang$arity$2(this__42295.buffer_atom,(function (p1__42275_SHARP_){
return cljs.core.cons(ch,p1__42275_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.cljs$lang$arity$1(0),cljs.core.atom.cljs$lang$arity$1(null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____42297 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____42297))
{return or__3824__auto____42297;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____42302 = cljs.reader.numeric_QMARK_(initch);
if(or__3824__auto____42302)
{return or__3824__auto____42302;
} else
{var and__3822__auto____42304 = (function (){var or__3824__auto____42303 = ("+" === initch);
if(or__3824__auto____42303)
{return or__3824__auto____42303;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____42304))
{return cljs.reader.numeric_QMARK_((function (){var next_ch__42305 = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch__42305);
return next_ch__42305;
})());
} else
{return and__3822__auto____42304;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__42306){
var rdr = cljs.core.first(arglist__42306);
var msg = cljs.core.rest(arglist__42306);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____42310 = !((ch === "#"));
if(and__3822__auto____42310)
{var and__3822__auto____42311 = !((ch === "'"));
if(and__3822__auto____42311)
{var and__3822__auto____42312 = !((ch === ":"));
if(and__3822__auto____42312)
{return cljs.reader.macros(ch);
} else
{return and__3822__auto____42312;
}
} else
{return and__3822__auto____42311;
}
} else
{return and__3822__auto____42310;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__42317 = (new goog.string.StringBuffer(initch));
var ch__42318 = cljs.reader.read_char(rdr);
while(true){
if((function (){var or__3824__auto____42319 = (ch__42318 == null);
if(or__3824__auto____42319)
{return or__3824__auto____42319;
} else
{var or__3824__auto____42320 = cljs.reader.whitespace_QMARK_(ch__42318);
if(or__3824__auto____42320)
{return or__3824__auto____42320;
} else
{return cljs.reader.macro_terminating_QMARK_(ch__42318);
}
}
})())
{cljs.reader.unread(rdr,ch__42318);
return sb__42317.toString();
} else
{{
var G__42321 = (function (){sb__42317.append(ch__42318);
return sb__42317;
})();
var G__42322 = cljs.reader.read_char(rdr);
sb__42317 = G__42321;
ch__42318 = G__42322;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__42326 = cljs.reader.read_char(reader);
if((function (){var or__3824__auto____42327 = (ch__42326 === "n");
if(or__3824__auto____42327)
{return or__3824__auto____42327;
} else
{var or__3824__auto____42328 = (ch__42326 === "r");
if(or__3824__auto____42328)
{return or__3824__auto____42328;
} else
{return (ch__42326 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern("([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__42330 = re.exec(s);
if((matches__42330 == null))
{return null;
} else
{if((matches__42330.length === 1))
{return (matches__42330[0]);
} else
{return matches__42330;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__42338 = cljs.reader.re_find_STAR_(cljs.reader.int_pattern,s);
var group3__42339 = (groups__42338[2]);
if(!((function (){var or__3824__auto____42340 = (group3__42339 == null);
if(or__3824__auto____42340)
{return or__3824__auto____42340;
} else
{return (group3__42339.length < 1);
}
})()))
{return 0;
} else
{var negate__42341 = ((("-" === (groups__42338[1])))?-1:1);
var a__42342 = (cljs.core.truth_((groups__42338[3]))?[(groups__42338[3]),10]:(cljs.core.truth_((groups__42338[4]))?[(groups__42338[4]),16]:(cljs.core.truth_((groups__42338[5]))?[(groups__42338[5]),8]:(cljs.core.truth_((groups__42338[7]))?[(groups__42338[7]),parseInt((groups__42338[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__42343 = (a__42342[0]);
var radix__42344 = (a__42342[1]);
if((n__42343 == null))
{return null;
} else
{return (negate__42341 * parseInt(n__42343,radix__42344));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__42348 = cljs.reader.re_find_STAR_(cljs.reader.ratio_pattern,s);
var numinator__42349 = (groups__42348[1]);
var denominator__42350 = (groups__42348[2]);
return (parseInt(numinator__42349) / parseInt(denominator__42350));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__42353 = re.exec(s);
if((function (){var and__3822__auto____42354 = !((matches__42353 == null));
if(and__3822__auto____42354)
{return ((matches__42353[0]) === s);
} else
{return and__3822__auto____42354;
}
})())
{if((matches__42353.length === 1))
{return (matches__42353[0]);
} else
{return matches__42353;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s)))
{return cljs.reader.match_int(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s)))
{return cljs.reader.match_float(s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__42356 = parseInt(code_str,16);
return String.fromCharCode(code__42356);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__42359 = cljs.reader.read_char(reader);
var mapresult__42360 = cljs.reader.escape_char_map(ch__42359);
if(cljs.core.truth_(mapresult__42360))
{return mapresult__42360;
} else
{if((ch__42359 === "x"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch__42359,cljs.reader.read_2_chars(reader)));
} else
{if((ch__42359 === "u"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch__42359,cljs.reader.read_4_chars(reader)));
} else
{if(cljs.reader.numeric_QMARK_(ch__42359))
{return String.fromCharCode(ch__42359);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch__42359], 0));
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__42362 = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(ch__42362) : pred.call(null,ch__42362))))
{{
var G__42363 = cljs.reader.read_char(rdr);
ch__42362 = G__42363;
continue;
}
} else
{return ch__42362;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__42370 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch__42371 = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__42371))
{} else
{cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}
if((delim === ch__42371))
{return cljs.core.persistent_BANG_(a__42370);
} else
{var temp__3971__auto____42372 = cljs.reader.macros(ch__42371);
if(cljs.core.truth_(temp__3971__auto____42372))
{var macrofn__42373 = temp__3971__auto____42372;
var mret__42374 = (macrofn__42373.cljs$lang$arity$2 ? macrofn__42373.cljs$lang$arity$2(rdr,ch__42371) : macrofn__42373.call(null,rdr,ch__42371));
{
var G__42376 = (((mret__42374 === rdr))?a__42370:cljs.core.conj_BANG_(a__42370,mret__42374));
a__42370 = G__42376;
continue;
}
} else
{cljs.reader.unread(rdr,ch__42371);
var o__42375 = cljs.reader.read(rdr,true,null,recursive_QMARK_);
{
var G__42377 = (((o__42375 === rdr))?a__42370:cljs.core.conj_BANG_(a__42370,o__42375));
a__42370 = G__42377;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__42382 = cljs.reader.read_char(rdr);
var dm__42383 = cljs.reader.dispatch_macros(ch__42382);
if(cljs.core.truth_(dm__42383))
{return (dm__42383.cljs$lang$arity$2 ? dm__42383.cljs$lang$arity$2(rdr,_) : dm__42383.call(null,rdr,_));
} else
{var temp__3971__auto____42384 = cljs.reader.maybe_read_tagged_type(rdr,ch__42382);
if(cljs.core.truth_(temp__3971__auto____42384))
{var obj__42385 = temp__3971__auto____42384;
return obj__42385;
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch__42382], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Unmached delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__42387 = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l__42387)))
{cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else
{}
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,l__42387);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__42394 = (new goog.string.StringBuffer(initch));
var ch__42395 = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____42396 = (ch__42395 == null);
if(or__3824__auto____42396)
{return or__3824__auto____42396;
} else
{var or__3824__auto____42397 = cljs.reader.whitespace_QMARK_(ch__42395);
if(or__3824__auto____42397)
{return or__3824__auto____42397;
} else
{return cljs.reader.macros(ch__42395);
}
}
})()))
{cljs.reader.unread(reader,ch__42395);
var s__42398 = buffer__42394.toString();
var or__3824__auto____42399 = cljs.reader.match_number(s__42398);
if(cljs.core.truth_(or__3824__auto____42399))
{return or__3824__auto____42399;
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s__42398,"]"], 0));
}
} else
{{
var G__42400 = (function (){buffer__42394.append(ch__42395);
return buffer__42394;
})();
var G__42401 = cljs.reader.read_char(reader);
buffer__42394 = G__42400;
ch__42395 = G__42401;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__42404 = (new goog.string.StringBuffer());
var ch__42405 = cljs.reader.read_char(reader);
while(true){
if((ch__42405 == null))
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{if(("\\" === ch__42405))
{{
var G__42406 = (function (){buffer__42404.append(cljs.reader.escape_char(buffer__42404,reader));
return buffer__42404;
})();
var G__42407 = cljs.reader.read_char(reader);
buffer__42404 = G__42406;
ch__42405 = G__42407;
continue;
}
} else
{if(("\"" === ch__42405))
{return buffer__42404.toString();
} else
{if("\uFDD0'default")
{{
var G__42408 = (function (){buffer__42404.append(ch__42405);
return buffer__42404;
})();
var G__42409 = cljs.reader.read_char(reader);
buffer__42404 = G__42408;
ch__42405 = G__42409;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__42411 = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_(goog.string.contains(token__42411,"/")))
{return cljs.core.symbol.cljs$lang$arity$2(cljs.core.subs.cljs$lang$arity$3(token__42411,0,token__42411.indexOf("/")),cljs.core.subs.cljs$lang$arity$3(token__42411,(token__42411.indexOf("/") + 1),token__42411.length));
} else
{return cljs.reader.special_symbols(token__42411,cljs.core.symbol.cljs$lang$arity$1(token__42411));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__42421 = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a__42422 = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token__42421);
var token__42423 = (a__42422[0]);
var ns__42424 = (a__42422[1]);
var name__42425 = (a__42422[2]);
if(cljs.core.truth_((function (){var or__3824__auto____42427 = (function (){var and__3822__auto____42426 = !((void 0 === ns__42424));
if(and__3822__auto____42426)
{return (ns__42424.substring((ns__42424.length - 2),ns__42424.length) === ":/");
} else
{return and__3822__auto____42426;
}
})();
if(cljs.core.truth_(or__3824__auto____42427))
{return or__3824__auto____42427;
} else
{var or__3824__auto____42428 = ((name__42425[(name__42425.length - 1)]) === ":");
if(or__3824__auto____42428)
{return or__3824__auto____42428;
} else
{return !((token__42423.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__42423], 0));
} else
{if((function (){var and__3822__auto____42429 = !((ns__42424 == null));
if(and__3822__auto____42429)
{return (ns__42424.length > 0);
} else
{return and__3822__auto____42429;
}
})())
{return cljs.core.keyword.cljs$lang$arity$2(ns__42424.substring(0,ns__42424.indexOf("/")),name__42425);
} else
{return cljs.core.keyword.cljs$lang$arity$1(token__42423);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_(f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_(f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_(f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.cljs$lang$arity$2(sym,cljs.reader.read(rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__42435 = cljs.reader.desugar_meta(cljs.reader.read(rdr,true,null,true));
if(cljs.core.map_QMARK_(m__42435))
{} else
{cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}
var o__42436 = cljs.reader.read(rdr,true,null,true);
if((function (){var G__42437__42438 = o__42436;
if(G__42437__42438)
{if((function (){var or__3824__auto____42439 = (G__42437__42438.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____42439)
{return or__3824__auto____42439;
} else
{return G__42437__42438.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__42437__42438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IWithMeta,G__42437__42438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IWithMeta,G__42437__42438);
}
})())
{return cljs.core.with_meta(o__42436,cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.meta(o__42436),m__42435], 0)));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read(rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader("\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader("\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader("Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__42443 = cljs.reader.read_char(reader);
if((ch__42443 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_(ch__42443))
{{
var G__42446 = reader;
var G__42447 = eof_is_error;
var G__42448 = sentinel;
var G__42449 = is_recursive;
reader = G__42446;
eof_is_error = G__42447;
sentinel = G__42448;
is_recursive = G__42449;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_(ch__42443))
{{
var G__42450 = (cljs.reader.read_comment.cljs$lang$arity$2 ? cljs.reader.read_comment.cljs$lang$arity$2(reader,ch__42443) : cljs.reader.read_comment.call(null,reader,ch__42443));
var G__42451 = eof_is_error;
var G__42452 = sentinel;
var G__42453 = is_recursive;
reader = G__42450;
eof_is_error = G__42451;
sentinel = G__42452;
is_recursive = G__42453;
continue;
}
} else
{if("\uFDD0'else")
{var f__42444 = cljs.reader.macros(ch__42443);
var res__42445 = (cljs.core.truth_(f__42444)?(f__42444.cljs$lang$arity$2 ? f__42444.cljs$lang$arity$2(reader,ch__42443) : f__42444.call(null,reader,ch__42443)):((cljs.reader.number_literal_QMARK_(reader,ch__42443))?cljs.reader.read_number(reader,ch__42443):(("\uFDD0'else")?cljs.reader.read_symbol(reader,ch__42443):null)));
if((res__42445 === reader))
{{
var G__42454 = reader;
var G__42455 = eof_is_error;
var G__42456 = sentinel;
var G__42457 = is_recursive;
reader = G__42454;
eof_is_error = G__42455;
sentinel = G__42456;
is_recursive = G__42457;
continue;
}
} else
{return res__42445;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__42459 = cljs.reader.push_back_reader(s);
return cljs.reader.read(r__42459,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.cljs$lang$arity$2(width,cljs.core.count(s)))
{return s;
} else
{if((width < cljs.core.count(s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__42461 = (new goog.string.StringBuffer(s));
while(true){
if((b__42461.getLength() < width))
{{
var G__42462 = b__42461.append("0");
b__42461 = G__42462;
continue;
}
} else
{return b__42461.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____42465 = cljs.reader.divisible_QMARK_(year,4);
if(cljs.core.truth_(and__3822__auto____42465))
{var or__3824__auto____42466 = cljs.reader.indivisible_QMARK_(year,100);
if(cljs.core.truth_(or__3824__auto____42466))
{return or__3824__auto____42466;
} else
{return cljs.reader.divisible_QMARK_(year,400);
}
} else
{return and__3822__auto____42465;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__42471 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__42472 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.cljs$lang$arity$3((cljs.core.truth_(leap_year_QMARK_)?dim_leap__42472:dim_norm__42471),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__42473 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__42475 = (function (low,n,high,msg){
if((function (){var and__3822__auto____42474 = (low <= n);
if(and__3822__auto____42474)
{return (n <= high);
} else
{return and__3822__auto____42474;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))], 0)))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____42476 = cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.split_at(8,cljs.core.re_matches(timestamp__42473,ts)));
if(cljs.core.truth_(temp__3974__auto____42476))
{var vec__42477__42480 = temp__3974__auto____42476;
var vec__42478__42481 = cljs.core.nth.cljs$lang$arity$3(vec__42477__42480,0,null);
var ___42482 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,0,null);
var years__42483 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,1,null);
var months__42484 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,2,null);
var days__42485 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,3,null);
var hours__42486 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,4,null);
var minutes__42487 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,5,null);
var seconds__42488 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,6,null);
var milliseconds__42489 = cljs.core.nth.cljs$lang$arity$3(vec__42478__42481,7,null);
var vec__42479__42490 = cljs.core.nth.cljs$lang$arity$3(vec__42477__42480,1,null);
var ___42491 = cljs.core.nth.cljs$lang$arity$3(vec__42479__42490,0,null);
var ___42492 = cljs.core.nth.cljs$lang$arity$3(vec__42479__42490,1,null);
var ___42493 = cljs.core.nth.cljs$lang$arity$3(vec__42479__42490,2,null);
var V__42494 = vec__42477__42480;
var vec__42495__42498 = cljs.core.map.cljs$lang$arity$2((function (v){
return cljs.core.map.cljs$lang$arity$2((function (p1__42470_SHARP_){
return parseInt(p1__42470_SHARP_,10);
}),v);
}),cljs.core.map.cljs$lang$arity$3((function (p1__42468_SHARP_,p2__42467_SHARP_){
return cljs.core.update_in(p2__42467_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__42468_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly(null),(function (p1__42469_SHARP_){
if(cljs.core._EQ_.cljs$lang$arity$2(p1__42469_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__42494));
var vec__42496__42499 = cljs.core.nth.cljs$lang$arity$3(vec__42495__42498,0,null);
var ___42500 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,0,null);
var y__42501 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,1,null);
var mo__42502 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,2,null);
var d__42503 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,3,null);
var h__42504 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,4,null);
var m__42505 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,5,null);
var s__42506 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,6,null);
var ms__42507 = cljs.core.nth.cljs$lang$arity$3(vec__42496__42499,7,null);
var vec__42497__42508 = cljs.core.nth.cljs$lang$arity$3(vec__42495__42498,1,null);
var offset_sign__42509 = cljs.core.nth.cljs$lang$arity$3(vec__42497__42508,0,null);
var offset_hours__42510 = cljs.core.nth.cljs$lang$arity$3(vec__42497__42508,1,null);
var offset_minutes__42511 = cljs.core.nth.cljs$lang$arity$3(vec__42497__42508,2,null);
var offset__42512 = (offset_sign__42509 * ((offset_hours__42510 * 60) + offset_minutes__42511));
return cljs.core.PersistentVector.fromArray([((cljs.core.not(years__42483))?1970:y__42501),((cljs.core.not(months__42484))?1:(check__42475.cljs$lang$arity$4 ? check__42475.cljs$lang$arity$4(1,mo__42502,12,"timestamp month field must be in range 1..12") : check__42475.call(null,1,mo__42502,12,"timestamp month field must be in range 1..12"))),((cljs.core.not(days__42485))?1:(check__42475.cljs$lang$arity$4 ? check__42475.cljs$lang$arity$4(1,d__42503,(cljs.reader.days_in_month.cljs$lang$arity$2 ? cljs.reader.days_in_month.cljs$lang$arity$2(mo__42502,cljs.reader.leap_year_QMARK_(y__42501)) : cljs.reader.days_in_month.call(null,mo__42502,cljs.reader.leap_year_QMARK_(y__42501))),"timestamp day field must be in range 1..last day in month") : check__42475.call(null,1,d__42503,(cljs.reader.days_in_month.cljs$lang$arity$2 ? cljs.reader.days_in_month.cljs$lang$arity$2(mo__42502,cljs.reader.leap_year_QMARK_(y__42501)) : cljs.reader.days_in_month.call(null,mo__42502,cljs.reader.leap_year_QMARK_(y__42501))),"timestamp day field must be in range 1..last day in month"))),((cljs.core.not(hours__42486))?0:(check__42475.cljs$lang$arity$4 ? check__42475.cljs$lang$arity$4(0,h__42504,23,"timestamp hour field must be in range 0..23") : check__42475.call(null,0,h__42504,23,"timestamp hour field must be in range 0..23"))),((cljs.core.not(minutes__42487))?0:(check__42475.cljs$lang$arity$4 ? check__42475.cljs$lang$arity$4(0,m__42505,59,"timestamp minute field must be in range 0..59") : check__42475.call(null,0,m__42505,59,"timestamp minute field must be in range 0..59"))),((cljs.core.not(seconds__42488))?0:(check__42475.cljs$lang$arity$4 ? check__42475.cljs$lang$arity$4(0,s__42506,((cljs.core._EQ_.cljs$lang$arity$2(m__42505,59))?60:59),"timestamp second field must be in range 0..60") : check__42475.call(null,0,s__42506,((cljs.core._EQ_.cljs$lang$arity$2(m__42505,59))?60:59),"timestamp second field must be in range 0..60"))),((cljs.core.not(milliseconds__42489))?0:(check__42475.cljs$lang$arity$4 ? check__42475.cljs$lang$arity$4(0,ms__42507,999,"timestamp millisecond field must be in range 0..999") : check__42475.call(null,0,ms__42507,999,"timestamp millisecond field must be in range 0..999"))),offset__42512], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____42524 = (cljs.reader.parse_and_validate_timestamp.cljs$lang$arity$1 ? cljs.reader.parse_and_validate_timestamp.cljs$lang$arity$1(ts) : cljs.reader.parse_and_validate_timestamp.call(null,ts));
if(cljs.core.truth_(temp__3971__auto____42524))
{var vec__42525__42526 = temp__3971__auto____42524;
var years__42527 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,0,null);
var months__42528 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,1,null);
var days__42529 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,2,null);
var hours__42530 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,3,null);
var minutes__42531 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,4,null);
var seconds__42532 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,5,null);
var ms__42533 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,6,null);
var offset__42534 = cljs.core.nth.cljs$lang$arity$3(vec__42525__42526,7,null);
return (new Date((Date.UTC(years__42527,(months__42528 - 1),days__42529,hours__42530,minutes__42531,seconds__42532,ms__42533) - ((offset__42534 * 60) * 1000))));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_(s))
{return cljs.reader.parse_timestamp(s);
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_(elems))
{return cljs.core.into(cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_(uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__42538 = cljs.reader.read_symbol(rdr,initch);
var temp__3971__auto____42539 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.name(tag__42538),null);
if(cljs.core.truth_(temp__3971__auto____42539))
{var pfn__42540 = temp__3971__auto____42539;
return (pfn__42540.cljs$lang$arity$1 ? pfn__42540.cljs$lang$arity$1(cljs.reader.read(rdr,true,null,false)) : pfn__42540.call(null,cljs.reader.read(rdr,true,null,false)));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",cljs.core.name(tag__42538)," in ",cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.keys(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_))], 0))], 0));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__42543 = cljs.core.name(tag);
var old_parser__42544 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__42543,null);
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__42543,f);
return old_parser__42544;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__42547 = cljs.core.name(tag);
var old_parser__42548 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__42547,null);
cljs.core.swap_BANG_.cljs$lang$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__42547);
return old_parser__42548;
});

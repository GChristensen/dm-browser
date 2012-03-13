goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____6494 = reader;

if(cljs.core.truth_(and__3546__auto____6494))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____6494;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____6495 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____6495))
{return or__3548__auto____6495;
} else
{var or__3548__auto____6496 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____6496))
{return or__3548__auto____6496;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____6497 = reader;

if(cljs.core.truth_(and__3546__auto____6497))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____6497;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____6498 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____6498))
{return or__3548__auto____6498;
} else
{var or__3548__auto____6499 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____6499))
{return or__3548__auto____6499;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
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
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__6500 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__6500.buffer_atom))))
{var idx__6501 = cljs.core.deref.call(null,this__6500.index_atom);

cljs.core.swap_BANG_.call(null,this__6500.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__6500.s,idx__6501);
} else
{var buf__6502 = cljs.core.deref.call(null,this__6500.buffer_atom);

cljs.core.swap_BANG_.call(null,this__6500.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__6502);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__6503 = this;
return cljs.core.swap_BANG_.call(null,this__6503.buffer_atom,(function (p1__6493_SHARP_){
return cljs.core.cons.call(null,ch,p1__6493_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____6504 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____6504))
{return or__3548__auto____6504;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____6505 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____6505))
{return or__3548__auto____6505;
} else
{var and__3546__auto____6507 = (function (){var or__3548__auto____6506 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____6506))
{return or__3548__auto____6506;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____6507))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__6508 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__6508);
return next_ch__6508;
})());
} else
{return and__3546__auto____6507;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__6509){
var rdr = cljs.core.first(arglist__6509);
var msg = cljs.core.rest(arglist__6509);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____6510 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____6510))
{var and__3546__auto____6511 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____6511))
{var and__3546__auto____6512 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____6512))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____6512;
}
} else
{return and__3546__auto____6511;
}
} else
{return and__3546__auto____6510;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__6513 = (new goog.string.StringBuffer(initch));
var ch__6514 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6515 = cljs.core.nil_QMARK_.call(null,ch__6514);

if(cljs.core.truth_(or__3548__auto____6515))
{return or__3548__auto____6515;
} else
{var or__3548__auto____6516 = cljs.reader.whitespace_QMARK_.call(null,ch__6514);

if(cljs.core.truth_(or__3548__auto____6516))
{return or__3548__auto____6516;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__6514);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__6514);
return sb__6513.toString();
} else
{{
var G__6517 = (function (){sb__6513.append(ch__6514);
return sb__6513;
})();
var G__6518 = cljs.reader.read_char.call(null,rdr);
sb__6513 = G__6517;
ch__6514 = G__6518;
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
var ch__6519 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____6520 = cljs.core._EQ_.call(null,ch__6519,"n");

if(cljs.core.truth_(or__3548__auto____6520))
{return or__3548__auto____6520;
} else
{var or__3548__auto____6521 = cljs.core._EQ_.call(null,ch__6519,"r");

if(cljs.core.truth_(or__3548__auto____6521))
{return or__3548__auto____6521;
} else
{return cljs.core.nil_QMARK_.call(null,ch__6519);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__6522 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__6523 = cljs.core.nth.call(null,groups__6522,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____6524 = (void 0 === group3__6523);

if(cljs.core.truth_(or__3548__auto____6524))
{return or__3548__auto____6524;
} else
{return (group3__6523.length < 1);
}
})())))
{return 0;
} else
{var negate__6526 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__6522,1)))?-1:1);
var vec__6525__6527 = (cljs.core.truth_(cljs.core.nth.call(null,groups__6522,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6522,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__6522,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6522,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__6522,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6522,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__6522,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__6522,7),parseInt.call(null,cljs.core.nth.call(null,groups__6522,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__6528 = cljs.core.nth.call(null,vec__6525__6527,0,null);
var radix__6529 = cljs.core.nth.call(null,vec__6525__6527,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__6528)))
{return null;
} else
{return (negate__6526 * parseInt.call(null,n__6528,radix__6529));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__6530 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__6531 = cljs.core.nth.call(null,groups__6530,1);
var denominator__6532 = cljs.core.nth.call(null,groups__6530,2);

return (parseInt.call(null,numinator__6531) / parseInt.call(null,denominator__6532));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__6533 = cljs.reader.read_char.call(null,reader);
var mapresult__6534 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__6533);

if(cljs.core.truth_(mapresult__6534))
{return mapresult__6534;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____6535 = cljs.core._EQ_.call(null,"u",ch__6533);

if(cljs.core.truth_(or__3548__auto____6535))
{return or__3548__auto____6535;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__6533);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__6533);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__6533);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__6536 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__6536)))
{{
var G__6537 = cljs.reader.read_char.call(null,rdr);
ch__6536 = G__6537;
continue;
}
} else
{return ch__6536;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__6538 = cljs.core.Vector.fromArray([]);

while(true){
var ch__6539 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__6539))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__6539)))
{return a__6538;
} else
{var temp__3695__auto____6540 = cljs.core.get.call(null,cljs.reader.macros,ch__6539);

if(cljs.core.truth_(temp__3695__auto____6540))
{var macrofn__6541 = temp__3695__auto____6540;

var mret__6542 = macrofn__6541.call(null,rdr,ch__6539);

{
var G__6544 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__6542,rdr))?a__6538:cljs.core.conj.call(null,a__6538,mret__6542));
a__6538 = G__6544;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__6539);
var o__6543 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__6545 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__6543,rdr))?a__6538:cljs.core.conj.call(null,a__6538,o__6543));
a__6538 = G__6545;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__6546 = cljs.reader.read_char.call(null,rdr);
var dm__6547 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__6546);

if(cljs.core.truth_(dm__6547))
{return dm__6547.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__6546);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__6548 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__6548))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__6548);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__6549 = (new goog.string.StringBuffer(initch));
var ch__6550 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6551 = cljs.core.nil_QMARK_.call(null,ch__6550);

if(cljs.core.truth_(or__3548__auto____6551))
{return or__3548__auto____6551;
} else
{var or__3548__auto____6552 = cljs.reader.whitespace_QMARK_.call(null,ch__6550);

if(cljs.core.truth_(or__3548__auto____6552))
{return or__3548__auto____6552;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__6550);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__6550);
var s__6553 = buffer__6549.toString();

var or__3548__auto____6554 = cljs.reader.match_number.call(null,s__6553);

if(cljs.core.truth_(or__3548__auto____6554))
{return or__3548__auto____6554;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__6553,"]");
}
} else
{{
var G__6555 = (function (){buffer__6549.append(ch__6550);
return buffer__6549;
})();
var G__6556 = cljs.reader.read_char.call(null,reader);
buffer__6549 = G__6555;
ch__6550 = G__6556;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__6557 = (new goog.string.StringBuffer());
var ch__6558 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__6558)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__6558)))
{{
var G__6559 = (function (){buffer__6557.append(cljs.reader.escape_char.call(null,buffer__6557,reader));
return buffer__6557;
})();
var G__6560 = cljs.reader.read_char.call(null,reader);
buffer__6557 = G__6559;
ch__6558 = G__6560;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__6558)))
{return buffer__6557.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__6561 = (function (){buffer__6557.append(ch__6558);
return buffer__6557;
})();
var G__6562 = cljs.reader.read_char.call(null,reader);
buffer__6557 = G__6561;
ch__6558 = G__6562;
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
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__6563 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__6563,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__6563,0,token__6563.indexOf("/")),cljs.core.subs.call(null,token__6563,(token__6563.indexOf("/") + 1),token__6563.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__6563,cljs.core.symbol.call(null,token__6563));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__6565 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__6564__6566 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__6565);
var token__6567 = cljs.core.nth.call(null,vec__6564__6566,0,null);
var ns__6568 = cljs.core.nth.call(null,vec__6564__6566,1,null);
var name__6569 = cljs.core.nth.call(null,vec__6564__6566,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____6571 = (function (){var and__3546__auto____6570 = cljs.core.not.call(null,(void 0 === ns__6568));

if(cljs.core.truth_(and__3546__auto____6570))
{return (ns__6568.substring((ns__6568.length - 2),ns__6568.length) === ":/");
} else
{return and__3546__auto____6570;
}
})();

if(cljs.core.truth_(or__3548__auto____6571))
{return or__3548__auto____6571;
} else
{var or__3548__auto____6572 = ((name__6569[(name__6569.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____6572))
{return or__3548__auto____6572;
} else
{return cljs.core.not.call(null,(token__6567.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__6567);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__6568.substring(0,ns__6568.indexOf("/")),name__6569);
} else
{return cljs.core.keyword.call(null,token__6567);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
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
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__6573 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__6573)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__6574 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__349__auto____6575 = o__6574;

if(cljs.core.truth_((function (){var and__3546__auto____6576 = x__349__auto____6575;

if(cljs.core.truth_(and__3546__auto____6576))
{var and__3546__auto____6577 = x__349__auto____6575.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____6577))
{return cljs.core.not.call(null,x__349__auto____6575.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____6577;
}
} else
{return and__3546__auto____6576;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__349__auto____6575);
}
})()))
{return cljs.core.with_meta.call(null,o__6574,cljs.core.merge.call(null,cljs.core.meta.call(null,o__6574),m__6573));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__6578 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__6578)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__6578)))
{{
var G__6580 = reader;
var G__6581 = eof_is_error;
var G__6582 = sentinel;
var G__6583 = is_recursive;
reader = G__6580;
eof_is_error = G__6581;
sentinel = G__6582;
is_recursive = G__6583;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__6578)))
{{
var G__6584 = cljs.reader.read_comment.call(null,reader,ch__6578);
var G__6585 = eof_is_error;
var G__6586 = sentinel;
var G__6587 = is_recursive;
reader = G__6584;
eof_is_error = G__6585;
sentinel = G__6586;
is_recursive = G__6587;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__6579 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__6578))?cljs.reader.macros.call(null,ch__6578).call(null,reader,ch__6578):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__6578))?cljs.reader.read_number.call(null,reader,ch__6578):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__6578):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__6579,reader)))
{{
var G__6588 = reader;
var G__6589 = eof_is_error;
var G__6590 = sentinel;
var G__6591 = is_recursive;
reader = G__6588;
eof_is_error = G__6589;
sentinel = G__6590;
is_recursive = G__6591;
continue;
}
} else
{return res__6579;
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
var r__6592 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__6592,true,null,false);
});

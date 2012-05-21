goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4818 = reader;

if(cljs.core.truth_(and__3546__auto____4818))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4818;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4819 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4819))
{return or__3548__auto____4819;
} else
{var or__3548__auto____4820 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4820))
{return or__3548__auto____4820;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4821 = reader;

if(cljs.core.truth_(and__3546__auto____4821))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4821;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4822 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4822))
{return or__3548__auto____4822;
} else
{var or__3548__auto____4823 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4823))
{return or__3548__auto____4823;
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
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__4824 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4824.buffer_atom))))
{var idx__4825 = cljs.core.deref.call(null,this__4824.index_atom);

cljs.core.swap_BANG_.call(null,this__4824.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4824.s,idx__4825);
} else
{var buf__4826 = cljs.core.deref.call(null,this__4824.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4824.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4826);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4827 = this;
return cljs.core.swap_BANG_.call(null,this__4827.buffer_atom,(function (p1__4817_SHARP_){
return cljs.core.cons.call(null,ch,p1__4817_SHARP_);
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
var or__3548__auto____4828 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4828))
{return or__3548__auto____4828;
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
var or__3548__auto____4829 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4829))
{return or__3548__auto____4829;
} else
{var and__3546__auto____4831 = (function (){var or__3548__auto____4830 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4830))
{return or__3548__auto____4830;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4831))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4832 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4832);
return next_ch__4832;
})());
} else
{return and__3546__auto____4831;
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
reader_error.cljs$lang$applyTo = (function (arglist__4833){
var rdr = cljs.core.first(arglist__4833);
var msg = cljs.core.rest(arglist__4833);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4834 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4834))
{var and__3546__auto____4835 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4835))
{var and__3546__auto____4836 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____4836))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4836;
}
} else
{return and__3546__auto____4835;
}
} else
{return and__3546__auto____4834;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4837 = (new goog.string.StringBuffer(initch));
var ch__4838 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4839 = (ch__4838 === null);

if(cljs.core.truth_(or__3548__auto____4839))
{return or__3548__auto____4839;
} else
{var or__3548__auto____4840 = cljs.reader.whitespace_QMARK_.call(null,ch__4838);

if(cljs.core.truth_(or__3548__auto____4840))
{return or__3548__auto____4840;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4838);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4838);
return sb__4837.toString();
} else
{{
var G__4841 = (function (){sb__4837.append(ch__4838);
return sb__4837;
})();
var G__4842 = cljs.reader.read_char.call(null,rdr);
sb__4837 = G__4841;
ch__4838 = G__4842;
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
var ch__4843 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4844 = cljs.core._EQ_.call(null,ch__4843,"n");

if(cljs.core.truth_(or__3548__auto____4844))
{return or__3548__auto____4844;
} else
{var or__3548__auto____4845 = cljs.core._EQ_.call(null,ch__4843,"r");

if(cljs.core.truth_(or__3548__auto____4845))
{return or__3548__auto____4845;
} else
{return (ch__4843 === null);
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
var groups__4846 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__4847 = cljs.core.nth.call(null,groups__4846,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____4848 = (void 0 === group3__4847);

if(cljs.core.truth_(or__3548__auto____4848))
{return or__3548__auto____4848;
} else
{return (group3__4847.length < 1);
}
})())))
{return 0;
} else
{var negate__4850 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4846,1)))?-1:1);
var vec__4849__4851 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4846,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4846,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4846,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4846,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4846,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4846,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4846,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4846,7),parseInt.call(null,cljs.core.nth.call(null,groups__4846,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4852 = cljs.core.nth.call(null,vec__4849__4851,0,null);
var radix__4853 = cljs.core.nth.call(null,vec__4849__4851,1,null);

if(cljs.core.truth_((n__4852 === null)))
{return null;
} else
{return (negate__4850 * parseInt.call(null,n__4852,radix__4853));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4854 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4855 = cljs.core.nth.call(null,groups__4854,1);
var denominator__4856 = cljs.core.nth.call(null,groups__4854,2);

return (parseInt.call(null,numinator__4855) / parseInt.call(null,denominator__4856));
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
var ch__4857 = cljs.reader.read_char.call(null,reader);
var mapresult__4858 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4857);

if(cljs.core.truth_(mapresult__4858))
{return mapresult__4858;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4859 = cljs.core._EQ_.call(null,"u",ch__4857);

if(cljs.core.truth_(or__3548__auto____4859))
{return or__3548__auto____4859;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4857);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4857);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4857);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4860 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4860)))
{{
var G__4861 = cljs.reader.read_char.call(null,rdr);
ch__4860 = G__4861;
continue;
}
} else
{return ch__4860;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4862 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4863 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4863))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4863)))
{return a__4862;
} else
{var temp__3695__auto____4864 = cljs.core.get.call(null,cljs.reader.macros,ch__4863);

if(cljs.core.truth_(temp__3695__auto____4864))
{var macrofn__4865 = temp__3695__auto____4864;

var mret__4866 = macrofn__4865.call(null,rdr,ch__4863);

{
var G__4868 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4866,rdr))?a__4862:cljs.core.conj.call(null,a__4862,mret__4866));
a__4862 = G__4868;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4863);
var o__4867 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4869 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4867,rdr))?a__4862:cljs.core.conj.call(null,a__4862,o__4867));
a__4862 = G__4869;
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
var ch__4870 = cljs.reader.read_char.call(null,rdr);
var dm__4871 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4870);

if(cljs.core.truth_(dm__4871))
{return dm__4871.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4870);
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
var l__4872 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4872))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4872);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4873 = (new goog.string.StringBuffer(initch));
var ch__4874 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4875 = (ch__4874 === null);

if(cljs.core.truth_(or__3548__auto____4875))
{return or__3548__auto____4875;
} else
{var or__3548__auto____4876 = cljs.reader.whitespace_QMARK_.call(null,ch__4874);

if(cljs.core.truth_(or__3548__auto____4876))
{return or__3548__auto____4876;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4874);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4874);
var s__4877 = buffer__4873.toString();

var or__3548__auto____4878 = cljs.reader.match_number.call(null,s__4877);

if(cljs.core.truth_(or__3548__auto____4878))
{return or__3548__auto____4878;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4877,"]");
}
} else
{{
var G__4879 = (function (){buffer__4873.append(ch__4874);
return buffer__4873;
})();
var G__4880 = cljs.reader.read_char.call(null,reader);
buffer__4873 = G__4879;
ch__4874 = G__4880;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4881 = (new goog.string.StringBuffer());
var ch__4882 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__4882 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4882)))
{{
var G__4883 = (function (){buffer__4881.append(cljs.reader.escape_char.call(null,buffer__4881,reader));
return buffer__4881;
})();
var G__4884 = cljs.reader.read_char.call(null,reader);
buffer__4881 = G__4883;
ch__4882 = G__4884;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4882)))
{return buffer__4881.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4885 = (function (){buffer__4881.append(ch__4882);
return buffer__4881;
})();
var G__4886 = cljs.reader.read_char.call(null,reader);
buffer__4881 = G__4885;
ch__4882 = G__4886;
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
var token__4887 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4887,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4887,0,token__4887.indexOf("/")),cljs.core.subs.call(null,token__4887,(token__4887.indexOf("/") + 1),token__4887.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4887,cljs.core.symbol.call(null,token__4887));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4889 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__4888__4890 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__4889);
var token__4891 = cljs.core.nth.call(null,vec__4888__4890,0,null);
var ns__4892 = cljs.core.nth.call(null,vec__4888__4890,1,null);
var name__4893 = cljs.core.nth.call(null,vec__4888__4890,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____4895 = (function (){var and__3546__auto____4894 = cljs.core.not.call(null,(void 0 === ns__4892));

if(cljs.core.truth_(and__3546__auto____4894))
{return (ns__4892.substring((ns__4892.length - 2),ns__4892.length) === ":/");
} else
{return and__3546__auto____4894;
}
})();

if(cljs.core.truth_(or__3548__auto____4895))
{return or__3548__auto____4895;
} else
{var or__3548__auto____4896 = ((name__4893[(name__4893.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____4896))
{return or__3548__auto____4896;
} else
{return cljs.core.not.call(null,(token__4891.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__4891);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__4892.substring(0,ns__4892.indexOf("/")),name__4893);
} else
{return cljs.core.keyword.call(null,token__4891);
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
var m__4897 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4897)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4898 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__354__auto____4899 = o__4898;

if(cljs.core.truth_((function (){var and__3546__auto____4900 = x__354__auto____4899;

if(cljs.core.truth_(and__3546__auto____4900))
{var and__3546__auto____4901 = x__354__auto____4899.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4901))
{return cljs.core.not.call(null,x__354__auto____4899.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4901;
}
} else
{return and__3546__auto____4900;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__354__auto____4899);
}
})()))
{return cljs.core.with_meta.call(null,o__4898,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4898),m__4897));
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
var ch__4902 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__4902 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4902)))
{{
var G__4904 = reader;
var G__4905 = eof_is_error;
var G__4906 = sentinel;
var G__4907 = is_recursive;
reader = G__4904;
eof_is_error = G__4905;
sentinel = G__4906;
is_recursive = G__4907;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4902)))
{{
var G__4908 = cljs.reader.read_comment.call(null,reader,ch__4902);
var G__4909 = eof_is_error;
var G__4910 = sentinel;
var G__4911 = is_recursive;
reader = G__4908;
eof_is_error = G__4909;
sentinel = G__4910;
is_recursive = G__4911;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4903 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4902))?cljs.reader.macros.call(null,ch__4902).call(null,reader,ch__4902):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4902))?cljs.reader.read_number.call(null,reader,ch__4902):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4902):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4903,reader)))
{{
var G__4912 = reader;
var G__4913 = eof_is_error;
var G__4914 = sentinel;
var G__4915 = is_recursive;
reader = G__4912;
eof_is_error = G__4913;
sentinel = G__4914;
is_recursive = G__4915;
continue;
}
} else
{return res__4903;
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
var r__4916 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4916,true,null,false);
});

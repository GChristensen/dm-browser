goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__5783 = (((x == null))?null:x);
if((p[goog.typeOf(x__5783)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$lang$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__5784__delegate = function (array,i,idxs){
return cljs.core.apply.cljs$lang$arity$3(aget,aget.cljs$lang$arity$2(array,i),idxs);
};
var G__5784 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5784__delegate.call(this, array, i, idxs);
};
G__5784.cljs$lang$maxFixedArity = 2;
G__5784.cljs$lang$applyTo = (function (arglist__5785){
var array = cljs.core.first(arglist__5785);
var i = cljs.core.first(cljs.core.next(arglist__5785));
var idxs = cljs.core.rest(cljs.core.next(arglist__5785));
return G__5784__delegate(array, i, idxs);
});
G__5784.cljs$lang$arity$variadic = G__5784__delegate;
return G__5784;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$lang$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.cljs$lang$arity$3((function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____5870 = this$;
if(and__3822__auto____5870)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____5870;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__1990__auto____5871 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5872 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5871)]);
if(or__3824__auto____5872)
{return or__3824__auto____5872;
} else
{var or__3824__auto____5873 = (cljs.core._invoke["_"]);
if(or__3824__auto____5873)
{return or__3824__auto____5873;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____5874 = this$;
if(and__3822__auto____5874)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____5874;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__1990__auto____5875 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5876 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5875)]);
if(or__3824__auto____5876)
{return or__3824__auto____5876;
} else
{var or__3824__auto____5877 = (cljs.core._invoke["_"]);
if(or__3824__auto____5877)
{return or__3824__auto____5877;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____5878 = this$;
if(and__3822__auto____5878)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____5878;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__1990__auto____5879 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5880 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5879)]);
if(or__3824__auto____5880)
{return or__3824__auto____5880;
} else
{var or__3824__auto____5881 = (cljs.core._invoke["_"]);
if(or__3824__auto____5881)
{return or__3824__auto____5881;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____5882 = this$;
if(and__3822__auto____5882)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____5882;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__1990__auto____5883 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5884 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5883)]);
if(or__3824__auto____5884)
{return or__3824__auto____5884;
} else
{var or__3824__auto____5885 = (cljs.core._invoke["_"]);
if(or__3824__auto____5885)
{return or__3824__auto____5885;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____5886 = this$;
if(and__3822__auto____5886)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____5886;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__1990__auto____5887 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5888 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5887)]);
if(or__3824__auto____5888)
{return or__3824__auto____5888;
} else
{var or__3824__auto____5889 = (cljs.core._invoke["_"]);
if(or__3824__auto____5889)
{return or__3824__auto____5889;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____5890 = this$;
if(and__3822__auto____5890)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____5890;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__1990__auto____5891 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5892 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5891)]);
if(or__3824__auto____5892)
{return or__3824__auto____5892;
} else
{var or__3824__auto____5893 = (cljs.core._invoke["_"]);
if(or__3824__auto____5893)
{return or__3824__auto____5893;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____5894 = this$;
if(and__3822__auto____5894)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____5894;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__1990__auto____5895 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5896 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5895)]);
if(or__3824__auto____5896)
{return or__3824__auto____5896;
} else
{var or__3824__auto____5897 = (cljs.core._invoke["_"]);
if(or__3824__auto____5897)
{return or__3824__auto____5897;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____5898 = this$;
if(and__3822__auto____5898)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____5898;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__1990__auto____5899 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5900 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5899)]);
if(or__3824__auto____5900)
{return or__3824__auto____5900;
} else
{var or__3824__auto____5901 = (cljs.core._invoke["_"]);
if(or__3824__auto____5901)
{return or__3824__auto____5901;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____5902 = this$;
if(and__3822__auto____5902)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____5902;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__1990__auto____5903 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5904 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5903)]);
if(or__3824__auto____5904)
{return or__3824__auto____5904;
} else
{var or__3824__auto____5905 = (cljs.core._invoke["_"]);
if(or__3824__auto____5905)
{return or__3824__auto____5905;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____5906 = this$;
if(and__3822__auto____5906)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____5906;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__1990__auto____5907 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5908 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5907)]);
if(or__3824__auto____5908)
{return or__3824__auto____5908;
} else
{var or__3824__auto____5909 = (cljs.core._invoke["_"]);
if(or__3824__auto____5909)
{return or__3824__auto____5909;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____5910 = this$;
if(and__3822__auto____5910)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____5910;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__1990__auto____5911 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5912 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5911)]);
if(or__3824__auto____5912)
{return or__3824__auto____5912;
} else
{var or__3824__auto____5913 = (cljs.core._invoke["_"]);
if(or__3824__auto____5913)
{return or__3824__auto____5913;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____5914 = this$;
if(and__3822__auto____5914)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____5914;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__1990__auto____5915 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5916 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5915)]);
if(or__3824__auto____5916)
{return or__3824__auto____5916;
} else
{var or__3824__auto____5917 = (cljs.core._invoke["_"]);
if(or__3824__auto____5917)
{return or__3824__auto____5917;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____5918 = this$;
if(and__3822__auto____5918)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____5918;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__1990__auto____5919 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5920 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5919)]);
if(or__3824__auto____5920)
{return or__3824__auto____5920;
} else
{var or__3824__auto____5921 = (cljs.core._invoke["_"]);
if(or__3824__auto____5921)
{return or__3824__auto____5921;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____5922 = this$;
if(and__3822__auto____5922)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____5922;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__1990__auto____5923 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5924 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5923)]);
if(or__3824__auto____5924)
{return or__3824__auto____5924;
} else
{var or__3824__auto____5925 = (cljs.core._invoke["_"]);
if(or__3824__auto____5925)
{return or__3824__auto____5925;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____5926 = this$;
if(and__3822__auto____5926)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____5926;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__1990__auto____5927 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5928 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5927)]);
if(or__3824__auto____5928)
{return or__3824__auto____5928;
} else
{var or__3824__auto____5929 = (cljs.core._invoke["_"]);
if(or__3824__auto____5929)
{return or__3824__auto____5929;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____5930 = this$;
if(and__3822__auto____5930)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____5930;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__1990__auto____5931 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5932 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5931)]);
if(or__3824__auto____5932)
{return or__3824__auto____5932;
} else
{var or__3824__auto____5933 = (cljs.core._invoke["_"]);
if(or__3824__auto____5933)
{return or__3824__auto____5933;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____5934 = this$;
if(and__3822__auto____5934)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____5934;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__1990__auto____5935 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5936 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5935)]);
if(or__3824__auto____5936)
{return or__3824__auto____5936;
} else
{var or__3824__auto____5937 = (cljs.core._invoke["_"]);
if(or__3824__auto____5937)
{return or__3824__auto____5937;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____5938 = this$;
if(and__3822__auto____5938)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____5938;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__1990__auto____5939 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5940 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5939)]);
if(or__3824__auto____5940)
{return or__3824__auto____5940;
} else
{var or__3824__auto____5941 = (cljs.core._invoke["_"]);
if(or__3824__auto____5941)
{return or__3824__auto____5941;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____5942 = this$;
if(and__3822__auto____5942)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____5942;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__1990__auto____5943 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5944 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5943)]);
if(or__3824__auto____5944)
{return or__3824__auto____5944;
} else
{var or__3824__auto____5945 = (cljs.core._invoke["_"]);
if(or__3824__auto____5945)
{return or__3824__auto____5945;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____5946 = this$;
if(and__3822__auto____5946)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____5946;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__1990__auto____5947 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5948 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5947)]);
if(or__3824__auto____5948)
{return or__3824__auto____5948;
} else
{var or__3824__auto____5949 = (cljs.core._invoke["_"]);
if(or__3824__auto____5949)
{return or__3824__auto____5949;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____5950 = this$;
if(and__3822__auto____5950)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____5950;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__1990__auto____5951 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____5952 = (cljs.core._invoke[goog.typeOf(x__1990__auto____5951)]);
if(or__3824__auto____5952)
{return or__3824__auto____5952;
} else
{var or__3824__auto____5953 = (cljs.core._invoke["_"]);
if(or__3824__auto____5953)
{return or__3824__auto____5953;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____5958 = coll;
if(and__3822__auto____5958)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____5958;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__1990__auto____5959 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____5960 = (cljs.core._count[goog.typeOf(x__1990__auto____5959)]);
if(or__3824__auto____5960)
{return or__3824__auto____5960;
} else
{var or__3824__auto____5961 = (cljs.core._count["_"]);
if(or__3824__auto____5961)
{return or__3824__auto____5961;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____5966 = coll;
if(and__3822__auto____5966)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____5966;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__1990__auto____5967 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____5968 = (cljs.core._empty[goog.typeOf(x__1990__auto____5967)]);
if(or__3824__auto____5968)
{return or__3824__auto____5968;
} else
{var or__3824__auto____5969 = (cljs.core._empty["_"]);
if(or__3824__auto____5969)
{return or__3824__auto____5969;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____5974 = coll;
if(and__3822__auto____5974)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____5974;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__1990__auto____5975 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____5976 = (cljs.core._conj[goog.typeOf(x__1990__auto____5975)]);
if(or__3824__auto____5976)
{return or__3824__auto____5976;
} else
{var or__3824__auto____5977 = (cljs.core._conj["_"]);
if(or__3824__auto____5977)
{return or__3824__auto____5977;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____5986 = coll;
if(and__3822__auto____5986)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____5986;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__1990__auto____5987 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____5988 = (cljs.core._nth[goog.typeOf(x__1990__auto____5987)]);
if(or__3824__auto____5988)
{return or__3824__auto____5988;
} else
{var or__3824__auto____5989 = (cljs.core._nth["_"]);
if(or__3824__auto____5989)
{return or__3824__auto____5989;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____5990 = coll;
if(and__3822__auto____5990)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____5990;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__1990__auto____5991 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____5992 = (cljs.core._nth[goog.typeOf(x__1990__auto____5991)]);
if(or__3824__auto____5992)
{return or__3824__auto____5992;
} else
{var or__3824__auto____5993 = (cljs.core._nth["_"]);
if(or__3824__auto____5993)
{return or__3824__auto____5993;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____5998 = coll;
if(and__3822__auto____5998)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____5998;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__1990__auto____5999 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6000 = (cljs.core._first[goog.typeOf(x__1990__auto____5999)]);
if(or__3824__auto____6000)
{return or__3824__auto____6000;
} else
{var or__3824__auto____6001 = (cljs.core._first["_"]);
if(or__3824__auto____6001)
{return or__3824__auto____6001;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6006 = coll;
if(and__3822__auto____6006)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6006;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__1990__auto____6007 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6008 = (cljs.core._rest[goog.typeOf(x__1990__auto____6007)]);
if(or__3824__auto____6008)
{return or__3824__auto____6008;
} else
{var or__3824__auto____6009 = (cljs.core._rest["_"]);
if(or__3824__auto____6009)
{return or__3824__auto____6009;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6014 = coll;
if(and__3822__auto____6014)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6014;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__1990__auto____6015 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6016 = (cljs.core._next[goog.typeOf(x__1990__auto____6015)]);
if(or__3824__auto____6016)
{return or__3824__auto____6016;
} else
{var or__3824__auto____6017 = (cljs.core._next["_"]);
if(or__3824__auto____6017)
{return or__3824__auto____6017;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6026 = o;
if(and__3822__auto____6026)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6026;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__1990__auto____6027 = (((o == null))?null:o);
return (function (){var or__3824__auto____6028 = (cljs.core._lookup[goog.typeOf(x__1990__auto____6027)]);
if(or__3824__auto____6028)
{return or__3824__auto____6028;
} else
{var or__3824__auto____6029 = (cljs.core._lookup["_"]);
if(or__3824__auto____6029)
{return or__3824__auto____6029;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6030 = o;
if(and__3822__auto____6030)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6030;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__1990__auto____6031 = (((o == null))?null:o);
return (function (){var or__3824__auto____6032 = (cljs.core._lookup[goog.typeOf(x__1990__auto____6031)]);
if(or__3824__auto____6032)
{return or__3824__auto____6032;
} else
{var or__3824__auto____6033 = (cljs.core._lookup["_"]);
if(or__3824__auto____6033)
{return or__3824__auto____6033;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6038 = coll;
if(and__3822__auto____6038)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6038;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__1990__auto____6039 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6040 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__1990__auto____6039)]);
if(or__3824__auto____6040)
{return or__3824__auto____6040;
} else
{var or__3824__auto____6041 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6041)
{return or__3824__auto____6041;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6046 = coll;
if(and__3822__auto____6046)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6046;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__1990__auto____6047 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6048 = (cljs.core._assoc[goog.typeOf(x__1990__auto____6047)]);
if(or__3824__auto____6048)
{return or__3824__auto____6048;
} else
{var or__3824__auto____6049 = (cljs.core._assoc["_"]);
if(or__3824__auto____6049)
{return or__3824__auto____6049;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6054 = coll;
if(and__3822__auto____6054)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6054;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__1990__auto____6055 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6056 = (cljs.core._dissoc[goog.typeOf(x__1990__auto____6055)]);
if(or__3824__auto____6056)
{return or__3824__auto____6056;
} else
{var or__3824__auto____6057 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6057)
{return or__3824__auto____6057;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6062 = coll;
if(and__3822__auto____6062)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6062;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__1990__auto____6063 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6064 = (cljs.core._key[goog.typeOf(x__1990__auto____6063)]);
if(or__3824__auto____6064)
{return or__3824__auto____6064;
} else
{var or__3824__auto____6065 = (cljs.core._key["_"]);
if(or__3824__auto____6065)
{return or__3824__auto____6065;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6070 = coll;
if(and__3822__auto____6070)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6070;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__1990__auto____6071 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6072 = (cljs.core._val[goog.typeOf(x__1990__auto____6071)]);
if(or__3824__auto____6072)
{return or__3824__auto____6072;
} else
{var or__3824__auto____6073 = (cljs.core._val["_"]);
if(or__3824__auto____6073)
{return or__3824__auto____6073;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6078 = coll;
if(and__3822__auto____6078)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6078;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__1990__auto____6079 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6080 = (cljs.core._disjoin[goog.typeOf(x__1990__auto____6079)]);
if(or__3824__auto____6080)
{return or__3824__auto____6080;
} else
{var or__3824__auto____6081 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6081)
{return or__3824__auto____6081;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6086 = coll;
if(and__3822__auto____6086)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6086;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__1990__auto____6087 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6088 = (cljs.core._peek[goog.typeOf(x__1990__auto____6087)]);
if(or__3824__auto____6088)
{return or__3824__auto____6088;
} else
{var or__3824__auto____6089 = (cljs.core._peek["_"]);
if(or__3824__auto____6089)
{return or__3824__auto____6089;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6094 = coll;
if(and__3822__auto____6094)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6094;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__1990__auto____6095 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6096 = (cljs.core._pop[goog.typeOf(x__1990__auto____6095)]);
if(or__3824__auto____6096)
{return or__3824__auto____6096;
} else
{var or__3824__auto____6097 = (cljs.core._pop["_"]);
if(or__3824__auto____6097)
{return or__3824__auto____6097;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6102 = coll;
if(and__3822__auto____6102)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6102;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__1990__auto____6103 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6104 = (cljs.core._assoc_n[goog.typeOf(x__1990__auto____6103)]);
if(or__3824__auto____6104)
{return or__3824__auto____6104;
} else
{var or__3824__auto____6105 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6105)
{return or__3824__auto____6105;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6110 = o;
if(and__3822__auto____6110)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6110;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__1990__auto____6111 = (((o == null))?null:o);
return (function (){var or__3824__auto____6112 = (cljs.core._deref[goog.typeOf(x__1990__auto____6111)]);
if(or__3824__auto____6112)
{return or__3824__auto____6112;
} else
{var or__3824__auto____6113 = (cljs.core._deref["_"]);
if(or__3824__auto____6113)
{return or__3824__auto____6113;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6118 = o;
if(and__3822__auto____6118)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6118;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__1990__auto____6119 = (((o == null))?null:o);
return (function (){var or__3824__auto____6120 = (cljs.core._deref_with_timeout[goog.typeOf(x__1990__auto____6119)]);
if(or__3824__auto____6120)
{return or__3824__auto____6120;
} else
{var or__3824__auto____6121 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6121)
{return or__3824__auto____6121;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6126 = o;
if(and__3822__auto____6126)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6126;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__1990__auto____6127 = (((o == null))?null:o);
return (function (){var or__3824__auto____6128 = (cljs.core._meta[goog.typeOf(x__1990__auto____6127)]);
if(or__3824__auto____6128)
{return or__3824__auto____6128;
} else
{var or__3824__auto____6129 = (cljs.core._meta["_"]);
if(or__3824__auto____6129)
{return or__3824__auto____6129;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6134 = o;
if(and__3822__auto____6134)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6134;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__1990__auto____6135 = (((o == null))?null:o);
return (function (){var or__3824__auto____6136 = (cljs.core._with_meta[goog.typeOf(x__1990__auto____6135)]);
if(or__3824__auto____6136)
{return or__3824__auto____6136;
} else
{var or__3824__auto____6137 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6137)
{return or__3824__auto____6137;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6146 = coll;
if(and__3822__auto____6146)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6146;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__1990__auto____6147 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6148 = (cljs.core._reduce[goog.typeOf(x__1990__auto____6147)]);
if(or__3824__auto____6148)
{return or__3824__auto____6148;
} else
{var or__3824__auto____6149 = (cljs.core._reduce["_"]);
if(or__3824__auto____6149)
{return or__3824__auto____6149;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6150 = coll;
if(and__3822__auto____6150)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6150;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__1990__auto____6151 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6152 = (cljs.core._reduce[goog.typeOf(x__1990__auto____6151)]);
if(or__3824__auto____6152)
{return or__3824__auto____6152;
} else
{var or__3824__auto____6153 = (cljs.core._reduce["_"]);
if(or__3824__auto____6153)
{return or__3824__auto____6153;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6158 = coll;
if(and__3822__auto____6158)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6158;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__1990__auto____6159 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6160 = (cljs.core._kv_reduce[goog.typeOf(x__1990__auto____6159)]);
if(or__3824__auto____6160)
{return or__3824__auto____6160;
} else
{var or__3824__auto____6161 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6161)
{return or__3824__auto____6161;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6166 = o;
if(and__3822__auto____6166)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6166;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__1990__auto____6167 = (((o == null))?null:o);
return (function (){var or__3824__auto____6168 = (cljs.core._equiv[goog.typeOf(x__1990__auto____6167)]);
if(or__3824__auto____6168)
{return or__3824__auto____6168;
} else
{var or__3824__auto____6169 = (cljs.core._equiv["_"]);
if(or__3824__auto____6169)
{return or__3824__auto____6169;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6174 = o;
if(and__3822__auto____6174)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6174;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__1990__auto____6175 = (((o == null))?null:o);
return (function (){var or__3824__auto____6176 = (cljs.core._hash[goog.typeOf(x__1990__auto____6175)]);
if(or__3824__auto____6176)
{return or__3824__auto____6176;
} else
{var or__3824__auto____6177 = (cljs.core._hash["_"]);
if(or__3824__auto____6177)
{return or__3824__auto____6177;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6182 = o;
if(and__3822__auto____6182)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6182;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__1990__auto____6183 = (((o == null))?null:o);
return (function (){var or__3824__auto____6184 = (cljs.core._seq[goog.typeOf(x__1990__auto____6183)]);
if(or__3824__auto____6184)
{return or__3824__auto____6184;
} else
{var or__3824__auto____6185 = (cljs.core._seq["_"]);
if(or__3824__auto____6185)
{return or__3824__auto____6185;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6190 = coll;
if(and__3822__auto____6190)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6190;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__1990__auto____6191 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6192 = (cljs.core._rseq[goog.typeOf(x__1990__auto____6191)]);
if(or__3824__auto____6192)
{return or__3824__auto____6192;
} else
{var or__3824__auto____6193 = (cljs.core._rseq["_"]);
if(or__3824__auto____6193)
{return or__3824__auto____6193;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6198 = coll;
if(and__3822__auto____6198)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6198;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__1990__auto____6199 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6200 = (cljs.core._sorted_seq[goog.typeOf(x__1990__auto____6199)]);
if(or__3824__auto____6200)
{return or__3824__auto____6200;
} else
{var or__3824__auto____6201 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6201)
{return or__3824__auto____6201;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6206 = coll;
if(and__3822__auto____6206)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6206;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__1990__auto____6207 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6208 = (cljs.core._sorted_seq_from[goog.typeOf(x__1990__auto____6207)]);
if(or__3824__auto____6208)
{return or__3824__auto____6208;
} else
{var or__3824__auto____6209 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6214 = coll;
if(and__3822__auto____6214)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6214;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__1990__auto____6215 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6216 = (cljs.core._entry_key[goog.typeOf(x__1990__auto____6215)]);
if(or__3824__auto____6216)
{return or__3824__auto____6216;
} else
{var or__3824__auto____6217 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6217)
{return or__3824__auto____6217;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6222 = coll;
if(and__3822__auto____6222)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6222;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__1990__auto____6223 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6224 = (cljs.core._comparator[goog.typeOf(x__1990__auto____6223)]);
if(or__3824__auto____6224)
{return or__3824__auto____6224;
} else
{var or__3824__auto____6225 = (cljs.core._comparator["_"]);
if(or__3824__auto____6225)
{return or__3824__auto____6225;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6230 = o;
if(and__3822__auto____6230)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6230;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__1990__auto____6231 = (((o == null))?null:o);
return (function (){var or__3824__auto____6232 = (cljs.core._pr_seq[goog.typeOf(x__1990__auto____6231)]);
if(or__3824__auto____6232)
{return or__3824__auto____6232;
} else
{var or__3824__auto____6233 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6238 = d;
if(and__3822__auto____6238)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6238;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__1990__auto____6239 = (((d == null))?null:d);
return (function (){var or__3824__auto____6240 = (cljs.core._realized_QMARK_[goog.typeOf(x__1990__auto____6239)]);
if(or__3824__auto____6240)
{return or__3824__auto____6240;
} else
{var or__3824__auto____6241 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6241)
{return or__3824__auto____6241;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6246 = this$;
if(and__3822__auto____6246)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6246;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__1990__auto____6247 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6248 = (cljs.core._notify_watches[goog.typeOf(x__1990__auto____6247)]);
if(or__3824__auto____6248)
{return or__3824__auto____6248;
} else
{var or__3824__auto____6249 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6249)
{return or__3824__auto____6249;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6254 = this$;
if(and__3822__auto____6254)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6254;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__1990__auto____6255 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6256 = (cljs.core._add_watch[goog.typeOf(x__1990__auto____6255)]);
if(or__3824__auto____6256)
{return or__3824__auto____6256;
} else
{var or__3824__auto____6257 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6262 = this$;
if(and__3822__auto____6262)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6262;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__1990__auto____6263 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6264 = (cljs.core._remove_watch[goog.typeOf(x__1990__auto____6263)]);
if(or__3824__auto____6264)
{return or__3824__auto____6264;
} else
{var or__3824__auto____6265 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6265)
{return or__3824__auto____6265;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6270 = coll;
if(and__3822__auto____6270)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6270;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__1990__auto____6271 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6272 = (cljs.core._as_transient[goog.typeOf(x__1990__auto____6271)]);
if(or__3824__auto____6272)
{return or__3824__auto____6272;
} else
{var or__3824__auto____6273 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6273)
{return or__3824__auto____6273;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6278 = tcoll;
if(and__3822__auto____6278)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6278;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__1990__auto____6279 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6280 = (cljs.core._conj_BANG_[goog.typeOf(x__1990__auto____6279)]);
if(or__3824__auto____6280)
{return or__3824__auto____6280;
} else
{var or__3824__auto____6281 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6286 = tcoll;
if(and__3822__auto____6286)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6286;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__1990__auto____6287 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6288 = (cljs.core._persistent_BANG_[goog.typeOf(x__1990__auto____6287)]);
if(or__3824__auto____6288)
{return or__3824__auto____6288;
} else
{var or__3824__auto____6289 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6289)
{return or__3824__auto____6289;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6294 = tcoll;
if(and__3822__auto____6294)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6294;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__1990__auto____6295 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6296 = (cljs.core._assoc_BANG_[goog.typeOf(x__1990__auto____6295)]);
if(or__3824__auto____6296)
{return or__3824__auto____6296;
} else
{var or__3824__auto____6297 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6297)
{return or__3824__auto____6297;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6302 = tcoll;
if(and__3822__auto____6302)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6302;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__1990__auto____6303 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6304 = (cljs.core._dissoc_BANG_[goog.typeOf(x__1990__auto____6303)]);
if(or__3824__auto____6304)
{return or__3824__auto____6304;
} else
{var or__3824__auto____6305 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6305)
{return or__3824__auto____6305;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6310 = tcoll;
if(and__3822__auto____6310)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6310;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__1990__auto____6311 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6312 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__1990__auto____6311)]);
if(or__3824__auto____6312)
{return or__3824__auto____6312;
} else
{var or__3824__auto____6313 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6313)
{return or__3824__auto____6313;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6318 = tcoll;
if(and__3822__auto____6318)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6318;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__1990__auto____6319 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6320 = (cljs.core._pop_BANG_[goog.typeOf(x__1990__auto____6319)]);
if(or__3824__auto____6320)
{return or__3824__auto____6320;
} else
{var or__3824__auto____6321 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6321)
{return or__3824__auto____6321;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6326 = tcoll;
if(and__3822__auto____6326)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6326;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__1990__auto____6327 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____6328 = (cljs.core._disjoin_BANG_[goog.typeOf(x__1990__auto____6327)]);
if(or__3824__auto____6328)
{return or__3824__auto____6328;
} else
{var or__3824__auto____6329 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6334 = x;
if(and__3822__auto____6334)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6334;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__1990__auto____6335 = (((x == null))?null:x);
return (function (){var or__3824__auto____6336 = (cljs.core._compare[goog.typeOf(x__1990__auto____6335)]);
if(or__3824__auto____6336)
{return or__3824__auto____6336;
} else
{var or__3824__auto____6337 = (cljs.core._compare["_"]);
if(or__3824__auto____6337)
{return or__3824__auto____6337;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6342 = coll;
if(and__3822__auto____6342)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6342;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__1990__auto____6343 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6344 = (cljs.core._drop_first[goog.typeOf(x__1990__auto____6343)]);
if(or__3824__auto____6344)
{return or__3824__auto____6344;
} else
{var or__3824__auto____6345 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6345)
{return or__3824__auto____6345;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6350 = coll;
if(and__3822__auto____6350)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6350;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__1990__auto____6351 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6352 = (cljs.core._chunked_first[goog.typeOf(x__1990__auto____6351)]);
if(or__3824__auto____6352)
{return or__3824__auto____6352;
} else
{var or__3824__auto____6353 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6353)
{return or__3824__auto____6353;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6358 = coll;
if(and__3822__auto____6358)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6358;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__1990__auto____6359 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6360 = (cljs.core._chunked_rest[goog.typeOf(x__1990__auto____6359)]);
if(or__3824__auto____6360)
{return or__3824__auto____6360;
} else
{var or__3824__auto____6361 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6361)
{return or__3824__auto____6361;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6366 = coll;
if(and__3822__auto____6366)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6366;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__1990__auto____6367 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6368 = (cljs.core._chunked_next[goog.typeOf(x__1990__auto____6367)]);
if(or__3824__auto____6368)
{return or__3824__auto____6368;
} else
{var or__3824__auto____6369 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6369)
{return or__3824__auto____6369;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6371 = (x === y);
if(or__3824__auto____6371)
{return or__3824__auto____6371;
} else
{return cljs.core._equiv(x,y);
}
});
var _EQ___3 = (function() { 
var G__6372__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__6373 = y;
var G__6374 = cljs.core.first(more);
var G__6375 = cljs.core.next(more);
x = G__6373;
y = G__6374;
more = G__6375;
continue;
}
} else
{return _EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__6372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6372__delegate.call(this, x, y, more);
};
G__6372.cljs$lang$maxFixedArity = 2;
G__6372.cljs$lang$applyTo = (function (arglist__6376){
var x = cljs.core.first(arglist__6376);
var y = cljs.core.first(cljs.core.next(arglist__6376));
var more = cljs.core.rest(cljs.core.next(arglist__6376));
return G__6372__delegate(x, y, more);
});
G__6372.cljs$lang$arity$variadic = G__6372__delegate;
return G__6372;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6377 = null;
var G__6377__2 = (function (o,k){
return null;
});
var G__6377__3 = (function (o,k,not_found){
return not_found;
});
G__6377 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6377__2.call(this,o,k);
case 3:
return G__6377__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6377;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.cljs$lang$arity$variadic(cljs.core.array_seq([k,v], 0));
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.cljs$lang$arity$1(o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6378 = null;
var G__6378__2 = (function (_,f){
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
});
var G__6378__3 = (function (_,f,start){
return start;
});
G__6378 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6378__2.call(this,_,f);
case 3:
return G__6378__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6378;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.cljs$lang$arity$1("nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.cljs$lang$arity$0();
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6379 = null;
var G__6379__2 = (function (_,n){
return null;
});
var G__6379__3 = (function (_,n,not_found){
return not_found;
});
G__6379 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6379__2.call(this,_,n);
case 3:
return G__6379__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6379;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____6380 = cljs.core.instance_QMARK_(Date,other);
if(and__3822__auto____6380)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____6380;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6393 = cljs.core._count(cicoll);
if((cnt__6393 === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__6394 = cljs.core._nth.cljs$lang$arity$2(cicoll,0);
var n__6395 = 1;
while(true){
if((n__6395 < cnt__6393))
{var nval__6396 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6394,cljs.core._nth.cljs$lang$arity$2(cicoll,n__6395)) : f.call(null,val__6394,cljs.core._nth.cljs$lang$arity$2(cicoll,n__6395)));
if(cljs.core.reduced_QMARK_(nval__6396))
{return cljs.core.deref(nval__6396);
} else
{{
var G__6405 = nval__6396;
var G__6406 = (n__6395 + 1);
val__6394 = G__6405;
n__6395 = G__6406;
continue;
}
}
} else
{return val__6394;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6397 = cljs.core._count(cicoll);
var val__6398 = val;
var n__6399 = 0;
while(true){
if((n__6399 < cnt__6397))
{var nval__6400 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6398,cljs.core._nth.cljs$lang$arity$2(cicoll,n__6399)) : f.call(null,val__6398,cljs.core._nth.cljs$lang$arity$2(cicoll,n__6399)));
if(cljs.core.reduced_QMARK_(nval__6400))
{return cljs.core.deref(nval__6400);
} else
{{
var G__6407 = nval__6400;
var G__6408 = (n__6399 + 1);
val__6398 = G__6407;
n__6399 = G__6408;
continue;
}
}
} else
{return val__6398;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6401 = cljs.core._count(cicoll);
var val__6402 = val;
var n__6403 = idx;
while(true){
if((n__6403 < cnt__6401))
{var nval__6404 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6402,cljs.core._nth.cljs$lang$arity$2(cicoll,n__6403)) : f.call(null,val__6402,cljs.core._nth.cljs$lang$arity$2(cicoll,n__6403)));
if(cljs.core.reduced_QMARK_(nval__6404))
{return cljs.core.deref(nval__6404);
} else
{{
var G__6409 = nval__6404;
var G__6410 = (n__6403 + 1);
val__6402 = G__6409;
n__6403 = G__6410;
continue;
}
}
} else
{return val__6402;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6423 = arr.length;
if((arr.length === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__6424 = (arr[0]);
var n__6425 = 1;
while(true){
if((n__6425 < cnt__6423))
{var nval__6426 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6424,(arr[n__6425])) : f.call(null,val__6424,(arr[n__6425])));
if(cljs.core.reduced_QMARK_(nval__6426))
{return cljs.core.deref(nval__6426);
} else
{{
var G__6435 = nval__6426;
var G__6436 = (n__6425 + 1);
val__6424 = G__6435;
n__6425 = G__6436;
continue;
}
}
} else
{return val__6424;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6427 = arr.length;
var val__6428 = val;
var n__6429 = 0;
while(true){
if((n__6429 < cnt__6427))
{var nval__6430 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6428,(arr[n__6429])) : f.call(null,val__6428,(arr[n__6429])));
if(cljs.core.reduced_QMARK_(nval__6430))
{return cljs.core.deref(nval__6430);
} else
{{
var G__6437 = nval__6430;
var G__6438 = (n__6429 + 1);
val__6428 = G__6437;
n__6429 = G__6438;
continue;
}
}
} else
{return val__6428;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6431 = arr.length;
var val__6432 = val;
var n__6433 = idx;
while(true){
if((n__6433 < cnt__6431))
{var nval__6434 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6432,(arr[n__6433])) : f.call(null,val__6432,(arr[n__6433])));
if(cljs.core.reduced_QMARK_(nval__6434))
{return cljs.core.deref(nval__6434);
} else
{{
var G__6439 = nval__6434;
var G__6440 = (n__6433 + 1);
val__6432 = G__6439;
n__6433 = G__6440;
continue;
}
}
} else
{return val__6432;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6441 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6442 = this;
if(((this__6442.i + 1) < this__6442.a.length))
{return (new cljs.core.IndexedSeq(this__6442.a,(this__6442.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6443 = this;
return cljs.core.cons(o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6444 = this;
var c__6445 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6445 > 0))
{return (new cljs.core.RSeq(coll,(c__6445 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6446 = this;
var this__6447 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__6447], 0));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6448 = this;
if(cljs.core.counted_QMARK_(this__6448.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__6448.a,f,(this__6448.a[this__6448.i]),(this__6448.i + 1));
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__6448.a[this__6448.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6449 = this;
if(cljs.core.counted_QMARK_(this__6449.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__6449.a,f,start,this__6449.i);
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6450 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6451 = this;
return (this__6451.a.length - this__6451.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6452 = this;
return (this__6452.a[this__6452.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6453 = this;
if(((this__6453.i + 1) < this__6453.a.length))
{return (new cljs.core.IndexedSeq(this__6453.a,(this__6453.i + 1)));
} else
{return cljs.core.list.cljs$lang$arity$0();
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6454 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6455 = this;
var i__6456 = (n + this__6455.i);
if((i__6456 < this__6455.a.length))
{return (this__6455.a[i__6456]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6457 = this;
var i__6458 = (n + this__6457.i);
if((i__6458 < this__6457.a.length))
{return (this__6457.a[i__6458]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$lang$arity$2(prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$lang$arity$2(array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$lang$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6459 = null;
var G__6459__2 = (function (array,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(array,f);
});
var G__6459__3 = (function (array,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(array,f,start);
});
G__6459 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6459__2.call(this,array,f);
case 3:
return G__6459__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6459;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6460 = null;
var G__6460__2 = (function (array,k){
return (array[k]);
});
var G__6460__3 = (function (array,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(array,k,not_found);
});
G__6460 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6460__2.call(this,array,k);
case 3:
return G__6460__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6460;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6461 = null;
var G__6461__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6461__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6461 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6461__2.call(this,array,n);
case 3:
return G__6461__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6461;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.cljs$lang$arity$2(array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6462 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6463 = this;
return cljs.core.cons(o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6464 = this;
var this__6465 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__6465], 0));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6466 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6467 = this;
return (this__6467.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6468 = this;
return cljs.core._nth.cljs$lang$arity$2(this__6468.ci,this__6468.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6469 = this;
if((this__6469.i > 0))
{return (new cljs.core.RSeq(this__6469.ci,(this__6469.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6470 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6471 = this;
return (new cljs.core.RSeq(this__6471.ci,this__6471.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6472 = this;
return this__6472.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6476__6477 = coll;
if(G__6476__6477)
{if((function (){var or__3824__auto____6478 = (G__6476__6477.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6478)
{return or__3824__auto____6478;
} else
{return G__6476__6477.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6476__6477.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__6476__6477);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__6476__6477);
}
})())
{return coll;
} else
{return cljs.core._seq(coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6483__6484 = coll;
if(G__6483__6484)
{if((function (){var or__3824__auto____6485 = (G__6483__6484.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6485)
{return or__3824__auto____6485;
} else
{return G__6483__6484.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6483__6484.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6483__6484);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6483__6484);
}
})())
{return cljs.core._first(coll);
} else
{var s__6486 = cljs.core.seq(coll);
if((s__6486 == null))
{return null;
} else
{return cljs.core._first(s__6486);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6491__6492 = coll;
if(G__6491__6492)
{if((function (){var or__3824__auto____6493 = (G__6491__6492.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6493)
{return or__3824__auto____6493;
} else
{return G__6491__6492.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6491__6492.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6491__6492);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6491__6492);
}
})())
{return cljs.core._rest(coll);
} else
{var s__6494 = cljs.core.seq(coll);
if(!((s__6494 == null)))
{return cljs.core._rest(s__6494);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6498__6499 = coll;
if(G__6498__6499)
{if((function (){var or__3824__auto____6500 = (G__6498__6499.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6500)
{return or__3824__auto____6500;
} else
{return G__6498__6499.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6498__6499.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.INext,G__6498__6499);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.INext,G__6498__6499);
}
})())
{return cljs.core._next(coll);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6502 = cljs.core.next(s);
if(!((sn__6502 == null)))
{{
var G__6503 = sn__6502;
s = G__6503;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__6504__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6505 = conj.cljs$lang$arity$2(coll,x);
var G__6506 = cljs.core.first(xs);
var G__6507 = cljs.core.next(xs);
coll = G__6505;
x = G__6506;
xs = G__6507;
continue;
}
} else
{return conj.cljs$lang$arity$2(coll,x);
}
break;
}
};
var G__6504 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6504__delegate.call(this, coll, x, xs);
};
G__6504.cljs$lang$maxFixedArity = 2;
G__6504.cljs$lang$applyTo = (function (arglist__6508){
var coll = cljs.core.first(arglist__6508);
var x = cljs.core.first(cljs.core.next(arglist__6508));
var xs = cljs.core.rest(cljs.core.next(arglist__6508));
return G__6504__delegate(coll, x, xs);
});
G__6504.cljs$lang$arity$variadic = G__6504__delegate;
return G__6504;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6511 = cljs.core.seq(coll);
var acc__6512 = 0;
while(true){
if(cljs.core.counted_QMARK_(s__6511))
{return (acc__6512 + cljs.core._count(s__6511));
} else
{{
var G__6513 = cljs.core.next(s__6511);
var G__6514 = (acc__6512 + 1);
s__6511 = G__6513;
acc__6512 = G__6514;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_(coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$2(cljs.core.next(coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$3(cljs.core.next(coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6521__6522 = coll;
if(G__6521__6522)
{if((function (){var or__3824__auto____6523 = (G__6521__6522.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6523)
{return or__3824__auto____6523;
} else
{return G__6521__6522.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6521__6522.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__6521__6522);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__6521__6522);
}
})())
{return cljs.core._nth.cljs$lang$arity$2(coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$2(coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6524__6525 = coll;
if(G__6524__6525)
{if((function (){var or__3824__auto____6526 = (G__6524__6525.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6526)
{return or__3824__auto____6526;
} else
{return G__6524__6525.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6524__6525.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__6524__6525);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__6524__6525);
}
})())
{return cljs.core._nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.cljs$lang$arity$2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.cljs$lang$arity$3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__6529__delegate = function (coll,k,v,kvs){
while(true){
var ret__6528 = assoc.cljs$lang$arity$3(coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6530 = ret__6528;
var G__6531 = cljs.core.first(kvs);
var G__6532 = cljs.core.second(kvs);
var G__6533 = cljs.core.nnext(kvs);
coll = G__6530;
k = G__6531;
v = G__6532;
kvs = G__6533;
continue;
}
} else
{return ret__6528;
}
break;
}
};
var G__6529 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6529__delegate.call(this, coll, k, v, kvs);
};
G__6529.cljs$lang$maxFixedArity = 3;
G__6529.cljs$lang$applyTo = (function (arglist__6534){
var coll = cljs.core.first(arglist__6534);
var k = cljs.core.first(cljs.core.next(arglist__6534));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6534)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6534)));
return G__6529__delegate(coll, k, v, kvs);
});
G__6529.cljs$lang$arity$variadic = G__6529__delegate;
return G__6529;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__6537__delegate = function (coll,k,ks){
while(true){
var ret__6536 = dissoc.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__6538 = ret__6536;
var G__6539 = cljs.core.first(ks);
var G__6540 = cljs.core.next(ks);
coll = G__6538;
k = G__6539;
ks = G__6540;
continue;
}
} else
{return ret__6536;
}
break;
}
};
var G__6537 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6537__delegate.call(this, coll, k, ks);
};
G__6537.cljs$lang$maxFixedArity = 2;
G__6537.cljs$lang$applyTo = (function (arglist__6541){
var coll = cljs.core.first(arglist__6541);
var k = cljs.core.first(cljs.core.next(arglist__6541));
var ks = cljs.core.rest(cljs.core.next(arglist__6541));
return G__6537__delegate(coll, k, ks);
});
G__6537.cljs$lang$arity$variadic = G__6537__delegate;
return G__6537;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6545__6546 = o;
if(G__6545__6546)
{if((function (){var or__3824__auto____6547 = (G__6545__6546.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6547)
{return or__3824__auto____6547;
} else
{return G__6545__6546.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6545__6546.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__6545__6546);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__6545__6546);
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__6550__delegate = function (coll,k,ks){
while(true){
var ret__6549 = disj.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__6551 = ret__6549;
var G__6552 = cljs.core.first(ks);
var G__6553 = cljs.core.next(ks);
coll = G__6551;
k = G__6552;
ks = G__6553;
continue;
}
} else
{return ret__6549;
}
break;
}
};
var G__6550 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6550__delegate.call(this, coll, k, ks);
};
G__6550.cljs$lang$maxFixedArity = 2;
G__6550.cljs$lang$applyTo = (function (arglist__6554){
var coll = cljs.core.first(arglist__6554);
var k = cljs.core.first(cljs.core.next(arglist__6554));
var ks = cljs.core.rest(cljs.core.next(arglist__6554));
return G__6550__delegate(coll, k, ks);
});
G__6550.cljs$lang$arity$variadic = G__6550__delegate;
return G__6550;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6556 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6556);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6556;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6558 = (cljs.core.string_hash_cache[k]);
if(!((h__6558 == null)))
{return h__6558;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.cljs$lang$arity$2(o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6560 = goog.isString(o);
if(and__3822__auto____6560)
{return check_cache;
} else
{return and__3822__auto____6560;
}
})())
{return cljs.core.check_string_hash_cache(o);
} else
{return cljs.core._hash(o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not(cljs.core.seq(coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6564__6565 = x;
if(G__6564__6565)
{if((function (){var or__3824__auto____6566 = (G__6564__6565.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6566)
{return or__3824__auto____6566;
} else
{return G__6564__6565.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6564__6565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__6564__6565);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__6564__6565);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6570__6571 = x;
if(G__6570__6571)
{if((function (){var or__3824__auto____6572 = (G__6570__6571.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6572)
{return or__3824__auto____6572;
} else
{return G__6570__6571.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6570__6571.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISet,G__6570__6571);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,G__6570__6571);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6576__6577 = x;
if(G__6576__6577)
{if((function (){var or__3824__auto____6578 = (G__6576__6577.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6578)
{return or__3824__auto____6578;
} else
{return G__6576__6577.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6576__6577.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__6576__6577);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__6576__6577);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6582__6583 = x;
if(G__6582__6583)
{if((function (){var or__3824__auto____6584 = (G__6582__6583.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6584)
{return or__3824__auto____6584;
} else
{return G__6582__6583.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6582__6583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__6582__6583);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__6582__6583);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6588__6589 = x;
if(G__6588__6589)
{if((function (){var or__3824__auto____6590 = (G__6588__6589.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6590)
{return or__3824__auto____6590;
} else
{return G__6588__6589.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6588__6589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__6588__6589);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__6588__6589);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6594__6595 = x;
if(G__6594__6595)
{if((function (){var or__3824__auto____6596 = (G__6594__6595.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6596)
{return or__3824__auto____6596;
} else
{return G__6594__6595.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6594__6595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__6594__6595);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__6594__6595);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6600__6601 = x;
if(G__6600__6601)
{if((function (){var or__3824__auto____6602 = (G__6600__6601.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6602)
{return or__3824__auto____6602;
} else
{return G__6600__6601.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6600__6601.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__6600__6601);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__6600__6601);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6606__6607 = x;
if(G__6606__6607)
{if((function (){var or__3824__auto____6608 = (G__6606__6607.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6608)
{return or__3824__auto____6608;
} else
{return G__6606__6607.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6606__6607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMap,G__6606__6607);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,G__6606__6607);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6612__6613 = x;
if(G__6612__6613)
{if((function (){var or__3824__auto____6614 = (G__6612__6613.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6614)
{return or__3824__auto____6614;
} else
{return G__6612__6613.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6612__6613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IVector,G__6612__6613);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,G__6612__6613);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6618__6619 = x;
if(G__6618__6619)
{if(cljs.core.truth_((function (){var or__3824__auto____6620 = null;
if(cljs.core.truth_(or__3824__auto____6620))
{return or__3824__auto____6620;
} else
{return G__6618__6619.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6618__6619.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__6618__6619);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__6618__6619);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6621__delegate = function (keyvals){
return cljs.core.apply.cljs$lang$arity$2(goog.object.create,keyvals);
};
var G__6621 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6621__delegate.call(this, keyvals);
};
G__6621.cljs$lang$maxFixedArity = 0;
G__6621.cljs$lang$applyTo = (function (arglist__6622){
var keyvals = cljs.core.seq(arglist__6622);;
return G__6621__delegate(keyvals);
});
G__6621.cljs$lang$arity$variadic = G__6621__delegate;
return G__6621;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6624 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6624.push(key);
}));
return keys__6624;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6628 = i;
var j__6629 = j;
var len__6630 = len;
while(true){
if((len__6630 === 0))
{return to;
} else
{(to[j__6629] = (from[i__6628]));
{
var G__6631 = (i__6628 + 1);
var G__6632 = (j__6629 + 1);
var G__6633 = (len__6630 - 1);
i__6628 = G__6631;
j__6629 = G__6632;
len__6630 = G__6633;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6637 = (i + (len - 1));
var j__6638 = (j + (len - 1));
var len__6639 = len;
while(true){
if((len__6639 === 0))
{return to;
} else
{(to[j__6638] = (from[i__6637]));
{
var G__6640 = (i__6637 - 1);
var G__6641 = (j__6638 - 1);
var G__6642 = (len__6639 - 1);
i__6637 = G__6640;
j__6638 = G__6641;
len__6639 = G__6642;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6646__6647 = s;
if(G__6646__6647)
{if((function (){var or__3824__auto____6648 = (G__6646__6647.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6648)
{return or__3824__auto____6648;
} else
{return G__6646__6647.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6646__6647.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6646__6647);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6646__6647);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6652__6653 = s;
if(G__6652__6653)
{if((function (){var or__3824__auto____6654 = (G__6652__6653.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6654)
{return or__3824__auto____6654;
} else
{return G__6652__6653.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6652__6653.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__6652__6653);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__6652__6653);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6657 = goog.isString(x);
if(and__3822__auto____6657)
{return !((function (){var or__3824__auto____6658 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6658)
{return or__3824__auto____6658;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6657;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6660 = goog.isString(x);
if(and__3822__auto____6660)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6660;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6662 = goog.isString(x);
if(and__3822__auto____6662)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6662;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6667 = cljs.core.fn_QMARK_(f);
if(or__3824__auto____6667)
{return or__3824__auto____6667;
} else
{var G__6668__6669 = f;
if(G__6668__6669)
{if((function (){var or__3824__auto____6670 = (G__6668__6669.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6670)
{return or__3824__auto____6670;
} else
{return G__6668__6669.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6668__6669.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IFn,G__6668__6669);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,G__6668__6669);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6672 = cljs.core.number_QMARK_(n);
if(and__3822__auto____6672)
{return (n == n.toFixed());
} else
{return and__3822__auto____6672;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.cljs$lang$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6675 = coll;
if(cljs.core.truth_(and__3822__auto____6675))
{var and__3822__auto____6676 = cljs.core.associative_QMARK_(coll);
if(and__3822__auto____6676)
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3822__auto____6676;
}
} else
{return and__3822__auto____6675;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.cljs$lang$arity$2(coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6685__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$lang$arity$2(x,y)))
{var s__6681 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__6682 = more;
while(true){
var x__6683 = cljs.core.first(xs__6682);
var etc__6684 = cljs.core.next(xs__6682);
if(cljs.core.truth_(xs__6682))
{if(cljs.core.contains_QMARK_(s__6681,x__6683))
{return false;
} else
{{
var G__6686 = cljs.core.conj.cljs$lang$arity$2(s__6681,x__6683);
var G__6687 = etc__6684;
s__6681 = G__6686;
xs__6682 = G__6687;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6685__delegate.call(this, x, y, more);
};
G__6685.cljs$lang$maxFixedArity = 2;
G__6685.cljs$lang$applyTo = (function (arglist__6688){
var x = cljs.core.first(arglist__6688);
var y = cljs.core.first(cljs.core.next(arglist__6688));
var more = cljs.core.rest(cljs.core.next(arglist__6688));
return G__6685__delegate(x, y, more);
});
G__6685.cljs$lang$arity$variadic = G__6685__delegate;
return G__6685;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__6692__6693 = x;
if(G__6692__6693)
{if(cljs.core.truth_((function (){var or__3824__auto____6694 = null;
if(cljs.core.truth_(or__3824__auto____6694))
{return or__3824__auto____6694;
} else
{return G__6692__6693.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6692__6693.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__6692__6693);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__6692__6693);
}
})())
{return cljs.core._compare(x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__6699 = cljs.core.count(xs);
var yl__6700 = cljs.core.count(ys);
if((xl__6699 < yl__6700))
{return -1;
} else
{if((xl__6699 > yl__6700))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.cljs$lang$arity$4(xs,ys,xl__6699,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6701 = cljs.core.compare(cljs.core.nth.cljs$lang$arity$2(xs,n),cljs.core.nth.cljs$lang$arity$2(ys,n));
if((function (){var and__3822__auto____6702 = (d__6701 === 0);
if(and__3822__auto____6702)
{return ((n + 1) < len);
} else
{return and__3822__auto____6702;
}
})())
{{
var G__6703 = xs;
var G__6704 = ys;
var G__6705 = len;
var G__6706 = (n + 1);
xs = G__6703;
ys = G__6704;
len = G__6705;
n = G__6706;
continue;
}
} else
{return d__6701;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$lang$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6708 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y));
if(cljs.core.number_QMARK_(r__6708))
{return r__6708;
} else
{if(cljs.core.truth_(r__6708))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(y,x) : f.call(null,y,x))))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$lang$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll))
{var a__6710 = cljs.core.to_array(coll);
goog.array.stableSort(a__6710,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a__6710);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$lang$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$lang$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6716 = cljs.core.seq(coll);
if(temp__3971__auto____6716)
{var s__6717 = temp__3971__auto____6716;
return cljs.core.reduce.cljs$lang$arity$3(f,cljs.core.first(s__6717),cljs.core.next(s__6717));
} else
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6718 = val;
var coll__6719 = cljs.core.seq(coll);
while(true){
if(coll__6719)
{var nval__6720 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__6718,cljs.core.first(coll__6719)) : f.call(null,val__6718,cljs.core.first(coll__6719)));
if(cljs.core.reduced_QMARK_(nval__6720))
{return cljs.core.deref(nval__6720);
} else
{{
var G__6721 = nval__6720;
var G__6722 = cljs.core.next(coll__6719);
val__6718 = G__6721;
coll__6719 = G__6722;
continue;
}
}
} else
{return val__6718;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__6724 = cljs.core.to_array(coll);
goog.array.shuffle(a__6724);
return cljs.core.vec(a__6724);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6731__6732 = coll;
if(G__6731__6732)
{if((function (){var or__3824__auto____6733 = (G__6731__6732.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6733)
{return or__3824__auto____6733;
} else
{return G__6731__6732.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6731__6732.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__6731__6732);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__6731__6732);
}
})())
{return cljs.core._reduce.cljs$lang$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$2(f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6734__6735 = coll;
if(G__6734__6735)
{if((function (){var or__3824__auto____6736 = (G__6734__6735.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6736)
{return or__3824__auto____6736;
} else
{return G__6734__6735.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6734__6735.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__6734__6735);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__6734__6735);
}
})())
{return cljs.core._reduce.cljs$lang$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$3(f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce(coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6737 = this;
return this__6737.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_(cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6738__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_PLUS_,(x + y),more);
};
var G__6738 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6738__delegate.call(this, x, y, more);
};
G__6738.cljs$lang$maxFixedArity = 2;
G__6738.cljs$lang$applyTo = (function (arglist__6739){
var x = cljs.core.first(arglist__6739);
var y = cljs.core.first(cljs.core.next(arglist__6739));
var more = cljs.core.rest(cljs.core.next(arglist__6739));
return G__6738__delegate(x, y, more);
});
G__6738.cljs$lang$arity$variadic = G__6738__delegate;
return G__6738;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6740__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_,(x - y),more);
};
var G__6740 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6740__delegate.call(this, x, y, more);
};
G__6740.cljs$lang$maxFixedArity = 2;
G__6740.cljs$lang$applyTo = (function (arglist__6741){
var x = cljs.core.first(arglist__6741);
var y = cljs.core.first(cljs.core.next(arglist__6741));
var more = cljs.core.rest(cljs.core.next(arglist__6741));
return G__6740__delegate(x, y, more);
});
G__6740.cljs$lang$arity$variadic = G__6740__delegate;
return G__6740;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6742__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_STAR_,(x * y),more);
};
var G__6742 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6742__delegate.call(this, x, y, more);
};
G__6742.cljs$lang$maxFixedArity = 2;
G__6742.cljs$lang$applyTo = (function (arglist__6743){
var x = cljs.core.first(arglist__6743);
var y = cljs.core.first(cljs.core.next(arglist__6743));
var more = cljs.core.rest(cljs.core.next(arglist__6743));
return G__6742__delegate(x, y, more);
});
G__6742.cljs$lang$arity$variadic = G__6742__delegate;
return G__6742;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$lang$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6744__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_SLASH_,_SLASH_.cljs$lang$arity$2(x,y),more);
};
var G__6744 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6744__delegate.call(this, x, y, more);
};
G__6744.cljs$lang$maxFixedArity = 2;
G__6744.cljs$lang$applyTo = (function (arglist__6745){
var x = cljs.core.first(arglist__6745);
var y = cljs.core.first(cljs.core.next(arglist__6745));
var more = cljs.core.rest(cljs.core.next(arglist__6745));
return G__6744__delegate(x, y, more);
});
G__6744.cljs$lang$arity$variadic = G__6744__delegate;
return G__6744;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6746__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__6747 = y;
var G__6748 = cljs.core.first(more);
var G__6749 = cljs.core.next(more);
x = G__6747;
y = G__6748;
more = G__6749;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__6746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6746__delegate.call(this, x, y, more);
};
G__6746.cljs$lang$maxFixedArity = 2;
G__6746.cljs$lang$applyTo = (function (arglist__6750){
var x = cljs.core.first(arglist__6750);
var y = cljs.core.first(cljs.core.next(arglist__6750));
var more = cljs.core.rest(cljs.core.next(arglist__6750));
return G__6746__delegate(x, y, more);
});
G__6746.cljs$lang$arity$variadic = G__6746__delegate;
return G__6746;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6751__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__6752 = y;
var G__6753 = cljs.core.first(more);
var G__6754 = cljs.core.next(more);
x = G__6752;
y = G__6753;
more = G__6754;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__6751 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6751__delegate.call(this, x, y, more);
};
G__6751.cljs$lang$maxFixedArity = 2;
G__6751.cljs$lang$applyTo = (function (arglist__6755){
var x = cljs.core.first(arglist__6755);
var y = cljs.core.first(cljs.core.next(arglist__6755));
var more = cljs.core.rest(cljs.core.next(arglist__6755));
return G__6751__delegate(x, y, more);
});
G__6751.cljs$lang$arity$variadic = G__6751__delegate;
return G__6751;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6756__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__6757 = y;
var G__6758 = cljs.core.first(more);
var G__6759 = cljs.core.next(more);
x = G__6757;
y = G__6758;
more = G__6759;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__6756 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6756__delegate.call(this, x, y, more);
};
G__6756.cljs$lang$maxFixedArity = 2;
G__6756.cljs$lang$applyTo = (function (arglist__6760){
var x = cljs.core.first(arglist__6760);
var y = cljs.core.first(cljs.core.next(arglist__6760));
var more = cljs.core.rest(cljs.core.next(arglist__6760));
return G__6756__delegate(x, y, more);
});
G__6756.cljs$lang$arity$variadic = G__6756__delegate;
return G__6756;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6761__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__6762 = y;
var G__6763 = cljs.core.first(more);
var G__6764 = cljs.core.next(more);
x = G__6762;
y = G__6763;
more = G__6764;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__6761 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6761__delegate.call(this, x, y, more);
};
G__6761.cljs$lang$maxFixedArity = 2;
G__6761.cljs$lang$applyTo = (function (arglist__6765){
var x = cljs.core.first(arglist__6765);
var y = cljs.core.first(cljs.core.next(arglist__6765));
var more = cljs.core.rest(cljs.core.next(arglist__6765));
return G__6761__delegate(x, y, more);
});
G__6761.cljs$lang$arity$variadic = G__6761__delegate;
return G__6761;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__6766__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(max,((x > y) ? x : y),more);
};
var G__6766 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6766__delegate.call(this, x, y, more);
};
G__6766.cljs$lang$maxFixedArity = 2;
G__6766.cljs$lang$applyTo = (function (arglist__6767){
var x = cljs.core.first(arglist__6767);
var y = cljs.core.first(cljs.core.next(arglist__6767));
var more = cljs.core.rest(cljs.core.next(arglist__6767));
return G__6766__delegate(x, y, more);
});
G__6766.cljs$lang$arity$variadic = G__6766__delegate;
return G__6766;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__6768__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(min,((x < y) ? x : y),more);
};
var G__6768 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6768__delegate.call(this, x, y, more);
};
G__6768.cljs$lang$maxFixedArity = 2;
G__6768.cljs$lang$applyTo = (function (arglist__6769){
var x = cljs.core.first(arglist__6769);
var y = cljs.core.first(cljs.core.next(arglist__6769));
var more = cljs.core.rest(cljs.core.next(arglist__6769));
return G__6768__delegate(x, y, more);
});
G__6768.cljs$lang$arity$variadic = G__6768__delegate;
return G__6768;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(q) : Math.ceil.call(null,q));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6771 = (n % d);
return cljs.core.fix(((n - rem__6771) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6773 = cljs.core.quot(n,d);
return (n - (d * q__6773));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$lang$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$lang$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__6776 = (v - ((v >> 1) & 1431655765));
var v__6777 = ((v__6776 & 858993459) + ((v__6776 >> 2) & 858993459));
return ((((v__6777 + (v__6777 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__6778__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__6779 = y;
var G__6780 = cljs.core.first(more);
var G__6781 = cljs.core.next(more);
x = G__6779;
y = G__6780;
more = G__6781;
continue;
}
} else
{return _EQ__EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__6778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6778__delegate.call(this, x, y, more);
};
G__6778.cljs$lang$maxFixedArity = 2;
G__6778.cljs$lang$applyTo = (function (arglist__6782){
var x = cljs.core.first(arglist__6782);
var y = cljs.core.first(cljs.core.next(arglist__6782));
var more = cljs.core.rest(cljs.core.next(arglist__6782));
return G__6778__delegate(x, y, more);
});
G__6778.cljs$lang$arity$variadic = G__6778__delegate;
return G__6778;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6786 = n;
var xs__6787 = cljs.core.seq(coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6788 = xs__6787;
if(and__3822__auto____6788)
{return (n__6786 > 0);
} else
{return and__3822__auto____6788;
}
})()))
{{
var G__6789 = (n__6786 - 1);
var G__6790 = cljs.core.next(xs__6787);
n__6786 = G__6789;
xs__6787 = G__6790;
continue;
}
} else
{return xs__6787;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__6791__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6792 = sb.append(str_STAR_.cljs$lang$arity$1(cljs.core.first(more)));
var G__6793 = cljs.core.next(more);
sb = G__6792;
more = G__6793;
continue;
}
} else
{return str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.cljs$lang$arity$1(x))),ys);
};
var G__6791 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6791__delegate.call(this, x, ys);
};
G__6791.cljs$lang$maxFixedArity = 1;
G__6791.cljs$lang$applyTo = (function (arglist__6794){
var x = cljs.core.first(arglist__6794);
var ys = cljs.core.rest(arglist__6794);
return G__6791__delegate(x, ys);
});
G__6791.cljs$lang$arity$variadic = G__6791__delegate;
return G__6791;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_(x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic(":",cljs.core.array_seq([x.substring(2,x.length)], 0));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__6795__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6796 = sb.append(str.cljs$lang$arity$1(cljs.core.first(more)));
var G__6797 = cljs.core.next(more);
sb = G__6796;
more = G__6797;
continue;
}
} else
{return cljs.core.str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.cljs$lang$arity$1(x))),ys);
};
var G__6795 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6795__delegate.call(this, x, ys);
};
G__6795.cljs$lang$maxFixedArity = 1;
G__6795.cljs$lang$applyTo = (function (arglist__6798){
var x = cljs.core.first(arglist__6798);
var ys = cljs.core.rest(arglist__6798);
return G__6795__delegate(x, ys);
});
G__6795.cljs$lang$arity$variadic = G__6795__delegate;
return G__6795;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$lang$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__6799){
var fmt = cljs.core.first(arglist__6799);
var args = cljs.core.rest(arglist__6799);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_(name))
{name;
} else
{if(cljs.core.keyword_QMARK_(name))
{cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{}
}
return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",name], 0));
});
var symbol__2 = (function (ns,name){
return symbol.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_(name))
{return name;
} else
{if(cljs.core.symbol_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",name], 0));
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs__6802 = cljs.core.seq(x);
var ys__6803 = cljs.core.seq(y);
while(true){
if((xs__6802 == null))
{return (ys__6803 == null);
} else
{if((ys__6803 == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(xs__6802),cljs.core.first(ys__6803)))
{{
var G__6804 = cljs.core.next(xs__6802);
var G__6805 = cljs.core.next(ys__6803);
xs__6802 = G__6804;
ys__6803 = G__6805;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__6806_SHARP_,p2__6807_SHARP_){
return cljs.core.hash_combine(p1__6806_SHARP_,cljs.core.hash.cljs$lang$arity$2(p2__6807_SHARP_,false));
}),cljs.core.hash.cljs$lang$arity$2(cljs.core.first(coll),false),cljs.core.next(coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__6811 = 0;
var s__6812 = cljs.core.seq(m);
while(true){
if(s__6812)
{var e__6813 = cljs.core.first(s__6812);
{
var G__6814 = ((h__6811 + (cljs.core.hash.cljs$lang$arity$1(cljs.core.key(e__6813)) ^ cljs.core.hash.cljs$lang$arity$1(cljs.core.val(e__6813)))) % 4503599627370496);
var G__6815 = cljs.core.next(s__6812);
h__6811 = G__6814;
s__6812 = G__6815;
continue;
}
} else
{return h__6811;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6819 = 0;
var s__6820 = cljs.core.seq(s);
while(true){
if(s__6820)
{var e__6821 = cljs.core.first(s__6820);
{
var G__6822 = ((h__6819 + cljs.core.hash.cljs$lang$arity$1(e__6821)) % 4503599627370496);
var G__6823 = cljs.core.next(s__6820);
h__6819 = G__6822;
s__6820 = G__6823;
continue;
}
} else
{return h__6819;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6844__6845 = cljs.core.seq(fn_map);
if(G__6844__6845)
{var G__6847__6849 = cljs.core.first(G__6844__6845);
var vec__6848__6850 = G__6847__6849;
var key_name__6851 = cljs.core.nth.cljs$lang$arity$3(vec__6848__6850,0,null);
var f__6852 = cljs.core.nth.cljs$lang$arity$3(vec__6848__6850,1,null);
var G__6844__6853 = G__6844__6845;
var G__6847__6854 = G__6847__6849;
var G__6844__6855 = G__6844__6853;
while(true){
var vec__6856__6857 = G__6847__6854;
var key_name__6858 = cljs.core.nth.cljs$lang$arity$3(vec__6856__6857,0,null);
var f__6859 = cljs.core.nth.cljs$lang$arity$3(vec__6856__6857,1,null);
var G__6844__6860 = G__6844__6855;
var str_name__6861 = cljs.core.name(key_name__6858);
(obj[str_name__6861] = f__6859);
var temp__3974__auto____6862 = cljs.core.next(G__6844__6860);
if(temp__3974__auto____6862)
{var G__6844__6863 = temp__3974__auto____6862;
{
var G__6864 = cljs.core.first(G__6844__6863);
var G__6865 = G__6844__6863;
G__6847__6854 = G__6864;
G__6844__6855 = G__6865;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6866 = this;
var h__1819__auto____6867 = this__6866.__hash;
if(!((h__1819__auto____6867 == null)))
{return h__1819__auto____6867;
} else
{var h__1819__auto____6868 = cljs.core.hash_coll(coll);
this__6866.__hash = h__1819__auto____6868;
return h__1819__auto____6868;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6869 = this;
if((this__6869.count === 1))
{return null;
} else
{return this__6869.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6870 = this;
return (new cljs.core.List(this__6870.meta,o,coll,(this__6870.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__6871 = this;
var this__6872 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__6872], 0));
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6873 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6874 = this;
return this__6874.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6875 = this;
return this__6875.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6876 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6877 = this;
return this__6877.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6878 = this;
if((this__6878.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__6878.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6879 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6880 = this;
return (new cljs.core.List(meta,this__6880.first,this__6880.rest,this__6880.count,this__6880.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6881 = this;
return this__6881.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6882 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6883 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6884 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6885 = this;
return (new cljs.core.List(this__6885.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__6886 = this;
var this__6887 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__6887], 0));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6888 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6889 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6890 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6891 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6892 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6893 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6894 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6895 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6896 = this;
return this__6896.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6897 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__6901__6902 = coll;
if(G__6901__6902)
{if((function (){var or__3824__auto____6903 = (G__6901__6902.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____6903)
{return or__3824__auto____6903;
} else
{return G__6901__6902.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__6901__6902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__6901__6902);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__6901__6902);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$1(y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$2(y,z),x);
});
var list__4 = (function() { 
var G__6904__delegate = function (x,y,z,items){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items)),z),y),x);
};
var G__6904 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6904__delegate.call(this, x, y, z, items);
};
G__6904.cljs$lang$maxFixedArity = 3;
G__6904.cljs$lang$applyTo = (function (arglist__6905){
var x = cljs.core.first(arglist__6905);
var y = cljs.core.first(cljs.core.next(arglist__6905));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6905)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6905)));
return G__6904__delegate(x, y, z, items);
});
G__6904.cljs$lang$arity$variadic = G__6904__delegate;
return G__6904;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6906 = this;
var h__1819__auto____6907 = this__6906.__hash;
if(!((h__1819__auto____6907 == null)))
{return h__1819__auto____6907;
} else
{var h__1819__auto____6908 = cljs.core.hash_coll(coll);
this__6906.__hash = h__1819__auto____6908;
return h__1819__auto____6908;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6909 = this;
if((this__6909.rest == null))
{return null;
} else
{return cljs.core._seq(this__6909.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6910 = this;
return (new cljs.core.Cons(null,o,coll,this__6910.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__6911 = this;
var this__6912 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__6912], 0));
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6913 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6914 = this;
return this__6914.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6915 = this;
if((this__6915.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__6915.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6916 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6917 = this;
return (new cljs.core.Cons(meta,this__6917.first,this__6917.rest,this__6917.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6918 = this;
return this__6918.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6919 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__6919.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____6924 = (coll == null);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
} else
{var G__6925__6926 = coll;
if(G__6925__6926)
{if((function (){var or__3824__auto____6927 = (G__6925__6926.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6927)
{return or__3824__auto____6927;
} else
{return G__6925__6926.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6925__6926.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6925__6926);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__6925__6926);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__6931__6932 = x;
if(G__6931__6932)
{if((function (){var or__3824__auto____6933 = (G__6931__6932.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{return G__6931__6932.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__6931__6932.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IList,G__6931__6932);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IList,G__6931__6932);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6934 = null;
var G__6934__2 = (function (string,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(string,f);
});
var G__6934__3 = (function (string,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(string,f,start);
});
G__6934 = function(string,f,start){
switch(arguments.length){
case 2:
return G__6934__2.call(this,string,f);
case 3:
return G__6934__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6934;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6935 = null;
var G__6935__2 = (function (string,k){
return cljs.core._nth.cljs$lang$arity$2(string,k);
});
var G__6935__3 = (function (string,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(string,k,not_found);
});
G__6935 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__6935__2.call(this,string,k);
case 3:
return G__6935__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6935;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6936 = null;
var G__6936__2 = (function (string,n){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__6936__3 = (function (string,n,not_found){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6936 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__6936__2.call(this,string,n);
case 3:
return G__6936__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6936;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.cljs$lang$arity$2(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__6948 = null;
var G__6948__2 = (function (this_sym6939,coll){
var this__6941 = this;
var this_sym6939__6942 = this;
var ___6943 = this_sym6939__6942;
if((coll == null))
{return null;
} else
{var strobj__6944 = coll.strobj;
if((strobj__6944 == null))
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__6941.k,null);
} else
{return (strobj__6944[this__6941.k]);
}
}
});
var G__6948__3 = (function (this_sym6940,coll,not_found){
var this__6941 = this;
var this_sym6940__6945 = this;
var ___6946 = this_sym6940__6945;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__6941.k,not_found);
}
});
G__6948 = function(this_sym6940,coll,not_found){
switch(arguments.length){
case 2:
return G__6948__2.call(this,this_sym6940,coll);
case 3:
return G__6948__3.call(this,this_sym6940,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6948;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym6937,args6938){
var this__6947 = this;
return this_sym6937.call.apply(this_sym6937,[this_sym6937].concat(args6938.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__6957 = null;
var G__6957__2 = (function (this_sym6951,coll){
var this_sym6951__6953 = this;
var this__6954 = this_sym6951__6953;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__6954.toString(),null);
});
var G__6957__3 = (function (this_sym6952,coll,not_found){
var this_sym6952__6955 = this;
var this__6956 = this_sym6952__6955;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__6956.toString(),not_found);
});
G__6957 = function(this_sym6952,coll,not_found){
switch(arguments.length){
case 2:
return G__6957__2.call(this,this_sym6952,coll);
case 3:
return G__6957__3.call(this,this_sym6952,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6957;
})()
;
String.prototype.apply = (function (this_sym6949,args6950){
return this_sym6949.call.apply(this_sym6949,[this_sym6949].concat(args6950.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count(args) < 2))
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,null);
} else
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__6959 = lazy_seq.x;
if(lazy_seq.realized)
{return x__6959;
} else
{lazy_seq.x = (x__6959.cljs$lang$arity$0 ? x__6959.cljs$lang$arity$0() : x__6959.call(null));
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6960 = this;
var h__1819__auto____6961 = this__6960.__hash;
if(!((h__1819__auto____6961 == null)))
{return h__1819__auto____6961;
} else
{var h__1819__auto____6962 = cljs.core.hash_coll(coll);
this__6960.__hash = h__1819__auto____6962;
return h__1819__auto____6962;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6963 = this;
return cljs.core._seq(coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6964 = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__6965 = this;
var this__6966 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__6966], 0));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6967 = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6968 = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6969 = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6970 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6971 = this;
return (new cljs.core.LazySeq(meta,this__6971.realized,this__6971.x,this__6971.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6972 = this;
return this__6972.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6973 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__6973.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6974 = this;
return this__6974.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__6975 = this;
var ___6976 = this;
(this__6975.buf[this__6975.end] = o);
return this__6975.end = (this__6975.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__6977 = this;
var ___6978 = this;
var ret__6979 = (new cljs.core.ArrayChunk(this__6977.buf,0,this__6977.end));
this__6977.buf = null;
return ret__6979;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.cljs$lang$arity$1(capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6980 = this;
return cljs.core.array_reduce.cljs$lang$arity$4(this__6980.arr,f,(this__6980.arr[this__6980.off]),(this__6980.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6981 = this;
return cljs.core.array_reduce.cljs$lang$arity$4(this__6981.arr,f,start,this__6981.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__6982 = this;
if((this__6982.off === this__6982.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__6982.arr,(this__6982.off + 1),this__6982.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__6983 = this;
return (this__6983.arr[(this__6983.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__6984 = this;
if((function (){var and__3822__auto____6985 = (i >= 0);
if(and__3822__auto____6985)
{return (i < (this__6984.end - this__6984.off));
} else
{return and__3822__auto____6985;
}
})())
{return (this__6984.arr[(this__6984.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6986 = this;
return (this__6986.end - this__6986.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.cljs$lang$arity$3(arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.cljs$lang$arity$3(arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850600;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6987 = this;
var h__1819__auto____6988 = this__6987.__hash;
if(!((h__1819__auto____6988 == null)))
{return h__1819__auto____6988;
} else
{var h__1819__auto____6989 = cljs.core.hash_coll(coll);
this__6987.__hash = h__1819__auto____6989;
return h__1819__auto____6989;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__6990 = this;
return cljs.core.cons(o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6991 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6992 = this;
return cljs.core._nth.cljs$lang$arity$2(this__6992.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6993 = this;
if((cljs.core._count(this__6993.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(this__6993.chunk),this__6993.more,this__6993.meta,null));
} else
{if((this__6993.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6993.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__6994 = this;
if((this__6994.more == null))
{return null;
} else
{return this__6994.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6995 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__6996 = this;
return (new cljs.core.ChunkedCons(this__6996.chunk,this__6996.more,m,this__6996.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6997 = this;
return this__6997.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__6998 = this;
return this__6998.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__6999 = this;
if((this__6999.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6999.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7003__7004 = s;
if(G__7003__7004)
{if(cljs.core.truth_((function (){var or__3824__auto____7005 = null;
if(cljs.core.truth_(or__3824__auto____7005))
{return or__3824__auto____7005;
} else
{return G__7003__7004.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7003__7004.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__7003__7004);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__7003__7004);
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7008 = [];
var s__7009 = s;
while(true){
if(cljs.core.seq(s__7009))
{ary__7008.push(cljs.core.first(s__7009));
{
var G__7010 = cljs.core.next(s__7009);
s__7009 = G__7010;
continue;
}
} else
{return ary__7008;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7014 = cljs.core.make_array.cljs$lang$arity$1(cljs.core.count(coll));
var i__7015 = 0;
var xs__7016 = cljs.core.seq(coll);
while(true){
if(xs__7016)
{(ret__7014[i__7015] = cljs.core.to_array(cljs.core.first(xs__7016)));
{
var G__7017 = (i__7015 + 1);
var G__7018 = cljs.core.next(xs__7016);
i__7015 = G__7017;
xs__7016 = G__7018;
continue;
}
} else
{}
break;
}
return ret__7014;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return long_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7026 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__7027 = cljs.core.seq(init_val_or_seq);
var i__7028 = 0;
var s__7029 = s__7027;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7030 = s__7029;
if(and__3822__auto____7030)
{return (i__7028 < size);
} else
{return and__3822__auto____7030;
}
})()))
{(a__7026[i__7028] = cljs.core.first(s__7029));
{
var G__7033 = (i__7028 + 1);
var G__7034 = cljs.core.next(s__7029);
i__7028 = G__7033;
s__7029 = G__7034;
continue;
}
} else
{return a__7026;
}
break;
}
} else
{var n__2154__auto____7031 = size;
var i__7032 = 0;
while(true){
if((i__7032 < n__2154__auto____7031))
{(a__7026[i__7032] = init_val_or_seq);
{
var G__7035 = (i__7032 + 1);
i__7032 = G__7035;
continue;
}
} else
{}
break;
}
return a__7026;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return double_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7043 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__7044 = cljs.core.seq(init_val_or_seq);
var i__7045 = 0;
var s__7046 = s__7044;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7047 = s__7046;
if(and__3822__auto____7047)
{return (i__7045 < size);
} else
{return and__3822__auto____7047;
}
})()))
{(a__7043[i__7045] = cljs.core.first(s__7046));
{
var G__7050 = (i__7045 + 1);
var G__7051 = cljs.core.next(s__7046);
i__7045 = G__7050;
s__7046 = G__7051;
continue;
}
} else
{return a__7043;
}
break;
}
} else
{var n__2154__auto____7048 = size;
var i__7049 = 0;
while(true){
if((i__7049 < n__2154__auto____7048))
{(a__7043[i__7049] = init_val_or_seq);
{
var G__7052 = (i__7049 + 1);
i__7049 = G__7052;
continue;
}
} else
{}
break;
}
return a__7043;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return object_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7060 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__7061 = cljs.core.seq(init_val_or_seq);
var i__7062 = 0;
var s__7063 = s__7061;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7064 = s__7063;
if(and__3822__auto____7064)
{return (i__7062 < size);
} else
{return and__3822__auto____7064;
}
})()))
{(a__7060[i__7062] = cljs.core.first(s__7063));
{
var G__7067 = (i__7062 + 1);
var G__7068 = cljs.core.next(s__7063);
i__7062 = G__7067;
s__7063 = G__7068;
continue;
}
} else
{return a__7060;
}
break;
}
} else
{var n__2154__auto____7065 = size;
var i__7066 = 0;
while(true){
if((i__7066 < n__2154__auto____7065))
{(a__7060[i__7066] = init_val_or_seq);
{
var G__7069 = (i__7066 + 1);
i__7066 = G__7069;
continue;
}
} else
{}
break;
}
return a__7060;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__7074 = s;
var i__7075 = n;
var sum__7076 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7077 = (i__7075 > 0);
if(and__3822__auto____7077)
{return cljs.core.seq(s__7074);
} else
{return and__3822__auto____7077;
}
})()))
{{
var G__7078 = cljs.core.next(s__7074);
var G__7079 = (i__7075 - 1);
var G__7080 = (sum__7076 + 1);
s__7074 = G__7078;
i__7075 = G__7079;
sum__7076 = G__7080;
continue;
}
} else
{return sum__7076;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7085 = cljs.core.seq(x);
if(s__7085)
{if(cljs.core.chunked_seq_QMARK_(s__7085))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s__7085),concat.cljs$lang$arity$2(cljs.core.chunk_rest(s__7085),y));
} else
{return cljs.core.cons(cljs.core.first(s__7085),concat.cljs$lang$arity$2(cljs.core.rest(s__7085),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7089__delegate = function (x,y,zs){
var cat__7088 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7087 = cljs.core.seq(xys);
if(xys__7087)
{if(cljs.core.chunked_seq_QMARK_(xys__7087))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__7087),cat(cljs.core.chunk_rest(xys__7087),zs));
} else
{return cljs.core.cons(cljs.core.first(xys__7087),cat(cljs.core.rest(xys__7087),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat(cljs.core.first(zs),cljs.core.next(zs));
} else
{return null;
}
}
}),null));
});
return (cat__7088.cljs$lang$arity$2 ? cat__7088.cljs$lang$arity$2(concat.cljs$lang$arity$2(x,y),zs) : cat__7088.call(null,concat.cljs$lang$arity$2(x,y),zs));
};
var G__7089 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7089__delegate.call(this, x, y, zs);
};
G__7089.cljs$lang$maxFixedArity = 2;
G__7089.cljs$lang$applyTo = (function (arglist__7090){
var x = cljs.core.first(arglist__7090);
var y = cljs.core.first(cljs.core.next(arglist__7090));
var zs = cljs.core.rest(cljs.core.next(arglist__7090));
return G__7089__delegate(x, y, zs);
});
G__7089.cljs$lang$arity$variadic = G__7089__delegate;
return G__7089;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__7091__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__7091 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7091__delegate.call(this, a, b, c, d, more);
};
G__7091.cljs$lang$maxFixedArity = 4;
G__7091.cljs$lang$applyTo = (function (arglist__7092){
var a = cljs.core.first(arglist__7092);
var b = cljs.core.first(cljs.core.next(arglist__7092));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7092)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7092))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7092))));
return G__7091__delegate(a, b, c, d, more);
});
G__7091.cljs$lang$arity$variadic = G__7091__delegate;
return G__7091;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7134 = cljs.core.seq(args);
if((argc === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var a__7135 = cljs.core._first(args__7134);
var args__7136 = cljs.core._rest(args__7134);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7135);
} else
{return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a__7135) : f.call(null,a__7135));
}
} else
{var b__7137 = cljs.core._first(args__7136);
var args__7138 = cljs.core._rest(args__7136);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7135,b__7137);
} else
{return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a__7135,b__7137) : f.call(null,a__7135,b__7137));
}
} else
{var c__7139 = cljs.core._first(args__7138);
var args__7140 = cljs.core._rest(args__7138);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7135,b__7137,c__7139);
} else
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a__7135,b__7137,c__7139) : f.call(null,a__7135,b__7137,c__7139));
}
} else
{var d__7141 = cljs.core._first(args__7140);
var args__7142 = cljs.core._rest(args__7140);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7135,b__7137,c__7139,d__7141);
} else
{return (f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a__7135,b__7137,c__7139,d__7141) : f.call(null,a__7135,b__7137,c__7139,d__7141));
}
} else
{var e__7143 = cljs.core._first(args__7142);
var args__7144 = cljs.core._rest(args__7142);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7135,b__7137,c__7139,d__7141,e__7143);
} else
{return (f.cljs$lang$arity$5 ? f.cljs$lang$arity$5(a__7135,b__7137,c__7139,d__7141,e__7143) : f.call(null,a__7135,b__7137,c__7139,d__7141,e__7143));
}
} else
{var f__7145 = cljs.core._first(args__7144);
var args__7146 = cljs.core._rest(args__7144);
if((argc === 6))
{if(f__7145.cljs$lang$arity$6)
{return f__7145.cljs$lang$arity$6(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145);
} else
{return (f__7145.cljs$lang$arity$6 ? f__7145.cljs$lang$arity$6(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145));
}
} else
{var g__7147 = cljs.core._first(args__7146);
var args__7148 = cljs.core._rest(args__7146);
if((argc === 7))
{if(f__7145.cljs$lang$arity$7)
{return f__7145.cljs$lang$arity$7(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147);
} else
{return (f__7145.cljs$lang$arity$7 ? f__7145.cljs$lang$arity$7(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147));
}
} else
{var h__7149 = cljs.core._first(args__7148);
var args__7150 = cljs.core._rest(args__7148);
if((argc === 8))
{if(f__7145.cljs$lang$arity$8)
{return f__7145.cljs$lang$arity$8(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149);
} else
{return (f__7145.cljs$lang$arity$8 ? f__7145.cljs$lang$arity$8(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149));
}
} else
{var i__7151 = cljs.core._first(args__7150);
var args__7152 = cljs.core._rest(args__7150);
if((argc === 9))
{if(f__7145.cljs$lang$arity$9)
{return f__7145.cljs$lang$arity$9(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151);
} else
{return (f__7145.cljs$lang$arity$9 ? f__7145.cljs$lang$arity$9(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151));
}
} else
{var j__7153 = cljs.core._first(args__7152);
var args__7154 = cljs.core._rest(args__7152);
if((argc === 10))
{if(f__7145.cljs$lang$arity$10)
{return f__7145.cljs$lang$arity$10(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153);
} else
{return (f__7145.cljs$lang$arity$10 ? f__7145.cljs$lang$arity$10(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153));
}
} else
{var k__7155 = cljs.core._first(args__7154);
var args__7156 = cljs.core._rest(args__7154);
if((argc === 11))
{if(f__7145.cljs$lang$arity$11)
{return f__7145.cljs$lang$arity$11(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155);
} else
{return (f__7145.cljs$lang$arity$11 ? f__7145.cljs$lang$arity$11(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155));
}
} else
{var l__7157 = cljs.core._first(args__7156);
var args__7158 = cljs.core._rest(args__7156);
if((argc === 12))
{if(f__7145.cljs$lang$arity$12)
{return f__7145.cljs$lang$arity$12(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157);
} else
{return (f__7145.cljs$lang$arity$12 ? f__7145.cljs$lang$arity$12(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157));
}
} else
{var m__7159 = cljs.core._first(args__7158);
var args__7160 = cljs.core._rest(args__7158);
if((argc === 13))
{if(f__7145.cljs$lang$arity$13)
{return f__7145.cljs$lang$arity$13(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159);
} else
{return (f__7145.cljs$lang$arity$13 ? f__7145.cljs$lang$arity$13(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159));
}
} else
{var n__7161 = cljs.core._first(args__7160);
var args__7162 = cljs.core._rest(args__7160);
if((argc === 14))
{if(f__7145.cljs$lang$arity$14)
{return f__7145.cljs$lang$arity$14(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161);
} else
{return (f__7145.cljs$lang$arity$14 ? f__7145.cljs$lang$arity$14(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161));
}
} else
{var o__7163 = cljs.core._first(args__7162);
var args__7164 = cljs.core._rest(args__7162);
if((argc === 15))
{if(f__7145.cljs$lang$arity$15)
{return f__7145.cljs$lang$arity$15(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163);
} else
{return (f__7145.cljs$lang$arity$15 ? f__7145.cljs$lang$arity$15(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163));
}
} else
{var p__7165 = cljs.core._first(args__7164);
var args__7166 = cljs.core._rest(args__7164);
if((argc === 16))
{if(f__7145.cljs$lang$arity$16)
{return f__7145.cljs$lang$arity$16(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165);
} else
{return (f__7145.cljs$lang$arity$16 ? f__7145.cljs$lang$arity$16(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165));
}
} else
{var q__7167 = cljs.core._first(args__7166);
var args__7168 = cljs.core._rest(args__7166);
if((argc === 17))
{if(f__7145.cljs$lang$arity$17)
{return f__7145.cljs$lang$arity$17(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167);
} else
{return (f__7145.cljs$lang$arity$17 ? f__7145.cljs$lang$arity$17(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167));
}
} else
{var r__7169 = cljs.core._first(args__7168);
var args__7170 = cljs.core._rest(args__7168);
if((argc === 18))
{if(f__7145.cljs$lang$arity$18)
{return f__7145.cljs$lang$arity$18(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169);
} else
{return (f__7145.cljs$lang$arity$18 ? f__7145.cljs$lang$arity$18(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169));
}
} else
{var s__7171 = cljs.core._first(args__7170);
var args__7172 = cljs.core._rest(args__7170);
if((argc === 19))
{if(f__7145.cljs$lang$arity$19)
{return f__7145.cljs$lang$arity$19(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169,s__7171);
} else
{return (f__7145.cljs$lang$arity$19 ? f__7145.cljs$lang$arity$19(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169,s__7171) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169,s__7171));
}
} else
{var t__7173 = cljs.core._first(args__7172);
var args__7174 = cljs.core._rest(args__7172);
if((argc === 20))
{if(f__7145.cljs$lang$arity$20)
{return f__7145.cljs$lang$arity$20(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169,s__7171,t__7173);
} else
{return (f__7145.cljs$lang$arity$20 ? f__7145.cljs$lang$arity$20(a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169,s__7171,t__7173) : f__7145.call(null,a__7135,b__7137,c__7139,d__7141,e__7143,f__7145,g__7147,h__7149,i__7151,j__7153,k__7155,l__7157,m__7159,n__7161,o__7163,p__7165,q__7167,r__7169,s__7171,t__7173));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7189 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7190 = cljs.core.bounded_count(args,(fixed_arity__7189 + 1));
if((bc__7190 <= fixed_arity__7189))
{return cljs.core.apply_to(f,bc__7190,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7191 = cljs.core.list_STAR_.cljs$lang$arity$2(x,args);
var fixed_arity__7192 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7193 = cljs.core.bounded_count(arglist__7191,(fixed_arity__7192 + 1));
if((bc__7193 <= fixed_arity__7192))
{return cljs.core.apply_to(f,bc__7193,arglist__7191);
} else
{return f.cljs$lang$applyTo(arglist__7191);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__7191));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7194 = cljs.core.list_STAR_.cljs$lang$arity$3(x,y,args);
var fixed_arity__7195 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7196 = cljs.core.bounded_count(arglist__7194,(fixed_arity__7195 + 1));
if((bc__7196 <= fixed_arity__7195))
{return cljs.core.apply_to(f,bc__7196,arglist__7194);
} else
{return f.cljs$lang$applyTo(arglist__7194);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__7194));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7197 = cljs.core.list_STAR_.cljs$lang$arity$4(x,y,z,args);
var fixed_arity__7198 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7199 = cljs.core.bounded_count(arglist__7197,(fixed_arity__7198 + 1));
if((bc__7199 <= fixed_arity__7198))
{return cljs.core.apply_to(f,bc__7199,arglist__7197);
} else
{return f.cljs$lang$applyTo(arglist__7197);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__7197));
}
});
var apply__6 = (function() { 
var G__7203__delegate = function (f,a,b,c,d,args){
var arglist__7200 = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity__7201 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7202 = cljs.core.bounded_count(arglist__7200,(fixed_arity__7201 + 1));
if((bc__7202 <= fixed_arity__7201))
{return cljs.core.apply_to(f,bc__7202,arglist__7200);
} else
{return f.cljs$lang$applyTo(arglist__7200);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__7200));
}
};
var G__7203 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7203__delegate.call(this, f, a, b, c, d, args);
};
G__7203.cljs$lang$maxFixedArity = 5;
G__7203.cljs$lang$applyTo = (function (arglist__7204){
var f = cljs.core.first(arglist__7204);
var a = cljs.core.first(cljs.core.next(arglist__7204));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7204)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7204))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7204)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7204)))));
return G__7203__delegate(f, a, b, c, d, args);
});
G__7203.cljs$lang$arity$variadic = G__7203__delegate;
return G__7203;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$lang$arity$3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7205){
var obj = cljs.core.first(arglist__7205);
var f = cljs.core.first(cljs.core.next(arglist__7205));
var args = cljs.core.rest(cljs.core.next(arglist__7205));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__7206__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(cljs.core._EQ_,x,y,more));
};
var G__7206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7206__delegate.call(this, x, y, more);
};
G__7206.cljs$lang$maxFixedArity = 2;
G__7206.cljs$lang$applyTo = (function (arglist__7207){
var x = cljs.core.first(arglist__7207);
var y = cljs.core.first(cljs.core.next(arglist__7207));
var more = cljs.core.rest(cljs.core.next(arglist__7207));
return G__7206__delegate(x, y, more);
});
G__7206.cljs$lang$arity$variadic = G__7206__delegate;
return G__7206;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__7208 = pred;
var G__7209 = cljs.core.next(coll);
pred = G__7208;
coll = G__7209;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll))
{var or__3824__auto____7211 = (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));
if(cljs.core.truth_(or__3824__auto____7211))
{return or__3824__auto____7211;
} else
{{
var G__7212 = pred;
var G__7213 = cljs.core.next(coll);
pred = G__7212;
coll = G__7213;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7214 = null;
var G__7214__0 = (function (){
return cljs.core.not((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
});
var G__7214__1 = (function (x){
return cljs.core.not((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
});
var G__7214__2 = (function (x,y){
return cljs.core.not((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)));
});
var G__7214__3 = (function() { 
var G__7215__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(f,x,y,zs));
};
var G__7215 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7215__delegate.call(this, x, y, zs);
};
G__7215.cljs$lang$maxFixedArity = 2;
G__7215.cljs$lang$applyTo = (function (arglist__7216){
var x = cljs.core.first(arglist__7216);
var y = cljs.core.first(cljs.core.next(arglist__7216));
var zs = cljs.core.rest(cljs.core.next(arglist__7216));
return G__7215__delegate(x, y, zs);
});
G__7215.cljs$lang$arity$variadic = G__7215__delegate;
return G__7215;
})()
;
G__7214 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7214__0.call(this);
case 1:
return G__7214__1.call(this,x);
case 2:
return G__7214__2.call(this,x,y);
default:
return G__7214__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7214.cljs$lang$maxFixedArity = 2;
G__7214.cljs$lang$applyTo = G__7214__3.cljs$lang$applyTo;
return G__7214;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7217__delegate = function (args){
return x;
};
var G__7217 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7217__delegate.call(this, args);
};
G__7217.cljs$lang$maxFixedArity = 0;
G__7217.cljs$lang$applyTo = (function (arglist__7218){
var args = cljs.core.seq(arglist__7218);;
return G__7217__delegate(args);
});
G__7217.cljs$lang$arity$variadic = G__7217__delegate;
return G__7217;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7225 = null;
var G__7225__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))) : f.call(null,(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))));
});
var G__7225__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))));
});
var G__7225__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))));
});
var G__7225__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__7225__4 = (function() { 
var G__7226__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)));
};
var G__7226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7226__delegate.call(this, x, y, z, args);
};
G__7226.cljs$lang$maxFixedArity = 3;
G__7226.cljs$lang$applyTo = (function (arglist__7227){
var x = cljs.core.first(arglist__7227);
var y = cljs.core.first(cljs.core.next(arglist__7227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7227)));
return G__7226__delegate(x, y, z, args);
});
G__7226.cljs$lang$arity$variadic = G__7226__delegate;
return G__7226;
})()
;
G__7225 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7225__0.call(this);
case 1:
return G__7225__1.call(this,x);
case 2:
return G__7225__2.call(this,x,y);
case 3:
return G__7225__3.call(this,x,y,z);
default:
return G__7225__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7225.cljs$lang$maxFixedArity = 3;
G__7225.cljs$lang$applyTo = G__7225__4.cljs$lang$applyTo;
return G__7225;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7228 = null;
var G__7228__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))));
});
var G__7228__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))));
});
var G__7228__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))));
});
var G__7228__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__7228__4 = (function() { 
var G__7229__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))));
};
var G__7229 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7229__delegate.call(this, x, y, z, args);
};
G__7229.cljs$lang$maxFixedArity = 3;
G__7229.cljs$lang$applyTo = (function (arglist__7230){
var x = cljs.core.first(arglist__7230);
var y = cljs.core.first(cljs.core.next(arglist__7230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7230)));
return G__7229__delegate(x, y, z, args);
});
G__7229.cljs$lang$arity$variadic = G__7229__delegate;
return G__7229;
})()
;
G__7228 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7228__0.call(this);
case 1:
return G__7228__1.call(this,x);
case 2:
return G__7228__2.call(this,x,y);
case 3:
return G__7228__3.call(this,x,y,z);
default:
return G__7228__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7228.cljs$lang$maxFixedArity = 3;
G__7228.cljs$lang$applyTo = G__7228__4.cljs$lang$applyTo;
return G__7228;
})()
});
var comp__4 = (function() { 
var G__7231__delegate = function (f1,f2,f3,fs){
var fs__7222 = cljs.core.reverse(cljs.core.list_STAR_.cljs$lang$arity$4(f1,f2,f3,fs));
return (function() { 
var G__7232__delegate = function (args){
var ret__7223 = cljs.core.apply.cljs$lang$arity$2(cljs.core.first(fs__7222),args);
var fs__7224 = cljs.core.next(fs__7222);
while(true){
if(fs__7224)
{{
var G__7233 = cljs.core.first(fs__7224).call(null,ret__7223);
var G__7234 = cljs.core.next(fs__7224);
ret__7223 = G__7233;
fs__7224 = G__7234;
continue;
}
} else
{return ret__7223;
}
break;
}
};
var G__7232 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7232__delegate.call(this, args);
};
G__7232.cljs$lang$maxFixedArity = 0;
G__7232.cljs$lang$applyTo = (function (arglist__7235){
var args = cljs.core.seq(arglist__7235);;
return G__7232__delegate(args);
});
G__7232.cljs$lang$arity$variadic = G__7232__delegate;
return G__7232;
})()
;
};
var G__7231 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7231__delegate.call(this, f1, f2, f3, fs);
};
G__7231.cljs$lang$maxFixedArity = 3;
G__7231.cljs$lang$applyTo = (function (arglist__7236){
var f1 = cljs.core.first(arglist__7236);
var f2 = cljs.core.first(cljs.core.next(arglist__7236));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7236)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7236)));
return G__7231__delegate(f1, f2, f3, fs);
});
G__7231.cljs$lang$arity$variadic = G__7231__delegate;
return G__7231;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7237__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$3(f,arg1,args);
};
var G__7237 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7237__delegate.call(this, args);
};
G__7237.cljs$lang$maxFixedArity = 0;
G__7237.cljs$lang$applyTo = (function (arglist__7238){
var args = cljs.core.seq(arglist__7238);;
return G__7237__delegate(args);
});
G__7237.cljs$lang$arity$variadic = G__7237__delegate;
return G__7237;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7239__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$4(f,arg1,arg2,args);
};
var G__7239 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7239__delegate.call(this, args);
};
G__7239.cljs$lang$maxFixedArity = 0;
G__7239.cljs$lang$applyTo = (function (arglist__7240){
var args = cljs.core.seq(arglist__7240);;
return G__7239__delegate(args);
});
G__7239.cljs$lang$arity$variadic = G__7239__delegate;
return G__7239;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7241__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,args);
};
var G__7241 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7241__delegate.call(this, args);
};
G__7241.cljs$lang$maxFixedArity = 0;
G__7241.cljs$lang$applyTo = (function (arglist__7242){
var args = cljs.core.seq(arglist__7242);;
return G__7241__delegate(args);
});
G__7241.cljs$lang$arity$variadic = G__7241__delegate;
return G__7241;
})()
;
});
var partial__5 = (function() { 
var G__7243__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7244__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$lang$arity$2(more,args));
};
var G__7244 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7244__delegate.call(this, args);
};
G__7244.cljs$lang$maxFixedArity = 0;
G__7244.cljs$lang$applyTo = (function (arglist__7245){
var args = cljs.core.seq(arglist__7245);;
return G__7244__delegate(args);
});
G__7244.cljs$lang$arity$variadic = G__7244__delegate;
return G__7244;
})()
;
};
var G__7243 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7243__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7243.cljs$lang$maxFixedArity = 4;
G__7243.cljs$lang$applyTo = (function (arglist__7246){
var f = cljs.core.first(arglist__7246);
var arg1 = cljs.core.first(cljs.core.next(arglist__7246));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7246)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7246))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7246))));
return G__7243__delegate(f, arg1, arg2, arg3, more);
});
G__7243.cljs$lang$arity$variadic = G__7243__delegate;
return G__7243;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7247 = null;
var G__7247__1 = (function (a){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__7247__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__7247__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__7247__4 = (function() { 
var G__7248__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__7248 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7248__delegate.call(this, a, b, c, ds);
};
G__7248.cljs$lang$maxFixedArity = 3;
G__7248.cljs$lang$applyTo = (function (arglist__7249){
var a = cljs.core.first(arglist__7249);
var b = cljs.core.first(cljs.core.next(arglist__7249));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7249)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7249)));
return G__7248__delegate(a, b, c, ds);
});
G__7248.cljs$lang$arity$variadic = G__7248__delegate;
return G__7248;
})()
;
G__7247 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7247__1.call(this,a);
case 2:
return G__7247__2.call(this,a,b);
case 3:
return G__7247__3.call(this,a,b,c);
default:
return G__7247__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7247.cljs$lang$maxFixedArity = 3;
G__7247.cljs$lang$applyTo = G__7247__4.cljs$lang$applyTo;
return G__7247;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7250 = null;
var G__7250__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__7250__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__7250__4 = (function() { 
var G__7251__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7251 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7251__delegate.call(this, a, b, c, ds);
};
G__7251.cljs$lang$maxFixedArity = 3;
G__7251.cljs$lang$applyTo = (function (arglist__7252){
var a = cljs.core.first(arglist__7252);
var b = cljs.core.first(cljs.core.next(arglist__7252));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7252)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7252)));
return G__7251__delegate(a, b, c, ds);
});
G__7251.cljs$lang$arity$variadic = G__7251__delegate;
return G__7251;
})()
;
G__7250 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7250__2.call(this,a,b);
case 3:
return G__7250__3.call(this,a,b,c);
default:
return G__7250__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7250.cljs$lang$maxFixedArity = 3;
G__7250.cljs$lang$applyTo = G__7250__4.cljs$lang$applyTo;
return G__7250;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7253 = null;
var G__7253__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__7253__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__7253__4 = (function() { 
var G__7254__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7254 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7254__delegate.call(this, a, b, c, ds);
};
G__7254.cljs$lang$maxFixedArity = 3;
G__7254.cljs$lang$applyTo = (function (arglist__7255){
var a = cljs.core.first(arglist__7255);
var b = cljs.core.first(cljs.core.next(arglist__7255));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7255)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7255)));
return G__7254__delegate(a, b, c, ds);
});
G__7254.cljs$lang$arity$variadic = G__7254__delegate;
return G__7254;
})()
;
G__7253 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7253__2.call(this,a,b);
case 3:
return G__7253__3.call(this,a,b,c);
default:
return G__7253__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7253.cljs$lang$maxFixedArity = 3;
G__7253.cljs$lang$applyTo = G__7253__4.cljs$lang$applyTo;
return G__7253;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7271 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7279 = cljs.core.seq(coll);
if(temp__3974__auto____7279)
{var s__7280 = temp__3974__auto____7279;
if(cljs.core.chunked_seq_QMARK_(s__7280))
{var c__7281 = cljs.core.chunk_first(s__7280);
var size__7282 = cljs.core.count(c__7281);
var b__7283 = cljs.core.chunk_buffer(size__7282);
var n__2154__auto____7284 = size__7282;
var i__7285 = 0;
while(true){
if((i__7285 < n__2154__auto____7284))
{cljs.core.chunk_append(b__7283,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__7285),cljs.core._nth.cljs$lang$arity$2(c__7281,i__7285)) : f.call(null,(idx + i__7285),cljs.core._nth.cljs$lang$arity$2(c__7281,i__7285))));
{
var G__7286 = (i__7285 + 1);
i__7285 = G__7286;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__7283),mapi((idx + size__7282),cljs.core.chunk_rest(s__7280)));
} else
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__7280)) : f.call(null,idx,cljs.core.first(s__7280))),mapi((idx + 1),cljs.core.rest(s__7280)));
}
} else
{return null;
}
}),null));
});
return (mapi__7271.cljs$lang$arity$2 ? mapi__7271.cljs$lang$arity$2(0,coll) : mapi__7271.call(null,0,coll));
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7296 = cljs.core.seq(coll);
if(temp__3974__auto____7296)
{var s__7297 = temp__3974__auto____7296;
if(cljs.core.chunked_seq_QMARK_(s__7297))
{var c__7298 = cljs.core.chunk_first(s__7297);
var size__7299 = cljs.core.count(c__7298);
var b__7300 = cljs.core.chunk_buffer(size__7299);
var n__2154__auto____7301 = size__7299;
var i__7302 = 0;
while(true){
if((i__7302 < n__2154__auto____7301))
{var x__7303 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__7298,i__7302)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__7298,i__7302)));
if((x__7303 == null))
{} else
{cljs.core.chunk_append(b__7300,x__7303);
}
{
var G__7305 = (i__7302 + 1);
i__7302 = G__7305;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__7300),keep(f,cljs.core.chunk_rest(s__7297)));
} else
{var x__7304 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__7297)) : f.call(null,cljs.core.first(s__7297)));
if((x__7304 == null))
{return keep(f,cljs.core.rest(s__7297));
} else
{return cljs.core.cons(x__7304,keep(f,cljs.core.rest(s__7297)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7331 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7341 = cljs.core.seq(coll);
if(temp__3974__auto____7341)
{var s__7342 = temp__3974__auto____7341;
if(cljs.core.chunked_seq_QMARK_(s__7342))
{var c__7343 = cljs.core.chunk_first(s__7342);
var size__7344 = cljs.core.count(c__7343);
var b__7345 = cljs.core.chunk_buffer(size__7344);
var n__2154__auto____7346 = size__7344;
var i__7347 = 0;
while(true){
if((i__7347 < n__2154__auto____7346))
{var x__7348 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__7347),cljs.core._nth.cljs$lang$arity$2(c__7343,i__7347)) : f.call(null,(idx + i__7347),cljs.core._nth.cljs$lang$arity$2(c__7343,i__7347)));
if((x__7348 == null))
{} else
{cljs.core.chunk_append(b__7345,x__7348);
}
{
var G__7350 = (i__7347 + 1);
i__7347 = G__7350;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__7345),keepi((idx + size__7344),cljs.core.chunk_rest(s__7342)));
} else
{var x__7349 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__7342)) : f.call(null,idx,cljs.core.first(s__7342)));
if((x__7349 == null))
{return keepi((idx + 1),cljs.core.rest(s__7342));
} else
{return cljs.core.cons(x__7349,keepi((idx + 1),cljs.core.rest(s__7342)));
}
}
} else
{return null;
}
}),null));
});
return (keepi__7331.cljs$lang$arity$2 ? keepi__7331.cljs$lang$arity$2(0,coll) : keepi__7331.call(null,0,coll));
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____7436 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3822__auto____7436))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
} else
{return and__3822__auto____7436;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____7437 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3822__auto____7437))
{var and__3822__auto____7438 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__3822__auto____7438))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
} else
{return and__3822__auto____7438;
}
} else
{return and__3822__auto____7437;
}
})());
});
var ep1__4 = (function() { 
var G__7507__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____7439 = ep1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____7439))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3822__auto____7439;
}
})());
};
var G__7507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7507__delegate.call(this, x, y, z, args);
};
G__7507.cljs$lang$maxFixedArity = 3;
G__7507.cljs$lang$applyTo = (function (arglist__7508){
var x = cljs.core.first(arglist__7508);
var y = cljs.core.first(cljs.core.next(arglist__7508));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7508)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7508)));
return G__7507__delegate(x, y, z, args);
});
G__7507.cljs$lang$arity$variadic = G__7507__delegate;
return G__7507;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3822__auto____7451 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____7451))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
} else
{return and__3822__auto____7451;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____7452 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____7452))
{var and__3822__auto____7453 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____7453))
{var and__3822__auto____7454 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____7454))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
} else
{return and__3822__auto____7454;
}
} else
{return and__3822__auto____7453;
}
} else
{return and__3822__auto____7452;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____7455 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____7455))
{var and__3822__auto____7456 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____7456))
{var and__3822__auto____7457 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3822__auto____7457))
{var and__3822__auto____7458 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____7458))
{var and__3822__auto____7459 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____7459))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
} else
{return and__3822__auto____7459;
}
} else
{return and__3822__auto____7458;
}
} else
{return and__3822__auto____7457;
}
} else
{return and__3822__auto____7456;
}
} else
{return and__3822__auto____7455;
}
})());
});
var ep2__4 = (function() { 
var G__7509__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____7460 = ep2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____7460))
{return cljs.core.every_QMARK_((function (p1__7306_SHARP_){
var and__3822__auto____7461 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__7306_SHARP_) : p1.call(null,p1__7306_SHARP_));
if(cljs.core.truth_(and__3822__auto____7461))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__7306_SHARP_) : p2.call(null,p1__7306_SHARP_));
} else
{return and__3822__auto____7461;
}
}),args);
} else
{return and__3822__auto____7460;
}
})());
};
var G__7509 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7509__delegate.call(this, x, y, z, args);
};
G__7509.cljs$lang$maxFixedArity = 3;
G__7509.cljs$lang$applyTo = (function (arglist__7510){
var x = cljs.core.first(arglist__7510);
var y = cljs.core.first(cljs.core.next(arglist__7510));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7510)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7510)));
return G__7509__delegate(x, y, z, args);
});
G__7509.cljs$lang$arity$variadic = G__7509__delegate;
return G__7509;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3822__auto____7480 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____7480))
{var and__3822__auto____7481 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____7481))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
} else
{return and__3822__auto____7481;
}
} else
{return and__3822__auto____7480;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____7482 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____7482))
{var and__3822__auto____7483 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____7483))
{var and__3822__auto____7484 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3822__auto____7484))
{var and__3822__auto____7485 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____7485))
{var and__3822__auto____7486 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____7486))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
} else
{return and__3822__auto____7486;
}
} else
{return and__3822__auto____7485;
}
} else
{return and__3822__auto____7484;
}
} else
{return and__3822__auto____7483;
}
} else
{return and__3822__auto____7482;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____7487 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____7487))
{var and__3822__auto____7488 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____7488))
{var and__3822__auto____7489 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3822__auto____7489))
{var and__3822__auto____7490 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____7490))
{var and__3822__auto____7491 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____7491))
{var and__3822__auto____7492 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__3822__auto____7492))
{var and__3822__auto____7493 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3822__auto____7493))
{var and__3822__auto____7494 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__3822__auto____7494))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
} else
{return and__3822__auto____7494;
}
} else
{return and__3822__auto____7493;
}
} else
{return and__3822__auto____7492;
}
} else
{return and__3822__auto____7491;
}
} else
{return and__3822__auto____7490;
}
} else
{return and__3822__auto____7489;
}
} else
{return and__3822__auto____7488;
}
} else
{return and__3822__auto____7487;
}
})());
});
var ep3__4 = (function() { 
var G__7511__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____7495 = ep3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____7495))
{return cljs.core.every_QMARK_((function (p1__7307_SHARP_){
var and__3822__auto____7496 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__7307_SHARP_) : p1.call(null,p1__7307_SHARP_));
if(cljs.core.truth_(and__3822__auto____7496))
{var and__3822__auto____7497 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__7307_SHARP_) : p2.call(null,p1__7307_SHARP_));
if(cljs.core.truth_(and__3822__auto____7497))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__7307_SHARP_) : p3.call(null,p1__7307_SHARP_));
} else
{return and__3822__auto____7497;
}
} else
{return and__3822__auto____7496;
}
}),args);
} else
{return and__3822__auto____7495;
}
})());
};
var G__7511 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7511__delegate.call(this, x, y, z, args);
};
G__7511.cljs$lang$maxFixedArity = 3;
G__7511.cljs$lang$applyTo = (function (arglist__7512){
var x = cljs.core.first(arglist__7512);
var y = cljs.core.first(cljs.core.next(arglist__7512));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7512)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7512)));
return G__7511__delegate(x, y, z, args);
});
G__7511.cljs$lang$arity$variadic = G__7511__delegate;
return G__7511;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7513__delegate = function (p1,p2,p3,ps){
var ps__7498 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__7308_SHARP_){
return (p1__7308_SHARP_.cljs$lang$arity$1 ? p1__7308_SHARP_.cljs$lang$arity$1(x) : p1__7308_SHARP_.call(null,x));
}),ps__7498);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__7309_SHARP_){
var and__3822__auto____7503 = (p1__7309_SHARP_.cljs$lang$arity$1 ? p1__7309_SHARP_.cljs$lang$arity$1(x) : p1__7309_SHARP_.call(null,x));
if(cljs.core.truth_(and__3822__auto____7503))
{return (p1__7309_SHARP_.cljs$lang$arity$1 ? p1__7309_SHARP_.cljs$lang$arity$1(y) : p1__7309_SHARP_.call(null,y));
} else
{return and__3822__auto____7503;
}
}),ps__7498);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__7310_SHARP_){
var and__3822__auto____7504 = (p1__7310_SHARP_.cljs$lang$arity$1 ? p1__7310_SHARP_.cljs$lang$arity$1(x) : p1__7310_SHARP_.call(null,x));
if(cljs.core.truth_(and__3822__auto____7504))
{var and__3822__auto____7505 = (p1__7310_SHARP_.cljs$lang$arity$1 ? p1__7310_SHARP_.cljs$lang$arity$1(y) : p1__7310_SHARP_.call(null,y));
if(cljs.core.truth_(and__3822__auto____7505))
{return (p1__7310_SHARP_.cljs$lang$arity$1 ? p1__7310_SHARP_.cljs$lang$arity$1(z) : p1__7310_SHARP_.call(null,z));
} else
{return and__3822__auto____7505;
}
} else
{return and__3822__auto____7504;
}
}),ps__7498);
});
var epn__4 = (function() { 
var G__7514__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____7506 = epn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____7506))
{return cljs.core.every_QMARK_((function (p1__7311_SHARP_){
return cljs.core.every_QMARK_(p1__7311_SHARP_,args);
}),ps__7498);
} else
{return and__3822__auto____7506;
}
})());
};
var G__7514 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7514__delegate.call(this, x, y, z, args);
};
G__7514.cljs$lang$maxFixedArity = 3;
G__7514.cljs$lang$applyTo = (function (arglist__7515){
var x = cljs.core.first(arglist__7515);
var y = cljs.core.first(cljs.core.next(arglist__7515));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7515)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7515)));
return G__7514__delegate(x, y, z, args);
});
G__7514.cljs$lang$arity$variadic = G__7514__delegate;
return G__7514;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7513 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7513__delegate.call(this, p1, p2, p3, ps);
};
G__7513.cljs$lang$maxFixedArity = 3;
G__7513.cljs$lang$applyTo = (function (arglist__7516){
var p1 = cljs.core.first(arglist__7516);
var p2 = cljs.core.first(cljs.core.next(arglist__7516));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7516)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7516)));
return G__7513__delegate(p1, p2, p3, ps);
});
G__7513.cljs$lang$arity$variadic = G__7513__delegate;
return G__7513;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){
var or__3824__auto____7597 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3824__auto____7597))
{return or__3824__auto____7597;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7598 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3824__auto____7598))
{return or__3824__auto____7598;
} else
{var or__3824__auto____7599 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__3824__auto____7599))
{return or__3824__auto____7599;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__7668__delegate = function (x,y,z,args){
var or__3824__auto____7600 = sp1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____7600))
{return or__3824__auto____7600;
} else
{return cljs.core.some(p,args);
}
};
var G__7668 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7668__delegate.call(this, x, y, z, args);
};
G__7668.cljs$lang$maxFixedArity = 3;
G__7668.cljs$lang$applyTo = (function (arglist__7669){
var x = cljs.core.first(arglist__7669);
var y = cljs.core.first(cljs.core.next(arglist__7669));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7669)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7669)));
return G__7668__delegate(x, y, z, args);
});
G__7668.cljs$lang$arity$variadic = G__7668__delegate;
return G__7668;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7612 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____7612))
{return or__3824__auto____7612;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7613 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____7613))
{return or__3824__auto____7613;
} else
{var or__3824__auto____7614 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____7614))
{return or__3824__auto____7614;
} else
{var or__3824__auto____7615 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____7615))
{return or__3824__auto____7615;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7616 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____7616))
{return or__3824__auto____7616;
} else
{var or__3824__auto____7617 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____7617))
{return or__3824__auto____7617;
} else
{var or__3824__auto____7618 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3824__auto____7618))
{return or__3824__auto____7618;
} else
{var or__3824__auto____7619 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____7619))
{return or__3824__auto____7619;
} else
{var or__3824__auto____7620 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____7620))
{return or__3824__auto____7620;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7670__delegate = function (x,y,z,args){
var or__3824__auto____7621 = sp2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____7621))
{return or__3824__auto____7621;
} else
{return cljs.core.some((function (p1__7351_SHARP_){
var or__3824__auto____7622 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__7351_SHARP_) : p1.call(null,p1__7351_SHARP_));
if(cljs.core.truth_(or__3824__auto____7622))
{return or__3824__auto____7622;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__7351_SHARP_) : p2.call(null,p1__7351_SHARP_));
}
}),args);
}
};
var G__7670 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7670__delegate.call(this, x, y, z, args);
};
G__7670.cljs$lang$maxFixedArity = 3;
G__7670.cljs$lang$applyTo = (function (arglist__7671){
var x = cljs.core.first(arglist__7671);
var y = cljs.core.first(cljs.core.next(arglist__7671));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7671)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7671)));
return G__7670__delegate(x, y, z, args);
});
G__7670.cljs$lang$arity$variadic = G__7670__delegate;
return G__7670;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7641 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____7641))
{return or__3824__auto____7641;
} else
{var or__3824__auto____7642 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____7642))
{return or__3824__auto____7642;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7643 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____7643))
{return or__3824__auto____7643;
} else
{var or__3824__auto____7644 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____7644))
{return or__3824__auto____7644;
} else
{var or__3824__auto____7645 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3824__auto____7645))
{return or__3824__auto____7645;
} else
{var or__3824__auto____7646 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____7646))
{return or__3824__auto____7646;
} else
{var or__3824__auto____7647 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____7647))
{return or__3824__auto____7647;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7648 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____7648))
{return or__3824__auto____7648;
} else
{var or__3824__auto____7649 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____7649))
{return or__3824__auto____7649;
} else
{var or__3824__auto____7650 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3824__auto____7650))
{return or__3824__auto____7650;
} else
{var or__3824__auto____7651 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____7651))
{return or__3824__auto____7651;
} else
{var or__3824__auto____7652 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____7652))
{return or__3824__auto____7652;
} else
{var or__3824__auto____7653 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__3824__auto____7653))
{return or__3824__auto____7653;
} else
{var or__3824__auto____7654 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3824__auto____7654))
{return or__3824__auto____7654;
} else
{var or__3824__auto____7655 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__3824__auto____7655))
{return or__3824__auto____7655;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7672__delegate = function (x,y,z,args){
var or__3824__auto____7656 = sp3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____7656))
{return or__3824__auto____7656;
} else
{return cljs.core.some((function (p1__7352_SHARP_){
var or__3824__auto____7657 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__7352_SHARP_) : p1.call(null,p1__7352_SHARP_));
if(cljs.core.truth_(or__3824__auto____7657))
{return or__3824__auto____7657;
} else
{var or__3824__auto____7658 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__7352_SHARP_) : p2.call(null,p1__7352_SHARP_));
if(cljs.core.truth_(or__3824__auto____7658))
{return or__3824__auto____7658;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__7352_SHARP_) : p3.call(null,p1__7352_SHARP_));
}
}
}),args);
}
};
var G__7672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7672__delegate.call(this, x, y, z, args);
};
G__7672.cljs$lang$maxFixedArity = 3;
G__7672.cljs$lang$applyTo = (function (arglist__7673){
var x = cljs.core.first(arglist__7673);
var y = cljs.core.first(cljs.core.next(arglist__7673));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7673)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7673)));
return G__7672__delegate(x, y, z, args);
});
G__7672.cljs$lang$arity$variadic = G__7672__delegate;
return G__7672;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7674__delegate = function (p1,p2,p3,ps){
var ps__7659 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__7353_SHARP_){
return (p1__7353_SHARP_.cljs$lang$arity$1 ? p1__7353_SHARP_.cljs$lang$arity$1(x) : p1__7353_SHARP_.call(null,x));
}),ps__7659);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__7354_SHARP_){
var or__3824__auto____7664 = (p1__7354_SHARP_.cljs$lang$arity$1 ? p1__7354_SHARP_.cljs$lang$arity$1(x) : p1__7354_SHARP_.call(null,x));
if(cljs.core.truth_(or__3824__auto____7664))
{return or__3824__auto____7664;
} else
{return (p1__7354_SHARP_.cljs$lang$arity$1 ? p1__7354_SHARP_.cljs$lang$arity$1(y) : p1__7354_SHARP_.call(null,y));
}
}),ps__7659);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__7355_SHARP_){
var or__3824__auto____7665 = (p1__7355_SHARP_.cljs$lang$arity$1 ? p1__7355_SHARP_.cljs$lang$arity$1(x) : p1__7355_SHARP_.call(null,x));
if(cljs.core.truth_(or__3824__auto____7665))
{return or__3824__auto____7665;
} else
{var or__3824__auto____7666 = (p1__7355_SHARP_.cljs$lang$arity$1 ? p1__7355_SHARP_.cljs$lang$arity$1(y) : p1__7355_SHARP_.call(null,y));
if(cljs.core.truth_(or__3824__auto____7666))
{return or__3824__auto____7666;
} else
{return (p1__7355_SHARP_.cljs$lang$arity$1 ? p1__7355_SHARP_.cljs$lang$arity$1(z) : p1__7355_SHARP_.call(null,z));
}
}
}),ps__7659);
});
var spn__4 = (function() { 
var G__7675__delegate = function (x,y,z,args){
var or__3824__auto____7667 = spn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____7667))
{return or__3824__auto____7667;
} else
{return cljs.core.some((function (p1__7356_SHARP_){
return cljs.core.some(p1__7356_SHARP_,args);
}),ps__7659);
}
};
var G__7675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7675__delegate.call(this, x, y, z, args);
};
G__7675.cljs$lang$maxFixedArity = 3;
G__7675.cljs$lang$applyTo = (function (arglist__7676){
var x = cljs.core.first(arglist__7676);
var y = cljs.core.first(cljs.core.next(arglist__7676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7676)));
return G__7675__delegate(x, y, z, args);
});
G__7675.cljs$lang$arity$variadic = G__7675__delegate;
return G__7675;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7674 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7674__delegate.call(this, p1, p2, p3, ps);
};
G__7674.cljs$lang$maxFixedArity = 3;
G__7674.cljs$lang$applyTo = (function (arglist__7677){
var p1 = cljs.core.first(arglist__7677);
var p2 = cljs.core.first(cljs.core.next(arglist__7677));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7677)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7677)));
return G__7674__delegate(p1, p2, p3, ps);
});
G__7674.cljs$lang$arity$variadic = G__7674__delegate;
return G__7674;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7696 = cljs.core.seq(coll);
if(temp__3974__auto____7696)
{var s__7697 = temp__3974__auto____7696;
if(cljs.core.chunked_seq_QMARK_(s__7697))
{var c__7698 = cljs.core.chunk_first(s__7697);
var size__7699 = cljs.core.count(c__7698);
var b__7700 = cljs.core.chunk_buffer(size__7699);
var n__2154__auto____7701 = size__7699;
var i__7702 = 0;
while(true){
if((i__7702 < n__2154__auto____7701))
{cljs.core.chunk_append(b__7700,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__7698,i__7702)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__7698,i__7702))));
{
var G__7714 = (i__7702 + 1);
i__7702 = G__7714;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__7700),map.cljs$lang$arity$2(f,cljs.core.chunk_rest(s__7697)));
} else
{return cljs.core.cons((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__7697)) : f.call(null,cljs.core.first(s__7697))),map.cljs$lang$arity$2(f,cljs.core.rest(s__7697)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7703 = cljs.core.seq(c1);
var s2__7704 = cljs.core.seq(c2);
if((function (){var and__3822__auto____7705 = s1__7703;
if(and__3822__auto____7705)
{return s2__7704;
} else
{return and__3822__auto____7705;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(s1__7703),cljs.core.first(s2__7704)) : f.call(null,cljs.core.first(s1__7703),cljs.core.first(s2__7704))),map.cljs$lang$arity$3(f,cljs.core.rest(s1__7703),cljs.core.rest(s2__7704)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7706 = cljs.core.seq(c1);
var s2__7707 = cljs.core.seq(c2);
var s3__7708 = cljs.core.seq(c3);
if((function (){var and__3822__auto____7709 = s1__7706;
if(and__3822__auto____7709)
{var and__3822__auto____7710 = s2__7707;
if(and__3822__auto____7710)
{return s3__7708;
} else
{return and__3822__auto____7710;
}
} else
{return and__3822__auto____7709;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(cljs.core.first(s1__7706),cljs.core.first(s2__7707),cljs.core.first(s3__7708)) : f.call(null,cljs.core.first(s1__7706),cljs.core.first(s2__7707),cljs.core.first(s3__7708))),map.cljs$lang$arity$4(f,cljs.core.rest(s1__7706),cljs.core.rest(s2__7707),cljs.core.rest(s3__7708)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7715__delegate = function (f,c1,c2,c3,colls){
var step__7713 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7712 = map.cljs$lang$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss__7712))
{return cljs.core.cons(map.cljs$lang$arity$2(cljs.core.first,ss__7712),step(map.cljs$lang$arity$2(cljs.core.rest,ss__7712)));
} else
{return null;
}
}),null));
});
return map.cljs$lang$arity$2((function (p1__7517_SHARP_){
return cljs.core.apply.cljs$lang$arity$2(f,p1__7517_SHARP_);
}),(step__7713.cljs$lang$arity$1 ? step__7713.cljs$lang$arity$1(cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))) : step__7713.call(null,cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0)))));
};
var G__7715 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7715__delegate.call(this, f, c1, c2, c3, colls);
};
G__7715.cljs$lang$maxFixedArity = 4;
G__7715.cljs$lang$applyTo = (function (arglist__7716){
var f = cljs.core.first(arglist__7716);
var c1 = cljs.core.first(cljs.core.next(arglist__7716));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7716)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7716))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7716))));
return G__7715__delegate(f, c1, c2, c3, colls);
});
G__7715.cljs$lang$arity$variadic = G__7715__delegate;
return G__7715;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7719 = cljs.core.seq(coll);
if(temp__3974__auto____7719)
{var s__7720 = temp__3974__auto____7719;
return cljs.core.cons(cljs.core.first(s__7720),take((n - 1),cljs.core.rest(s__7720)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7726 = (function (n,coll){
while(true){
var s__7724 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3822__auto____7725 = (n > 0);
if(and__3822__auto____7725)
{return s__7724;
} else
{return and__3822__auto____7725;
}
})()))
{{
var G__7727 = (n - 1);
var G__7728 = cljs.core.rest(s__7724);
n = G__7727;
coll = G__7728;
continue;
}
} else
{return s__7724;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__7726.cljs$lang$arity$2 ? step__7726.cljs$lang$arity$2(n,coll) : step__7726.call(null,n,coll));
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$lang$arity$2(1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$lang$arity$3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7731 = cljs.core.seq(coll);
var lead__7732 = cljs.core.seq(cljs.core.drop(n,coll));
while(true){
if(lead__7732)
{{
var G__7733 = cljs.core.next(s__7731);
var G__7734 = cljs.core.next(lead__7732);
s__7731 = G__7733;
lead__7732 = G__7734;
continue;
}
} else
{return s__7731;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7740 = (function (pred,coll){
while(true){
var s__7738 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3822__auto____7739 = s__7738;
if(and__3822__auto____7739)
{return (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__7738)) : pred.call(null,cljs.core.first(s__7738)));
} else
{return and__3822__auto____7739;
}
})()))
{{
var G__7741 = pred;
var G__7742 = cljs.core.rest(s__7738);
pred = G__7741;
coll = G__7742;
continue;
}
} else
{return s__7738;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__7740.cljs$lang$arity$2 ? step__7740.cljs$lang$arity$2(pred,coll) : step__7740.call(null,pred,coll));
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7745 = cljs.core.seq(coll);
if(temp__3974__auto____7745)
{var s__7746 = temp__3974__auto____7745;
return cljs.core.concat.cljs$lang$arity$2(s__7746,cycle(s__7746));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.cljs$lang$arity$1(x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.cljs$lang$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.cljs$lang$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),repeatedly.cljs$lang$arity$1(f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.cljs$lang$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate(f,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7751 = cljs.core.seq(c1);
var s2__7752 = cljs.core.seq(c2);
if((function (){var and__3822__auto____7753 = s1__7751;
if(and__3822__auto____7753)
{return s2__7752;
} else
{return and__3822__auto____7753;
}
})())
{return cljs.core.cons(cljs.core.first(s1__7751),cljs.core.cons(cljs.core.first(s2__7752),interleave.cljs$lang$arity$2(cljs.core.rest(s1__7751),cljs.core.rest(s2__7752))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7755__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7754 = cljs.core.map.cljs$lang$arity$2(cljs.core.seq,cljs.core.conj.cljs$lang$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss__7754))
{return cljs.core.concat.cljs$lang$arity$2(cljs.core.map.cljs$lang$arity$2(cljs.core.first,ss__7754),cljs.core.apply.cljs$lang$arity$2(interleave,cljs.core.map.cljs$lang$arity$2(cljs.core.rest,ss__7754)));
} else
{return null;
}
}),null));
};
var G__7755 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7755__delegate.call(this, c1, c2, colls);
};
G__7755.cljs$lang$maxFixedArity = 2;
G__7755.cljs$lang$applyTo = (function (arglist__7756){
var c1 = cljs.core.first(arglist__7756);
var c2 = cljs.core.first(cljs.core.next(arglist__7756));
var colls = cljs.core.rest(cljs.core.next(arglist__7756));
return G__7755__delegate(c1, c2, colls);
});
G__7755.cljs$lang$arity$variadic = G__7755__delegate;
return G__7755;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.cljs$lang$arity$2(cljs.core.repeat.cljs$lang$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7766 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7764 = cljs.core.seq(coll);
if(temp__3971__auto____7764)
{var coll__7765 = temp__3971__auto____7764;
return cljs.core.cons(cljs.core.first(coll__7765),cat(cljs.core.rest(coll__7765),colls));
} else
{if(cljs.core.seq(colls))
{return cat(cljs.core.first(colls),cljs.core.rest(colls));
} else
{return null;
}
}
}),null));
});
return (cat__7766.cljs$lang$arity$2 ? cat__7766.cljs$lang$arity$2(null,colls) : cat__7766.call(null,null,colls));
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.cljs$lang$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__7767__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.cljs$lang$arity$4(cljs.core.map,f,coll,colls));
};
var G__7767 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7767__delegate.call(this, f, coll, colls);
};
G__7767.cljs$lang$maxFixedArity = 2;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var f = cljs.core.first(arglist__7768);
var coll = cljs.core.first(cljs.core.next(arglist__7768));
var colls = cljs.core.rest(cljs.core.next(arglist__7768));
return G__7767__delegate(f, coll, colls);
});
G__7767.cljs$lang$arity$variadic = G__7767__delegate;
return G__7767;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7778 = cljs.core.seq(coll);
if(temp__3974__auto____7778)
{var s__7779 = temp__3974__auto____7778;
if(cljs.core.chunked_seq_QMARK_(s__7779))
{var c__7780 = cljs.core.chunk_first(s__7779);
var size__7781 = cljs.core.count(c__7780);
var b__7782 = cljs.core.chunk_buffer(size__7781);
var n__2154__auto____7783 = size__7781;
var i__7784 = 0;
while(true){
if((i__7784 < n__2154__auto____7783))
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__7780,i__7784)) : pred.call(null,cljs.core._nth.cljs$lang$arity$2(c__7780,i__7784)))))
{cljs.core.chunk_append(b__7782,cljs.core._nth.cljs$lang$arity$2(c__7780,i__7784));
} else
{}
{
var G__7787 = (i__7784 + 1);
i__7784 = G__7787;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__7782),filter(pred,cljs.core.chunk_rest(s__7779)));
} else
{var f__7785 = cljs.core.first(s__7779);
var r__7786 = cljs.core.rest(s__7779);
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(f__7785) : pred.call(null,f__7785))))
{return cljs.core.cons(f__7785,filter(pred,r__7786));
} else
{return filter(pred,r__7786);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7790 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$lang$arity$1 ? branch_QMARK_.cljs$lang$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$lang$arity$2(walk,(children.cljs$lang$arity$1 ? children.cljs$lang$arity$1(node) : children.call(null,node))):null));
}),null));
});
return (walk__7790.cljs$lang$arity$1 ? walk__7790.cljs$lang$arity$1(root) : walk__7790.call(null,root));
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__7788_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__7788_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7794__7795 = to;
if(G__7794__7795)
{if((function (){var or__3824__auto____7796 = (G__7794__7795.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7796)
{return or__3824__auto____7796;
} else
{return G__7794__7795.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7794__7795.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__7794__7795);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__7794__7795);
}
})())
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
return cljs.core.conj_BANG_(v,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7797__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$lang$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__7797 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7797__delegate.call(this, f, c1, c2, c3, colls);
};
G__7797.cljs$lang$maxFixedArity = 4;
G__7797.cljs$lang$applyTo = (function (arglist__7798){
var f = cljs.core.first(arglist__7798);
var c1 = cljs.core.first(cljs.core.next(arglist__7798));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7798)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7798))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7798))));
return G__7797__delegate(f, c1, c2, c3, colls);
});
G__7797.cljs$lang$arity$variadic = G__7797__delegate;
return G__7797;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$lang$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7805 = cljs.core.seq(coll);
if(temp__3974__auto____7805)
{var s__7806 = temp__3974__auto____7805;
var p__7807 = cljs.core.take(n,s__7806);
if((n === cljs.core.count(p__7807)))
{return cljs.core.cons(p__7807,partition.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__7806)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7808 = cljs.core.seq(coll);
if(temp__3974__auto____7808)
{var s__7809 = temp__3974__auto____7808;
var p__7810 = cljs.core.take(n,s__7809);
if((n === cljs.core.count(p__7810)))
{return cljs.core.cons(p__7810,partition.cljs$lang$arity$4(n,step,pad,cljs.core.drop(step,s__7809)));
} else
{return cljs.core.list.cljs$lang$arity$1(cljs.core.take(n,cljs.core.concat.cljs$lang$arity$2(p__7810,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7815 = cljs.core.lookup_sentinel;
var m__7816 = m;
var ks__7817 = cljs.core.seq(ks);
while(true){
if(ks__7817)
{var m__7818 = cljs.core._lookup.cljs$lang$arity$3(m__7816,cljs.core.first(ks__7817),sentinel__7815);
if((sentinel__7815 === m__7818))
{return not_found;
} else
{{
var G__7819 = sentinel__7815;
var G__7820 = m__7818;
var G__7821 = cljs.core.next(ks__7817);
sentinel__7815 = G__7819;
m__7816 = G__7820;
ks__7817 = G__7821;
continue;
}
}
} else
{return m__7816;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7822,v){
var vec__7827__7828 = p__7822;
var k__7829 = cljs.core.nth.cljs$lang$arity$3(vec__7827__7828,0,null);
var ks__7830 = cljs.core.nthnext(vec__7827__7828,1);
if(cljs.core.truth_(ks__7830))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__7829,assoc_in(cljs.core._lookup.cljs$lang$arity$3(m,k__7829,null),ks__7830,v));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__7829,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7831,f,args){
var vec__7836__7837 = p__7831;
var k__7838 = cljs.core.nth.cljs$lang$arity$3(vec__7836__7837,0,null);
var ks__7839 = cljs.core.nthnext(vec__7836__7837,1);
if(cljs.core.truth_(ks__7839))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__7838,cljs.core.apply.cljs$lang$arity$5(update_in,cljs.core._lookup.cljs$lang$arity$3(m,k__7838,null),ks__7839,f,args));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__7838,cljs.core.apply.cljs$lang$arity$3(f,cljs.core._lookup.cljs$lang$arity$3(m,k__7838,null),args));
}
};
var update_in = function (m,p__7831,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7831, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7840){
var m = cljs.core.first(arglist__7840);
var p__7831 = cljs.core.first(cljs.core.next(arglist__7840));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7840)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7840)));
return update_in__delegate(m, p__7831, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7843 = this;
var h__1819__auto____7844 = this__7843.__hash;
if(!((h__1819__auto____7844 == null)))
{return h__1819__auto____7844;
} else
{var h__1819__auto____7845 = cljs.core.hash_coll(coll);
this__7843.__hash = h__1819__auto____7845;
return h__1819__auto____7845;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7846 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7847 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7848 = this;
var new_array__7849 = this__7848.array.slice();
(new_array__7849[k] = v);
return (new cljs.core.Vector(this__7848.meta,new_array__7849,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__7880 = null;
var G__7880__2 = (function (this_sym7850,k){
var this__7852 = this;
var this_sym7850__7853 = this;
var coll__7854 = this_sym7850__7853;
return coll__7854.cljs$core$ILookup$_lookup$arity$2(coll__7854,k);
});
var G__7880__3 = (function (this_sym7851,k,not_found){
var this__7852 = this;
var this_sym7851__7855 = this;
var coll__7856 = this_sym7851__7855;
return coll__7856.cljs$core$ILookup$_lookup$arity$3(coll__7856,k,not_found);
});
G__7880 = function(this_sym7851,k,not_found){
switch(arguments.length){
case 2:
return G__7880__2.call(this,this_sym7851,k);
case 3:
return G__7880__3.call(this,this_sym7851,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7880;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7841,args7842){
var this__7857 = this;
return this_sym7841.call.apply(this_sym7841,[this_sym7841].concat(args7842.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7858 = this;
var new_array__7859 = this__7858.array.slice();
new_array__7859.push(o);
return (new cljs.core.Vector(this__7858.meta,new_array__7859,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7860 = this;
var this__7861 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7861], 0));
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7862 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(this__7862.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7863 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(this__7863.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7864 = this;
if((this__7864.array.length > 0))
{var vector_seq__7865 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7864.array.length))
{return cljs.core.cons((this__7864.array[i]),vector_seq((i + 1)));
} else
{return null;
}
}),null));
});
return (vector_seq__7865.cljs$lang$arity$1 ? vector_seq__7865.cljs$lang$arity$1(0) : vector_seq__7865.call(null,0));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7866 = this;
return this__7866.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7867 = this;
var count__7868 = this__7867.array.length;
if((count__7868 > 0))
{return (this__7867.array[(count__7868 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7869 = this;
if((this__7869.array.length > 0))
{var new_array__7870 = this__7869.array.slice();
new_array__7870.pop();
return (new cljs.core.Vector(this__7869.meta,new_array__7870,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7871 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7872 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7873 = this;
return (new cljs.core.Vector(meta,this__7873.array,this__7873.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7874 = this;
return this__7874.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7875 = this;
if((function (){var and__3822__auto____7876 = (0 <= n);
if(and__3822__auto____7876)
{return (n < this__7875.array.length);
} else
{return and__3822__auto____7876;
}
})())
{return (this__7875.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7877 = this;
if((function (){var and__3822__auto____7878 = (0 <= n);
if(and__3822__auto____7878)
{return (n < this__7877.array.length);
} else
{return and__3822__auto____7878;
}
})())
{return (this__7877.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7879 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__7879.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__1937__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.cljs$lang$arity$1(32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__7882 = pv.cnt;
if((cnt__7882 < 32))
{return 0;
} else
{return (((cnt__7882 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7888 = level;
var ret__7889 = node;
while(true){
if((ll__7888 === 0))
{return ret__7889;
} else
{var embed__7890 = ret__7889;
var r__7891 = cljs.core.pv_fresh_node(edit);
var ___7892 = cljs.core.pv_aset(r__7891,0,embed__7890);
{
var G__7893 = (ll__7888 - 5);
var G__7894 = r__7891;
ll__7888 = G__7893;
ret__7889 = G__7894;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7900 = cljs.core.pv_clone_node(parent);
var subidx__7901 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset(ret__7900,subidx__7901,tailnode);
return ret__7900;
} else
{var child__7902 = cljs.core.pv_aget(parent,subidx__7901);
if(!((child__7902 == null)))
{var node_to_insert__7903 = push_tail(pv,(level - 5),child__7902,tailnode);
cljs.core.pv_aset(ret__7900,subidx__7901,node_to_insert__7903);
return ret__7900;
} else
{var node_to_insert__7904 = cljs.core.new_path(null,(level - 5),tailnode);
cljs.core.pv_aset(ret__7900,subidx__7901,node_to_insert__7904);
return ret__7900;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7908 = (0 <= i);
if(and__3822__auto____7908)
{return (i < pv.cnt);
} else
{return and__3822__auto____7908;
}
})())
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node__7909 = pv.root;
var level__7910 = pv.shift;
while(true){
if((level__7910 > 0))
{{
var G__7911 = cljs.core.pv_aget(node__7909,((i >>> level__7910) & 31));
var G__7912 = (level__7910 - 5);
node__7909 = G__7911;
level__7910 = G__7912;
continue;
}
} else
{return node__7909.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7915 = cljs.core.pv_clone_node(node);
if((level === 0))
{cljs.core.pv_aset(ret__7915,(i & 31),val);
return ret__7915;
} else
{var subidx__7916 = ((i >>> level) & 31);
cljs.core.pv_aset(ret__7915,subidx__7916,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx__7916),i,val));
return ret__7915;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7922 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7923 = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx__7922));
if((function (){var and__3822__auto____7924 = (new_child__7923 == null);
if(and__3822__auto____7924)
{return (subidx__7922 === 0);
} else
{return and__3822__auto____7924;
}
})())
{return null;
} else
{var ret__7925 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__7925,subidx__7922,new_child__7923);
return ret__7925;
}
} else
{if((subidx__7922 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7926 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__7926,subidx__7922,null);
return ret__7926;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7929 = this;
return (new cljs.core.TransientVector(this__7929.cnt,this__7929.shift,cljs.core.tv_editable_root(this__7929.root),cljs.core.tv_editable_tail(this__7929.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7930 = this;
var h__1819__auto____7931 = this__7930.__hash;
if(!((h__1819__auto____7931 == null)))
{return h__1819__auto____7931;
} else
{var h__1819__auto____7932 = cljs.core.hash_coll(coll);
this__7930.__hash = h__1819__auto____7932;
return h__1819__auto____7932;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7933 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7934 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7935 = this;
if((function (){var and__3822__auto____7936 = (0 <= k);
if(and__3822__auto____7936)
{return (k < this__7935.cnt);
} else
{return and__3822__auto____7936;
}
})())
{if((cljs.core.tail_off(coll) <= k))
{var new_tail__7937 = this__7935.tail.slice();
(new_tail__7937[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7935.meta,this__7935.cnt,this__7935.shift,this__7935.root,new_tail__7937,null));
} else
{return (new cljs.core.PersistentVector(this__7935.meta,this__7935.cnt,this__7935.shift,cljs.core.do_assoc(coll,this__7935.shift,this__7935.root,k,v),this__7935.tail,null));
}
} else
{if((k === this__7935.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7935.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__7985 = null;
var G__7985__2 = (function (this_sym7938,k){
var this__7940 = this;
var this_sym7938__7941 = this;
var coll__7942 = this_sym7938__7941;
return coll__7942.cljs$core$ILookup$_lookup$arity$2(coll__7942,k);
});
var G__7985__3 = (function (this_sym7939,k,not_found){
var this__7940 = this;
var this_sym7939__7943 = this;
var coll__7944 = this_sym7939__7943;
return coll__7944.cljs$core$ILookup$_lookup$arity$3(coll__7944,k,not_found);
});
G__7985 = function(this_sym7939,k,not_found){
switch(arguments.length){
case 2:
return G__7985__2.call(this,this_sym7939,k);
case 3:
return G__7985__3.call(this,this_sym7939,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7985;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym7927,args7928){
var this__7945 = this;
return this_sym7927.call.apply(this_sym7927,[this_sym7927].concat(args7928.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7946 = this;
var step_init__7947 = [0,init];
var i__7948 = 0;
while(true){
if((i__7948 < this__7946.cnt))
{var arr__7949 = cljs.core.array_for(v,i__7948);
var len__7950 = arr__7949.length;
var init__7954 = (function (){var j__7951 = 0;
var init__7952 = (step_init__7947[1]);
while(true){
if((j__7951 < len__7950))
{var init__7953 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__7952,(j__7951 + i__7948),(arr__7949[j__7951])) : f.call(null,init__7952,(j__7951 + i__7948),(arr__7949[j__7951])));
if(cljs.core.reduced_QMARK_(init__7953))
{return init__7953;
} else
{{
var G__7986 = (j__7951 + 1);
var G__7987 = init__7953;
j__7951 = G__7986;
init__7952 = G__7987;
continue;
}
}
} else
{(step_init__7947[0] = len__7950);
(step_init__7947[1] = init__7952);
return init__7952;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__7954))
{return cljs.core.deref(init__7954);
} else
{{
var G__7988 = (i__7948 + (step_init__7947[0]));
i__7948 = G__7988;
continue;
}
}
} else
{return (step_init__7947[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7955 = this;
if(((this__7955.cnt - cljs.core.tail_off(coll)) < 32))
{var new_tail__7956 = this__7955.tail.slice();
new_tail__7956.push(o);
return (new cljs.core.PersistentVector(this__7955.meta,(this__7955.cnt + 1),this__7955.shift,this__7955.root,new_tail__7956,null));
} else
{var root_overflow_QMARK___7957 = ((this__7955.cnt >>> 5) > (1 << this__7955.shift));
var new_shift__7958 = ((root_overflow_QMARK___7957)?(this__7955.shift + 5):this__7955.shift);
var new_root__7960 = ((root_overflow_QMARK___7957)?(function (){var n_r__7959 = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r__7959,0,this__7955.root);
cljs.core.pv_aset(n_r__7959,1,cljs.core.new_path(null,this__7955.shift,(new cljs.core.VectorNode(null,this__7955.tail))));
return n_r__7959;
})():cljs.core.push_tail(coll,this__7955.shift,this__7955.root,(new cljs.core.VectorNode(null,this__7955.tail))));
return (new cljs.core.PersistentVector(this__7955.meta,(this__7955.cnt + 1),new_shift__7958,new_root__7960,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7961 = this;
if((this__7961.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__7961.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__7962 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__7963 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__7964 = this;
var this__7965 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7965], 0));
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7966 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7967 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7968 = this;
if((this__7968.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.cljs$lang$arity$3(coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7969 = this;
return this__7969.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7970 = this;
if((this__7970.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__7970.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7971 = this;
if((this__7971.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7971.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,this__7971.meta);
} else
{if((1 < (this__7971.cnt - cljs.core.tail_off(coll))))
{return (new cljs.core.PersistentVector(this__7971.meta,(this__7971.cnt - 1),this__7971.shift,this__7971.root,this__7971.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__7972 = cljs.core.array_for(coll,(this__7971.cnt - 2));
var nr__7973 = cljs.core.pop_tail(coll,this__7971.shift,this__7971.root);
var new_root__7974 = (((nr__7973 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__7973);
var cnt_1__7975 = (this__7971.cnt - 1);
if((function (){var and__3822__auto____7976 = (5 < this__7971.shift);
if(and__3822__auto____7976)
{return (cljs.core.pv_aget(new_root__7974,1) == null);
} else
{return and__3822__auto____7976;
}
})())
{return (new cljs.core.PersistentVector(this__7971.meta,cnt_1__7975,(this__7971.shift - 5),cljs.core.pv_aget(new_root__7974,0),new_tail__7972,null));
} else
{return (new cljs.core.PersistentVector(this__7971.meta,cnt_1__7975,this__7971.shift,new_root__7974,new_tail__7972,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7977 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7978 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7979 = this;
return (new cljs.core.PersistentVector(meta,this__7979.cnt,this__7979.shift,this__7979.root,this__7979.tail,this__7979.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7980 = this;
return this__7980.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7981 = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7982 = this;
if((function (){var and__3822__auto____7983 = (0 <= n);
if(and__3822__auto____7983)
{return (n < this__7982.cnt);
} else
{return and__3822__auto____7983;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7984 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__7984.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node(null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__7989 = xs.length;
var xs__7990 = (((no_clone === true))?xs:xs.slice());
if((l__7989 < 32))
{return (new cljs.core.PersistentVector(null,l__7989,5,cljs.core.PersistentVector.EMPTY_NODE,xs__7990,null));
} else
{var node__7991 = xs__7990.slice(0,32);
var v__7992 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__7991,null));
var i__7993 = 32;
var out__7994 = cljs.core._as_transient(v__7992);
while(true){
if((i__7993 < l__7989))
{{
var G__7995 = (i__7993 + 1);
var G__7996 = cljs.core.conj_BANG_(out__7994,(xs__7990[i__7993]));
i__7993 = G__7995;
out__7994 = G__7996;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__7994);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7997){
var args = cljs.core.seq(arglist__7997);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7998 = this;
var h__1819__auto____7999 = this__7998.__hash;
if(!((h__1819__auto____7999 == null)))
{return h__1819__auto____7999;
} else
{var h__1819__auto____8000 = cljs.core.hash_coll(coll);
this__7998.__hash = h__1819__auto____8000;
return h__1819__auto____8000;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8001 = this;
if(((this__8001.off + 1) < this__8001.node.length))
{var s__8002 = cljs.core.chunked_seq.cljs$lang$arity$4(this__8001.vec,this__8001.node,this__8001.i,(this__8001.off + 1));
if((s__8002 == null))
{return null;
} else
{return s__8002;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8003 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8004 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8005 = this;
return (this__8005.node[this__8005.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8006 = this;
if(((this__8006.off + 1) < this__8006.node.length))
{var s__8007 = cljs.core.chunked_seq.cljs$lang$arity$4(this__8006.vec,this__8006.node,this__8006.i,(this__8006.off + 1));
if((s__8007 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8007;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8008 = this;
var l__8009 = this__8008.node.length;
var s__8010 = ((((this__8008.i + l__8009) < cljs.core._count(this__8008.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__8008.vec,(this__8008.i + l__8009),0):null);
if((s__8010 == null))
{return null;
} else
{return s__8010;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8011 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8012 = this;
return cljs.core.chunked_seq.cljs$lang$arity$5(this__8012.vec,this__8012.node,this__8012.i,this__8012.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8013 = this;
return this__8013.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8014 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__8014.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8015 = this;
return cljs.core.array_chunk.cljs$lang$arity$2(this__8015.node,this__8015.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8016 = this;
var l__8017 = this__8016.node.length;
var s__8018 = ((((this__8016.i + l__8017) < cljs.core._count(this__8016.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__8016.vec,(this__8016.i + l__8017),0):null);
if((s__8018 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8018;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.cljs$lang$arity$5(vec,cljs.core.array_for(vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.cljs$lang$arity$5(vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8021 = this;
var h__1819__auto____8022 = this__8021.__hash;
if(!((h__1819__auto____8022 == null)))
{return h__1819__auto____8022;
} else
{var h__1819__auto____8023 = cljs.core.hash_coll(coll);
this__8021.__hash = h__1819__auto____8023;
return h__1819__auto____8023;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8024 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8025 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8026 = this;
var v_pos__8027 = (this__8026.start + key);
return (new cljs.core.Subvec(this__8026.meta,cljs.core._assoc(this__8026.v,v_pos__8027,val),this__8026.start,((this__8026.end > (v_pos__8027 + 1)) ? this__8026.end : (v_pos__8027 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8053 = null;
var G__8053__2 = (function (this_sym8028,k){
var this__8030 = this;
var this_sym8028__8031 = this;
var coll__8032 = this_sym8028__8031;
return coll__8032.cljs$core$ILookup$_lookup$arity$2(coll__8032,k);
});
var G__8053__3 = (function (this_sym8029,k,not_found){
var this__8030 = this;
var this_sym8029__8033 = this;
var coll__8034 = this_sym8029__8033;
return coll__8034.cljs$core$ILookup$_lookup$arity$3(coll__8034,k,not_found);
});
G__8053 = function(this_sym8029,k,not_found){
switch(arguments.length){
case 2:
return G__8053__2.call(this,this_sym8029,k);
case 3:
return G__8053__3.call(this,this_sym8029,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8053;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8019,args8020){
var this__8035 = this;
return this_sym8019.call.apply(this_sym8019,[this_sym8019].concat(args8020.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8036 = this;
return (new cljs.core.Subvec(this__8036.meta,cljs.core._assoc_n(this__8036.v,this__8036.end,o),this__8036.start,(this__8036.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8037 = this;
var this__8038 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8038], 0));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8039 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8040 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8041 = this;
var subvec_seq__8042 = (function subvec_seq(i){
if((i === this__8041.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$lang$arity$2(this__8041.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq((i + 1));
}),null)));
}
});
return (subvec_seq__8042.cljs$lang$arity$1 ? subvec_seq__8042.cljs$lang$arity$1(this__8041.start) : subvec_seq__8042.call(null,this__8041.start));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8043 = this;
return (this__8043.end - this__8043.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8044 = this;
return cljs.core._nth.cljs$lang$arity$2(this__8044.v,(this__8044.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8045 = this;
if((this__8045.start === this__8045.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8045.meta,this__8045.v,this__8045.start,(this__8045.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8046 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8047 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8048 = this;
return (new cljs.core.Subvec(meta,this__8048.v,this__8048.start,this__8048.end,this__8048.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8049 = this;
return this__8049.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8050 = this;
return cljs.core._nth.cljs$lang$arity$2(this__8050.v,(this__8050.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8051 = this;
return cljs.core._nth.cljs$lang$arity$3(this__8051.v,(this__8051.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8052 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__8052.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$lang$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8055 = cljs.core.make_array.cljs$lang$arity$1(32);
cljs.core.array_copy(tl,0,ret__8055,0,tl.length);
return ret__8055;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8059 = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx__8060 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset(ret__8059,subidx__8060,(((level === 5))?tail_node:(function (){var child__8061 = cljs.core.pv_aget(ret__8059,subidx__8060);
if(!((child__8061 == null)))
{return tv_push_tail(tv,(level - 5),child__8061,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8059;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8066 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx__8067 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8068 = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__8066,subidx__8067));
if((function (){var and__3822__auto____8069 = (new_child__8068 == null);
if(and__3822__auto____8069)
{return (subidx__8067 === 0);
} else
{return and__3822__auto____8069;
}
})())
{return null;
} else
{cljs.core.pv_aset(node__8066,subidx__8067,new_child__8068);
return node__8066;
}
} else
{if((subidx__8067 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset(node__8066,subidx__8067,null);
return node__8066;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8074 = (0 <= i);
if(and__3822__auto____8074)
{return (i < tv.cnt);
} else
{return and__3822__auto____8074;
}
})())
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root__8075 = tv.root;
var node__8076 = root__8075;
var level__8077 = tv.shift;
while(true){
if((level__8077 > 0))
{{
var G__8078 = cljs.core.tv_ensure_editable(root__8075.edit,cljs.core.pv_aget(node__8076,((i >>> level__8077) & 31)));
var G__8079 = (level__8077 - 5);
node__8076 = G__8078;
level__8077 = G__8079;
continue;
}
} else
{return node__8076.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8119 = null;
var G__8119__2 = (function (this_sym8082,k){
var this__8084 = this;
var this_sym8082__8085 = this;
var coll__8086 = this_sym8082__8085;
return coll__8086.cljs$core$ILookup$_lookup$arity$2(coll__8086,k);
});
var G__8119__3 = (function (this_sym8083,k,not_found){
var this__8084 = this;
var this_sym8083__8087 = this;
var coll__8088 = this_sym8083__8087;
return coll__8088.cljs$core$ILookup$_lookup$arity$3(coll__8088,k,not_found);
});
G__8119 = function(this_sym8083,k,not_found){
switch(arguments.length){
case 2:
return G__8119__2.call(this,this_sym8083,k);
case 3:
return G__8119__3.call(this,this_sym8083,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8119;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8080,args8081){
var this__8089 = this;
return this_sym8080.call.apply(this_sym8080,[this_sym8080].concat(args8081.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8090 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8091 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8092 = this;
if(this__8092.root.edit)
{return (cljs.core.array_for(coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8093 = this;
if((function (){var and__3822__auto____8094 = (0 <= n);
if(and__3822__auto____8094)
{return (n < this__8093.cnt);
} else
{return and__3822__auto____8094;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8095 = this;
if(this__8095.root.edit)
{return this__8095.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8096 = this;
if(this__8096.root.edit)
{if((function (){var and__3822__auto____8097 = (0 <= n);
if(and__3822__auto____8097)
{return (n < this__8096.cnt);
} else
{return and__3822__auto____8097;
}
})())
{if((cljs.core.tail_off(tcoll) <= n))
{(this__8096.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8102 = (function go(level,node){
var node__8100 = cljs.core.tv_ensure_editable(this__8096.root.edit,node);
if((level === 0))
{cljs.core.pv_aset(node__8100,(n & 31),val);
return node__8100;
} else
{var subidx__8101 = ((n >>> level) & 31);
cljs.core.pv_aset(node__8100,subidx__8101,go((level - 5),cljs.core.pv_aget(node__8100,subidx__8101)));
return node__8100;
}
}).call(null,this__8096.shift,this__8096.root);
this__8096.root = new_root__8102;
return tcoll;
}
} else
{if((n === this__8096.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8096.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8103 = this;
if(this__8103.root.edit)
{if((this__8103.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8103.cnt))
{this__8103.cnt = 0;
return tcoll;
} else
{if((((this__8103.cnt - 1) & 31) > 0))
{this__8103.cnt = (this__8103.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8104 = cljs.core.editable_array_for(tcoll,(this__8103.cnt - 2));
var new_root__8106 = (function (){var nr__8105 = cljs.core.tv_pop_tail(tcoll,this__8103.shift,this__8103.root);
if(!((nr__8105 == null)))
{return nr__8105;
} else
{return (new cljs.core.VectorNode(this__8103.root.edit,cljs.core.make_array.cljs$lang$arity$1(32)));
}
})();
if((function (){var and__3822__auto____8107 = (5 < this__8103.shift);
if(and__3822__auto____8107)
{return (cljs.core.pv_aget(new_root__8106,1) == null);
} else
{return and__3822__auto____8107;
}
})())
{var new_root__8108 = cljs.core.tv_ensure_editable(this__8103.root.edit,cljs.core.pv_aget(new_root__8106,0));
this__8103.root = new_root__8108;
this__8103.shift = (this__8103.shift - 5);
this__8103.cnt = (this__8103.cnt - 1);
this__8103.tail = new_tail__8104;
return tcoll;
} else
{this__8103.root = new_root__8106;
this__8103.cnt = (this__8103.cnt - 1);
this__8103.tail = new_tail__8104;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8109 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8110 = this;
if(this__8110.root.edit)
{if(((this__8110.cnt - cljs.core.tail_off(tcoll)) < 32))
{(this__8110.tail[(this__8110.cnt & 31)] = o);
this__8110.cnt = (this__8110.cnt + 1);
return tcoll;
} else
{var tail_node__8111 = (new cljs.core.VectorNode(this__8110.root.edit,this__8110.tail));
var new_tail__8112 = cljs.core.make_array.cljs$lang$arity$1(32);
(new_tail__8112[0] = o);
this__8110.tail = new_tail__8112;
if(((this__8110.cnt >>> 5) > (1 << this__8110.shift)))
{var new_root_array__8113 = cljs.core.make_array.cljs$lang$arity$1(32);
var new_shift__8114 = (this__8110.shift + 5);
(new_root_array__8113[0] = this__8110.root);
(new_root_array__8113[1] = cljs.core.new_path(this__8110.root.edit,this__8110.shift,tail_node__8111));
this__8110.root = (new cljs.core.VectorNode(this__8110.root.edit,new_root_array__8113));
this__8110.shift = new_shift__8114;
this__8110.cnt = (this__8110.cnt + 1);
return tcoll;
} else
{var new_root__8115 = cljs.core.tv_push_tail(tcoll,this__8110.shift,this__8110.root,tail_node__8111);
this__8110.root = new_root__8115;
this__8110.cnt = (this__8110.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8116 = this;
if(this__8116.root.edit)
{this__8116.root.edit = null;
var len__8117 = (this__8116.cnt - cljs.core.tail_off(tcoll));
var trimmed_tail__8118 = cljs.core.make_array.cljs$lang$arity$1(len__8117);
cljs.core.array_copy(this__8116.tail,0,trimmed_tail__8118,0,len__8117);
return (new cljs.core.PersistentVector(null,this__8116.cnt,this__8116.shift,this__8116.root,trimmed_tail__8118,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8120 = this;
var h__1819__auto____8121 = this__8120.__hash;
if(!((h__1819__auto____8121 == null)))
{return h__1819__auto____8121;
} else
{var h__1819__auto____8122 = cljs.core.hash_coll(coll);
this__8120.__hash = h__1819__auto____8122;
return h__1819__auto____8122;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8123 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8124 = this;
var this__8125 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8125], 0));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8126 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8127 = this;
return cljs.core._first(this__8127.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8128 = this;
var temp__3971__auto____8129 = cljs.core.next(this__8128.front);
if(temp__3971__auto____8129)
{var f1__8130 = temp__3971__auto____8129;
return (new cljs.core.PersistentQueueSeq(this__8128.meta,f1__8130,this__8128.rear,null));
} else
{if((this__8128.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8128.meta,this__8128.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8131 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8132 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8132.front,this__8132.rear,this__8132.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8133 = this;
return this__8133.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8134 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__8134.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8135 = this;
var h__1819__auto____8136 = this__8135.__hash;
if(!((h__1819__auto____8136 == null)))
{return h__1819__auto____8136;
} else
{var h__1819__auto____8137 = cljs.core.hash_coll(coll);
this__8135.__hash = h__1819__auto____8137;
return h__1819__auto____8137;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8138 = this;
if(cljs.core.truth_(this__8138.front))
{return (new cljs.core.PersistentQueue(this__8138.meta,(this__8138.count + 1),this__8138.front,cljs.core.conj.cljs$lang$arity$2((function (){var or__3824__auto____8139 = this__8138.rear;
if(cljs.core.truth_(or__3824__auto____8139))
{return or__3824__auto____8139;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8138.meta,(this__8138.count + 1),cljs.core.conj.cljs$lang$arity$2(this__8138.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8140 = this;
var this__8141 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8141], 0));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8142 = this;
var rear__8143 = cljs.core.seq(this__8142.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8144 = this__8142.front;
if(cljs.core.truth_(or__3824__auto____8144))
{return or__3824__auto____8144;
} else
{return rear__8143;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8142.front,cljs.core.seq(rear__8143),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8145 = this;
return this__8145.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8146 = this;
return cljs.core._first(this__8146.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8147 = this;
if(cljs.core.truth_(this__8147.front))
{var temp__3971__auto____8148 = cljs.core.next(this__8147.front);
if(temp__3971__auto____8148)
{var f1__8149 = temp__3971__auto____8148;
return (new cljs.core.PersistentQueue(this__8147.meta,(this__8147.count - 1),f1__8149,this__8147.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8147.meta,(this__8147.count - 1),cljs.core.seq(this__8147.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8150 = this;
return cljs.core.first(this__8150.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8151 = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8152 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8153 = this;
return (new cljs.core.PersistentQueue(meta,this__8153.count,this__8153.front,this__8153.rear,this__8153.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8154 = this;
return this__8154.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8155 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8156 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$lang$arity$2((function (xkv){
return cljs.core._EQ_.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8159 = array.length;
var i__8160 = 0;
while(true){
if((i__8160 < len__8159))
{if((k === (array[i__8160])))
{return i__8160;
} else
{{
var G__8161 = (i__8160 + incr);
i__8160 = G__8161;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8164 = cljs.core.hash.cljs$lang$arity$1(a);
var b__8165 = cljs.core.hash.cljs$lang$arity$1(b);
if((a__8164 < b__8165))
{return -1;
} else
{if((a__8164 > b__8165))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8173 = m.keys;
var len__8174 = ks__8173.length;
var so__8175 = m.strobj;
var out__8176 = cljs.core.with_meta(cljs.core.PersistentHashMap.EMPTY,cljs.core.meta(m));
var i__8177 = 0;
var out__8178 = cljs.core.transient$(out__8176);
while(true){
if((i__8177 < len__8174))
{var k__8179 = (ks__8173[i__8177]);
{
var G__8180 = (i__8177 + 1);
var G__8181 = cljs.core.assoc_BANG_(out__8178,k__8179,(so__8175[k__8179]));
i__8177 = G__8180;
out__8178 = G__8181;
continue;
}
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out__8178,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8187 = {};
var l__8188 = ks.length;
var i__8189 = 0;
while(true){
if((i__8189 < l__8188))
{var k__8190 = (ks[i__8189]);
(new_obj__8187[k__8190] = (obj[k__8190]));
{
var G__8191 = (i__8189 + 1);
i__8189 = G__8191;
continue;
}
} else
{}
break;
}
return new_obj__8187;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8194 = this;
return cljs.core.transient$(cljs.core.into(cljs.core.hash_map(),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8195 = this;
var h__1819__auto____8196 = this__8195.__hash;
if(!((h__1819__auto____8196 == null)))
{return h__1819__auto____8196;
} else
{var h__1819__auto____8197 = cljs.core.hash_imap(coll);
this__8195.__hash = h__1819__auto____8197;
return h__1819__auto____8197;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8198 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8199 = this;
if((function (){var and__3822__auto____8200 = goog.isString(k);
if(and__3822__auto____8200)
{return !((cljs.core.scan_array(1,k,this__8199.keys) == null));
} else
{return and__3822__auto____8200;
}
})())
{return (this__8199.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8201 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8202 = (this__8201.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8202)
{return or__3824__auto____8202;
} else
{return (this__8201.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
} else
{if(!((cljs.core.scan_array(1,k,this__8201.keys) == null)))
{var new_strobj__8203 = cljs.core.obj_clone(this__8201.strobj,this__8201.keys);
(new_strobj__8203[k] = v);
return (new cljs.core.ObjMap(this__8201.meta,this__8201.keys,new_strobj__8203,(this__8201.update_count + 1),null));
} else
{var new_strobj__8204 = cljs.core.obj_clone(this__8201.strobj,this__8201.keys);
var new_keys__8205 = this__8201.keys.slice();
(new_strobj__8204[k] = v);
new_keys__8205.push(k);
return (new cljs.core.ObjMap(this__8201.meta,new_keys__8205,new_strobj__8204,(this__8201.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8206 = this;
if((function (){var and__3822__auto____8207 = goog.isString(k);
if(and__3822__auto____8207)
{return !((cljs.core.scan_array(1,k,this__8206.keys) == null));
} else
{return and__3822__auto____8207;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8229 = null;
var G__8229__2 = (function (this_sym8208,k){
var this__8210 = this;
var this_sym8208__8211 = this;
var coll__8212 = this_sym8208__8211;
return coll__8212.cljs$core$ILookup$_lookup$arity$2(coll__8212,k);
});
var G__8229__3 = (function (this_sym8209,k,not_found){
var this__8210 = this;
var this_sym8209__8213 = this;
var coll__8214 = this_sym8209__8213;
return coll__8214.cljs$core$ILookup$_lookup$arity$3(coll__8214,k,not_found);
});
G__8229 = function(this_sym8209,k,not_found){
switch(arguments.length){
case 2:
return G__8229__2.call(this,this_sym8209,k);
case 3:
return G__8229__3.call(this,this_sym8209,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8229;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8192,args8193){
var this__8215 = this;
return this_sym8192.call.apply(this_sym8192,[this_sym8192].concat(args8193.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8216 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8217 = this;
var this__8218 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8218], 0));
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8219 = this;
if((this__8219.keys.length > 0))
{return cljs.core.map.cljs$lang$arity$2((function (p1__8182_SHARP_){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([p1__8182_SHARP_,(this__8219.strobj[p1__8182_SHARP_])], 0));
}),this__8219.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8220 = this;
return this__8220.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8221 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8222 = this;
return (new cljs.core.ObjMap(meta,this__8222.keys,this__8222.strobj,this__8222.update_count,this__8222.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8223 = this;
return this__8223.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8224 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,this__8224.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8225 = this;
if((function (){var and__3822__auto____8226 = goog.isString(k);
if(and__3822__auto____8226)
{return !((cljs.core.scan_array(1,k,this__8225.keys) == null));
} else
{return and__3822__auto____8226;
}
})())
{var new_keys__8227 = this__8225.keys.slice();
var new_strobj__8228 = cljs.core.obj_clone(this__8225.strobj,this__8225.keys);
new_keys__8227.splice(cljs.core.scan_array(1,k,new_keys__8227),1);
cljs.core.js_delete(new_strobj__8228,k);
return (new cljs.core.ObjMap(this__8225.meta,new_keys__8227,new_strobj__8228,(this__8225.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8233 = this;
var h__1819__auto____8234 = this__8233.__hash;
if(!((h__1819__auto____8234 == null)))
{return h__1819__auto____8234;
} else
{var h__1819__auto____8235 = cljs.core.hash_imap(coll);
this__8233.__hash = h__1819__auto____8235;
return h__1819__auto____8235;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8236 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8237 = this;
var bucket__8238 = (this__8237.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__8239 = (cljs.core.truth_(bucket__8238)?cljs.core.scan_array(2,k,bucket__8238):null);
if(cljs.core.truth_(i__8239))
{return (bucket__8238[(i__8239 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8240 = this;
var h__8241 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__8242 = (this__8240.hashobj[h__8241]);
if(cljs.core.truth_(bucket__8242))
{var new_bucket__8243 = bucket__8242.slice();
var new_hashobj__8244 = goog.object.clone(this__8240.hashobj);
(new_hashobj__8244[h__8241] = new_bucket__8243);
var temp__3971__auto____8245 = cljs.core.scan_array(2,k,new_bucket__8243);
if(cljs.core.truth_(temp__3971__auto____8245))
{var i__8246 = temp__3971__auto____8245;
(new_bucket__8243[(i__8246 + 1)] = v);
return (new cljs.core.HashMap(this__8240.meta,this__8240.count,new_hashobj__8244,null));
} else
{new_bucket__8243.push(k,v);
return (new cljs.core.HashMap(this__8240.meta,(this__8240.count + 1),new_hashobj__8244,null));
}
} else
{var new_hashobj__8247 = goog.object.clone(this__8240.hashobj);
(new_hashobj__8247[h__8241] = [k,v]);
return (new cljs.core.HashMap(this__8240.meta,(this__8240.count + 1),new_hashobj__8247,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8248 = this;
var bucket__8249 = (this__8248.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__8250 = (cljs.core.truth_(bucket__8249)?cljs.core.scan_array(2,k,bucket__8249):null);
if(cljs.core.truth_(i__8250))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8275 = null;
var G__8275__2 = (function (this_sym8251,k){
var this__8253 = this;
var this_sym8251__8254 = this;
var coll__8255 = this_sym8251__8254;
return coll__8255.cljs$core$ILookup$_lookup$arity$2(coll__8255,k);
});
var G__8275__3 = (function (this_sym8252,k,not_found){
var this__8253 = this;
var this_sym8252__8256 = this;
var coll__8257 = this_sym8252__8256;
return coll__8257.cljs$core$ILookup$_lookup$arity$3(coll__8257,k,not_found);
});
G__8275 = function(this_sym8252,k,not_found){
switch(arguments.length){
case 2:
return G__8275__2.call(this,this_sym8252,k);
case 3:
return G__8275__3.call(this,this_sym8252,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8275;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8231,args8232){
var this__8258 = this;
return this_sym8231.call.apply(this_sym8231,[this_sym8231].concat(args8232.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8259 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8260 = this;
var this__8261 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8261], 0));
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8262 = this;
if((this__8262.count > 0))
{var hashes__8263 = cljs.core.js_keys(this__8262.hashobj).sort();
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__8230_SHARP_){
return cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.partition.cljs$lang$arity$2(2,(this__8262.hashobj[p1__8230_SHARP_])));
}),hashes__8263);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8264 = this;
return this__8264.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8265 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8266 = this;
return (new cljs.core.HashMap(meta,this__8266.count,this__8266.hashobj,this__8266.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8267 = this;
return this__8267.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8268 = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,this__8268.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8269 = this;
var h__8270 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__8271 = (this__8269.hashobj[h__8270]);
var i__8272 = (cljs.core.truth_(bucket__8271)?cljs.core.scan_array(2,k,bucket__8271):null);
if(cljs.core.not(i__8272))
{return coll;
} else
{var new_hashobj__8273 = goog.object.clone(this__8269.hashobj);
if((3 > bucket__8271.length))
{cljs.core.js_delete(new_hashobj__8273,h__8270);
} else
{var new_bucket__8274 = bucket__8271.slice();
new_bucket__8274.splice(i__8272,2);
(new_hashobj__8273[h__8270] = new_bucket__8274);
}
return (new cljs.core.HashMap(this__8269.meta,(this__8269.count - 1),new_hashobj__8273,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8276 = ks.length;
var i__8277 = 0;
var out__8278 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8277 < len__8276))
{{
var G__8279 = (i__8277 + 1);
var G__8280 = cljs.core.assoc.cljs$lang$arity$3(out__8278,(ks[i__8277]),(vs[i__8277]));
i__8277 = G__8279;
out__8278 = G__8280;
continue;
}
} else
{return out__8278;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8284 = m.arr;
var len__8285 = arr__8284.length;
var i__8286 = 0;
while(true){
if((len__8285 <= i__8286))
{return -1;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((arr__8284[i__8286]),k))
{return i__8286;
} else
{if("\uFDD0'else")
{{
var G__8287 = (i__8286 + 2);
i__8286 = G__8287;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8290 = this;
return (new cljs.core.TransientArrayMap({},this__8290.arr.length,this__8290.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8291 = this;
var h__1819__auto____8292 = this__8291.__hash;
if(!((h__1819__auto____8292 == null)))
{return h__1819__auto____8292;
} else
{var h__1819__auto____8293 = cljs.core.hash_imap(coll);
this__8291.__hash = h__1819__auto____8293;
return h__1819__auto____8293;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8294 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8295 = this;
var idx__8296 = cljs.core.array_map_index_of(coll,k);
if((idx__8296 === -1))
{return not_found;
} else
{return (this__8295.arr[(idx__8296 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8297 = this;
var idx__8298 = cljs.core.array_map_index_of(coll,k);
if((idx__8298 === -1))
{if((this__8297.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8297.meta,(this__8297.cnt + 1),(function (){var G__8299__8300 = this__8297.arr.slice();
G__8299__8300.push(k);
G__8299__8300.push(v);
return G__8299__8300;
})(),null));
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(cljs.core.transient$(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8297.arr[(idx__8298 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8297.meta,this__8297.cnt,(function (){var G__8301__8302 = this__8297.arr.slice();
(G__8301__8302[(idx__8298 + 1)] = v);
return G__8301__8302;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8303 = this;
return !((cljs.core.array_map_index_of(coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8335 = null;
var G__8335__2 = (function (this_sym8304,k){
var this__8306 = this;
var this_sym8304__8307 = this;
var coll__8308 = this_sym8304__8307;
return coll__8308.cljs$core$ILookup$_lookup$arity$2(coll__8308,k);
});
var G__8335__3 = (function (this_sym8305,k,not_found){
var this__8306 = this;
var this_sym8305__8309 = this;
var coll__8310 = this_sym8305__8309;
return coll__8310.cljs$core$ILookup$_lookup$arity$3(coll__8310,k,not_found);
});
G__8335 = function(this_sym8305,k,not_found){
switch(arguments.length){
case 2:
return G__8335__2.call(this,this_sym8305,k);
case 3:
return G__8335__3.call(this,this_sym8305,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8335;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8288,args8289){
var this__8311 = this;
return this_sym8288.call.apply(this_sym8288,[this_sym8288].concat(args8289.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8312 = this;
var len__8313 = this__8312.arr.length;
var i__8314 = 0;
var init__8315 = init;
while(true){
if((i__8314 < len__8313))
{var init__8316 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__8315,(this__8312.arr[i__8314]),(this__8312.arr[(i__8314 + 1)])) : f.call(null,init__8315,(this__8312.arr[i__8314]),(this__8312.arr[(i__8314 + 1)])));
if(cljs.core.reduced_QMARK_(init__8316))
{return cljs.core.deref(init__8316);
} else
{{
var G__8336 = (i__8314 + 2);
var G__8337 = init__8316;
i__8314 = G__8336;
init__8315 = G__8337;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8317 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8318 = this;
var this__8319 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8319], 0));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8320 = this;
if((this__8320.cnt > 0))
{var len__8321 = this__8320.arr.length;
var array_map_seq__8322 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8321))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(this__8320.arr[i]),(this__8320.arr[(i + 1)])], true),array_map_seq((i + 2)));
} else
{return null;
}
}),null));
});
return (array_map_seq__8322.cljs$lang$arity$1 ? array_map_seq__8322.cljs$lang$arity$1(0) : array_map_seq__8322.call(null,0));
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8323 = this;
return this__8323.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8324 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8325 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8325.cnt,this__8325.arr,this__8325.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8326 = this;
return this__8326.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8327 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,this__8327.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8328 = this;
var idx__8329 = cljs.core.array_map_index_of(coll,k);
if((idx__8329 >= 0))
{var len__8330 = this__8328.arr.length;
var new_len__8331 = (len__8330 - 2);
if((new_len__8331 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8332 = cljs.core.make_array.cljs$lang$arity$1(new_len__8331);
var s__8333 = 0;
var d__8334 = 0;
while(true){
if((s__8333 >= len__8330))
{return (new cljs.core.PersistentArrayMap(this__8328.meta,(this__8328.cnt - 1),new_arr__8332,null));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(k,(this__8328.arr[s__8333])))
{{
var G__8338 = (s__8333 + 2);
var G__8339 = d__8334;
s__8333 = G__8338;
d__8334 = G__8339;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8332[d__8334] = (this__8328.arr[s__8333]));
(new_arr__8332[(d__8334 + 1)] = (this__8328.arr[(s__8333 + 1)]));
{
var G__8340 = (s__8333 + 2);
var G__8341 = (d__8334 + 2);
s__8333 = G__8340;
d__8334 = G__8341;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8342 = cljs.core.count(ks);
var i__8343 = 0;
var out__8344 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8343 < len__8342))
{{
var G__8345 = (i__8343 + 1);
var G__8346 = cljs.core.assoc_BANG_(out__8344,(ks[i__8343]),(vs[i__8343]));
i__8343 = G__8345;
out__8344 = G__8346;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__8344);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8347 = this;
if(cljs.core.truth_(this__8347.editable_QMARK_))
{var idx__8348 = cljs.core.array_map_index_of(tcoll,key);
if((idx__8348 >= 0))
{(this__8347.arr[idx__8348] = (this__8347.arr[(this__8347.len - 2)]));
(this__8347.arr[(idx__8348 + 1)] = (this__8347.arr[(this__8347.len - 1)]));
var G__8349__8350 = this__8347.arr;
G__8349__8350.pop();
G__8349__8350.pop();
G__8349__8350;
this__8347.len = (this__8347.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8351 = this;
if(cljs.core.truth_(this__8351.editable_QMARK_))
{var idx__8352 = cljs.core.array_map_index_of(tcoll,key);
if((idx__8352 === -1))
{if(((this__8351.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8351.len = (this__8351.len + 2);
this__8351.arr.push(key);
this__8351.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_(cljs.core.array__GT_transient_hash_map(this__8351.len,this__8351.arr),key,val);
}
} else
{if((val === (this__8351.arr[(idx__8352 + 1)])))
{return tcoll;
} else
{(this__8351.arr[(idx__8352 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8353 = this;
if(cljs.core.truth_(this__8353.editable_QMARK_))
{if((function (){var G__8354__8355 = o;
if(G__8354__8355)
{if((function (){var or__3824__auto____8356 = (G__8354__8355.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8356)
{return or__3824__auto____8356;
} else
{return G__8354__8355.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8354__8355.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__8354__8355);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__8354__8355);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key(o),cljs.core.val(o));
} else
{var es__8357 = cljs.core.seq(o);
var tcoll__8358 = tcoll;
while(true){
var temp__3971__auto____8359 = cljs.core.first(es__8357);
if(cljs.core.truth_(temp__3971__auto____8359))
{var e__8360 = temp__3971__auto____8359;
{
var G__8366 = cljs.core.next(es__8357);
var G__8367 = tcoll__8358.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8358,cljs.core.key(e__8360),cljs.core.val(e__8360));
es__8357 = G__8366;
tcoll__8358 = G__8367;
continue;
}
} else
{return tcoll__8358;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8361 = this;
if(cljs.core.truth_(this__8361.editable_QMARK_))
{this__8361.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(this__8361.len,2),this__8361.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8362 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8363 = this;
if(cljs.core.truth_(this__8363.editable_QMARK_))
{var idx__8364 = cljs.core.array_map_index_of(tcoll,k);
if((idx__8364 === -1))
{return not_found;
} else
{return (this__8363.arr[(idx__8364 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8365 = this;
if(cljs.core.truth_(this__8365.editable_QMARK_))
{return cljs.core.quot(this__8365.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8370 = cljs.core.transient$(cljs.core.ObjMap.EMPTY);
var i__8371 = 0;
while(true){
if((i__8371 < len))
{{
var G__8372 = cljs.core.assoc_BANG_(out__8370,(arr[i__8371]),(arr[(i__8371 + 1)]));
var G__8373 = (i__8371 + 2);
out__8370 = G__8372;
i__8371 = G__8373;
continue;
}
} else
{return out__8370;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__1937__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.cljs$lang$arity$2(key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8378__8379 = arr.slice();
(G__8378__8379[i] = a);
return G__8378__8379;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8380__8381 = arr.slice();
(G__8380__8381[i] = a);
(G__8380__8381[j] = b);
return G__8380__8381;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8383 = cljs.core.make_array.cljs$lang$arity$1((arr.length - 2));
cljs.core.array_copy(arr,0,new_arr__8383,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr__8383,(2 * i),(new_arr__8383.length - (2 * i)));
return new_arr__8383;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8386 = inode.ensure_editable(edit);
(editable__8386.arr[i] = a);
return editable__8386;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8387 = inode.ensure_editable(edit);
(editable__8387.arr[i] = a);
(editable__8387.arr[j] = b);
return editable__8387;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8394 = arr.length;
var i__8395 = 0;
var init__8396 = init;
while(true){
if((i__8395 < len__8394))
{var init__8399 = (function (){var k__8397 = (arr[i__8395]);
if(!((k__8397 == null)))
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__8396,k__8397,(arr[(i__8395 + 1)])) : f.call(null,init__8396,k__8397,(arr[(i__8395 + 1)])));
} else
{var node__8398 = (arr[(i__8395 + 1)]);
if(!((node__8398 == null)))
{return node__8398.kv_reduce(f,init__8396);
} else
{return init__8396;
}
}
})();
if(cljs.core.reduced_QMARK_(init__8399))
{return cljs.core.deref(init__8399);
} else
{{
var G__8400 = (i__8395 + 2);
var G__8401 = init__8399;
i__8395 = G__8400;
init__8396 = G__8401;
continue;
}
}
} else
{return init__8396;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8402 = this;
var inode__8403 = this;
if((this__8402.bitmap === bit))
{return null;
} else
{var editable__8404 = inode__8403.ensure_editable(e);
var earr__8405 = editable__8404.arr;
var len__8406 = earr__8405.length;
editable__8404.bitmap = (bit ^ editable__8404.bitmap);
cljs.core.array_copy(earr__8405,(2 * (i + 1)),earr__8405,(2 * i),(len__8406 - (2 * (i + 1))));
(earr__8405[(len__8406 - 2)] = null);
(earr__8405[(len__8406 - 1)] = null);
return editable__8404;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8407 = this;
var inode__8408 = this;
var bit__8409 = (1 << ((hash >>> shift) & 0x01f));
var idx__8410 = cljs.core.bitmap_indexed_node_index(this__8407.bitmap,bit__8409);
if(((this__8407.bitmap & bit__8409) === 0))
{var n__8411 = cljs.core.bit_count(this__8407.bitmap);
if(((2 * n__8411) < this__8407.arr.length))
{var editable__8412 = inode__8408.ensure_editable(edit);
var earr__8413 = editable__8412.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr__8413,(2 * idx__8410),earr__8413,(2 * (idx__8410 + 1)),(2 * (n__8411 - idx__8410)));
(earr__8413[(2 * idx__8410)] = key);
(earr__8413[((2 * idx__8410) + 1)] = val);
editable__8412.bitmap = (editable__8412.bitmap | bit__8409);
return editable__8412;
} else
{if((n__8411 >= 16))
{var nodes__8414 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__8415 = ((hash >>> shift) & 0x01f);
(nodes__8414[jdx__8415] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8416 = 0;
var j__8417 = 0;
while(true){
if((i__8416 < 32))
{if((((this__8407.bitmap >>> i__8416) & 1) === 0))
{{
var G__8470 = (i__8416 + 1);
var G__8471 = j__8417;
i__8416 = G__8470;
j__8417 = G__8471;
continue;
}
} else
{(nodes__8414[i__8416] = ((!(((this__8407.arr[j__8417]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.cljs$lang$arity$1((this__8407.arr[j__8417])),(this__8407.arr[j__8417]),(this__8407.arr[(j__8417 + 1)]),added_leaf_QMARK_):(this__8407.arr[(j__8417 + 1)])));
{
var G__8472 = (i__8416 + 1);
var G__8473 = (j__8417 + 2);
i__8416 = G__8472;
j__8417 = G__8473;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8411 + 1),nodes__8414));
} else
{if("\uFDD0'else")
{var new_arr__8418 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__8411 + 4)));
cljs.core.array_copy(this__8407.arr,0,new_arr__8418,0,(2 * idx__8410));
(new_arr__8418[(2 * idx__8410)] = key);
(new_arr__8418[((2 * idx__8410) + 1)] = val);
cljs.core.array_copy(this__8407.arr,(2 * idx__8410),new_arr__8418,(2 * (idx__8410 + 1)),(2 * (n__8411 - idx__8410)));
added_leaf_QMARK_.val = true;
var editable__8419 = inode__8408.ensure_editable(edit);
editable__8419.arr = new_arr__8418;
editable__8419.bitmap = (editable__8419.bitmap | bit__8409);
return editable__8419;
} else
{return null;
}
}
}
} else
{var key_or_nil__8420 = (this__8407.arr[(2 * idx__8410)]);
var val_or_node__8421 = (this__8407.arr[((2 * idx__8410) + 1)]);
if((key_or_nil__8420 == null))
{var n__8422 = val_or_node__8421.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8422 === val_or_node__8421))
{return inode__8408;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__8408,edit,((2 * idx__8410) + 1),n__8422);
}
} else
{if(cljs.core.key_test(key,key_or_nil__8420))
{if((val === val_or_node__8421))
{return inode__8408;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__8408,edit,((2 * idx__8410) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$lang$arity$6(inode__8408,edit,(2 * idx__8410),null,((2 * idx__8410) + 1),cljs.core.create_node.cljs$lang$arity$7(edit,(shift + 5),key_or_nil__8420,val_or_node__8421,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8423 = this;
var inode__8424 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__8423.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8425 = this;
var inode__8426 = this;
var bit__8427 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8425.bitmap & bit__8427) === 0))
{return inode__8426;
} else
{var idx__8428 = cljs.core.bitmap_indexed_node_index(this__8425.bitmap,bit__8427);
var key_or_nil__8429 = (this__8425.arr[(2 * idx__8428)]);
var val_or_node__8430 = (this__8425.arr[((2 * idx__8428) + 1)]);
if((key_or_nil__8429 == null))
{var n__8431 = val_or_node__8430.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8431 === val_or_node__8430))
{return inode__8426;
} else
{if(!((n__8431 == null)))
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__8426,edit,((2 * idx__8428) + 1),n__8431);
} else
{if((this__8425.bitmap === bit__8427))
{return null;
} else
{if("\uFDD0'else")
{return inode__8426.edit_and_remove_pair(edit,bit__8427,idx__8428);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__8429))
{(removed_leaf_QMARK_[0] = true);
return inode__8426.edit_and_remove_pair(edit,bit__8427,idx__8428);
} else
{if("\uFDD0'else")
{return inode__8426;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8432 = this;
var inode__8433 = this;
if((e === this__8432.edit))
{return inode__8433;
} else
{var n__8434 = cljs.core.bit_count(this__8432.bitmap);
var new_arr__8435 = cljs.core.make_array.cljs$lang$arity$1((((n__8434 < 0))?4:(2 * (n__8434 + 1))));
cljs.core.array_copy(this__8432.arr,0,new_arr__8435,0,(2 * n__8434));
return (new cljs.core.BitmapIndexedNode(e,this__8432.bitmap,new_arr__8435));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8436 = this;
var inode__8437 = this;
return cljs.core.inode_kv_reduce(this__8436.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8438 = this;
var inode__8439 = this;
var bit__8440 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8438.bitmap & bit__8440) === 0))
{return not_found;
} else
{var idx__8441 = cljs.core.bitmap_indexed_node_index(this__8438.bitmap,bit__8440);
var key_or_nil__8442 = (this__8438.arr[(2 * idx__8441)]);
var val_or_node__8443 = (this__8438.arr[((2 * idx__8441) + 1)]);
if((key_or_nil__8442 == null))
{return val_or_node__8443.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__8442))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8442,val_or_node__8443], true);
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
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8444 = this;
var inode__8445 = this;
var bit__8446 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8444.bitmap & bit__8446) === 0))
{return inode__8445;
} else
{var idx__8447 = cljs.core.bitmap_indexed_node_index(this__8444.bitmap,bit__8446);
var key_or_nil__8448 = (this__8444.arr[(2 * idx__8447)]);
var val_or_node__8449 = (this__8444.arr[((2 * idx__8447) + 1)]);
if((key_or_nil__8448 == null))
{var n__8450 = val_or_node__8449.inode_without((shift + 5),hash,key);
if((n__8450 === val_or_node__8449))
{return inode__8445;
} else
{if(!((n__8450 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8444.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__8444.arr,((2 * idx__8447) + 1),n__8450)));
} else
{if((this__8444.bitmap === bit__8446))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8444.bitmap ^ bit__8446),cljs.core.remove_pair(this__8444.arr,idx__8447)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__8448))
{return (new cljs.core.BitmapIndexedNode(null,(this__8444.bitmap ^ bit__8446),cljs.core.remove_pair(this__8444.arr,idx__8447)));
} else
{if("\uFDD0'else")
{return inode__8445;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8451 = this;
var inode__8452 = this;
var bit__8453 = (1 << ((hash >>> shift) & 0x01f));
var idx__8454 = cljs.core.bitmap_indexed_node_index(this__8451.bitmap,bit__8453);
if(((this__8451.bitmap & bit__8453) === 0))
{var n__8455 = cljs.core.bit_count(this__8451.bitmap);
if((n__8455 >= 16))
{var nodes__8456 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__8457 = ((hash >>> shift) & 0x01f);
(nodes__8456[jdx__8457] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8458 = 0;
var j__8459 = 0;
while(true){
if((i__8458 < 32))
{if((((this__8451.bitmap >>> i__8458) & 1) === 0))
{{
var G__8474 = (i__8458 + 1);
var G__8475 = j__8459;
i__8458 = G__8474;
j__8459 = G__8475;
continue;
}
} else
{(nodes__8456[i__8458] = ((!(((this__8451.arr[j__8459]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.cljs$lang$arity$1((this__8451.arr[j__8459])),(this__8451.arr[j__8459]),(this__8451.arr[(j__8459 + 1)]),added_leaf_QMARK_):(this__8451.arr[(j__8459 + 1)])));
{
var G__8476 = (i__8458 + 1);
var G__8477 = (j__8459 + 2);
i__8458 = G__8476;
j__8459 = G__8477;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8455 + 1),nodes__8456));
} else
{var new_arr__8460 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__8455 + 1)));
cljs.core.array_copy(this__8451.arr,0,new_arr__8460,0,(2 * idx__8454));
(new_arr__8460[(2 * idx__8454)] = key);
(new_arr__8460[((2 * idx__8454) + 1)] = val);
cljs.core.array_copy(this__8451.arr,(2 * idx__8454),new_arr__8460,(2 * (idx__8454 + 1)),(2 * (n__8455 - idx__8454)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8451.bitmap | bit__8453),new_arr__8460));
}
} else
{var key_or_nil__8461 = (this__8451.arr[(2 * idx__8454)]);
var val_or_node__8462 = (this__8451.arr[((2 * idx__8454) + 1)]);
if((key_or_nil__8461 == null))
{var n__8463 = val_or_node__8462.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8463 === val_or_node__8462))
{return inode__8452;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8451.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__8451.arr,((2 * idx__8454) + 1),n__8463)));
}
} else
{if(cljs.core.key_test(key,key_or_nil__8461))
{if((val === val_or_node__8462))
{return inode__8452;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8451.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__8451.arr,((2 * idx__8454) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8451.bitmap,cljs.core.clone_and_set.cljs$lang$arity$5(this__8451.arr,(2 * idx__8454),null,((2 * idx__8454) + 1),cljs.core.create_node.cljs$lang$arity$6((shift + 5),key_or_nil__8461,val_or_node__8462,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8464 = this;
var inode__8465 = this;
var bit__8466 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8464.bitmap & bit__8466) === 0))
{return not_found;
} else
{var idx__8467 = cljs.core.bitmap_indexed_node_index(this__8464.bitmap,bit__8466);
var key_or_nil__8468 = (this__8464.arr[(2 * idx__8467)]);
var val_or_node__8469 = (this__8464.arr[((2 * idx__8467) + 1)]);
if((key_or_nil__8468 == null))
{return val_or_node__8469.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__8468))
{return val_or_node__8469;
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
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.cljs$lang$arity$1(0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8485 = array_node.arr;
var len__8486 = (2 * (array_node.cnt - 1));
var new_arr__8487 = cljs.core.make_array.cljs$lang$arity$1(len__8486);
var i__8488 = 0;
var j__8489 = 1;
var bitmap__8490 = 0;
while(true){
if((i__8488 < len__8486))
{if((function (){var and__3822__auto____8491 = !((i__8488 === idx));
if(and__3822__auto____8491)
{return !(((arr__8485[i__8488]) == null));
} else
{return and__3822__auto____8491;
}
})())
{(new_arr__8487[j__8489] = (arr__8485[i__8488]));
{
var G__8492 = (i__8488 + 1);
var G__8493 = (j__8489 + 2);
var G__8494 = (bitmap__8490 | (1 << i__8488));
i__8488 = G__8492;
j__8489 = G__8493;
bitmap__8490 = G__8494;
continue;
}
} else
{{
var G__8495 = (i__8488 + 1);
var G__8496 = j__8489;
var G__8497 = bitmap__8490;
i__8488 = G__8495;
j__8489 = G__8496;
bitmap__8490 = G__8497;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8490,new_arr__8487));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8498 = this;
var inode__8499 = this;
var idx__8500 = ((hash >>> shift) & 0x01f);
var node__8501 = (this__8498.arr[idx__8500]);
if((node__8501 == null))
{var editable__8502 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__8499,edit,idx__8500,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8502.cnt = (editable__8502.cnt + 1);
return editable__8502;
} else
{var n__8503 = node__8501.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8503 === node__8501))
{return inode__8499;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__8499,edit,idx__8500,n__8503);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8504 = this;
var inode__8505 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$1(this__8504.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8506 = this;
var inode__8507 = this;
var idx__8508 = ((hash >>> shift) & 0x01f);
var node__8509 = (this__8506.arr[idx__8508]);
if((node__8509 == null))
{return inode__8507;
} else
{var n__8510 = node__8509.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8510 === node__8509))
{return inode__8507;
} else
{if((n__8510 == null))
{if((this__8506.cnt <= 8))
{return cljs.core.pack_array_node(inode__8507,edit,idx__8508);
} else
{var editable__8511 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__8507,edit,idx__8508,n__8510);
editable__8511.cnt = (editable__8511.cnt - 1);
return editable__8511;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__8507,edit,idx__8508,n__8510);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8512 = this;
var inode__8513 = this;
if((e === this__8512.edit))
{return inode__8513;
} else
{return (new cljs.core.ArrayNode(e,this__8512.cnt,this__8512.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8514 = this;
var inode__8515 = this;
var len__8516 = this__8514.arr.length;
var i__8517 = 0;
var init__8518 = init;
while(true){
if((i__8517 < len__8516))
{var node__8519 = (this__8514.arr[i__8517]);
if(!((node__8519 == null)))
{var init__8520 = node__8519.kv_reduce(f,init__8518);
if(cljs.core.reduced_QMARK_(init__8520))
{return cljs.core.deref(init__8520);
} else
{{
var G__8539 = (i__8517 + 1);
var G__8540 = init__8520;
i__8517 = G__8539;
init__8518 = G__8540;
continue;
}
}
} else
{return null;
}
} else
{return init__8518;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8521 = this;
var inode__8522 = this;
var idx__8523 = ((hash >>> shift) & 0x01f);
var node__8524 = (this__8521.arr[idx__8523]);
if(!((node__8524 == null)))
{return node__8524.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8525 = this;
var inode__8526 = this;
var idx__8527 = ((hash >>> shift) & 0x01f);
var node__8528 = (this__8525.arr[idx__8527]);
if(!((node__8528 == null)))
{var n__8529 = node__8528.inode_without((shift + 5),hash,key);
if((n__8529 === node__8528))
{return inode__8526;
} else
{if((n__8529 == null))
{if((this__8525.cnt <= 8))
{return cljs.core.pack_array_node(inode__8526,null,idx__8527);
} else
{return (new cljs.core.ArrayNode(null,(this__8525.cnt - 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__8525.arr,idx__8527,n__8529)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8525.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__8525.arr,idx__8527,n__8529)));
} else
{return null;
}
}
}
} else
{return inode__8526;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8530 = this;
var inode__8531 = this;
var idx__8532 = ((hash >>> shift) & 0x01f);
var node__8533 = (this__8530.arr[idx__8532]);
if((node__8533 == null))
{return (new cljs.core.ArrayNode(null,(this__8530.cnt + 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__8530.arr,idx__8532,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8534 = node__8533.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8534 === node__8533))
{return inode__8531;
} else
{return (new cljs.core.ArrayNode(null,this__8530.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__8530.arr,idx__8532,n__8534)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8535 = this;
var inode__8536 = this;
var idx__8537 = ((hash >>> shift) & 0x01f);
var node__8538 = (this__8535.arr[idx__8537]);
if(!((node__8538 == null)))
{return node__8538.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8543 = (2 * cnt);
var i__8544 = 0;
while(true){
if((i__8544 < lim__8543))
{if(cljs.core.key_test(key,(arr[i__8544])))
{return i__8544;
} else
{{
var G__8545 = (i__8544 + 2);
i__8544 = G__8545;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8546 = this;
var inode__8547 = this;
if((hash === this__8546.collision_hash))
{var idx__8548 = cljs.core.hash_collision_node_find_index(this__8546.arr,this__8546.cnt,key);
if((idx__8548 === -1))
{if((this__8546.arr.length > (2 * this__8546.cnt)))
{var editable__8549 = cljs.core.edit_and_set.cljs$lang$arity$6(inode__8547,edit,(2 * this__8546.cnt),key,((2 * this__8546.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8549.cnt = (editable__8549.cnt + 1);
return editable__8549;
} else
{var len__8550 = this__8546.arr.length;
var new_arr__8551 = cljs.core.make_array.cljs$lang$arity$1((len__8550 + 2));
cljs.core.array_copy(this__8546.arr,0,new_arr__8551,0,len__8550);
(new_arr__8551[len__8550] = key);
(new_arr__8551[(len__8550 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8547.ensure_editable_array(edit,(this__8546.cnt + 1),new_arr__8551);
}
} else
{if(((this__8546.arr[(idx__8548 + 1)]) === val))
{return inode__8547;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__8547,edit,(idx__8548 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8546.collision_hash >>> shift) & 0x01f)),[null,inode__8547,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8552 = this;
var inode__8553 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__8552.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8554 = this;
var inode__8555 = this;
var idx__8556 = cljs.core.hash_collision_node_find_index(this__8554.arr,this__8554.cnt,key);
if((idx__8556 === -1))
{return inode__8555;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8554.cnt === 1))
{return null;
} else
{var editable__8557 = inode__8555.ensure_editable(edit);
var earr__8558 = editable__8557.arr;
(earr__8558[idx__8556] = (earr__8558[((2 * this__8554.cnt) - 2)]));
(earr__8558[(idx__8556 + 1)] = (earr__8558[((2 * this__8554.cnt) - 1)]));
(earr__8558[((2 * this__8554.cnt) - 1)] = null);
(earr__8558[((2 * this__8554.cnt) - 2)] = null);
editable__8557.cnt = (editable__8557.cnt - 1);
return editable__8557;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8559 = this;
var inode__8560 = this;
if((e === this__8559.edit))
{return inode__8560;
} else
{var new_arr__8561 = cljs.core.make_array.cljs$lang$arity$1((2 * (this__8559.cnt + 1)));
cljs.core.array_copy(this__8559.arr,0,new_arr__8561,0,(2 * this__8559.cnt));
return (new cljs.core.HashCollisionNode(e,this__8559.collision_hash,this__8559.cnt,new_arr__8561));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8562 = this;
var inode__8563 = this;
return cljs.core.inode_kv_reduce(this__8562.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8564 = this;
var inode__8565 = this;
var idx__8566 = cljs.core.hash_collision_node_find_index(this__8564.arr,this__8564.cnt,key);
if((idx__8566 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__8564.arr[idx__8566])))
{return cljs.core.PersistentVector.fromArray([(this__8564.arr[idx__8566]),(this__8564.arr[(idx__8566 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8567 = this;
var inode__8568 = this;
var idx__8569 = cljs.core.hash_collision_node_find_index(this__8567.arr,this__8567.cnt,key);
if((idx__8569 === -1))
{return inode__8568;
} else
{if((this__8567.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8567.collision_hash,(this__8567.cnt - 1),cljs.core.remove_pair(this__8567.arr,cljs.core.quot(idx__8569,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8570 = this;
var inode__8571 = this;
if((hash === this__8570.collision_hash))
{var idx__8572 = cljs.core.hash_collision_node_find_index(this__8570.arr,this__8570.cnt,key);
if((idx__8572 === -1))
{var len__8573 = this__8570.arr.length;
var new_arr__8574 = cljs.core.make_array.cljs$lang$arity$1((len__8573 + 2));
cljs.core.array_copy(this__8570.arr,0,new_arr__8574,0,len__8573);
(new_arr__8574[len__8573] = key);
(new_arr__8574[(len__8573 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8570.collision_hash,(this__8570.cnt + 1),new_arr__8574));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((this__8570.arr[idx__8572]),val))
{return inode__8571;
} else
{return (new cljs.core.HashCollisionNode(null,this__8570.collision_hash,this__8570.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__8570.arr,(idx__8572 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8570.collision_hash >>> shift) & 0x01f)),[null,inode__8571])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8575 = this;
var inode__8576 = this;
var idx__8577 = cljs.core.hash_collision_node_find_index(this__8575.arr,this__8575.cnt,key);
if((idx__8577 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__8575.arr[idx__8577])))
{return (this__8575.arr[(idx__8577 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8578 = this;
var inode__8579 = this;
if((e === this__8578.edit))
{this__8578.arr = array;
this__8578.cnt = count;
return inode__8579;
} else
{return (new cljs.core.HashCollisionNode(this__8578.edit,this__8578.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8584 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__8584 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8584,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8585 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8584,key1,val1,added_leaf_QMARK___8585).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8585);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8586 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__8586 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8586,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8587 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8586,key1,val1,added_leaf_QMARK___8587).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8587);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8588 = this;
var h__1819__auto____8589 = this__8588.__hash;
if(!((h__1819__auto____8589 == null)))
{return h__1819__auto____8589;
} else
{var h__1819__auto____8590 = cljs.core.hash_coll(coll);
this__8588.__hash = h__1819__auto____8590;
return h__1819__auto____8590;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8591 = this;
return cljs.core.cons(o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8592 = this;
var this__8593 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8593], 0));
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8594 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8595 = this;
if((this__8595.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8595.nodes[this__8595.i]),(this__8595.nodes[(this__8595.i + 1)])], true);
} else
{return cljs.core.first(this__8595.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8596 = this;
if((this__8596.s == null))
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__8596.nodes,(this__8596.i + 2),null);
} else
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__8596.nodes,this__8596.i,cljs.core.next(this__8596.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8597 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8598 = this;
return (new cljs.core.NodeSeq(meta,this__8598.nodes,this__8598.i,this__8598.s,this__8598.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8599 = this;
return this__8599.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8600 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__8600.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$lang$arity$3(nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8607 = nodes.length;
var j__8608 = i;
while(true){
if((j__8608 < len__8607))
{if(!(((nodes[j__8608]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8608,null,null));
} else
{var temp__3971__auto____8609 = (nodes[(j__8608 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8609))
{var node__8610 = temp__3971__auto____8609;
var temp__3971__auto____8611 = node__8610.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8611))
{var node_seq__8612 = temp__3971__auto____8611;
return (new cljs.core.NodeSeq(null,nodes,(j__8608 + 2),node_seq__8612,null));
} else
{{
var G__8613 = (j__8608 + 2);
j__8608 = G__8613;
continue;
}
}
} else
{{
var G__8614 = (j__8608 + 2);
j__8608 = G__8614;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8615 = this;
var h__1819__auto____8616 = this__8615.__hash;
if(!((h__1819__auto____8616 == null)))
{return h__1819__auto____8616;
} else
{var h__1819__auto____8617 = cljs.core.hash_coll(coll);
this__8615.__hash = h__1819__auto____8617;
return h__1819__auto____8617;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8618 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8619 = this;
var this__8620 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8620], 0));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8621 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8622 = this;
return cljs.core.first(this__8622.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8623 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$4(null,this__8623.nodes,this__8623.i,cljs.core.next(this__8623.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8624 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8625 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8625.nodes,this__8625.i,this__8625.s,this__8625.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8626 = this;
return this__8626.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8627 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__8627.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$lang$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8634 = nodes.length;
var j__8635 = i;
while(true){
if((j__8635 < len__8634))
{var temp__3971__auto____8636 = (nodes[j__8635]);
if(cljs.core.truth_(temp__3971__auto____8636))
{var nj__8637 = temp__3971__auto____8636;
var temp__3971__auto____8638 = nj__8637.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8638))
{var ns__8639 = temp__3971__auto____8638;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8635 + 1),ns__8639,null));
} else
{{
var G__8640 = (j__8635 + 1);
j__8635 = G__8640;
continue;
}
}
} else
{{
var G__8641 = (j__8635 + 1);
j__8635 = G__8641;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8644 = this;
return (new cljs.core.TransientHashMap({},this__8644.root,this__8644.cnt,this__8644.has_nil_QMARK_,this__8644.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8645 = this;
var h__1819__auto____8646 = this__8645.__hash;
if(!((h__1819__auto____8646 == null)))
{return h__1819__auto____8646;
} else
{var h__1819__auto____8647 = cljs.core.hash_imap(coll);
this__8645.__hash = h__1819__auto____8647;
return h__1819__auto____8647;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8648 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8649 = this;
if((k == null))
{if(this__8649.has_nil_QMARK_)
{return this__8649.nil_val;
} else
{return not_found;
}
} else
{if((this__8649.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8649.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8650 = this;
if((k == null))
{if((function (){var and__3822__auto____8651 = this__8650.has_nil_QMARK_;
if(and__3822__auto____8651)
{return (v === this__8650.nil_val);
} else
{return and__3822__auto____8651;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8650.meta,((this__8650.has_nil_QMARK_)?this__8650.cnt:(this__8650.cnt + 1)),this__8650.root,true,v,null));
}
} else
{var added_leaf_QMARK___8652 = (new cljs.core.Box(false));
var new_root__8653 = (((this__8650.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8650.root).inode_assoc(0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___8652);
if((new_root__8653 === this__8650.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8650.meta,((added_leaf_QMARK___8652.val)?(this__8650.cnt + 1):this__8650.cnt),new_root__8653,this__8650.has_nil_QMARK_,this__8650.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8654 = this;
if((k == null))
{return this__8654.has_nil_QMARK_;
} else
{if((this__8654.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8654.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8677 = null;
var G__8677__2 = (function (this_sym8655,k){
var this__8657 = this;
var this_sym8655__8658 = this;
var coll__8659 = this_sym8655__8658;
return coll__8659.cljs$core$ILookup$_lookup$arity$2(coll__8659,k);
});
var G__8677__3 = (function (this_sym8656,k,not_found){
var this__8657 = this;
var this_sym8656__8660 = this;
var coll__8661 = this_sym8656__8660;
return coll__8661.cljs$core$ILookup$_lookup$arity$3(coll__8661,k,not_found);
});
G__8677 = function(this_sym8656,k,not_found){
switch(arguments.length){
case 2:
return G__8677__2.call(this,this_sym8656,k);
case 3:
return G__8677__3.call(this,this_sym8656,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8677;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8642,args8643){
var this__8662 = this;
return this_sym8642.call.apply(this_sym8642,[this_sym8642].concat(args8643.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8663 = this;
var init__8664 = ((this__8663.has_nil_QMARK_)?(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,null,this__8663.nil_val) : f.call(null,init,null,this__8663.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__8664))
{return cljs.core.deref(init__8664);
} else
{if(!((this__8663.root == null)))
{return this__8663.root.kv_reduce(f,init__8664);
} else
{if("\uFDD0'else")
{return init__8664;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8665 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8666 = this;
var this__8667 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8667], 0));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8668 = this;
if((this__8668.cnt > 0))
{var s__8669 = ((!((this__8668.root == null)))?this__8668.root.inode_seq():null);
if(this__8668.has_nil_QMARK_)
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([null,this__8668.nil_val], true),s__8669);
} else
{return s__8669;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8670 = this;
return this__8670.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8671 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8672 = this;
return (new cljs.core.PersistentHashMap(meta,this__8672.cnt,this__8672.root,this__8672.has_nil_QMARK_,this__8672.nil_val,this__8672.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8673 = this;
return this__8673.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8674 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,this__8674.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8675 = this;
if((k == null))
{if(this__8675.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8675.meta,(this__8675.cnt - 1),this__8675.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8675.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8676 = this__8675.root.inode_without(0,cljs.core.hash.cljs$lang$arity$1(k),k);
if((new_root__8676 === this__8675.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8675.meta,(this__8675.cnt - 1),new_root__8676,this__8675.has_nil_QMARK_,this__8675.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8678 = ks.length;
var i__8679 = 0;
var out__8680 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8679 < len__8678))
{{
var G__8681 = (i__8679 + 1);
var G__8682 = cljs.core.assoc_BANG_(out__8680,(ks[i__8679]),(vs[i__8679]));
i__8679 = G__8681;
out__8680 = G__8682;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__8680);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8683 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8684 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8685 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8686 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8687 = this;
if((k == null))
{if(this__8687.has_nil_QMARK_)
{return this__8687.nil_val;
} else
{return null;
}
} else
{if((this__8687.root == null))
{return null;
} else
{return this__8687.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8688 = this;
if((k == null))
{if(this__8688.has_nil_QMARK_)
{return this__8688.nil_val;
} else
{return not_found;
}
} else
{if((this__8688.root == null))
{return not_found;
} else
{return this__8688.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8689 = this;
if(this__8689.edit)
{return this__8689.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8690 = this;
var tcoll__8691 = this;
if(this__8690.edit)
{if((function (){var G__8692__8693 = o;
if(G__8692__8693)
{if((function (){var or__3824__auto____8694 = (G__8692__8693.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8694)
{return or__3824__auto____8694;
} else
{return G__8692__8693.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8692__8693.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__8692__8693);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__8692__8693);
}
})())
{return tcoll__8691.assoc_BANG_(cljs.core.key(o),cljs.core.val(o));
} else
{var es__8695 = cljs.core.seq(o);
var tcoll__8696 = tcoll__8691;
while(true){
var temp__3971__auto____8697 = cljs.core.first(es__8695);
if(cljs.core.truth_(temp__3971__auto____8697))
{var e__8698 = temp__3971__auto____8697;
{
var G__8709 = cljs.core.next(es__8695);
var G__8710 = tcoll__8696.assoc_BANG_(cljs.core.key(e__8698),cljs.core.val(e__8698));
es__8695 = G__8709;
tcoll__8696 = G__8710;
continue;
}
} else
{return tcoll__8696;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8699 = this;
var tcoll__8700 = this;
if(this__8699.edit)
{if((k == null))
{if((this__8699.nil_val === v))
{} else
{this__8699.nil_val = v;
}
if(this__8699.has_nil_QMARK_)
{} else
{this__8699.count = (this__8699.count + 1);
this__8699.has_nil_QMARK_ = true;
}
return tcoll__8700;
} else
{var added_leaf_QMARK___8701 = (new cljs.core.Box(false));
var node__8702 = (((this__8699.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8699.root).inode_assoc_BANG_(this__8699.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___8701);
if((node__8702 === this__8699.root))
{} else
{this__8699.root = node__8702;
}
if(added_leaf_QMARK___8701.val)
{this__8699.count = (this__8699.count + 1);
} else
{}
return tcoll__8700;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8703 = this;
var tcoll__8704 = this;
if(this__8703.edit)
{if((k == null))
{if(this__8703.has_nil_QMARK_)
{this__8703.has_nil_QMARK_ = false;
this__8703.nil_val = null;
this__8703.count = (this__8703.count - 1);
return tcoll__8704;
} else
{return tcoll__8704;
}
} else
{if((this__8703.root == null))
{return tcoll__8704;
} else
{var removed_leaf_QMARK___8705 = (new cljs.core.Box(false));
var node__8706 = this__8703.root.inode_without_BANG_(this__8703.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,removed_leaf_QMARK___8705);
if((node__8706 === this__8703.root))
{} else
{this__8703.root = node__8706;
}
if(cljs.core.truth_((removed_leaf_QMARK___8705[0])))
{this__8703.count = (this__8703.count - 1);
} else
{}
return tcoll__8704;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8707 = this;
var tcoll__8708 = this;
if(this__8707.edit)
{this__8707.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8707.count,this__8707.root,this__8707.has_nil_QMARK_,this__8707.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8713 = node;
var stack__8714 = stack;
while(true){
if(!((t__8713 == null)))
{{
var G__8715 = ((ascending_QMARK_)?t__8713.left:t__8713.right);
var G__8716 = cljs.core.conj.cljs$lang$arity$2(stack__8714,t__8713);
t__8713 = G__8715;
stack__8714 = G__8716;
continue;
}
} else
{return stack__8714;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8717 = this;
var h__1819__auto____8718 = this__8717.__hash;
if(!((h__1819__auto____8718 == null)))
{return h__1819__auto____8718;
} else
{var h__1819__auto____8719 = cljs.core.hash_coll(coll);
this__8717.__hash = h__1819__auto____8719;
return h__1819__auto____8719;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8720 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8721 = this;
var this__8722 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8722], 0));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8723 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8724 = this;
if((this__8724.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll)) + 1);
} else
{return this__8724.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8725 = this;
return cljs.core.peek(this__8725.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8726 = this;
var t__8727 = cljs.core.first(this__8726.stack);
var next_stack__8728 = cljs.core.tree_map_seq_push(((this__8726.ascending_QMARK_)?t__8727.right:t__8727.left),cljs.core.next(this__8726.stack),this__8726.ascending_QMARK_);
if(!((next_stack__8728 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8728,this__8726.ascending_QMARK_,(this__8726.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8729 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8730 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8730.stack,this__8730.ascending_QMARK_,this__8730.cnt,this__8730.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8731 = this;
return this__8731.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,right))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8733 = cljs.core.instance_QMARK_(cljs.core.RedNode,right);
if(and__3822__auto____8733)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8733;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,left))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8735 = cljs.core.instance_QMARK_(cljs.core.RedNode,left);
if(and__3822__auto____8735)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8735;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8739 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,node.key,node.val) : f.call(null,init,node.key,node.val));
if(cljs.core.reduced_QMARK_(init__8739))
{return cljs.core.deref(init__8739);
} else
{var init__8740 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init__8739):init__8739);
if(cljs.core.reduced_QMARK_(init__8740))
{return cljs.core.deref(init__8740);
} else
{var init__8741 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__8740):init__8740);
if(cljs.core.reduced_QMARK_(init__8741))
{return cljs.core.deref(init__8741);
} else
{return init__8741;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8744 = this;
var h__1819__auto____8745 = this__8744.__hash;
if(!((h__1819__auto____8745 == null)))
{return h__1819__auto____8745;
} else
{var h__1819__auto____8746 = cljs.core.hash_coll(coll);
this__8744.__hash = h__1819__auto____8746;
return h__1819__auto____8746;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8747 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8748 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8749 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__8749.key,this__8749.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8797 = null;
var G__8797__2 = (function (this_sym8750,k){
var this__8752 = this;
var this_sym8750__8753 = this;
var node__8754 = this_sym8750__8753;
return node__8754.cljs$core$ILookup$_lookup$arity$2(node__8754,k);
});
var G__8797__3 = (function (this_sym8751,k,not_found){
var this__8752 = this;
var this_sym8751__8755 = this;
var node__8756 = this_sym8751__8755;
return node__8756.cljs$core$ILookup$_lookup$arity$3(node__8756,k,not_found);
});
G__8797 = function(this_sym8751,k,not_found){
switch(arguments.length){
case 2:
return G__8797__2.call(this,this_sym8751,k);
case 3:
return G__8797__3.call(this,this_sym8751,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8797;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8742,args8743){
var this__8757 = this;
return this_sym8742.call.apply(this_sym8742,[this_sym8742].concat(args8743.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8758 = this;
return cljs.core.PersistentVector.fromArray([this__8758.key,this__8758.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8759 = this;
return this__8759.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8760 = this;
return this__8760.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8761 = this;
var node__8762 = this;
return ins.balance_right(node__8762);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8763 = this;
var node__8764 = this;
return (new cljs.core.RedNode(this__8763.key,this__8763.val,this__8763.left,this__8763.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8765 = this;
var node__8766 = this;
return cljs.core.balance_right_del(this__8765.key,this__8765.val,this__8765.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8767 = this;
var node__8768 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8769 = this;
var node__8770 = this;
return cljs.core.tree_map_kv_reduce(node__8770,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8771 = this;
var node__8772 = this;
return cljs.core.balance_left_del(this__8771.key,this__8771.val,del,this__8771.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8773 = this;
var node__8774 = this;
return ins.balance_left(node__8774);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8775 = this;
var node__8776 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8776,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8798 = null;
var G__8798__0 = (function (){
var this__8777 = this;
var this__8779 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8779], 0));
});
G__8798 = function(){
switch(arguments.length){
case 0:
return G__8798__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8798;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8780 = this;
var node__8781 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8781,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8782 = this;
var node__8783 = this;
return node__8783;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8784 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8785 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8786 = this;
return cljs.core.list.cljs$lang$arity$2(this__8786.key,this__8786.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8787 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8788 = this;
return this__8788.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8789 = this;
return cljs.core.PersistentVector.fromArray([this__8789.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8790 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__8790.key,this__8790.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8791 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8792 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__8792.key,this__8792.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8793 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8794 = this;
if((n === 0))
{return this__8794.key;
} else
{if((n === 1))
{return this__8794.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8795 = this;
if((n === 0))
{return this__8795.key;
} else
{if((n === 1))
{return this__8795.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8796 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8801 = this;
var h__1819__auto____8802 = this__8801.__hash;
if(!((h__1819__auto____8802 == null)))
{return h__1819__auto____8802;
} else
{var h__1819__auto____8803 = cljs.core.hash_coll(coll);
this__8801.__hash = h__1819__auto____8803;
return h__1819__auto____8803;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8804 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8805 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8806 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__8806.key,this__8806.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__8854 = null;
var G__8854__2 = (function (this_sym8807,k){
var this__8809 = this;
var this_sym8807__8810 = this;
var node__8811 = this_sym8807__8810;
return node__8811.cljs$core$ILookup$_lookup$arity$2(node__8811,k);
});
var G__8854__3 = (function (this_sym8808,k,not_found){
var this__8809 = this;
var this_sym8808__8812 = this;
var node__8813 = this_sym8808__8812;
return node__8813.cljs$core$ILookup$_lookup$arity$3(node__8813,k,not_found);
});
G__8854 = function(this_sym8808,k,not_found){
switch(arguments.length){
case 2:
return G__8854__2.call(this,this_sym8808,k);
case 3:
return G__8854__3.call(this,this_sym8808,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8854;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8799,args8800){
var this__8814 = this;
return this_sym8799.call.apply(this_sym8799,[this_sym8799].concat(args8800.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8815 = this;
return cljs.core.PersistentVector.fromArray([this__8815.key,this__8815.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8816 = this;
return this__8816.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8817 = this;
return this__8817.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8818 = this;
var node__8819 = this;
return (new cljs.core.RedNode(this__8818.key,this__8818.val,this__8818.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8820 = this;
var node__8821 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8822 = this;
var node__8823 = this;
return (new cljs.core.RedNode(this__8822.key,this__8822.val,this__8822.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8824 = this;
var node__8825 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8826 = this;
var node__8827 = this;
return cljs.core.tree_map_kv_reduce(node__8827,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8828 = this;
var node__8829 = this;
return (new cljs.core.RedNode(this__8828.key,this__8828.val,del,this__8828.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8830 = this;
var node__8831 = this;
return (new cljs.core.RedNode(this__8830.key,this__8830.val,ins,this__8830.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8832 = this;
var node__8833 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__8832.left))
{return (new cljs.core.RedNode(this__8832.key,this__8832.val,this__8832.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8832.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__8832.right))
{return (new cljs.core.RedNode(this__8832.right.key,this__8832.right.val,(new cljs.core.BlackNode(this__8832.key,this__8832.val,this__8832.left,this__8832.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8832.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8833,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8855 = null;
var G__8855__0 = (function (){
var this__8834 = this;
var this__8836 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8836], 0));
});
G__8855 = function(){
switch(arguments.length){
case 0:
return G__8855__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8855;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8837 = this;
var node__8838 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__8837.right))
{return (new cljs.core.RedNode(this__8837.key,this__8837.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8837.left,null)),this__8837.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__8837.left))
{return (new cljs.core.RedNode(this__8837.left.key,this__8837.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8837.left.left,null)),(new cljs.core.BlackNode(this__8837.key,this__8837.val,this__8837.left.right,this__8837.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8838,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8839 = this;
var node__8840 = this;
return (new cljs.core.BlackNode(this__8839.key,this__8839.val,this__8839.left,this__8839.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8841 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8842 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8843 = this;
return cljs.core.list.cljs$lang$arity$2(this__8843.key,this__8843.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8844 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8845 = this;
return this__8845.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8846 = this;
return cljs.core.PersistentVector.fromArray([this__8846.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8847 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__8847.key,this__8847.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8848 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8849 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__8849.key,this__8849.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8850 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8851 = this;
if((n === 0))
{return this__8851.key;
} else
{if((n === 1))
{return this__8851.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8852 = this;
if((n === 0))
{return this__8852.key;
} else
{if((n === 1))
{return this__8852.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8853 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8859 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__8859 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8859 < 0))
{var ins__8860 = tree_map_add(comp,tree.left,k,v,found);
if(!((ins__8860 == null)))
{return tree.add_left(ins__8860);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8861 = tree_map_add(comp,tree.right,k,v,found);
if(!((ins__8861 == null)))
{return tree.add_right(ins__8861);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{var app__8864 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__8864))
{return (new cljs.core.RedNode(app__8864.key,app__8864.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8864.left,null)),(new cljs.core.RedNode(right.key,right.val,app__8864.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8864,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8865 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__8865))
{return (new cljs.core.RedNode(app__8865.key,app__8865.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8865.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8865.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8865,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__8871 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__8871 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c__8871 < 0))
{var del__8872 = tree_map_remove(comp,tree.left,k,found);
if((function (){var or__3824__auto____8873 = !((del__8872 == null));
if(or__3824__auto____8873)
{return or__3824__auto____8873;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del(tree.key,tree.val,del__8872,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8872,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8874 = tree_map_remove(comp,tree.right,k,found);
if((function (){var or__3824__auto____8875 = !((del__8874 == null));
if(or__3824__auto____8875)
{return or__3824__auto____8875;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del__8874);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8874,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8878 = tree.key;
var c__8879 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tk__8878) : comp.call(null,k,tk__8878));
if((c__8879 === 0))
{return tree.replace(tk__8878,v,tree.left,tree.right);
} else
{if((c__8879 < 0))
{return tree.replace(tk__8878,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8878,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8882 = this;
var h__1819__auto____8883 = this__8882.__hash;
if(!((h__1819__auto____8883 == null)))
{return h__1819__auto____8883;
} else
{var h__1819__auto____8884 = cljs.core.hash_imap(coll);
this__8882.__hash = h__1819__auto____8884;
return h__1819__auto____8884;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8885 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8886 = this;
var n__8887 = coll.entry_at(k);
if(!((n__8887 == null)))
{return n__8887.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8888 = this;
var found__8889 = [null];
var t__8890 = cljs.core.tree_map_add(this__8888.comp,this__8888.tree,k,v,found__8889);
if((t__8890 == null))
{var found_node__8891 = cljs.core.nth.cljs$lang$arity$2(found__8889,0);
if(cljs.core._EQ_.cljs$lang$arity$2(v,found_node__8891.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8888.comp,cljs.core.tree_map_replace(this__8888.comp,this__8888.tree,k,v),this__8888.cnt,this__8888.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8888.comp,t__8890.blacken(),(this__8888.cnt + 1),this__8888.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8892 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8926 = null;
var G__8926__2 = (function (this_sym8893,k){
var this__8895 = this;
var this_sym8893__8896 = this;
var coll__8897 = this_sym8893__8896;
return coll__8897.cljs$core$ILookup$_lookup$arity$2(coll__8897,k);
});
var G__8926__3 = (function (this_sym8894,k,not_found){
var this__8895 = this;
var this_sym8894__8898 = this;
var coll__8899 = this_sym8894__8898;
return coll__8899.cljs$core$ILookup$_lookup$arity$3(coll__8899,k,not_found);
});
G__8926 = function(this_sym8894,k,not_found){
switch(arguments.length){
case 2:
return G__8926__2.call(this,this_sym8894,k);
case 3:
return G__8926__3.call(this,this_sym8894,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8926;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym8880,args8881){
var this__8900 = this;
return this_sym8880.call.apply(this_sym8880,[this_sym8880].concat(args8881.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8901 = this;
if(!((this__8901.tree == null)))
{return cljs.core.tree_map_kv_reduce(this__8901.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8902 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8903 = this;
if((this__8903.cnt > 0))
{return cljs.core.create_tree_map_seq(this__8903.tree,false,this__8903.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8904 = this;
var this__8905 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8905], 0));
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8906 = this;
var coll__8907 = this;
var t__8908 = this__8906.tree;
while(true){
if(!((t__8908 == null)))
{var c__8909 = (this__8906.comp.cljs$lang$arity$2 ? this__8906.comp.cljs$lang$arity$2(k,t__8908.key) : this__8906.comp.call(null,k,t__8908.key));
if((c__8909 === 0))
{return t__8908;
} else
{if((c__8909 < 0))
{{
var G__8927 = t__8908.left;
t__8908 = G__8927;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8928 = t__8908.right;
t__8908 = G__8928;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8910 = this;
if((this__8910.cnt > 0))
{return cljs.core.create_tree_map_seq(this__8910.tree,ascending_QMARK_,this__8910.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8911 = this;
if((this__8911.cnt > 0))
{var stack__8912 = null;
var t__8913 = this__8911.tree;
while(true){
if(!((t__8913 == null)))
{var c__8914 = (this__8911.comp.cljs$lang$arity$2 ? this__8911.comp.cljs$lang$arity$2(k,t__8913.key) : this__8911.comp.call(null,k,t__8913.key));
if((c__8914 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$lang$arity$2(stack__8912,t__8913),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8914 < 0))
{{
var G__8929 = cljs.core.conj.cljs$lang$arity$2(stack__8912,t__8913);
var G__8930 = t__8913.left;
stack__8912 = G__8929;
t__8913 = G__8930;
continue;
}
} else
{{
var G__8931 = stack__8912;
var G__8932 = t__8913.right;
stack__8912 = G__8931;
t__8913 = G__8932;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8914 > 0))
{{
var G__8933 = cljs.core.conj.cljs$lang$arity$2(stack__8912,t__8913);
var G__8934 = t__8913.right;
stack__8912 = G__8933;
t__8913 = G__8934;
continue;
}
} else
{{
var G__8935 = stack__8912;
var G__8936 = t__8913.left;
stack__8912 = G__8935;
t__8913 = G__8936;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8912 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8912,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8915 = this;
return cljs.core.key(entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8916 = this;
return this__8916.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8917 = this;
if((this__8917.cnt > 0))
{return cljs.core.create_tree_map_seq(this__8917.tree,true,this__8917.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8918 = this;
return this__8918.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8919 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8920 = this;
return (new cljs.core.PersistentTreeMap(this__8920.comp,this__8920.tree,this__8920.cnt,meta,this__8920.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8921 = this;
return this__8921.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8922 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,this__8922.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8923 = this;
var found__8924 = [null];
var t__8925 = cljs.core.tree_map_remove(this__8923.comp,this__8923.tree,k,found__8924);
if((t__8925 == null))
{if((cljs.core.nth.cljs$lang$arity$2(found__8924,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8923.comp,null,0,this__8923.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8923.comp,t__8925.blacken(),(this__8923.cnt - 1),this__8923.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__8939 = cljs.core.seq(keyvals);
var out__8940 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__8939)
{{
var G__8941 = cljs.core.nnext(in__8939);
var G__8942 = cljs.core.assoc_BANG_(out__8940,cljs.core.first(in__8939),cljs.core.second(in__8939));
in__8939 = G__8941;
out__8940 = G__8942;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__8940);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8943){
var keyvals = cljs.core.seq(arglist__8943);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$lang$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8944){
var keyvals = cljs.core.seq(arglist__8944);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__8948 = [];
var obj__8949 = {};
var kvs__8950 = cljs.core.seq(keyvals);
while(true){
if(kvs__8950)
{ks__8948.push(cljs.core.first(kvs__8950));
(obj__8949[cljs.core.first(kvs__8950)] = cljs.core.second(kvs__8950));
{
var G__8951 = cljs.core.nnext(kvs__8950);
kvs__8950 = G__8951;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$lang$arity$2 ? cljs.core.ObjMap.fromObject.cljs$lang$arity$2(ks__8948,obj__8949) : cljs.core.ObjMap.fromObject.call(null,ks__8948,obj__8949));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__8952){
var keyvals = cljs.core.seq(arglist__8952);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__8955 = cljs.core.seq(keyvals);
var out__8956 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__8955)
{{
var G__8957 = cljs.core.nnext(in__8955);
var G__8958 = cljs.core.assoc.cljs$lang$arity$3(out__8956,cljs.core.first(in__8955),cljs.core.second(in__8955));
in__8955 = G__8957;
out__8956 = G__8958;
continue;
}
} else
{return out__8956;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8959){
var keyvals = cljs.core.seq(arglist__8959);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__8962 = cljs.core.seq(keyvals);
var out__8963 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__8962)
{{
var G__8964 = cljs.core.nnext(in__8962);
var G__8965 = cljs.core.assoc.cljs$lang$arity$3(out__8963,cljs.core.first(in__8962),cljs.core.second(in__8962));
in__8962 = G__8964;
out__8963 = G__8965;
continue;
}
} else
{return out__8963;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__8966){
var comparator = cljs.core.first(arglist__8966);
var keyvals = cljs.core.rest(arglist__8966);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$lang$arity$2((function (p1__8967_SHARP_,p2__8968_SHARP_){
return cljs.core.conj.cljs$lang$arity$2((function (){var or__3824__auto____8970 = p1__8967_SHARP_;
if(cljs.core.truth_(or__3824__auto____8970))
{return or__3824__auto____8970;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__8968_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__8971){
var maps = cljs.core.seq(arglist__8971);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry__8979 = (function (m,e){
var k__8977 = cljs.core.first(e);
var v__8978 = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k__8977))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8977,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,k__8977,null),v__8978) : f.call(null,cljs.core._lookup.cljs$lang$arity$3(m,k__8977,null),v__8978)));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8977,v__8978);
}
});
var merge2__8981 = (function (m1,m2){
return cljs.core.reduce.cljs$lang$arity$3(merge_entry__8979,(function (){var or__3824__auto____8980 = m1;
if(cljs.core.truth_(or__3824__auto____8980))
{return or__3824__auto____8980;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$lang$arity$2(merge2__8981,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__8982){
var f = cljs.core.first(arglist__8982);
var maps = cljs.core.rest(arglist__8982);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8987 = cljs.core.ObjMap.EMPTY;
var keys__8988 = cljs.core.seq(keyseq);
while(true){
if(keys__8988)
{var key__8989 = cljs.core.first(keys__8988);
var entry__8990 = cljs.core._lookup.cljs$lang$arity$3(map,key__8989,"\uFDD0'cljs.core/not-found");
{
var G__8991 = ((cljs.core.not_EQ_.cljs$lang$arity$2(entry__8990,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.cljs$lang$arity$3(ret__8987,key__8989,entry__8990):ret__8987);
var G__8992 = cljs.core.next(keys__8988);
ret__8987 = G__8991;
keys__8988 = G__8992;
continue;
}
} else
{return ret__8987;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8996 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$(this__8996.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8997 = this;
var h__1819__auto____8998 = this__8997.__hash;
if(!((h__1819__auto____8998 == null)))
{return h__1819__auto____8998;
} else
{var h__1819__auto____8999 = cljs.core.hash_iset(coll);
this__8997.__hash = h__1819__auto____8999;
return h__1819__auto____8999;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9000 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9001 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__9001.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9022 = null;
var G__9022__2 = (function (this_sym9002,k){
var this__9004 = this;
var this_sym9002__9005 = this;
var coll__9006 = this_sym9002__9005;
return coll__9006.cljs$core$ILookup$_lookup$arity$2(coll__9006,k);
});
var G__9022__3 = (function (this_sym9003,k,not_found){
var this__9004 = this;
var this_sym9003__9007 = this;
var coll__9008 = this_sym9003__9007;
return coll__9008.cljs$core$ILookup$_lookup$arity$3(coll__9008,k,not_found);
});
G__9022 = function(this_sym9003,k,not_found){
switch(arguments.length){
case 2:
return G__9022__2.call(this,this_sym9003,k);
case 3:
return G__9022__3.call(this,this_sym9003,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9022;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym8994,args8995){
var this__9009 = this;
return this_sym8994.call.apply(this_sym8994,[this_sym8994].concat(args8995.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9010 = this;
return (new cljs.core.PersistentHashSet(this__9010.meta,cljs.core.assoc.cljs$lang$arity$3(this__9010.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9011 = this;
var this__9012 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9012], 0));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9013 = this;
return cljs.core.keys(this__9013.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9014 = this;
return (new cljs.core.PersistentHashSet(this__9014.meta,cljs.core.dissoc.cljs$lang$arity$2(this__9014.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9015 = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9016 = this;
var and__3822__auto____9017 = cljs.core.set_QMARK_(other);
if(and__3822__auto____9017)
{var and__3822__auto____9018 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3822__auto____9018)
{return cljs.core.every_QMARK_((function (p1__8993_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__8993_SHARP_);
}),other);
} else
{return and__3822__auto____9018;
}
} else
{return and__3822__auto____9017;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9019 = this;
return (new cljs.core.PersistentHashSet(meta,this__9019.hash_map,this__9019.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9020 = this;
return this__9020.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9021 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,this__9021.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map(),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9023 = cljs.core.count(items);
var i__9024 = 0;
var out__9025 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9024 < len__9023))
{{
var G__9026 = (i__9024 + 1);
var G__9027 = cljs.core.conj_BANG_(out__9025,(items[i__9024]));
i__9024 = G__9026;
out__9025 = G__9027;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9025);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9045 = null;
var G__9045__2 = (function (this_sym9031,k){
var this__9033 = this;
var this_sym9031__9034 = this;
var tcoll__9035 = this_sym9031__9034;
if((cljs.core._lookup.cljs$lang$arity$3(this__9033.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9045__3 = (function (this_sym9032,k,not_found){
var this__9033 = this;
var this_sym9032__9036 = this;
var tcoll__9037 = this_sym9032__9036;
if((cljs.core._lookup.cljs$lang$arity$3(this__9033.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9045 = function(this_sym9032,k,not_found){
switch(arguments.length){
case 2:
return G__9045__2.call(this,this_sym9032,k);
case 3:
return G__9045__3.call(this,this_sym9032,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9045;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9029,args9030){
var this__9038 = this;
return this_sym9029.call.apply(this_sym9029,[this_sym9029].concat(args9030.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9039 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9040 = this;
if((cljs.core._lookup.cljs$lang$arity$3(this__9040.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9041 = this;
return cljs.core.count(this__9041.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9042 = this;
this__9042.transient_map = cljs.core.dissoc_BANG_(this__9042.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9043 = this;
this__9043.transient_map = cljs.core.assoc_BANG_(this__9043.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9044 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(this__9044.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9048 = this;
var h__1819__auto____9049 = this__9048.__hash;
if(!((h__1819__auto____9049 == null)))
{return h__1819__auto____9049;
} else
{var h__1819__auto____9050 = cljs.core.hash_iset(coll);
this__9048.__hash = h__1819__auto____9050;
return h__1819__auto____9050;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9051 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9052 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__9052.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9078 = null;
var G__9078__2 = (function (this_sym9053,k){
var this__9055 = this;
var this_sym9053__9056 = this;
var coll__9057 = this_sym9053__9056;
return coll__9057.cljs$core$ILookup$_lookup$arity$2(coll__9057,k);
});
var G__9078__3 = (function (this_sym9054,k,not_found){
var this__9055 = this;
var this_sym9054__9058 = this;
var coll__9059 = this_sym9054__9058;
return coll__9059.cljs$core$ILookup$_lookup$arity$3(coll__9059,k,not_found);
});
G__9078 = function(this_sym9054,k,not_found){
switch(arguments.length){
case 2:
return G__9078__2.call(this,this_sym9054,k);
case 3:
return G__9078__3.call(this,this_sym9054,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9078;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9046,args9047){
var this__9060 = this;
return this_sym9046.call.apply(this_sym9046,[this_sym9046].concat(args9047.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9061 = this;
return (new cljs.core.PersistentTreeSet(this__9061.meta,cljs.core.assoc.cljs$lang$arity$3(this__9061.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9062 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core.rseq(this__9062.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9063 = this;
var this__9064 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9064], 0));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9065 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq(this__9065.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9066 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq_from(this__9066.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9067 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9068 = this;
return cljs.core._comparator(this__9068.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9069 = this;
return cljs.core.keys(this__9069.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9070 = this;
return (new cljs.core.PersistentTreeSet(this__9070.meta,cljs.core.dissoc.cljs$lang$arity$2(this__9070.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9071 = this;
return cljs.core.count(this__9071.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9072 = this;
var and__3822__auto____9073 = cljs.core.set_QMARK_(other);
if(and__3822__auto____9073)
{var and__3822__auto____9074 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3822__auto____9074)
{return cljs.core.every_QMARK_((function (p1__9028_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__9028_SHARP_);
}),other);
} else
{return and__3822__auto____9074;
}
} else
{return and__3822__auto____9073;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9075 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9075.tree_map,this__9075.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9076 = this;
return this__9076.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9077 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,this__9077.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map(),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9083__delegate = function (keys){
var in__9081 = cljs.core.seq(keys);
var out__9082 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq(in__9081))
{{
var G__9084 = cljs.core.next(in__9081);
var G__9085 = cljs.core.conj_BANG_(out__9082,cljs.core.first(in__9081));
in__9081 = G__9084;
out__9082 = G__9085;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9082);
}
break;
}
};
var G__9083 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9083__delegate.call(this, keys);
};
G__9083.cljs$lang$maxFixedArity = 0;
G__9083.cljs$lang$applyTo = (function (arglist__9086){
var keys = cljs.core.seq(arglist__9086);;
return G__9083__delegate(keys);
});
G__9083.cljs$lang$arity$variadic = G__9083__delegate;
return G__9083;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9087){
var keys = cljs.core.seq(arglist__9087);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9089){
var comparator = cljs.core.first(arglist__9089);
var keys = cljs.core.rest(arglist__9089);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_(coll))
{var n__9095 = cljs.core.count(coll);
return cljs.core.reduce.cljs$lang$arity$3((function (v,i){
var temp__3971__auto____9096 = cljs.core.find(smap,cljs.core.nth.cljs$lang$arity$2(v,i));
if(cljs.core.truth_(temp__3971__auto____9096))
{var e__9097 = temp__3971__auto____9096;
return cljs.core.assoc.cljs$lang$arity$3(v,i,cljs.core.second(e__9097));
} else
{return v;
}
}),coll,cljs.core.take(n__9095,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$lang$arity$2((function (p1__9088_SHARP_){
var temp__3971__auto____9098 = cljs.core.find(smap,p1__9088_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9098))
{var e__9099 = temp__3971__auto____9098;
return cljs.core.second(e__9099);
} else
{return p1__9088_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9129 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9122,seen){
while(true){
var vec__9123__9124 = p__9122;
var f__9125 = cljs.core.nth.cljs$lang$arity$3(vec__9123__9124,0,null);
var xs__9126 = vec__9123__9124;
var temp__3974__auto____9127 = cljs.core.seq(xs__9126);
if(temp__3974__auto____9127)
{var s__9128 = temp__3974__auto____9127;
if(cljs.core.contains_QMARK_(seen,f__9125))
{{
var G__9130 = cljs.core.rest(s__9128);
var G__9131 = seen;
p__9122 = G__9130;
seen = G__9131;
continue;
}
} else
{return cljs.core.cons(f__9125,step(cljs.core.rest(s__9128),cljs.core.conj.cljs$lang$arity$2(seen,f__9125)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return (step__9129.cljs$lang$arity$2 ? step__9129.cljs$lang$arity$2(coll,cljs.core.PersistentHashSet.EMPTY) : step__9129.call(null,coll,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.butlast = (function butlast(s){
var ret__9134 = cljs.core.PersistentVector.EMPTY;
var s__9135 = s;
while(true){
if(cljs.core.next(s__9135))
{{
var G__9136 = cljs.core.conj.cljs$lang$arity$2(ret__9134,cljs.core.first(s__9135));
var G__9137 = cljs.core.next(s__9135);
ret__9134 = G__9136;
s__9135 = G__9137;
continue;
}
} else
{return cljs.core.seq(ret__9134);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if((function (){var or__3824__auto____9140 = cljs.core.keyword_QMARK_(x);
if(or__3824__auto____9140)
{return or__3824__auto____9140;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__9141 = x.lastIndexOf("/");
if((i__9141 < 0))
{return cljs.core.subs.cljs$lang$arity$2(x,2);
} else
{return cljs.core.subs.cljs$lang$arity$2(x,(i__9141 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9144 = cljs.core.keyword_QMARK_(x);
if(or__3824__auto____9144)
{return or__3824__auto____9144;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__9145 = x.lastIndexOf("/");
if((i__9145 > -1))
{return cljs.core.subs.cljs$lang$arity$3(x,2,i__9145);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9152 = cljs.core.ObjMap.EMPTY;
var ks__9153 = cljs.core.seq(keys);
var vs__9154 = cljs.core.seq(vals);
while(true){
if((function (){var and__3822__auto____9155 = ks__9153;
if(and__3822__auto____9155)
{return vs__9154;
} else
{return and__3822__auto____9155;
}
})())
{{
var G__9156 = cljs.core.assoc.cljs$lang$arity$3(map__9152,cljs.core.first(ks__9153),cljs.core.first(vs__9154));
var G__9157 = cljs.core.next(ks__9153);
var G__9158 = cljs.core.next(vs__9154);
map__9152 = G__9156;
ks__9153 = G__9157;
vs__9154 = G__9158;
continue;
}
} else
{return map__9152;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) > (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9161__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9146_SHARP_,p2__9147_SHARP_){
return max_key.cljs$lang$arity$3(k,p1__9146_SHARP_,p2__9147_SHARP_);
}),max_key.cljs$lang$arity$3(k,x,y),more);
};
var G__9161 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9161__delegate.call(this, k, x, y, more);
};
G__9161.cljs$lang$maxFixedArity = 3;
G__9161.cljs$lang$applyTo = (function (arglist__9162){
var k = cljs.core.first(arglist__9162);
var x = cljs.core.first(cljs.core.next(arglist__9162));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9162)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9162)));
return G__9161__delegate(k, x, y, more);
});
G__9161.cljs$lang$arity$variadic = G__9161__delegate;
return G__9161;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) < (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9163__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9159_SHARP_,p2__9160_SHARP_){
return min_key.cljs$lang$arity$3(k,p1__9159_SHARP_,p2__9160_SHARP_);
}),min_key.cljs$lang$arity$3(k,x,y),more);
};
var G__9163 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9163__delegate.call(this, k, x, y, more);
};
G__9163.cljs$lang$maxFixedArity = 3;
G__9163.cljs$lang$applyTo = (function (arglist__9164){
var k = cljs.core.first(arglist__9164);
var x = cljs.core.first(cljs.core.next(arglist__9164));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9164)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9164)));
return G__9163__delegate(k, x, y, more);
});
G__9163.cljs$lang$arity$variadic = G__9163__delegate;
return G__9163;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.cljs$lang$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9167 = cljs.core.seq(coll);
if(temp__3974__auto____9167)
{var s__9168 = temp__3974__auto____9167;
return cljs.core.cons(cljs.core.take(n,s__9168),partition_all.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__9168)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9171 = cljs.core.seq(coll);
if(temp__3974__auto____9171)
{var s__9172 = temp__3974__auto____9171;
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__9172)) : pred.call(null,cljs.core.first(s__9172)))))
{return cljs.core.cons(cljs.core.first(s__9172),take_while(pred,cljs.core.rest(s__9172)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9174 = cljs.core._comparator(sc);
return (test.cljs$lang$arity$2 ? test.cljs$lang$arity$2((comp__9174.cljs$lang$arity$2 ? comp__9174.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__9174.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp__9174.cljs$lang$arity$2 ? comp__9174.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__9174.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9186 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9187 = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9187))
{var vec__9188__9189 = temp__3974__auto____9187;
var e__9190 = cljs.core.nth.cljs$lang$arity$3(vec__9188__9189,0,null);
var s__9191 = vec__9188__9189;
if(cljs.core.truth_((include__9186.cljs$lang$arity$1 ? include__9186.cljs$lang$arity$1(e__9190) : include__9186.call(null,e__9190))))
{return s__9191;
} else
{return cljs.core.next(s__9191);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__9186,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9192 = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9192))
{var vec__9193__9194 = temp__3974__auto____9192;
var e__9195 = cljs.core.nth.cljs$lang$arity$3(vec__9193__9194,0,null);
var s__9196 = vec__9193__9194;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e__9195))?s__9196:cljs.core.next(s__9196)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9208 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9209 = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9209))
{var vec__9210__9211 = temp__3974__auto____9209;
var e__9212 = cljs.core.nth.cljs$lang$arity$3(vec__9210__9211,0,null);
var s__9213 = vec__9210__9211;
if(cljs.core.truth_((include__9208.cljs$lang$arity$1 ? include__9208.cljs$lang$arity$1(e__9212) : include__9208.call(null,e__9212))))
{return s__9213;
} else
{return cljs.core.next(s__9213);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__9208,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9214 = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9214))
{var vec__9215__9216 = temp__3974__auto____9214;
var e__9217 = cljs.core.nth.cljs$lang$arity$3(vec__9215__9216,0,null);
var s__9218 = vec__9215__9216;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e__9217))?s__9218:cljs.core.next(s__9218)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9219 = this;
var h__1819__auto____9220 = this__9219.__hash;
if(!((h__1819__auto____9220 == null)))
{return h__1819__auto____9220;
} else
{var h__1819__auto____9221 = cljs.core.hash_coll(rng);
this__9219.__hash = h__1819__auto____9221;
return h__1819__auto____9221;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9222 = this;
if((this__9222.step > 0))
{if(((this__9222.start + this__9222.step) < this__9222.end))
{return (new cljs.core.Range(this__9222.meta,(this__9222.start + this__9222.step),this__9222.end,this__9222.step,null));
} else
{return null;
}
} else
{if(((this__9222.start + this__9222.step) > this__9222.end))
{return (new cljs.core.Range(this__9222.meta,(this__9222.start + this__9222.step),this__9222.end,this__9222.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9223 = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9224 = this;
var this__9225 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9225], 0));
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9226 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9227 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9228 = this;
if((this__9228.step > 0))
{if((this__9228.start < this__9228.end))
{return rng;
} else
{return null;
}
} else
{if((this__9228.start > this__9228.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9229 = this;
if(cljs.core.not(rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9229.end - this__9229.start) / this__9229.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9230 = this;
return this__9230.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9231 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9231.meta,(this__9231.start + this__9231.step),this__9231.end,this__9231.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9232 = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9233 = this;
return (new cljs.core.Range(meta,this__9233.start,this__9233.end,this__9233.step,this__9233.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9234 = this;
return this__9234.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9235 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9235.start + (n * this__9235.step));
} else
{if((function (){var and__3822__auto____9236 = (this__9235.start > this__9235.end);
if(and__3822__auto____9236)
{return (this__9235.step === 0);
} else
{return and__3822__auto____9236;
}
})())
{return this__9235.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9237 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9237.start + (n * this__9237.step));
} else
{if((function (){var and__3822__auto____9238 = (this__9237.start > this__9237.end);
if(and__3822__auto____9238)
{return (this__9237.step === 0);
} else
{return and__3822__auto____9238;
}
})())
{return this__9237.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9239 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9239.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$lang$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.cljs$lang$arity$3(0,end,1);
});
var range__2 = (function (start,end){
return range.cljs$lang$arity$3(start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9242 = cljs.core.seq(coll);
if(temp__3974__auto____9242)
{var s__9243 = temp__3974__auto____9242;
return cljs.core.cons(cljs.core.first(s__9243),take_nth(n,cljs.core.drop(n,s__9243)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9250 = cljs.core.seq(coll);
if(temp__3974__auto____9250)
{var s__9251 = temp__3974__auto____9250;
var fst__9252 = cljs.core.first(s__9251);
var fv__9253 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(fst__9252) : f.call(null,fst__9252));
var run__9254 = cljs.core.cons(fst__9252,cljs.core.take_while((function (p1__9244_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(fv__9253,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(p1__9244_SHARP_) : f.call(null,p1__9244_SHARP_)));
}),cljs.core.next(s__9251)));
return cljs.core.cons(run__9254,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run__9254),s__9251))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (counts,x){
return cljs.core.assoc_BANG_(counts,x,(cljs.core._lookup.cljs$lang$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9269 = cljs.core.seq(coll);
if(temp__3971__auto____9269)
{var s__9270 = temp__3971__auto____9269;
return reductions.cljs$lang$arity$3(f,cljs.core.first(s__9270),cljs.core.rest(s__9270));
} else
{return cljs.core.list.cljs$lang$arity$1((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9271 = cljs.core.seq(coll);
if(temp__3974__auto____9271)
{var s__9272 = temp__3974__auto____9271;
return reductions.cljs$lang$arity$3(f,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(init,cljs.core.first(s__9272)) : f.call(null,init,cljs.core.first(s__9272))),cljs.core.rest(s__9272));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9275 = null;
var G__9275__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null))], 0));
});
var G__9275__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x))], 0));
});
var G__9275__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y))], 0));
});
var G__9275__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z))], 0));
});
var G__9275__4 = (function() { 
var G__9276__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args)], 0));
};
var G__9276 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9276__delegate.call(this, x, y, z, args);
};
G__9276.cljs$lang$maxFixedArity = 3;
G__9276.cljs$lang$applyTo = (function (arglist__9277){
var x = cljs.core.first(arglist__9277);
var y = cljs.core.first(cljs.core.next(arglist__9277));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9277)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9277)));
return G__9276__delegate(x, y, z, args);
});
G__9276.cljs$lang$arity$variadic = G__9276__delegate;
return G__9276;
})()
;
G__9275 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9275__0.call(this);
case 1:
return G__9275__1.call(this,x);
case 2:
return G__9275__2.call(this,x,y);
case 3:
return G__9275__3.call(this,x,y,z);
default:
return G__9275__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9275.cljs$lang$maxFixedArity = 3;
G__9275.cljs$lang$applyTo = G__9275__4.cljs$lang$applyTo;
return G__9275;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9278 = null;
var G__9278__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))], 0));
});
var G__9278__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))], 0));
});
var G__9278__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))], 0));
});
var G__9278__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))], 0));
});
var G__9278__4 = (function() { 
var G__9279__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)], 0));
};
var G__9279 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9279__delegate.call(this, x, y, z, args);
};
G__9279.cljs$lang$maxFixedArity = 3;
G__9279.cljs$lang$applyTo = (function (arglist__9280){
var x = cljs.core.first(arglist__9280);
var y = cljs.core.first(cljs.core.next(arglist__9280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9280)));
return G__9279__delegate(x, y, z, args);
});
G__9279.cljs$lang$arity$variadic = G__9279__delegate;
return G__9279;
})()
;
G__9278 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9278__0.call(this);
case 1:
return G__9278__1.call(this,x);
case 2:
return G__9278__2.call(this,x,y);
case 3:
return G__9278__3.call(this,x,y,z);
default:
return G__9278__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9278.cljs$lang$maxFixedArity = 3;
G__9278.cljs$lang$applyTo = G__9278__4.cljs$lang$applyTo;
return G__9278;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9281 = null;
var G__9281__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null)),(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))], 0));
});
var G__9281__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x)),(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))], 0));
});
var G__9281__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y)),(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))], 0));
});
var G__9281__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))], 0));
});
var G__9281__4 = (function() { 
var G__9282__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)], 0));
};
var G__9282 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9282__delegate.call(this, x, y, z, args);
};
G__9282.cljs$lang$maxFixedArity = 3;
G__9282.cljs$lang$applyTo = (function (arglist__9283){
var x = cljs.core.first(arglist__9283);
var y = cljs.core.first(cljs.core.next(arglist__9283));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9283)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9283)));
return G__9282__delegate(x, y, z, args);
});
G__9282.cljs$lang$arity$variadic = G__9282__delegate;
return G__9282;
})()
;
G__9281 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9281__0.call(this);
case 1:
return G__9281__1.call(this,x);
case 2:
return G__9281__2.call(this,x,y);
case 3:
return G__9281__3.call(this,x,y,z);
default:
return G__9281__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9281.cljs$lang$maxFixedArity = 3;
G__9281.cljs$lang$applyTo = G__9281__4.cljs$lang$applyTo;
return G__9281;
})()
});
var juxt__4 = (function() { 
var G__9284__delegate = function (f,g,h,fs){
var fs__9274 = cljs.core.list_STAR_.cljs$lang$arity$4(f,g,h,fs);
return (function() {
var G__9285 = null;
var G__9285__0 = (function (){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9255_SHARP_,p2__9256_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__9255_SHARP_,(p2__9256_SHARP_.cljs$lang$arity$0 ? p2__9256_SHARP_.cljs$lang$arity$0() : p2__9256_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__9274);
});
var G__9285__1 = (function (x){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9257_SHARP_,p2__9258_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__9257_SHARP_,(p2__9258_SHARP_.cljs$lang$arity$1 ? p2__9258_SHARP_.cljs$lang$arity$1(x) : p2__9258_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__9274);
});
var G__9285__2 = (function (x,y){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9259_SHARP_,p2__9260_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__9259_SHARP_,(p2__9260_SHARP_.cljs$lang$arity$2 ? p2__9260_SHARP_.cljs$lang$arity$2(x,y) : p2__9260_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__9274);
});
var G__9285__3 = (function (x,y,z){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9261_SHARP_,p2__9262_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__9261_SHARP_,(p2__9262_SHARP_.cljs$lang$arity$3 ? p2__9262_SHARP_.cljs$lang$arity$3(x,y,z) : p2__9262_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__9274);
});
var G__9285__4 = (function() { 
var G__9286__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__9263_SHARP_,p2__9264_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__9263_SHARP_,cljs.core.apply.cljs$lang$arity$5(p2__9264_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9274);
};
var G__9286 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9286__delegate.call(this, x, y, z, args);
};
G__9286.cljs$lang$maxFixedArity = 3;
G__9286.cljs$lang$applyTo = (function (arglist__9287){
var x = cljs.core.first(arglist__9287);
var y = cljs.core.first(cljs.core.next(arglist__9287));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9287)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9287)));
return G__9286__delegate(x, y, z, args);
});
G__9286.cljs$lang$arity$variadic = G__9286__delegate;
return G__9286;
})()
;
G__9285 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9285__0.call(this);
case 1:
return G__9285__1.call(this,x);
case 2:
return G__9285__2.call(this,x,y);
case 3:
return G__9285__3.call(this,x,y,z);
default:
return G__9285__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9285.cljs$lang$maxFixedArity = 3;
G__9285.cljs$lang$applyTo = G__9285__4.cljs$lang$applyTo;
return G__9285;
})()
};
var G__9284 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9284__delegate.call(this, f, g, h, fs);
};
G__9284.cljs$lang$maxFixedArity = 3;
G__9284.cljs$lang$applyTo = (function (arglist__9288){
var f = cljs.core.first(arglist__9288);
var g = cljs.core.first(cljs.core.next(arglist__9288));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9288)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9288)));
return G__9284__delegate(f, g, h, fs);
});
G__9284.cljs$lang$arity$variadic = G__9284__delegate;
return G__9284;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll))
{{
var G__9291 = cljs.core.next(coll);
coll = G__9291;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9290 = cljs.core.seq(coll);
if(and__3822__auto____9290)
{return (n > 0);
} else
{return and__3822__auto____9290;
}
})()))
{{
var G__9292 = (n - 1);
var G__9293 = cljs.core.next(coll);
n = G__9292;
coll = G__9293;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$lang$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$lang$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9295 = re.exec(s);
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(matches__9295),s))
{if((cljs.core.count(matches__9295) === 1))
{return cljs.core.first(matches__9295);
} else
{return cljs.core.vec(matches__9295);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9297 = re.exec(s);
if((matches__9297 == null))
{return null;
} else
{if((cljs.core.count(matches__9297) === 1))
{return cljs.core.first(matches__9297);
} else
{return cljs.core.vec(matches__9297);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9302 = cljs.core.re_find(re,s);
var match_idx__9303 = s.search(re);
var match_str__9304 = ((cljs.core.coll_QMARK_(match_data__9302))?cljs.core.first(match_data__9302):match_data__9302);
var post_match__9305 = cljs.core.subs.cljs$lang$arity$2(s,(match_idx__9303 + cljs.core.count(match_str__9304)));
if(cljs.core.truth_(match_data__9302))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data__9302,re_seq(re,post_match__9305));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9312__9313 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9314 = cljs.core.nth.cljs$lang$arity$3(vec__9312__9313,0,null);
var flags__9315 = cljs.core.nth.cljs$lang$arity$3(vec__9312__9313,1,null);
var pattern__9316 = cljs.core.nth.cljs$lang$arity$3(vec__9312__9313,2,null);
return (new RegExp(pattern__9316,flags__9315));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.cljs$lang$arity$2((function (p1__9306_SHARP_){
return (print_one.cljs$lang$arity$2 ? print_one.cljs$lang$arity$2(p1__9306_SHARP_,opts) : print_one.call(null,p1__9306_SHARP_,opts));
}),coll))),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([end], true)], 0));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.cljs$lang$arity$1("nil");
} else
{if((void 0 === obj))
{return cljs.core.list.cljs$lang$arity$1("#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.cljs$lang$arity$2((cljs.core.truth_((function (){var and__3822__auto____9326 = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9326))
{var and__3822__auto____9330 = (function (){var G__9327__9328 = obj;
if(G__9327__9328)
{if((function (){var or__3824__auto____9329 = (G__9327__9328.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9329)
{return or__3824__auto____9329;
} else
{return G__9327__9328.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9327__9328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__9327__9328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__9327__9328);
}
})();
if(cljs.core.truth_(and__3822__auto____9330))
{return cljs.core.meta(obj);
} else
{return and__3822__auto____9330;
}
} else
{return and__3822__auto____9326;
}
})())?cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["^"], true),pr_seq(cljs.core.meta(obj),opts),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([" "], true)], 0)):null),(((function (){var and__3822__auto____9331 = !((obj == null));
if(and__3822__auto____9331)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9331;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9332__9333 = obj;
if(G__9332__9333)
{if((function (){var or__3824__auto____9334 = (G__9332__9333.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9334)
{return or__3824__auto____9334;
} else
{return G__9332__9333.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9332__9333.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__9332__9333);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__9332__9333);
}
})())?cljs.core._pr_seq(obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))?cljs.core.list.cljs$lang$arity$3("#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9354 = (new goog.string.StringBuffer());
var G__9355__9356 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__9355__9356)
{var string__9357 = cljs.core.first(G__9355__9356);
var G__9355__9358 = G__9355__9356;
while(true){
sb__9354.append(string__9357);
var temp__3974__auto____9359 = cljs.core.next(G__9355__9358);
if(temp__3974__auto____9359)
{var G__9355__9360 = temp__3974__auto____9359;
{
var G__9373 = cljs.core.first(G__9355__9360);
var G__9374 = G__9355__9360;
string__9357 = G__9373;
G__9355__9358 = G__9374;
continue;
}
} else
{}
break;
}
} else
{}
var G__9361__9362 = cljs.core.seq(cljs.core.next(objs));
if(G__9361__9362)
{var obj__9363 = cljs.core.first(G__9361__9362);
var G__9361__9364 = G__9361__9362;
while(true){
sb__9354.append(" ");
var G__9365__9366 = cljs.core.seq(cljs.core.pr_seq(obj__9363,opts));
if(G__9365__9366)
{var string__9367 = cljs.core.first(G__9365__9366);
var G__9365__9368 = G__9365__9366;
while(true){
sb__9354.append(string__9367);
var temp__3974__auto____9369 = cljs.core.next(G__9365__9368);
if(temp__3974__auto____9369)
{var G__9365__9370 = temp__3974__auto____9369;
{
var G__9375 = cljs.core.first(G__9365__9370);
var G__9376 = G__9365__9370;
string__9367 = G__9375;
G__9365__9368 = G__9376;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9371 = cljs.core.next(G__9361__9364);
if(temp__3974__auto____9371)
{var G__9361__9372 = temp__3974__auto____9371;
{
var G__9377 = cljs.core.first(G__9361__9372);
var G__9378 = G__9361__9372;
obj__9363 = G__9377;
G__9361__9364 = G__9378;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9354;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb(objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9380 = cljs.core.pr_sb(objs,opts);
sb__9380.append("\n");
return [cljs.core.str(sb__9380)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs))
{return cljs.core.string_print("");
} else
{var G__9399__9400 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__9399__9400)
{var string__9401 = cljs.core.first(G__9399__9400);
var G__9399__9402 = G__9399__9400;
while(true){
cljs.core.string_print(string__9401);
var temp__3974__auto____9403 = cljs.core.next(G__9399__9402);
if(temp__3974__auto____9403)
{var G__9399__9404 = temp__3974__auto____9403;
{
var G__9417 = cljs.core.first(G__9399__9404);
var G__9418 = G__9399__9404;
string__9401 = G__9417;
G__9399__9402 = G__9418;
continue;
}
} else
{}
break;
}
} else
{}
var G__9405__9406 = cljs.core.seq(cljs.core.next(objs));
if(G__9405__9406)
{var obj__9407 = cljs.core.first(G__9405__9406);
var G__9405__9408 = G__9405__9406;
while(true){
cljs.core.string_print(" ");
var G__9409__9410 = cljs.core.seq(cljs.core.pr_seq(obj__9407,opts));
if(G__9409__9410)
{var string__9411 = cljs.core.first(G__9409__9410);
var G__9409__9412 = G__9409__9410;
while(true){
cljs.core.string_print(string__9411);
var temp__3974__auto____9413 = cljs.core.next(G__9409__9412);
if(temp__3974__auto____9413)
{var G__9409__9414 = temp__3974__auto____9413;
{
var G__9419 = cljs.core.first(G__9409__9414);
var G__9420 = G__9409__9414;
string__9411 = G__9419;
G__9409__9412 = G__9420;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9415 = cljs.core.next(G__9405__9408);
if(temp__3974__auto____9415)
{var G__9405__9416 = temp__3974__auto____9415;
{
var G__9421 = cljs.core.first(G__9405__9416);
var G__9422 = G__9405__9416;
obj__9407 = G__9421;
G__9405__9408 = G__9422;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9423){
var objs = cljs.core.seq(arglist__9423);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9424){
var objs = cljs.core.seq(arglist__9424);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9425){
var objs = cljs.core.seq(arglist__9425);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9426){
var objs = cljs.core.seq(arglist__9426);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9427){
var objs = cljs.core.seq(arglist__9427);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9428){
var objs = cljs.core.seq(arglist__9428);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9429){
var objs = cljs.core.seq(arglist__9429);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9430){
var objs = cljs.core.seq(arglist__9430);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$3(cljs.core.format,fmt,args)], 0));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__9431){
var fmt = cljs.core.first(arglist__9431);
var args = cljs.core.rest(arglist__9431);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9432 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__9432,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9433 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__9433,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9434 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__9434,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9435 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__3974__auto____9435))
{var nspc__9436 = temp__3974__auto____9435;
return [cljs.core.str(nspc__9436),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str((function (){var temp__3974__auto____9437 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__3974__auto____9437))
{var nspc__9438 = temp__3974__auto____9437;
return [cljs.core.str(nspc__9438),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.cljs$lang$arity$1((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9439 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__9439,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.cljs$lang$arity$1("()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9441 = (function (n,len){
var ns__9440 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns__9440) < len))
{{
var G__9443 = [cljs.core.str("0"),cljs.core.str(ns__9440)].join('');
ns__9440 = G__9443;
continue;
}
} else
{return ns__9440;
}
break;
}
});
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str((normalize__9441.cljs$lang$arity$2 ? normalize__9441.cljs$lang$arity$2((d.getUTCMonth() + 1),2) : normalize__9441.call(null,(d.getUTCMonth() + 1),2))),cljs.core.str("-"),cljs.core.str((normalize__9441.cljs$lang$arity$2 ? normalize__9441.cljs$lang$arity$2(d.getUTCDate(),2) : normalize__9441.call(null,d.getUTCDate(),2))),cljs.core.str("T"),cljs.core.str((normalize__9441.cljs$lang$arity$2 ? normalize__9441.cljs$lang$arity$2(d.getUTCHours(),2) : normalize__9441.call(null,d.getUTCHours(),2))),cljs.core.str(":"),cljs.core.str((normalize__9441.cljs$lang$arity$2 ? normalize__9441.cljs$lang$arity$2(d.getUTCMinutes(),2) : normalize__9441.call(null,d.getUTCMinutes(),2))),cljs.core.str(":"),cljs.core.str((normalize__9441.cljs$lang$arity$2 ? normalize__9441.cljs$lang$arity$2(d.getUTCSeconds(),2) : normalize__9441.call(null,d.getUTCSeconds(),2))),cljs.core.str("."),cljs.core.str((normalize__9441.cljs$lang$arity$2 ? normalize__9441.cljs$lang$arity$2(d.getUTCMilliseconds(),3) : normalize__9441.call(null,d.getUTCMilliseconds(),3))),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9442 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__9442,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.cljs$lang$arity$2(x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9444 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9445 = this;
var G__9446__9447 = cljs.core.seq(this__9445.watches);
if(G__9446__9447)
{var G__9449__9451 = cljs.core.first(G__9446__9447);
var vec__9450__9452 = G__9449__9451;
var key__9453 = cljs.core.nth.cljs$lang$arity$3(vec__9450__9452,0,null);
var f__9454 = cljs.core.nth.cljs$lang$arity$3(vec__9450__9452,1,null);
var G__9446__9455 = G__9446__9447;
var G__9449__9456 = G__9449__9451;
var G__9446__9457 = G__9446__9455;
while(true){
var vec__9458__9459 = G__9449__9456;
var key__9460 = cljs.core.nth.cljs$lang$arity$3(vec__9458__9459,0,null);
var f__9461 = cljs.core.nth.cljs$lang$arity$3(vec__9458__9459,1,null);
var G__9446__9462 = G__9446__9457;
(f__9461.cljs$lang$arity$4 ? f__9461.cljs$lang$arity$4(key__9460,this$,oldval,newval) : f__9461.call(null,key__9460,this$,oldval,newval));
var temp__3974__auto____9463 = cljs.core.next(G__9446__9462);
if(temp__3974__auto____9463)
{var G__9446__9464 = temp__3974__auto____9463;
{
var G__9471 = cljs.core.first(G__9446__9464);
var G__9472 = G__9446__9464;
G__9449__9456 = G__9471;
G__9446__9457 = G__9472;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9465 = this;
return this$.watches = cljs.core.assoc.cljs$lang$arity$3(this__9465.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9466 = this;
return this$.watches = cljs.core.dissoc.cljs$lang$arity$2(this__9466.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9467 = this;
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq(this__9467.state,opts),cljs.core.array_seq([">"], 0));
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9468 = this;
return this__9468.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9469 = this;
return this__9469.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9470 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9484__delegate = function (x,p__9473){
var map__9479__9480 = p__9473;
var map__9479__9481 = ((cljs.core.seq_QMARK_(map__9479__9480))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__9479__9480):map__9479__9480);
var validator__9482 = cljs.core._lookup.cljs$lang$arity$3(map__9479__9481,"\uFDD0'validator",null);
var meta__9483 = cljs.core._lookup.cljs$lang$arity$3(map__9479__9481,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9483,validator__9482,null));
};
var G__9484 = function (x,var_args){
var p__9473 = null;
if (goog.isDef(var_args)) {
  p__9473 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9484__delegate.call(this, x, p__9473);
};
G__9484.cljs$lang$maxFixedArity = 1;
G__9484.cljs$lang$applyTo = (function (arglist__9485){
var x = cljs.core.first(arglist__9485);
var p__9473 = cljs.core.rest(arglist__9485);
return G__9484__delegate(x, p__9473);
});
G__9484.cljs$lang$arity$variadic = G__9484__delegate;
return G__9484;
})()
;
atom = function(x,var_args){
var p__9473 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9489 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9489))
{var validate__9490 = temp__3974__auto____9489;
if(cljs.core.truth_((validate__9490.cljs$lang$arity$1 ? validate__9490.cljs$lang$arity$1(new_value) : validate__9490.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6448))], 0)))].join('')));
}
} else
{}
var old_value__9491 = a.state;
a.state = new_value;
cljs.core._notify_watches(a,old_value__9491,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__9492__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$lang$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__9492 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9492__delegate.call(this, a, f, x, y, z, more);
};
G__9492.cljs$lang$maxFixedArity = 5;
G__9492.cljs$lang$applyTo = (function (arglist__9493){
var a = cljs.core.first(arglist__9493);
var f = cljs.core.first(cljs.core.next(arglist__9493));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9493)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9493))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9493)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9493)))));
return G__9492__delegate(a, f, x, y, z, more);
});
G__9492.cljs$lang$arity$variadic = G__9492__delegate;
return G__9492;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$lang$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$lang$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9494){
var iref = cljs.core.first(arglist__9494);
var f = cljs.core.first(cljs.core.next(arglist__9494));
var args = cljs.core.rest(cljs.core.next(arglist__9494));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$lang$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$lang$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$lang$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$lang$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9495 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref(this__9495.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9496 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.cljs$lang$arity$2(this__9496.state,(function (p__9497){
var map__9498__9499 = p__9497;
var map__9498__9500 = ((cljs.core.seq_QMARK_(map__9498__9499))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__9498__9499):map__9498__9499);
var curr_state__9501 = map__9498__9500;
var done__9502 = cljs.core._lookup.cljs$lang$arity$3(map__9498__9500,"\uFDD0'done",null);
if(cljs.core.truth_(done__9502))
{return curr_state__9501;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":(this__9496.f.cljs$lang$arity$0 ? this__9496.f.cljs$lang$arity$0() : this__9496.f.call(null))});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9523__9524 = options;
var map__9523__9525 = ((cljs.core.seq_QMARK_(map__9523__9524))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__9523__9524):map__9523__9524);
var keywordize_keys__9526 = cljs.core._lookup.cljs$lang$arity$3(map__9523__9525,"\uFDD0'keywordize-keys",null);
var keyfn__9527 = (cljs.core.truth_(keywordize_keys__9526)?cljs.core.keyword:cljs.core.str);
var f__9542 = (function thisfn(x){
if(cljs.core.seq_QMARK_(x))
{return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.into(cljs.core.empty(x),cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if((cljs.core.type(x) === Object))
{return cljs.core.into(cljs.core.ObjMap.EMPTY,(function (){var iter__2089__auto____9541 = (function iter__9535(s__9536){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9536__9539 = s__9536;
while(true){
if(cljs.core.seq(s__9536__9539))
{var k__9540 = cljs.core.first(s__9536__9539);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([(keyfn__9527.cljs$lang$arity$1 ? keyfn__9527.cljs$lang$arity$1(k__9540) : keyfn__9527.call(null,k__9540)),thisfn((x[k__9540]))], true),iter__9535(cljs.core.rest(s__9536__9539)));
} else
{return null;
}
break;
}
}),null));
});
return (iter__2089__auto____9541.cljs$lang$arity$1 ? iter__2089__auto____9541.cljs$lang$arity$1(cljs.core.js_keys(x)) : iter__2089__auto____9541.call(null,cljs.core.js_keys(x)));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return (f__9542.cljs$lang$arity$1 ? f__9542.cljs$lang$arity$1(x) : f__9542.call(null,x));
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9543){
var x = cljs.core.first(arglist__9543);
var options = cljs.core.rest(arglist__9543);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9548 = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9552__delegate = function (args){
var temp__3971__auto____9549 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(mem__9548),args,null);
if(cljs.core.truth_(temp__3971__auto____9549))
{var v__9550 = temp__3971__auto____9549;
return v__9550;
} else
{var ret__9551 = cljs.core.apply.cljs$lang$arity$2(f,args);
cljs.core.swap_BANG_.cljs$lang$arity$4(mem__9548,cljs.core.assoc,args,ret__9551);
return ret__9551;
}
};
var G__9552 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9552__delegate.call(this, args);
};
G__9552.cljs$lang$maxFixedArity = 0;
G__9552.cljs$lang$applyTo = (function (arglist__9553){
var args = cljs.core.seq(arglist__9553);;
return G__9552__delegate(args);
});
G__9552.cljs$lang$arity$variadic = G__9552__delegate;
return G__9552;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9555 = (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret__9555))
{{
var G__9556 = ret__9555;
f = G__9556;
continue;
}
} else
{return ret__9555;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9557__delegate = function (f,args){
return trampoline.cljs$lang$arity$1((function (){
return cljs.core.apply.cljs$lang$arity$2(f,args);
}));
};
var G__9557 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9557__delegate.call(this, f, args);
};
G__9557.cljs$lang$maxFixedArity = 1;
G__9557.cljs$lang$applyTo = (function (arglist__9558){
var f = cljs.core.first(arglist__9558);
var args = cljs.core.rest(arglist__9558);
return G__9557__delegate(f, args);
});
G__9557.cljs$lang$arity$variadic = G__9557__delegate;
return G__9557;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$lang$arity$1(1);
});
var rand__1 = (function (n){
return ((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$lang$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var k__9560 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x));
return cljs.core.assoc.cljs$lang$arity$3(ret,k__9560,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(ret,k__9560,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.cljs$lang$arity$1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9569 = cljs.core._EQ_.cljs$lang$arity$2(child,parent);
if(or__3824__auto____9569)
{return or__3824__auto____9569;
} else
{var or__3824__auto____9570 = cljs.core.contains_QMARK_((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9570)
{return or__3824__auto____9570;
} else
{var and__3822__auto____9571 = cljs.core.vector_QMARK_(parent);
if(and__3822__auto____9571)
{var and__3822__auto____9572 = cljs.core.vector_QMARK_(child);
if(and__3822__auto____9572)
{var and__3822__auto____9573 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3822__auto____9573)
{var ret__9574 = true;
var i__9575 = 0;
while(true){
if((function (){var or__3824__auto____9576 = cljs.core.not(ret__9574);
if(or__3824__auto____9576)
{return or__3824__auto____9576;
} else
{return (i__9575 === cljs.core.count(parent));
}
})())
{return ret__9574;
} else
{{
var G__9577 = isa_QMARK_.cljs$lang$arity$3(h,(child.cljs$lang$arity$1 ? child.cljs$lang$arity$1(i__9575) : child.call(null,i__9575)),(parent.cljs$lang$arity$1 ? parent.cljs$lang$arity$1(i__9575) : parent.call(null,i__9575)));
var G__9578 = (i__9575 + 1);
ret__9574 = G__9577;
i__9575 = G__9578;
continue;
}
}
break;
}
} else
{return and__3822__auto____9573;
}
} else
{return and__3822__auto____9572;
}
} else
{return and__3822__auto____9571;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6732))], 0)))].join('')));
}
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$lang$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6736))], 0)))].join('')));
}
var tp__9587 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9588 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9589 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9590 = (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,k){
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core._lookup.cljs$lang$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$lang$arity$1 ? targets.cljs$lang$arity$1(target) : targets.call(null,target)))));
}),m,cljs.core.cons(source,(sources.cljs$lang$arity$1 ? sources.cljs$lang$arity$1(source) : sources.call(null,source))));
});
var or__3824__auto____9591 = ((cljs.core.contains_QMARK_((tp__9587.cljs$lang$arity$1 ? tp__9587.cljs$lang$arity$1(tag) : tp__9587.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta__9589.cljs$lang$arity$1 ? ta__9589.cljs$lang$arity$1(tag) : ta__9589.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta__9589.cljs$lang$arity$1 ? ta__9589.cljs$lang$arity$1(parent) : ta__9589.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(tp__9587,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":(tf__9590.cljs$lang$arity$5 ? tf__9590.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9588,parent,ta__9589) : tf__9590.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9588,parent,ta__9589)),"\uFDD0'descendants":(tf__9590.cljs$lang$arity$5 ? tf__9590.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9589,tag,td__9588) : tf__9590.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9589,tag,td__9588))});
})());
if(cljs.core.truth_(or__3824__auto____9591))
{return or__3824__auto____9591;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9596 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9597 = (cljs.core.truth_((parentMap__9596.cljs$lang$arity$1 ? parentMap__9596.cljs$lang$arity$1(tag) : parentMap__9596.call(null,tag)))?cljs.core.disj.cljs$lang$arity$2((parentMap__9596.cljs$lang$arity$1 ? parentMap__9596.cljs$lang$arity$1(tag) : parentMap__9596.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__9598 = (cljs.core.truth_(cljs.core.not_empty(childsParents__9597))?cljs.core.assoc.cljs$lang$arity$3(parentMap__9596,tag,childsParents__9597):cljs.core.dissoc.cljs$lang$arity$2(parentMap__9596,tag));
var deriv_seq__9599 = cljs.core.flatten(cljs.core.map.cljs$lang$arity$2((function (p1__9579_SHARP_){
return cljs.core.cons(cljs.core.first(p1__9579_SHARP_),cljs.core.interpose(cljs.core.first(p1__9579_SHARP_),cljs.core.second(p1__9579_SHARP_)));
}),cljs.core.seq(newParents__9598)));
if(cljs.core.contains_QMARK_((parentMap__9596.cljs$lang$arity$1 ? parentMap__9596.cljs$lang$arity$1(tag) : parentMap__9596.call(null,tag)),parent))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__9580_SHARP_,p2__9581_SHARP_){
return cljs.core.apply.cljs$lang$arity$3(cljs.core.derive,p1__9580_SHARP_,p2__9581_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$lang$arity$2(2,deriv_seq__9599));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$lang$arity$2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$lang$arity$2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9607 = cljs.core.deref(prefer_table).call(null,x);
var or__3824__auto____9609 = (cljs.core.truth_((function (){var and__3822__auto____9608 = xprefs__9607;
if(cljs.core.truth_(and__3822__auto____9608))
{return (xprefs__9607.cljs$lang$arity$1 ? xprefs__9607.cljs$lang$arity$1(y) : xprefs__9607.call(null,y));
} else
{return and__3822__auto____9608;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9609))
{return or__3824__auto____9609;
} else
{var or__3824__auto____9611 = (function (){var ps__9610 = cljs.core.parents.cljs$lang$arity$1(y);
while(true){
if((cljs.core.count(ps__9610) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps__9610),prefer_table)))
{} else
{}
{
var G__9614 = cljs.core.rest(ps__9610);
ps__9610 = G__9614;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9611))
{return or__3824__auto____9611;
} else
{var or__3824__auto____9613 = (function (){var ps__9612 = cljs.core.parents.cljs$lang$arity$1(x);
while(true){
if((cljs.core.count(ps__9612) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps__9612),y,prefer_table)))
{} else
{}
{
var G__9615 = cljs.core.rest(ps__9612);
ps__9612 = G__9615;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9613))
{return or__3824__auto____9613;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9617 = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9617))
{return or__3824__auto____9617;
} else
{return cljs.core.isa_QMARK_.cljs$lang$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9635 = cljs.core.reduce.cljs$lang$arity$3((function (be,p__9627){
var vec__9628__9629 = p__9627;
var k__9630 = cljs.core.nth.cljs$lang$arity$3(vec__9628__9629,0,null);
var ___9631 = cljs.core.nth.cljs$lang$arity$3(vec__9628__9629,1,null);
var e__9632 = vec__9628__9629;
if(cljs.core.isa_QMARK_.cljs$lang$arity$2(dispatch_val,k__9630))
{var be2__9634 = (cljs.core.truth_((function (){var or__3824__auto____9633 = (be == null);
if(or__3824__auto____9633)
{return or__3824__auto____9633;
} else
{return cljs.core.dominates(k__9630,cljs.core.first(be),prefer_table);
}
})())?e__9632:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__9634),k__9630,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9630),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2__9634)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9634;
} else
{return be;
}
}),null,cljs.core.deref(method_table));
if(cljs.core.truth_(best_entry__9635))
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$lang$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry__9635));
return cljs.core.second(best_entry__9635);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9640 = mf;
if(and__3822__auto____9640)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9640;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__1990__auto____9641 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9642 = (cljs.core._reset[goog.typeOf(x__1990__auto____9641)]);
if(or__3824__auto____9642)
{return or__3824__auto____9642;
} else
{var or__3824__auto____9643 = (cljs.core._reset["_"]);
if(or__3824__auto____9643)
{return or__3824__auto____9643;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9648 = mf;
if(and__3822__auto____9648)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9648;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__1990__auto____9649 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9650 = (cljs.core._add_method[goog.typeOf(x__1990__auto____9649)]);
if(or__3824__auto____9650)
{return or__3824__auto____9650;
} else
{var or__3824__auto____9651 = (cljs.core._add_method["_"]);
if(or__3824__auto____9651)
{return or__3824__auto____9651;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9656 = mf;
if(and__3822__auto____9656)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9656;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__1990__auto____9657 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9658 = (cljs.core._remove_method[goog.typeOf(x__1990__auto____9657)]);
if(or__3824__auto____9658)
{return or__3824__auto____9658;
} else
{var or__3824__auto____9659 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9659)
{return or__3824__auto____9659;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9664 = mf;
if(and__3822__auto____9664)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9664;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__1990__auto____9665 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9666 = (cljs.core._prefer_method[goog.typeOf(x__1990__auto____9665)]);
if(or__3824__auto____9666)
{return or__3824__auto____9666;
} else
{var or__3824__auto____9667 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9667)
{return or__3824__auto____9667;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9672 = mf;
if(and__3822__auto____9672)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9672;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__1990__auto____9673 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9674 = (cljs.core._get_method[goog.typeOf(x__1990__auto____9673)]);
if(or__3824__auto____9674)
{return or__3824__auto____9674;
} else
{var or__3824__auto____9675 = (cljs.core._get_method["_"]);
if(or__3824__auto____9675)
{return or__3824__auto____9675;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9680 = mf;
if(and__3822__auto____9680)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9680;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__1990__auto____9681 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9682 = (cljs.core._methods[goog.typeOf(x__1990__auto____9681)]);
if(or__3824__auto____9682)
{return or__3824__auto____9682;
} else
{var or__3824__auto____9683 = (cljs.core._methods["_"]);
if(or__3824__auto____9683)
{return or__3824__auto____9683;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9688 = mf;
if(and__3822__auto____9688)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9688;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__1990__auto____9689 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9690 = (cljs.core._prefers[goog.typeOf(x__1990__auto____9689)]);
if(or__3824__auto____9690)
{return or__3824__auto____9690;
} else
{var or__3824__auto____9691 = (cljs.core._prefers["_"]);
if(or__3824__auto____9691)
{return or__3824__auto____9691;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9696 = mf;
if(and__3822__auto____9696)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9696;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__1990__auto____9697 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____9698 = (cljs.core._dispatch[goog.typeOf(x__1990__auto____9697)]);
if(or__3824__auto____9698)
{return or__3824__auto____9698;
} else
{var or__3824__auto____9699 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9699)
{return or__3824__auto____9699;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9702 = cljs.core.apply.cljs$lang$arity$2(dispatch_fn,args);
var target_fn__9703 = cljs.core._get_method(mf,dispatch_val__9702);
if(cljs.core.truth_(target_fn__9703))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9702)].join('')));
}
return cljs.core.apply.cljs$lang$arity$2(target_fn__9703,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9704 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9705 = this;
cljs.core.swap_BANG_.cljs$lang$arity$2(this__9705.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__9705.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__9705.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__9705.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9706 = this;
cljs.core.swap_BANG_.cljs$lang$arity$4(this__9706.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(this__9706.method_cache,this__9706.method_table,this__9706.cached_hierarchy,this__9706.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9707 = this;
cljs.core.swap_BANG_.cljs$lang$arity$3(this__9707.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(this__9707.method_cache,this__9707.method_table,this__9707.cached_hierarchy,this__9707.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9708 = this;
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(this__9708.cached_hierarchy),cljs.core.deref(this__9708.hierarchy)))
{} else
{cljs.core.reset_cache(this__9708.method_cache,this__9708.method_table,this__9708.cached_hierarchy,this__9708.hierarchy);
}
var temp__3971__auto____9709 = cljs.core.deref(this__9708.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9709))
{var target_fn__9710 = temp__3971__auto____9709;
return target_fn__9710;
} else
{var temp__3971__auto____9711 = cljs.core.find_and_cache_best_method(this__9708.name,dispatch_val,this__9708.hierarchy,this__9708.method_table,this__9708.prefer_table,this__9708.method_cache,this__9708.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9711))
{var target_fn__9712 = temp__3971__auto____9711;
return target_fn__9712;
} else
{return cljs.core.deref(this__9708.method_table).call(null,this__9708.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9713 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,this__9713.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9713.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$lang$arity$2(this__9713.prefer_table,(function (old){
return cljs.core.assoc.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(this__9713.method_cache,this__9713.method_table,this__9713.cached_hierarchy,this__9713.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9714 = this;
return cljs.core.deref(this__9714.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9715 = this;
return cljs.core.deref(this__9715.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9716 = this;
return cljs.core.do_dispatch(mf,this__9716.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9718__delegate = function (_,args){
var self__9717 = this;
return cljs.core._dispatch(self__9717,args);
};
var G__9718 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9718__delegate.call(this, _, args);
};
G__9718.cljs$lang$maxFixedArity = 1;
G__9718.cljs$lang$applyTo = (function (arglist__9719){
var _ = cljs.core.first(arglist__9719);
var args = cljs.core.rest(arglist__9719);
return G__9718__delegate(_, args);
});
G__9718.cljs$lang$arity$variadic = G__9718__delegate;
return G__9718;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9720 = this;
return cljs.core._dispatch(self__9720,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__1936__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9721 = this;
return goog.string.hashCode(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9723,_){
var this__9722 = this;
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#uuid \""),cljs.core.str(this__9722.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9724 = this;
var and__3822__auto____9725 = cljs.core.instance_QMARK_(cljs.core.UUID,other);
if(and__3822__auto____9725)
{return (this__9724.uuid === other.uuid);
} else
{return and__3822__auto____9725;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__9726 = this;
var this__9727 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9727], 0));
});
cljs.core.UUID;

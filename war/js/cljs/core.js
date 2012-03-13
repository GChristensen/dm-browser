goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
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
var or__3548__auto____4837 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____4837))
{return or__3548__auto____4837;
} else
{var or__3548__auto____4838 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____4838))
{return or__3548__auto____4838;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__4902 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4839 = this$;

if(cljs.core.truth_(and__3546__auto____4839))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4839;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____4840 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4840))
{return or__3548__auto____4840;
} else
{var or__3548__auto____4841 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4841))
{return or__3548__auto____4841;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__4903 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____4842 = this$;

if(cljs.core.truth_(and__3546__auto____4842))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4842;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____4843 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4843))
{return or__3548__auto____4843;
} else
{var or__3548__auto____4844 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4844))
{return or__3548__auto____4844;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__4904 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____4845 = this$;

if(cljs.core.truth_(and__3546__auto____4845))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4845;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____4846 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4846))
{return or__3548__auto____4846;
} else
{var or__3548__auto____4847 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4847))
{return or__3548__auto____4847;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4905 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____4848 = this$;

if(cljs.core.truth_(and__3546__auto____4848))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4848;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____4849 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4849))
{return or__3548__auto____4849;
} else
{var or__3548__auto____4850 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4850))
{return or__3548__auto____4850;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__4906 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____4851 = this$;

if(cljs.core.truth_(and__3546__auto____4851))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4851;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____4852 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4852))
{return or__3548__auto____4852;
} else
{var or__3548__auto____4853 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4853))
{return or__3548__auto____4853;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__4907 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____4854 = this$;

if(cljs.core.truth_(and__3546__auto____4854))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4854;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____4855 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4855))
{return or__3548__auto____4855;
} else
{var or__3548__auto____4856 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4856))
{return or__3548__auto____4856;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__4908 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____4857 = this$;

if(cljs.core.truth_(and__3546__auto____4857))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4857;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____4858 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4858))
{return or__3548__auto____4858;
} else
{var or__3548__auto____4859 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4859))
{return or__3548__auto____4859;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__4909 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____4860 = this$;

if(cljs.core.truth_(and__3546__auto____4860))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4860;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____4861 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4861))
{return or__3548__auto____4861;
} else
{var or__3548__auto____4862 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4862))
{return or__3548__auto____4862;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__4910 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____4863 = this$;

if(cljs.core.truth_(and__3546__auto____4863))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4863;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____4864 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4864))
{return or__3548__auto____4864;
} else
{var or__3548__auto____4865 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4865))
{return or__3548__auto____4865;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__4911 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____4866 = this$;

if(cljs.core.truth_(and__3546__auto____4866))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4866;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____4867 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4867))
{return or__3548__auto____4867;
} else
{var or__3548__auto____4868 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4868))
{return or__3548__auto____4868;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__4912 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____4869 = this$;

if(cljs.core.truth_(and__3546__auto____4869))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4869;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____4870 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4870))
{return or__3548__auto____4870;
} else
{var or__3548__auto____4871 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4871))
{return or__3548__auto____4871;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__4913 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____4872 = this$;

if(cljs.core.truth_(and__3546__auto____4872))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4872;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____4873 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4873))
{return or__3548__auto____4873;
} else
{var or__3548__auto____4874 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4874))
{return or__3548__auto____4874;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__4914 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____4875 = this$;

if(cljs.core.truth_(and__3546__auto____4875))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4875;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____4876 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4876))
{return or__3548__auto____4876;
} else
{var or__3548__auto____4877 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4877))
{return or__3548__auto____4877;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__4915 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____4878 = this$;

if(cljs.core.truth_(and__3546__auto____4878))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4878;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____4879 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4879))
{return or__3548__auto____4879;
} else
{var or__3548__auto____4880 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4880))
{return or__3548__auto____4880;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__4916 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____4881 = this$;

if(cljs.core.truth_(and__3546__auto____4881))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4881;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____4882 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4882))
{return or__3548__auto____4882;
} else
{var or__3548__auto____4883 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4883))
{return or__3548__auto____4883;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__4917 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____4884 = this$;

if(cljs.core.truth_(and__3546__auto____4884))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4884;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____4885 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4885))
{return or__3548__auto____4885;
} else
{var or__3548__auto____4886 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4886))
{return or__3548__auto____4886;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__4918 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____4887 = this$;

if(cljs.core.truth_(and__3546__auto____4887))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4887;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____4888 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4888))
{return or__3548__auto____4888;
} else
{var or__3548__auto____4889 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4889))
{return or__3548__auto____4889;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__4919 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____4890 = this$;

if(cljs.core.truth_(and__3546__auto____4890))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4890;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____4891 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4891))
{return or__3548__auto____4891;
} else
{var or__3548__auto____4892 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4892))
{return or__3548__auto____4892;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__4920 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____4893 = this$;

if(cljs.core.truth_(and__3546__auto____4893))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4893;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____4894 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4894))
{return or__3548__auto____4894;
} else
{var or__3548__auto____4895 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4895))
{return or__3548__auto____4895;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__4921 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____4896 = this$;

if(cljs.core.truth_(and__3546__auto____4896))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4896;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____4897 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4897))
{return or__3548__auto____4897;
} else
{var or__3548__auto____4898 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4898))
{return or__3548__auto____4898;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__4922 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____4899 = this$;

if(cljs.core.truth_(and__3546__auto____4899))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____4899;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____4900 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4900))
{return or__3548__auto____4900;
} else
{var or__3548__auto____4901 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4901))
{return or__3548__auto____4901;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__4902.call(this,this$);
case  2 :
return _invoke__4903.call(this,this$,a);
case  3 :
return _invoke__4904.call(this,this$,a,b);
case  4 :
return _invoke__4905.call(this,this$,a,b,c);
case  5 :
return _invoke__4906.call(this,this$,a,b,c,d);
case  6 :
return _invoke__4907.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__4908.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__4909.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__4910.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__4911.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__4912.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__4913.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__4914.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__4915.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__4916.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__4917.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__4918.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__4919.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__4920.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__4921.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__4922.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____4924 = coll;

if(cljs.core.truth_(and__3546__auto____4924))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____4924;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____4925 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4925))
{return or__3548__auto____4925;
} else
{var or__3548__auto____4926 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____4926))
{return or__3548__auto____4926;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____4927 = coll;

if(cljs.core.truth_(and__3546__auto____4927))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____4927;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____4928 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4928))
{return or__3548__auto____4928;
} else
{var or__3548__auto____4929 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____4929))
{return or__3548__auto____4929;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____4930 = coll;

if(cljs.core.truth_(and__3546__auto____4930))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____4930;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____4931 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4931))
{return or__3548__auto____4931;
} else
{var or__3548__auto____4932 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____4932))
{return or__3548__auto____4932;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__4939 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____4933 = coll;

if(cljs.core.truth_(and__3546__auto____4933))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____4933;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____4934 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4934))
{return or__3548__auto____4934;
} else
{var or__3548__auto____4935 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____4935))
{return or__3548__auto____4935;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__4940 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____4936 = coll;

if(cljs.core.truth_(and__3546__auto____4936))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____4936;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____4937 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4937))
{return or__3548__auto____4937;
} else
{var or__3548__auto____4938 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____4938))
{return or__3548__auto____4938;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__4939.call(this,coll,n);
case  3 :
return _nth__4940.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____4942 = coll;

if(cljs.core.truth_(and__3546__auto____4942))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____4942;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____4943 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4943))
{return or__3548__auto____4943;
} else
{var or__3548__auto____4944 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____4944))
{return or__3548__auto____4944;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____4945 = coll;

if(cljs.core.truth_(and__3546__auto____4945))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____4945;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____4946 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4946))
{return or__3548__auto____4946;
} else
{var or__3548__auto____4947 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____4947))
{return or__3548__auto____4947;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__4954 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____4948 = o;

if(cljs.core.truth_(and__3546__auto____4948))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____4948;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____4949 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____4949))
{return or__3548__auto____4949;
} else
{var or__3548__auto____4950 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____4950))
{return or__3548__auto____4950;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__4955 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____4951 = o;

if(cljs.core.truth_(and__3546__auto____4951))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____4951;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____4952 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____4952))
{return or__3548__auto____4952;
} else
{var or__3548__auto____4953 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____4953))
{return or__3548__auto____4953;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__4954.call(this,o,k);
case  3 :
return _lookup__4955.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____4957 = coll;

if(cljs.core.truth_(and__3546__auto____4957))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____4957;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____4958 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4958))
{return or__3548__auto____4958;
} else
{var or__3548__auto____4959 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____4959))
{return or__3548__auto____4959;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____4960 = coll;

if(cljs.core.truth_(and__3546__auto____4960))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____4960;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____4961 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4961))
{return or__3548__auto____4961;
} else
{var or__3548__auto____4962 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____4962))
{return or__3548__auto____4962;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____4963 = coll;

if(cljs.core.truth_(and__3546__auto____4963))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____4963;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____4964 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4964))
{return or__3548__auto____4964;
} else
{var or__3548__auto____4965 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____4965))
{return or__3548__auto____4965;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____4966 = coll;

if(cljs.core.truth_(and__3546__auto____4966))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____4966;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____4967 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4967))
{return or__3548__auto____4967;
} else
{var or__3548__auto____4968 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____4968))
{return or__3548__auto____4968;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____4969 = coll;

if(cljs.core.truth_(and__3546__auto____4969))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____4969;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____4970 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4970))
{return or__3548__auto____4970;
} else
{var or__3548__auto____4971 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____4971))
{return or__3548__auto____4971;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____4972 = coll;

if(cljs.core.truth_(and__3546__auto____4972))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____4972;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____4973 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4973))
{return or__3548__auto____4973;
} else
{var or__3548__auto____4974 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____4974))
{return or__3548__auto____4974;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____4975 = coll;

if(cljs.core.truth_(and__3546__auto____4975))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____4975;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____4976 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4976))
{return or__3548__auto____4976;
} else
{var or__3548__auto____4977 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____4977))
{return or__3548__auto____4977;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____4978 = o;

if(cljs.core.truth_(and__3546__auto____4978))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____4978;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____4979 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____4979))
{return or__3548__auto____4979;
} else
{var or__3548__auto____4980 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____4980))
{return or__3548__auto____4980;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____4981 = o;

if(cljs.core.truth_(and__3546__auto____4981))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____4981;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____4982 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____4982))
{return or__3548__auto____4982;
} else
{var or__3548__auto____4983 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____4983))
{return or__3548__auto____4983;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____4984 = o;

if(cljs.core.truth_(and__3546__auto____4984))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____4984;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____4985 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____4985))
{return or__3548__auto____4985;
} else
{var or__3548__auto____4986 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____4986))
{return or__3548__auto____4986;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____4987 = o;

if(cljs.core.truth_(and__3546__auto____4987))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____4987;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____4988 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____4988))
{return or__3548__auto____4988;
} else
{var or__3548__auto____4989 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____4989))
{return or__3548__auto____4989;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__4996 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____4990 = coll;

if(cljs.core.truth_(and__3546__auto____4990))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____4990;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____4991 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4991))
{return or__3548__auto____4991;
} else
{var or__3548__auto____4992 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____4992))
{return or__3548__auto____4992;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__4997 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____4993 = coll;

if(cljs.core.truth_(and__3546__auto____4993))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____4993;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____4994 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____4994))
{return or__3548__auto____4994;
} else
{var or__3548__auto____4995 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____4995))
{return or__3548__auto____4995;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__4996.call(this,coll,f);
case  3 :
return _reduce__4997.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____4999 = o;

if(cljs.core.truth_(and__3546__auto____4999))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____4999;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____5000 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5000))
{return or__3548__auto____5000;
} else
{var or__3548__auto____5001 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____5001))
{return or__3548__auto____5001;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____5002 = o;

if(cljs.core.truth_(and__3546__auto____5002))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____5002;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____5003 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5003))
{return or__3548__auto____5003;
} else
{var or__3548__auto____5004 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____5004))
{return or__3548__auto____5004;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____5005 = o;

if(cljs.core.truth_(and__3546__auto____5005))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____5005;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____5006 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5006))
{return or__3548__auto____5006;
} else
{var or__3548__auto____5007 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____5007))
{return or__3548__auto____5007;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____5008 = o;

if(cljs.core.truth_(and__3546__auto____5008))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____5008;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____5009 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____5009))
{return or__3548__auto____5009;
} else
{var or__3548__auto____5010 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____5010))
{return or__3548__auto____5010;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____5011 = d;

if(cljs.core.truth_(and__3546__auto____5011))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____5011;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____5012 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____5012))
{return or__3548__auto____5012;
} else
{var or__3548__auto____5013 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____5013))
{return or__3548__auto____5013;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____5014 = this$;

if(cljs.core.truth_(and__3546__auto____5014))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____5014;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____5015 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5015))
{return or__3548__auto____5015;
} else
{var or__3548__auto____5016 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____5016))
{return or__3548__auto____5016;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____5017 = this$;

if(cljs.core.truth_(and__3546__auto____5017))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____5017;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____5018 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5018))
{return or__3548__auto____5018;
} else
{var or__3548__auto____5019 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5019))
{return or__3548__auto____5019;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____5020 = this$;

if(cljs.core.truth_(and__3546__auto____5020))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____5020;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____5021 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5021))
{return or__3548__auto____5021;
} else
{var or__3548__auto____5022 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____5022))
{return or__3548__auto____5022;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
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
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__5023 = null;
var G__5023__5024 = (function (o,k){
return null;
});
var G__5023__5025 = (function (o,k,not_found){
return not_found;
});
G__5023 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5023__5024.call(this,o,k);
case  3 :
return G__5023__5025.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5023;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__5027 = null;
var G__5027__5028 = (function (_,f){
return f.call(null);
});
var G__5027__5029 = (function (_,f,start){
return start;
});
G__5027 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5027__5028.call(this,_,f);
case  3 :
return G__5027__5029.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5027;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
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
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
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
var G__5031 = null;
var G__5031__5032 = (function (_,n){
return null;
});
var G__5031__5033 = (function (_,n,not_found){
return not_found;
});
G__5031 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5031__5032.call(this,_,n);
case  3 :
return G__5031__5033.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5031;
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
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
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
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
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
var ci_reduce__5041 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5035 = cljs.core._nth.call(null,cicoll,0);
var n__5036 = 1;

while(true){
if(cljs.core.truth_((n__5036 < cljs.core._count.call(null,cicoll))))
{{
var G__5045 = f.call(null,val__5035,cljs.core._nth.call(null,cicoll,n__5036));
var G__5046 = (n__5036 + 1);
val__5035 = G__5045;
n__5036 = G__5046;
continue;
}
} else
{return val__5035;
}
break;
}
}
});
var ci_reduce__5042 = (function (cicoll,f,val){
var val__5037 = val;
var n__5038 = 0;

while(true){
if(cljs.core.truth_((n__5038 < cljs.core._count.call(null,cicoll))))
{{
var G__5047 = f.call(null,val__5037,cljs.core._nth.call(null,cicoll,n__5038));
var G__5048 = (n__5038 + 1);
val__5037 = G__5047;
n__5038 = G__5048;
continue;
}
} else
{return val__5037;
}
break;
}
});
var ci_reduce__5043 = (function (cicoll,f,val,idx){
var val__5039 = val;
var n__5040 = idx;

while(true){
if(cljs.core.truth_((n__5040 < cljs.core._count.call(null,cicoll))))
{{
var G__5049 = f.call(null,val__5039,cljs.core._nth.call(null,cicoll,n__5040));
var G__5050 = (n__5040 + 1);
val__5039 = G__5049;
n__5040 = G__5050;
continue;
}
} else
{return val__5039;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5041.call(this,cicoll,f);
case  3 :
return ci_reduce__5042.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5043.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5051 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5064 = null;
var G__5064__5065 = (function (_,f){
var this__5052 = this;
return cljs.core.ci_reduce.call(null,this__5052.a,f,(this__5052.a[this__5052.i]),(this__5052.i + 1));
});
var G__5064__5066 = (function (_,f,start){
var this__5053 = this;
return cljs.core.ci_reduce.call(null,this__5053.a,f,start,this__5053.i);
});
G__5064 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5064__5065.call(this,_,f);
case  3 :
return G__5064__5066.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5064;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5054 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5055 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5068 = null;
var G__5068__5069 = (function (coll,n){
var this__5056 = this;
var i__5057 = (n + this__5056.i);

if(cljs.core.truth_((i__5057 < this__5056.a.length)))
{return (this__5056.a[i__5057]);
} else
{return null;
}
});
var G__5068__5070 = (function (coll,n,not_found){
var this__5058 = this;
var i__5059 = (n + this__5058.i);

if(cljs.core.truth_((i__5059 < this__5058.a.length)))
{return (this__5058.a[i__5059]);
} else
{return not_found;
}
});
G__5068 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5068__5069.call(this,coll,n);
case  3 :
return G__5068__5070.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5068;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__5060 = this;
return (this__5060.a.length - this__5060.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5061 = this;
return (this__5061.a[this__5061.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5062 = this;
if(cljs.core.truth_(((this__5062.i + 1) < this__5062.a.length)))
{return (new cljs.core.IndexedSeq(this__5062.a,(this__5062.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5063 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__5072 = null;
var G__5072__5073 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5072__5074 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5072 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5072__5073.call(this,array,f);
case  3 :
return G__5072__5074.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5072;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5076 = null;
var G__5076__5077 = (function (array,k){
return (array[k]);
});
var G__5076__5078 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5076 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5076__5077.call(this,array,k);
case  3 :
return G__5076__5078.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5076;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5080 = null;
var G__5080__5081 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5080__5082 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5080 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5080__5081.call(this,array,n);
case  3 :
return G__5080__5082.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5080;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____5084 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5084))
{var s__5085 = temp__3698__auto____5084;

return cljs.core._first.call(null,s__5085);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__5086 = cljs.core.next.call(null,s);
s = G__5086;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__5087 = cljs.core.seq.call(null,x);
var n__5088 = 0;

while(true){
if(cljs.core.truth_(s__5087))
{{
var G__5089 = cljs.core.next.call(null,s__5087);
var G__5090 = (n__5088 + 1);
s__5087 = G__5089;
n__5088 = G__5090;
continue;
}
} else
{return n__5088;
}
break;
}
}));
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
var conj__5091 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5092 = (function() { 
var G__5094__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5095 = conj.call(null,coll,x);
var G__5096 = cljs.core.first.call(null,xs);
var G__5097 = cljs.core.next.call(null,xs);
coll = G__5095;
x = G__5096;
xs = G__5097;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5094 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5094__delegate.call(this, coll, x, xs);
};
G__5094.cljs$lang$maxFixedArity = 2;
G__5094.cljs$lang$applyTo = (function (arglist__5098){
var coll = cljs.core.first(arglist__5098);
var x = cljs.core.first(cljs.core.next(arglist__5098));
var xs = cljs.core.rest(cljs.core.next(arglist__5098));
return G__5094__delegate.call(this, coll, x, xs);
});
return G__5094;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5091.call(this,coll,x);
default:
return conj__5092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5092.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__5099 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__5100 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5099.call(this,coll,n);
case  3 :
return nth__5100.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__5102 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5103 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5102.call(this,o,k);
case  3 :
return get__5103.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
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
var assoc__5106 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5107 = (function() { 
var G__5109__delegate = function (coll,k,v,kvs){
while(true){
var ret__5105 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5110 = ret__5105;
var G__5111 = cljs.core.first.call(null,kvs);
var G__5112 = cljs.core.second.call(null,kvs);
var G__5113 = cljs.core.nnext.call(null,kvs);
coll = G__5110;
k = G__5111;
v = G__5112;
kvs = G__5113;
continue;
}
} else
{return ret__5105;
}
break;
}
};
var G__5109 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5109__delegate.call(this, coll, k, v, kvs);
};
G__5109.cljs$lang$maxFixedArity = 3;
G__5109.cljs$lang$applyTo = (function (arglist__5114){
var coll = cljs.core.first(arglist__5114);
var k = cljs.core.first(cljs.core.next(arglist__5114));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5114)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5114)));
return G__5109__delegate.call(this, coll, k, v, kvs);
});
return G__5109;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5106.call(this,coll,k,v);
default:
return assoc__5107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5107.cljs$lang$applyTo;
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
var dissoc__5116 = (function (coll){
return coll;
});
var dissoc__5117 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5118 = (function() { 
var G__5120__delegate = function (coll,k,ks){
while(true){
var ret__5115 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5121 = ret__5115;
var G__5122 = cljs.core.first.call(null,ks);
var G__5123 = cljs.core.next.call(null,ks);
coll = G__5121;
k = G__5122;
ks = G__5123;
continue;
}
} else
{return ret__5115;
}
break;
}
};
var G__5120 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5120__delegate.call(this, coll, k, ks);
};
G__5120.cljs$lang$maxFixedArity = 2;
G__5120.cljs$lang$applyTo = (function (arglist__5124){
var coll = cljs.core.first(arglist__5124);
var k = cljs.core.first(cljs.core.next(arglist__5124));
var ks = cljs.core.rest(cljs.core.next(arglist__5124));
return G__5120__delegate.call(this, coll, k, ks);
});
return G__5120;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5116.call(this,coll);
case  2 :
return dissoc__5117.call(this,coll,k);
default:
return dissoc__5118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5118.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__349__auto____5125 = o;

if(cljs.core.truth_((function (){var and__3546__auto____5126 = x__349__auto____5125;

if(cljs.core.truth_(and__3546__auto____5126))
{var and__3546__auto____5127 = x__349__auto____5125.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____5127))
{return cljs.core.not.call(null,x__349__auto____5125.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____5127;
}
} else
{return and__3546__auto____5126;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__349__auto____5125);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__5129 = (function (coll){
return coll;
});
var disj__5130 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5131 = (function() { 
var G__5133__delegate = function (coll,k,ks){
while(true){
var ret__5128 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5134 = ret__5128;
var G__5135 = cljs.core.first.call(null,ks);
var G__5136 = cljs.core.next.call(null,ks);
coll = G__5134;
k = G__5135;
ks = G__5136;
continue;
}
} else
{return ret__5128;
}
break;
}
};
var G__5133 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5133__delegate.call(this, coll, k, ks);
};
G__5133.cljs$lang$maxFixedArity = 2;
G__5133.cljs$lang$applyTo = (function (arglist__5137){
var coll = cljs.core.first(arglist__5137);
var k = cljs.core.first(cljs.core.next(arglist__5137));
var ks = cljs.core.rest(cljs.core.next(arglist__5137));
return G__5133__delegate.call(this, coll, k, ks);
});
return G__5133;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5129.call(this,coll);
case  2 :
return disj__5130.call(this,coll,k);
default:
return disj__5131.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5131.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__349__auto____5138 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5139 = x__349__auto____5138;

if(cljs.core.truth_(and__3546__auto____5139))
{var and__3546__auto____5140 = x__349__auto____5138.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____5140))
{return cljs.core.not.call(null,x__349__auto____5138.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____5140;
}
} else
{return and__3546__auto____5139;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__349__auto____5138);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__349__auto____5141 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5142 = x__349__auto____5141;

if(cljs.core.truth_(and__3546__auto____5142))
{var and__3546__auto____5143 = x__349__auto____5141.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____5143))
{return cljs.core.not.call(null,x__349__auto____5141.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____5143;
}
} else
{return and__3546__auto____5142;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__349__auto____5141);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__349__auto____5144 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5145 = x__349__auto____5144;

if(cljs.core.truth_(and__3546__auto____5145))
{var and__3546__auto____5146 = x__349__auto____5144.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____5146))
{return cljs.core.not.call(null,x__349__auto____5144.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____5146;
}
} else
{return and__3546__auto____5145;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__349__auto____5144);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__349__auto____5147 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5148 = x__349__auto____5147;

if(cljs.core.truth_(and__3546__auto____5148))
{var and__3546__auto____5149 = x__349__auto____5147.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____5149))
{return cljs.core.not.call(null,x__349__auto____5147.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____5149;
}
} else
{return and__3546__auto____5148;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__349__auto____5147);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__349__auto____5150 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5151 = x__349__auto____5150;

if(cljs.core.truth_(and__3546__auto____5151))
{var and__3546__auto____5152 = x__349__auto____5150.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____5152))
{return cljs.core.not.call(null,x__349__auto____5150.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____5152;
}
} else
{return and__3546__auto____5151;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__349__auto____5150);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__349__auto____5153 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5154 = x__349__auto____5153;

if(cljs.core.truth_(and__3546__auto____5154))
{var and__3546__auto____5155 = x__349__auto____5153.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____5155))
{return cljs.core.not.call(null,x__349__auto____5153.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____5155;
}
} else
{return and__3546__auto____5154;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__349__auto____5153);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__349__auto____5156 = x;

if(cljs.core.truth_((function (){var and__3546__auto____5157 = x__349__auto____5156;

if(cljs.core.truth_(and__3546__auto____5157))
{var and__3546__auto____5158 = x__349__auto____5156.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____5158))
{return cljs.core.not.call(null,x__349__auto____5156.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____5158;
}
} else
{return and__3546__auto____5157;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__349__auto____5156);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5159 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5159.push(key);
}));
return keys__5159;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
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
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__349__auto____5160 = s;

if(cljs.core.truth_((function (){var and__3546__auto____5161 = x__349__auto____5160;

if(cljs.core.truth_(and__3546__auto____5161))
{var and__3546__auto____5162 = x__349__auto____5160.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____5162))
{return cljs.core.not.call(null,x__349__auto____5160.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____5162;
}
} else
{return and__3546__auto____5161;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__349__auto____5160);
}
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
var and__3546__auto____5163 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5163))
{return cljs.core.not.call(null,(function (){var or__3548__auto____5164 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____5164))
{return or__3548__auto____5164;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____5163;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____5165 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5165))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____5165;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____5166 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____5166))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____5166;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____5167 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____5167))
{return (n == n.toFixed());
} else
{return and__3546__auto____5167;
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
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____5168 = coll;

if(cljs.core.truth_(and__3546__auto____5168))
{var and__3546__auto____5169 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____5169))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____5169;
}
} else
{return and__3546__auto____5168;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___5174 = (function (x){
return true;
});
var distinct_QMARK___5175 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5176 = (function() { 
var G__5178__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5170 = cljs.core.set([y,x]);
var xs__5171 = more;

while(true){
var x__5172 = cljs.core.first.call(null,xs__5171);
var etc__5173 = cljs.core.next.call(null,xs__5171);

if(cljs.core.truth_(xs__5171))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5170,x__5172)))
{return false;
} else
{{
var G__5179 = cljs.core.conj.call(null,s__5170,x__5172);
var G__5180 = etc__5173;
s__5170 = G__5179;
xs__5171 = G__5180;
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
var G__5178 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5178__delegate.call(this, x, y, more);
};
G__5178.cljs$lang$maxFixedArity = 2;
G__5178.cljs$lang$applyTo = (function (arglist__5181){
var x = cljs.core.first(arglist__5181);
var y = cljs.core.first(cljs.core.next(arglist__5181));
var more = cljs.core.rest(cljs.core.next(arglist__5181));
return G__5178__delegate.call(this, x, y, more);
});
return G__5178;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5174.call(this,x);
case  2 :
return distinct_QMARK___5175.call(this,x,y);
default:
return distinct_QMARK___5176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5176.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__5182 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__5182)))
{return r__5182;
} else
{if(cljs.core.truth_(r__5182))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
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
var sort__5184 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__5185 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__5183 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__5183,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5183);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__5184.call(this,comp);
case  2 :
return sort__5185.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var sort_by__5187 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__5188 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__5187.call(this,keyfn,comp);
case  3 :
return sort_by__5188.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
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
var reduce__5190 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__5191 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__5190.call(this,f,val);
case  3 :
return reduce__5191.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__5197 = (function (f,coll){
var temp__3695__auto____5193 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____5193))
{var s__5194 = temp__3695__auto____5193;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5194),cljs.core.next.call(null,s__5194));
} else
{return f.call(null);
}
});
var seq_reduce__5198 = (function (f,val,coll){
var val__5195 = val;
var coll__5196 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__5196))
{{
var G__5200 = f.call(null,val__5195,cljs.core.first.call(null,coll__5196));
var G__5201 = cljs.core.next.call(null,coll__5196);
val__5195 = G__5200;
coll__5196 = G__5201;
continue;
}
} else
{return val__5195;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__5197.call(this,f,val);
case  3 :
return seq_reduce__5198.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__5202 = null;
var G__5202__5203 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__5202__5204 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__5202 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5202__5203.call(this,coll,f);
case  3 :
return G__5202__5204.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5202;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___5206 = (function (){
return 0;
});
var _PLUS___5207 = (function (x){
return x;
});
var _PLUS___5208 = (function (x,y){
return (x + y);
});
var _PLUS___5209 = (function() { 
var G__5211__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__5211 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5211__delegate.call(this, x, y, more);
};
G__5211.cljs$lang$maxFixedArity = 2;
G__5211.cljs$lang$applyTo = (function (arglist__5212){
var x = cljs.core.first(arglist__5212);
var y = cljs.core.first(cljs.core.next(arglist__5212));
var more = cljs.core.rest(cljs.core.next(arglist__5212));
return G__5211__delegate.call(this, x, y, more);
});
return G__5211;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___5206.call(this);
case  1 :
return _PLUS___5207.call(this,x);
case  2 :
return _PLUS___5208.call(this,x,y);
default:
return _PLUS___5209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___5209.cljs$lang$applyTo;
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
var ___5213 = (function (x){
return (- x);
});
var ___5214 = (function (x,y){
return (x - y);
});
var ___5215 = (function() { 
var G__5217__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__5217 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5217__delegate.call(this, x, y, more);
};
G__5217.cljs$lang$maxFixedArity = 2;
G__5217.cljs$lang$applyTo = (function (arglist__5218){
var x = cljs.core.first(arglist__5218);
var y = cljs.core.first(cljs.core.next(arglist__5218));
var more = cljs.core.rest(cljs.core.next(arglist__5218));
return G__5217__delegate.call(this, x, y, more);
});
return G__5217;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___5213.call(this,x);
case  2 :
return ___5214.call(this,x,y);
default:
return ___5215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___5215.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___5219 = (function (){
return 1;
});
var _STAR___5220 = (function (x){
return x;
});
var _STAR___5221 = (function (x,y){
return (x * y);
});
var _STAR___5222 = (function() { 
var G__5224__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__5224 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5224__delegate.call(this, x, y, more);
};
G__5224.cljs$lang$maxFixedArity = 2;
G__5224.cljs$lang$applyTo = (function (arglist__5225){
var x = cljs.core.first(arglist__5225);
var y = cljs.core.first(cljs.core.next(arglist__5225));
var more = cljs.core.rest(cljs.core.next(arglist__5225));
return G__5224__delegate.call(this, x, y, more);
});
return G__5224;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___5219.call(this);
case  1 :
return _STAR___5220.call(this,x);
case  2 :
return _STAR___5221.call(this,x,y);
default:
return _STAR___5222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___5222.cljs$lang$applyTo;
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
var _SLASH___5226 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___5227 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___5228 = (function() { 
var G__5230__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5230 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5230__delegate.call(this, x, y, more);
};
G__5230.cljs$lang$maxFixedArity = 2;
G__5230.cljs$lang$applyTo = (function (arglist__5231){
var x = cljs.core.first(arglist__5231);
var y = cljs.core.first(cljs.core.next(arglist__5231));
var more = cljs.core.rest(cljs.core.next(arglist__5231));
return G__5230__delegate.call(this, x, y, more);
});
return G__5230;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___5226.call(this,x);
case  2 :
return _SLASH___5227.call(this,x,y);
default:
return _SLASH___5228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___5228.cljs$lang$applyTo;
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
var _LT___5232 = (function (x){
return true;
});
var _LT___5233 = (function (x,y){
return (x < y);
});
var _LT___5234 = (function() { 
var G__5236__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5237 = y;
var G__5238 = cljs.core.first.call(null,more);
var G__5239 = cljs.core.next.call(null,more);
x = G__5237;
y = G__5238;
more = G__5239;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5236 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5236__delegate.call(this, x, y, more);
};
G__5236.cljs$lang$maxFixedArity = 2;
G__5236.cljs$lang$applyTo = (function (arglist__5240){
var x = cljs.core.first(arglist__5240);
var y = cljs.core.first(cljs.core.next(arglist__5240));
var more = cljs.core.rest(cljs.core.next(arglist__5240));
return G__5236__delegate.call(this, x, y, more);
});
return G__5236;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___5232.call(this,x);
case  2 :
return _LT___5233.call(this,x,y);
default:
return _LT___5234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___5234.cljs$lang$applyTo;
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
var _LT__EQ___5241 = (function (x){
return true;
});
var _LT__EQ___5242 = (function (x,y){
return (x <= y);
});
var _LT__EQ___5243 = (function() { 
var G__5245__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5246 = y;
var G__5247 = cljs.core.first.call(null,more);
var G__5248 = cljs.core.next.call(null,more);
x = G__5246;
y = G__5247;
more = G__5248;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5245__delegate.call(this, x, y, more);
};
G__5245.cljs$lang$maxFixedArity = 2;
G__5245.cljs$lang$applyTo = (function (arglist__5249){
var x = cljs.core.first(arglist__5249);
var y = cljs.core.first(cljs.core.next(arglist__5249));
var more = cljs.core.rest(cljs.core.next(arglist__5249));
return G__5245__delegate.call(this, x, y, more);
});
return G__5245;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___5241.call(this,x);
case  2 :
return _LT__EQ___5242.call(this,x,y);
default:
return _LT__EQ___5243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___5243.cljs$lang$applyTo;
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
var _GT___5250 = (function (x){
return true;
});
var _GT___5251 = (function (x,y){
return (x > y);
});
var _GT___5252 = (function() { 
var G__5254__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5255 = y;
var G__5256 = cljs.core.first.call(null,more);
var G__5257 = cljs.core.next.call(null,more);
x = G__5255;
y = G__5256;
more = G__5257;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5254 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5254__delegate.call(this, x, y, more);
};
G__5254.cljs$lang$maxFixedArity = 2;
G__5254.cljs$lang$applyTo = (function (arglist__5258){
var x = cljs.core.first(arglist__5258);
var y = cljs.core.first(cljs.core.next(arglist__5258));
var more = cljs.core.rest(cljs.core.next(arglist__5258));
return G__5254__delegate.call(this, x, y, more);
});
return G__5254;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___5250.call(this,x);
case  2 :
return _GT___5251.call(this,x,y);
default:
return _GT___5252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___5252.cljs$lang$applyTo;
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
var _GT__EQ___5259 = (function (x){
return true;
});
var _GT__EQ___5260 = (function (x,y){
return (x >= y);
});
var _GT__EQ___5261 = (function() { 
var G__5263__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5264 = y;
var G__5265 = cljs.core.first.call(null,more);
var G__5266 = cljs.core.next.call(null,more);
x = G__5264;
y = G__5265;
more = G__5266;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5263__delegate.call(this, x, y, more);
};
G__5263.cljs$lang$maxFixedArity = 2;
G__5263.cljs$lang$applyTo = (function (arglist__5267){
var x = cljs.core.first(arglist__5267);
var y = cljs.core.first(cljs.core.next(arglist__5267));
var more = cljs.core.rest(cljs.core.next(arglist__5267));
return G__5263__delegate.call(this, x, y, more);
});
return G__5263;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___5259.call(this,x);
case  2 :
return _GT__EQ___5260.call(this,x,y);
default:
return _GT__EQ___5261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___5261.cljs$lang$applyTo;
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
var max__5268 = (function (x){
return x;
});
var max__5269 = (function (x,y){
return ((x > y) ? x : y);
});
var max__5270 = (function() { 
var G__5272__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__5272 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5272__delegate.call(this, x, y, more);
};
G__5272.cljs$lang$maxFixedArity = 2;
G__5272.cljs$lang$applyTo = (function (arglist__5273){
var x = cljs.core.first(arglist__5273);
var y = cljs.core.first(cljs.core.next(arglist__5273));
var more = cljs.core.rest(cljs.core.next(arglist__5273));
return G__5272__delegate.call(this, x, y, more);
});
return G__5272;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__5268.call(this,x);
case  2 :
return max__5269.call(this,x,y);
default:
return max__5270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__5270.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__5274 = (function (x){
return x;
});
var min__5275 = (function (x,y){
return ((x < y) ? x : y);
});
var min__5276 = (function() { 
var G__5278__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__5278 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5278__delegate.call(this, x, y, more);
};
G__5278.cljs$lang$maxFixedArity = 2;
G__5278.cljs$lang$applyTo = (function (arglist__5279){
var x = cljs.core.first(arglist__5279);
var y = cljs.core.first(cljs.core.next(arglist__5279));
var more = cljs.core.rest(cljs.core.next(arglist__5279));
return G__5278__delegate.call(this, x, y, more);
});
return G__5278;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__5274.call(this,x);
case  2 :
return min__5275.call(this,x,y);
default:
return min__5276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__5276.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
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
var rem__5280 = (n % d);

return cljs.core.fix.call(null,((n - rem__5280) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5281 = cljs.core.quot.call(null,n,d);

return (n - (d * q__5281));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5282 = (function (){
return Math.random.call(null);
});
var rand__5283 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5282.call(this);
case  1 :
return rand__5283.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
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
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___5285 = (function (x){
return true;
});
var _EQ__EQ___5286 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___5287 = (function() { 
var G__5289__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5290 = y;
var G__5291 = cljs.core.first.call(null,more);
var G__5292 = cljs.core.next.call(null,more);
x = G__5290;
y = G__5291;
more = G__5292;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5289__delegate.call(this, x, y, more);
};
G__5289.cljs$lang$maxFixedArity = 2;
G__5289.cljs$lang$applyTo = (function (arglist__5293){
var x = cljs.core.first(arglist__5293);
var y = cljs.core.first(cljs.core.next(arglist__5293));
var more = cljs.core.rest(cljs.core.next(arglist__5293));
return G__5289__delegate.call(this, x, y, more);
});
return G__5289;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___5285.call(this,x);
case  2 :
return _EQ__EQ___5286.call(this,x,y);
default:
return _EQ__EQ___5287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___5287.cljs$lang$applyTo;
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
var n__5294 = n;
var xs__5295 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5296 = xs__5295;

if(cljs.core.truth_(and__3546__auto____5296))
{return (n__5294 > 0);
} else
{return and__3546__auto____5296;
}
})()))
{{
var G__5297 = (n__5294 - 1);
var G__5298 = cljs.core.next.call(null,xs__5295);
n__5294 = G__5297;
xs__5295 = G__5298;
continue;
}
} else
{return xs__5295;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__5303 = null;
var G__5303__5304 = (function (coll,n){
var temp__3695__auto____5299 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5299))
{var xs__5300 = temp__3695__auto____5299;

return cljs.core.first.call(null,xs__5300);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__5303__5305 = (function (coll,n,not_found){
var temp__3695__auto____5301 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____5301))
{var xs__5302 = temp__3695__auto____5301;

return cljs.core.first.call(null,xs__5302);
} else
{return not_found;
}
});
G__5303 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5303__5304.call(this,coll,n);
case  3 :
return G__5303__5305.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5303;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___5307 = (function (){
return "";
});
var str_STAR___5308 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___5309 = (function() { 
var G__5311__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5312 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__5313 = cljs.core.next.call(null,more);
sb = G__5312;
more = G__5313;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__5311 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5311__delegate.call(this, x, ys);
};
G__5311.cljs$lang$maxFixedArity = 1;
G__5311.cljs$lang$applyTo = (function (arglist__5314){
var x = cljs.core.first(arglist__5314);
var ys = cljs.core.rest(arglist__5314);
return G__5311__delegate.call(this, x, ys);
});
return G__5311;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___5307.call(this);
case  1 :
return str_STAR___5308.call(this,x);
default:
return str_STAR___5309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___5309.cljs$lang$applyTo;
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
var str__5315 = (function (){
return "";
});
var str__5316 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__5317 = (function() { 
var G__5319__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__5319 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5319__delegate.call(this, x, ys);
};
G__5319.cljs$lang$maxFixedArity = 1;
G__5319.cljs$lang$applyTo = (function (arglist__5320){
var x = cljs.core.first(arglist__5320);
var ys = cljs.core.rest(arglist__5320);
return G__5319__delegate.call(this, x, ys);
});
return G__5319;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__5315.call(this);
case  1 :
return str__5316.call(this,x);
default:
return str__5317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__5317.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__5321 = (function (s,start){
return s.substring(start);
});
var subs__5322 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__5321.call(this,s,start);
case  3 :
return subs__5322.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__5324 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__5325 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__5324.call(this,ns);
case  2 :
return symbol__5325.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__5327 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__5328 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__5327.call(this,ns);
case  2 :
return keyword__5328.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5330 = cljs.core.seq.call(null,x);
var ys__5331 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__5330)))
{return cljs.core.nil_QMARK_.call(null,ys__5331);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__5331)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5330),cljs.core.first.call(null,ys__5331))))
{{
var G__5332 = cljs.core.next.call(null,xs__5330);
var G__5333 = cljs.core.next.call(null,ys__5331);
xs__5330 = G__5332;
ys__5331 = G__5333;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
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
return cljs.core.reduce.call(null,(function (p1__5334_SHARP_,p2__5335_SHARP_){
return cljs.core.hash_combine.call(null,p1__5334_SHARP_,cljs.core.hash.call(null,p2__5335_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__5336__5337 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__5336__5337))
{var G__5339__5341 = cljs.core.first.call(null,G__5336__5337);
var vec__5340__5342 = G__5339__5341;
var key_name__5343 = cljs.core.nth.call(null,vec__5340__5342,0,null);
var f__5344 = cljs.core.nth.call(null,vec__5340__5342,1,null);
var G__5336__5345 = G__5336__5337;

var G__5339__5346 = G__5339__5341;
var G__5336__5347 = G__5336__5345;

while(true){
var vec__5348__5349 = G__5339__5346;
var key_name__5350 = cljs.core.nth.call(null,vec__5348__5349,0,null);
var f__5351 = cljs.core.nth.call(null,vec__5348__5349,1,null);
var G__5336__5352 = G__5336__5347;

var str_name__5353 = cljs.core.name.call(null,key_name__5350);

obj[str_name__5353] = f__5351;
var temp__3698__auto____5354 = cljs.core.next.call(null,G__5336__5352);

if(cljs.core.truth_(temp__3698__auto____5354))
{var G__5336__5355 = temp__3698__auto____5354;

{
var G__5356 = cljs.core.first.call(null,G__5336__5355);
var G__5357 = G__5336__5355;
G__5339__5346 = G__5356;
G__5336__5347 = G__5357;
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
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5358 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5359 = this;
return (new cljs.core.List(this__5359.meta,o,coll,(this__5359.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5360 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5361 = this;
return this__5361.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5362 = this;
return this__5362.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5363 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5364 = this;
return this__5364.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5365 = this;
return this__5365.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5366 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5367 = this;
return (new cljs.core.List(meta,this__5367.first,this__5367.rest,this__5367.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5368 = this;
return this__5368.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5369 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5370 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5371 = this;
return (new cljs.core.List(this__5371.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5372 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5373 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5374 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5375 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5376 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5377 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5378 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5379 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5380 = this;
return this__5380.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5381 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__5382){
var items = cljs.core.seq( arglist__5382 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5383 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5384 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5385 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5386 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5386.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5387 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5388 = this;
return this__5388.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5389 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__5389.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__5389.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5390 = this;
return this__5390.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5391 = this;
return (new cljs.core.Cons(meta,this__5391.first,this__5391.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__5392 = null;
var G__5392__5393 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5392__5394 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5392 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__5392__5393.call(this,string,f);
case  3 :
return G__5392__5394.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5392;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5396 = null;
var G__5396__5397 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5396__5398 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5396 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__5396__5397.call(this,string,k);
case  3 :
return G__5396__5398.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5396;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5400 = null;
var G__5400__5401 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__5400__5402 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5400 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__5400__5401.call(this,string,n);
case  3 :
return G__5400__5402.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5400;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__5404 = null;
var G__5404__5405 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__5404__5406 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__5404 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__5404__5405.call(this,this$,coll);
case  3 :
return G__5404__5406.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5404;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__5408 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__5408;
} else
{lazy_seq.x = x__5408.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5409 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5410 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5411 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5412 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5412.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5413 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5414 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5415 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5416 = this;
return this__5416.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5417 = this;
return (new cljs.core.LazySeq(meta,this__5417.realized,this__5417.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5418 = cljs.core.array.call(null);

var s__5419 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5419)))
{ary__5418.push(cljs.core.first.call(null,s__5419));
{
var G__5420 = cljs.core.next.call(null,s__5419);
s__5419 = G__5420;
continue;
}
} else
{return ary__5418;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__5421 = s;
var i__5422 = n;
var sum__5423 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5424 = (i__5422 > 0);

if(cljs.core.truth_(and__3546__auto____5424))
{return cljs.core.seq.call(null,s__5421);
} else
{return and__3546__auto____5424;
}
})()))
{{
var G__5425 = cljs.core.next.call(null,s__5421);
var G__5426 = (i__5422 - 1);
var G__5427 = (sum__5423 + 1);
s__5421 = G__5425;
i__5422 = G__5426;
sum__5423 = G__5427;
continue;
}
} else
{return sum__5423;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
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
var concat__5431 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__5432 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__5433 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5428 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__5428))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5428),concat.call(null,cljs.core.rest.call(null,s__5428),y));
} else
{return y;
}
})));
});
var concat__5434 = (function() { 
var G__5436__delegate = function (x,y,zs){
var cat__5430 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5429 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__5429))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5429),cat.call(null,cljs.core.rest.call(null,xys__5429),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__5430.call(null,concat.call(null,x,y),zs);
};
var G__5436 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5436__delegate.call(this, x, y, zs);
};
G__5436.cljs$lang$maxFixedArity = 2;
G__5436.cljs$lang$applyTo = (function (arglist__5437){
var x = cljs.core.first(arglist__5437);
var y = cljs.core.first(cljs.core.next(arglist__5437));
var zs = cljs.core.rest(cljs.core.next(arglist__5437));
return G__5436__delegate.call(this, x, y, zs);
});
return G__5436;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__5431.call(this);
case  1 :
return concat__5432.call(this,x);
case  2 :
return concat__5433.call(this,x,y);
default:
return concat__5434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__5434.cljs$lang$applyTo;
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
var list_STAR___5438 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___5439 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___5440 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___5441 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5442 = (function() { 
var G__5444__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__5444 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5444__delegate.call(this, a, b, c, d, more);
};
G__5444.cljs$lang$maxFixedArity = 4;
G__5444.cljs$lang$applyTo = (function (arglist__5445){
var a = cljs.core.first(arglist__5445);
var b = cljs.core.first(cljs.core.next(arglist__5445));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5445)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5445))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5445))));
return G__5444__delegate.call(this, a, b, c, d, more);
});
return G__5444;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___5438.call(this,a);
case  2 :
return list_STAR___5439.call(this,a,b);
case  3 :
return list_STAR___5440.call(this,a,b,c);
case  4 :
return list_STAR___5441.call(this,a,b,c,d);
default:
return list_STAR___5442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5442.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__5455 = (function (f,args){
var fixed_arity__5446 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__5446 + 1)) <= fixed_arity__5446)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__5456 = (function (f,x,args){
var arglist__5447 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__5448 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5447,fixed_arity__5448) <= fixed_arity__5448)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5447));
} else
{return f.cljs$lang$applyTo(arglist__5447);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5447));
}
});
var apply__5457 = (function (f,x,y,args){
var arglist__5449 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__5450 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5449,fixed_arity__5450) <= fixed_arity__5450)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5449));
} else
{return f.cljs$lang$applyTo(arglist__5449);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5449));
}
});
var apply__5458 = (function (f,x,y,z,args){
var arglist__5451 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__5452 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5451,fixed_arity__5452) <= fixed_arity__5452)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5451));
} else
{return f.cljs$lang$applyTo(arglist__5451);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5451));
}
});
var apply__5459 = (function() { 
var G__5461__delegate = function (f,a,b,c,d,args){
var arglist__5453 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__5454 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__5453,fixed_arity__5454) <= fixed_arity__5454)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5453));
} else
{return f.cljs$lang$applyTo(arglist__5453);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5453));
}
};
var G__5461 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5461__delegate.call(this, f, a, b, c, d, args);
};
G__5461.cljs$lang$maxFixedArity = 5;
G__5461.cljs$lang$applyTo = (function (arglist__5462){
var f = cljs.core.first(arglist__5462);
var a = cljs.core.first(cljs.core.next(arglist__5462));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5462)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5462))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5462)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5462)))));
return G__5461__delegate.call(this, f, a, b, c, d, args);
});
return G__5461;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__5455.call(this,f,a);
case  3 :
return apply__5456.call(this,f,a,b);
case  4 :
return apply__5457.call(this,f,a,b,c);
case  5 :
return apply__5458.call(this,f,a,b,c,d);
default:
return apply__5459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__5459.cljs$lang$applyTo;
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
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__5463){
var obj = cljs.core.first(arglist__5463);
var f = cljs.core.first(cljs.core.next(arglist__5463));
var args = cljs.core.rest(cljs.core.next(arglist__5463));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___5464 = (function (x){
return false;
});
var not_EQ___5465 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___5466 = (function() { 
var G__5468__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__5468 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5468__delegate.call(this, x, y, more);
};
G__5468.cljs$lang$maxFixedArity = 2;
G__5468.cljs$lang$applyTo = (function (arglist__5469){
var x = cljs.core.first(arglist__5469);
var y = cljs.core.first(cljs.core.next(arglist__5469));
var more = cljs.core.rest(cljs.core.next(arglist__5469));
return G__5468__delegate.call(this, x, y, more);
});
return G__5468;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___5464.call(this,x);
case  2 :
return not_EQ___5465.call(this,x,y);
default:
return not_EQ___5466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___5466.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__5470 = pred;
var G__5471 = cljs.core.next.call(null,coll);
pred = G__5470;
coll = G__5471;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
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
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____5472 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____5472))
{return or__3548__auto____5472;
} else
{{
var G__5473 = pred;
var G__5474 = cljs.core.next.call(null,coll);
pred = G__5473;
coll = G__5474;
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
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
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
var G__5475 = null;
var G__5475__5476 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__5475__5477 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__5475__5478 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__5475__5479 = (function() { 
var G__5481__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__5481 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5481__delegate.call(this, x, y, zs);
};
G__5481.cljs$lang$maxFixedArity = 2;
G__5481.cljs$lang$applyTo = (function (arglist__5482){
var x = cljs.core.first(arglist__5482);
var y = cljs.core.first(cljs.core.next(arglist__5482));
var zs = cljs.core.rest(cljs.core.next(arglist__5482));
return G__5481__delegate.call(this, x, y, zs);
});
return G__5481;
})()
;
G__5475 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__5475__5476.call(this);
case  1 :
return G__5475__5477.call(this,x);
case  2 :
return G__5475__5478.call(this,x,y);
default:
return G__5475__5479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5475.cljs$lang$maxFixedArity = 2;
G__5475.cljs$lang$applyTo = G__5475__5479.cljs$lang$applyTo;
return G__5475;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__5483__delegate = function (args){
return x;
};
var G__5483 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5483__delegate.call(this, args);
};
G__5483.cljs$lang$maxFixedArity = 0;
G__5483.cljs$lang$applyTo = (function (arglist__5484){
var args = cljs.core.seq( arglist__5484 );;
return G__5483__delegate.call(this, args);
});
return G__5483;
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
var comp__5488 = (function (){
return cljs.core.identity;
});
var comp__5489 = (function (f){
return f;
});
var comp__5490 = (function (f,g){
return (function() {
var G__5494 = null;
var G__5494__5495 = (function (){
return f.call(null,g.call(null));
});
var G__5494__5496 = (function (x){
return f.call(null,g.call(null,x));
});
var G__5494__5497 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__5494__5498 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__5494__5499 = (function() { 
var G__5501__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5501 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5501__delegate.call(this, x, y, z, args);
};
G__5501.cljs$lang$maxFixedArity = 3;
G__5501.cljs$lang$applyTo = (function (arglist__5502){
var x = cljs.core.first(arglist__5502);
var y = cljs.core.first(cljs.core.next(arglist__5502));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5502)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5502)));
return G__5501__delegate.call(this, x, y, z, args);
});
return G__5501;
})()
;
G__5494 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5494__5495.call(this);
case  1 :
return G__5494__5496.call(this,x);
case  2 :
return G__5494__5497.call(this,x,y);
case  3 :
return G__5494__5498.call(this,x,y,z);
default:
return G__5494__5499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5494.cljs$lang$maxFixedArity = 3;
G__5494.cljs$lang$applyTo = G__5494__5499.cljs$lang$applyTo;
return G__5494;
})()
});
var comp__5491 = (function (f,g,h){
return (function() {
var G__5503 = null;
var G__5503__5504 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__5503__5505 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__5503__5506 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__5503__5507 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__5503__5508 = (function() { 
var G__5510__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__5510 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5510__delegate.call(this, x, y, z, args);
};
G__5510.cljs$lang$maxFixedArity = 3;
G__5510.cljs$lang$applyTo = (function (arglist__5511){
var x = cljs.core.first(arglist__5511);
var y = cljs.core.first(cljs.core.next(arglist__5511));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5511)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5511)));
return G__5510__delegate.call(this, x, y, z, args);
});
return G__5510;
})()
;
G__5503 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5503__5504.call(this);
case  1 :
return G__5503__5505.call(this,x);
case  2 :
return G__5503__5506.call(this,x,y);
case  3 :
return G__5503__5507.call(this,x,y,z);
default:
return G__5503__5508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5503.cljs$lang$maxFixedArity = 3;
G__5503.cljs$lang$applyTo = G__5503__5508.cljs$lang$applyTo;
return G__5503;
})()
});
var comp__5492 = (function() { 
var G__5512__delegate = function (f1,f2,f3,fs){
var fs__5485 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__5513__delegate = function (args){
var ret__5486 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__5485),args);
var fs__5487 = cljs.core.next.call(null,fs__5485);

while(true){
if(cljs.core.truth_(fs__5487))
{{
var G__5514 = cljs.core.first.call(null,fs__5487).call(null,ret__5486);
var G__5515 = cljs.core.next.call(null,fs__5487);
ret__5486 = G__5514;
fs__5487 = G__5515;
continue;
}
} else
{return ret__5486;
}
break;
}
};
var G__5513 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5513__delegate.call(this, args);
};
G__5513.cljs$lang$maxFixedArity = 0;
G__5513.cljs$lang$applyTo = (function (arglist__5516){
var args = cljs.core.seq( arglist__5516 );;
return G__5513__delegate.call(this, args);
});
return G__5513;
})()
;
};
var G__5512 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5512__delegate.call(this, f1, f2, f3, fs);
};
G__5512.cljs$lang$maxFixedArity = 3;
G__5512.cljs$lang$applyTo = (function (arglist__5517){
var f1 = cljs.core.first(arglist__5517);
var f2 = cljs.core.first(cljs.core.next(arglist__5517));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5517)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5517)));
return G__5512__delegate.call(this, f1, f2, f3, fs);
});
return G__5512;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__5488.call(this);
case  1 :
return comp__5489.call(this,f1);
case  2 :
return comp__5490.call(this,f1,f2);
case  3 :
return comp__5491.call(this,f1,f2,f3);
default:
return comp__5492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__5492.cljs$lang$applyTo;
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
var partial__5518 = (function (f,arg1){
return (function() { 
var G__5523__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__5523 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5523__delegate.call(this, args);
};
G__5523.cljs$lang$maxFixedArity = 0;
G__5523.cljs$lang$applyTo = (function (arglist__5524){
var args = cljs.core.seq( arglist__5524 );;
return G__5523__delegate.call(this, args);
});
return G__5523;
})()
;
});
var partial__5519 = (function (f,arg1,arg2){
return (function() { 
var G__5525__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__5525 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5525__delegate.call(this, args);
};
G__5525.cljs$lang$maxFixedArity = 0;
G__5525.cljs$lang$applyTo = (function (arglist__5526){
var args = cljs.core.seq( arglist__5526 );;
return G__5525__delegate.call(this, args);
});
return G__5525;
})()
;
});
var partial__5520 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__5527__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__5527 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5527__delegate.call(this, args);
};
G__5527.cljs$lang$maxFixedArity = 0;
G__5527.cljs$lang$applyTo = (function (arglist__5528){
var args = cljs.core.seq( arglist__5528 );;
return G__5527__delegate.call(this, args);
});
return G__5527;
})()
;
});
var partial__5521 = (function() { 
var G__5529__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__5530__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__5530 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5530__delegate.call(this, args);
};
G__5530.cljs$lang$maxFixedArity = 0;
G__5530.cljs$lang$applyTo = (function (arglist__5531){
var args = cljs.core.seq( arglist__5531 );;
return G__5530__delegate.call(this, args);
});
return G__5530;
})()
;
};
var G__5529 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5529__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__5529.cljs$lang$maxFixedArity = 4;
G__5529.cljs$lang$applyTo = (function (arglist__5532){
var f = cljs.core.first(arglist__5532);
var arg1 = cljs.core.first(cljs.core.next(arglist__5532));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5532)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5532))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5532))));
return G__5529__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__5529;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__5518.call(this,f,arg1);
case  3 :
return partial__5519.call(this,f,arg1,arg2);
case  4 :
return partial__5520.call(this,f,arg1,arg2,arg3);
default:
return partial__5521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5521.cljs$lang$applyTo;
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
var fnil__5533 = (function (f,x){
return (function() {
var G__5537 = null;
var G__5537__5538 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__5537__5539 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__5537__5540 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__5537__5541 = (function() { 
var G__5543__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__5543 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5543__delegate.call(this, a, b, c, ds);
};
G__5543.cljs$lang$maxFixedArity = 3;
G__5543.cljs$lang$applyTo = (function (arglist__5544){
var a = cljs.core.first(arglist__5544);
var b = cljs.core.first(cljs.core.next(arglist__5544));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5544)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5544)));
return G__5543__delegate.call(this, a, b, c, ds);
});
return G__5543;
})()
;
G__5537 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__5537__5538.call(this,a);
case  2 :
return G__5537__5539.call(this,a,b);
case  3 :
return G__5537__5540.call(this,a,b,c);
default:
return G__5537__5541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5537.cljs$lang$maxFixedArity = 3;
G__5537.cljs$lang$applyTo = G__5537__5541.cljs$lang$applyTo;
return G__5537;
})()
});
var fnil__5534 = (function (f,x,y){
return (function() {
var G__5545 = null;
var G__5545__5546 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__5545__5547 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__5545__5548 = (function() { 
var G__5550__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__5550 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5550__delegate.call(this, a, b, c, ds);
};
G__5550.cljs$lang$maxFixedArity = 3;
G__5550.cljs$lang$applyTo = (function (arglist__5551){
var a = cljs.core.first(arglist__5551);
var b = cljs.core.first(cljs.core.next(arglist__5551));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5551)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5551)));
return G__5550__delegate.call(this, a, b, c, ds);
});
return G__5550;
})()
;
G__5545 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5545__5546.call(this,a,b);
case  3 :
return G__5545__5547.call(this,a,b,c);
default:
return G__5545__5548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5545.cljs$lang$maxFixedArity = 3;
G__5545.cljs$lang$applyTo = G__5545__5548.cljs$lang$applyTo;
return G__5545;
})()
});
var fnil__5535 = (function (f,x,y,z){
return (function() {
var G__5552 = null;
var G__5552__5553 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__5552__5554 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__5552__5555 = (function() { 
var G__5557__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__5557 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5557__delegate.call(this, a, b, c, ds);
};
G__5557.cljs$lang$maxFixedArity = 3;
G__5557.cljs$lang$applyTo = (function (arglist__5558){
var a = cljs.core.first(arglist__5558);
var b = cljs.core.first(cljs.core.next(arglist__5558));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5558)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5558)));
return G__5557__delegate.call(this, a, b, c, ds);
});
return G__5557;
})()
;
G__5552 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5552__5553.call(this,a,b);
case  3 :
return G__5552__5554.call(this,a,b,c);
default:
return G__5552__5555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5552.cljs$lang$maxFixedArity = 3;
G__5552.cljs$lang$applyTo = G__5552__5555.cljs$lang$applyTo;
return G__5552;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__5533.call(this,f,x);
case  3 :
return fnil__5534.call(this,f,x,y);
case  4 :
return fnil__5535.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
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
var mapi__5561 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5559 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5559))
{var s__5560 = temp__3698__auto____5559;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__5560)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5560)));
} else
{return null;
}
})));
});

return mapi__5561.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5562 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5562))
{var s__5563 = temp__3698__auto____5562;

var x__5564 = f.call(null,cljs.core.first.call(null,s__5563));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__5564)))
{return keep.call(null,f,cljs.core.rest.call(null,s__5563));
} else
{return cljs.core.cons.call(null,x__5564,keep.call(null,f,cljs.core.rest.call(null,s__5563)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__5574 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5571))
{var s__5572 = temp__3698__auto____5571;

var x__5573 = f.call(null,idx,cljs.core.first.call(null,s__5572));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__5573)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5572));
} else
{return cljs.core.cons.call(null,x__5573,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5572)));
}
} else
{return null;
}
})));
});

return keepi__5574.call(null,0,coll);
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
var every_pred__5619 = (function (p){
return (function() {
var ep1 = null;
var ep1__5624 = (function (){
return true;
});
var ep1__5625 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__5626 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5581 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____5581))
{return p.call(null,y);
} else
{return and__3546__auto____5581;
}
})());
});
var ep1__5627 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5582 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____5582))
{var and__3546__auto____5583 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____5583))
{return p.call(null,z);
} else
{return and__3546__auto____5583;
}
} else
{return and__3546__auto____5582;
}
})());
});
var ep1__5628 = (function() { 
var G__5630__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5584 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5584))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____5584;
}
})());
};
var G__5630 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5630__delegate.call(this, x, y, z, args);
};
G__5630.cljs$lang$maxFixedArity = 3;
G__5630.cljs$lang$applyTo = (function (arglist__5631){
var x = cljs.core.first(arglist__5631);
var y = cljs.core.first(cljs.core.next(arglist__5631));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5631)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5631)));
return G__5630__delegate.call(this, x, y, z, args);
});
return G__5630;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__5624.call(this);
case  1 :
return ep1__5625.call(this,x);
case  2 :
return ep1__5626.call(this,x,y);
case  3 :
return ep1__5627.call(this,x,y,z);
default:
return ep1__5628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__5628.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__5620 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__5632 = (function (){
return true;
});
var ep2__5633 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5585 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5585))
{return p2.call(null,x);
} else
{return and__3546__auto____5585;
}
})());
});
var ep2__5634 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5586 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5586))
{var and__3546__auto____5587 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5587))
{var and__3546__auto____5588 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5588))
{return p2.call(null,y);
} else
{return and__3546__auto____5588;
}
} else
{return and__3546__auto____5587;
}
} else
{return and__3546__auto____5586;
}
})());
});
var ep2__5635 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5589 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5589))
{var and__3546__auto____5590 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5590))
{var and__3546__auto____5591 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____5591))
{var and__3546__auto____5592 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5592))
{var and__3546__auto____5593 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5593))
{return p2.call(null,z);
} else
{return and__3546__auto____5593;
}
} else
{return and__3546__auto____5592;
}
} else
{return and__3546__auto____5591;
}
} else
{return and__3546__auto____5590;
}
} else
{return and__3546__auto____5589;
}
})());
});
var ep2__5636 = (function() { 
var G__5638__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5594 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5594))
{return cljs.core.every_QMARK_.call(null,(function (p1__5565_SHARP_){
var and__3546__auto____5595 = p1.call(null,p1__5565_SHARP_);

if(cljs.core.truth_(and__3546__auto____5595))
{return p2.call(null,p1__5565_SHARP_);
} else
{return and__3546__auto____5595;
}
}),args);
} else
{return and__3546__auto____5594;
}
})());
};
var G__5638 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5638__delegate.call(this, x, y, z, args);
};
G__5638.cljs$lang$maxFixedArity = 3;
G__5638.cljs$lang$applyTo = (function (arglist__5639){
var x = cljs.core.first(arglist__5639);
var y = cljs.core.first(cljs.core.next(arglist__5639));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5639)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5639)));
return G__5638__delegate.call(this, x, y, z, args);
});
return G__5638;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__5632.call(this);
case  1 :
return ep2__5633.call(this,x);
case  2 :
return ep2__5634.call(this,x,y);
case  3 :
return ep2__5635.call(this,x,y,z);
default:
return ep2__5636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__5636.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__5621 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__5640 = (function (){
return true;
});
var ep3__5641 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5596 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5596))
{var and__3546__auto____5597 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5597))
{return p3.call(null,x);
} else
{return and__3546__auto____5597;
}
} else
{return and__3546__auto____5596;
}
})());
});
var ep3__5642 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5598 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5598))
{var and__3546__auto____5599 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5599))
{var and__3546__auto____5600 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____5600))
{var and__3546__auto____5601 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5601))
{var and__3546__auto____5602 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5602))
{return p3.call(null,y);
} else
{return and__3546__auto____5602;
}
} else
{return and__3546__auto____5601;
}
} else
{return and__3546__auto____5600;
}
} else
{return and__3546__auto____5599;
}
} else
{return and__3546__auto____5598;
}
})());
});
var ep3__5643 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5603 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____5603))
{var and__3546__auto____5604 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____5604))
{var and__3546__auto____5605 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____5605))
{var and__3546__auto____5606 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____5606))
{var and__3546__auto____5607 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____5607))
{var and__3546__auto____5608 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____5608))
{var and__3546__auto____5609 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____5609))
{var and__3546__auto____5610 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____5610))
{return p3.call(null,z);
} else
{return and__3546__auto____5610;
}
} else
{return and__3546__auto____5609;
}
} else
{return and__3546__auto____5608;
}
} else
{return and__3546__auto____5607;
}
} else
{return and__3546__auto____5606;
}
} else
{return and__3546__auto____5605;
}
} else
{return and__3546__auto____5604;
}
} else
{return and__3546__auto____5603;
}
})());
});
var ep3__5644 = (function() { 
var G__5646__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5611 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5611))
{return cljs.core.every_QMARK_.call(null,(function (p1__5566_SHARP_){
var and__3546__auto____5612 = p1.call(null,p1__5566_SHARP_);

if(cljs.core.truth_(and__3546__auto____5612))
{var and__3546__auto____5613 = p2.call(null,p1__5566_SHARP_);

if(cljs.core.truth_(and__3546__auto____5613))
{return p3.call(null,p1__5566_SHARP_);
} else
{return and__3546__auto____5613;
}
} else
{return and__3546__auto____5612;
}
}),args);
} else
{return and__3546__auto____5611;
}
})());
};
var G__5646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5646__delegate.call(this, x, y, z, args);
};
G__5646.cljs$lang$maxFixedArity = 3;
G__5646.cljs$lang$applyTo = (function (arglist__5647){
var x = cljs.core.first(arglist__5647);
var y = cljs.core.first(cljs.core.next(arglist__5647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5647)));
return G__5646__delegate.call(this, x, y, z, args);
});
return G__5646;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__5640.call(this);
case  1 :
return ep3__5641.call(this,x);
case  2 :
return ep3__5642.call(this,x,y);
case  3 :
return ep3__5643.call(this,x,y,z);
default:
return ep3__5644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__5644.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__5622 = (function() { 
var G__5648__delegate = function (p1,p2,p3,ps){
var ps__5614 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__5649 = (function (){
return true;
});
var epn__5650 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__5567_SHARP_){
return p1__5567_SHARP_.call(null,x);
}),ps__5614);
});
var epn__5651 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__5568_SHARP_){
var and__3546__auto____5615 = p1__5568_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____5615))
{return p1__5568_SHARP_.call(null,y);
} else
{return and__3546__auto____5615;
}
}),ps__5614);
});
var epn__5652 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__5569_SHARP_){
var and__3546__auto____5616 = p1__5569_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____5616))
{var and__3546__auto____5617 = p1__5569_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____5617))
{return p1__5569_SHARP_.call(null,z);
} else
{return and__3546__auto____5617;
}
} else
{return and__3546__auto____5616;
}
}),ps__5614);
});
var epn__5653 = (function() { 
var G__5655__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____5618 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____5618))
{return cljs.core.every_QMARK_.call(null,(function (p1__5570_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__5570_SHARP_,args);
}),ps__5614);
} else
{return and__3546__auto____5618;
}
})());
};
var G__5655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5655__delegate.call(this, x, y, z, args);
};
G__5655.cljs$lang$maxFixedArity = 3;
G__5655.cljs$lang$applyTo = (function (arglist__5656){
var x = cljs.core.first(arglist__5656);
var y = cljs.core.first(cljs.core.next(arglist__5656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5656)));
return G__5655__delegate.call(this, x, y, z, args);
});
return G__5655;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__5649.call(this);
case  1 :
return epn__5650.call(this,x);
case  2 :
return epn__5651.call(this,x,y);
case  3 :
return epn__5652.call(this,x,y,z);
default:
return epn__5653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__5653.cljs$lang$applyTo;
return epn;
})()
};
var G__5648 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5648__delegate.call(this, p1, p2, p3, ps);
};
G__5648.cljs$lang$maxFixedArity = 3;
G__5648.cljs$lang$applyTo = (function (arglist__5657){
var p1 = cljs.core.first(arglist__5657);
var p2 = cljs.core.first(cljs.core.next(arglist__5657));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5657)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5657)));
return G__5648__delegate.call(this, p1, p2, p3, ps);
});
return G__5648;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__5619.call(this,p1);
case  2 :
return every_pred__5620.call(this,p1,p2);
case  3 :
return every_pred__5621.call(this,p1,p2,p3);
default:
return every_pred__5622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__5622.cljs$lang$applyTo;
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
var some_fn__5697 = (function (p){
return (function() {
var sp1 = null;
var sp1__5702 = (function (){
return null;
});
var sp1__5703 = (function (x){
return p.call(null,x);
});
var sp1__5704 = (function (x,y){
var or__3548__auto____5659 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____5659))
{return or__3548__auto____5659;
} else
{return p.call(null,y);
}
});
var sp1__5705 = (function (x,y,z){
var or__3548__auto____5660 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____5660))
{return or__3548__auto____5660;
} else
{var or__3548__auto____5661 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____5661))
{return or__3548__auto____5661;
} else
{return p.call(null,z);
}
}
});
var sp1__5706 = (function() { 
var G__5708__delegate = function (x,y,z,args){
var or__3548__auto____5662 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5662))
{return or__3548__auto____5662;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__5708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5708__delegate.call(this, x, y, z, args);
};
G__5708.cljs$lang$maxFixedArity = 3;
G__5708.cljs$lang$applyTo = (function (arglist__5709){
var x = cljs.core.first(arglist__5709);
var y = cljs.core.first(cljs.core.next(arglist__5709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5709)));
return G__5708__delegate.call(this, x, y, z, args);
});
return G__5708;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__5702.call(this);
case  1 :
return sp1__5703.call(this,x);
case  2 :
return sp1__5704.call(this,x,y);
case  3 :
return sp1__5705.call(this,x,y,z);
default:
return sp1__5706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__5706.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__5698 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__5710 = (function (){
return null;
});
var sp2__5711 = (function (x){
var or__3548__auto____5663 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5663))
{return or__3548__auto____5663;
} else
{return p2.call(null,x);
}
});
var sp2__5712 = (function (x,y){
var or__3548__auto____5664 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5664))
{return or__3548__auto____5664;
} else
{var or__3548__auto____5665 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5665))
{return or__3548__auto____5665;
} else
{var or__3548__auto____5666 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5666))
{return or__3548__auto____5666;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__5713 = (function (x,y,z){
var or__3548__auto____5667 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5667))
{return or__3548__auto____5667;
} else
{var or__3548__auto____5668 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5668))
{return or__3548__auto____5668;
} else
{var or__3548__auto____5669 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____5669))
{return or__3548__auto____5669;
} else
{var or__3548__auto____5670 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5670))
{return or__3548__auto____5670;
} else
{var or__3548__auto____5671 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____5671))
{return or__3548__auto____5671;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__5714 = (function() { 
var G__5716__delegate = function (x,y,z,args){
var or__3548__auto____5672 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5672))
{return or__3548__auto____5672;
} else
{return cljs.core.some.call(null,(function (p1__5575_SHARP_){
var or__3548__auto____5673 = p1.call(null,p1__5575_SHARP_);

if(cljs.core.truth_(or__3548__auto____5673))
{return or__3548__auto____5673;
} else
{return p2.call(null,p1__5575_SHARP_);
}
}),args);
}
};
var G__5716 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5716__delegate.call(this, x, y, z, args);
};
G__5716.cljs$lang$maxFixedArity = 3;
G__5716.cljs$lang$applyTo = (function (arglist__5717){
var x = cljs.core.first(arglist__5717);
var y = cljs.core.first(cljs.core.next(arglist__5717));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5717)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5717)));
return G__5716__delegate.call(this, x, y, z, args);
});
return G__5716;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__5710.call(this);
case  1 :
return sp2__5711.call(this,x);
case  2 :
return sp2__5712.call(this,x,y);
case  3 :
return sp2__5713.call(this,x,y,z);
default:
return sp2__5714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__5714.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__5699 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__5718 = (function (){
return null;
});
var sp3__5719 = (function (x){
var or__3548__auto____5674 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5674))
{return or__3548__auto____5674;
} else
{var or__3548__auto____5675 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5675))
{return or__3548__auto____5675;
} else
{return p3.call(null,x);
}
}
});
var sp3__5720 = (function (x,y){
var or__3548__auto____5676 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5676))
{return or__3548__auto____5676;
} else
{var or__3548__auto____5677 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5677))
{return or__3548__auto____5677;
} else
{var or__3548__auto____5678 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____5678))
{return or__3548__auto____5678;
} else
{var or__3548__auto____5679 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5679))
{return or__3548__auto____5679;
} else
{var or__3548__auto____5680 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____5680))
{return or__3548__auto____5680;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__5721 = (function (x,y,z){
var or__3548__auto____5681 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____5681))
{return or__3548__auto____5681;
} else
{var or__3548__auto____5682 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____5682))
{return or__3548__auto____5682;
} else
{var or__3548__auto____5683 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____5683))
{return or__3548__auto____5683;
} else
{var or__3548__auto____5684 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____5684))
{return or__3548__auto____5684;
} else
{var or__3548__auto____5685 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____5685))
{return or__3548__auto____5685;
} else
{var or__3548__auto____5686 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____5686))
{return or__3548__auto____5686;
} else
{var or__3548__auto____5687 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____5687))
{return or__3548__auto____5687;
} else
{var or__3548__auto____5688 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____5688))
{return or__3548__auto____5688;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__5722 = (function() { 
var G__5724__delegate = function (x,y,z,args){
var or__3548__auto____5689 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5689))
{return or__3548__auto____5689;
} else
{return cljs.core.some.call(null,(function (p1__5576_SHARP_){
var or__3548__auto____5690 = p1.call(null,p1__5576_SHARP_);

if(cljs.core.truth_(or__3548__auto____5690))
{return or__3548__auto____5690;
} else
{var or__3548__auto____5691 = p2.call(null,p1__5576_SHARP_);

if(cljs.core.truth_(or__3548__auto____5691))
{return or__3548__auto____5691;
} else
{return p3.call(null,p1__5576_SHARP_);
}
}
}),args);
}
};
var G__5724 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5724__delegate.call(this, x, y, z, args);
};
G__5724.cljs$lang$maxFixedArity = 3;
G__5724.cljs$lang$applyTo = (function (arglist__5725){
var x = cljs.core.first(arglist__5725);
var y = cljs.core.first(cljs.core.next(arglist__5725));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5725)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5725)));
return G__5724__delegate.call(this, x, y, z, args);
});
return G__5724;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__5718.call(this);
case  1 :
return sp3__5719.call(this,x);
case  2 :
return sp3__5720.call(this,x,y);
case  3 :
return sp3__5721.call(this,x,y,z);
default:
return sp3__5722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__5722.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__5700 = (function() { 
var G__5726__delegate = function (p1,p2,p3,ps){
var ps__5692 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__5727 = (function (){
return null;
});
var spn__5728 = (function (x){
return cljs.core.some.call(null,(function (p1__5577_SHARP_){
return p1__5577_SHARP_.call(null,x);
}),ps__5692);
});
var spn__5729 = (function (x,y){
return cljs.core.some.call(null,(function (p1__5578_SHARP_){
var or__3548__auto____5693 = p1__5578_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____5693))
{return or__3548__auto____5693;
} else
{return p1__5578_SHARP_.call(null,y);
}
}),ps__5692);
});
var spn__5730 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__5579_SHARP_){
var or__3548__auto____5694 = p1__5579_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____5694))
{return or__3548__auto____5694;
} else
{var or__3548__auto____5695 = p1__5579_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____5695))
{return or__3548__auto____5695;
} else
{return p1__5579_SHARP_.call(null,z);
}
}
}),ps__5692);
});
var spn__5731 = (function() { 
var G__5733__delegate = function (x,y,z,args){
var or__3548__auto____5696 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____5696))
{return or__3548__auto____5696;
} else
{return cljs.core.some.call(null,(function (p1__5580_SHARP_){
return cljs.core.some.call(null,p1__5580_SHARP_,args);
}),ps__5692);
}
};
var G__5733 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5733__delegate.call(this, x, y, z, args);
};
G__5733.cljs$lang$maxFixedArity = 3;
G__5733.cljs$lang$applyTo = (function (arglist__5734){
var x = cljs.core.first(arglist__5734);
var y = cljs.core.first(cljs.core.next(arglist__5734));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5734)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5734)));
return G__5733__delegate.call(this, x, y, z, args);
});
return G__5733;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__5727.call(this);
case  1 :
return spn__5728.call(this,x);
case  2 :
return spn__5729.call(this,x,y);
case  3 :
return spn__5730.call(this,x,y,z);
default:
return spn__5731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__5731.cljs$lang$applyTo;
return spn;
})()
};
var G__5726 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5726__delegate.call(this, p1, p2, p3, ps);
};
G__5726.cljs$lang$maxFixedArity = 3;
G__5726.cljs$lang$applyTo = (function (arglist__5735){
var p1 = cljs.core.first(arglist__5735);
var p2 = cljs.core.first(cljs.core.next(arglist__5735));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5735)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5735)));
return G__5726__delegate.call(this, p1, p2, p3, ps);
});
return G__5726;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__5697.call(this,p1);
case  2 :
return some_fn__5698.call(this,p1,p2);
case  3 :
return some_fn__5699.call(this,p1,p2,p3);
default:
return some_fn__5700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__5700.cljs$lang$applyTo;
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
var map__5748 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5736))
{var s__5737 = temp__3698__auto____5736;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__5737)),map.call(null,f,cljs.core.rest.call(null,s__5737)));
} else
{return null;
}
})));
});
var map__5749 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5738 = cljs.core.seq.call(null,c1);
var s2__5739 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____5740 = s1__5738;

if(cljs.core.truth_(and__3546__auto____5740))
{return s2__5739;
} else
{return and__3546__auto____5740;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5738),cljs.core.first.call(null,s2__5739)),map.call(null,f,cljs.core.rest.call(null,s1__5738),cljs.core.rest.call(null,s2__5739)));
} else
{return null;
}
})));
});
var map__5750 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5741 = cljs.core.seq.call(null,c1);
var s2__5742 = cljs.core.seq.call(null,c2);
var s3__5743 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____5744 = s1__5741;

if(cljs.core.truth_(and__3546__auto____5744))
{var and__3546__auto____5745 = s2__5742;

if(cljs.core.truth_(and__3546__auto____5745))
{return s3__5743;
} else
{return and__3546__auto____5745;
}
} else
{return and__3546__auto____5744;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5741),cljs.core.first.call(null,s2__5742),cljs.core.first.call(null,s3__5743)),map.call(null,f,cljs.core.rest.call(null,s1__5741),cljs.core.rest.call(null,s2__5742),cljs.core.rest.call(null,s3__5743)));
} else
{return null;
}
})));
});
var map__5751 = (function() { 
var G__5753__delegate = function (f,c1,c2,c3,colls){
var step__5747 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5746 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5746)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__5746),step.call(null,map.call(null,cljs.core.rest,ss__5746)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__5658_SHARP_){
return cljs.core.apply.call(null,f,p1__5658_SHARP_);
}),step__5747.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__5753 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5753__delegate.call(this, f, c1, c2, c3, colls);
};
G__5753.cljs$lang$maxFixedArity = 4;
G__5753.cljs$lang$applyTo = (function (arglist__5754){
var f = cljs.core.first(arglist__5754);
var c1 = cljs.core.first(cljs.core.next(arglist__5754));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5754)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5754))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5754))));
return G__5753__delegate.call(this, f, c1, c2, c3, colls);
});
return G__5753;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__5748.call(this,f,c1);
case  3 :
return map__5749.call(this,f,c1,c2);
case  4 :
return map__5750.call(this,f,c1,c2,c3);
default:
return map__5751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5751.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____5755 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5755))
{var s__5756 = temp__3698__auto____5755;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__5756),take.call(null,(n - 1),cljs.core.rest.call(null,s__5756)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__5759 = (function (n,coll){
while(true){
var s__5757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____5758 = (n > 0);

if(cljs.core.truth_(and__3546__auto____5758))
{return s__5757;
} else
{return and__3546__auto____5758;
}
})()))
{{
var G__5760 = (n - 1);
var G__5761 = cljs.core.rest.call(null,s__5757);
n = G__5760;
coll = G__5761;
continue;
}
} else
{return s__5757;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__5759.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__5762 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__5763 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__5762.call(this,n);
case  2 :
return drop_last__5763.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__5765 = cljs.core.seq.call(null,coll);
var lead__5766 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__5766))
{{
var G__5767 = cljs.core.next.call(null,s__5765);
var G__5768 = cljs.core.next.call(null,lead__5766);
s__5765 = G__5767;
lead__5766 = G__5768;
continue;
}
} else
{return s__5765;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__5771 = (function (pred,coll){
while(true){
var s__5769 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____5770 = s__5769;

if(cljs.core.truth_(and__3546__auto____5770))
{return pred.call(null,cljs.core.first.call(null,s__5769));
} else
{return and__3546__auto____5770;
}
})()))
{{
var G__5772 = pred;
var G__5773 = cljs.core.rest.call(null,s__5769);
pred = G__5772;
coll = G__5773;
continue;
}
} else
{return s__5769;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__5771.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5774 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5774))
{var s__5775 = temp__3698__auto____5774;

return cljs.core.concat.call(null,s__5775,cycle.call(null,s__5775));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__5776 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__5777 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__5776.call(this,n);
case  2 :
return repeat__5777.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__5779 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__5780 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__5779.call(this,n);
case  2 :
return repeatedly__5780.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__5786 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5782 = cljs.core.seq.call(null,c1);
var s2__5783 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____5784 = s1__5782;

if(cljs.core.truth_(and__3546__auto____5784))
{return s2__5783;
} else
{return and__3546__auto____5784;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__5782),cljs.core.cons.call(null,cljs.core.first.call(null,s2__5783),interleave.call(null,cljs.core.rest.call(null,s1__5782),cljs.core.rest.call(null,s2__5783))));
} else
{return null;
}
})));
});
var interleave__5787 = (function() { 
var G__5789__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5785 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5785)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__5785),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__5785)));
} else
{return null;
}
})));
};
var G__5789 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5789__delegate.call(this, c1, c2, colls);
};
G__5789.cljs$lang$maxFixedArity = 2;
G__5789.cljs$lang$applyTo = (function (arglist__5790){
var c1 = cljs.core.first(arglist__5790);
var c2 = cljs.core.first(cljs.core.next(arglist__5790));
var colls = cljs.core.rest(cljs.core.next(arglist__5790));
return G__5789__delegate.call(this, c1, c2, colls);
});
return G__5789;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__5786.call(this,c1,c2);
default:
return interleave__5787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__5787.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__5793 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____5791 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____5791))
{var coll__5792 = temp__3695__auto____5791;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__5792),cat.call(null,cljs.core.rest.call(null,coll__5792),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__5793.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__5794 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__5795 = (function() { 
var G__5797__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__5797 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5797__delegate.call(this, f, coll, colls);
};
G__5797.cljs$lang$maxFixedArity = 2;
G__5797.cljs$lang$applyTo = (function (arglist__5798){
var f = cljs.core.first(arglist__5798);
var coll = cljs.core.first(cljs.core.next(arglist__5798));
var colls = cljs.core.rest(cljs.core.next(arglist__5798));
return G__5797__delegate.call(this, f, coll, colls);
});
return G__5797;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__5794.call(this,f,coll);
default:
return mapcat__5795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__5795.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5799 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5799))
{var s__5800 = temp__3698__auto____5799;

var f__5801 = cljs.core.first.call(null,s__5800);
var r__5802 = cljs.core.rest.call(null,s__5800);

if(cljs.core.truth_(pred.call(null,f__5801)))
{return cljs.core.cons.call(null,f__5801,filter.call(null,pred,r__5802));
} else
{return filter.call(null,pred,r__5802);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
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
var walk__5804 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__5804.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__5803_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__5803_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
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
var partition__5811 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__5812 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5805 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5805))
{var s__5806 = temp__3698__auto____5805;

var p__5807 = cljs.core.take.call(null,n,s__5806);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__5807))))
{return cljs.core.cons.call(null,p__5807,partition.call(null,n,step,cljs.core.drop.call(null,step,s__5806)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__5813 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5808 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5808))
{var s__5809 = temp__3698__auto____5808;

var p__5810 = cljs.core.take.call(null,n,s__5809);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__5810))))
{return cljs.core.cons.call(null,p__5810,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__5809)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__5810,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__5811.call(this,n,step);
case  3 :
return partition__5812.call(this,n,step,pad);
case  4 :
return partition__5813.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__5819 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__5820 = (function (m,ks,not_found){
var sentinel__5815 = cljs.core.lookup_sentinel;
var m__5816 = m;
var ks__5817 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__5817))
{var m__5818 = cljs.core.get.call(null,m__5816,cljs.core.first.call(null,ks__5817),sentinel__5815);

if(cljs.core.truth_((sentinel__5815 === m__5818)))
{return not_found;
} else
{{
var G__5822 = sentinel__5815;
var G__5823 = m__5818;
var G__5824 = cljs.core.next.call(null,ks__5817);
sentinel__5815 = G__5822;
m__5816 = G__5823;
ks__5817 = G__5824;
continue;
}
}
} else
{return m__5816;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__5819.call(this,m,ks);
case  3 :
return get_in__5820.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__5825,v){
var vec__5826__5827 = p__5825;
var k__5828 = cljs.core.nth.call(null,vec__5826__5827,0,null);
var ks__5829 = cljs.core.nthnext.call(null,vec__5826__5827,1);

if(cljs.core.truth_(ks__5829))
{return cljs.core.assoc.call(null,m,k__5828,assoc_in.call(null,cljs.core.get.call(null,m,k__5828),ks__5829,v));
} else
{return cljs.core.assoc.call(null,m,k__5828,v);
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
var update_in__delegate = function (m,p__5830,f,args){
var vec__5831__5832 = p__5830;
var k__5833 = cljs.core.nth.call(null,vec__5831__5832,0,null);
var ks__5834 = cljs.core.nthnext.call(null,vec__5831__5832,1);

if(cljs.core.truth_(ks__5834))
{return cljs.core.assoc.call(null,m,k__5833,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__5833),ks__5834,f,args));
} else
{return cljs.core.assoc.call(null,m,k__5833,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__5833),args));
}
};
var update_in = function (m,p__5830,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__5830, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__5835){
var m = cljs.core.first(arglist__5835);
var p__5830 = cljs.core.first(cljs.core.next(arglist__5835));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5835)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5835)));
return update_in__delegate.call(this, m, p__5830, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5836 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5863 = null;
var G__5863__5864 = (function (coll,k){
var this__5837 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5863__5865 = (function (coll,k,not_found){
var this__5838 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5863 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5863__5864.call(this,coll,k);
case  3 :
return G__5863__5865.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5863;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5839 = this;
var new_array__5840 = cljs.core.aclone.call(null,this__5839.array);

(new_array__5840[k] = v);
return (new cljs.core.Vector(this__5839.meta,new_array__5840));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__5867 = null;
var G__5867__5868 = (function (coll,k){
var this__5841 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5867__5869 = (function (coll,k,not_found){
var this__5842 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5867 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5867__5868.call(this,coll,k);
case  3 :
return G__5867__5869.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5867;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5843 = this;
var new_array__5844 = cljs.core.aclone.call(null,this__5843.array);

new_array__5844.push(o);
return (new cljs.core.Vector(this__5843.meta,new_array__5844));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5871 = null;
var G__5871__5872 = (function (v,f){
var this__5845 = this;
return cljs.core.ci_reduce.call(null,this__5845.array,f);
});
var G__5871__5873 = (function (v,f,start){
var this__5846 = this;
return cljs.core.ci_reduce.call(null,this__5846.array,f,start);
});
G__5871 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__5871__5872.call(this,v,f);
case  3 :
return G__5871__5873.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5871;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5847 = this;
if(cljs.core.truth_((this__5847.array.length > 0)))
{var vector_seq__5848 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__5847.array.length)))
{return cljs.core.cons.call(null,(this__5847.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__5848.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5849 = this;
return this__5849.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5850 = this;
var count__5851 = this__5850.array.length;

if(cljs.core.truth_((count__5851 > 0)))
{return (this__5850.array[(count__5851 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5852 = this;
if(cljs.core.truth_((this__5852.array.length > 0)))
{var new_array__5853 = cljs.core.aclone.call(null,this__5852.array);

new_array__5853.pop();
return (new cljs.core.Vector(this__5852.meta,new_array__5853));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5854 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5855 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5856 = this;
return (new cljs.core.Vector(meta,this__5856.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5857 = this;
return this__5857.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5875 = null;
var G__5875__5876 = (function (coll,n){
var this__5858 = this;
if(cljs.core.truth_((function (){var and__3546__auto____5859 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____5859))
{return (n < this__5858.array.length);
} else
{return and__3546__auto____5859;
}
})()))
{return (this__5858.array[n]);
} else
{return null;
}
});
var G__5875__5877 = (function (coll,n,not_found){
var this__5860 = this;
if(cljs.core.truth_((function (){var and__3546__auto____5861 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____5861))
{return (n < this__5860.array.length);
} else
{return and__3546__auto____5861;
}
})()))
{return (this__5860.array[n]);
} else
{return not_found;
}
});
G__5875 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5875__5876.call(this,coll,n);
case  3 :
return G__5875__5877.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5875;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5862 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5862.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__5879){
var args = cljs.core.seq( arglist__5879 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5880 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5902 = null;
var G__5902__5903 = (function (coll,k){
var this__5881 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5902__5904 = (function (coll,k,not_found){
var this__5882 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5902 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5902__5903.call(this,coll,k);
case  3 :
return G__5902__5904.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5902;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__5883 = this;
var v_pos__5884 = (this__5883.start + key);

return (new cljs.core.Subvec(this__5883.meta,cljs.core._assoc.call(null,this__5883.v,v_pos__5884,val),this__5883.start,((this__5883.end > (v_pos__5884 + 1)) ? this__5883.end : (v_pos__5884 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__5906 = null;
var G__5906__5907 = (function (coll,k){
var this__5885 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5906__5908 = (function (coll,k,not_found){
var this__5886 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5906 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5906__5907.call(this,coll,k);
case  3 :
return G__5906__5908.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5906;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5887 = this;
return (new cljs.core.Subvec(this__5887.meta,cljs.core._assoc_n.call(null,this__5887.v,this__5887.end,o),this__5887.start,(this__5887.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5910 = null;
var G__5910__5911 = (function (coll,f){
var this__5888 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__5910__5912 = (function (coll,f,start){
var this__5889 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__5910 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5910__5911.call(this,coll,f);
case  3 :
return G__5910__5912.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5910;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5890 = this;
var subvec_seq__5891 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__5890.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__5890.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__5891.call(null,this__5890.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5892 = this;
return (this__5892.end - this__5892.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5893 = this;
return cljs.core._nth.call(null,this__5893.v,(this__5893.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5894 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__5894.start,this__5894.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__5894.meta,this__5894.v,this__5894.start,(this__5894.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5895 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5896 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5897 = this;
return (new cljs.core.Subvec(meta,this__5897.v,this__5897.start,this__5897.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5898 = this;
return this__5898.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5914 = null;
var G__5914__5915 = (function (coll,n){
var this__5899 = this;
return cljs.core._nth.call(null,this__5899.v,(this__5899.start + n));
});
var G__5914__5916 = (function (coll,n,not_found){
var this__5900 = this;
return cljs.core._nth.call(null,this__5900.v,(this__5900.start + n),not_found);
});
G__5914 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5914__5915.call(this,coll,n);
case  3 :
return G__5914__5916.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5914;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5901 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5901.meta);
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
var subvec__5918 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__5919 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__5918.call(this,v,start);
case  3 :
return subvec__5919.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5921 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5922 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5923 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5924 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5924.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5925 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5926 = this;
return cljs.core._first.call(null,this__5926.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5927 = this;
var temp__3695__auto____5928 = cljs.core.next.call(null,this__5927.front);

if(cljs.core.truth_(temp__3695__auto____5928))
{var f1__5929 = temp__3695__auto____5928;

return (new cljs.core.PersistentQueueSeq(this__5927.meta,f1__5929,this__5927.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__5927.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__5927.meta,this__5927.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5930 = this;
return this__5930.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5931 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__5931.front,this__5931.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5932 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5933 = this;
if(cljs.core.truth_(this__5933.front))
{return (new cljs.core.PersistentQueue(this__5933.meta,(this__5933.count + 1),this__5933.front,cljs.core.conj.call(null,(function (){var or__3548__auto____5934 = this__5933.rear;

if(cljs.core.truth_(or__3548__auto____5934))
{return or__3548__auto____5934;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__5933.meta,(this__5933.count + 1),cljs.core.conj.call(null,this__5933.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5935 = this;
var rear__5936 = cljs.core.seq.call(null,this__5935.rear);

if(cljs.core.truth_((function (){var or__3548__auto____5937 = this__5935.front;

if(cljs.core.truth_(or__3548__auto____5937))
{return or__3548__auto____5937;
} else
{return rear__5936;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__5935.front,cljs.core.seq.call(null,rear__5936)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5938 = this;
return this__5938.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5939 = this;
return cljs.core._first.call(null,this__5939.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5940 = this;
if(cljs.core.truth_(this__5940.front))
{var temp__3695__auto____5941 = cljs.core.next.call(null,this__5940.front);

if(cljs.core.truth_(temp__3695__auto____5941))
{var f1__5942 = temp__3695__auto____5941;

return (new cljs.core.PersistentQueue(this__5940.meta,(this__5940.count - 1),f1__5942,this__5940.rear));
} else
{return (new cljs.core.PersistentQueue(this__5940.meta,(this__5940.count - 1),cljs.core.seq.call(null,this__5940.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5943 = this;
return cljs.core.first.call(null,this__5943.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5944 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5946 = this;
return (new cljs.core.PersistentQueue(meta,this__5946.count,this__5946.front,this__5946.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5947 = this;
return this__5947.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5948 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5949 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__5950 = array.length;

var i__5951 = 0;

while(true){
if(cljs.core.truth_((i__5951 < len__5950)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__5951]))))
{return i__5951;
} else
{{
var G__5952 = (i__5951 + incr);
i__5951 = G__5952;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___5954 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___5955 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____5953 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____5953))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____5953;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___5954.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___5955.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5958 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5979 = null;
var G__5979__5980 = (function (coll,k){
var this__5959 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__5979__5981 = (function (coll,k,not_found){
var this__5960 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5960.strobj,(this__5960.strobj[k]),not_found);
});
G__5979 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5979__5980.call(this,coll,k);
case  3 :
return G__5979__5981.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5979;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5961 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__5962 = goog.object.clone.call(null,this__5961.strobj);
var overwrite_QMARK___5963 = new_strobj__5962.hasOwnProperty(k);

(new_strobj__5962[k] = v);
if(cljs.core.truth_(overwrite_QMARK___5963))
{return (new cljs.core.ObjMap(this__5961.meta,this__5961.keys,new_strobj__5962));
} else
{var new_keys__5964 = cljs.core.aclone.call(null,this__5961.keys);

new_keys__5964.push(k);
return (new cljs.core.ObjMap(this__5961.meta,new_keys__5964,new_strobj__5962));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__5961.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__5965 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5965.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__5983 = null;
var G__5983__5984 = (function (coll,k){
var this__5966 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5983__5985 = (function (coll,k,not_found){
var this__5967 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5983 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5983__5984.call(this,coll,k);
case  3 :
return G__5983__5985.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5983;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__5968 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5969 = this;
if(cljs.core.truth_((this__5969.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__5957_SHARP_){
return cljs.core.vector.call(null,p1__5957_SHARP_,(this__5969.strobj[p1__5957_SHARP_]));
}),this__5969.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5970 = this;
return this__5970.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5971 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5972 = this;
return (new cljs.core.ObjMap(meta,this__5972.keys,this__5972.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5973 = this;
return this__5973.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5974 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__5974.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__5975 = this;
if(cljs.core.truth_((function (){var and__3546__auto____5976 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____5976))
{return this__5975.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____5976;
}
})()))
{var new_keys__5977 = cljs.core.aclone.call(null,this__5975.keys);
var new_strobj__5978 = goog.object.clone.call(null,this__5975.strobj);

new_keys__5977.splice(cljs.core.scan_array.call(null,1,k,new_keys__5977),1);
cljs.core.js_delete.call(null,new_strobj__5978,k);
return (new cljs.core.ObjMap(this__5975.meta,new_keys__5977,new_strobj__5978));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5988 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6020 = null;
var G__6020__6021 = (function (coll,k){
var this__5989 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6020__6022 = (function (coll,k,not_found){
var this__5990 = this;
var bucket__5991 = (this__5990.hashobj[cljs.core.hash.call(null,k)]);
var i__5992 = (cljs.core.truth_(bucket__5991)?cljs.core.scan_array.call(null,2,k,bucket__5991):null);

if(cljs.core.truth_(i__5992))
{return (bucket__5991[(i__5992 + 1)]);
} else
{return not_found;
}
});
G__6020 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6020__6021.call(this,coll,k);
case  3 :
return G__6020__6022.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6020;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5993 = this;
var h__5994 = cljs.core.hash.call(null,k);
var bucket__5995 = (this__5993.hashobj[h__5994]);

if(cljs.core.truth_(bucket__5995))
{var new_bucket__5996 = cljs.core.aclone.call(null,bucket__5995);
var new_hashobj__5997 = goog.object.clone.call(null,this__5993.hashobj);

(new_hashobj__5997[h__5994] = new_bucket__5996);
var temp__3695__auto____5998 = cljs.core.scan_array.call(null,2,k,new_bucket__5996);

if(cljs.core.truth_(temp__3695__auto____5998))
{var i__5999 = temp__3695__auto____5998;

(new_bucket__5996[(i__5999 + 1)] = v);
return (new cljs.core.HashMap(this__5993.meta,this__5993.count,new_hashobj__5997));
} else
{new_bucket__5996.push(k,v);
return (new cljs.core.HashMap(this__5993.meta,(this__5993.count + 1),new_hashobj__5997));
}
} else
{var new_hashobj__6000 = goog.object.clone.call(null,this__5993.hashobj);

(new_hashobj__6000[h__5994] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__5993.meta,(this__5993.count + 1),new_hashobj__6000));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6001 = this;
var bucket__6002 = (this__6001.hashobj[cljs.core.hash.call(null,k)]);
var i__6003 = (cljs.core.truth_(bucket__6002)?cljs.core.scan_array.call(null,2,k,bucket__6002):null);

if(cljs.core.truth_(i__6003))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__6024 = null;
var G__6024__6025 = (function (coll,k){
var this__6004 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__6024__6026 = (function (coll,k,not_found){
var this__6005 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__6024 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6024__6025.call(this,coll,k);
case  3 :
return G__6024__6026.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6024;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6006 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6007 = this;
if(cljs.core.truth_((this__6007.count > 0)))
{var hashes__6008 = cljs.core.js_keys.call(null,this__6007.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__5987_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6007.hashobj[p1__5987_SHARP_])));
}),hashes__6008);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6009 = this;
return this__6009.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6010 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6011 = this;
return (new cljs.core.HashMap(meta,this__6011.count,this__6011.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6012 = this;
return this__6012.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6013 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6013.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6014 = this;
var h__6015 = cljs.core.hash.call(null,k);
var bucket__6016 = (this__6014.hashobj[h__6015]);
var i__6017 = (cljs.core.truth_(bucket__6016)?cljs.core.scan_array.call(null,2,k,bucket__6016):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6017)))
{return coll;
} else
{var new_hashobj__6018 = goog.object.clone.call(null,this__6014.hashobj);

if(cljs.core.truth_((3 > bucket__6016.length)))
{cljs.core.js_delete.call(null,new_hashobj__6018,h__6015);
} else
{var new_bucket__6019 = cljs.core.aclone.call(null,bucket__6016);

new_bucket__6019.splice(i__6017,2);
(new_hashobj__6018[h__6015] = new_bucket__6019);
}
return (new cljs.core.HashMap(this__6014.meta,(this__6014.count - 1),new_hashobj__6018));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6028 = ks.length;

var i__6029 = 0;
var out__6030 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__6029 < len__6028)))
{{
var G__6031 = (i__6029 + 1);
var G__6032 = cljs.core.assoc.call(null,out__6030,(ks[i__6029]),(vs[i__6029]));
i__6029 = G__6031;
out__6030 = G__6032;
continue;
}
} else
{return out__6030;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__6033 = cljs.core.seq.call(null,keyvals);
var out__6034 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6033))
{{
var G__6035 = cljs.core.nnext.call(null,in$__6033);
var G__6036 = cljs.core.assoc.call(null,out__6034,cljs.core.first.call(null,in$__6033),cljs.core.second.call(null,in$__6033));
in$__6033 = G__6035;
out__6034 = G__6036;
continue;
}
} else
{return out__6034;
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
hash_map.cljs$lang$applyTo = (function (arglist__6037){
var keyvals = cljs.core.seq( arglist__6037 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__6038_SHARP_,p2__6039_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____6040 = p1__6038_SHARP_;

if(cljs.core.truth_(or__3548__auto____6040))
{return or__3548__auto____6040;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6039_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6041){
var maps = cljs.core.seq( arglist__6041 );;
return merge__delegate.call(this, maps);
});
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
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__6044 = (function (m,e){
var k__6042 = cljs.core.first.call(null,e);
var v__6043 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6042)))
{return cljs.core.assoc.call(null,m,k__6042,f.call(null,cljs.core.get.call(null,m,k__6042),v__6043));
} else
{return cljs.core.assoc.call(null,m,k__6042,v__6043);
}
});
var merge2__6046 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6044,(function (){var or__3548__auto____6045 = m1;

if(cljs.core.truth_(or__3548__auto____6045))
{return or__3548__auto____6045;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6046,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6047){
var f = cljs.core.first(arglist__6047);
var maps = cljs.core.rest(arglist__6047);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6049 = cljs.core.ObjMap.fromObject([],{});
var keys__6050 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6050))
{var key__6051 = cljs.core.first.call(null,keys__6050);
var entry__6052 = cljs.core.get.call(null,map,key__6051,"﷐'user/not-found");

{
var G__6053 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__6052,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__6049,key__6051,entry__6052):ret__6049);
var G__6054 = cljs.core.next.call(null,keys__6050);
ret__6049 = G__6053;
keys__6050 = G__6054;
continue;
}
} else
{return ret__6049;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6055 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6070 = null;
var G__6070__6071 = (function (coll,v){
var this__6056 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6070__6072 = (function (coll,v,not_found){
var this__6057 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6057.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6070 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6070__6071.call(this,coll,v);
case  3 :
return G__6070__6072.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6070;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__6074 = null;
var G__6074__6075 = (function (coll,k){
var this__6058 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__6074__6076 = (function (coll,k,not_found){
var this__6059 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__6074 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6074__6075.call(this,coll,k);
case  3 :
return G__6074__6076.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6074;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6060 = this;
return (new cljs.core.Set(this__6060.meta,cljs.core.assoc.call(null,this__6060.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6061 = this;
return cljs.core.keys.call(null,this__6061.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6062 = this;
return (new cljs.core.Set(this__6062.meta,cljs.core.dissoc.call(null,this__6062.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6063 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6064 = this;
var and__3546__auto____6065 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____6065))
{var and__3546__auto____6066 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____6066))
{return cljs.core.every_QMARK_.call(null,(function (p1__6048_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6048_SHARP_);
}),other);
} else
{return and__3546__auto____6066;
}
} else
{return and__3546__auto____6065;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6067 = this;
return (new cljs.core.Set(meta,this__6067.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6068 = this;
return this__6068.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6069 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6069.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6079 = cljs.core.seq.call(null,coll);
var out__6080 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6079))))
{{
var G__6081 = cljs.core.rest.call(null,in$__6079);
var G__6082 = cljs.core.conj.call(null,out__6080,cljs.core.first.call(null,in$__6079));
in$__6079 = G__6081;
out__6080 = G__6082;
continue;
}
} else
{return out__6080;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__6083 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____6084 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____6084))
{var e__6085 = temp__3695__auto____6084;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6085));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6083,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6078_SHARP_){
var temp__3695__auto____6086 = cljs.core.find.call(null,smap,p1__6078_SHARP_);

if(cljs.core.truth_(temp__3695__auto____6086))
{var e__6087 = temp__3695__auto____6086;

return cljs.core.second.call(null,e__6087);
} else
{return p1__6078_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6095 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6088,seen){
while(true){
var vec__6089__6090 = p__6088;
var f__6091 = cljs.core.nth.call(null,vec__6089__6090,0,null);
var xs__6092 = vec__6089__6090;

var temp__3698__auto____6093 = cljs.core.seq.call(null,xs__6092);

if(cljs.core.truth_(temp__3698__auto____6093))
{var s__6094 = temp__3698__auto____6093;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6091)))
{{
var G__6096 = cljs.core.rest.call(null,s__6094);
var G__6097 = seen;
p__6088 = G__6096;
seen = G__6097;
continue;
}
} else
{return cljs.core.cons.call(null,f__6091,step.call(null,cljs.core.rest.call(null,s__6094),cljs.core.conj.call(null,seen,f__6091)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6095.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6098 = cljs.core.Vector.fromArray([]);
var s__6099 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6099)))
{{
var G__6100 = cljs.core.conj.call(null,ret__6098,cljs.core.first.call(null,s__6099));
var G__6101 = cljs.core.next.call(null,s__6099);
ret__6098 = G__6100;
s__6099 = G__6101;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6098);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____6102 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6102))
{return or__3548__auto____6102;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6103 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6103 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6103 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
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
if(cljs.core.truth_((function (){var or__3548__auto____6104 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____6104))
{return or__3548__auto____6104;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6105 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6105 > -1)))
{return cljs.core.subs.call(null,x,2,i__6105);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__6108 = cljs.core.ObjMap.fromObject([],{});
var ks__6109 = cljs.core.seq.call(null,keys);
var vs__6110 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6111 = ks__6109;

if(cljs.core.truth_(and__3546__auto____6111))
{return vs__6110;
} else
{return and__3546__auto____6111;
}
})()))
{{
var G__6112 = cljs.core.assoc.call(null,map__6108,cljs.core.first.call(null,ks__6109),cljs.core.first.call(null,vs__6110));
var G__6113 = cljs.core.next.call(null,ks__6109);
var G__6114 = cljs.core.next.call(null,vs__6110);
map__6108 = G__6112;
ks__6109 = G__6113;
vs__6110 = G__6114;
continue;
}
} else
{return map__6108;
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
var max_key__6117 = (function (k,x){
return x;
});
var max_key__6118 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6119 = (function() { 
var G__6121__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6106_SHARP_,p2__6107_SHARP_){
return max_key.call(null,k,p1__6106_SHARP_,p2__6107_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6121 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6121__delegate.call(this, k, x, y, more);
};
G__6121.cljs$lang$maxFixedArity = 3;
G__6121.cljs$lang$applyTo = (function (arglist__6122){
var k = cljs.core.first(arglist__6122);
var x = cljs.core.first(cljs.core.next(arglist__6122));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6122)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6122)));
return G__6121__delegate.call(this, k, x, y, more);
});
return G__6121;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6117.call(this,k,x);
case  3 :
return max_key__6118.call(this,k,x,y);
default:
return max_key__6119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6119.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6123 = (function (k,x){
return x;
});
var min_key__6124 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6125 = (function() { 
var G__6127__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6115_SHARP_,p2__6116_SHARP_){
return min_key.call(null,k,p1__6115_SHARP_,p2__6116_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6127 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6127__delegate.call(this, k, x, y, more);
};
G__6127.cljs$lang$maxFixedArity = 3;
G__6127.cljs$lang$applyTo = (function (arglist__6128){
var k = cljs.core.first(arglist__6128);
var x = cljs.core.first(cljs.core.next(arglist__6128));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6128)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6128)));
return G__6127__delegate.call(this, k, x, y, more);
});
return G__6127;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6123.call(this,k,x);
case  3 :
return min_key__6124.call(this,k,x,y);
default:
return min_key__6125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6125.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6131 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6132 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6129 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6129))
{var s__6130 = temp__3698__auto____6129;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6130),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6130)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6131.call(this,n,step);
case  3 :
return partition_all__6132.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6134 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6134))
{var s__6135 = temp__3698__auto____6134;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6135))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6135),take_while.call(null,pred,cljs.core.rest.call(null,s__6135)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__6136 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__6137 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6153 = null;
var G__6153__6154 = (function (rng,f){
var this__6138 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__6153__6155 = (function (rng,f,s){
var this__6139 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__6153 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__6153__6154.call(this,rng,f);
case  3 :
return G__6153__6155.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6153;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__6140 = this;
var comp__6141 = (cljs.core.truth_((this__6140.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__6141.call(null,this__6140.start,this__6140.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__6142 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__6142.end - this__6142.start) / this__6142.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__6143 = this;
return this__6143.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__6144 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6144.meta,(this__6144.start + this__6144.step),this__6144.end,this__6144.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__6145 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__6146 = this;
return (new cljs.core.Range(meta,this__6146.start,this__6146.end,this__6146.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__6147 = this;
return this__6147.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6157 = null;
var G__6157__6158 = (function (rng,n){
var this__6148 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6148.start + (n * this__6148.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6149 = (this__6148.start > this__6148.end);

if(cljs.core.truth_(and__3546__auto____6149))
{return cljs.core._EQ_.call(null,this__6148.step,0);
} else
{return and__3546__auto____6149;
}
})()))
{return this__6148.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__6157__6159 = (function (rng,n,not_found){
var this__6150 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6150.start + (n * this__6150.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____6151 = (this__6150.start > this__6150.end);

if(cljs.core.truth_(and__3546__auto____6151))
{return cljs.core._EQ_.call(null,this__6150.step,0);
} else
{return and__3546__auto____6151;
}
})()))
{return this__6150.start;
} else
{return not_found;
}
}
});
G__6157 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__6157__6158.call(this,rng,n);
case  3 :
return G__6157__6159.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6157;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__6152 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6152.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__6161 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__6162 = (function (end){
return range.call(null,0,end,1);
});
var range__6163 = (function (start,end){
return range.call(null,start,end,1);
});
var range__6164 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__6161.call(this);
case  1 :
return range__6162.call(this,start);
case  2 :
return range__6163.call(this,start,end);
case  3 :
return range__6164.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6166 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6166))
{var s__6167 = temp__3698__auto____6166;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6167),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6167)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6169 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6169))
{var s__6170 = temp__3698__auto____6169;

var fst__6171 = cljs.core.first.call(null,s__6170);
var fv__6172 = f.call(null,fst__6171);
var run__6173 = cljs.core.cons.call(null,fst__6171,cljs.core.take_while.call(null,(function (p1__6168_SHARP_){
return cljs.core._EQ_.call(null,fv__6172,f.call(null,p1__6168_SHARP_));
}),cljs.core.next.call(null,s__6170)));

return cljs.core.cons.call(null,run__6173,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6173),s__6170))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__6188 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____6184 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____6184))
{var s__6185 = temp__3695__auto____6184;

return reductions.call(null,f,cljs.core.first.call(null,s__6185),cljs.core.rest.call(null,s__6185));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__6189 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____6186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6186))
{var s__6187 = temp__3698__auto____6186;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6187)),cljs.core.rest.call(null,s__6187));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__6188.call(this,f,init);
case  3 :
return reductions__6189.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var juxt__6192 = (function (f){
return (function() {
var G__6197 = null;
var G__6197__6198 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6197__6199 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6197__6200 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6197__6201 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6197__6202 = (function() { 
var G__6204__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6204 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6204__delegate.call(this, x, y, z, args);
};
G__6204.cljs$lang$maxFixedArity = 3;
G__6204.cljs$lang$applyTo = (function (arglist__6205){
var x = cljs.core.first(arglist__6205);
var y = cljs.core.first(cljs.core.next(arglist__6205));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6205)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6205)));
return G__6204__delegate.call(this, x, y, z, args);
});
return G__6204;
})()
;
G__6197 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6197__6198.call(this);
case  1 :
return G__6197__6199.call(this,x);
case  2 :
return G__6197__6200.call(this,x,y);
case  3 :
return G__6197__6201.call(this,x,y,z);
default:
return G__6197__6202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6197.cljs$lang$maxFixedArity = 3;
G__6197.cljs$lang$applyTo = G__6197__6202.cljs$lang$applyTo;
return G__6197;
})()
});
var juxt__6193 = (function (f,g){
return (function() {
var G__6206 = null;
var G__6206__6207 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6206__6208 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6206__6209 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6206__6210 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6206__6211 = (function() { 
var G__6213__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6213__delegate.call(this, x, y, z, args);
};
G__6213.cljs$lang$maxFixedArity = 3;
G__6213.cljs$lang$applyTo = (function (arglist__6214){
var x = cljs.core.first(arglist__6214);
var y = cljs.core.first(cljs.core.next(arglist__6214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6214)));
return G__6213__delegate.call(this, x, y, z, args);
});
return G__6213;
})()
;
G__6206 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6206__6207.call(this);
case  1 :
return G__6206__6208.call(this,x);
case  2 :
return G__6206__6209.call(this,x,y);
case  3 :
return G__6206__6210.call(this,x,y,z);
default:
return G__6206__6211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6206.cljs$lang$maxFixedArity = 3;
G__6206.cljs$lang$applyTo = G__6206__6211.cljs$lang$applyTo;
return G__6206;
})()
});
var juxt__6194 = (function (f,g,h){
return (function() {
var G__6215 = null;
var G__6215__6216 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6215__6217 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6215__6218 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6215__6219 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6215__6220 = (function() { 
var G__6222__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6222 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6222__delegate.call(this, x, y, z, args);
};
G__6222.cljs$lang$maxFixedArity = 3;
G__6222.cljs$lang$applyTo = (function (arglist__6223){
var x = cljs.core.first(arglist__6223);
var y = cljs.core.first(cljs.core.next(arglist__6223));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6223)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6223)));
return G__6222__delegate.call(this, x, y, z, args);
});
return G__6222;
})()
;
G__6215 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6215__6216.call(this);
case  1 :
return G__6215__6217.call(this,x);
case  2 :
return G__6215__6218.call(this,x,y);
case  3 :
return G__6215__6219.call(this,x,y,z);
default:
return G__6215__6220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6215.cljs$lang$maxFixedArity = 3;
G__6215.cljs$lang$applyTo = G__6215__6220.cljs$lang$applyTo;
return G__6215;
})()
});
var juxt__6195 = (function() { 
var G__6224__delegate = function (f,g,h,fs){
var fs__6191 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__6225 = null;
var G__6225__6226 = (function (){
return cljs.core.reduce.call(null,(function (p1__6174_SHARP_,p2__6175_SHARP_){
return cljs.core.conj.call(null,p1__6174_SHARP_,p2__6175_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__6191);
});
var G__6225__6227 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6176_SHARP_,p2__6177_SHARP_){
return cljs.core.conj.call(null,p1__6176_SHARP_,p2__6177_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__6191);
});
var G__6225__6228 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6178_SHARP_,p2__6179_SHARP_){
return cljs.core.conj.call(null,p1__6178_SHARP_,p2__6179_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__6191);
});
var G__6225__6229 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6180_SHARP_,p2__6181_SHARP_){
return cljs.core.conj.call(null,p1__6180_SHARP_,p2__6181_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__6191);
});
var G__6225__6230 = (function() { 
var G__6232__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6182_SHARP_,p2__6183_SHARP_){
return cljs.core.conj.call(null,p1__6182_SHARP_,cljs.core.apply.call(null,p2__6183_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__6191);
};
var G__6232 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6232__delegate.call(this, x, y, z, args);
};
G__6232.cljs$lang$maxFixedArity = 3;
G__6232.cljs$lang$applyTo = (function (arglist__6233){
var x = cljs.core.first(arglist__6233);
var y = cljs.core.first(cljs.core.next(arglist__6233));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6233)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6233)));
return G__6232__delegate.call(this, x, y, z, args);
});
return G__6232;
})()
;
G__6225 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6225__6226.call(this);
case  1 :
return G__6225__6227.call(this,x);
case  2 :
return G__6225__6228.call(this,x,y);
case  3 :
return G__6225__6229.call(this,x,y,z);
default:
return G__6225__6230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6225.cljs$lang$maxFixedArity = 3;
G__6225.cljs$lang$applyTo = G__6225__6230.cljs$lang$applyTo;
return G__6225;
})()
};
var G__6224 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6224__delegate.call(this, f, g, h, fs);
};
G__6224.cljs$lang$maxFixedArity = 3;
G__6224.cljs$lang$applyTo = (function (arglist__6234){
var f = cljs.core.first(arglist__6234);
var g = cljs.core.first(cljs.core.next(arglist__6234));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6234)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6234)));
return G__6224__delegate.call(this, f, g, h, fs);
});
return G__6224;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__6192.call(this,f);
case  2 :
return juxt__6193.call(this,f,g);
case  3 :
return juxt__6194.call(this,f,g,h);
default:
return juxt__6195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__6195.cljs$lang$applyTo;
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
var dorun__6236 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6239 = cljs.core.next.call(null,coll);
coll = G__6239;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__6237 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____6235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____6235))
{return (n > 0);
} else
{return and__3546__auto____6235;
}
})()))
{{
var G__6240 = (n - 1);
var G__6241 = cljs.core.next.call(null,coll);
n = G__6240;
coll = G__6241;
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
case  1 :
return dorun__6236.call(this,n);
case  2 :
return dorun__6237.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
var doall__6242 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__6243 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__6242.call(this,n);
case  2 :
return doall__6243.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__6245 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6245),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6245),1)))
{return cljs.core.first.call(null,matches__6245);
} else
{return cljs.core.vec.call(null,matches__6245);
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
var matches__6246 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__6246)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6246),1)))
{return cljs.core.first.call(null,matches__6246);
} else
{return cljs.core.vec.call(null,matches__6246);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6247 = cljs.core.re_find.call(null,re,s);
var match_idx__6248 = s.search(re);
var match_str__6249 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__6247))?cljs.core.first.call(null,match_data__6247):match_data__6247);
var post_match__6250 = cljs.core.subs.call(null,s,(match_idx__6248 + cljs.core.count.call(null,match_str__6249)));

if(cljs.core.truth_(match_data__6247))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6247,re_seq.call(null,re,post_match__6250));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6251_SHARP_){
return print_one.call(null,p1__6251_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____6252 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____6252))
{var and__3546__auto____6256 = (function (){var x__349__auto____6253 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6254 = x__349__auto____6253;

if(cljs.core.truth_(and__3546__auto____6254))
{var and__3546__auto____6255 = x__349__auto____6253.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6255))
{return cljs.core.not.call(null,x__349__auto____6253.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6255;
}
} else
{return and__3546__auto____6254;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__349__auto____6253);
}
})();

if(cljs.core.truth_(and__3546__auto____6256))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____6256;
}
} else
{return and__3546__auto____6252;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__349__auto____6257 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____6258 = x__349__auto____6257;

if(cljs.core.truth_(and__3546__auto____6258))
{var and__3546__auto____6259 = x__349__auto____6257.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____6259))
{return cljs.core.not.call(null,x__349__auto____6257.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____6259;
}
} else
{return and__3546__auto____6258;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__349__auto____6257);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__6260 = cljs.core.first.call(null,objs);
var sb__6261 = (new goog.string.StringBuffer());

var G__6262__6263 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6262__6263))
{var obj__6264 = cljs.core.first.call(null,G__6262__6263);
var G__6262__6265 = G__6262__6263;

while(true){
if(cljs.core.truth_((obj__6264 === first_obj__6260)))
{} else
{sb__6261.append(" ");
}
var G__6266__6267 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6264,opts));

if(cljs.core.truth_(G__6266__6267))
{var string__6268 = cljs.core.first.call(null,G__6266__6267);
var G__6266__6269 = G__6266__6267;

while(true){
sb__6261.append(string__6268);
var temp__3698__auto____6270 = cljs.core.next.call(null,G__6266__6269);

if(cljs.core.truth_(temp__3698__auto____6270))
{var G__6266__6271 = temp__3698__auto____6270;

{
var G__6274 = cljs.core.first.call(null,G__6266__6271);
var G__6275 = G__6266__6271;
string__6268 = G__6274;
G__6266__6269 = G__6275;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6272 = cljs.core.next.call(null,G__6262__6265);

if(cljs.core.truth_(temp__3698__auto____6272))
{var G__6262__6273 = temp__3698__auto____6272;

{
var G__6276 = cljs.core.first.call(null,G__6262__6273);
var G__6277 = G__6262__6273;
obj__6264 = G__6276;
G__6262__6265 = G__6277;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__6261);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6278 = cljs.core.first.call(null,objs);

var G__6279__6280 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6279__6280))
{var obj__6281 = cljs.core.first.call(null,G__6279__6280);
var G__6279__6282 = G__6279__6280;

while(true){
if(cljs.core.truth_((obj__6281 === first_obj__6278)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6283__6284 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6281,opts));

if(cljs.core.truth_(G__6283__6284))
{var string__6285 = cljs.core.first.call(null,G__6283__6284);
var G__6283__6286 = G__6283__6284;

while(true){
cljs.core.string_print.call(null,string__6285);
var temp__3698__auto____6287 = cljs.core.next.call(null,G__6283__6286);

if(cljs.core.truth_(temp__3698__auto____6287))
{var G__6283__6288 = temp__3698__auto____6287;

{
var G__6291 = cljs.core.first.call(null,G__6283__6288);
var G__6292 = G__6283__6288;
string__6285 = G__6291;
G__6283__6286 = G__6292;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____6289 = cljs.core.next.call(null,G__6279__6282);

if(cljs.core.truth_(temp__3698__auto____6289))
{var G__6279__6290 = temp__3698__auto____6289;

{
var G__6293 = cljs.core.first.call(null,G__6279__6290);
var G__6294 = G__6279__6290;
obj__6281 = G__6293;
G__6279__6282 = G__6294;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__6295){
var objs = cljs.core.seq( arglist__6295 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
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
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__6296){
var objs = cljs.core.seq( arglist__6296 );;
return pr__delegate.call(this, objs);
});
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
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__6297){
var objs = cljs.core.seq( arglist__6297 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__6298){
var objs = cljs.core.seq( arglist__6298 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__6299){
var objs = cljs.core.seq( arglist__6299 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6300 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6300,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____6301 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6301))
{var nspc__6302 = temp__3698__auto____6301;

return cljs.core.str.call(null,nspc__6302,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____6303 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____6303))
{var nspc__6304 = temp__3698__auto____6303;

return cljs.core.str.call(null,nspc__6304,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6305 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6305,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__6306 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__6307 = this;
var G__6308__6309 = cljs.core.seq.call(null,this__6307.watches);

if(cljs.core.truth_(G__6308__6309))
{var G__6311__6313 = cljs.core.first.call(null,G__6308__6309);
var vec__6312__6314 = G__6311__6313;
var key__6315 = cljs.core.nth.call(null,vec__6312__6314,0,null);
var f__6316 = cljs.core.nth.call(null,vec__6312__6314,1,null);
var G__6308__6317 = G__6308__6309;

var G__6311__6318 = G__6311__6313;
var G__6308__6319 = G__6308__6317;

while(true){
var vec__6320__6321 = G__6311__6318;
var key__6322 = cljs.core.nth.call(null,vec__6320__6321,0,null);
var f__6323 = cljs.core.nth.call(null,vec__6320__6321,1,null);
var G__6308__6324 = G__6308__6319;

f__6323.call(null,key__6322,this$,oldval,newval);
var temp__3698__auto____6325 = cljs.core.next.call(null,G__6308__6324);

if(cljs.core.truth_(temp__3698__auto____6325))
{var G__6308__6326 = temp__3698__auto____6325;

{
var G__6333 = cljs.core.first.call(null,G__6308__6326);
var G__6334 = G__6308__6326;
G__6311__6318 = G__6333;
G__6308__6319 = G__6334;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__6327 = this;
return this$.watches = cljs.core.assoc.call(null,this__6327.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__6328 = this;
return this$.watches = cljs.core.dissoc.call(null,this__6328.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__6329 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6329.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__6330 = this;
return this__6330.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6331 = this;
return this__6331.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6332 = this;
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
var atom__6341 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__6342 = (function() { 
var G__6344__delegate = function (x,p__6335){
var map__6336__6337 = p__6335;
var map__6336__6338 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6336__6337))?cljs.core.apply.call(null,cljs.core.hash_map,map__6336__6337):map__6336__6337);
var validator__6339 = cljs.core.get.call(null,map__6336__6338,"﷐'validator");
var meta__6340 = cljs.core.get.call(null,map__6336__6338,"﷐'meta");

return (new cljs.core.Atom(x,meta__6340,validator__6339,null));
};
var G__6344 = function (x,var_args){
var p__6335 = null;
if (goog.isDef(var_args)) {
  p__6335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6344__delegate.call(this, x, p__6335);
};
G__6344.cljs$lang$maxFixedArity = 1;
G__6344.cljs$lang$applyTo = (function (arglist__6345){
var x = cljs.core.first(arglist__6345);
var p__6335 = cljs.core.rest(arglist__6345);
return G__6344__delegate.call(this, x, p__6335);
});
return G__6344;
})()
;
atom = function(x,var_args){
var p__6335 = var_args;
switch(arguments.length){
case  1 :
return atom__6341.call(this,x);
default:
return atom__6342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__6342.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____6346 = a.validator;

if(cljs.core.truth_(temp__3698__auto____6346))
{var validate__6347 = temp__3698__auto____6346;

if(cljs.core.truth_(validate__6347.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__6348 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__6348,new_value);
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
var swap_BANG___6349 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___6350 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___6351 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___6352 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6353 = (function() { 
var G__6355__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6355 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6355__delegate.call(this, a, f, x, y, z, more);
};
G__6355.cljs$lang$maxFixedArity = 5;
G__6355.cljs$lang$applyTo = (function (arglist__6356){
var a = cljs.core.first(arglist__6356);
var f = cljs.core.first(cljs.core.next(arglist__6356));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6356)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6356))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6356)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6356)))));
return G__6355__delegate.call(this, a, f, x, y, z, more);
});
return G__6355;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___6349.call(this,a,f);
case  3 :
return swap_BANG___6350.call(this,a,f,x);
case  4 :
return swap_BANG___6351.call(this,a,f,x,y);
case  5 :
return swap_BANG___6352.call(this,a,f,x,y,z);
default:
return swap_BANG___6353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6353.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
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
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6357){
var iref = cljs.core.first(arglist__6357);
var f = cljs.core.first(cljs.core.next(arglist__6357));
var args = cljs.core.rest(cljs.core.next(arglist__6357));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
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
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__6358 = (function (){
return gensym.call(null,"G__");
});
var gensym__6359 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__6358.call(this);
case  1 :
return gensym__6359.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__6361 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__6361.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6362 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__6362.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__6362.state,this__6362.f);
}
return cljs.core.deref.call(null,this__6362.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__6363){
var body = cljs.core.seq( arglist__6363 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
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
var map__6364__6365 = options;
var map__6364__6366 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6364__6365))?cljs.core.apply.call(null,cljs.core.hash_map,map__6364__6365):map__6364__6365);
var keywordize_keys__6367 = cljs.core.get.call(null,map__6364__6366,"﷐'keywordize-keys");
var keyfn__6368 = (cljs.core.truth_(keywordize_keys__6367)?cljs.core.keyword:cljs.core.str);
var f__6374 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__413__auto____6373 = (function iter__6369(s__6370){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6370__6371 = s__6370;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6370__6371)))
{var k__6372 = cljs.core.first.call(null,s__6370__6371);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__6368.call(null,k__6372),thisfn.call(null,(x[k__6372]))]),iter__6369.call(null,cljs.core.rest.call(null,s__6370__6371)));
} else
{return null;
}
break;
}
})));
});

return iter__413__auto____6373.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__6374.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6375){
var x = cljs.core.first(arglist__6375);
var options = cljs.core.rest(arglist__6375);
return js__GT_clj__delegate.call(this, x, options);
});
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
var mem__6376 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__6380__delegate = function (args){
var temp__3695__auto____6377 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6376),args);

if(cljs.core.truth_(temp__3695__auto____6377))
{var v__6378 = temp__3695__auto____6377;

return v__6378;
} else
{var ret__6379 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__6376,cljs.core.assoc,args,ret__6379);
return ret__6379;
}
};
var G__6380 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6380__delegate.call(this, args);
};
G__6380.cljs$lang$maxFixedArity = 0;
G__6380.cljs$lang$applyTo = (function (arglist__6381){
var args = cljs.core.seq( arglist__6381 );;
return G__6380__delegate.call(this, args);
});
return G__6380;
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
var trampoline__6383 = (function (f){
while(true){
var ret__6382 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__6382)))
{{
var G__6386 = ret__6382;
f = G__6386;
continue;
}
} else
{return ret__6382;
}
break;
}
});
var trampoline__6384 = (function() { 
var G__6387__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6387 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6387__delegate.call(this, f, args);
};
G__6387.cljs$lang$maxFixedArity = 1;
G__6387.cljs$lang$applyTo = (function (arglist__6388){
var f = cljs.core.first(arglist__6388);
var args = cljs.core.rest(arglist__6388);
return G__6387__delegate.call(this, f, args);
});
return G__6387;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__6383.call(this,f);
default:
return trampoline__6384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__6384.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6389 = (function (){
return rand.call(null,1);
});
var rand__6390 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6389.call(this);
case  1 :
return rand__6390.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__6392 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6392,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6392,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___6401 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6402 = (function (h,child,parent){
var or__3548__auto____6393 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____6393))
{return or__3548__auto____6393;
} else
{var or__3548__auto____6394 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____6394))
{return or__3548__auto____6394;
} else
{var and__3546__auto____6395 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____6395))
{var and__3546__auto____6396 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____6396))
{var and__3546__auto____6397 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____6397))
{var ret__6398 = true;
var i__6399 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____6400 = cljs.core.not.call(null,ret__6398);

if(cljs.core.truth_(or__3548__auto____6400))
{return or__3548__auto____6400;
} else
{return cljs.core._EQ_.call(null,i__6399,cljs.core.count.call(null,parent));
}
})()))
{return ret__6398;
} else
{{
var G__6404 = isa_QMARK_.call(null,h,child.call(null,i__6399),parent.call(null,i__6399));
var G__6405 = (i__6399 + 1);
ret__6398 = G__6404;
i__6399 = G__6405;
continue;
}
}
break;
}
} else
{return and__3546__auto____6397;
}
} else
{return and__3546__auto____6396;
}
} else
{return and__3546__auto____6395;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6401.call(this,h,child);
case  3 :
return isa_QMARK___6402.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__6406 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6407 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6406.call(this,h);
case  2 :
return parents__6407.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__6409 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6410 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6409.call(this,h);
case  2 :
return ancestors__6410.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__6412 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6413 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6412.call(this,h);
case  2 :
return descendants__6413.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
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
var derive__6423 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6424 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__6418 = "﷐'parents".call(null,h);
var td__6419 = "﷐'descendants".call(null,h);
var ta__6420 = "﷐'ancestors".call(null,h);
var tf__6421 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____6422 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6418.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6420.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6420.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6418,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__6421.call(null,"﷐'ancestors".call(null,h),tag,td__6419,parent,ta__6420),"﷐'descendants":tf__6421.call(null,"﷐'descendants".call(null,h),parent,ta__6420,tag,td__6419)});
})());

if(cljs.core.truth_(or__3548__auto____6422))
{return or__3548__auto____6422;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6423.call(this,h,tag);
case  3 :
return derive__6424.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
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
var underive__6430 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6431 = (function (h,tag,parent){
var parentMap__6426 = "﷐'parents".call(null,h);
var childsParents__6427 = (cljs.core.truth_(parentMap__6426.call(null,tag))?cljs.core.disj.call(null,parentMap__6426.call(null,tag),parent):cljs.core.set([]));
var newParents__6428 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6427))?cljs.core.assoc.call(null,parentMap__6426,tag,childsParents__6427):cljs.core.dissoc.call(null,parentMap__6426,tag));
var deriv_seq__6429 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6415_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6415_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6415_SHARP_),cljs.core.second.call(null,p1__6415_SHARP_)));
}),cljs.core.seq.call(null,newParents__6428)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6426.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6416_SHARP_,p2__6417_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6416_SHARP_,p2__6417_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6429));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6430.call(this,h,tag);
case  3 :
return underive__6431.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__6433 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____6435 = (cljs.core.truth_((function (){var and__3546__auto____6434 = xprefs__6433;

if(cljs.core.truth_(and__3546__auto____6434))
{return xprefs__6433.call(null,y);
} else
{return and__3546__auto____6434;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____6435))
{return or__3548__auto____6435;
} else
{var or__3548__auto____6437 = (function (){var ps__6436 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6436) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6436),prefer_table)))
{} else
{}
{
var G__6440 = cljs.core.rest.call(null,ps__6436);
ps__6436 = G__6440;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6437))
{return or__3548__auto____6437;
} else
{var or__3548__auto____6439 = (function (){var ps__6438 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6438) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6438),y,prefer_table)))
{} else
{}
{
var G__6441 = cljs.core.rest.call(null,ps__6438);
ps__6438 = G__6441;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____6439))
{return or__3548__auto____6439;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____6442 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____6442))
{return or__3548__auto____6442;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6451 = cljs.core.reduce.call(null,(function (be,p__6443){
var vec__6444__6445 = p__6443;
var k__6446 = cljs.core.nth.call(null,vec__6444__6445,0,null);
var ___6447 = cljs.core.nth.call(null,vec__6444__6445,1,null);
var e__6448 = vec__6444__6445;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6446)))
{var be2__6450 = (cljs.core.truth_((function (){var or__3548__auto____6449 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____6449))
{return or__3548__auto____6449;
} else
{return cljs.core.dominates.call(null,k__6446,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6448:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6450),k__6446,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6446," and ",cljs.core.first.call(null,be2__6450),", and neither is preferred")));
}
return be2__6450;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6451))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6451));
return cljs.core.second.call(null,best_entry__6451);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6452 = mf;

if(cljs.core.truth_(and__3546__auto____6452))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____6452;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____6453 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6453))
{return or__3548__auto____6453;
} else
{var or__3548__auto____6454 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____6454))
{return or__3548__auto____6454;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____6455 = mf;

if(cljs.core.truth_(and__3546__auto____6455))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____6455;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____6456 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6456))
{return or__3548__auto____6456;
} else
{var or__3548__auto____6457 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____6457))
{return or__3548__auto____6457;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6458 = mf;

if(cljs.core.truth_(and__3546__auto____6458))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____6458;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6459 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6459))
{return or__3548__auto____6459;
} else
{var or__3548__auto____6460 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____6460))
{return or__3548__auto____6460;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____6461 = mf;

if(cljs.core.truth_(and__3546__auto____6461))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____6461;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____6462 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6462))
{return or__3548__auto____6462;
} else
{var or__3548__auto____6463 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____6463))
{return or__3548__auto____6463;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____6464 = mf;

if(cljs.core.truth_(and__3546__auto____6464))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____6464;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____6465 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6465))
{return or__3548__auto____6465;
} else
{var or__3548__auto____6466 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____6466))
{return or__3548__auto____6466;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6467 = mf;

if(cljs.core.truth_(and__3546__auto____6467))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____6467;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____6468 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6468))
{return or__3548__auto____6468;
} else
{var or__3548__auto____6469 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____6469))
{return or__3548__auto____6469;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____6470 = mf;

if(cljs.core.truth_(and__3546__auto____6470))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____6470;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____6471 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6471))
{return or__3548__auto____6471;
} else
{var or__3548__auto____6472 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____6472))
{return or__3548__auto____6472;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____6473 = mf;

if(cljs.core.truth_(and__3546__auto____6473))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____6473;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____6474 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____6474))
{return or__3548__auto____6474;
} else
{var or__3548__auto____6475 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____6475))
{return or__3548__auto____6475;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__6476 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6477 = cljs.core._get_method.call(null,mf,dispatch_val__6476);

if(cljs.core.truth_(target_fn__6477))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6476)));
}
return cljs.core.apply.call(null,target_fn__6477,args);
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
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__264__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__6478 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__6479 = this;
cljs.core.swap_BANG_.call(null,this__6479.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6479.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6479.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6479.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__6480 = this;
cljs.core.swap_BANG_.call(null,this__6480.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6480.method_cache,this__6480.method_table,this__6480.cached_hierarchy,this__6480.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__6481 = this;
cljs.core.swap_BANG_.call(null,this__6481.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6481.method_cache,this__6481.method_table,this__6481.cached_hierarchy,this__6481.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__6482 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6482.cached_hierarchy),cljs.core.deref.call(null,this__6482.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__6482.method_cache,this__6482.method_table,this__6482.cached_hierarchy,this__6482.hierarchy);
}
var temp__3695__auto____6483 = cljs.core.deref.call(null,this__6482.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____6483))
{var target_fn__6484 = temp__3695__auto____6483;

return target_fn__6484;
} else
{var temp__3695__auto____6485 = cljs.core.find_and_cache_best_method.call(null,this__6482.name,dispatch_val,this__6482.hierarchy,this__6482.method_table,this__6482.prefer_table,this__6482.method_cache,this__6482.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____6485))
{var target_fn__6486 = temp__3695__auto____6485;

return target_fn__6486;
} else
{return cljs.core.deref.call(null,this__6482.method_table).call(null,this__6482.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__6487 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__6487.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__6487.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__6487.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__6487.method_cache,this__6487.method_table,this__6487.cached_hierarchy,this__6487.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__6488 = this;
return cljs.core.deref.call(null,this__6488.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__6489 = this;
return cljs.core.deref.call(null,this__6489.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__6490 = this;
return cljs.core.do_dispatch.call(null,mf,this__6490.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__6491__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__6491 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6491__delegate.call(this, _, args);
};
G__6491.cljs$lang$maxFixedArity = 1;
G__6491.cljs$lang$applyTo = (function (arglist__6492){
var _ = cljs.core.first(arglist__6492);
var args = cljs.core.rest(arglist__6492);
return G__6491__delegate.call(this, _, args);
});
return G__6491;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

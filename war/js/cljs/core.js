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
var or__3548__auto____3118 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{var or__3548__auto____3119 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3119))
{return or__3548__auto____3119;
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
var _invoke__3183 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3120 = this$;

if(cljs.core.truth_(and__3546__auto____3120))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3120;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3121 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{var or__3548__auto____3122 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3122))
{return or__3548__auto____3122;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3184 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3123 = this$;

if(cljs.core.truth_(and__3546__auto____3123))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3123;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3124 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{var or__3548__auto____3125 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3125))
{return or__3548__auto____3125;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3185 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3126 = this$;

if(cljs.core.truth_(and__3546__auto____3126))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3126;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3127 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{var or__3548__auto____3128 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3128))
{return or__3548__auto____3128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3186 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3129 = this$;

if(cljs.core.truth_(and__3546__auto____3129))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3129;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3130 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
} else
{var or__3548__auto____3131 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3131))
{return or__3548__auto____3131;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3187 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3132 = this$;

if(cljs.core.truth_(and__3546__auto____3132))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3132;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3133 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{var or__3548__auto____3134 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3188 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3135 = this$;

if(cljs.core.truth_(and__3546__auto____3135))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3135;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3136 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{var or__3548__auto____3137 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3189 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3138 = this$;

if(cljs.core.truth_(and__3546__auto____3138))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3138;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3139 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{var or__3548__auto____3140 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3190 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3141 = this$;

if(cljs.core.truth_(and__3546__auto____3141))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3141;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3142 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{var or__3548__auto____3143 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3191 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3144 = this$;

if(cljs.core.truth_(and__3546__auto____3144))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3144;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3145 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{var or__3548__auto____3146 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3146))
{return or__3548__auto____3146;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3192 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3147 = this$;

if(cljs.core.truth_(and__3546__auto____3147))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3147;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3148 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{var or__3548__auto____3149 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3193 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3150 = this$;

if(cljs.core.truth_(and__3546__auto____3150))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3150;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3151 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{var or__3548__auto____3152 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3152))
{return or__3548__auto____3152;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3194 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3153 = this$;

if(cljs.core.truth_(and__3546__auto____3153))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3153;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3154 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{var or__3548__auto____3155 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3155))
{return or__3548__auto____3155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3195 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3156 = this$;

if(cljs.core.truth_(and__3546__auto____3156))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3156;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3157 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{var or__3548__auto____3158 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3196 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3159 = this$;

if(cljs.core.truth_(and__3546__auto____3159))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3159;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{var or__3548__auto____3161 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3161))
{return or__3548__auto____3161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3197 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3162 = this$;

if(cljs.core.truth_(and__3546__auto____3162))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3162;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{var or__3548__auto____3164 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3164))
{return or__3548__auto____3164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3198 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3165 = this$;

if(cljs.core.truth_(and__3546__auto____3165))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3165;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{var or__3548__auto____3167 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3199 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3168 = this$;

if(cljs.core.truth_(and__3546__auto____3168))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3168;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{var or__3548__auto____3170 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3200 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3171 = this$;

if(cljs.core.truth_(and__3546__auto____3171))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3171;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3172 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{var or__3548__auto____3173 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3201 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3174 = this$;

if(cljs.core.truth_(and__3546__auto____3174))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3174;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3175 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{var or__3548__auto____3176 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3202 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3177 = this$;

if(cljs.core.truth_(and__3546__auto____3177))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3177;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3178 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3203 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3180 = this$;

if(cljs.core.truth_(and__3546__auto____3180))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3180;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3181 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{var or__3548__auto____3182 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
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
return _invoke__3183.call(this,this$);
case  2 :
return _invoke__3184.call(this,this$,a);
case  3 :
return _invoke__3185.call(this,this$,a,b);
case  4 :
return _invoke__3186.call(this,this$,a,b,c);
case  5 :
return _invoke__3187.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3188.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3189.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3190.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3191.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3192.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3193.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3194.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3195.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3196.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3197.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3198.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3199.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3200.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3201.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3202.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3203.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3205 = coll;

if(cljs.core.truth_(and__3546__auto____3205))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3205;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3206 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{var or__3548__auto____3207 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3208 = coll;

if(cljs.core.truth_(and__3546__auto____3208))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3208;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3209 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3211 = coll;

if(cljs.core.truth_(and__3546__auto____3211))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3211;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3212 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{var or__3548__auto____3213 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
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
var _nth__3220 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3214 = coll;

if(cljs.core.truth_(and__3546__auto____3214))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3214;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3215 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{var or__3548__auto____3216 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3221 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3217 = coll;

if(cljs.core.truth_(and__3546__auto____3217))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3217;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3218 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{var or__3548__auto____3219 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
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
return _nth__3220.call(this,coll,n);
case  3 :
return _nth__3221.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3223 = coll;

if(cljs.core.truth_(and__3546__auto____3223))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3223;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3224 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3224))
{return or__3548__auto____3224;
} else
{var or__3548__auto____3225 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3225))
{return or__3548__auto____3225;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3226 = coll;

if(cljs.core.truth_(and__3546__auto____3226))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3226;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3227 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3227))
{return or__3548__auto____3227;
} else
{var or__3548__auto____3228 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
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
var _lookup__3235 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3229 = o;

if(cljs.core.truth_(and__3546__auto____3229))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3229;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3230 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3230))
{return or__3548__auto____3230;
} else
{var or__3548__auto____3231 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3236 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3232 = o;

if(cljs.core.truth_(and__3546__auto____3232))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3232;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3233 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3233))
{return or__3548__auto____3233;
} else
{var or__3548__auto____3234 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
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
return _lookup__3235.call(this,o,k);
case  3 :
return _lookup__3236.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3238 = coll;

if(cljs.core.truth_(and__3546__auto____3238))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3238;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3239 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3239))
{return or__3548__auto____3239;
} else
{var or__3548__auto____3240 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3240))
{return or__3548__auto____3240;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3241 = coll;

if(cljs.core.truth_(and__3546__auto____3241))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3241;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3242 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3242))
{return or__3548__auto____3242;
} else
{var or__3548__auto____3243 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3243))
{return or__3548__auto____3243;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3244 = coll;

if(cljs.core.truth_(and__3546__auto____3244))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3244;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3245 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3245))
{return or__3548__auto____3245;
} else
{var or__3548__auto____3246 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3246))
{return or__3548__auto____3246;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3247 = coll;

if(cljs.core.truth_(and__3546__auto____3247))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3247;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3248 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3248))
{return or__3548__auto____3248;
} else
{var or__3548__auto____3249 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3249))
{return or__3548__auto____3249;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3250 = coll;

if(cljs.core.truth_(and__3546__auto____3250))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3250;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3251 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{var or__3548__auto____3252 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3252))
{return or__3548__auto____3252;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3253 = coll;

if(cljs.core.truth_(and__3546__auto____3253))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3253;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3254 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{var or__3548__auto____3255 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3255))
{return or__3548__auto____3255;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3256 = coll;

if(cljs.core.truth_(and__3546__auto____3256))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3256;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3257 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
} else
{var or__3548__auto____3258 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3258))
{return or__3548__auto____3258;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3259 = o;

if(cljs.core.truth_(and__3546__auto____3259))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3259;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3260 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3260))
{return or__3548__auto____3260;
} else
{var or__3548__auto____3261 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3261))
{return or__3548__auto____3261;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3262 = o;

if(cljs.core.truth_(and__3546__auto____3262))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3262;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3263 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
} else
{var or__3548__auto____3264 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3264))
{return or__3548__auto____3264;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3265 = o;

if(cljs.core.truth_(and__3546__auto____3265))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3265;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3266 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{var or__3548__auto____3267 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3267))
{return or__3548__auto____3267;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3268 = o;

if(cljs.core.truth_(and__3546__auto____3268))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3268;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3269 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{var or__3548__auto____3270 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3270))
{return or__3548__auto____3270;
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
var _reduce__3277 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3271 = coll;

if(cljs.core.truth_(and__3546__auto____3271))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3271;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3272 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3272))
{return or__3548__auto____3272;
} else
{var or__3548__auto____3273 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3273))
{return or__3548__auto____3273;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3278 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3274 = coll;

if(cljs.core.truth_(and__3546__auto____3274))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3274;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3275 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3275))
{return or__3548__auto____3275;
} else
{var or__3548__auto____3276 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3276))
{return or__3548__auto____3276;
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
return _reduce__3277.call(this,coll,f);
case  3 :
return _reduce__3278.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3280 = o;

if(cljs.core.truth_(and__3546__auto____3280))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3280;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3281 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3281))
{return or__3548__auto____3281;
} else
{var or__3548__auto____3282 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3282))
{return or__3548__auto____3282;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3283 = o;

if(cljs.core.truth_(and__3546__auto____3283))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3283;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3284 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{var or__3548__auto____3285 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3285))
{return or__3548__auto____3285;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3286 = o;

if(cljs.core.truth_(and__3546__auto____3286))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3286;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3287 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
} else
{var or__3548__auto____3288 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3288))
{return or__3548__auto____3288;
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
if(cljs.core.truth_((function (){var and__3546__auto____3289 = o;

if(cljs.core.truth_(and__3546__auto____3289))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3289;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3290 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3290))
{return or__3548__auto____3290;
} else
{var or__3548__auto____3291 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3291))
{return or__3548__auto____3291;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3292 = d;

if(cljs.core.truth_(and__3546__auto____3292))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3292;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3293 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{var or__3548__auto____3294 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3294))
{return or__3548__auto____3294;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3295 = this$;

if(cljs.core.truth_(and__3546__auto____3295))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3295;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3296 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
} else
{var or__3548__auto____3297 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3297))
{return or__3548__auto____3297;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3298 = this$;

if(cljs.core.truth_(and__3546__auto____3298))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3298;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3299 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{var or__3548__auto____3300 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3300))
{return or__3548__auto____3300;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3301 = this$;

if(cljs.core.truth_(and__3546__auto____3301))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3301;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3302 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3302))
{return or__3548__auto____3302;
} else
{var or__3548__auto____3303 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3303))
{return or__3548__auto____3303;
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
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3304 = null;
var G__3304__3305 = (function (o,k){
return null;
});
var G__3304__3306 = (function (o,k,not_found){
return not_found;
});
G__3304 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3304__3305.call(this,o,k);
case  3 :
return G__3304__3306.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3304;
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
var G__3308 = null;
var G__3308__3309 = (function (_,f){
return f.call(null);
});
var G__3308__3310 = (function (_,f,start){
return start;
});
G__3308 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3308__3309.call(this,_,f);
case  3 :
return G__3308__3310.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3308;
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
return (o === null);
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
var G__3312 = null;
var G__3312__3313 = (function (_,n){
return null;
});
var G__3312__3314 = (function (_,n,not_found){
return not_found;
});
G__3312 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3312__3313.call(this,_,n);
case  3 :
return G__3312__3314.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3312;
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
var ci_reduce__3322 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3316 = cljs.core._nth.call(null,cicoll,0);
var n__3317 = 1;

while(true){
if(cljs.core.truth_((n__3317 < cljs.core._count.call(null,cicoll))))
{{
var G__3326 = f.call(null,val__3316,cljs.core._nth.call(null,cicoll,n__3317));
var G__3327 = (n__3317 + 1);
val__3316 = G__3326;
n__3317 = G__3327;
continue;
}
} else
{return val__3316;
}
break;
}
}
});
var ci_reduce__3323 = (function (cicoll,f,val){
var val__3318 = val;
var n__3319 = 0;

while(true){
if(cljs.core.truth_((n__3319 < cljs.core._count.call(null,cicoll))))
{{
var G__3328 = f.call(null,val__3318,cljs.core._nth.call(null,cicoll,n__3319));
var G__3329 = (n__3319 + 1);
val__3318 = G__3328;
n__3319 = G__3329;
continue;
}
} else
{return val__3318;
}
break;
}
});
var ci_reduce__3324 = (function (cicoll,f,val,idx){
var val__3320 = val;
var n__3321 = idx;

while(true){
if(cljs.core.truth_((n__3321 < cljs.core._count.call(null,cicoll))))
{{
var G__3330 = f.call(null,val__3320,cljs.core._nth.call(null,cicoll,n__3321));
var G__3331 = (n__3321 + 1);
val__3320 = G__3330;
n__3321 = G__3331;
continue;
}
} else
{return val__3320;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3322.call(this,cicoll,f);
case  3 :
return ci_reduce__3323.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3324.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3332 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3345 = null;
var G__3345__3346 = (function (_,f){
var this__3333 = this;
return cljs.core.ci_reduce.call(null,this__3333.a,f,(this__3333.a[this__3333.i]),(this__3333.i + 1));
});
var G__3345__3347 = (function (_,f,start){
var this__3334 = this;
return cljs.core.ci_reduce.call(null,this__3334.a,f,start,this__3334.i);
});
G__3345 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3345__3346.call(this,_,f);
case  3 :
return G__3345__3347.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3345;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3335 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3336 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3349 = null;
var G__3349__3350 = (function (coll,n){
var this__3337 = this;
var i__3338 = (n + this__3337.i);

if(cljs.core.truth_((i__3338 < this__3337.a.length)))
{return (this__3337.a[i__3338]);
} else
{return null;
}
});
var G__3349__3351 = (function (coll,n,not_found){
var this__3339 = this;
var i__3340 = (n + this__3339.i);

if(cljs.core.truth_((i__3340 < this__3339.a.length)))
{return (this__3339.a[i__3340]);
} else
{return not_found;
}
});
G__3349 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3349__3350.call(this,coll,n);
case  3 :
return G__3349__3351.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3349;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3341 = this;
return (this__3341.a.length - this__3341.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3342 = this;
return (this__3342.a[this__3342.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3343 = this;
if(cljs.core.truth_(((this__3343.i + 1) < this__3343.a.length)))
{return (new cljs.core.IndexedSeq(this__3343.a,(this__3343.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3344 = this;
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
var G__3353 = null;
var G__3353__3354 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3353__3355 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3353 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3353__3354.call(this,array,f);
case  3 :
return G__3353__3355.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3353;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3357 = null;
var G__3357__3358 = (function (array,k){
return (array[k]);
});
var G__3357__3359 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3357 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3357__3358.call(this,array,k);
case  3 :
return G__3357__3359.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3357;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3361 = null;
var G__3361__3362 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3361__3363 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3361 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3361__3362.call(this,array,n);
case  3 :
return G__3361__3363.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3361;
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
var temp__3698__auto____3365 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3365))
{var s__3366 = temp__3698__auto____3365;

return cljs.core._first.call(null,s__3366);
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
var G__3367 = cljs.core.next.call(null,s);
s = G__3367;
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
var s__3368 = cljs.core.seq.call(null,x);
var n__3369 = 0;

while(true){
if(cljs.core.truth_(s__3368))
{{
var G__3370 = cljs.core.next.call(null,s__3368);
var G__3371 = (n__3369 + 1);
s__3368 = G__3370;
n__3369 = G__3371;
continue;
}
} else
{return n__3369;
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
var conj__3372 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3373 = (function() { 
var G__3375__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3376 = conj.call(null,coll,x);
var G__3377 = cljs.core.first.call(null,xs);
var G__3378 = cljs.core.next.call(null,xs);
coll = G__3376;
x = G__3377;
xs = G__3378;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3375 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3375__delegate.call(this, coll, x, xs);
};
G__3375.cljs$lang$maxFixedArity = 2;
G__3375.cljs$lang$applyTo = (function (arglist__3379){
var coll = cljs.core.first(arglist__3379);
var x = cljs.core.first(cljs.core.next(arglist__3379));
var xs = cljs.core.rest(cljs.core.next(arglist__3379));
return G__3375__delegate.call(this, coll, x, xs);
});
return G__3375;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3372.call(this,coll,x);
default:
return conj__3373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3373.cljs$lang$applyTo;
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
var nth__3380 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3381 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3380.call(this,coll,n);
case  3 :
return nth__3381.call(this,coll,n,not_found);
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
var get__3383 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3384 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3383.call(this,o,k);
case  3 :
return get__3384.call(this,o,k,not_found);
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
var assoc__3387 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3388 = (function() { 
var G__3390__delegate = function (coll,k,v,kvs){
while(true){
var ret__3386 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3391 = ret__3386;
var G__3392 = cljs.core.first.call(null,kvs);
var G__3393 = cljs.core.second.call(null,kvs);
var G__3394 = cljs.core.nnext.call(null,kvs);
coll = G__3391;
k = G__3392;
v = G__3393;
kvs = G__3394;
continue;
}
} else
{return ret__3386;
}
break;
}
};
var G__3390 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3390__delegate.call(this, coll, k, v, kvs);
};
G__3390.cljs$lang$maxFixedArity = 3;
G__3390.cljs$lang$applyTo = (function (arglist__3395){
var coll = cljs.core.first(arglist__3395);
var k = cljs.core.first(cljs.core.next(arglist__3395));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3395)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3395)));
return G__3390__delegate.call(this, coll, k, v, kvs);
});
return G__3390;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3387.call(this,coll,k,v);
default:
return assoc__3388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3388.cljs$lang$applyTo;
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
var dissoc__3397 = (function (coll){
return coll;
});
var dissoc__3398 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3399 = (function() { 
var G__3401__delegate = function (coll,k,ks){
while(true){
var ret__3396 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3402 = ret__3396;
var G__3403 = cljs.core.first.call(null,ks);
var G__3404 = cljs.core.next.call(null,ks);
coll = G__3402;
k = G__3403;
ks = G__3404;
continue;
}
} else
{return ret__3396;
}
break;
}
};
var G__3401 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3401__delegate.call(this, coll, k, ks);
};
G__3401.cljs$lang$maxFixedArity = 2;
G__3401.cljs$lang$applyTo = (function (arglist__3405){
var coll = cljs.core.first(arglist__3405);
var k = cljs.core.first(cljs.core.next(arglist__3405));
var ks = cljs.core.rest(cljs.core.next(arglist__3405));
return G__3401__delegate.call(this, coll, k, ks);
});
return G__3401;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3397.call(this,coll);
case  2 :
return dissoc__3398.call(this,coll,k);
default:
return dissoc__3399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3399.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__354__auto____3406 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3407 = x__354__auto____3406;

if(cljs.core.truth_(and__3546__auto____3407))
{var and__3546__auto____3408 = x__354__auto____3406.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3408))
{return cljs.core.not.call(null,x__354__auto____3406.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3408;
}
} else
{return and__3546__auto____3407;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__354__auto____3406);
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
var disj__3410 = (function (coll){
return coll;
});
var disj__3411 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3412 = (function() { 
var G__3414__delegate = function (coll,k,ks){
while(true){
var ret__3409 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3415 = ret__3409;
var G__3416 = cljs.core.first.call(null,ks);
var G__3417 = cljs.core.next.call(null,ks);
coll = G__3415;
k = G__3416;
ks = G__3417;
continue;
}
} else
{return ret__3409;
}
break;
}
};
var G__3414 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3414__delegate.call(this, coll, k, ks);
};
G__3414.cljs$lang$maxFixedArity = 2;
G__3414.cljs$lang$applyTo = (function (arglist__3418){
var coll = cljs.core.first(arglist__3418);
var k = cljs.core.first(cljs.core.next(arglist__3418));
var ks = cljs.core.rest(cljs.core.next(arglist__3418));
return G__3414__delegate.call(this, coll, k, ks);
});
return G__3414;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3410.call(this,coll);
case  2 :
return disj__3411.call(this,coll,k);
default:
return disj__3412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3412.cljs$lang$applyTo;
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
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__354__auto____3419 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3420 = x__354__auto____3419;

if(cljs.core.truth_(and__3546__auto____3420))
{var and__3546__auto____3421 = x__354__auto____3419.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3421))
{return cljs.core.not.call(null,x__354__auto____3419.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3421;
}
} else
{return and__3546__auto____3420;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__354__auto____3419);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__354__auto____3422 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3423 = x__354__auto____3422;

if(cljs.core.truth_(and__3546__auto____3423))
{var and__3546__auto____3424 = x__354__auto____3422.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3424))
{return cljs.core.not.call(null,x__354__auto____3422.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3424;
}
} else
{return and__3546__auto____3423;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__354__auto____3422);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__354__auto____3425 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3426 = x__354__auto____3425;

if(cljs.core.truth_(and__3546__auto____3426))
{var and__3546__auto____3427 = x__354__auto____3425.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3427))
{return cljs.core.not.call(null,x__354__auto____3425.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3427;
}
} else
{return and__3546__auto____3426;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__354__auto____3425);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__354__auto____3428 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3429 = x__354__auto____3428;

if(cljs.core.truth_(and__3546__auto____3429))
{var and__3546__auto____3430 = x__354__auto____3428.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3430))
{return cljs.core.not.call(null,x__354__auto____3428.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3430;
}
} else
{return and__3546__auto____3429;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__354__auto____3428);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__354__auto____3431 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3432 = x__354__auto____3431;

if(cljs.core.truth_(and__3546__auto____3432))
{var and__3546__auto____3433 = x__354__auto____3431.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3433))
{return cljs.core.not.call(null,x__354__auto____3431.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3433;
}
} else
{return and__3546__auto____3432;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__354__auto____3431);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__354__auto____3434 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3435 = x__354__auto____3434;

if(cljs.core.truth_(and__3546__auto____3435))
{var and__3546__auto____3436 = x__354__auto____3434.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3436))
{return cljs.core.not.call(null,x__354__auto____3434.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3436;
}
} else
{return and__3546__auto____3435;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__354__auto____3434);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__354__auto____3437 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3438 = x__354__auto____3437;

if(cljs.core.truth_(and__3546__auto____3438))
{var and__3546__auto____3439 = x__354__auto____3437.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3439))
{return cljs.core.not.call(null,x__354__auto____3437.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3439;
}
} else
{return and__3546__auto____3438;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__354__auto____3437);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3440 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3440.push(key);
}));
return keys__3440;
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
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__354__auto____3441 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3442 = x__354__auto____3441;

if(cljs.core.truth_(and__3546__auto____3442))
{var and__3546__auto____3443 = x__354__auto____3441.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3443))
{return cljs.core.not.call(null,x__354__auto____3441.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3443;
}
} else
{return and__3546__auto____3442;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__354__auto____3441);
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
var and__3546__auto____3444 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3444))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3445 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3445))
{return or__3548__auto____3445;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3444;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3446 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3446))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3446;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3447 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3447))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3447;
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
var and__3546__auto____3448 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3448))
{return (n == n.toFixed());
} else
{return and__3546__auto____3448;
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
if(cljs.core.truth_((function (){var and__3546__auto____3449 = coll;

if(cljs.core.truth_(and__3546__auto____3449))
{var and__3546__auto____3450 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3450))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3450;
}
} else
{return and__3546__auto____3449;
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
var distinct_QMARK___3455 = (function (x){
return true;
});
var distinct_QMARK___3456 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3457 = (function() { 
var G__3459__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3451 = cljs.core.set([y,x]);
var xs__3452 = more;

while(true){
var x__3453 = cljs.core.first.call(null,xs__3452);
var etc__3454 = cljs.core.next.call(null,xs__3452);

if(cljs.core.truth_(xs__3452))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3451,x__3453)))
{return false;
} else
{{
var G__3460 = cljs.core.conj.call(null,s__3451,x__3453);
var G__3461 = etc__3454;
s__3451 = G__3460;
xs__3452 = G__3461;
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
var G__3459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3459__delegate.call(this, x, y, more);
};
G__3459.cljs$lang$maxFixedArity = 2;
G__3459.cljs$lang$applyTo = (function (arglist__3462){
var x = cljs.core.first(arglist__3462);
var y = cljs.core.first(cljs.core.next(arglist__3462));
var more = cljs.core.rest(cljs.core.next(arglist__3462));
return G__3459__delegate.call(this, x, y, more);
});
return G__3459;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3455.call(this,x);
case  2 :
return distinct_QMARK___3456.call(this,x,y);
default:
return distinct_QMARK___3457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3457.cljs$lang$applyTo;
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
var r__3463 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3463)))
{return r__3463;
} else
{if(cljs.core.truth_(r__3463))
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
var sort__3465 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3466 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3464 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3464,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3464);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3465.call(this,comp);
case  2 :
return sort__3466.call(this,comp,coll);
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
var sort_by__3468 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3469 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3468.call(this,keyfn,comp);
case  3 :
return sort_by__3469.call(this,keyfn,comp,coll);
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
var reduce__3471 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3472 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3471.call(this,f,val);
case  3 :
return reduce__3472.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3478 = (function (f,coll){
var temp__3695__auto____3474 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3474))
{var s__3475 = temp__3695__auto____3474;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3475),cljs.core.next.call(null,s__3475));
} else
{return f.call(null);
}
});
var seq_reduce__3479 = (function (f,val,coll){
var val__3476 = val;
var coll__3477 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3477))
{{
var G__3481 = f.call(null,val__3476,cljs.core.first.call(null,coll__3477));
var G__3482 = cljs.core.next.call(null,coll__3477);
val__3476 = G__3481;
coll__3477 = G__3482;
continue;
}
} else
{return val__3476;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3478.call(this,f,val);
case  3 :
return seq_reduce__3479.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3483 = null;
var G__3483__3484 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3483__3485 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3483 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3483__3484.call(this,coll,f);
case  3 :
return G__3483__3485.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3483;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3487 = (function (){
return 0;
});
var _PLUS___3488 = (function (x){
return x;
});
var _PLUS___3489 = (function (x,y){
return (x + y);
});
var _PLUS___3490 = (function() { 
var G__3492__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3492 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3492__delegate.call(this, x, y, more);
};
G__3492.cljs$lang$maxFixedArity = 2;
G__3492.cljs$lang$applyTo = (function (arglist__3493){
var x = cljs.core.first(arglist__3493);
var y = cljs.core.first(cljs.core.next(arglist__3493));
var more = cljs.core.rest(cljs.core.next(arglist__3493));
return G__3492__delegate.call(this, x, y, more);
});
return G__3492;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3487.call(this);
case  1 :
return _PLUS___3488.call(this,x);
case  2 :
return _PLUS___3489.call(this,x,y);
default:
return _PLUS___3490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3490.cljs$lang$applyTo;
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
var ___3494 = (function (x){
return (- x);
});
var ___3495 = (function (x,y){
return (x - y);
});
var ___3496 = (function() { 
var G__3498__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3498 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3498__delegate.call(this, x, y, more);
};
G__3498.cljs$lang$maxFixedArity = 2;
G__3498.cljs$lang$applyTo = (function (arglist__3499){
var x = cljs.core.first(arglist__3499);
var y = cljs.core.first(cljs.core.next(arglist__3499));
var more = cljs.core.rest(cljs.core.next(arglist__3499));
return G__3498__delegate.call(this, x, y, more);
});
return G__3498;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3494.call(this,x);
case  2 :
return ___3495.call(this,x,y);
default:
return ___3496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3496.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3500 = (function (){
return 1;
});
var _STAR___3501 = (function (x){
return x;
});
var _STAR___3502 = (function (x,y){
return (x * y);
});
var _STAR___3503 = (function() { 
var G__3505__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3505 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3505__delegate.call(this, x, y, more);
};
G__3505.cljs$lang$maxFixedArity = 2;
G__3505.cljs$lang$applyTo = (function (arglist__3506){
var x = cljs.core.first(arglist__3506);
var y = cljs.core.first(cljs.core.next(arglist__3506));
var more = cljs.core.rest(cljs.core.next(arglist__3506));
return G__3505__delegate.call(this, x, y, more);
});
return G__3505;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3500.call(this);
case  1 :
return _STAR___3501.call(this,x);
case  2 :
return _STAR___3502.call(this,x,y);
default:
return _STAR___3503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3503.cljs$lang$applyTo;
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
var _SLASH___3507 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3508 = (function (x,y){
return (x / y);
});
var _SLASH___3509 = (function() { 
var G__3511__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3511 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3511__delegate.call(this, x, y, more);
};
G__3511.cljs$lang$maxFixedArity = 2;
G__3511.cljs$lang$applyTo = (function (arglist__3512){
var x = cljs.core.first(arglist__3512);
var y = cljs.core.first(cljs.core.next(arglist__3512));
var more = cljs.core.rest(cljs.core.next(arglist__3512));
return G__3511__delegate.call(this, x, y, more);
});
return G__3511;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3507.call(this,x);
case  2 :
return _SLASH___3508.call(this,x,y);
default:
return _SLASH___3509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3509.cljs$lang$applyTo;
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
var _LT___3513 = (function (x){
return true;
});
var _LT___3514 = (function (x,y){
return (x < y);
});
var _LT___3515 = (function() { 
var G__3517__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3518 = y;
var G__3519 = cljs.core.first.call(null,more);
var G__3520 = cljs.core.next.call(null,more);
x = G__3518;
y = G__3519;
more = G__3520;
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
var G__3517 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3517__delegate.call(this, x, y, more);
};
G__3517.cljs$lang$maxFixedArity = 2;
G__3517.cljs$lang$applyTo = (function (arglist__3521){
var x = cljs.core.first(arglist__3521);
var y = cljs.core.first(cljs.core.next(arglist__3521));
var more = cljs.core.rest(cljs.core.next(arglist__3521));
return G__3517__delegate.call(this, x, y, more);
});
return G__3517;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3513.call(this,x);
case  2 :
return _LT___3514.call(this,x,y);
default:
return _LT___3515.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3515.cljs$lang$applyTo;
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
var _LT__EQ___3522 = (function (x){
return true;
});
var _LT__EQ___3523 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3524 = (function() { 
var G__3526__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3527 = y;
var G__3528 = cljs.core.first.call(null,more);
var G__3529 = cljs.core.next.call(null,more);
x = G__3527;
y = G__3528;
more = G__3529;
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
var G__3526 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3526__delegate.call(this, x, y, more);
};
G__3526.cljs$lang$maxFixedArity = 2;
G__3526.cljs$lang$applyTo = (function (arglist__3530){
var x = cljs.core.first(arglist__3530);
var y = cljs.core.first(cljs.core.next(arglist__3530));
var more = cljs.core.rest(cljs.core.next(arglist__3530));
return G__3526__delegate.call(this, x, y, more);
});
return G__3526;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3522.call(this,x);
case  2 :
return _LT__EQ___3523.call(this,x,y);
default:
return _LT__EQ___3524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3524.cljs$lang$applyTo;
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
var _GT___3531 = (function (x){
return true;
});
var _GT___3532 = (function (x,y){
return (x > y);
});
var _GT___3533 = (function() { 
var G__3535__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3536 = y;
var G__3537 = cljs.core.first.call(null,more);
var G__3538 = cljs.core.next.call(null,more);
x = G__3536;
y = G__3537;
more = G__3538;
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
var G__3535 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3535__delegate.call(this, x, y, more);
};
G__3535.cljs$lang$maxFixedArity = 2;
G__3535.cljs$lang$applyTo = (function (arglist__3539){
var x = cljs.core.first(arglist__3539);
var y = cljs.core.first(cljs.core.next(arglist__3539));
var more = cljs.core.rest(cljs.core.next(arglist__3539));
return G__3535__delegate.call(this, x, y, more);
});
return G__3535;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3531.call(this,x);
case  2 :
return _GT___3532.call(this,x,y);
default:
return _GT___3533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3533.cljs$lang$applyTo;
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
var _GT__EQ___3540 = (function (x){
return true;
});
var _GT__EQ___3541 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3542 = (function() { 
var G__3544__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3545 = y;
var G__3546 = cljs.core.first.call(null,more);
var G__3547 = cljs.core.next.call(null,more);
x = G__3545;
y = G__3546;
more = G__3547;
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
var G__3544 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3544__delegate.call(this, x, y, more);
};
G__3544.cljs$lang$maxFixedArity = 2;
G__3544.cljs$lang$applyTo = (function (arglist__3548){
var x = cljs.core.first(arglist__3548);
var y = cljs.core.first(cljs.core.next(arglist__3548));
var more = cljs.core.rest(cljs.core.next(arglist__3548));
return G__3544__delegate.call(this, x, y, more);
});
return G__3544;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3540.call(this,x);
case  2 :
return _GT__EQ___3541.call(this,x,y);
default:
return _GT__EQ___3542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3542.cljs$lang$applyTo;
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
var max__3549 = (function (x){
return x;
});
var max__3550 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3551 = (function() { 
var G__3553__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3553 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3553__delegate.call(this, x, y, more);
};
G__3553.cljs$lang$maxFixedArity = 2;
G__3553.cljs$lang$applyTo = (function (arglist__3554){
var x = cljs.core.first(arglist__3554);
var y = cljs.core.first(cljs.core.next(arglist__3554));
var more = cljs.core.rest(cljs.core.next(arglist__3554));
return G__3553__delegate.call(this, x, y, more);
});
return G__3553;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3549.call(this,x);
case  2 :
return max__3550.call(this,x,y);
default:
return max__3551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3551.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3555 = (function (x){
return x;
});
var min__3556 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3557 = (function() { 
var G__3559__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3559 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3559__delegate.call(this, x, y, more);
};
G__3559.cljs$lang$maxFixedArity = 2;
G__3559.cljs$lang$applyTo = (function (arglist__3560){
var x = cljs.core.first(arglist__3560);
var y = cljs.core.first(cljs.core.next(arglist__3560));
var more = cljs.core.rest(cljs.core.next(arglist__3560));
return G__3559__delegate.call(this, x, y, more);
});
return G__3559;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3555.call(this,x);
case  2 :
return min__3556.call(this,x,y);
default:
return min__3557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3557.cljs$lang$applyTo;
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
var rem__3561 = (n % d);

return cljs.core.fix.call(null,((n - rem__3561) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3562 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3562));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3563 = (function (){
return Math.random.call(null);
});
var rand__3564 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3563.call(this);
case  1 :
return rand__3564.call(this,n);
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
var _EQ__EQ___3566 = (function (x){
return true;
});
var _EQ__EQ___3567 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3568 = (function() { 
var G__3570__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3571 = y;
var G__3572 = cljs.core.first.call(null,more);
var G__3573 = cljs.core.next.call(null,more);
x = G__3571;
y = G__3572;
more = G__3573;
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
var G__3570 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3570__delegate.call(this, x, y, more);
};
G__3570.cljs$lang$maxFixedArity = 2;
G__3570.cljs$lang$applyTo = (function (arglist__3574){
var x = cljs.core.first(arglist__3574);
var y = cljs.core.first(cljs.core.next(arglist__3574));
var more = cljs.core.rest(cljs.core.next(arglist__3574));
return G__3570__delegate.call(this, x, y, more);
});
return G__3570;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3566.call(this,x);
case  2 :
return _EQ__EQ___3567.call(this,x,y);
default:
return _EQ__EQ___3568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3568.cljs$lang$applyTo;
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
var n__3575 = n;
var xs__3576 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3577 = xs__3576;

if(cljs.core.truth_(and__3546__auto____3577))
{return (n__3575 > 0);
} else
{return and__3546__auto____3577;
}
})()))
{{
var G__3578 = (n__3575 - 1);
var G__3579 = cljs.core.next.call(null,xs__3576);
n__3575 = G__3578;
xs__3576 = G__3579;
continue;
}
} else
{return xs__3576;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3584 = null;
var G__3584__3585 = (function (coll,n){
var temp__3695__auto____3580 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3580))
{var xs__3581 = temp__3695__auto____3580;

return cljs.core.first.call(null,xs__3581);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3584__3586 = (function (coll,n,not_found){
var temp__3695__auto____3582 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3582))
{var xs__3583 = temp__3695__auto____3582;

return cljs.core.first.call(null,xs__3583);
} else
{return not_found;
}
});
G__3584 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3584__3585.call(this,coll,n);
case  3 :
return G__3584__3586.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3584;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3588 = (function (){
return "";
});
var str_STAR___3589 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3590 = (function() { 
var G__3592__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3593 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3594 = cljs.core.next.call(null,more);
sb = G__3593;
more = G__3594;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3592 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3592__delegate.call(this, x, ys);
};
G__3592.cljs$lang$maxFixedArity = 1;
G__3592.cljs$lang$applyTo = (function (arglist__3595){
var x = cljs.core.first(arglist__3595);
var ys = cljs.core.rest(arglist__3595);
return G__3592__delegate.call(this, x, ys);
});
return G__3592;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3588.call(this);
case  1 :
return str_STAR___3589.call(this,x);
default:
return str_STAR___3590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3590.cljs$lang$applyTo;
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
var str__3596 = (function (){
return "";
});
var str__3597 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
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
var str__3598 = (function() { 
var G__3600__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3600 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3600__delegate.call(this, x, ys);
};
G__3600.cljs$lang$maxFixedArity = 1;
G__3600.cljs$lang$applyTo = (function (arglist__3601){
var x = cljs.core.first(arglist__3601);
var ys = cljs.core.rest(arglist__3601);
return G__3600__delegate.call(this, x, ys);
});
return G__3600;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3596.call(this);
case  1 :
return str__3597.call(this,x);
default:
return str__3598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3598.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3602 = (function (s,start){
return s.substring(start);
});
var subs__3603 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3602.call(this,s,start);
case  3 :
return subs__3603.call(this,s,start,end);
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
var symbol__3605 = (function (name){
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
var symbol__3606 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3605.call(this,ns);
case  2 :
return symbol__3606.call(this,ns,name);
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
var keyword__3608 = (function (name){
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
var keyword__3609 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3608.call(this,ns);
case  2 :
return keyword__3609.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3611 = cljs.core.seq.call(null,x);
var ys__3612 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3611 === null)))
{return (ys__3612 === null);
} else
{if(cljs.core.truth_((ys__3612 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3611),cljs.core.first.call(null,ys__3612))))
{{
var G__3613 = cljs.core.next.call(null,xs__3611);
var G__3614 = cljs.core.next.call(null,ys__3612);
xs__3611 = G__3613;
ys__3612 = G__3614;
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
return cljs.core.reduce.call(null,(function (p1__3615_SHARP_,p2__3616_SHARP_){
return cljs.core.hash_combine.call(null,p1__3615_SHARP_,cljs.core.hash.call(null,p2__3616_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3617__3618 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3617__3618))
{var G__3620__3622 = cljs.core.first.call(null,G__3617__3618);
var vec__3621__3623 = G__3620__3622;
var key_name__3624 = cljs.core.nth.call(null,vec__3621__3623,0,null);
var f__3625 = cljs.core.nth.call(null,vec__3621__3623,1,null);
var G__3617__3626 = G__3617__3618;

var G__3620__3627 = G__3620__3622;
var G__3617__3628 = G__3617__3626;

while(true){
var vec__3629__3630 = G__3620__3627;
var key_name__3631 = cljs.core.nth.call(null,vec__3629__3630,0,null);
var f__3632 = cljs.core.nth.call(null,vec__3629__3630,1,null);
var G__3617__3633 = G__3617__3628;

var str_name__3634 = cljs.core.name.call(null,key_name__3631);

obj[str_name__3634] = f__3632;
var temp__3698__auto____3635 = cljs.core.next.call(null,G__3617__3633);

if(cljs.core.truth_(temp__3698__auto____3635))
{var G__3617__3636 = temp__3698__auto____3635;

{
var G__3637 = cljs.core.first.call(null,G__3617__3636);
var G__3638 = G__3617__3636;
G__3620__3627 = G__3637;
G__3617__3628 = G__3638;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3639 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3640 = this;
return (new cljs.core.List(this__3640.meta,o,coll,(this__3640.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3641 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3642 = this;
return this__3642.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3643 = this;
return this__3643.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3644 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3645 = this;
return this__3645.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3646 = this;
return this__3646.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3647 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3648 = this;
return (new cljs.core.List(meta,this__3648.first,this__3648.rest,this__3648.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3649 = this;
return this__3649.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3650 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3651 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3652 = this;
return (new cljs.core.List(this__3652.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3653 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3654 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3655 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3656 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3657 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3658 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3660 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3661 = this;
return this__3661.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3662 = this;
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
list.cljs$lang$applyTo = (function (arglist__3663){
var items = cljs.core.seq( arglist__3663 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3664 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3665 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3666 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3667 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3667.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3668 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3669 = this;
return this__3669.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3670 = this;
if(cljs.core.truth_((this__3670.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3670.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3671 = this;
return this__3671.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3672 = this;
return (new cljs.core.Cons(meta,this__3672.first,this__3672.rest));
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
var G__3673 = null;
var G__3673__3674 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3673__3675 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3673 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3673__3674.call(this,string,f);
case  3 :
return G__3673__3675.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3673;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3677 = null;
var G__3677__3678 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3677__3679 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3677 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3677__3678.call(this,string,k);
case  3 :
return G__3677__3679.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3677;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3681 = null;
var G__3681__3682 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3681__3683 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3681 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3681__3682.call(this,string,n);
case  3 :
return G__3681__3683.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3681;
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
var G__3691 = null;
var G__3691__3692 = (function (tsym3685,coll){
var tsym3685__3687 = this;

var this$__3688 = tsym3685__3687;

return cljs.core.get.call(null,coll,this$__3688.toString());
});
var G__3691__3693 = (function (tsym3686,coll,not_found){
var tsym3686__3689 = this;

var this$__3690 = tsym3686__3689;

return cljs.core.get.call(null,coll,this$__3690.toString(),not_found);
});
G__3691 = function(tsym3686,coll,not_found){
switch(arguments.length){
case  2 :
return G__3691__3692.call(this,tsym3686,coll);
case  3 :
return G__3691__3693.call(this,tsym3686,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3691;
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
var x__3695 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3695;
} else
{lazy_seq.x = x__3695.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3696 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3697 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3698 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3699 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3699.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3700 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3701 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3702 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3703 = this;
return this__3703.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3704 = this;
return (new cljs.core.LazySeq(meta,this__3704.realized,this__3704.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3705 = cljs.core.array.call(null);

var s__3706 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3706)))
{ary__3705.push(cljs.core.first.call(null,s__3706));
{
var G__3707 = cljs.core.next.call(null,s__3706);
s__3706 = G__3707;
continue;
}
} else
{return ary__3705;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3708 = s;
var i__3709 = n;
var sum__3710 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3711 = (i__3709 > 0);

if(cljs.core.truth_(and__3546__auto____3711))
{return cljs.core.seq.call(null,s__3708);
} else
{return and__3546__auto____3711;
}
})()))
{{
var G__3712 = cljs.core.next.call(null,s__3708);
var G__3713 = (i__3709 - 1);
var G__3714 = (sum__3710 + 1);
s__3708 = G__3712;
i__3709 = G__3713;
sum__3710 = G__3714;
continue;
}
} else
{return sum__3710;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
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
var concat__3718 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3719 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3720 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3715 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3715))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3715),concat.call(null,cljs.core.rest.call(null,s__3715),y));
} else
{return y;
}
})));
});
var concat__3721 = (function() { 
var G__3723__delegate = function (x,y,zs){
var cat__3717 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3716 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3716))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3716),cat.call(null,cljs.core.rest.call(null,xys__3716),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3717.call(null,concat.call(null,x,y),zs);
};
var G__3723 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3723__delegate.call(this, x, y, zs);
};
G__3723.cljs$lang$maxFixedArity = 2;
G__3723.cljs$lang$applyTo = (function (arglist__3724){
var x = cljs.core.first(arglist__3724);
var y = cljs.core.first(cljs.core.next(arglist__3724));
var zs = cljs.core.rest(cljs.core.next(arglist__3724));
return G__3723__delegate.call(this, x, y, zs);
});
return G__3723;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3718.call(this);
case  1 :
return concat__3719.call(this,x);
case  2 :
return concat__3720.call(this,x,y);
default:
return concat__3721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3721.cljs$lang$applyTo;
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
var list_STAR___3725 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3726 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3727 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3728 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3729 = (function() { 
var G__3731__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3731 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3731__delegate.call(this, a, b, c, d, more);
};
G__3731.cljs$lang$maxFixedArity = 4;
G__3731.cljs$lang$applyTo = (function (arglist__3732){
var a = cljs.core.first(arglist__3732);
var b = cljs.core.first(cljs.core.next(arglist__3732));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3732)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3732))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3732))));
return G__3731__delegate.call(this, a, b, c, d, more);
});
return G__3731;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3725.call(this,a);
case  2 :
return list_STAR___3726.call(this,a,b);
case  3 :
return list_STAR___3727.call(this,a,b,c);
case  4 :
return list_STAR___3728.call(this,a,b,c,d);
default:
return list_STAR___3729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3729.cljs$lang$applyTo;
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
var apply__3742 = (function (f,args){
var fixed_arity__3733 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3733 + 1)) <= fixed_arity__3733)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3743 = (function (f,x,args){
var arglist__3734 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3735 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3734,fixed_arity__3735) <= fixed_arity__3735)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3734));
} else
{return f.cljs$lang$applyTo(arglist__3734);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3734));
}
});
var apply__3744 = (function (f,x,y,args){
var arglist__3736 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3737 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3736,fixed_arity__3737) <= fixed_arity__3737)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3736));
} else
{return f.cljs$lang$applyTo(arglist__3736);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3736));
}
});
var apply__3745 = (function (f,x,y,z,args){
var arglist__3738 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3739 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3738,fixed_arity__3739) <= fixed_arity__3739)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3738));
} else
{return f.cljs$lang$applyTo(arglist__3738);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3738));
}
});
var apply__3746 = (function() { 
var G__3748__delegate = function (f,a,b,c,d,args){
var arglist__3740 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3741 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3740,fixed_arity__3741) <= fixed_arity__3741)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3740));
} else
{return f.cljs$lang$applyTo(arglist__3740);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3740));
}
};
var G__3748 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3748__delegate.call(this, f, a, b, c, d, args);
};
G__3748.cljs$lang$maxFixedArity = 5;
G__3748.cljs$lang$applyTo = (function (arglist__3749){
var f = cljs.core.first(arglist__3749);
var a = cljs.core.first(cljs.core.next(arglist__3749));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3749)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3749))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3749)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3749)))));
return G__3748__delegate.call(this, f, a, b, c, d, args);
});
return G__3748;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3742.call(this,f,a);
case  3 :
return apply__3743.call(this,f,a,b);
case  4 :
return apply__3744.call(this,f,a,b,c);
case  5 :
return apply__3745.call(this,f,a,b,c,d);
default:
return apply__3746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3746.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3750){
var obj = cljs.core.first(arglist__3750);
var f = cljs.core.first(cljs.core.next(arglist__3750));
var args = cljs.core.rest(cljs.core.next(arglist__3750));
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
var not_EQ___3751 = (function (x){
return false;
});
var not_EQ___3752 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3753 = (function() { 
var G__3755__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3755 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3755__delegate.call(this, x, y, more);
};
G__3755.cljs$lang$maxFixedArity = 2;
G__3755.cljs$lang$applyTo = (function (arglist__3756){
var x = cljs.core.first(arglist__3756);
var y = cljs.core.first(cljs.core.next(arglist__3756));
var more = cljs.core.rest(cljs.core.next(arglist__3756));
return G__3755__delegate.call(this, x, y, more);
});
return G__3755;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3751.call(this,x);
case  2 :
return not_EQ___3752.call(this,x,y);
default:
return not_EQ___3753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3753.cljs$lang$applyTo;
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
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3757 = pred;
var G__3758 = cljs.core.next.call(null,coll);
pred = G__3757;
coll = G__3758;
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
{var or__3548__auto____3759 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3759))
{return or__3548__auto____3759;
} else
{{
var G__3760 = pred;
var G__3761 = cljs.core.next.call(null,coll);
pred = G__3760;
coll = G__3761;
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
var G__3762 = null;
var G__3762__3763 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3762__3764 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3762__3765 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3762__3766 = (function() { 
var G__3768__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3768 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3768__delegate.call(this, x, y, zs);
};
G__3768.cljs$lang$maxFixedArity = 2;
G__3768.cljs$lang$applyTo = (function (arglist__3769){
var x = cljs.core.first(arglist__3769);
var y = cljs.core.first(cljs.core.next(arglist__3769));
var zs = cljs.core.rest(cljs.core.next(arglist__3769));
return G__3768__delegate.call(this, x, y, zs);
});
return G__3768;
})()
;
G__3762 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3762__3763.call(this);
case  1 :
return G__3762__3764.call(this,x);
case  2 :
return G__3762__3765.call(this,x,y);
default:
return G__3762__3766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3762.cljs$lang$maxFixedArity = 2;
G__3762.cljs$lang$applyTo = G__3762__3766.cljs$lang$applyTo;
return G__3762;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3770__delegate = function (args){
return x;
};
var G__3770 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3770__delegate.call(this, args);
};
G__3770.cljs$lang$maxFixedArity = 0;
G__3770.cljs$lang$applyTo = (function (arglist__3771){
var args = cljs.core.seq( arglist__3771 );;
return G__3770__delegate.call(this, args);
});
return G__3770;
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
var comp__3775 = (function (){
return cljs.core.identity;
});
var comp__3776 = (function (f){
return f;
});
var comp__3777 = (function (f,g){
return (function() {
var G__3781 = null;
var G__3781__3782 = (function (){
return f.call(null,g.call(null));
});
var G__3781__3783 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3781__3784 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3781__3785 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3781__3786 = (function() { 
var G__3788__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3788 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3788__delegate.call(this, x, y, z, args);
};
G__3788.cljs$lang$maxFixedArity = 3;
G__3788.cljs$lang$applyTo = (function (arglist__3789){
var x = cljs.core.first(arglist__3789);
var y = cljs.core.first(cljs.core.next(arglist__3789));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3789)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3789)));
return G__3788__delegate.call(this, x, y, z, args);
});
return G__3788;
})()
;
G__3781 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3781__3782.call(this);
case  1 :
return G__3781__3783.call(this,x);
case  2 :
return G__3781__3784.call(this,x,y);
case  3 :
return G__3781__3785.call(this,x,y,z);
default:
return G__3781__3786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3781.cljs$lang$maxFixedArity = 3;
G__3781.cljs$lang$applyTo = G__3781__3786.cljs$lang$applyTo;
return G__3781;
})()
});
var comp__3778 = (function (f,g,h){
return (function() {
var G__3790 = null;
var G__3790__3791 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3790__3792 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3790__3793 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3790__3794 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3790__3795 = (function() { 
var G__3797__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3797 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3797__delegate.call(this, x, y, z, args);
};
G__3797.cljs$lang$maxFixedArity = 3;
G__3797.cljs$lang$applyTo = (function (arglist__3798){
var x = cljs.core.first(arglist__3798);
var y = cljs.core.first(cljs.core.next(arglist__3798));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3798)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3798)));
return G__3797__delegate.call(this, x, y, z, args);
});
return G__3797;
})()
;
G__3790 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3790__3791.call(this);
case  1 :
return G__3790__3792.call(this,x);
case  2 :
return G__3790__3793.call(this,x,y);
case  3 :
return G__3790__3794.call(this,x,y,z);
default:
return G__3790__3795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3790.cljs$lang$maxFixedArity = 3;
G__3790.cljs$lang$applyTo = G__3790__3795.cljs$lang$applyTo;
return G__3790;
})()
});
var comp__3779 = (function() { 
var G__3799__delegate = function (f1,f2,f3,fs){
var fs__3772 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3800__delegate = function (args){
var ret__3773 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3772),args);
var fs__3774 = cljs.core.next.call(null,fs__3772);

while(true){
if(cljs.core.truth_(fs__3774))
{{
var G__3801 = cljs.core.first.call(null,fs__3774).call(null,ret__3773);
var G__3802 = cljs.core.next.call(null,fs__3774);
ret__3773 = G__3801;
fs__3774 = G__3802;
continue;
}
} else
{return ret__3773;
}
break;
}
};
var G__3800 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3800__delegate.call(this, args);
};
G__3800.cljs$lang$maxFixedArity = 0;
G__3800.cljs$lang$applyTo = (function (arglist__3803){
var args = cljs.core.seq( arglist__3803 );;
return G__3800__delegate.call(this, args);
});
return G__3800;
})()
;
};
var G__3799 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3799__delegate.call(this, f1, f2, f3, fs);
};
G__3799.cljs$lang$maxFixedArity = 3;
G__3799.cljs$lang$applyTo = (function (arglist__3804){
var f1 = cljs.core.first(arglist__3804);
var f2 = cljs.core.first(cljs.core.next(arglist__3804));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3804)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3804)));
return G__3799__delegate.call(this, f1, f2, f3, fs);
});
return G__3799;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3775.call(this);
case  1 :
return comp__3776.call(this,f1);
case  2 :
return comp__3777.call(this,f1,f2);
case  3 :
return comp__3778.call(this,f1,f2,f3);
default:
return comp__3779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3779.cljs$lang$applyTo;
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
var partial__3805 = (function (f,arg1){
return (function() { 
var G__3810__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3810 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3810__delegate.call(this, args);
};
G__3810.cljs$lang$maxFixedArity = 0;
G__3810.cljs$lang$applyTo = (function (arglist__3811){
var args = cljs.core.seq( arglist__3811 );;
return G__3810__delegate.call(this, args);
});
return G__3810;
})()
;
});
var partial__3806 = (function (f,arg1,arg2){
return (function() { 
var G__3812__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3812__delegate.call(this, args);
};
G__3812.cljs$lang$maxFixedArity = 0;
G__3812.cljs$lang$applyTo = (function (arglist__3813){
var args = cljs.core.seq( arglist__3813 );;
return G__3812__delegate.call(this, args);
});
return G__3812;
})()
;
});
var partial__3807 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3814__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3814 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3814__delegate.call(this, args);
};
G__3814.cljs$lang$maxFixedArity = 0;
G__3814.cljs$lang$applyTo = (function (arglist__3815){
var args = cljs.core.seq( arglist__3815 );;
return G__3814__delegate.call(this, args);
});
return G__3814;
})()
;
});
var partial__3808 = (function() { 
var G__3816__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3817__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3817 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3817__delegate.call(this, args);
};
G__3817.cljs$lang$maxFixedArity = 0;
G__3817.cljs$lang$applyTo = (function (arglist__3818){
var args = cljs.core.seq( arglist__3818 );;
return G__3817__delegate.call(this, args);
});
return G__3817;
})()
;
};
var G__3816 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3816__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3816.cljs$lang$maxFixedArity = 4;
G__3816.cljs$lang$applyTo = (function (arglist__3819){
var f = cljs.core.first(arglist__3819);
var arg1 = cljs.core.first(cljs.core.next(arglist__3819));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3819)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3819))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3819))));
return G__3816__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3816;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3805.call(this,f,arg1);
case  3 :
return partial__3806.call(this,f,arg1,arg2);
case  4 :
return partial__3807.call(this,f,arg1,arg2,arg3);
default:
return partial__3808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3808.cljs$lang$applyTo;
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
var fnil__3820 = (function (f,x){
return (function() {
var G__3824 = null;
var G__3824__3825 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3824__3826 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3824__3827 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3824__3828 = (function() { 
var G__3830__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3830 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3830__delegate.call(this, a, b, c, ds);
};
G__3830.cljs$lang$maxFixedArity = 3;
G__3830.cljs$lang$applyTo = (function (arglist__3831){
var a = cljs.core.first(arglist__3831);
var b = cljs.core.first(cljs.core.next(arglist__3831));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3831)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3831)));
return G__3830__delegate.call(this, a, b, c, ds);
});
return G__3830;
})()
;
G__3824 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3824__3825.call(this,a);
case  2 :
return G__3824__3826.call(this,a,b);
case  3 :
return G__3824__3827.call(this,a,b,c);
default:
return G__3824__3828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3824.cljs$lang$maxFixedArity = 3;
G__3824.cljs$lang$applyTo = G__3824__3828.cljs$lang$applyTo;
return G__3824;
})()
});
var fnil__3821 = (function (f,x,y){
return (function() {
var G__3832 = null;
var G__3832__3833 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3832__3834 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3832__3835 = (function() { 
var G__3837__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3837 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3837__delegate.call(this, a, b, c, ds);
};
G__3837.cljs$lang$maxFixedArity = 3;
G__3837.cljs$lang$applyTo = (function (arglist__3838){
var a = cljs.core.first(arglist__3838);
var b = cljs.core.first(cljs.core.next(arglist__3838));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3838)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3838)));
return G__3837__delegate.call(this, a, b, c, ds);
});
return G__3837;
})()
;
G__3832 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3832__3833.call(this,a,b);
case  3 :
return G__3832__3834.call(this,a,b,c);
default:
return G__3832__3835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3832.cljs$lang$maxFixedArity = 3;
G__3832.cljs$lang$applyTo = G__3832__3835.cljs$lang$applyTo;
return G__3832;
})()
});
var fnil__3822 = (function (f,x,y,z){
return (function() {
var G__3839 = null;
var G__3839__3840 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3839__3841 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3839__3842 = (function() { 
var G__3844__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3844 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3844__delegate.call(this, a, b, c, ds);
};
G__3844.cljs$lang$maxFixedArity = 3;
G__3844.cljs$lang$applyTo = (function (arglist__3845){
var a = cljs.core.first(arglist__3845);
var b = cljs.core.first(cljs.core.next(arglist__3845));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3845)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3845)));
return G__3844__delegate.call(this, a, b, c, ds);
});
return G__3844;
})()
;
G__3839 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3839__3840.call(this,a,b);
case  3 :
return G__3839__3841.call(this,a,b,c);
default:
return G__3839__3842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3839.cljs$lang$maxFixedArity = 3;
G__3839.cljs$lang$applyTo = G__3839__3842.cljs$lang$applyTo;
return G__3839;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3820.call(this,f,x);
case  3 :
return fnil__3821.call(this,f,x,y);
case  4 :
return fnil__3822.call(this,f,x,y,z);
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
var mapi__3848 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3846 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3846))
{var s__3847 = temp__3698__auto____3846;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3847)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3847)));
} else
{return null;
}
})));
});

return mapi__3848.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3849 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3849))
{var s__3850 = temp__3698__auto____3849;

var x__3851 = f.call(null,cljs.core.first.call(null,s__3850));

if(cljs.core.truth_((x__3851 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3850));
} else
{return cljs.core.cons.call(null,x__3851,keep.call(null,f,cljs.core.rest.call(null,s__3850)));
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
var keepi__3861 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3858 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3858))
{var s__3859 = temp__3698__auto____3858;

var x__3860 = f.call(null,idx,cljs.core.first.call(null,s__3859));

if(cljs.core.truth_((x__3860 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3859));
} else
{return cljs.core.cons.call(null,x__3860,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3859)));
}
} else
{return null;
}
})));
});

return keepi__3861.call(null,0,coll);
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
var every_pred__3906 = (function (p){
return (function() {
var ep1 = null;
var ep1__3911 = (function (){
return true;
});
var ep1__3912 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3913 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3868 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3868))
{return p.call(null,y);
} else
{return and__3546__auto____3868;
}
})());
});
var ep1__3914 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3869 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3869))
{var and__3546__auto____3870 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3870))
{return p.call(null,z);
} else
{return and__3546__auto____3870;
}
} else
{return and__3546__auto____3869;
}
})());
});
var ep1__3915 = (function() { 
var G__3917__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3871 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3871))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3871;
}
})());
};
var G__3917 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3917__delegate.call(this, x, y, z, args);
};
G__3917.cljs$lang$maxFixedArity = 3;
G__3917.cljs$lang$applyTo = (function (arglist__3918){
var x = cljs.core.first(arglist__3918);
var y = cljs.core.first(cljs.core.next(arglist__3918));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3918)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3918)));
return G__3917__delegate.call(this, x, y, z, args);
});
return G__3917;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3911.call(this);
case  1 :
return ep1__3912.call(this,x);
case  2 :
return ep1__3913.call(this,x,y);
case  3 :
return ep1__3914.call(this,x,y,z);
default:
return ep1__3915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3915.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3907 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3919 = (function (){
return true;
});
var ep2__3920 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3872 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3872))
{return p2.call(null,x);
} else
{return and__3546__auto____3872;
}
})());
});
var ep2__3921 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3873 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3873))
{var and__3546__auto____3874 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3874))
{var and__3546__auto____3875 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3875))
{return p2.call(null,y);
} else
{return and__3546__auto____3875;
}
} else
{return and__3546__auto____3874;
}
} else
{return and__3546__auto____3873;
}
})());
});
var ep2__3922 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3876 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3876))
{var and__3546__auto____3877 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3877))
{var and__3546__auto____3878 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3878))
{var and__3546__auto____3879 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3879))
{var and__3546__auto____3880 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3880))
{return p2.call(null,z);
} else
{return and__3546__auto____3880;
}
} else
{return and__3546__auto____3879;
}
} else
{return and__3546__auto____3878;
}
} else
{return and__3546__auto____3877;
}
} else
{return and__3546__auto____3876;
}
})());
});
var ep2__3923 = (function() { 
var G__3925__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3881 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3881))
{return cljs.core.every_QMARK_.call(null,(function (p1__3852_SHARP_){
var and__3546__auto____3882 = p1.call(null,p1__3852_SHARP_);

if(cljs.core.truth_(and__3546__auto____3882))
{return p2.call(null,p1__3852_SHARP_);
} else
{return and__3546__auto____3882;
}
}),args);
} else
{return and__3546__auto____3881;
}
})());
};
var G__3925 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3925__delegate.call(this, x, y, z, args);
};
G__3925.cljs$lang$maxFixedArity = 3;
G__3925.cljs$lang$applyTo = (function (arglist__3926){
var x = cljs.core.first(arglist__3926);
var y = cljs.core.first(cljs.core.next(arglist__3926));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3926)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3926)));
return G__3925__delegate.call(this, x, y, z, args);
});
return G__3925;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3919.call(this);
case  1 :
return ep2__3920.call(this,x);
case  2 :
return ep2__3921.call(this,x,y);
case  3 :
return ep2__3922.call(this,x,y,z);
default:
return ep2__3923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3923.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3908 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3927 = (function (){
return true;
});
var ep3__3928 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3883 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3883))
{var and__3546__auto____3884 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3884))
{return p3.call(null,x);
} else
{return and__3546__auto____3884;
}
} else
{return and__3546__auto____3883;
}
})());
});
var ep3__3929 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3885 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3885))
{var and__3546__auto____3886 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3886))
{var and__3546__auto____3887 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3887))
{var and__3546__auto____3888 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3888))
{var and__3546__auto____3889 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3889))
{return p3.call(null,y);
} else
{return and__3546__auto____3889;
}
} else
{return and__3546__auto____3888;
}
} else
{return and__3546__auto____3887;
}
} else
{return and__3546__auto____3886;
}
} else
{return and__3546__auto____3885;
}
})());
});
var ep3__3930 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3890 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3890))
{var and__3546__auto____3891 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3891))
{var and__3546__auto____3892 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3892))
{var and__3546__auto____3893 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3893))
{var and__3546__auto____3894 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3894))
{var and__3546__auto____3895 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3895))
{var and__3546__auto____3896 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3896))
{var and__3546__auto____3897 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3897))
{return p3.call(null,z);
} else
{return and__3546__auto____3897;
}
} else
{return and__3546__auto____3896;
}
} else
{return and__3546__auto____3895;
}
} else
{return and__3546__auto____3894;
}
} else
{return and__3546__auto____3893;
}
} else
{return and__3546__auto____3892;
}
} else
{return and__3546__auto____3891;
}
} else
{return and__3546__auto____3890;
}
})());
});
var ep3__3931 = (function() { 
var G__3933__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3898 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3898))
{return cljs.core.every_QMARK_.call(null,(function (p1__3853_SHARP_){
var and__3546__auto____3899 = p1.call(null,p1__3853_SHARP_);

if(cljs.core.truth_(and__3546__auto____3899))
{var and__3546__auto____3900 = p2.call(null,p1__3853_SHARP_);

if(cljs.core.truth_(and__3546__auto____3900))
{return p3.call(null,p1__3853_SHARP_);
} else
{return and__3546__auto____3900;
}
} else
{return and__3546__auto____3899;
}
}),args);
} else
{return and__3546__auto____3898;
}
})());
};
var G__3933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3933__delegate.call(this, x, y, z, args);
};
G__3933.cljs$lang$maxFixedArity = 3;
G__3933.cljs$lang$applyTo = (function (arglist__3934){
var x = cljs.core.first(arglist__3934);
var y = cljs.core.first(cljs.core.next(arglist__3934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3934)));
return G__3933__delegate.call(this, x, y, z, args);
});
return G__3933;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3927.call(this);
case  1 :
return ep3__3928.call(this,x);
case  2 :
return ep3__3929.call(this,x,y);
case  3 :
return ep3__3930.call(this,x,y,z);
default:
return ep3__3931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3931.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3909 = (function() { 
var G__3935__delegate = function (p1,p2,p3,ps){
var ps__3901 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3936 = (function (){
return true;
});
var epn__3937 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3854_SHARP_){
return p1__3854_SHARP_.call(null,x);
}),ps__3901);
});
var epn__3938 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3855_SHARP_){
var and__3546__auto____3902 = p1__3855_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3902))
{return p1__3855_SHARP_.call(null,y);
} else
{return and__3546__auto____3902;
}
}),ps__3901);
});
var epn__3939 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3856_SHARP_){
var and__3546__auto____3903 = p1__3856_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3903))
{var and__3546__auto____3904 = p1__3856_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3904))
{return p1__3856_SHARP_.call(null,z);
} else
{return and__3546__auto____3904;
}
} else
{return and__3546__auto____3903;
}
}),ps__3901);
});
var epn__3940 = (function() { 
var G__3942__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3905 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3905))
{return cljs.core.every_QMARK_.call(null,(function (p1__3857_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3857_SHARP_,args);
}),ps__3901);
} else
{return and__3546__auto____3905;
}
})());
};
var G__3942 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3942__delegate.call(this, x, y, z, args);
};
G__3942.cljs$lang$maxFixedArity = 3;
G__3942.cljs$lang$applyTo = (function (arglist__3943){
var x = cljs.core.first(arglist__3943);
var y = cljs.core.first(cljs.core.next(arglist__3943));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3943)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3943)));
return G__3942__delegate.call(this, x, y, z, args);
});
return G__3942;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3936.call(this);
case  1 :
return epn__3937.call(this,x);
case  2 :
return epn__3938.call(this,x,y);
case  3 :
return epn__3939.call(this,x,y,z);
default:
return epn__3940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3940.cljs$lang$applyTo;
return epn;
})()
};
var G__3935 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3935__delegate.call(this, p1, p2, p3, ps);
};
G__3935.cljs$lang$maxFixedArity = 3;
G__3935.cljs$lang$applyTo = (function (arglist__3944){
var p1 = cljs.core.first(arglist__3944);
var p2 = cljs.core.first(cljs.core.next(arglist__3944));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3944)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3944)));
return G__3935__delegate.call(this, p1, p2, p3, ps);
});
return G__3935;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3906.call(this,p1);
case  2 :
return every_pred__3907.call(this,p1,p2);
case  3 :
return every_pred__3908.call(this,p1,p2,p3);
default:
return every_pred__3909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3909.cljs$lang$applyTo;
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
var some_fn__3984 = (function (p){
return (function() {
var sp1 = null;
var sp1__3989 = (function (){
return null;
});
var sp1__3990 = (function (x){
return p.call(null,x);
});
var sp1__3991 = (function (x,y){
var or__3548__auto____3946 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3946))
{return or__3548__auto____3946;
} else
{return p.call(null,y);
}
});
var sp1__3992 = (function (x,y,z){
var or__3548__auto____3947 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3947))
{return or__3548__auto____3947;
} else
{var or__3548__auto____3948 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3948))
{return or__3548__auto____3948;
} else
{return p.call(null,z);
}
}
});
var sp1__3993 = (function() { 
var G__3995__delegate = function (x,y,z,args){
var or__3548__auto____3949 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3949))
{return or__3548__auto____3949;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3995 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3995__delegate.call(this, x, y, z, args);
};
G__3995.cljs$lang$maxFixedArity = 3;
G__3995.cljs$lang$applyTo = (function (arglist__3996){
var x = cljs.core.first(arglist__3996);
var y = cljs.core.first(cljs.core.next(arglist__3996));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3996)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3996)));
return G__3995__delegate.call(this, x, y, z, args);
});
return G__3995;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3989.call(this);
case  1 :
return sp1__3990.call(this,x);
case  2 :
return sp1__3991.call(this,x,y);
case  3 :
return sp1__3992.call(this,x,y,z);
default:
return sp1__3993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3993.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3985 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3997 = (function (){
return null;
});
var sp2__3998 = (function (x){
var or__3548__auto____3950 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{return p2.call(null,x);
}
});
var sp2__3999 = (function (x,y){
var or__3548__auto____3951 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3951))
{return or__3548__auto____3951;
} else
{var or__3548__auto____3952 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3952))
{return or__3548__auto____3952;
} else
{var or__3548__auto____3953 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3953))
{return or__3548__auto____3953;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4000 = (function (x,y,z){
var or__3548__auto____3954 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3954))
{return or__3548__auto____3954;
} else
{var or__3548__auto____3955 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3955))
{return or__3548__auto____3955;
} else
{var or__3548__auto____3956 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3956))
{return or__3548__auto____3956;
} else
{var or__3548__auto____3957 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3957))
{return or__3548__auto____3957;
} else
{var or__3548__auto____3958 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3958))
{return or__3548__auto____3958;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4001 = (function() { 
var G__4003__delegate = function (x,y,z,args){
var or__3548__auto____3959 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{return cljs.core.some.call(null,(function (p1__3862_SHARP_){
var or__3548__auto____3960 = p1.call(null,p1__3862_SHARP_);

if(cljs.core.truth_(or__3548__auto____3960))
{return or__3548__auto____3960;
} else
{return p2.call(null,p1__3862_SHARP_);
}
}),args);
}
};
var G__4003 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4003__delegate.call(this, x, y, z, args);
};
G__4003.cljs$lang$maxFixedArity = 3;
G__4003.cljs$lang$applyTo = (function (arglist__4004){
var x = cljs.core.first(arglist__4004);
var y = cljs.core.first(cljs.core.next(arglist__4004));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4004)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4004)));
return G__4003__delegate.call(this, x, y, z, args);
});
return G__4003;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3997.call(this);
case  1 :
return sp2__3998.call(this,x);
case  2 :
return sp2__3999.call(this,x,y);
case  3 :
return sp2__4000.call(this,x,y,z);
default:
return sp2__4001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4001.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3986 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4005 = (function (){
return null;
});
var sp3__4006 = (function (x){
var or__3548__auto____3961 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3961))
{return or__3548__auto____3961;
} else
{var or__3548__auto____3962 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{return p3.call(null,x);
}
}
});
var sp3__4007 = (function (x,y){
var or__3548__auto____3963 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3963))
{return or__3548__auto____3963;
} else
{var or__3548__auto____3964 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3964))
{return or__3548__auto____3964;
} else
{var or__3548__auto____3965 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{var or__3548__auto____3966 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3966))
{return or__3548__auto____3966;
} else
{var or__3548__auto____3967 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3967))
{return or__3548__auto____3967;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4008 = (function (x,y,z){
var or__3548__auto____3968 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{var or__3548__auto____3969 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3969))
{return or__3548__auto____3969;
} else
{var or__3548__auto____3970 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3970))
{return or__3548__auto____3970;
} else
{var or__3548__auto____3971 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3971))
{return or__3548__auto____3971;
} else
{var or__3548__auto____3972 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3972))
{return or__3548__auto____3972;
} else
{var or__3548__auto____3973 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3973))
{return or__3548__auto____3973;
} else
{var or__3548__auto____3974 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3974))
{return or__3548__auto____3974;
} else
{var or__3548__auto____3975 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3975))
{return or__3548__auto____3975;
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
var sp3__4009 = (function() { 
var G__4011__delegate = function (x,y,z,args){
var or__3548__auto____3976 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3976))
{return or__3548__auto____3976;
} else
{return cljs.core.some.call(null,(function (p1__3863_SHARP_){
var or__3548__auto____3977 = p1.call(null,p1__3863_SHARP_);

if(cljs.core.truth_(or__3548__auto____3977))
{return or__3548__auto____3977;
} else
{var or__3548__auto____3978 = p2.call(null,p1__3863_SHARP_);

if(cljs.core.truth_(or__3548__auto____3978))
{return or__3548__auto____3978;
} else
{return p3.call(null,p1__3863_SHARP_);
}
}
}),args);
}
};
var G__4011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4011__delegate.call(this, x, y, z, args);
};
G__4011.cljs$lang$maxFixedArity = 3;
G__4011.cljs$lang$applyTo = (function (arglist__4012){
var x = cljs.core.first(arglist__4012);
var y = cljs.core.first(cljs.core.next(arglist__4012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4012)));
return G__4011__delegate.call(this, x, y, z, args);
});
return G__4011;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4005.call(this);
case  1 :
return sp3__4006.call(this,x);
case  2 :
return sp3__4007.call(this,x,y);
case  3 :
return sp3__4008.call(this,x,y,z);
default:
return sp3__4009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4009.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3987 = (function() { 
var G__4013__delegate = function (p1,p2,p3,ps){
var ps__3979 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4014 = (function (){
return null;
});
var spn__4015 = (function (x){
return cljs.core.some.call(null,(function (p1__3864_SHARP_){
return p1__3864_SHARP_.call(null,x);
}),ps__3979);
});
var spn__4016 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3865_SHARP_){
var or__3548__auto____3980 = p1__3865_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3980))
{return or__3548__auto____3980;
} else
{return p1__3865_SHARP_.call(null,y);
}
}),ps__3979);
});
var spn__4017 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3866_SHARP_){
var or__3548__auto____3981 = p1__3866_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3981))
{return or__3548__auto____3981;
} else
{var or__3548__auto____3982 = p1__3866_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3982))
{return or__3548__auto____3982;
} else
{return p1__3866_SHARP_.call(null,z);
}
}
}),ps__3979);
});
var spn__4018 = (function() { 
var G__4020__delegate = function (x,y,z,args){
var or__3548__auto____3983 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3983))
{return or__3548__auto____3983;
} else
{return cljs.core.some.call(null,(function (p1__3867_SHARP_){
return cljs.core.some.call(null,p1__3867_SHARP_,args);
}),ps__3979);
}
};
var G__4020 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4020__delegate.call(this, x, y, z, args);
};
G__4020.cljs$lang$maxFixedArity = 3;
G__4020.cljs$lang$applyTo = (function (arglist__4021){
var x = cljs.core.first(arglist__4021);
var y = cljs.core.first(cljs.core.next(arglist__4021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4021)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4021)));
return G__4020__delegate.call(this, x, y, z, args);
});
return G__4020;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4014.call(this);
case  1 :
return spn__4015.call(this,x);
case  2 :
return spn__4016.call(this,x,y);
case  3 :
return spn__4017.call(this,x,y,z);
default:
return spn__4018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4018.cljs$lang$applyTo;
return spn;
})()
};
var G__4013 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4013__delegate.call(this, p1, p2, p3, ps);
};
G__4013.cljs$lang$maxFixedArity = 3;
G__4013.cljs$lang$applyTo = (function (arglist__4022){
var p1 = cljs.core.first(arglist__4022);
var p2 = cljs.core.first(cljs.core.next(arglist__4022));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4022)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4022)));
return G__4013__delegate.call(this, p1, p2, p3, ps);
});
return G__4013;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3984.call(this,p1);
case  2 :
return some_fn__3985.call(this,p1,p2);
case  3 :
return some_fn__3986.call(this,p1,p2,p3);
default:
return some_fn__3987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3987.cljs$lang$applyTo;
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
var map__4035 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4023))
{var s__4024 = temp__3698__auto____4023;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4024)),map.call(null,f,cljs.core.rest.call(null,s__4024)));
} else
{return null;
}
})));
});
var map__4036 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4025 = cljs.core.seq.call(null,c1);
var s2__4026 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4027 = s1__4025;

if(cljs.core.truth_(and__3546__auto____4027))
{return s2__4026;
} else
{return and__3546__auto____4027;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4025),cljs.core.first.call(null,s2__4026)),map.call(null,f,cljs.core.rest.call(null,s1__4025),cljs.core.rest.call(null,s2__4026)));
} else
{return null;
}
})));
});
var map__4037 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4028 = cljs.core.seq.call(null,c1);
var s2__4029 = cljs.core.seq.call(null,c2);
var s3__4030 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4031 = s1__4028;

if(cljs.core.truth_(and__3546__auto____4031))
{var and__3546__auto____4032 = s2__4029;

if(cljs.core.truth_(and__3546__auto____4032))
{return s3__4030;
} else
{return and__3546__auto____4032;
}
} else
{return and__3546__auto____4031;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4028),cljs.core.first.call(null,s2__4029),cljs.core.first.call(null,s3__4030)),map.call(null,f,cljs.core.rest.call(null,s1__4028),cljs.core.rest.call(null,s2__4029),cljs.core.rest.call(null,s3__4030)));
} else
{return null;
}
})));
});
var map__4038 = (function() { 
var G__4040__delegate = function (f,c1,c2,c3,colls){
var step__4034 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4033 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4033)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4033),step.call(null,map.call(null,cljs.core.rest,ss__4033)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3945_SHARP_){
return cljs.core.apply.call(null,f,p1__3945_SHARP_);
}),step__4034.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4040 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4040__delegate.call(this, f, c1, c2, c3, colls);
};
G__4040.cljs$lang$maxFixedArity = 4;
G__4040.cljs$lang$applyTo = (function (arglist__4041){
var f = cljs.core.first(arglist__4041);
var c1 = cljs.core.first(cljs.core.next(arglist__4041));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4041)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4041))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4041))));
return G__4040__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4040;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4035.call(this,f,c1);
case  3 :
return map__4036.call(this,f,c1,c2);
case  4 :
return map__4037.call(this,f,c1,c2,c3);
default:
return map__4038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4038.cljs$lang$applyTo;
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
{var temp__3698__auto____4042 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4042))
{var s__4043 = temp__3698__auto____4042;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4043),take.call(null,(n - 1),cljs.core.rest.call(null,s__4043)));
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
var step__4046 = (function (n,coll){
while(true){
var s__4044 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4045 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4045))
{return s__4044;
} else
{return and__3546__auto____4045;
}
})()))
{{
var G__4047 = (n - 1);
var G__4048 = cljs.core.rest.call(null,s__4044);
n = G__4047;
coll = G__4048;
continue;
}
} else
{return s__4044;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4046.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4049 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4050 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4049.call(this,n);
case  2 :
return drop_last__4050.call(this,n,s);
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
var s__4052 = cljs.core.seq.call(null,coll);
var lead__4053 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4053))
{{
var G__4054 = cljs.core.next.call(null,s__4052);
var G__4055 = cljs.core.next.call(null,lead__4053);
s__4052 = G__4054;
lead__4053 = G__4055;
continue;
}
} else
{return s__4052;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4058 = (function (pred,coll){
while(true){
var s__4056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4057 = s__4056;

if(cljs.core.truth_(and__3546__auto____4057))
{return pred.call(null,cljs.core.first.call(null,s__4056));
} else
{return and__3546__auto____4057;
}
})()))
{{
var G__4059 = pred;
var G__4060 = cljs.core.rest.call(null,s__4056);
pred = G__4059;
coll = G__4060;
continue;
}
} else
{return s__4056;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4058.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4061))
{var s__4062 = temp__3698__auto____4061;

return cljs.core.concat.call(null,s__4062,cycle.call(null,s__4062));
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
var repeat__4063 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4064 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4063.call(this,n);
case  2 :
return repeat__4064.call(this,n,x);
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
var repeatedly__4066 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4067 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4066.call(this,n);
case  2 :
return repeatedly__4067.call(this,n,f);
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
var interleave__4073 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4069 = cljs.core.seq.call(null,c1);
var s2__4070 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4071 = s1__4069;

if(cljs.core.truth_(and__3546__auto____4071))
{return s2__4070;
} else
{return and__3546__auto____4071;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4069),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4070),interleave.call(null,cljs.core.rest.call(null,s1__4069),cljs.core.rest.call(null,s2__4070))));
} else
{return null;
}
})));
});
var interleave__4074 = (function() { 
var G__4076__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4072 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4072)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4072),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4072)));
} else
{return null;
}
})));
};
var G__4076 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4076__delegate.call(this, c1, c2, colls);
};
G__4076.cljs$lang$maxFixedArity = 2;
G__4076.cljs$lang$applyTo = (function (arglist__4077){
var c1 = cljs.core.first(arglist__4077);
var c2 = cljs.core.first(cljs.core.next(arglist__4077));
var colls = cljs.core.rest(cljs.core.next(arglist__4077));
return G__4076__delegate.call(this, c1, c2, colls);
});
return G__4076;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4073.call(this,c1,c2);
default:
return interleave__4074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4074.cljs$lang$applyTo;
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
var cat__4080 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4078 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4078))
{var coll__4079 = temp__3695__auto____4078;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4079),cat.call(null,cljs.core.rest.call(null,coll__4079),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4080.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4081 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4082 = (function() { 
var G__4084__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4084 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4084__delegate.call(this, f, coll, colls);
};
G__4084.cljs$lang$maxFixedArity = 2;
G__4084.cljs$lang$applyTo = (function (arglist__4085){
var f = cljs.core.first(arglist__4085);
var coll = cljs.core.first(cljs.core.next(arglist__4085));
var colls = cljs.core.rest(cljs.core.next(arglist__4085));
return G__4084__delegate.call(this, f, coll, colls);
});
return G__4084;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4081.call(this,f,coll);
default:
return mapcat__4082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4082.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4086 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4086))
{var s__4087 = temp__3698__auto____4086;

var f__4088 = cljs.core.first.call(null,s__4087);
var r__4089 = cljs.core.rest.call(null,s__4087);

if(cljs.core.truth_(pred.call(null,f__4088)))
{return cljs.core.cons.call(null,f__4088,filter.call(null,pred,r__4089));
} else
{return filter.call(null,pred,r__4089);
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
var walk__4091 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4091.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4090_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4090_SHARP_));
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
var partition__4098 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4099 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4092))
{var s__4093 = temp__3698__auto____4092;

var p__4094 = cljs.core.take.call(null,n,s__4093);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4094))))
{return cljs.core.cons.call(null,p__4094,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4093)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4100 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4095 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4095))
{var s__4096 = temp__3698__auto____4095;

var p__4097 = cljs.core.take.call(null,n,s__4096);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4097))))
{return cljs.core.cons.call(null,p__4097,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4096)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4097,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4098.call(this,n,step);
case  3 :
return partition__4099.call(this,n,step,pad);
case  4 :
return partition__4100.call(this,n,step,pad,coll);
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
var get_in__4106 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4107 = (function (m,ks,not_found){
var sentinel__4102 = cljs.core.lookup_sentinel;
var m__4103 = m;
var ks__4104 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4104))
{var m__4105 = cljs.core.get.call(null,m__4103,cljs.core.first.call(null,ks__4104),sentinel__4102);

if(cljs.core.truth_((sentinel__4102 === m__4105)))
{return not_found;
} else
{{
var G__4109 = sentinel__4102;
var G__4110 = m__4105;
var G__4111 = cljs.core.next.call(null,ks__4104);
sentinel__4102 = G__4109;
m__4103 = G__4110;
ks__4104 = G__4111;
continue;
}
}
} else
{return m__4103;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4106.call(this,m,ks);
case  3 :
return get_in__4107.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4112,v){
var vec__4113__4114 = p__4112;
var k__4115 = cljs.core.nth.call(null,vec__4113__4114,0,null);
var ks__4116 = cljs.core.nthnext.call(null,vec__4113__4114,1);

if(cljs.core.truth_(ks__4116))
{return cljs.core.assoc.call(null,m,k__4115,assoc_in.call(null,cljs.core.get.call(null,m,k__4115),ks__4116,v));
} else
{return cljs.core.assoc.call(null,m,k__4115,v);
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
var update_in__delegate = function (m,p__4117,f,args){
var vec__4118__4119 = p__4117;
var k__4120 = cljs.core.nth.call(null,vec__4118__4119,0,null);
var ks__4121 = cljs.core.nthnext.call(null,vec__4118__4119,1);

if(cljs.core.truth_(ks__4121))
{return cljs.core.assoc.call(null,m,k__4120,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4120),ks__4121,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4120,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4120),args));
}
};
var update_in = function (m,p__4117,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4117, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4122){
var m = cljs.core.first(arglist__4122);
var p__4117 = cljs.core.first(cljs.core.next(arglist__4122));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4122)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4122)));
return update_in__delegate.call(this, m, p__4117, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4123 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4156 = null;
var G__4156__4157 = (function (coll,k){
var this__4124 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4156__4158 = (function (coll,k,not_found){
var this__4125 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4156 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4156__4157.call(this,coll,k);
case  3 :
return G__4156__4158.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4156;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4126 = this;
var new_array__4127 = cljs.core.aclone.call(null,this__4126.array);

(new_array__4127[k] = v);
return (new cljs.core.Vector(this__4126.meta,new_array__4127));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4160 = null;
var G__4160__4161 = (function (tsym4128,k){
var this__4130 = this;
var tsym4128__4131 = this;

var coll__4132 = tsym4128__4131;

return cljs.core._lookup.call(null,coll__4132,k);
});
var G__4160__4162 = (function (tsym4129,k,not_found){
var this__4133 = this;
var tsym4129__4134 = this;

var coll__4135 = tsym4129__4134;

return cljs.core._lookup.call(null,coll__4135,k,not_found);
});
G__4160 = function(tsym4129,k,not_found){
switch(arguments.length){
case  2 :
return G__4160__4161.call(this,tsym4129,k);
case  3 :
return G__4160__4162.call(this,tsym4129,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4160;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4136 = this;
var new_array__4137 = cljs.core.aclone.call(null,this__4136.array);

new_array__4137.push(o);
return (new cljs.core.Vector(this__4136.meta,new_array__4137));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4164 = null;
var G__4164__4165 = (function (v,f){
var this__4138 = this;
return cljs.core.ci_reduce.call(null,this__4138.array,f);
});
var G__4164__4166 = (function (v,f,start){
var this__4139 = this;
return cljs.core.ci_reduce.call(null,this__4139.array,f,start);
});
G__4164 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4164__4165.call(this,v,f);
case  3 :
return G__4164__4166.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4164;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4140 = this;
if(cljs.core.truth_((this__4140.array.length > 0)))
{var vector_seq__4141 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4140.array.length)))
{return cljs.core.cons.call(null,(this__4140.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4141.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4142 = this;
return this__4142.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4143 = this;
var count__4144 = this__4143.array.length;

if(cljs.core.truth_((count__4144 > 0)))
{return (this__4143.array[(count__4144 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4145 = this;
if(cljs.core.truth_((this__4145.array.length > 0)))
{var new_array__4146 = cljs.core.aclone.call(null,this__4145.array);

new_array__4146.pop();
return (new cljs.core.Vector(this__4145.meta,new_array__4146));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4147 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4148 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4149 = this;
return (new cljs.core.Vector(meta,this__4149.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4150 = this;
return this__4150.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4168 = null;
var G__4168__4169 = (function (coll,n){
var this__4151 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4152 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4152))
{return (n < this__4151.array.length);
} else
{return and__3546__auto____4152;
}
})()))
{return (this__4151.array[n]);
} else
{return null;
}
});
var G__4168__4170 = (function (coll,n,not_found){
var this__4153 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4154 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4154))
{return (n < this__4153.array.length);
} else
{return and__3546__auto____4154;
}
})()))
{return (this__4153.array[n]);
} else
{return not_found;
}
});
G__4168 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4168__4169.call(this,coll,n);
case  3 :
return G__4168__4170.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4168;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4155 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4155.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4172){
var args = cljs.core.seq( arglist__4172 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4173 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4201 = null;
var G__4201__4202 = (function (coll,k){
var this__4174 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4201__4203 = (function (coll,k,not_found){
var this__4175 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4201 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4201__4202.call(this,coll,k);
case  3 :
return G__4201__4203.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4201;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4176 = this;
var v_pos__4177 = (this__4176.start + key);

return (new cljs.core.Subvec(this__4176.meta,cljs.core._assoc.call(null,this__4176.v,v_pos__4177,val),this__4176.start,((this__4176.end > (v_pos__4177 + 1)) ? this__4176.end : (v_pos__4177 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4205 = null;
var G__4205__4206 = (function (tsym4178,k){
var this__4180 = this;
var tsym4178__4181 = this;

var coll__4182 = tsym4178__4181;

return cljs.core._lookup.call(null,coll__4182,k);
});
var G__4205__4207 = (function (tsym4179,k,not_found){
var this__4183 = this;
var tsym4179__4184 = this;

var coll__4185 = tsym4179__4184;

return cljs.core._lookup.call(null,coll__4185,k,not_found);
});
G__4205 = function(tsym4179,k,not_found){
switch(arguments.length){
case  2 :
return G__4205__4206.call(this,tsym4179,k);
case  3 :
return G__4205__4207.call(this,tsym4179,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4205;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4186 = this;
return (new cljs.core.Subvec(this__4186.meta,cljs.core._assoc_n.call(null,this__4186.v,this__4186.end,o),this__4186.start,(this__4186.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4209 = null;
var G__4209__4210 = (function (coll,f){
var this__4187 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4209__4211 = (function (coll,f,start){
var this__4188 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4209 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4209__4210.call(this,coll,f);
case  3 :
return G__4209__4211.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4209;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4189 = this;
var subvec_seq__4190 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4189.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4189.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4190.call(null,this__4189.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4191 = this;
return (this__4191.end - this__4191.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4192 = this;
return cljs.core._nth.call(null,this__4192.v,(this__4192.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4193 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4193.start,this__4193.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4193.meta,this__4193.v,this__4193.start,(this__4193.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4194 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4195 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4196 = this;
return (new cljs.core.Subvec(meta,this__4196.v,this__4196.start,this__4196.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4197 = this;
return this__4197.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4213 = null;
var G__4213__4214 = (function (coll,n){
var this__4198 = this;
return cljs.core._nth.call(null,this__4198.v,(this__4198.start + n));
});
var G__4213__4215 = (function (coll,n,not_found){
var this__4199 = this;
return cljs.core._nth.call(null,this__4199.v,(this__4199.start + n),not_found);
});
G__4213 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4213__4214.call(this,coll,n);
case  3 :
return G__4213__4215.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4213;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4200 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4200.meta);
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
var subvec__4217 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4218 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4217.call(this,v,start);
case  3 :
return subvec__4218.call(this,v,start,end);
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4220 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4221 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4222 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4223 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4223.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4224 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4225 = this;
return cljs.core._first.call(null,this__4225.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4226 = this;
var temp__3695__auto____4227 = cljs.core.next.call(null,this__4226.front);

if(cljs.core.truth_(temp__3695__auto____4227))
{var f1__4228 = temp__3695__auto____4227;

return (new cljs.core.PersistentQueueSeq(this__4226.meta,f1__4228,this__4226.rear));
} else
{if(cljs.core.truth_((this__4226.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4226.meta,this__4226.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4229 = this;
return this__4229.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4230 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4230.front,this__4230.rear));
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4231 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4232 = this;
if(cljs.core.truth_(this__4232.front))
{return (new cljs.core.PersistentQueue(this__4232.meta,(this__4232.count + 1),this__4232.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4233 = this__4232.rear;

if(cljs.core.truth_(or__3548__auto____4233))
{return or__3548__auto____4233;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4232.meta,(this__4232.count + 1),cljs.core.conj.call(null,this__4232.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4234 = this;
var rear__4235 = cljs.core.seq.call(null,this__4234.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4236 = this__4234.front;

if(cljs.core.truth_(or__3548__auto____4236))
{return or__3548__auto____4236;
} else
{return rear__4235;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4234.front,cljs.core.seq.call(null,rear__4235)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4237 = this;
return this__4237.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4238 = this;
return cljs.core._first.call(null,this__4238.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4239 = this;
if(cljs.core.truth_(this__4239.front))
{var temp__3695__auto____4240 = cljs.core.next.call(null,this__4239.front);

if(cljs.core.truth_(temp__3695__auto____4240))
{var f1__4241 = temp__3695__auto____4240;

return (new cljs.core.PersistentQueue(this__4239.meta,(this__4239.count - 1),f1__4241,this__4239.rear));
} else
{return (new cljs.core.PersistentQueue(this__4239.meta,(this__4239.count - 1),cljs.core.seq.call(null,this__4239.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4242 = this;
return cljs.core.first.call(null,this__4242.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4243 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4245 = this;
return (new cljs.core.PersistentQueue(meta,this__4245.count,this__4245.front,this__4245.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4246 = this;
return this__4246.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4247 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4248 = this;
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
var len__4249 = array.length;

var i__4250 = 0;

while(true){
if(cljs.core.truth_((i__4250 < len__4249)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4250]))))
{return i__4250;
} else
{{
var G__4251 = (i__4250 + incr);
i__4250 = G__4251;
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
var obj_map_contains_key_QMARK___4253 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4254 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4252 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4252))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4252;
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
return obj_map_contains_key_QMARK___4253.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4254.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4257 = cljs.core.hash.call(null,a);
var b__4258 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4257 < b__4258)))
{return -1;
} else
{if(cljs.core.truth_((a__4257 > b__4258)))
{return 1;
} else
{if(cljs.core.truth_("﷐'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4259 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4286 = null;
var G__4286__4287 = (function (coll,k){
var this__4260 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4286__4288 = (function (coll,k,not_found){
var this__4261 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4261.strobj,(this__4261.strobj[k]),not_found);
});
G__4286 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4286__4287.call(this,coll,k);
case  3 :
return G__4286__4288.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4286;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4262 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4263 = goog.object.clone.call(null,this__4262.strobj);
var overwrite_QMARK___4264 = new_strobj__4263.hasOwnProperty(k);

(new_strobj__4263[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4264))
{return (new cljs.core.ObjMap(this__4262.meta,this__4262.keys,new_strobj__4263));
} else
{var new_keys__4265 = cljs.core.aclone.call(null,this__4262.keys);

new_keys__4265.push(k);
return (new cljs.core.ObjMap(this__4262.meta,new_keys__4265,new_strobj__4263));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4262.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4266 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4266.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4290 = null;
var G__4290__4291 = (function (tsym4267,k){
var this__4269 = this;
var tsym4267__4270 = this;

var coll__4271 = tsym4267__4270;

return cljs.core._lookup.call(null,coll__4271,k);
});
var G__4290__4292 = (function (tsym4268,k,not_found){
var this__4272 = this;
var tsym4268__4273 = this;

var coll__4274 = tsym4268__4273;

return cljs.core._lookup.call(null,coll__4274,k,not_found);
});
G__4290 = function(tsym4268,k,not_found){
switch(arguments.length){
case  2 :
return G__4290__4291.call(this,tsym4268,k);
case  3 :
return G__4290__4292.call(this,tsym4268,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4290;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4275 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4276 = this;
if(cljs.core.truth_((this__4276.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4256_SHARP_){
return cljs.core.vector.call(null,p1__4256_SHARP_,(this__4276.strobj[p1__4256_SHARP_]));
}),this__4276.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4277 = this;
return this__4277.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4278 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4279 = this;
return (new cljs.core.ObjMap(meta,this__4279.keys,this__4279.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4280 = this;
return this__4280.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4281 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4281.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4282 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4283 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4283))
{return this__4282.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4283;
}
})()))
{var new_keys__4284 = cljs.core.aclone.call(null,this__4282.keys);
var new_strobj__4285 = goog.object.clone.call(null,this__4282.strobj);

new_keys__4284.splice(cljs.core.scan_array.call(null,1,k,new_keys__4284),1);
cljs.core.js_delete.call(null,new_strobj__4285,k);
return (new cljs.core.ObjMap(this__4282.meta,new_keys__4284,new_strobj__4285));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4295 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4333 = null;
var G__4333__4334 = (function (coll,k){
var this__4296 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4333__4335 = (function (coll,k,not_found){
var this__4297 = this;
var bucket__4298 = (this__4297.hashobj[cljs.core.hash.call(null,k)]);
var i__4299 = (cljs.core.truth_(bucket__4298)?cljs.core.scan_array.call(null,2,k,bucket__4298):null);

if(cljs.core.truth_(i__4299))
{return (bucket__4298[(i__4299 + 1)]);
} else
{return not_found;
}
});
G__4333 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4333__4334.call(this,coll,k);
case  3 :
return G__4333__4335.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4333;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4300 = this;
var h__4301 = cljs.core.hash.call(null,k);
var bucket__4302 = (this__4300.hashobj[h__4301]);

if(cljs.core.truth_(bucket__4302))
{var new_bucket__4303 = cljs.core.aclone.call(null,bucket__4302);
var new_hashobj__4304 = goog.object.clone.call(null,this__4300.hashobj);

(new_hashobj__4304[h__4301] = new_bucket__4303);
var temp__3695__auto____4305 = cljs.core.scan_array.call(null,2,k,new_bucket__4303);

if(cljs.core.truth_(temp__3695__auto____4305))
{var i__4306 = temp__3695__auto____4305;

(new_bucket__4303[(i__4306 + 1)] = v);
return (new cljs.core.HashMap(this__4300.meta,this__4300.count,new_hashobj__4304));
} else
{new_bucket__4303.push(k,v);
return (new cljs.core.HashMap(this__4300.meta,(this__4300.count + 1),new_hashobj__4304));
}
} else
{var new_hashobj__4307 = goog.object.clone.call(null,this__4300.hashobj);

(new_hashobj__4307[h__4301] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4300.meta,(this__4300.count + 1),new_hashobj__4307));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4308 = this;
var bucket__4309 = (this__4308.hashobj[cljs.core.hash.call(null,k)]);
var i__4310 = (cljs.core.truth_(bucket__4309)?cljs.core.scan_array.call(null,2,k,bucket__4309):null);

if(cljs.core.truth_(i__4310))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4337 = null;
var G__4337__4338 = (function (tsym4311,k){
var this__4313 = this;
var tsym4311__4314 = this;

var coll__4315 = tsym4311__4314;

return cljs.core._lookup.call(null,coll__4315,k);
});
var G__4337__4339 = (function (tsym4312,k,not_found){
var this__4316 = this;
var tsym4312__4317 = this;

var coll__4318 = tsym4312__4317;

return cljs.core._lookup.call(null,coll__4318,k,not_found);
});
G__4337 = function(tsym4312,k,not_found){
switch(arguments.length){
case  2 :
return G__4337__4338.call(this,tsym4312,k);
case  3 :
return G__4337__4339.call(this,tsym4312,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4337;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4319 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4320 = this;
if(cljs.core.truth_((this__4320.count > 0)))
{var hashes__4321 = cljs.core.js_keys.call(null,this__4320.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4294_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4320.hashobj[p1__4294_SHARP_])));
}),hashes__4321);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4322 = this;
return this__4322.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4323 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4324 = this;
return (new cljs.core.HashMap(meta,this__4324.count,this__4324.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4325 = this;
return this__4325.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4326 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4326.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4327 = this;
var h__4328 = cljs.core.hash.call(null,k);
var bucket__4329 = (this__4327.hashobj[h__4328]);
var i__4330 = (cljs.core.truth_(bucket__4329)?cljs.core.scan_array.call(null,2,k,bucket__4329):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4330)))
{return coll;
} else
{var new_hashobj__4331 = goog.object.clone.call(null,this__4327.hashobj);

if(cljs.core.truth_((3 > bucket__4329.length)))
{cljs.core.js_delete.call(null,new_hashobj__4331,h__4328);
} else
{var new_bucket__4332 = cljs.core.aclone.call(null,bucket__4329);

new_bucket__4332.splice(i__4330,2);
(new_hashobj__4331[h__4328] = new_bucket__4332);
}
return (new cljs.core.HashMap(this__4327.meta,(this__4327.count - 1),new_hashobj__4331));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4341 = ks.length;

var i__4342 = 0;
var out__4343 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4342 < len__4341)))
{{
var G__4344 = (i__4342 + 1);
var G__4345 = cljs.core.assoc.call(null,out__4343,(ks[i__4342]),(vs[i__4342]));
i__4342 = G__4344;
out__4343 = G__4345;
continue;
}
} else
{return out__4343;
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
var in$__4346 = cljs.core.seq.call(null,keyvals);
var out__4347 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4346))
{{
var G__4348 = cljs.core.nnext.call(null,in$__4346);
var G__4349 = cljs.core.assoc.call(null,out__4347,cljs.core.first.call(null,in$__4346),cljs.core.second.call(null,in$__4346));
in$__4346 = G__4348;
out__4347 = G__4349;
continue;
}
} else
{return out__4347;
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
hash_map.cljs$lang$applyTo = (function (arglist__4350){
var keyvals = cljs.core.seq( arglist__4350 );;
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
{return cljs.core.reduce.call(null,(function (p1__4351_SHARP_,p2__4352_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4353 = p1__4351_SHARP_;

if(cljs.core.truth_(or__3548__auto____4353))
{return or__3548__auto____4353;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4352_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4354){
var maps = cljs.core.seq( arglist__4354 );;
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
{var merge_entry__4357 = (function (m,e){
var k__4355 = cljs.core.first.call(null,e);
var v__4356 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4355)))
{return cljs.core.assoc.call(null,m,k__4355,f.call(null,cljs.core.get.call(null,m,k__4355),v__4356));
} else
{return cljs.core.assoc.call(null,m,k__4355,v__4356);
}
});
var merge2__4359 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4357,(function (){var or__3548__auto____4358 = m1;

if(cljs.core.truth_(or__3548__auto____4358))
{return or__3548__auto____4358;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4359,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4360){
var f = cljs.core.first(arglist__4360);
var maps = cljs.core.rest(arglist__4360);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4362 = cljs.core.ObjMap.fromObject([],{});
var keys__4363 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4363))
{var key__4364 = cljs.core.first.call(null,keys__4363);
var entry__4365 = cljs.core.get.call(null,map,key__4364,"﷐'user/not-found");

{
var G__4366 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4365,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4362,key__4364,entry__4365):ret__4362);
var G__4367 = cljs.core.next.call(null,keys__4363);
ret__4362 = G__4366;
keys__4363 = G__4367;
continue;
}
} else
{return ret__4362;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4368 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4389 = null;
var G__4389__4390 = (function (coll,v){
var this__4369 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4389__4391 = (function (coll,v,not_found){
var this__4370 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4370.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4389 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4389__4390.call(this,coll,v);
case  3 :
return G__4389__4391.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4389;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4393 = null;
var G__4393__4394 = (function (tsym4371,k){
var this__4373 = this;
var tsym4371__4374 = this;

var coll__4375 = tsym4371__4374;

return cljs.core._lookup.call(null,coll__4375,k);
});
var G__4393__4395 = (function (tsym4372,k,not_found){
var this__4376 = this;
var tsym4372__4377 = this;

var coll__4378 = tsym4372__4377;

return cljs.core._lookup.call(null,coll__4378,k,not_found);
});
G__4393 = function(tsym4372,k,not_found){
switch(arguments.length){
case  2 :
return G__4393__4394.call(this,tsym4372,k);
case  3 :
return G__4393__4395.call(this,tsym4372,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4393;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4379 = this;
return (new cljs.core.Set(this__4379.meta,cljs.core.assoc.call(null,this__4379.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4380 = this;
return cljs.core.keys.call(null,this__4380.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4381 = this;
return (new cljs.core.Set(this__4381.meta,cljs.core.dissoc.call(null,this__4381.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4382 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4383 = this;
var and__3546__auto____4384 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4384))
{var and__3546__auto____4385 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4385))
{return cljs.core.every_QMARK_.call(null,(function (p1__4361_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4361_SHARP_);
}),other);
} else
{return and__3546__auto____4385;
}
} else
{return and__3546__auto____4384;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4386 = this;
return (new cljs.core.Set(meta,this__4386.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4387 = this;
return this__4387.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4388 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4388.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4398 = cljs.core.seq.call(null,coll);
var out__4399 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4398))))
{{
var G__4400 = cljs.core.rest.call(null,in$__4398);
var G__4401 = cljs.core.conj.call(null,out__4399,cljs.core.first.call(null,in$__4398));
in$__4398 = G__4400;
out__4399 = G__4401;
continue;
}
} else
{return out__4399;
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
{var n__4402 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4403 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4403))
{var e__4404 = temp__3695__auto____4403;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4404));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4402,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4397_SHARP_){
var temp__3695__auto____4405 = cljs.core.find.call(null,smap,p1__4397_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4405))
{var e__4406 = temp__3695__auto____4405;

return cljs.core.second.call(null,e__4406);
} else
{return p1__4397_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4414 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4407,seen){
while(true){
var vec__4408__4409 = p__4407;
var f__4410 = cljs.core.nth.call(null,vec__4408__4409,0,null);
var xs__4411 = vec__4408__4409;

var temp__3698__auto____4412 = cljs.core.seq.call(null,xs__4411);

if(cljs.core.truth_(temp__3698__auto____4412))
{var s__4413 = temp__3698__auto____4412;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4410)))
{{
var G__4415 = cljs.core.rest.call(null,s__4413);
var G__4416 = seen;
p__4407 = G__4415;
seen = G__4416;
continue;
}
} else
{return cljs.core.cons.call(null,f__4410,step.call(null,cljs.core.rest.call(null,s__4413),cljs.core.conj.call(null,seen,f__4410)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4414.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4417 = cljs.core.Vector.fromArray([]);
var s__4418 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4418)))
{{
var G__4419 = cljs.core.conj.call(null,ret__4417,cljs.core.first.call(null,s__4418));
var G__4420 = cljs.core.next.call(null,s__4418);
ret__4417 = G__4419;
s__4418 = G__4420;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4417);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4421 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4421))
{return or__3548__auto____4421;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4422 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4422 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4422 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4423 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4423))
{return or__3548__auto____4423;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4424 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4424 > -1)))
{return cljs.core.subs.call(null,x,2,i__4424);
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
var map__4427 = cljs.core.ObjMap.fromObject([],{});
var ks__4428 = cljs.core.seq.call(null,keys);
var vs__4429 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4430 = ks__4428;

if(cljs.core.truth_(and__3546__auto____4430))
{return vs__4429;
} else
{return and__3546__auto____4430;
}
})()))
{{
var G__4431 = cljs.core.assoc.call(null,map__4427,cljs.core.first.call(null,ks__4428),cljs.core.first.call(null,vs__4429));
var G__4432 = cljs.core.next.call(null,ks__4428);
var G__4433 = cljs.core.next.call(null,vs__4429);
map__4427 = G__4431;
ks__4428 = G__4432;
vs__4429 = G__4433;
continue;
}
} else
{return map__4427;
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
var max_key__4436 = (function (k,x){
return x;
});
var max_key__4437 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4438 = (function() { 
var G__4440__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4425_SHARP_,p2__4426_SHARP_){
return max_key.call(null,k,p1__4425_SHARP_,p2__4426_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4440 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4440__delegate.call(this, k, x, y, more);
};
G__4440.cljs$lang$maxFixedArity = 3;
G__4440.cljs$lang$applyTo = (function (arglist__4441){
var k = cljs.core.first(arglist__4441);
var x = cljs.core.first(cljs.core.next(arglist__4441));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4441)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4441)));
return G__4440__delegate.call(this, k, x, y, more);
});
return G__4440;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4436.call(this,k,x);
case  3 :
return max_key__4437.call(this,k,x,y);
default:
return max_key__4438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4438.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4442 = (function (k,x){
return x;
});
var min_key__4443 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4444 = (function() { 
var G__4446__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4434_SHARP_,p2__4435_SHARP_){
return min_key.call(null,k,p1__4434_SHARP_,p2__4435_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4446 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4446__delegate.call(this, k, x, y, more);
};
G__4446.cljs$lang$maxFixedArity = 3;
G__4446.cljs$lang$applyTo = (function (arglist__4447){
var k = cljs.core.first(arglist__4447);
var x = cljs.core.first(cljs.core.next(arglist__4447));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4447)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4447)));
return G__4446__delegate.call(this, k, x, y, more);
});
return G__4446;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4442.call(this,k,x);
case  3 :
return min_key__4443.call(this,k,x,y);
default:
return min_key__4444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4444.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4450 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4451 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4448 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4448))
{var s__4449 = temp__3698__auto____4448;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4449),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4449)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4450.call(this,n,step);
case  3 :
return partition_all__4451.call(this,n,step,coll);
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
var temp__3698__auto____4453 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4453))
{var s__4454 = temp__3698__auto____4453;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4454))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4454),take_while.call(null,pred,cljs.core.rest.call(null,s__4454)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4455 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4456 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4472 = null;
var G__4472__4473 = (function (rng,f){
var this__4457 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4472__4474 = (function (rng,f,s){
var this__4458 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4472 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4472__4473.call(this,rng,f);
case  3 :
return G__4472__4474.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4472;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4459 = this;
var comp__4460 = (cljs.core.truth_((this__4459.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4460.call(null,this__4459.start,this__4459.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4461 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4461.end - this__4461.start) / this__4461.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4462 = this;
return this__4462.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4463 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4463.meta,(this__4463.start + this__4463.step),this__4463.end,this__4463.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4464 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4465 = this;
return (new cljs.core.Range(meta,this__4465.start,this__4465.end,this__4465.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4466 = this;
return this__4466.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4476 = null;
var G__4476__4477 = (function (rng,n){
var this__4467 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4467.start + (n * this__4467.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4468 = (this__4467.start > this__4467.end);

if(cljs.core.truth_(and__3546__auto____4468))
{return cljs.core._EQ_.call(null,this__4467.step,0);
} else
{return and__3546__auto____4468;
}
})()))
{return this__4467.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4476__4478 = (function (rng,n,not_found){
var this__4469 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4469.start + (n * this__4469.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4470 = (this__4469.start > this__4469.end);

if(cljs.core.truth_(and__3546__auto____4470))
{return cljs.core._EQ_.call(null,this__4469.step,0);
} else
{return and__3546__auto____4470;
}
})()))
{return this__4469.start;
} else
{return not_found;
}
}
});
G__4476 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4476__4477.call(this,rng,n);
case  3 :
return G__4476__4478.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4476;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4471 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4471.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4480 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4481 = (function (end){
return range.call(null,0,end,1);
});
var range__4482 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4483 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4480.call(this);
case  1 :
return range__4481.call(this,start);
case  2 :
return range__4482.call(this,start,end);
case  3 :
return range__4483.call(this,start,end,step);
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
var temp__3698__auto____4485 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4485))
{var s__4486 = temp__3698__auto____4485;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4486),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4486)));
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
var temp__3698__auto____4488 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4488))
{var s__4489 = temp__3698__auto____4488;

var fst__4490 = cljs.core.first.call(null,s__4489);
var fv__4491 = f.call(null,fst__4490);
var run__4492 = cljs.core.cons.call(null,fst__4490,cljs.core.take_while.call(null,(function (p1__4487_SHARP_){
return cljs.core._EQ_.call(null,fv__4491,f.call(null,p1__4487_SHARP_));
}),cljs.core.next.call(null,s__4489)));

return cljs.core.cons.call(null,run__4492,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4492),s__4489))));
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
var reductions__4507 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4503 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4503))
{var s__4504 = temp__3695__auto____4503;

return reductions.call(null,f,cljs.core.first.call(null,s__4504),cljs.core.rest.call(null,s__4504));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4508 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4505 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4505))
{var s__4506 = temp__3698__auto____4505;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4506)),cljs.core.rest.call(null,s__4506));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4507.call(this,f,init);
case  3 :
return reductions__4508.call(this,f,init,coll);
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
var juxt__4511 = (function (f){
return (function() {
var G__4516 = null;
var G__4516__4517 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4516__4518 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4516__4519 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4516__4520 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4516__4521 = (function() { 
var G__4523__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4523 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4523__delegate.call(this, x, y, z, args);
};
G__4523.cljs$lang$maxFixedArity = 3;
G__4523.cljs$lang$applyTo = (function (arglist__4524){
var x = cljs.core.first(arglist__4524);
var y = cljs.core.first(cljs.core.next(arglist__4524));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4524)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4524)));
return G__4523__delegate.call(this, x, y, z, args);
});
return G__4523;
})()
;
G__4516 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4516__4517.call(this);
case  1 :
return G__4516__4518.call(this,x);
case  2 :
return G__4516__4519.call(this,x,y);
case  3 :
return G__4516__4520.call(this,x,y,z);
default:
return G__4516__4521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4516.cljs$lang$maxFixedArity = 3;
G__4516.cljs$lang$applyTo = G__4516__4521.cljs$lang$applyTo;
return G__4516;
})()
});
var juxt__4512 = (function (f,g){
return (function() {
var G__4525 = null;
var G__4525__4526 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4525__4527 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4525__4528 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4525__4529 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4525__4530 = (function() { 
var G__4532__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4532 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4532__delegate.call(this, x, y, z, args);
};
G__4532.cljs$lang$maxFixedArity = 3;
G__4532.cljs$lang$applyTo = (function (arglist__4533){
var x = cljs.core.first(arglist__4533);
var y = cljs.core.first(cljs.core.next(arglist__4533));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4533)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4533)));
return G__4532__delegate.call(this, x, y, z, args);
});
return G__4532;
})()
;
G__4525 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4525__4526.call(this);
case  1 :
return G__4525__4527.call(this,x);
case  2 :
return G__4525__4528.call(this,x,y);
case  3 :
return G__4525__4529.call(this,x,y,z);
default:
return G__4525__4530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4525.cljs$lang$maxFixedArity = 3;
G__4525.cljs$lang$applyTo = G__4525__4530.cljs$lang$applyTo;
return G__4525;
})()
});
var juxt__4513 = (function (f,g,h){
return (function() {
var G__4534 = null;
var G__4534__4535 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4534__4536 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4534__4537 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4534__4538 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4534__4539 = (function() { 
var G__4541__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4541 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4541__delegate.call(this, x, y, z, args);
};
G__4541.cljs$lang$maxFixedArity = 3;
G__4541.cljs$lang$applyTo = (function (arglist__4542){
var x = cljs.core.first(arglist__4542);
var y = cljs.core.first(cljs.core.next(arglist__4542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4542)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4542)));
return G__4541__delegate.call(this, x, y, z, args);
});
return G__4541;
})()
;
G__4534 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4534__4535.call(this);
case  1 :
return G__4534__4536.call(this,x);
case  2 :
return G__4534__4537.call(this,x,y);
case  3 :
return G__4534__4538.call(this,x,y,z);
default:
return G__4534__4539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4534.cljs$lang$maxFixedArity = 3;
G__4534.cljs$lang$applyTo = G__4534__4539.cljs$lang$applyTo;
return G__4534;
})()
});
var juxt__4514 = (function() { 
var G__4543__delegate = function (f,g,h,fs){
var fs__4510 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4544 = null;
var G__4544__4545 = (function (){
return cljs.core.reduce.call(null,(function (p1__4493_SHARP_,p2__4494_SHARP_){
return cljs.core.conj.call(null,p1__4493_SHARP_,p2__4494_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4510);
});
var G__4544__4546 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4495_SHARP_,p2__4496_SHARP_){
return cljs.core.conj.call(null,p1__4495_SHARP_,p2__4496_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4510);
});
var G__4544__4547 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4497_SHARP_,p2__4498_SHARP_){
return cljs.core.conj.call(null,p1__4497_SHARP_,p2__4498_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4510);
});
var G__4544__4548 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4499_SHARP_,p2__4500_SHARP_){
return cljs.core.conj.call(null,p1__4499_SHARP_,p2__4500_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4510);
});
var G__4544__4549 = (function() { 
var G__4551__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4501_SHARP_,p2__4502_SHARP_){
return cljs.core.conj.call(null,p1__4501_SHARP_,cljs.core.apply.call(null,p2__4502_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4510);
};
var G__4551 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4551__delegate.call(this, x, y, z, args);
};
G__4551.cljs$lang$maxFixedArity = 3;
G__4551.cljs$lang$applyTo = (function (arglist__4552){
var x = cljs.core.first(arglist__4552);
var y = cljs.core.first(cljs.core.next(arglist__4552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4552)));
return G__4551__delegate.call(this, x, y, z, args);
});
return G__4551;
})()
;
G__4544 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4544__4545.call(this);
case  1 :
return G__4544__4546.call(this,x);
case  2 :
return G__4544__4547.call(this,x,y);
case  3 :
return G__4544__4548.call(this,x,y,z);
default:
return G__4544__4549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4544.cljs$lang$maxFixedArity = 3;
G__4544.cljs$lang$applyTo = G__4544__4549.cljs$lang$applyTo;
return G__4544;
})()
};
var G__4543 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4543__delegate.call(this, f, g, h, fs);
};
G__4543.cljs$lang$maxFixedArity = 3;
G__4543.cljs$lang$applyTo = (function (arglist__4553){
var f = cljs.core.first(arglist__4553);
var g = cljs.core.first(cljs.core.next(arglist__4553));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4553)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4553)));
return G__4543__delegate.call(this, f, g, h, fs);
});
return G__4543;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4511.call(this,f);
case  2 :
return juxt__4512.call(this,f,g);
case  3 :
return juxt__4513.call(this,f,g,h);
default:
return juxt__4514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4514.cljs$lang$applyTo;
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
var dorun__4555 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4558 = cljs.core.next.call(null,coll);
coll = G__4558;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4556 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4554 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4554))
{return (n > 0);
} else
{return and__3546__auto____4554;
}
})()))
{{
var G__4559 = (n - 1);
var G__4560 = cljs.core.next.call(null,coll);
n = G__4559;
coll = G__4560;
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
return dorun__4555.call(this,n);
case  2 :
return dorun__4556.call(this,n,coll);
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
var doall__4561 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4562 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4561.call(this,n);
case  2 :
return doall__4562.call(this,n,coll);
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
var matches__4564 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4564),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4564),1)))
{return cljs.core.first.call(null,matches__4564);
} else
{return cljs.core.vec.call(null,matches__4564);
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
var matches__4565 = re.exec(s);

if(cljs.core.truth_((matches__4565 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4565),1)))
{return cljs.core.first.call(null,matches__4565);
} else
{return cljs.core.vec.call(null,matches__4565);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4566 = cljs.core.re_find.call(null,re,s);
var match_idx__4567 = s.search(re);
var match_str__4568 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4566))?cljs.core.first.call(null,match_data__4566):match_data__4566);
var post_match__4569 = cljs.core.subs.call(null,s,(match_idx__4567 + cljs.core.count.call(null,match_str__4568)));

if(cljs.core.truth_(match_data__4566))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4566,re_seq.call(null,re,post_match__4569));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4571__4572 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4573 = cljs.core.nth.call(null,vec__4571__4572,0,null);
var flags__4574 = cljs.core.nth.call(null,vec__4571__4572,1,null);
var pattern__4575 = cljs.core.nth.call(null,vec__4571__4572,2,null);

return (new RegExp(pattern__4575,flags__4574));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4570_SHARP_){
return print_one.call(null,p1__4570_SHARP_,opts);
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
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4576 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4576))
{var and__3546__auto____4580 = (function (){var x__354__auto____4577 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4578 = x__354__auto____4577;

if(cljs.core.truth_(and__3546__auto____4578))
{var and__3546__auto____4579 = x__354__auto____4577.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4579))
{return cljs.core.not.call(null,x__354__auto____4577.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4579;
}
} else
{return and__3546__auto____4578;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__354__auto____4577);
}
})();

if(cljs.core.truth_(and__3546__auto____4580))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4580;
}
} else
{return and__3546__auto____4576;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__354__auto____4581 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4582 = x__354__auto____4581;

if(cljs.core.truth_(and__3546__auto____4582))
{var and__3546__auto____4583 = x__354__auto____4581.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4583))
{return cljs.core.not.call(null,x__354__auto____4581.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4583;
}
} else
{return and__3546__auto____4582;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__354__auto____4581);
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
var first_obj__4584 = cljs.core.first.call(null,objs);
var sb__4585 = (new goog.string.StringBuffer());

var G__4586__4587 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4586__4587))
{var obj__4588 = cljs.core.first.call(null,G__4586__4587);
var G__4586__4589 = G__4586__4587;

while(true){
if(cljs.core.truth_((obj__4588 === first_obj__4584)))
{} else
{sb__4585.append(" ");
}
var G__4590__4591 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4588,opts));

if(cljs.core.truth_(G__4590__4591))
{var string__4592 = cljs.core.first.call(null,G__4590__4591);
var G__4590__4593 = G__4590__4591;

while(true){
sb__4585.append(string__4592);
var temp__3698__auto____4594 = cljs.core.next.call(null,G__4590__4593);

if(cljs.core.truth_(temp__3698__auto____4594))
{var G__4590__4595 = temp__3698__auto____4594;

{
var G__4598 = cljs.core.first.call(null,G__4590__4595);
var G__4599 = G__4590__4595;
string__4592 = G__4598;
G__4590__4593 = G__4599;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4596 = cljs.core.next.call(null,G__4586__4589);

if(cljs.core.truth_(temp__3698__auto____4596))
{var G__4586__4597 = temp__3698__auto____4596;

{
var G__4600 = cljs.core.first.call(null,G__4586__4597);
var G__4601 = G__4586__4597;
obj__4588 = G__4600;
G__4586__4589 = G__4601;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4585);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4602 = cljs.core.first.call(null,objs);

var G__4603__4604 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4603__4604))
{var obj__4605 = cljs.core.first.call(null,G__4603__4604);
var G__4603__4606 = G__4603__4604;

while(true){
if(cljs.core.truth_((obj__4605 === first_obj__4602)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4607__4608 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4605,opts));

if(cljs.core.truth_(G__4607__4608))
{var string__4609 = cljs.core.first.call(null,G__4607__4608);
var G__4607__4610 = G__4607__4608;

while(true){
cljs.core.string_print.call(null,string__4609);
var temp__3698__auto____4611 = cljs.core.next.call(null,G__4607__4610);

if(cljs.core.truth_(temp__3698__auto____4611))
{var G__4607__4612 = temp__3698__auto____4611;

{
var G__4615 = cljs.core.first.call(null,G__4607__4612);
var G__4616 = G__4607__4612;
string__4609 = G__4615;
G__4607__4610 = G__4616;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4613 = cljs.core.next.call(null,G__4603__4606);

if(cljs.core.truth_(temp__3698__auto____4613))
{var G__4603__4614 = temp__3698__auto____4613;

{
var G__4617 = cljs.core.first.call(null,G__4603__4614);
var G__4618 = G__4603__4614;
obj__4605 = G__4617;
G__4603__4606 = G__4618;
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
pr_str.cljs$lang$applyTo = (function (arglist__4619){
var objs = cljs.core.seq( arglist__4619 );;
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
pr.cljs$lang$applyTo = (function (arglist__4620){
var objs = cljs.core.seq( arglist__4620 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4621){
var objs = cljs.core.seq( arglist__4621 );;
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
println.cljs$lang$applyTo = (function (arglist__4622){
var objs = cljs.core.seq( arglist__4622 );;
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
prn.cljs$lang$applyTo = (function (arglist__4623){
var objs = cljs.core.seq( arglist__4623 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4624 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4624,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4625 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4625))
{var nspc__4626 = temp__3698__auto____4625;

return cljs.core.str.call(null,nspc__4626,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4627 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4627))
{var nspc__4628 = temp__3698__auto____4627;

return cljs.core.str.call(null,nspc__4628,"/");
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
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
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
var pr_pair__4629 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4629,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4630 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4631 = this;
var G__4632__4633 = cljs.core.seq.call(null,this__4631.watches);

if(cljs.core.truth_(G__4632__4633))
{var G__4635__4637 = cljs.core.first.call(null,G__4632__4633);
var vec__4636__4638 = G__4635__4637;
var key__4639 = cljs.core.nth.call(null,vec__4636__4638,0,null);
var f__4640 = cljs.core.nth.call(null,vec__4636__4638,1,null);
var G__4632__4641 = G__4632__4633;

var G__4635__4642 = G__4635__4637;
var G__4632__4643 = G__4632__4641;

while(true){
var vec__4644__4645 = G__4635__4642;
var key__4646 = cljs.core.nth.call(null,vec__4644__4645,0,null);
var f__4647 = cljs.core.nth.call(null,vec__4644__4645,1,null);
var G__4632__4648 = G__4632__4643;

f__4647.call(null,key__4646,this$,oldval,newval);
var temp__3698__auto____4649 = cljs.core.next.call(null,G__4632__4648);

if(cljs.core.truth_(temp__3698__auto____4649))
{var G__4632__4650 = temp__3698__auto____4649;

{
var G__4657 = cljs.core.first.call(null,G__4632__4650);
var G__4658 = G__4632__4650;
G__4635__4642 = G__4657;
G__4632__4643 = G__4658;
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
var this__4651 = this;
return this$.watches = cljs.core.assoc.call(null,this__4651.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4652 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4652.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4653 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4653.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4654 = this;
return this__4654.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4655 = this;
return this__4655.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4656 = this;
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
var atom__4665 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4666 = (function() { 
var G__4668__delegate = function (x,p__4659){
var map__4660__4661 = p__4659;
var map__4660__4662 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4660__4661))?cljs.core.apply.call(null,cljs.core.hash_map,map__4660__4661):map__4660__4661);
var validator__4663 = cljs.core.get.call(null,map__4660__4662,"﷐'validator");
var meta__4664 = cljs.core.get.call(null,map__4660__4662,"﷐'meta");

return (new cljs.core.Atom(x,meta__4664,validator__4663,null));
};
var G__4668 = function (x,var_args){
var p__4659 = null;
if (goog.isDef(var_args)) {
  p__4659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4668__delegate.call(this, x, p__4659);
};
G__4668.cljs$lang$maxFixedArity = 1;
G__4668.cljs$lang$applyTo = (function (arglist__4669){
var x = cljs.core.first(arglist__4669);
var p__4659 = cljs.core.rest(arglist__4669);
return G__4668__delegate.call(this, x, p__4659);
});
return G__4668;
})()
;
atom = function(x,var_args){
var p__4659 = var_args;
switch(arguments.length){
case  1 :
return atom__4665.call(this,x);
default:
return atom__4666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4666.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4670 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4670))
{var validate__4671 = temp__3698__auto____4670;

if(cljs.core.truth_(validate__4671.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3073))))));
}
} else
{}
var old_value__4672 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4672,new_value);
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
var swap_BANG___4673 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4674 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4675 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4676 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4677 = (function() { 
var G__4679__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4679 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4679__delegate.call(this, a, f, x, y, z, more);
};
G__4679.cljs$lang$maxFixedArity = 5;
G__4679.cljs$lang$applyTo = (function (arglist__4680){
var a = cljs.core.first(arglist__4680);
var f = cljs.core.first(cljs.core.next(arglist__4680));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4680)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4680))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4680)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4680)))));
return G__4679__delegate.call(this, a, f, x, y, z, more);
});
return G__4679;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4673.call(this,a,f);
case  3 :
return swap_BANG___4674.call(this,a,f,x);
case  4 :
return swap_BANG___4675.call(this,a,f,x,y);
case  5 :
return swap_BANG___4676.call(this,a,f,x,y,z);
default:
return swap_BANG___4677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4677.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4681){
var iref = cljs.core.first(arglist__4681);
var f = cljs.core.first(cljs.core.next(arglist__4681));
var args = cljs.core.rest(cljs.core.next(arglist__4681));
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
var gensym__4682 = (function (){
return gensym.call(null,"G__");
});
var gensym__4683 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4682.call(this);
case  1 :
return gensym__4683.call(this,prefix_string);
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
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4685 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__4685.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4686 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4686.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4686.state,this__4686.f);
}
return cljs.core.deref.call(null,this__4686.state);
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
delay.cljs$lang$applyTo = (function (arglist__4687){
var body = cljs.core.seq( arglist__4687 );;
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
var map__4688__4689 = options;
var map__4688__4690 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4688__4689))?cljs.core.apply.call(null,cljs.core.hash_map,map__4688__4689):map__4688__4689);
var keywordize_keys__4691 = cljs.core.get.call(null,map__4688__4690,"﷐'keywordize-keys");
var keyfn__4692 = (cljs.core.truth_(keywordize_keys__4691)?cljs.core.keyword:cljs.core.str);
var f__4698 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__418__auto____4697 = (function iter__4693(s__4694){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4694__4695 = s__4694;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4694__4695)))
{var k__4696 = cljs.core.first.call(null,s__4694__4695);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4692.call(null,k__4696),thisfn.call(null,(x[k__4696]))]),iter__4693.call(null,cljs.core.rest.call(null,s__4694__4695)));
} else
{return null;
}
break;
}
})));
});

return iter__418__auto____4697.call(null,cljs.core.js_keys.call(null,x));
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

return f__4698.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4699){
var x = cljs.core.first(arglist__4699);
var options = cljs.core.rest(arglist__4699);
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
var mem__4700 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4704__delegate = function (args){
var temp__3695__auto____4701 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4700),args);

if(cljs.core.truth_(temp__3695__auto____4701))
{var v__4702 = temp__3695__auto____4701;

return v__4702;
} else
{var ret__4703 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4700,cljs.core.assoc,args,ret__4703);
return ret__4703;
}
};
var G__4704 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4704__delegate.call(this, args);
};
G__4704.cljs$lang$maxFixedArity = 0;
G__4704.cljs$lang$applyTo = (function (arglist__4705){
var args = cljs.core.seq( arglist__4705 );;
return G__4704__delegate.call(this, args);
});
return G__4704;
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
var trampoline__4707 = (function (f){
while(true){
var ret__4706 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4706)))
{{
var G__4710 = ret__4706;
f = G__4710;
continue;
}
} else
{return ret__4706;
}
break;
}
});
var trampoline__4708 = (function() { 
var G__4711__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4711 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4711__delegate.call(this, f, args);
};
G__4711.cljs$lang$maxFixedArity = 1;
G__4711.cljs$lang$applyTo = (function (arglist__4712){
var f = cljs.core.first(arglist__4712);
var args = cljs.core.rest(arglist__4712);
return G__4711__delegate.call(this, f, args);
});
return G__4711;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4707.call(this,f);
default:
return trampoline__4708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4708.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4713 = (function (){
return rand.call(null,1);
});
var rand__4714 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4713.call(this);
case  1 :
return rand__4714.call(this,n);
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
var k__4716 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4716,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4716,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4725 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4726 = (function (h,child,parent){
var or__3548__auto____4717 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4717))
{return or__3548__auto____4717;
} else
{var or__3548__auto____4718 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4718))
{return or__3548__auto____4718;
} else
{var and__3546__auto____4719 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4719))
{var and__3546__auto____4720 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4720))
{var and__3546__auto____4721 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4721))
{var ret__4722 = true;
var i__4723 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4724 = cljs.core.not.call(null,ret__4722);

if(cljs.core.truth_(or__3548__auto____4724))
{return or__3548__auto____4724;
} else
{return cljs.core._EQ_.call(null,i__4723,cljs.core.count.call(null,parent));
}
})()))
{return ret__4722;
} else
{{
var G__4728 = isa_QMARK_.call(null,h,child.call(null,i__4723),parent.call(null,i__4723));
var G__4729 = (i__4723 + 1);
ret__4722 = G__4728;
i__4723 = G__4729;
continue;
}
}
break;
}
} else
{return and__3546__auto____4721;
}
} else
{return and__3546__auto____4720;
}
} else
{return and__3546__auto____4719;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4725.call(this,h,child);
case  3 :
return isa_QMARK___4726.call(this,h,child,parent);
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
var parents__4730 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4731 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4730.call(this,h);
case  2 :
return parents__4731.call(this,h,tag);
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
var ancestors__4733 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4734 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4733.call(this,h);
case  2 :
return ancestors__4734.call(this,h,tag);
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
var descendants__4736 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4737 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4736.call(this,h);
case  2 :
return descendants__4737.call(this,h,tag);
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
var derive__4747 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4748 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3369))))));
}
var tp__4742 = "﷐'parents".call(null,h);
var td__4743 = "﷐'descendants".call(null,h);
var ta__4744 = "﷐'ancestors".call(null,h);
var tf__4745 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4746 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4742.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4744.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4744.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4742,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4745.call(null,"﷐'ancestors".call(null,h),tag,td__4743,parent,ta__4744),"﷐'descendants":tf__4745.call(null,"﷐'descendants".call(null,h),parent,ta__4744,tag,td__4743)});
})());

if(cljs.core.truth_(or__3548__auto____4746))
{return or__3548__auto____4746;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4747.call(this,h,tag);
case  3 :
return derive__4748.call(this,h,tag,parent);
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
var underive__4754 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4755 = (function (h,tag,parent){
var parentMap__4750 = "﷐'parents".call(null,h);
var childsParents__4751 = (cljs.core.truth_(parentMap__4750.call(null,tag))?cljs.core.disj.call(null,parentMap__4750.call(null,tag),parent):cljs.core.set([]));
var newParents__4752 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4751))?cljs.core.assoc.call(null,parentMap__4750,tag,childsParents__4751):cljs.core.dissoc.call(null,parentMap__4750,tag));
var deriv_seq__4753 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4739_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4739_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4739_SHARP_),cljs.core.second.call(null,p1__4739_SHARP_)));
}),cljs.core.seq.call(null,newParents__4752)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4750.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4740_SHARP_,p2__4741_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4740_SHARP_,p2__4741_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4753));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4754.call(this,h,tag);
case  3 :
return underive__4755.call(this,h,tag,parent);
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
var xprefs__4757 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4759 = (cljs.core.truth_((function (){var and__3546__auto____4758 = xprefs__4757;

if(cljs.core.truth_(and__3546__auto____4758))
{return xprefs__4757.call(null,y);
} else
{return and__3546__auto____4758;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4759))
{return or__3548__auto____4759;
} else
{var or__3548__auto____4761 = (function (){var ps__4760 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4760) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4760),prefer_table)))
{} else
{}
{
var G__4764 = cljs.core.rest.call(null,ps__4760);
ps__4760 = G__4764;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4761))
{return or__3548__auto____4761;
} else
{var or__3548__auto____4763 = (function (){var ps__4762 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4762) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4762),y,prefer_table)))
{} else
{}
{
var G__4765 = cljs.core.rest.call(null,ps__4762);
ps__4762 = G__4765;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4763))
{return or__3548__auto____4763;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4766 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4766))
{return or__3548__auto____4766;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4775 = cljs.core.reduce.call(null,(function (be,p__4767){
var vec__4768__4769 = p__4767;
var k__4770 = cljs.core.nth.call(null,vec__4768__4769,0,null);
var ___4771 = cljs.core.nth.call(null,vec__4768__4769,1,null);
var e__4772 = vec__4768__4769;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4770)))
{var be2__4774 = (cljs.core.truth_((function (){var or__3548__auto____4773 = (be === null);

if(cljs.core.truth_(or__3548__auto____4773))
{return or__3548__auto____4773;
} else
{return cljs.core.dominates.call(null,k__4770,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4772:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4774),k__4770,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4770," and ",cljs.core.first.call(null,be2__4774),", and neither is preferred")));
}
return be2__4774;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4775))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4775));
return cljs.core.second.call(null,best_entry__4775);
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
if(cljs.core.truth_((function (){var and__3546__auto____4776 = mf;

if(cljs.core.truth_(and__3546__auto____4776))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4776;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4777 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4777))
{return or__3548__auto____4777;
} else
{var or__3548__auto____4778 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4778))
{return or__3548__auto____4778;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4779 = mf;

if(cljs.core.truth_(and__3546__auto____4779))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4779;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4780 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4780))
{return or__3548__auto____4780;
} else
{var or__3548__auto____4781 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4781))
{return or__3548__auto____4781;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4782 = mf;

if(cljs.core.truth_(and__3546__auto____4782))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4782;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4783 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4783))
{return or__3548__auto____4783;
} else
{var or__3548__auto____4784 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4784))
{return or__3548__auto____4784;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4785 = mf;

if(cljs.core.truth_(and__3546__auto____4785))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4785;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4786 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4786))
{return or__3548__auto____4786;
} else
{var or__3548__auto____4787 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4787))
{return or__3548__auto____4787;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4788 = mf;

if(cljs.core.truth_(and__3546__auto____4788))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4788;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4789 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4789))
{return or__3548__auto____4789;
} else
{var or__3548__auto____4790 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4790))
{return or__3548__auto____4790;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4791 = mf;

if(cljs.core.truth_(and__3546__auto____4791))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4791;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4792 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4792))
{return or__3548__auto____4792;
} else
{var or__3548__auto____4793 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4793))
{return or__3548__auto____4793;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4794 = mf;

if(cljs.core.truth_(and__3546__auto____4794))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4794;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4795 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4795))
{return or__3548__auto____4795;
} else
{var or__3548__auto____4796 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4796))
{return or__3548__auto____4796;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4797 = mf;

if(cljs.core.truth_(and__3546__auto____4797))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4797;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4798 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4798))
{return or__3548__auto____4798;
} else
{var or__3548__auto____4799 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4799))
{return or__3548__auto____4799;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4800 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4801 = cljs.core._get_method.call(null,mf,dispatch_val__4800);

if(cljs.core.truth_(target_fn__4801))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4800)));
}
return cljs.core.apply.call(null,target_fn__4801,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__269__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4802 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4803 = this;
cljs.core.swap_BANG_.call(null,this__4803.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4803.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4803.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4803.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4804 = this;
cljs.core.swap_BANG_.call(null,this__4804.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4804.method_cache,this__4804.method_table,this__4804.cached_hierarchy,this__4804.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4805 = this;
cljs.core.swap_BANG_.call(null,this__4805.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4805.method_cache,this__4805.method_table,this__4805.cached_hierarchy,this__4805.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4806 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4806.cached_hierarchy),cljs.core.deref.call(null,this__4806.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4806.method_cache,this__4806.method_table,this__4806.cached_hierarchy,this__4806.hierarchy);
}
var temp__3695__auto____4807 = cljs.core.deref.call(null,this__4806.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4807))
{var target_fn__4808 = temp__3695__auto____4807;

return target_fn__4808;
} else
{var temp__3695__auto____4809 = cljs.core.find_and_cache_best_method.call(null,this__4806.name,dispatch_val,this__4806.hierarchy,this__4806.method_table,this__4806.prefer_table,this__4806.method_cache,this__4806.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4809))
{var target_fn__4810 = temp__3695__auto____4809;

return target_fn__4810;
} else
{return cljs.core.deref.call(null,this__4806.method_table).call(null,this__4806.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4811 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4811.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4811.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4811.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4811.method_cache,this__4811.method_table,this__4811.cached_hierarchy,this__4811.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4812 = this;
return cljs.core.deref.call(null,this__4812.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4813 = this;
return cljs.core.deref.call(null,this__4813.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4814 = this;
return cljs.core.do_dispatch.call(null,mf,this__4814.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4815__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4815 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4815__delegate.call(this, _, args);
};
G__4815.cljs$lang$maxFixedArity = 1;
G__4815.cljs$lang$applyTo = (function (arglist__4816){
var _ = cljs.core.first(arglist__4816);
var args = cljs.core.rest(arglist__4816);
return G__4815__delegate.call(this, _, args);
});
return G__4815;
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

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["green-card~project"],{"11e9":function(t,e,n){var a=n("52a7"),r=n("4630"),c=n("6821"),s=n("6a99"),i=n("69a8"),o=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=c(t),e=s(e,!0),o)try{return u(t,e)}catch(n){}if(i(t,e))return r(!a.f.call(t,e),t[e])}},1486:function(t,e,n){},"2a9e":function(t,e,n){"use strict";var a=n("df48"),r=n.n(a);r.a},"2da2":function(t,e,n){"use strict";var a=n("4125"),r=n.n(a);r.a},4125:function(t,e,n){},"45af":function(t,e,n){},"5dbc":function(t,e,n){var a=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var c,s=e.constructor;return s!==n&&"function"==typeof s&&(c=s.prototype)!==n.prototype&&a(c)&&r&&r(t,c),t}},"77b6":function(t,e,n){"use strict";var a=n("1486"),r=n.n(a);r.a},"8b97":function(t,e,n){var a=n("d3f4"),r=n("cb7c"),c=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:c}},9093:function(t,e,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"9a07":function(t,e,n){"use strict";var a=n("9fb9"),r=n.n(a);r.a},"9ab9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"obtain"},[n("Title",{attrs:{name:t.titleName}}),n("ul",t._l(t.obtain,function(e,a,r){return n("li",{key:r},[t._v("\n\t\t\t"+t._s(a)+"\n\t\t\t"),t._l(e,function(e,a){return n("i",{key:a,domProps:{innerHTML:t._s(e)}})})],2)}),0)],1)},r=[],c=n("eb09"),s={props:{obtain:Object,titleName:String},components:{Title:c["a"]}},i=s,o=(n("77b6"),n("2877")),u=Object(o["a"])(i,a,r,!1,null,"335eda26",null);e["a"]=u.exports},"9fb9":function(t,e,n){},aa77:function(t,e,n){var a=n("5ca1"),r=n("be13"),c=n("79e5"),s=n("fdef"),i="["+s+"]",o="​",u=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),l=function(t,e,n){var r={},i=c(function(){return!!s[t]()||o[t]()!=o}),u=r[t]=i?e(p):s[t];n&&(r[n]=u),a(a.P+a.F*i,"String",r)},p=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},b21a:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"c",function(){return c});var a=function(){var t=document.getElementsByTagName("body")[0].clientWidth;return t>767?"web":"wap"},r=function(t){for(var e=document.getElementsByClassName("animation-show"),n=0;n<e.length;n++)t+window.innerHeight>=e[n].offsetTop+120?e[n].classList.add("show"):e[n].classList.remove("show")},c=function(){window.addEventListener("scroll",function(){var t=document.documentElement.scrollTop||document.body.scrollTop;r(t)})}},c5f6:function(t,e,n){"use strict";var a=n("7726"),r=n("69a8"),c=n("2d95"),s=n("5dbc"),i=n("6a99"),o=n("79e5"),u=n("9093").f,f=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,d="Number",m=a[d],h=m,_=m.prototype,v=c(n("2aeb")(_))==d,b="trim"in String.prototype,g=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():p(e,3);var n,a,r,c=e.charCodeAt(0);if(43===c||45===c){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var s,o=e.slice(2),u=0,f=o.length;u<f;u++)if(s=o.charCodeAt(u),s<48||s>r)return NaN;return parseInt(o,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?o(function(){_.valueOf.call(n)}):c(n)!=d)?s(new h(g(e)),n,m):g(e)};for(var y,w=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)r(h,y=w[E])&&!r(m,y)&&l(m,y,f(h,y));m.prototype=_,_.constructor=m,n("2aba")(a,d,m)}},ca37:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"width"},[n("swiper",{attrs:{options:t.swiperOption}},t._l(t.bannerImgList,function(t,e){return n("swiper-slide",{key:e},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.img}})])])}),1)],1)])},r=[],c=(n("c5f6"),{props:{bannerImgList:Array,autoplay:Number},data:function(){return{swiperOption:{autoplay:this.autoplay||4e3,loop:!0,effect:"fade"}}},mounted:function(){}}),s=c,i=(n("f09d"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"72ae98ba",null);e["a"]=o.exports},df48:function(t,e,n){},e8b6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pc-max-width"},[a("div",{staticClass:"contact"},[t._m(0),a("a",{on:{click:t.changeContact}},[t._v("点击客服了解更多详情")])]),t.contactStatus?a("div",{staticClass:"about-contact"},[a("div",{staticClass:"content"},[a("span",{staticClass:"close"},[a("img",{attrs:{src:n("d991")},on:{click:t.changeContact}})]),a("h3",[t._v("请留下您的联系方式")]),t._m(1),a("ul",[t._m(2),t._m(3),a("li",[a("img",{attrs:{src:n("7eeb")}}),a("i",[a("em",[t.WeChatAll.indexOf(1)<0?a("img",{attrs:{src:n("227f")},on:{click:function(e){return t.showWeChat(1)}}}):a("img",{attrs:{src:n("0634")}}),t._v("扫一扫添加微信\n            ")]),a("em",[t.WeChatAll.indexOf(2)<0?a("img",{attrs:{src:n("feb7")},on:{click:function(e){return t.showWeChat(2)}}}):a("img",{attrs:{src:n("e9e6")}}),t._v("扫一扫关注公众号\n            ")])])])]),a("InputBox",{on:{success:t.success}})],1)]):t._e(),t.messageType?a("MessagePopup",{attrs:{status:t.messageType},on:{messageType:function(e){t.messageType=!1}}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("新加坡侨水资本： "),n("br"),t._v("直营新加坡移民/银行开户/新加坡留学，家族办公室，欧盟&英联邦快速护照，十年经验团队免费为您评估。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("也可以拨打"),n("a",{attrs:{href:"tel:6588665586"}},[t._v("（+65）8866 5586")]),n("br"),t._v(" 直接与我们取得联系")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("img",{attrs:{src:n("64da")}}),a("i",[a("a",{attrs:{href:"tel:6588665586"}},[t._v(" +65 8866 5586")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("img",{attrs:{src:n("b7a4")}}),a("i",[t._v("+65 8866 5586\n            "),a("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send/?phone=6588665586&text&app_absent=0"}},[t._v("点我，WhatsApp及时对话")])])])}],c=n("a85b"),s=n("65c6"),i={components:{InputBox:c["a"],MessagePopup:s["a"]},data:function(){return{contactStatus:!1,messageType:!1,WeChatAll:[]}},methods:{changeContact:function(){this.contactStatus=!this.contactStatus},success:function(){this.contactStatus=!1,this.messageType=!0},showWeChat:function(t){this.WeChatAll.push(t)}}},o=i,u=(n("2da2"),n("2a9e"),n("2877")),f=Object(u["a"])(o,a,r,!1,null,"6ba6a129",null);e["a"]=f.exports},eb09:function(t,e,n){"use strict";n("7f7f");var a,r,c={props:{name:String},render:function(t){return t("h3",this.name)}},s=c,i=(n("9a07"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"99b6c326",null);e["a"]=o.exports},f09d:function(t,e,n){"use strict";var a=n("45af"),r=n.n(a);r.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=green-card~project.d0e46726.js.map
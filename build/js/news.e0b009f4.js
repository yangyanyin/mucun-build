(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"0034":function(t,e,n){},"02f4":function(t,e,n){var s=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var i,r,o=String(a(e)),c=s(n),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(r=o.charCodeAt(c+1))<56320||r>57343?t?o.charAt(c):i:t?o.slice(c,c+2):r-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var s=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},"04ca":function(t,e,n){t.exports=n.p+"img/news-expert.4b1331e8.jpg"},"074d":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-news"},[n("div",{staticClass:"recommend animation-show"},[n("h3",[t._v("为你推荐")]),n("div",{staticClass:"list"},t._l(t.newsList,function(e,s){return n("router-link",{key:s,attrs:{to:"/news-details/"+e.id}},[t._v(t._s(e.title))])}),1)]),n("div",{staticClass:"contact animation-show"},[n("InputBox")],1)])},a=[],i=n("a85b"),r={components:{InputBox:i["a"]},data:function(){return{newsList:""}},mounted:function(){var t=this;this.$http({method:"get",url:"https://cms.aicassets.com/v1/recommend_news_list"}).then(function(e){200===e.data.code&&(t.newsList=e.data.data.recommend_news_list)})}},o=r,c=(n("6771"),n("bcfb"),n("2877")),l=Object(c["a"])(o,s,a,!1,null,"5fef8664",null);e["a"]=l.exports},"093c":function(t,e,n){t.exports=n.p+"img/news-case.0f62387c.jpg"},"0bfb":function(t,e,n){"use strict";var s=n("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0c92":function(t,e,n){},"12ae":function(t,e,n){t.exports=n.p+"img/loading.e0ada987.gif"},"185b":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"},[s("img",{attrs:{src:n("12ae")}}),s("p",[t._v("正在加载中，请稍候...")])])}],i=(n("7ccc"),n("2877")),r={},o=Object(i["a"])(r,s,a,!1,null,"b606b668",null);e["a"]=o.exports},"1af6":function(t,e,n){var s=n("63b6");s(s.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var s=n("d9f6"),a=n("aebd");t.exports=function(t,e,n){e in t?s.f(t,e,a(0,n)):t[e]=n}},"214f":function(t,e,n){"use strict";n("b0c5");var s=n("2aba"),a=n("32e9"),i=n("79e5"),r=n("be13"),o=n("2b4c"),c=n("520a"),l=o("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),p=!i(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),v=p?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!p||!v||"replace"===t&&!u||"split"===t&&!d){var m=/./[f],g=n(r,f,""[t],function(t,e,n,s,a){return e.exec===c?p&&!a?{done:!0,value:m.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}}),h=g[0],A=g[1];s(String.prototype,t,h),a(RegExp.prototype,f,2==e?function(t,e){return A.call(t,this,e)}:function(t){return A.call(t,this)})}}},2379:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loadingStatus?n("div",{staticClass:"news"},[n("div",{staticClass:"content pc-max-width clearfix"},[n("div",{staticClass:"crumbs"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" > "),n("router-link",{attrs:{to:t.navCrumbs[t.newsDetails.news.category_id-1].url}},[t._v(t._s(t.navCrumbs[t.newsDetails.news.category_id-1].title))]),t._v(" > "+t._s(t.newsDetails.news.title)+"\n    ")],1),n("div",{staticClass:"left news-details"},[n("div",{staticClass:"title clearfix"},[n("h3",[t._v(t._s(t.newsDetails.news.title))]),n("span",{staticClass:"label left"},[t._v("标签: "+t._s(t.newsDetails.news.tag))]),n("span",{staticClass:"look right"},[t._v(t._s(t.newsDetails.news.read_count))]),n("span",{staticClass:"time right"},[t._v(t._s(t.newsDetails.news.created_at.split(" ")[0]))])]),n("div",{staticClass:"details",domProps:{innerHTML:t._s(t.newsDetailsContent)}}),n("div",{staticClass:"share"},[n("strong",[t._v("分享：")]),n("div",{staticClass:"btn fb-share-button",attrs:{"data-href":"https://sgpec."+t.host+"/news-details/"+t.newId}}),n("a",{staticClass:"btn wb-share-button",attrs:{href:"http://service.weibo.com/share/share.php?appkey=&title="+t.newsDetails.news.title+"&url=https://sgpec."+t.host+"/news-details/"+t.newId+"&pic="+t.shareImg+"&style=simple",target:"_blank"}}),n("a",{staticClass:"btn whats-share-button",attrs:{href:"whatsapp://send?text="+t.newsDetails.news.title+" message: https://sgpec."+t.host+"/news-details/"+t.newId}}),n("a",{staticClass:"btn wx-share-button"},[n("div",{staticClass:"qrCodeDiv"})]),n("a",{staticClass:"btn wx-share-button pyq"},[n("div",{staticClass:"qrCodeDiv"})])]),t.newsDetails.prev_news||t.newsDetails.next_news?n("div",{staticClass:"other"},[t.newsDetails.prev_news?n("p",[t._v("上一篇："),n("router-link",{attrs:{to:"/news-details/"+t.newsDetails.prev_news.id}},[t._v(t._s(t.newsDetails.prev_news.title))])],1):t._e(),t.newsDetails.next_news?n("p",[t._v("下一篇："),n("router-link",{attrs:{to:"/news-details/"+t.newsDetails.next_news.id}},[t._v(t._s(t.newsDetails.next_news.title))])],1):t._e()]):t._e()]),n("div",{staticClass:"right rec"},[n("Side")],1)]),n("div",{staticClass:"pc-max-width"},[n("Flag")],1)]):n("loadingPage")},a=[],i=(n("a481"),n("28a5"),n("6ac7")),r=n("074d"),o=n("185b"),c=n("b21a"),l=n("d044"),u=n.n(l),d={components:{Side:r["a"],Flag:i["a"],loadingPage:o["a"]},data:function(){return{newsDetails:"",newsDetailsContent:"",loadingStatus:!1,navCrumbs:[{title:"护照专题",url:"/news-thematic"},{title:"新加坡移民专家",url:"/news-expert"},{title:"成功案例",url:"/news-case"}],host:window.location.host.split(".").pop(),newId:"",shareImg:""}},created:function(){(function(t,e,n){var s,a=t.getElementsByTagName(e)[0];t.getElementById(n)||(s=t.createElement(e),s.id=n,s.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",a.parentNode.insertBefore(s,a))})(document,"script","facebook-jssdk")},methods:{bindQRCode:function(){for(var t=document.getElementsByClassName("qrCodeDiv"),e=0;e<t.length;e++)new u.a(t[e],{text:window.location.href+this.$route.path,width:100,height:100,colorDark:"#333333",colorLight:"#ffffff",correctLevel:u.a.CorrectLevel.L})}},mounted:function(){var t=this;this.newId=this.$route.params.id,this.$http({method:"get",url:"https://cms.aicassets.com/v1/news",params:{id:this.$route.params.id}}).then(function(e){200===e.data.code&&(t.loadingStatus=!0,t.newsDetails=e.data.data,t.shareImg=e.data.data.news.img,t.newsDetailsContent=e.data.data.news.content.replace(/\/images\/default/g,"https://cms.aicassets.com/images/default/"),t.$nextTick(function(){this.bindQRCode()}),setTimeout(function(){var t=document.documentElement.scrollTop||document.body.scrollTop;Object(c["a"])(t),Object(c["c"])()},100))})}},f=d,p=(n("aa1d"),n("9c4b"),n("2877")),v=Object(p["a"])(f,s,a,!1,null,"daeeec7a",null);e["default"]=v.exports},"24d5":function(t,e,n){t.exports=n.p+"img/message-img.c58a44d3.jpg"},"28a5":function(t,e,n){"use strict";var s=n("aae3"),a=n("cb7c"),i=n("ebd6"),r=n("0390"),o=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,f=[].push,p="split",v="length",m="lastIndex",g=4294967295,h=!u(function(){RegExp(g,"y")});n("214f")("split",2,function(t,e,n,u){var A;return A="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[v]||2!="ab"[p](/(?:ab)*/)[v]||4!="."[p](/(.?)(.?)/)[v]||"."[p](/()()/)[v]>1||""[p](/.?/)[v]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!s(t))return n.call(a,t,e);var i,r,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?g:e>>>0,h=new RegExp(t.source,u+"g");while(i=l.call(h,a)){if(r=h[m],r>d&&(c.push(a.slice(d,i.index)),i[v]>1&&i.index<a[v]&&f.apply(c,i.slice(1)),o=i[0][v],d=r,c[v]>=p))break;h[m]===i.index&&h[m]++}return d===a[v]?!o&&h.test("")||c.push(""):c.push(a.slice(d)),c[v]>p?c.slice(0,p):c}:"0"[p](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,s){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,s):A.call(String(a),n,s)},function(t,e){var s=u(A,t,this,e,A!==n);if(s.done)return s.value;var l=a(t),f=String(this),p=i(l,RegExp),v=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),w=new p(h?l:"^(?:"+l.source+")",m),b=void 0===e?g:e>>>0;if(0===b)return[];if(0===f.length)return null===c(w,f)?[f]:[];var x=0,C=0,_=[];while(C<f.length){w.lastIndex=h?C:0;var y,E=c(w,h?f:f.slice(C));if(null===E||(y=d(o(w.lastIndex+(h?0:C)),f.length))===x)C=r(f,C,v);else{if(_.push(f.slice(x,C)),_.length===b)return _;for(var T=1;T<=E.length-1;T++)if(_.push(E[T]),_.length===b)return _;C=x=y}}return _.push(f.slice(x)),_}]})},3702:function(t,e,n){var s=n("481b"),a=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(s.Array===t||i[a]===t)}},"40c3":function(t,e,n){var s=n("6b4c"),a=n("5168")("toStringTag"),i="Arguments"==s(function(){return arguments}()),r=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=r(e=Object(t),a))?n:i?s(e):"Object"==(o=s(e))&&"function"==typeof e.callee?"Arguments":o}},"45a1":function(t,e,n){},"4ee1":function(t,e,n){var s=n("5168")("iterator"),a=!1;try{var i=[7][s]();i["return"]=function(){a=!0},Array.from(i,function(){throw 2})}catch(r){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var i=[7],o=i[s]();o.next=function(){return{done:n=!0}},i[s]=function(){return o},t(i)}catch(r){}return n}},"520a":function(t,e,n){"use strict";var s=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,r=a,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(r=function(t){var e,n,r,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",s.call(d))),c&&(e=d[o]),r=a.call(d,t),c&&r&&(d[o]=d.global?r.index+r[0].length:e),l&&r&&r.length>1&&i.call(r[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},"549b":function(t,e,n){"use strict";var s=n("d864"),a=n("63b6"),i=n("241e"),r=n("b0dc"),o=n("3702"),c=n("b447"),l=n("20fd"),u=n("7cd6");a(a.S+a.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,d,f=i(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,h=0,A=u(f);if(g&&(m=s(m,v>2?arguments[2]:void 0,2)),void 0==A||p==Array&&o(A))for(e=c(f.length),n=new p(e);e>h;h++)l(n,h,g?m(f[h],h):f[h]);else for(d=A.call(f),n=new p;!(a=d.next()).done;h++)l(n,h,g?r(d,m,[a.value,h],!0):a.value);return n.length=h,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5815:function(t,e,n){},5956:function(t,e,n){},"5f1b":function(t,e,n){"use strict";var s=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"65c6":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-success",class:{on:t.status}},[s("div",{staticClass:"content"},[s("span",{staticClass:"close"},[s("img",{attrs:{src:n("d991")},on:{click:t.closeMessage}})]),s("img",{attrs:{src:n("24d5")}}),s("p",{staticClass:"p1"},[t._v("感谢您使用我们的免费咨询服务")]),s("p",{staticClass:"p1"},[t._v("我们稍后会联系您")]),s("p",{staticClass:"p1"},[t._v("您也可以拨打")]),s("p",{staticClass:"tel"},[t._v("(+65) 8866 5586")]),s("p",{staticClass:"p2"},[t._v("进行直接咨询")]),s("router-link",{attrs:{to:"/passport"}},[t._v("了解更多")])],1)])},a=[],i={props:{status:Boolean},methods:{closeMessage:function(){this.$emit("messageType")}}},r=i,o=(n("f536"),n("2877")),c=Object(o["a"])(r,s,a,!1,null,"5d3fadaf",null);e["a"]=c.exports},6771:function(t,e,n){"use strict";var s=n("5815"),a=n.n(s);a.a},"774e":function(t,e,n){t.exports=n("d2d5")},"7c23":function(t,e,n){},"7ccc":function(t,e,n){"use strict";var s=n("0034"),a=n.n(s);a.a},"7cd6":function(t,e,n){var s=n("40c3"),a=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||i[s(t)]}},"95d5":function(t,e,n){var s=n("40c3"),a=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(s(e))}},"971d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACLklEQVRYR+VX21ECQRDsjkCNQMhAIxAy0AjECNQINAMlAjUCMQIxAg3BEDSCsZraocZj9+44DvxwqiioYnenp3cevURHM7MRAPPtJN+6HMW2m8zsFMAJAH0PCvs+AcwBzEi+tDm7EUCK9KHGacmPwFyQFKCiFQGY2T6AZwCiOmdVysVOzgTgjORX7s8sADM7Ss4j1d8AHhO92ajSvgkAffaCQ7EhEB9VECsA0iGvAMSA2xTAbSmK6qGJvVsAl+E/MTCugvgFIG18D/etqCckZ20SKgNE16e9zoaYOI6BVAGIWr9LOR/laFsHTGJU5zqIOcnxsnz9R8p2Ue+mO+sUeYGJ7NlLBsxM9BymzVOSV+tE2rTWzJQTN2ndJ8mhfi8ApCajkpOJ+kHbhGtyHBhWUitIv4oFww7gPmRs79EHENHPE8mJA4j0K0tX6rVtpHXrUkKqymSLa3AAcag0tudNwJiZ+oFfwwEr2f9GstR6N/G73GtmsdTH/xKAyvsuUXL8FwyoHDWslITLMtxZElYTaadlmMtiB6A5f76tNlxXPrlWrDod9t2KSyB2NozaAJDa9YGk9VIvtYKyj85UJ0iyEqoPp/GMnCTTIHJdIBAam1tjoiRKo4QSYIkJjemstN6ElTpZLjnmTMiHnKtcNcd7G9dNDxOByD04BMZBaI1AdWKncfYnuSYlE9mosn5NUmvWtkYAQU6pTP0TXz1a0llBtwYQQ0sPGD3fFrmxSU78ALdg99UDJ3HKAAAAAElFTkSuQmCC"},"9c4b":function(t,e,n){"use strict";var s=n("5956"),a=n.n(s);a.a},a481:function(t,e,n){"use strict";var s=n("cb7c"),a=n("4bf8"),i=n("9def"),r=n("4588"),o=n("0390"),c=n("5f1b"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,m){return[function(s,a){var i=t(this),r=void 0==s?void 0:s[e];return void 0!==r?r.call(s,i,a):n.call(String(i),s,a)},function(t,e){var a=m(n,t,this,e);if(a.done)return a.value;var d=s(t),f=String(this),p="function"===typeof e;p||(e=String(e));var h=d.global;if(h){var A=d.unicode;d.lastIndex=0}var w=[];while(1){var b=c(d,f);if(null===b)break;if(w.push(b),!h)break;var x=String(b[0]);""===x&&(d.lastIndex=o(f,i(d.lastIndex),A))}for(var C="",_=0,y=0;y<w.length;y++){b=w[y];for(var E=String(b[0]),T=l(u(r(b.index),f.length),0),I=[],D=1;D<b.length;D++)I.push(v(b[D]));var S=b.groups;if(p){var k=[E].concat(I,T,f);void 0!==S&&k.push(S);var B=String(e.apply(void 0,k))}else B=g(E,f,T,I,S,e);T>=_&&(C+=f.slice(_,T)+B,_=T+E.length)}return C+f.slice(_)}];function g(t,e,s,i,r,o){var c=s+t.length,l=i.length,u=p;return void 0!==r&&(r=a(r),u=f),n.call(o,u,function(n,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(c);case"<":o=r[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>l){var f=d(u/10);return 0===f?n:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):n}o=i[u-1]}return void 0===o?"":o})}})},a745:function(t,e,n){t.exports=n("f410")},a85b:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-box"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"name",class:{on:"name"===t.inputType}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"name",attrs:{type:"text",placeholder:"您的称呼"},domProps:{value:t.userName},on:{focus:function(e){return t.inputFocus("name")},blur:t.inputBlur,input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t.nameError?s("span",[t._v("请输入称呼！")]):t._e()]),s("li",{staticClass:"tel",class:{on:"tel"===t.inputType}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userTel,expression:"userTel"}],staticClass:"tel",attrs:{type:"tel",placeholder:"您的电话"},domProps:{value:t.userTel},on:{focus:function(e){return t.inputFocus("tel")},blur:t.inputBlur,input:function(e){e.target.composing||(t.userTel=e.target.value)}}}),t.telError?s("span",[t._v("请输入电话！")]):t._e()]),s("li",{staticClass:"email",class:{on:"email"===t.inputType}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"email",attrs:{type:"email",placeholder:"您的电邮"},domProps:{value:t.userEmail},on:{focus:function(e){return t.inputFocus("email")},blur:t.inputBlur,input:function(e){e.target.composing||(t.userEmail=e.target.value)}}}),t.emailErroe?s("span",[t._v("请输入正确的邮箱！")]):t._e()])]),s("a",{staticClass:"submit",on:{click:t.submitUserInfo}},[t.messageLoading?s("img",{attrs:{src:n("971d")}}):[t._v("立即咨询")]],2),t.messageType?s("MessagePopup",{attrs:{status:t.messageType},on:{messageType:function(e){t.messageType=!1}}}):t._e()],1)},a=[],i=n("65c6"),r={components:{MessagePopup:i["a"]},data:function(){return{userName:"",userTel:"",userEmail:"",nameError:!1,telError:!1,emailErroe:!1,messageType:!1,messageLoading:!1,inputType:""}},methods:{submitUserInfo:function(){var t=this;if(setTimeout(function(){t.nameError=!1,t.telError=!1,t.emailErroe=!1},2e3),""===this.userName)return this.nameError=!0,!1;if(""===this.userTel)return this.telError=!0,!1;if(""===this.userEmail)return this.emailErroe=!0,!1;if(!this.isEmail(this.userEmail))return this.emailErroe=!0,!1;var e={name:this.userName,phone:this.userTel,email:this.userEmail};t.messageLoading=!0,setTimeout(function(){t.$http({method:"post",url:"https://cms.aicassets.com/v1/contact",params:e}).then(function(e){200===e.data.code&&(t.userName="",t.userTel="",t.userEmail="",t.messageType=!0,t.messageLoading=!1,t.$emit("success"))})},2e3)},isEmail:function(t){var e=/^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return e.test(t)},inputFocus:function(t){this.inputType=t},inputBlur:function(){this.inputType=""}}},o=r,c=(n("d901"),n("2877")),l=Object(c["a"])(o,s,a,!1,null,"5ab7b476",null);e["a"]=l.exports},aa1d:function(t,e,n){"use strict";var s=n("c981"),a=n.n(s);a.a},aae3:function(t,e,n){var s=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,n){"use strict";var s=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},b0dc:function(t,e,n){var s=n("e4ae");t.exports=function(t,e,n,a){try{return a?e(s(n)[0],n[1]):e(n)}catch(r){var i=t["return"];throw void 0!==i&&s(i.call(t)),r}}},b21a:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return a}),n.d(e,"c",function(){return i});var s=function(){var t=document.getElementsByTagName("body")[0].clientWidth;return t>767?"web":"wap"},a=function(t){for(var e=document.getElementsByClassName("animation-show"),n=0;n<e.length;n++)t+window.innerHeight>=e[n].offsetTop+120?e[n].classList.add("show"):e[n].classList.remove("show")},i=function(){window.addEventListener("scroll",function(){var t=document.documentElement.scrollTop||document.body.scrollTop;a(t)})}},b7a7:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.newData?n("div",{staticClass:"news"},[n("div",{staticClass:"content pc-max-width clearfix"},[n("div",{staticClass:"crumbs"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" > "+t._s(t.banner[t.newsType].title)+"\n    ")],1),n("div",{staticClass:"left list-banner"},[n("div",{staticClass:"banner"},[n("img",{attrs:{src:t.banner[t.newsType].img}})]),n("ul",{ref:"news_list",staticClass:"list"},t._l(t.newData,function(e,s){return n("li",{key:s,staticClass:"clearfix animation-show"},[n("router-link",{staticClass:"img",attrs:{to:"/news-details/"+e.id}},[n("img",{attrs:{src:e.img}})]),n("div",{staticClass:"des"},[n("router-link",{staticClass:"t",attrs:{to:"/news-details/"+e.id}},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.description))]),n("div",{staticClass:"left clearfix"},[n("span",[t._v(t._s(e.created_at.split(" ")[0]))]),n("span",[t._v(t._s(e.read_count))])]),n("router-link",{staticClass:"more right",attrs:{to:"/news-details/"+e.id}},[t._v("了解详情")])],1)],1)}),0)]),n("div",{staticClass:"right rec"},[n("Side")],1)]),n("div",{staticClass:"pc-max-width"},[n("Flag")],1)]):n("Loading")},a=[],i=n("a745"),r=n.n(i);function o(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c=n("774e"),l=n.n(c),u=n("c8bb"),d=n.n(u);function f(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return o(t)||f(t)||p()}n("7f7f");var m=n("6ac7"),g=n("074d"),h=n("185b"),A=n("b21a"),w={components:{Side:g["a"],Flag:m["a"],Loading:h["a"]},data:function(){return{banner:{case:{img:n("093c"),title:"成功案例",id:3},thematic:{img:n("e925"),title:"护照专题",id:1},expert:{img:n("04ca"),title:"新加坡移民专家",id:2}},newsType:this.$route.name,newData:"",page:1,isLoading:!1}},methods:{newsList:function(){var t=this;this.$http({method:"get",url:"https://cms.aicassets.com/v1/newsList",params:{category_id:this.banner[this.newsType].id,page:this.page,size:5}}).then(function(e){200===e.data.code&&(t.newData=[].concat(v(t.newData),v(e.data.data.news_list)),e.data.data.news_list.length>0&&(t.page+=1,t.isLoading=!0),setTimeout(function(){var t=document.documentElement.scrollTop||document.body.scrollTop;Object(A["a"])(t),Object(A["c"])()},100))})}},mounted:function(){this.newsList();var t=this;window.addEventListener("scroll",function(){if(t.$refs.news_list){var e=document.documentElement.scrollTop||document.body.scrollTop;e+window.innerHeight>=t.$refs.news_list.offsetTop+t.$refs.news_list.offsetHeight-220&&t.isLoading&&(t.isLoading=!1,t.newsList())}})}},b=w,x=(n("cfcc"),n("2877")),C=Object(x["a"])(b,s,a,!1,null,"1bdb02a0",null);e["default"]=C.exports},bcfb:function(t,e,n){"use strict";var s=n("0c92"),a=n.n(s);a.a},c8bb:function(t,e,n){t.exports=n("54a1")},c981:function(t,e,n){},cfcc:function(t,e,n){"use strict";var s=n("7c23"),a=n.n(s);a.a},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},d901:function(t,e,n){"use strict";var s=n("f948"),a=n.n(s);a.a},d991:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACXRSTlMAYJ/v4FDwQN/tFa91AAAA60lEQVRIx3XVMQrCQBgF4d+AfUAQcoSUljmAhUdJ51UkCfpua7PLFGFevfttMcXWZXmU7raNNSVjyYbkqCX5lGxOfpVAnIGk1kCcgew1NUKAoy4xYm5XjRjaTQgBIASAEABCAAgBIASAMABCAAgDIASAMABCAAgDIASAMAACQAgAIwCEABACQAgAIQCEABBCASr4gRp4QgEIASAEcKJnnIzoGXtUA3pUBXpUByAEgBAAQgAIASAEgDAAQgAIAyAEgDAAQgAIAyAEgDAAQgAIACOQjFgaIMRWHTCi1gYIsffP3YhvXV/P0t339x/N+EPNWH3gkAAAAABJRU5ErkJggg=="},e925:function(t,e,n){t.exports=n.p+"img/news-thematic.c5e410cd.jpg"},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f536:function(t,e,n){"use strict";var s=n("45a1"),a=n.n(s);a.a},f948:function(t,e,n){}}]);
//# sourceMappingURL=news.e0b009f4.js.map
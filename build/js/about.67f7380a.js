(function(t){function e(e){for(var a,c,s=e[0],o=e[1],l=e[2],A=0,p=[];A<s.length;A++)c=s[A],i[c]&&p.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={about:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="//sgpec.sg/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;r.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("7e66")},"1df9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAACSCAMAAAB2ZwiCAAABDlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPGRkGCgtDcnQnQ0RCcHIcLzBBbnA9aGo2W10qR0keNDVDcnRDcXNCb3FAbW89ZmgWJidEc3VDcnRCb3E0WFpEc3U7ZGY6YmQ4YGE3XV8wUlQuT1AtTE1AbG4/a20/amw1WVskPT46YmQ+aWs8ZWcyVVdEc3X///9kjI1ag4Xs8fFIdnj5+/tqj5H8/f1wlJVRfX92mJrm7O3F1NRWgYOvw8Setrd5m5z09/d/n6BLeHrd5ebV4OHQ3NzJ1tfC0dKKqKnw9PSXsrNeh4jh6OjY4uK6y82nvb7N2tqxxcarwMGNqatOenyQrK2ya5XZAAAAMnRSTlMAAgUIEQwVHRoPFyAqJPdG5jXRpnNLOe/r2cedMP3z3mr6kYyBeV5XU8G5sW1BiKuYZFwFjHEAAAgzSURBVHja7NPbUsIwEIBh8BQlPQGF0jJToFhahIFx3//h7MbVLVXH0CbKBf8V9Oqb3U3v2rULqv9dPc2sai5B1uduvvYProbmthnLLLOaINbcNyPZX7EY9MF5qrqrhx8QRq6GyiYIPYR5wAbvqd9EQ5dlVhOEGrQ8VgkO/6INZcyyo2IRgRRHCCmlO/SL5T7Mw/2y8Idu9UUIBSMWq2yJCKQ87iScbxce1PMW23k4cZWLWBZULMIREUi6ZZak8FNpkpWuJBYOi1UmSSwS0lnuIvitaPfqSMEqQpkdEopwROU4Bb3ScYnDQpWpUTGJRDiiPIZzinMcFqmMoHhtuLVKtJ7Buc3WlQo3yAs0NCS8I+cQQZuig4N3ZWJUTFJrc8MA2haErlpgV9TpkKSfQJcSX56OqiMJh5StoFurDEfVCVXbGw5pBN0b4ahq+2tPwueWe2AiL8cHyKg2JNqbcwRTHR3aH6HakoYjMNdo2EC1IvkBmCzw26FqJFmkYLa0kC1QdN6KtPHAdN5GoejQ9TeHL45JNlD4+nhQ+iRREMk0qhD6KN6cIk1SsFM6USjanv59D8Q0AFsFUzH4vHOdzRHJicFesUMoje3V7nsHNnup3bnuMclnsNsbsXW/kkoURQH8zyMzZrcvsybpg4JCElrb0TKZ24UM81ZaWb3/m8SBYQ7IObOXpPR7gs1e6+yZ09hVikxu5xirdbxDpeeSM9VDrNqhrZRLT08uweolWnpuTTa58yZWr3lu08sXpa5pbQ+LSL/eXrtyn40/hwOAt7emLiov+IJvrvc0Eqc/G/Zg0W8vr7myJnOwC9pTV+ZkQ7B2D0yxKGVNCVjpo3iM6QQTZVH5miJTr4F0+yxe2QScWt1E+aKWtKbhtQR0Jz9dlJvJtmmjxm6pL0HTB3JRG7ZRoZny21SJT8C5e5YSH+CcxJX8RoXXVKk2wBlLmf4NKI1qxS0q1PAjtkxS7i84R+GWFw2/AGckihSUi6LlwYbXm6B0RPMCSrPuWu6Jzn59T8H5J5oZOG37JXbheaLbBGcqmntwNkPhFceJjO5BdCkZXnGivHWKzDbYOuluwdk2kSuU52C2fmGmljub3jr9+YWZGq5QvjpdgpSKrgPSpbdQfJ3Ad/wOixZqvuL2OsUJWNei6oGUxPZCuZK7its67YOViaYL1r4tlCv5XMUbYD2KZgT8pOTFfwpob6L5D1rxv+J5duugvYvmE7R1E5opMldgdcaimd2AdWWi4ExnYE1Fl4F1VjJTG6SBMFKQ2iUzJSBNhNEBKQnMZE/mFkipMCYgbdmjqcy0pOwGy5ipBZYweiC1ljLTdztn15RGDIXhaWfaXgAtgny1UKR00DJSnXeRZYGVT0Eq2lrHav//HynI2ne1xD1LMowXfS65eiY5ZHOSk9MQKJ3DhFMSUiYCpwk2Gk/oCpy6Gk5cCw4hZSBwuoKUQxNrJhyBkwMpX418W9CV7Qv0vy0ViLGHp0/vnlwbgOY3mHsVI9l5H0Rjr8I9nYibJ51uQNbe0zG9M5Li1SEnzr3vijT4C0JwrpcgkC9MhB/nUlyg9LfkP0FEyxNzKUrx4FDM0FIzRAj2507q3DyNENgNM1OHNP92hEFeRAgudM4NSVF5hvHyLsgPEILxsSo7GCMEB3ch/vIfJ0FAyW8SWi6IPJzo9HDVzJcQhgv9mUMpz3Ba/3icHOnlUDzBUDjJtgbmnT7zIkFxZs/J25BTSXkzxcmrgmzCqcqpU94BVRCCuvb3FxVOnfKuLFYEsDmnYmzlXRknjzcuG3BihHNPoIryaAabc/oYZYSrnHj5qu0kv3ql02PWKHn4fmYRMm0jbNEDlRQDVYaIo+uW8tzQhYhyQM0DByoal0zbTxqtYDKzEUg8ymFaDYvE9hGEG3zG2hh0BDsCRlNQrdF7PIV9M7EkNK+/4yne+2qNgmuyam+hpDc4t8R0XSh5W1PXZNGJNStlZUp+1rJCcXzRCwhwOq0xe52T64a1BtNBeyyfOXWY1z7iAfXB9Nxan9bkqv5oBa8xwKUFyDsAGU4tfaZDgOxEOEzi2tpDGl1aZrik1YfA2lo68b93H1K9rmWOs959MPE/9yJErXY+hzlOwzJJo405uXyIWm1KvV4WkA+bllma7rJ8nMuAxIlxXsvCNe+E7DuW2Yd/kJDKoD0yqjRqI5NSPEcQSr3Lmg2ohoNsaCWGlDd9cRz9MKb04whxb+IYTFInSm0lcHtmaiW4RWKLSnQKKxWtAoOWpU9rAFSjAiXB87tYuQDnWFvp2EGhHNN8gMdnipUsbvuaSv1bZCv6DxX5nDNfBZxLnS+dA1TzJh50UiqynQF+j9ZdlH4Dme2IrhKfB79aBNX8/3cAdPrNdVbufgc4mP/fFqH0Sv+BsH+o9hJAj1Ziox6Q2OMgUcnE2+7YTg7oDITrOhOq3E7MzNtuBpXfaj8B2CfdlmxB6p7YQGLfZ7RUMtZQweunsFstAZ3Zt2bQnH2bdYBSddfrq6Boq6DbU8GzSpeLAMbu1WlT5XN65Y4B5Mppz0jRU0F3qGj1JpL6lCgAsJ3Zr+5kZJHRpPtr5tgAColP7yJvaGRqkCjlt1pqbW0ncwUvEe3Vnbbbduo9G3cUcsntraWQz4hKpq18WpH87uek18yErUySn3fzEZ+QyEjfytO6b/oSTadSe5W9VCodvW/54gmJjPStqMXmOCta41BIYKRt5WmxiRDxtxDyhARG2lbUWnix2ZK/1dLCh0JSI/2eVMqmVMsfN94qi14LFK27NiVEL/IcWpz95Xm1gnvAs5L5z3/+4Q/KGA65GgNV0gAAAABJRU5ErkJggg=="},"29d0":function(t,e,n){"use strict";var a=n("e7da"),i=n.n(a);i.a},3392:function(t,e,n){t.exports=n.p+"img/about-service.276e32c4.png"},"43d0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABHCAMAAACee4HnAAAAk1BMVEUAAADk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OS5DVNqAAAAMHRSTlMAiFXwD3j9JcJoLgYD+/Xhy15C29jRvJ2AHRsXCbSvpJVxY1BI7uuoi3Qg5js1hEtaXcyfAAABy0lEQVRYw+2WW2+DMAyFKdCEO5RCCy3temHrfcv//3WTJk11Ys1epD3sIeexx/pIc2yD98eqJ5RGs3wgyztvqihNTFxIlgcO53AO53AO53AO53D/Eid9QzMSl/qmIg2HFCIcrRcat7LEnWhcb4nbgPIbg+vscCW2JcRNedyCxiUQF/M4mGyL7TvEHXhcC8orbB8hzudxJShfYPsAcTWPewXlJ2xfIC5haSks32H/DP01i7syfQWHJs9YXM0k16I+IhVD3IjsrEBJkdpBnET2A10trYq+m73dUIQ5PRQRxD1YnLZslzh3Aewi5fcJHexZWSUhBZlEX0B7z+K2sLyhbdFztA8F9U7GqiKOtnpT1ID7QrNnDG09V9RNxzrtxuQqdZo6au6whB7fwz5YdHgT13OD1mTkHwWLB29aeTJdcad25gUcDU3EdZcrU2cCFpeovAyfr0IMU1FKvQqRCtgkE2Q31FZPCnQzWqrZxrDnK4/SURg0o0PDRj+bTsPqFFSO+l0G8N5Cq9EPRuyP4hn54LEa2ufFgBTw27oAJyckv6d/G1IfpZX0fqdafD08/vH8lVJ5R00WXmaRpLZXlXgWWgYx+fAeurzSNf7tE30L+XrpgEUlAAAAAElFTkSuQmCC"},"4ac9":function(t,e,n){t.exports=n.p+"img/member2.05a80a03.png"},"614b":function(t,e,n){t.exports=n.p+"img/member5.57a4537d.png"},6801:function(t,e,n){t.exports=n.p+"img/member7.5d0875ea.png"},"6e53":function(t,e,n){t.exports=n.p+"img/we-img.54e790db.png"},7762:function(t,e,n){"use strict";var a=n("7c60"),i=n.n(a);i.a},"7c60":function(t,e,n){},"7e66":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"about-banner web-img"}),a("div",{staticClass:"we pc-max-width clearfix margin-t-80 animation-show"},[a("img",{staticClass:"left",attrs:{src:n("6e53")}}),a("div",{staticClass:"right des"},[a("h3",[t._v("我们是谁")]),a("h4",[t._v("SGPEC，我们专业服务于精英。")]),a("p",[t._v("新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。")])])]),a("div",{staticClass:"profession margin-t-80 animation-show"},[a("div",{staticClass:"pc-max-width content clearfix"},[a("div",{staticClass:"img right"},[a("img",{attrs:{src:n("3392")}})]),a("div",{staticClass:"left des"},[a("h3",[t._v("我们的专业在哪里？")]),a("h4",[t._v("为您提供专业的移民，护照定制化服务！")]),a("p",[t._v("我们专注于为全球高净值人群提供专业的新加坡移民、欧盟和英联邦护照身份的移民定制服务。我们机构汇聚行业顶尖移民律师团队和前移民官，指导协助高净值个人或者家庭成为世界公民。通过我们的专业化运作，最大程度上简化了您成为世界公民的复杂性；同时依托于我们的高端资源、与相关机构保持长期稳定的合作关系，可以高效满足高净值人群对成为世界公民的需求。")])])])]),a("div",{staticClass:"pc-max-width team margin-t-80 animation-show"},[a("div",{staticClass:"des"},[a("h3",[t._v("我们的团队")]),a("h4",[t._v("给我们一次机会，还您一次满意的服务！")]),a("p",[t._v("我们与时俱进，与时偕行，坚持简单的事情重复做，重复的事情专业做，专业的事情极致做。"),a("br"),t._v("交流，交心，交易；诚信，专业，隐私。"),a("br"),t._v("给我们一次机会，还你一次满意的专业服务。")])]),a("ul",{staticClass:"clearfix"},[a("li",[a("img",{attrs:{src:n("e71c"),alt:""}})]),a("li",[a("img",{attrs:{src:n("4ac9"),alt:""}})]),a("li",[a("img",{attrs:{src:n("812b"),alt:""}})]),a("li",[a("img",{attrs:{src:n("a6ce"),alt:""}})]),a("li",[a("img",{attrs:{src:n("614b"),alt:""}})]),a("li",[a("img",{attrs:{src:n("fe32"),alt:""}})]),a("li",[a("img",{attrs:{src:n("6801"),alt:""}})]),a("li",[a("img",{attrs:{src:n("80fc"),alt:""}})])])]),a("div",{staticClass:"evaluation margin-t-80 animation-show des"},[a("h3",[t._v("客户评价")]),a("h4",[t._v("您的满意，是对我们最大的信任！")]),a("div",{staticClass:"pc-max-width content"},[a("Carousel")],1)]),a("div",{staticClass:"idea margin-t-80 animation-show"},[a("div",{staticClass:"pc-max-width clearfix"},[a("div",{staticClass:"right des"},[a("h3",[t._v("我们的服务理念")]),a("h4",[t._v("铸造品质，客户至上。")]),a("p",[t._v("新加坡全球护照交流中心-SGPEC，立足新加坡，放眼全球，秉承客户隐私至上的服务宗旨，专业铸造品质，服务打造诚信，SGPEC-您可信赖的专业服务。")])]),a("img",{staticClass:"wap-img",attrs:{src:n("db6b")}})])]),a("Flag")],1)},r=[],c=n("08cd"),s=n("6ac7"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-carousel",{attrs:{interval:4e4,type:"card",height:"390px"}},t._l(t.evaluation,function(e){return a("el-carousel-item",{key:e},[a("img",{staticClass:"avatar",attrs:{src:n("1df9")}}),a("p",[t._v(t._s(e.text))]),a("img",{staticClass:"comma",attrs:{src:n("43d0"),alt:""}}),a("span",[t._v(t._s(e.name))])])}),1)},l=[],u={data:function(){return{evaluation:[{name:"- 塞浦路斯客戶 青岛 Z先生 -",text:"我通过朋友介绍认识了新加坡全球护照交流中心的尹小姐，她的专业知识和人性化的贴心服务，协助我们全家顺利完成了第二身份的手续，直至今天，任何时候我们不懂的问题，找她她总是竭尽全力给予我们满意的答案，不错的移民顾问。"},{name:"- 杭州 OY 夫妻 -",text:"2020的疫情让我感觉有第二身分的重要性了，在这之前我并没有这么着急办理，甚至认为自己有美国签证就哪里都可以通行了。结果在爆发后，我需要去别的地方开会并拓展业务时受到了阻碍。我立刻打电话给JAMES要求最快的速度办理第二身分。他马上帮我准备材料，立刻提交办理，18天就批准。从此省去了出国办签证的烦恼，头一次感觉到心里那种踏实的感觉。这家移民机构打心底的让我欣赏。"},{name:"- 杭州 OY 夫妻 -",text:"很满意的移民体验，工作人员专程飞来杭州专业耐心指导我和我先生准备申请材料，虽然办理过程中出现了点小插曲，但是对他们的专业服务给予99分，会继续推荐给我们的朋友！"}]}}},A=u,p=(n("29d0"),n("2877")),m=Object(p["a"])(A,o,l,!1,null,"e62ec744",null),d=m.exports,g=(n("93f7"),n("b21a")),f={name:"app",components:{Layout:c["a"],Flag:s["a"],Carousel:d},mounted:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;Object(g["a"])(t),Object(g["c"])()}},b=f,v=(n("7762"),Object(p["a"])(b,i,r,!1,null,"5e639f46",null)),O=v.exports,h=n("5c96"),k=n.n(h),T=n("bc3a"),C=n.n(T);n("0fae");a["default"].prototype.$http=C.a,a["default"].config.productionTip=!1,a["default"].use(k.a),new a["default"]({render:function(t){return t(O)}}).$mount("#app")},"80fc":function(t,e,n){t.exports=n.p+"img/member8.06301999.png"},"812b":function(t,e,n){t.exports=n.p+"img/member3.61538b83.png"},a6ce:function(t,e,n){t.exports=n.p+"img/member4.a56b94f2.png"},db6b:function(t,e,n){t.exports=n.p+"img/idea-bg.55e0905c.png"},e71c:function(t,e,n){t.exports=n.p+"img/member1.07d841bf.png"},e7da:function(t,e,n){},fe32:function(t,e,n){t.exports=n.p+"img/member6.a6455f3a.png"}});
//# sourceMappingURL=about.67f7380a.js.map
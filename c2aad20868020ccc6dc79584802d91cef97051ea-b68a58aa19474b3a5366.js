(self.webpackChunkdanmin_gatsby_blog=self.webpackChunkdanmin_gatsby_blog||[]).push([[269],{35:function(t,e,n){var r=9007199254740991,o="[object Arguments]",i="[object Function]",u="[object GeneratorFunction]",a="[object Map]",s="[object Promise]",c="[object Set]",l="[object String]",f="[object WeakMap]",p="[object DataView]",h=/^\[object .+?Constructor\]$/,d=/^(?:0|[1-9]\d*)$/,g="\\ud800-\\udfff",y="\\u0300-\\u036f\\ufe20-\\ufe23",m="\\u20d0-\\u20f0",b="\\ufe0e\\ufe0f",v="["+g+"]",x="["+y+m+"]",j="\\ud83c[\\udffb-\\udfff]",_="[^"+g+"]",w="(?:\\ud83c[\\udde6-\\uddff]){2}",O="[\\ud800-\\udbff][\\udc00-\\udfff]",k="\\u200d",S="(?:"+x+"|"+j+")"+"?",M="["+b+"]?",P=M+S+("(?:"+k+"(?:"+[_,w,O].join("|")+")"+M+S+")*"),E="(?:"+[_+x+"?",x,w,O,v].join("|")+")",z=RegExp(j+"(?="+j+")|"+E+P,"g"),R=RegExp("["+k+g+y+m+b+"]"),Z="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,I="object"==typeof self&&self&&self.Object===Object&&self,D=Z||I||Function("return this")();function T(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}function A(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function L(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function $(t){return function(t){return R.test(t)}(t)?function(t){return t.match(z)||[]}(t):function(t){return t.split("")}(t)}var C,F,G,W=Function.prototype,V=Object.prototype,B=D["__core-js_shared__"],N=(C=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",U=W.toString,q=V.hasOwnProperty,H=V.toString,J=RegExp("^"+U.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=D.Symbol,Q=K?K.iterator:void 0,X=V.propertyIsEnumerable,Y=(F=Object.keys,G=Object,function(t){return F(G(t))}),tt=ht(D,"DataView"),et=ht(D,"Map"),nt=ht(D,"Promise"),rt=ht(D,"Set"),ot=ht(D,"WeakMap"),it=yt(tt),ut=yt(et),at=yt(nt),st=yt(rt),ct=yt(ot);function lt(t,e){var n=mt(t)||function(t){return function(t){return jt(t)&&bt(t)}(t)&&q.call(t,"callee")&&(!X.call(t,"callee")||H.call(t)==o)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var u in t)!e&&!q.call(t,u)||i&&("length"==u||gt(u,r))||n.push(u);return n}function ft(t){if(!xt(t)||function(t){return!!N&&N in t}(t))return!1;var e=vt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?J:h;return e.test(yt(t))}function pt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||V,e!==r)return Y(t);var e,n,r,o=[];for(var i in Object(t))q.call(t,i)&&"constructor"!=i&&o.push(i);return o}function ht(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ft(n)?n:void 0}var dt=function(t){return H.call(t)};function gt(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||d.test(t))&&t>-1&&t%1==0&&t<e}function yt(t){if(null!=t){try{return U.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(tt&&dt(new tt(new ArrayBuffer(1)))!=p||et&&dt(new et)!=a||nt&&dt(nt.resolve())!=s||rt&&dt(new rt)!=c||ot&&dt(new ot)!=f)&&(dt=function(t){var e=H.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?yt(n):void 0;if(r)switch(r){case it:return p;case ut:return a;case at:return s;case st:return c;case ct:return f}return e});var mt=Array.isArray;function bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!vt(t)}function vt(t){var e=xt(t)?H.call(t):"";return e==i||e==u}function xt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function jt(t){return!!t&&"object"==typeof t}function _t(t){return t?T(t,function(t){return bt(t)?lt(t):pt(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(bt(t))return function(t){return"string"==typeof t||!mt(t)&&jt(t)&&H.call(t)==l}(t)?$(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(Q&&t[Q])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[Q]());var e=dt(t);return(e==a?A:e==c?L:_t)(t)}},8746:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var i=n(7294),u=n(35),a=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,n){for(var r=!0;r;){var o=t,i=e,u=n;r=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,i);if(void 0!==a){if("value"in a)return a.value;var s=a.get;if(void 0===s)return;return s.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=i,n=u,r=!0,a=c=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var n=this.props,r=n.items,o=n.random;this.state={index:o?Math.floor(Math.random()*Math.floor(r.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map((function(t){return clearTimeout(t)}))}},{key:"_loop",value:function(t,e){var n=setTimeout(t,e);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(t,e){var n=this.state.output,r=this.props.typingInterval,o=this._type.bind(this,t,e),i=u(t);this.setState({output:i.slice(0,u(n).length+1).join("")}),n.length<i.length?this._loop(o,r):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),e())}},{key:"_erase",value:function(t){var e=this.state.output,n=this.props.deletingInterval,r=this._erase.bind(this,t),o=u(e);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:o.slice(0,o.length-1).join("")}),0!==o.length?this._loop(r,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),t())}},{key:"_overwrite",value:function(t,e){var n=this.state,r=n.output,o=n.substrLength,i=this.props.deletingInterval,a=this._overwrite.bind(this,t,e),s=u(t),c=u(r);this.setState({output:s.slice(0,o).concat(c.slice(o)),substrLength:o+1}),s.length!==o?this._loop(a,i):(this.setState({output:t,substrLength:0}),e())}},{key:"_animate",value:function(){var t=this,e=this.state.index,n=this.props,r=n.items,o=n.pause,i=n.emptyPause,u=n.eraseMode,a=n.random,s=this._type,c=this._erase,l=this._overwrite,f=this._animate.bind(this),p=void 0;p=a?Math.floor(Math.random()*Math.floor(r.length)):e===r.length-1?0:e+1;var h=function(){t.setState({index:p}),t._loop(f,i)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),s.bind(this)(r[e],(function(){"overwrite"===u?t._loop(l.bind(t,r[p],h),o):t._loop(c.bind(t,h),o)}))}},{key:"render",value:function(){var t=this.props,e=t.color,n=t.cursor,o=(t.deletingInterval,t.emptyPause,t.items,t.pause,t.eraseMode,t.typingInterval,t.random,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return i.createElement("span",r({style:{color:e}},o),this.state.output,n?i.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),e}(i.Component);a.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=a,t.exports=e.default},2721:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r,o=n(7294),i=n(8746),u=n.n(i),a=n(575),s=n(5555),c=n(1880),l=n(1008),f=n(3431),p=n(8967),h=(0,f.keyframes)(r||(r=(0,c.Z)(["\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]))),d=(0,l.Z)("div",{target:"enintf27"})("display:flex;flex-direction:column;justify-content:space-between;width:100%;margin:130px 0;font-family:GmarketSansLight;.react-rotating-text-cursor{animation:",h," 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;}@media ",p.RS,"{padding:0 10px;margin-top:80px;margin-bottom:150px;}.gatsby-image-wrapper{position:absolute;right:30px;top:-100px;width:300px;@media ",p.RS,"{position:absolute;right:0;top:-20px;width:100px;}}"),g=(0,l.Z)("div",{target:"enintf26"})("white-space:nowrap;display:flex;justify-content:space-between;position:relative;font-size:40px;line-height:1.2;@media ",p.RS,"{flex-direction:column;}strong{display:inline-block;font-family:GmarketSansMedium;.react-rotating-text-cursor{font-family:GmarketSansLight;font-size:40px;@media ",p.RS,"{font-size:27px;}}}.react-rotating-text-cursor{animation:",h," 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;}"),y=(0,l.Z)("p",{target:"enintf25"})("width:100%;.react-rotating-text-cursor{font-size:50px;line-height:35px;}@media ",p.RS,"{font-size:27px;.react-rotating-text-cursor{font-size:27px;line-height:27px;}}"),m=(0,l.Z)("div",{target:"enintf24"})("display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;@media ",p.RS,"{flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:15px;margin-top:10px;}"),b=(0,l.Z)("a",{target:"enintf23"})("color:",(function(t){return t.theme.color.black100}),";font-size:18px;",(function(t){var e=t.theme;return(0,p.bD)(e)}),";"),v=(0,l.Z)("div",{target:"enintf22"})("color:",(function(t){return t.theme.color.black100}),";font-size:18px;position:absolute;height:100px;bottom:-100px;&>div:first-of-type{cursor:pointer;",(function(t){var e=t.theme;return(0,p.bD)(e)}),";}@media ",p.RS,"{left:0px;align-items:flex-start;bottom:-110px;}"),x=(0,l.Z)("div",{target:"enintf21"})("margin-top:5px;position:absolute;gap:2px;display:flex;flex-direction:column;top:25px;right:0;align-items:flex-end;z-index:30;@media ",p.RS,"{left:0px;align-items:flex-start;}"),j=(0,l.Z)("div",{target:"enintf20"})("position:absolute;top:300px;left:0;z-index:0;@media ",p.RS,"{top:270px;right:0;left:auto;}"),_=function(t){var e=t.author,n=e.stack,r=e.social,i=e.name,c=e.nickname,l=e.dropdown,p=(0,o.useState)(!1),h=p[0],_=p[1];return(0,f.jsx)(d,null,(0,f.jsx)(g,null,(0,f.jsx)(y,null,"안녕하세요!",(0,f.jsx)("br",null),(0,f.jsx)("strong",null,(0,f.jsx)(u(),{items:n})),(0,f.jsx)("span",null,"를 좋아하는"),(0,f.jsx)("br",null),"개발자"," ",(0,f.jsx)("strong",null,(0,f.jsx)(u(),{items:[i,c]})),"입니다."),(0,f.jsx)(s.Z,{alt:"thumbnail",src:"thumbnail.png"}),(0,f.jsx)(m,null,Object.keys(r).map((function(t,e){return r[t]&&(0,f.jsx)(b,{key:e,target:"_blank",href:r[t]},t)})),(0,f.jsx)("div",null),(0,f.jsx)(v,{onMouseLeave:function(){return _(!1)}},(0,f.jsx)("div",{onMouseEnter:function(){return _(!0)}},"etc."),h&&(0,f.jsx)(x,null,Object.keys(l).map((function(t,e){return l[t]&&(0,f.jsx)(b,{key:e,target:"_blank",href:l[t]},t)})))))),(0,f.jsx)(j,null,(0,f.jsx)(a.Z,null)))}}}]);
//# sourceMappingURL=c2aad20868020ccc6dc79584802d91cef97051ea-b68a58aa19474b3a5366.js.map
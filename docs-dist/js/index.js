(function(t){function e(e){for(var o,a,l=e[0],r=e[1],u=e[2],c=0,p=[];c<l.length;c++)a=l[c],i[a]&&p.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={index:0},i={index:0},s=[];function l(t){return r.p+"js/"+({}[t]||t)+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={"chunk-01e8":1,"chunk-3204":1,"chunk-59ba":1,"chunk-6fb1":1,"chunk-a600":1,"chunk-e4f1":1,"chunk-f298":1,"chunk-fbd5":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({}[t]||t)+".css",a=r.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){l=c[s],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.request=o,n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[t]=0}));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=s);var u,c=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,r.nc&&p.setAttribute("nonce",r.nc),p.src=l(t),u=function(e){p.onerror=p.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");s.type=o,s.request=a,n[1](s)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:p})},12e4);p.onerror=p.onload=u,c.appendChild(p)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/best-ui/docs-dist/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("fc11")},"07f2":function(t,e,n){},"66b8":function(t,e,n){},abe9:function(t,e,n){"use strict";var o=n("07f2"),a=n.n(o);a.a},b20f:function(t,e,n){},fc11:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-layout",{staticClass:"container"},[n("b-header",[t._v("Best UI")]),n("b-layout",{attrs:{horizontal:""}},[n("b-slider",{attrs:{id:"nav",width:"200px"}},[n("b-list",t._l(t.nav,function(e,o){return n("b-list-item",{key:o,attrs:{to:e.path}},[t._v(t._s(e.meta.title))])}))],1),n("b-content",[n("router-view")],1)],1),n("b-footer",[n("a",{attrs:{href:"https://github.com/bestvist/best-ui",target:"_blank"}},[t._v("GitHub")])])],1)],1)},i=[],s={data:function(){return{nav:[]}},mounted:function(){this.nav=this.$router.options.routes}},l=s,r=(n("abe9"),n("2877")),u=Object(r["a"])(l,a,i,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Best UI")]),n("p",[t._v("vue组件框架")]),n("pre",[t._v("    "),n("code",[t._v("\n      Install\n      npm install best-ui --save \n      Quick Start\n      import Vue from 'vue';\n      import BestUI from 'best-ui';\n      import 'best-ui/dist/bestui.css';\n\n      Vue.use(BestUI);\n\n      TODO\n      要做的事：\n\n      基础\n      Layout 布局\n      Color 色彩\n      Icon 图标\n      Input 输入框\n      Button 按钮\n      Checkbox 多选框\n      Radio 单选框\n      Select 选择器\n      Switch 开关\n      DatePicker 日期选择\n      ColorPicker 颜色选择\n      Time 相对时间\n      Card 卡片\n      Table 表格\n      Tag 标签\n      Progress 进度条\n      Tree 树形\n      Pagination 分页\n      NavMenu 导航\n      TextScroll 文字滚动\n      ZoomPicture 图片放大\n      Steps 步骤条\n      Alert 警告\n      Tooltip 提示\n      Popover 弹出框\n      Carousel 走马灯\n      Collapse 折叠板\n      Timeline 时间轴\n      服务组件\n      Loading 加载\n      Message 消息\n      Notification 通知\n      Dialog 对话框\n      LICENSE\n      MIT\n    ")]),t._v("\n  ")])])}],h={name:"docs-home"},m=h,v=Object(r["a"])(m,d,f,!1,null,null,null);v.options.__file="Home.vue";var b=v.exports;o["a"].use(p["a"]);var g=[{path:"/",meta:{title:"Home 主页"},component:b},{path:"/layout",meta:{title:"Layout 布局"},component:function(){return n.e("chunk-e4f1").then(n.bind(null,"2259"))}},{path:"/grid",meta:{title:"Grid 栅格"},component:function(){return n.e("chunk-6fb1").then(n.bind(null,"36ea"))}},{path:"/color",meta:{title:"Color 色彩"},component:function(){return n.e("chunk-fbd5").then(n.bind(null,"b096"))}},{path:"/icon",meta:{title:"Icon 图标"},component:function(){return n.e("chunk-59ba").then(n.bind(null,"f90a"))}},{path:"/button",meta:{title:"Button 图标"},component:function(){return n.e("chunk-3204").then(n.bind(null,"70e6"))}},{path:"/input",meta:{title:"Input 输入框"},component:function(){return n.e("chunk-f298").then(n.bind(null,"0389"))}},{path:"/checkbox",meta:{title:"Checkbox 复选框"},component:function(){return n.e("chunk-a600").then(n.bind(null,"491c"))}},{path:"/list",meta:{title:"List 列表"},component:function(){return n.e("chunk-01e8").then(n.bind(null,"995f"))}}],_=new p["a"]({mode:"history",base:"/best-ui/docs-dist/",routes:g}),y=n("2f62");o["a"].use(y["a"]);var C,x,B=new y["a"].Store({state:{},mutations:{},actions:{}}),k=(n("66b8"),n("c93e")),O=(n("7f7f"),n("ac6a"),n("b20f"),n("a322")),N={name:"BButton",componentName:"BButton",props:{color:String,textColor:String,icon:String,size:String,type:String,round:Boolean,circle:Boolean,flat:Boolean,full:Boolean,disabled:Boolean,loading:Boolean,href:String,nativeType:String},computed:{className:function(){var t;return t={},Object(O["a"])(t,"b-button--".concat(this.type),this.type),Object(O["a"])(t,"b-button--".concat(this.size),this.size),Object(O["a"])(t,"is-disabled",this.disabled),Object(O["a"])(t,"is-loading",this.loading),Object(O["a"])(t,"is-round",this.round),Object(O["a"])(t,"is-circle",this.circle),Object(O["a"])(t,"is-flat",this.flat),Object(O["a"])(t,"is-full",this.full),t}},methods:{handleClick:function(t){this.$emit("click",t)}},render:function(t){var e=this.href?"a":"button";return t(e,{attrs:{type:this.nativeType,disabled:this.disabled||this.loading},staticClass:"b-button",class:this.className,style:{"background-color":this.color,color:this.textColor},on:{click:this.handleClick}},this.$slots.default)}},w=N,S=Object(r["a"])(w,C,x,!1,null,null,null);S.options.__file="button.vue";var $=S.exports;$.install=function(t){t.component($.name,$)};var j=$,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"b-checkbox",attrs:{role:"checkbox"},on:{click:t.handleClick}},[n("span",{staticClass:"b-checkbox__inner",class:t.classNameInner}),n("input",{staticClass:"b-checkbox__input",attrs:{type:"checkbox","aria-hidden":"true",name:t.name},domProps:{checked:t.checked},on:{change:t.handleChange}}),t.$slots.default||t.label?n("span",{staticClass:"b-checkbox__label"},[t._t("default"),t.$slots.default?t._e():[t._v(t._s(t.label))]],2):t._e()])},T=[],P={name:"BCheckbox",componentName:"BCheckbox",props:{label:String,name:String,checked:Boolean},computed:{classNameInner:function(){return{"is-checked":this.checked}}},methods:{handleClick:function(t){this.checked=!this.checked,this.$emit("click",t)},handleChange:function(t){this.$emit("change",t.target.checked,t)}}},I=P,L=Object(r["a"])(I,E,T,!1,null,null,null);L.options.__file="checkbox.vue";var M=L.exports;M.install=function(t){t.component(M.name,M)};var V=M,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-col",class:t.className,style:t.style},[t._t("default")],2)},R=[],A=(n("c5f6"),{name:"BCol",componentName:"BCol",props:{span:{type:Number,default:24},offset:{type:Number,default:0},push:{type:Number,default:0},pull:{type:Number,default:0}},computed:{gutter:function(){var t=this.$parent;while(t&&"BRow"!==t.$options.componentName)t=t.$parent;return t?t.gutter:0},style:function(){var t="".concat(this.gutter/2,"px");return{paddingLeft:t,paddingRight:t}},className:function(){var t=this,e=[];return["span","offset","push","pull"].forEach(function(n){t[n]&&("span"===n?e.push("b-col-".concat(t.span)):e.push("b-col-".concat(n,"-").concat(t[n])))}),e.join(" ")}}}),H=A,F=Object(r["a"])(H,z,R,!1,null,null,null);F.options.__file="col.vue";var D=F.exports;D.install=function(t){t.component(D.name,D)};var U=D,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"b-content"},[t._t("default")],2)},G=[],J={name:"BContent"},Q=J,Z=Object(r["a"])(Q,q,G,!1,null,null,null);Z.options.__file="content.vue";var K=Z.exports;K.install=function(t){t.component(K.name,K)};var W=K,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"b-footer",style:{height:t.height}},[t._t("default")],2)},Y=[],tt={name:"BFooter",props:{height:String}},et=tt,nt=Object(r["a"])(et,X,Y,!1,null,null,null);nt.options.__file="footer.vue";var ot=nt.exports;ot.install=function(t){t.component(ot.name,ot)};var at=ot,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"b-header",style:{height:t.height}},[t._t("default")],2)},st=[],lt={name:"BHeader",props:{height:String}},rt=lt,ut=Object(r["a"])(rt,it,st,!1,null,null,null);ut.options.__file="header.vue";var ct=ut.exports;ct.install=function(t){t.component(ct.name,ct)};var pt=ct,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"b-icon",class:t.className},[t._t("default")],2)},ft=[],ht={name:"BIcon",componentName:"BIcon",props:{name:String},computed:{className:function(){var t="b-icon-".concat(this.name);return Object(O["a"])({},t,this.name)}}},mt=ht,vt=Object(r["a"])(mt,dt,ft,!1,null,null,null);vt.options.__file="icon.vue";var bt=vt.exports;bt.install=function(t){t.component(bt.name,bt)};var gt=bt,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-input",class:t.className},["textarea"!==t.type?[t.prefix?n("span",{ref:"prefix",staticClass:"b-input__prefix"},[t._v(t._s(t.prefix))]):t._e(),n("input",{ref:"input",staticClass:"b-input__inner",attrs:{name:t.name,minlength:t.min,maxlength:t.max,disabled:t.disabled,readonly:t.readonly,step:t.step,autofocus:t.autofocus,autocomplete:t.autocomplete,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,chang:t.handleChange,compositionstart:t.handleComposition,compositionupdate:t.handleComposition,compositionend:t.handleComposition}}),t.suffix?n("span",{ref:"suffix",staticClass:"b-input__suffix"},[t._v(t._s(t.suffix))]):t._e()]:n("textarea",{staticClass:"b-textarea__inner",class:t.classNameTextarea,style:{height:t.height},attrs:{name:t.name,minlength:t.min,maxlength:t.max,disabled:t.disabled,readonly:t.readonly,step:t.step,autofocus:t.autofocus,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,chang:t.handleChange,compositionstart:t.handleComposition,compositionupdate:t.handleComposition,compositionend:t.handleComposition}}),t.errorMsg?n("span",{staticClass:"b-input__error-msg",domProps:{innerHTML:t._s(t.errorMsg)}}):t._e()],2)},yt=[];function Ct(t){var e=/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;return e.test(t)}var xt={name:"BInput",componentName:"BInput",props:{type:{type:String,default:"input"},value:[String,Number],name:String,min:Number,max:Number,placeholder:String,disabled:Boolean,readonly:Boolean,resize:{type:Boolean,default:!1},step:[String,Number],autofocus:Boolean,height:String,autocomplete:{type:String,default:"off"},prefix:String,suffix:String,prefixIcon:String,suffixIcon:String,errorMsg:String},data:function(){return{currentValue:void 0===this.value||null===this.value?"":this.value,isOnComposition:!1,valueBeforeComposition:null}},computed:{className:function(){return{"is-error":this.errorMsg}},classNameTextarea:function(){return{"is-resize":this.resize}}},methods:{handleInput:function(t){var e=t.target.value;this.setCurrentValue(e),this.isOnComposition||this.$emit("input",e)},handleFocus:function(t){this.$emit("focus",t)},handleBlur:function(t){this.$emit("blur",t)},handleChange:function(t){this.$emit("change",t.target.value)},handleComposition:function(t){if("compositionend"===t.type)this.isOnComposition=!1,this.currentValue=this.valueBeforeComposition,this.valueBeforeComposition=null,this.handleInput(t);else{var e=t.target.value,n=e[e.length-1]||"";this.isOnComposition=!Ct(n),this.isOnComposition&&"compositionstart"===t.type&&(this.valueBeforeComposition=e)}},setCurrentValue:function(t){this.isOnComposition&&t===this.valueBeforeComposition||(this.currentValue=t)},computeOffset:function(t,e){var n=this.$refs[e]&&this.$refs[e].getBoundingClientRect(),o=n?"".concat(n.right-n.left+10,"px"):null;"prefix"===e?t.style.paddingLeft=o:t.style.paddingRight=o},updateOffset:function(){var t=this.$refs["input"];t&&(this.computeOffset(t,"prefix"),this.computeOffset(t,"suffix"))}},mounted:function(){this.updateOffset()},updated:function(){var t=this;this.$nextTick(function(){t.updateOffset()})}},Bt=xt,kt=Object(r["a"])(Bt,_t,yt,!1,null,null,null);kt.options.__file="input.vue";var Ot=kt.exports;Ot.install=function(t){t.component(Ot.name,Ot)};var Nt=Ot,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"b-layout",class:{"is-horizontal":t.horizontal}},[t._t("default")],2)},St=[],$t={name:"BLayout",props:{horizontal:Boolean}},jt=$t,Et=Object(r["a"])(jt,wt,St,!1,null,null,null);Et.options.__file="layout.vue";var Tt=Et.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"b-slider",style:{width:t.width}},[t._t("default")],2)},It=[],Lt={name:"BSlider",props:{width:String}},Mt=Lt,Vt=Object(r["a"])(Mt,Pt,It,!1,null,null,null);Vt.options.__file="slider.vue";var zt=Vt.exports;zt.install=function(t){t.component(zt.name,zt)};var Rt=zt,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-row",style:t.style},[t._t("default")],2)},Ht=[],Ft={name:"BRow",componentName:"BRow",props:{gutter:Number},computed:{style:function(){var t="-".concat(this.gutter/2,"px");return{marginLeft:t,marginRight:t}}}},Dt=Ft,Ut=Object(r["a"])(Dt,At,Ht,!1,null,null,null);Ut.options.__file="row.vue";var qt=Ut.exports;qt.install=function(t){t.component(qt.name,qt)};var Gt=qt,Jt=[Tt,pt,W,Rt,at,Gt,U];Tt.install=function(t){Jt.forEach(function(e){t.component(e.name,e)})};var Qt=Tt,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"b-list",class:t.className},[t._t("default")],2)},Kt=[],Wt={name:"BList",componentName:"BList",computed:{nested:function(){var t=this.$parent.$parent;return t&&"BListItem"===t.$options.componentName},className:function(){return{"is-nested":this.nested}}}},Xt=Wt,Yt=Object(r["a"])(Xt,Zt,Kt,!1,null,null,null);Yt.options.__file="list.vue";var te=Yt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"b-list-item"},[t.to?n("router-link",{staticClass:"b-list-item__inner",class:t.className,attrs:{to:t.to}},[t._t("default")],2):n("a",{staticClass:"b-list-item__inner",class:t.className,on:{click:t.handleClick}},[t._t("default")],2),n("b-collapse-transition",[t.open?t._t("children"):t._e()],2)],1)},ne=[],oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"b-collapse"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)},ae=[];n("a481");function ie(t){return t?Number(t.replace("px","")):0}var se={name:"BCollapseTransition",methods:{beforeEnter:function(t){t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.paddingTop="0",t.style.paddingBottom="0",t.style.height="0"},enter:function(t){t.style.display="block",t.style.overflow="hidden",t.style.height=t.scrollHeight+ie(t.dataset.oldPaddingTop)+ie(t.dataset.oldPaddingBottom)+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},afterEnter:function(t){t.style.display="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},beforeLeave:function(t){t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.display="block",0!==t.scrollHeight&&(t.style.height=t.scrollHeight+"px"),t.style.overflow="hidden"},leave:function(t){0!==t.scrollHeight&&(t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave:function(t){t.style.display="none",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}},le=se,re=Object(r["a"])(le,oe,ae,!1,null,null,null);re.options.__file="collapse-transition.vue";var ue=re.exports,ce=[ue];ue.install=function(t){ce.forEach(function(e){t.component(e.name,e)})};var pe=ue,de={name:"BListItem",componentName:"BListItem",components:{BCollapseTransition:pe},props:{to:[String,Object],default:""},data:function(){return{open:!1}},computed:{nested:function(){return this.$slots.children},className:function(){return{"is-open":this.open}}},methods:{handleClick:function(t){this.$emit("click",t),this.itemClick()},itemClick:function(){this.open=this.nested&&!this.open,this.$router.push({path:this.to})}}},fe=de,he=Object(r["a"])(fe,ee,ne,!1,null,null,null);he.options.__file="list-item.vue";var me=he.exports;me.install=function(t){t.component(me.name,me)};var ve=me,be=[te,ve];te.install=function(t){be.forEach(function(e){t.component(e.name,e)})};var ge=te,_e=[j,V,U,W,at,pt,gt,Nt,Qt,ge,ve,Gt,Rt,pe],ye=function(t){_e.forEach(function(e){t.component(e.name,e)})};"undefined"!==typeof window&&window.Vue&&ye(window.Vue);var Ce=Object(k["a"])({version:Object({NODE_ENV:"production",BASE_URL:"/best-ui/docs-dist/"}).VERSION,install:ye},_e),xe=Ce;o["a"].config.productionTip=!1,o["a"].use(xe),new o["a"]({router:_,store:B,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=index.js.map
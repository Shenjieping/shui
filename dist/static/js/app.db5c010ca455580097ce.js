webpackJsonp([2],{"1d0X":function(t,e){},HtEm:function(t,e){},NbQl:function(t,e){},O9oq:function(t,e){},XeJM:function(t,e){},"ffz/":function(t,e){t.exports={"开发指南":[{name:"index",path:"/",type:"pages"},{name:"guid",path:"/guid",desc:"介绍"},{name:"install",path:"/install",desc:"安装"}],"组件":[{desc:"基础组件",path:"/component",items:[{desc:"Button 按钮",name:"button",path:"/button"}]}]}},mUtA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header",style:"index"===this.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[e("div",{staticClass:"header-container"},[e("router-link",{attrs:{to:{name:"guid"}}},[this._v("组件")])],1)])},staticRenderFns:[]};var i=n("VU/8")({name:"MainHeader",data:function(){return{}}},a,!1,function(t){n("xYsb")},null,null).exports,o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$options.name},[this._v("底部")])},staticRenderFns:[]};var r=n("VU/8")({name:"MianFooter",data:function(){return{}}},o,!1,function(t){n("1d0X")},"data-v-4e39b3ef",null).exports,c=n("ffz/"),d=n.n(c),l={data:function(){return{data:d.a}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e,s){return n("div",{key:s,staticClass:"group-container"},[n("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._v(" "),t._l(t.data[e],function(e,s){return[e.desc?n("div",{key:s,staticClass:"side-nav-items"},[e.name?n("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v("\n          "+t._s(e.desc)+"\n        ")]):n("p",{staticClass:"side-nav-group"},[t._v("\n          "+t._s(e.desc)+"\n        ")]),t._v(" "),t._l(e.items,function(e,s){return n("div",{key:s},[n("router-link",{staticClass:"slid-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v("\n            "+t._s(e.desc)+"\n          ")])],1)})],2):t._e()]})],2)}),0)},staticRenderFns:[]};var m={name:"App",components:{MainHeader:i,MainFooter:r,SideNav:n("VU/8")(l,u,!1,function(t){n("O9oq")},null,null).exports},data:function(){return{isIndex:!0}},watch:{$route:function(){this.isIndex="index"===this.$route.name}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$options.name},[e("div",[e("mainHeader"),this._v(" "),this.isIndex?e("router-view",{staticClass:"page"}):e("div",{staticClass:"container"},[e("sideNav",{staticClass:"nav"}),this._v(" "),e("router-view",{staticClass:"view"})],1)],1)])},staticRenderFns:[]};var h=n("VU/8")(m,p,!1,function(t){n("NbQl")},null,null).exports,v=n("/ocq");s.a.use(v.a);let f=[];Object.keys(d.a).forEach(t=>{f=f.concat(d.a[t])});let _=t=>{t.forEach(t=>{if(t.items)_(t.items),f=f.concat(t.items);else{if("pages"===t.type)return void(t.component=(e=>n.e(1).then((()=>e(n("LFUG")(`./${t.name}.vue`))).bind(null,n)).catch(n.oe)));t.component=(e=>n.e(0).then((()=>e(n("Gv6s")(`./${t.name}.md`))).bind(null,n)).catch(n.oe))}})};_(f);var x=new v.a({routes:f}),g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$options.name},[e("button",{staticClass:"sh-button"},[this._t("default")],2)])},staticRenderFns:[]},b=n("VU/8")({name:"ShButton",data:function(){return{}}},g,!1,null,null,null).exports;b.install=function(t){t.component(b.name,b)};var C=b,w=[C],$=function t(e){t.installed||w.map(function(t){return e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&$(window.Vue);var E={install:$,ShButton:C},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"docs-demo-wrapper"},[e("div",{staticClass:"demo-container",style:{height:this.isExpand?"auto":"0"}},[e("div",{attrs:{span:"14"}},[e("div",{staticClass:"docs-demo docs-demo--expand"},[e("div",{staticClass:"highlight-wrapper"},[this._t("highlight")],2)])])]),this._v(" "),e("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:this.toggle}},[this._v(this._s(this.isExpand?"隐藏代码":"显示代码"))])])},staticRenderFns:[]};var y=n("VU/8")({data:function(){return{isExpand:!1}},methods:{toggle:function(){this.isExpand=!this.isExpand}}},k,!1,function(t){n("HtEm")},null,null).exports;n("XeJM");s.a.use(E),s.a.component("demo-block",y),new s.a({el:"#app",router:x,components:{App:h},template:"<App/>"})},xYsb:function(t,e){}},["mUtA"]);
//# sourceMappingURL=app.db5c010ca455580097ce.js.map
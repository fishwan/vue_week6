"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[485],{485:function(t,e,l){l.r(e),l.d(e,{default:function(){return v}});var s=l(252),n=l(577);const c={class:"row"},u={class:"col-md"},o=(0,s._)("h1",null,"產品列表",-1),d={class:"table table-hover"},a=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"產品"),(0,s._)("th",{scope:"col",width:"70"},"原價"),(0,s._)("th",{scope:"col",width:"70"},"售價"),(0,s._)("th",{scope:"col",width:"70"},"狀態")])],-1),i=(0,s.Uk)(" 目前有 "),r=(0,s.Uk)(" 項產品 ");function h(t,e,l,h,_,p){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",c,[(0,s._)("div",u,[o,(0,s._)("table",d,[a,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,n.zw)(t.title),1),(0,s._)("td",null,(0,n.zw)(t.origin_price),1),(0,s._)("td",null,(0,n.zw)(t.price),1),(0,s._)("td",null,[(0,s._)("span",{class:(0,n.C_)({"text-success":t.is_enabled,"text-danger":!t.is_enabled})},(0,n.zw)(t.is_enabled?"啟用":"未啟用"),3)])])))),128))])]),(0,s._)("p",null,[i,(0,s._)("span",null,(0,n.zw)(_.products.length),1),r])])])])}var _={data(){return{products:[]}},methods:{getData(){const t="https://vue3-course-api.hexschool.io/v2/api/yuchi-hexschool/admin/products";this.$http.get(t).then((t=>{this.products=t.data.products}))}},mounted(){this.getData()}},p=l(744);const w=(0,p.Z)(_,[["render",h]]);var v=w}}]);
//# sourceMappingURL=485.dbf52615.js.map
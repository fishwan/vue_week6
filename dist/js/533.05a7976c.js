"use strict";(self["webpackChunkvue_week6_live"]=self["webpackChunkvue_week6_live"]||[]).push([[533],{4533:function(t,e,l){l.r(e),l.d(e,{default:function(){return v}});var s=l(3396),n=l(7139);const c={class:"row"},u={class:"col-md"},o=(0,s._)("h1",null,"產品列表",-1),d={class:"table table-hover"},i=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"產品"),(0,s._)("th",{scope:"col",width:"70"},"原價"),(0,s._)("th",{scope:"col",width:"70"},"售價"),(0,s._)("th",{scope:"col",width:"70"},"狀態")])],-1),a=(0,s.Uk)(" 目前有 "),r=(0,s.Uk)(" 項產品 ");function _(t,e,l,_,h,p){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",c,[(0,s._)("div",u,[o,(0,s._)("table",d,[i,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,n.zw)(t.title),1),(0,s._)("td",null,(0,n.zw)(t.origin_price),1),(0,s._)("td",null,(0,n.zw)(t.price),1),(0,s._)("td",null,[(0,s._)("span",{class:(0,n.C_)({"text-success":t.is_enabled,"text-danger":!t.is_enabled})},(0,n.zw)(t.is_enabled?"啟用":"未啟用"),3)])])))),128))])]),(0,s._)("p",null,[a,(0,s._)("span",null,(0,n.zw)(h.products.length),1),r])])])])}var h={data(){return{products:[]}},methods:{getData(){const t="https://vue3-course-api.hexschool.io/v2/api/yuchi-hexschool/admin/products";this.$http.get(t).then((t=>{this.products=t.data.products}))}},mounted(){this.getData()}},p=l(89);const w=(0,p.Z)(h,[["render",_]]);var v=w}}]);
//# sourceMappingURL=533.05a7976c.js.map
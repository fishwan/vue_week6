"use strict";(self["webpackChunkvue_week6_live"]=self["webpackChunkvue_week6_live"]||[]).push([[134],{5134:function(s,t,i){i.r(t),i.d(t,{default:function(){return Z}});var l=i(3396),a=i(7139);const c={class:"products"},e=(0,l._)("div",{class:"page-title"},"產品列表",-1),d={class:"row"},o={class:"product-item card"},r={class:"card-img"},n={class:"img"},u=["src"],p={class:"pt-3"},g={class:"card-title mb-2"},h={key:0,class:"card-text mb-3"},v={class:"fw-bold"},_=(0,l._)("small",null,"售價 $",-1),b={key:1,class:"card-text mb-3 d-flex"},w={class:"text-danger fw-bold me-2"},k=(0,l._)("small",null,"特價 $",-1),m={class:"text-decoration-line-through fw-bold text-black-50"},f=(0,l._)("small",null,"售價 $",-1),y={class:"row"},x={class:"col-8"},C=["onClick"],D={class:"col-4"},L=["onClick","disabled"],$={key:0,class:"spinner-border spinner-border-sm",role:"status"},z=(0,l._)("span",{class:"visually-hidden"},"Loading...",-1),U=[z],P={key:1},T=(0,l._)("i",{class:"bi bi-cart-plus"},null,-1),q=[T];function H(s,t,i,z,T,H){const K=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",c,[e,(0,l._)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(T.products,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"col-6 col-lg-3 mb-3",key:s.id},[(0,l._)("div",o,[(0,l._)("div",r,[(0,l._)("span",n,[(0,l._)("img",{src:s.imageUrl,class:"card-img-top"},null,8,u)])]),(0,l._)("div",p,[(0,l._)("h5",g,(0,a.zw)(s.title),1),s.price===s.origin_price?((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",v,[_,(0,l.Uk)(" "+(0,a.zw)(s.origin_price),1)])])):((0,l.wg)(),(0,l.iD)("div",b,[(0,l._)("div",w,[k,(0,l.Uk)(" "+(0,a.zw)(s.price),1)]),(0,l._)("div",m,[f,(0,l.Uk)(" "+(0,a.zw)(s.origin_price),1)])])),(0,l._)("div",y,[(0,l._)("div",x,[(0,l.Wm)(K,{to:`/product/${s.id}`,custom:""},{default:(0,l.w5)((({navigate:s})=>[(0,l._)("button",{onClick:s,role:"link",class:"btn btn-dark w-100",type:"button"},"詳細資料",8,C)])),_:2},1032,["to"])]),(0,l._)("div",D,[(0,l._)("button",{class:"btn btn-danger w-100",type:"button",onClick:t=>H.addToCart(s.id),disabled:T.isLoading===s.id},[T.isLoading===s.id?((0,l.wg)(),(0,l.iD)("div",$,U)):((0,l.wg)(),(0,l.iD)("div",P,q))],8,L)])])])])])))),128))])])}var K={data(){return{products:[],isLoading:""}},methods:{getProducts(){const s="https://vue3-course-api.hexschool.io/v2/api/yuchi-hexschool/products/all";this.$http.get(s).then((s=>{this.products=s.data.products}))},addToCart(s,t=1){const i={product_id:s,qty:t},l="https://vue3-course-api.hexschool.io/v2/api/yuchi-hexschool/cart";this.isLoading=s,this.$http.post(l,{data:i}).then((s=>{alert(s.data.message),this.isLoading=""}))}},mounted(){this.getProducts()}},W=i(89);const Y=(0,W.Z)(K,[["render",H]]);var Z=Y}}]);
//# sourceMappingURL=134.aef310c6.js.map
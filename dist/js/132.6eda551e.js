"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[132],{132:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var a=s(252),o=s(963);const n=e=>((0,a.dD)("data-v-4d777ec0"),e=e(),(0,a.Cn)(),e),r={class:"login"},l={class:"row justify-content-center"},i=n((()=>(0,a._)("div",{class:"page-title text-center"},"請先登入",-1))),d={class:"form-floating mb-3"},c=n((()=>(0,a._)("label",{for:"email"},"Email",-1))),u={class:"form-floating"},p=n((()=>(0,a._)("label",{for:"password"},"密碼",-1))),m=n((()=>(0,a._)("div",{class:"d-grid gap-2 mt-3"},[(0,a._)("button",{type:"submit",class:"btn btn-dark btn-lg"},"登入")],-1))),h={class:"text-center mt-3"},f=(0,a.Uk)("回前台");function v(e,t,s,n,v,_){const w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",l,[i,(0,a._)("form",{action:"",onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>_.login&&_.login(...e)),["prevent"]))},[(0,a._)("div",d,[(0,a.wy)((0,a._)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>v.user.username=e),class:"form-control",id:"email",placeholder:"name@example.com"},null,512),[[o.nr,v.user.username]]),c]),(0,a._)("div",u,[(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>v.user.password=e),class:"form-control",id:"password",placeholder:"密碼",autocomplete:""},null,512),[[o.nr,v.user.password]]),p]),m,(0,a._)("div",h,[(0,a.Wm)(w,{to:"/"},{default:(0,a.w5)((()=>[f])),_:1})])],32)])])}var _={data(){return{user:{username:"",password:""}}},methods:{login(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{alert(e.data.message);const{token:t,expired:s}=e.data;document.cookie=`hexToken=${t}; expires=${new Date(s)}; path=/`,this.$router.push("/admin/products")})).catch((()=>{alert("登入失敗")}))}}},w=s(744);const g=(0,w.Z)(_,[["render",v],["__scopeId","data-v-4d777ec0"]]);var k=g}}]);
//# sourceMappingURL=132.6eda551e.js.map
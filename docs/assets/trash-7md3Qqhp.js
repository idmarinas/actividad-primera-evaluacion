import{l as v,m as w,p as d,o as l,c as a,b as r,e as g,w as m,q as C,v as b,d as _,_ as h,r as f,x,h as M,y as S,j as B,n as j}from"./index-C7Grgo_1.js";const O=v("pieces-private",()=>{let t=k("pieces-private");const e=w(t);function n(){localStorage.setItem("pieces-private",JSON.stringify(e.value))}function i(o){const s=orders.value.indexOf(o);return s>-1?(orders.value.splice(s,1),!0):!1}return{pieces:e,save:n,remove:i}}),N=v("pieces",()=>{const t=O(),e=P();function n(){return t.pieces}function i(){t.save()}function o(c){t.remove(c)&&t.save()}function s(c){return e.find(c)}function p(c){let u=c.length*c.width*c.thickness;return u=u/1e6,u}function $(c,u){let y=u?2:1;return c.length*c.width*y/1e4}return{all:n,save:i,remove:o,orderOfPiece:s,volume:p,area:$}});function k(t){let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{e=!1}return e}const be={weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};function Me(){const t=N(),e=w({opened:!1,item:{},order:{}});function n(o){e.value.opened=!0,e.value.item=o,e.value.order=t.orderOfPiece(o.order)}function i(){e.value.opened=!1,e.value.item={},e.value.order={}}return{modal:e,openModal:n,closeModal:i}}const I=v("orders-private",()=>{let t=k("orders-private");const e=w(t);function n(){localStorage.setItem("orders-private",JSON.stringify(e.value))}function i(o){const s=e.value.indexOf(o);return s>-1?(e.value.splice(s,1),!0):!1}return{orders:e,save:n,remove:i}}),P=v("orders",()=>{const t=I();function e(){return t.orders}function n(){t.save()}function i(s){t.remove(s)&&t.save()}function o(s){return t.orders.find(p=>p.id===s)}return{all:e,save:n,remove:i,find:o}}),V={},D={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function A(t,e){return l(),a("svg",D,e[0]||(e[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("circle",{cx:"12",cy:"12",r:"10"}),r("path",{d:"M8 12h8m-4-4v8"})],-1)]))}const Se=d(V,[["render",A]]),J={},q={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function z(t,e){return l(),a("svg",q,e[0]||(e[0]=[r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 6L6 18M6 6l12 12"},null,-1)]))}const E=d(J,[["render",z]]),L={class:"fixed top-0 left-0 w-full h-dvh flex items-center justify-center z-50 backdrop-blur-md bg-black/30 transition-opacity duration-300"},T=["open"],H={key:0},W={class:"mb-4"},X={class:"flex justify-end gap-3"},F={__name:"modal",props:{opened:{type:Boolean,default:!1}},setup(t){return(e,n)=>(l(),g(S,{name:"modal"},{default:m(()=>[C(r("div",L,[r("dialog",{class:"mx-1 md:mx-0 p-3 md:p-6 prose prose-gold-sand transition-all duration-300",open:t.opened},[_(h,{id:"modal-button-close",class:"absolute top-1 right-1 cursor-pointer rounded-md",onClick:n[0]||(n[0]=i=>e.$emit("close"))},{default:m(()=>[_(E,{width:"24"})]),_:1}),e.$slots.title?(l(),a("h2",H,[f(e.$slots,"title",{},void 0,!0)])):x("",!0),r("div",W,[f(e.$slots,"default",{},void 0,!0)]),r("div",X,[f(e.$slots,"actions",{},void 0,!0),n[3]||(n[3]=r("div",{class:"flex-1"},null,-1)),_(h,{class:"flex-none rounded-md",onClick:n[1]||(n[1]=i=>e.$emit("close"))},{default:m(()=>n[2]||(n[2]=[M("Cerrar")])),_:1})])],8,T)],512),[[b,t.opened]])]),_:3}))}},Be=d(F,[["__scopeId","data-v-895eb7c7"]]),G={},K={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function Q(t,e){return l(),a("svg",K,e[0]||(e[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("circle",{cx:"12",cy:"12",r:"10"}),r("path",{d:"m9 12l2 2l4-4"})],-1)]))}const je=d(G,[["render",Q]]),R={},U={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function Y(t,e){return l(),a("svg",U,e[0]||(e[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("circle",{cx:"12",cy:"12",r:"10"}),r("path",{d:"m15 9l-6 6m0-6l6 6"})],-1)]))}const Oe=d(R,[["render",Y]]),Z={},ee={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function te(t,e){return l(),a("svg",ee,e[0]||(e[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("circle",{cx:"12",cy:"12",r:"10"}),r("path",{d:"M12 16v-4m0-4h.01"})],-1)]))}const re=d(Z,[["render",te]]),ne={},oe={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function se(t,e){return l(),a("svg",oe,e[0]||(e[0]=[r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"},null,-1)]))}const ie=d(ne,[["render",se]]),le={},ae={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function ce(t,e){return l(),a("svg",ae,e[0]||(e[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}),r("path",{d:"m9 11l3 3L22 4"})],-1)]))}const de=d(le,[["render",ce]]),ue={},fe={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function ve(t,e){return l(),a("svg",fe,e[0]||(e[0]=[r("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[r("path",{d:"M7 10h10M7 14h10"}),r("circle",{cx:"12",cy:"12",r:"10"})],-1)]))}const pe=d(ue,[["render",ve]]),me={class:"flex flex-row gap-5 justify-center items-center px-5 w-full h-full"},_e={class:"my-auto text-lg"},we={key:0,class:"font-bold text-lg"},he={class:"text-base"},Ne={__name:"alert",props:{type:{type:String,default:"note",validate(t){return["info","warning","error","success","note"].includes(t)}}},setup(t){const e=t;function n(){switch(e.type){case"info":return re;case"warning":return ie;case"success":return de;default:return pe}}function i(){switch(e.type){case"info":return"bg-blue-100 text-blue-700";case"warning":return"bg-yellow-100 text-yellow-700";case"success":return"bg-green-100 text-green-700";default:return"bg-gold-sand-100 text-gold-sand-700"}}return(o,s)=>(l(),a("div",{class:j(["rounded-lg w-full",i()])},[r("div",me,[r("div",_e,[(l(),g(B(n()),{width:"32"}))]),r("p",null,[o.$slots.title?(l(),a("div",we,[f(o.$slots,"title")])):x("",!0),r("div",he,[f(o.$slots,"default")])])])],2))}},ge={},xe={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"};function ke(t,e){return l(),a("svg",xe,e[0]||(e[0]=[r("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"},null,-1)]))}const Ie=d(ge,[["render",ke]]);export{Se as A,je as C,Ie as D,re as I,Be as M,Ne as _,Me as a,Oe as b,be as c,N as d,P as u};

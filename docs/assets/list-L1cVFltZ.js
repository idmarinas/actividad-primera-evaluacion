import{o as u,a as f,w as o,b as t,d as e,_ as m,u as S,e as w,c as p,T as L,f as l,g as $,F as x,r as h,h as d,i as B,t as i,n as I,j as D,k as M}from"./index-Cg5nVZOc.js";import{u as T,a as j,b as N}from"./orders-BfuGO-KL.js";import{A as z}from"./add-mb2AeVf-.js";import{I as E,M as F,_ as O,C as V,a as A,b as P}from"./edit-BZ9c6_rY.js";import{_ as R,a as q}from"./edit-CjK8cYnT.js";const G={__name:"info",setup(C){return(_,n)=>(u(),f(m,{"button-style":"info",circle:!0},{default:o(()=>[t(E,{width:"24"}),n[0]||(n[0]=e("span",{class:"sr-only"},"Información",-1))]),_:1}))}},X={class:"flex flex-row justify-end"},H={class:"h-full flex items-center justify-center md:justify-end gap-2"},J={class:"flex gap-2"},ee={__name:"list",setup(C){const _=S(),n=T(),{modal:r,openModal:b,closeModal:y}=j(),v=w(()=>n.all());function k(g){n.remove(g),y()}return _.title="Lista de pedidos",(g,s)=>{const c=h("RouterLink");return u(),p(x,null,[e("div",X,[t(c,{to:{name:"order_add"},class:"not-prose"},{default:o(()=>[t(m,{"button-style":"success",class:"rounded-lg",icon:!0},{default:o(()=>[t(z,{width:"24"}),s[1]||(s[1]=d()),s[2]||(s[2]=e("span",null,"Crear pedido",-1))]),_:1})]),_:1})]),e("table",null,[s[3]||(s[3]=e("thead",null,[e("tr",{class:"flex flex-col md:table-row"},[e("th",null,"Cliente"),e("th",null,"Fecha pedido"),e("th",null,"Procesado"),e("th",null,"Servido"),e("th")])],-1)),t(L,{tag:"tbody",name:"list"},{default:o(()=>[(u(!0),p(x,null,B(v.value,a=>(u(),p("tr",{key:a,class:"flex flex-col md:table-row"},[e("td",null,i(a.client),1),e("td",null,i(new Date(a.orderDate).toLocaleString(Intl.Locale,l(N))),1),e("td",null,i(l(n).processById(a.id).toLocaleString(Intl.Locale,{style:"percent"})),1),e("td",null,[t(O,{style:I(a.served?"success":"danger")},{default:o(()=>[d(i(a.served?"Sí":"No"),1)]),_:2},1032,["style"])]),e("td",H,[t(c,{to:{name:"order_details",params:{id:a.id}},class:"not-prose"},{default:o(()=>[t(G)]),_:2},1032,["to"]),t(c,{to:{name:"order_edit",params:{id:a.id}},class:"not-prose"},{default:o(()=>[t(R)]),_:2},1032,["to"]),t(q,{onClick:K=>l(b)(a)},null,8,["onClick"])])]))),128))]),_:1})]),(u(),f($,{to:"body"},[t(F,{opened:l(r).opened,onClose:l(y)},{title:o(()=>[d(" ¿Seguro que desea borrar el pedido de "+i(l(r).item.client)+"? ",1)]),default:o(()=>[e("p",J,[e("span",{class:D(l(r).item.served?"text-green-500":"text-red-500")},[(u(),f(M(l(r).item.served?V:A),{width:"24"}))],2),d(" El pedido "+i(l(r).item.served?"ya":"no")+" se ha entregado ",1)]),t(P,{type:"warning"},{default:o(()=>s[4]||(s[4]=[d("Esto borrara el pedido así como las piezas asociadas al mismo y no es posible recuperar el pedido.")])),_:1})]),actions:o(()=>[t(m,{"button-style":"danger",class:"rounded-md",onClick:s[0]||(s[0]=a=>k(l(r).item))},{default:o(()=>s[5]||(s[5]=[d("Borrar")])),_:1})]),_:1},8,["opened","onClose"])]))],64)}}};export{ee as default};
//# sourceMappingURL=list-L1cVFltZ.js.map

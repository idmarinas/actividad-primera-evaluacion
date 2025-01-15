import{m as T,l as g,o as u,c as m,d as s,a as E,p as t,b as n,w as y,h as k,_,F as P,u as C,q as I,f as U,t as L,i as M}from"./index-Cg5nVZOc.js";import{A as w}from"./add-mb2AeVf-.js";import{c as A,u as B}from"./orders-BfuGO-KL.js";const N={class:"flex gap-3 items-center"},O={key:1,class:"flex-1 flex gap-0"},W={class:"col-span-full"},D={class:"grid grid-cols-3 gap-3"},z={class:"flex gap-3 items-center"},F={class:"flex gap-3 items-center"},G={class:"flex gap-3 items-center"},h={class:"flex gap-3 items-center"},q={class:"flex gap-3 items-center"},j={__name:"add",props:T({isEdit:Boolean},{id:{},idModifiers:{},order:{},orderModifiers:{},dimensionsLength:{},dimensionsLengthModifiers:{},dimensionsWidth:{},dimensionsWidthModifiers:{},dimensionsThickness:{},dimensionsThicknessModifiers:{}}),emits:["update:id","update:order","update:dimensionsLength","update:dimensionsWidth","update:dimensionsThickness"],setup(r){const x=A(),V=r,a=g(r,"id");g(r,"order");const l=g(r,"dimensionsLength"),v=g(r,"dimensionsWidth"),c=g(r,"dimensionsThickness");function p(){a.value=x.generatePieceId()}return($,d)=>(u(),m(P,null,[s("div",N,[d[7]||(d[7]=s("label",{for:"piece_id"},"Nº de pedido",-1)),V.isEdit?(u(),E(t,{key:0,type:"number",class:"rounded-lg flex-1",id:"piece_id",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=o=>a.value=o)},null,8,["modelValue"])):(u(),m("div",O,[n(t,{type:"number",readonly:"",class:"rounded-l-lg flex-1",id:"piece_id",modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=o=>a.value=o)},null,8,["modelValue"]),n(_,{class:"rounded-r-lg",onClick:d[2]||(d[2]=o=>p()),disabled:a.value!==void 0},{default:y(()=>d[6]||(d[6]=[k("Generar")])),_:1},8,["disabled"])]))]),s("div",W,[d[11]||(d[11]=s("h5",null,"Dimensiones",-1)),s("div",D,[s("div",z,[d[8]||(d[8]=s("label",{for:"piece_dimensions_length"},"Largo (cm)",-1)),n(t,{class:"rounded-lg flex-1",type:"number",id:"piece_dimensions_length",modelValue:l.value,"onUpdate:modelValue":d[3]||(d[3]=o=>l.value=o),step:"1"},null,8,["modelValue"])]),s("div",F,[d[9]||(d[9]=s("label",{for:"piece_dimensions_width"},"Ancho (cm)",-1)),n(t,{class:"rounded-lg flex-1",type:"number",id:"piece_dimensions_width",modelValue:v.value,"onUpdate:modelValue":d[4]||(d[4]=o=>v.value=o),step:"1"},null,8,["modelValue"])]),s("div",G,[d[10]||(d[10]=s("label",{for:"piece_dimensions_thickness"},"Grosor (cm)",-1)),n(t,{class:"rounded-lg flex-1",type:"number",id:"piece_dimensions_thickness",modelValue:c.value,"onUpdate:modelValue":d[5]||(d[5]=o=>c.value=o),step:"1"},null,8,["modelValue"])])])]),s("div",h,[d[12]||(d[12]=s("label",{for:"piece_id"},null,-1)),n(t,{type:"number",id:"piece_id"})]),s("div",q,[d[13]||(d[13]=s("label",{for:"piece_id"},null,-1)),n(t,{type:"number",id:"piece_id"})])],64))}},H={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},J={class:"flex gap-3 items-center"},K={key:1,class:"flex-1 flex gap-0"},Q={class:"flex gap-3 items-center"},R={class:"flex gap-3 items-center"},X={class:"flex gap-3 items-center"},Y={class:"flex-1"},Z={class:"flex gap-3 items-center"},ee={class:"flex items-center"},de={class:"col-span-full divide-y divide-gold-sand-500"},ne={__name:"add",props:{id:String},setup(r){const x=C(),V=r,a=B(),l=I(a.find(V.id));function v(){l.value.id=a.generateOrderId()}function c(){return l.value.id!==void 0}const p=c();function $(){if(l.value.pieces.length<1)return"Todavia no se han agregado piezas al pedido";let b=a.process(l);return`${b===void 0?"¿?":b.toLocaleString(Intl.Locale,{style:"percent"})}`}function d(){return l.value.id!==void 0}function o(){l.value.pieces.push({dimendions:{}}),console.log(l.value)}return x.title=p?"Editar pedido":"Crear pedido",(b,e)=>(u(),m("form",H,[e[14]||(e[14]=s("h2",{class:"col-span-full"},"Datos del pedido",-1)),s("div",J,[e[9]||(e[9]=s("label",{for:"order_id"},"Nº de pedido",-1)),U(p)?(u(),E(t,{key:0,type:"number",class:"rounded-lg flex-1",id:"order_id",modelValue:l.value.id,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value.id=i)},null,8,["modelValue"])):(u(),m("div",K,[n(t,{type:"number",readonly:"",class:"rounded-l-lg flex-1",id:"order_id",modelValue:l.value.id,"onUpdate:modelValue":e[1]||(e[1]=i=>l.value.id=i)},null,8,["modelValue"]),n(_,{class:"rounded-r-lg",onClick:e[2]||(e[2]=i=>v()),disabled:l.value.id!==void 0},{default:y(()=>e[8]||(e[8]=[k("Generar")])),_:1},8,["disabled"])]))]),s("div",Q,[e[10]||(e[10]=s("label",{for:"order_client"},"Cliente",-1)),n(t,{type:"text",class:"rounded-lg flex-1",id:"order_client",modelValue:l.value.client,"onUpdate:modelValue":e[3]||(e[3]=i=>l.value.client=i)},null,8,["modelValue"])]),s("div",R,[e[11]||(e[11]=s("label",{for:"order_date"},"Fecha pedido",-1)),n(t,{type:"datetime-local",class:"rounded-lg flex-1",id:"order_date",modelValue:l.value.dateOrder,"onUpdate:modelValue":e[4]||(e[4]=i=>l.value.dateOrder=i)},null,8,["modelValue"])]),s("div",X,[e[12]||(e[12]=s("label",null,"Procesado",-1)),s("div",Y,L($()),1)]),s("div",Z,[n(t,{type:"checkbox",class:"rounded-lg",id:"order_served",modelValue:l.value.served,"onUpdate:modelValue":e[5]||(e[5]=i=>l.value.served=i)},null,8,["modelValue"]),e[13]||(e[13]=s("label",{for:"order_served"},"Servido",-1))]),e[15]||(e[15]=s("h3",{class:"col-span-full"},"Piezas encargadas",-1)),s("div",ee,[n(_,{onClick:e[6]||(e[6]=i=>o()),"button-style":d()?"success":"warning",class:"rounded-lg",icon:!0,disabled:!d()},{default:y(()=>[n(w,{width:"24"}),k(" "+L(d()?"Añadir pieza":"Crea un ID para el pedido"),1)]),_:1},8,["button-style","disabled"])]),s("div",de,[(u(!0),m(P,null,M(l.value.pieces,(i,S)=>(u(),m("div",{key:S,class:"grid grid-cols-2 py-2"},[n(j,{isEdit:U(p),order:l.value.id,"onUpdate:order":e[7]||(e[7]=f=>l.value.id=f),id:i.id,"onUpdate:id":f=>i.id=f,"dimensions-length":i.dimendions.length,"onUpdate:dimensionsLength":f=>i.dimendions.length=f},null,8,["isEdit","order","id","onUpdate:id","dimensions-length","onUpdate:dimensionsLength"])]))),128))])]))}};export{ne as default};
//# sourceMappingURL=add-DVUkG64Y.js.map

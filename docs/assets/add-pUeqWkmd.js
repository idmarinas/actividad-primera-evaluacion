import{p as _,q as h,d as A,o as a,c as p,g as M,w as b,b as V,F as U,j as D,t as F,s as I,v as O,x as j,a as i,y as c,e as u,_ as N,u as R,z as G,h as q,A as H}from"./index-7ICxZEgW.js";import{A as J}from"./add-C8zTVXh2.js";import{_ as W}from"./alert-igvuwsM2.js";import{a as K,u as Q}from"./orders-D1XKvkAF.js";const X={class:"space-y-1"},Y={class:"col-span-2 flex gap-3 items-center"},Z={key:1,class:"flex-1 flex gap-0"},ee={class:"col-span-full"},se={class:"col-span-full grid grid-cols-3 gap-3"},le={class:"flex gap-3 items-center"},ie={class:"flex gap-3 items-center"},ne={class:"flex gap-3 items-center"},de={class:"flex gap-3 items-center"},oe={class:"flex gap-3 items-center"},te={class:"flex gap-3 items-center"},re={__name:"piece",props:_({isEdit:Boolean},{id:{},idModifiers:{},order:{},orderModifiers:{},dimensionsLength:{},dimensionsLengthModifiers:{},dimensionsWidth:{},dimensionsWidthModifiers:{},dimensionsThickness:{},dimensionsThicknessModifiers:{},color:{},colorModifiers:{},bothFaces:{type:Boolean},bothFacesModifiers:{},cut:{type:Boolean},cutModifiers:{},errors:{},errorsModifiers:{}}),emits:["update:id","update:order","update:dimensionsLength","update:dimensionsWidth","update:dimensionsThickness","update:color","update:bothFaces","update:cut","update:errors"],setup(v){const z=K(),S=v,y=h(v,"id"),k=h(v,"order"),n=h(v,"dimensionsLength"),T=h(v,"dimensionsWidth"),L=h(v,"dimensionsThickness"),E=h(v,"color"),C=h(v,"bothFaces",{set:g=>!!g}),$=h(v,"cut",{set:g=>!!g}),l=h(v,"errors"),B=A(()=>{let g=!0;for(let s in l.value)if(s==="dimensions")for(let w in l.value[s])l.value[s][w].length>0&&(g=!1);else l.value[s].length>0&&(g=!1);return g});function P(){y.value=z.generatePieceId()}return(g,s)=>{var w,m,e,t,f,x,d;return a(),p(U,null,[B.value?I("",!0):(a(),M(W,{key:0,type:"error",class:"col-span-full"},{title:b(()=>s[10]||(s[10]=[V(" La información de la pieza contiene errores ")])),default:b(()=>[(a(!0),p(U,null,D(l.value,o=>(a(),p("div",X,[(a(!0),p(U,null,D(o,r=>(a(),p("div",null,F(typeof r=="string"?r:r[0]),1))),256))]))),256))]),_:1})),O(i("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=o=>k.value=o)},null,512),[[j,k.value]]),i("div",Y,[s[12]||(s[12]=i("label",{for:"piece_id"},"Nº de pedido",-1)),S.isEdit?(a(),M(c,{key:0,error:((m=(w=l.value)==null?void 0:w.id)==null?void 0:m.length)>0,type:"number",readonly:"",class:"rounded-lg flex-1",id:"piece_id",modelValue:y.value,"onUpdate:modelValue":s[1]||(s[1]=o=>y.value=o)},null,8,["error","modelValue"])):(a(),p("div",Z,[u(c,{error:l.value.id.length>0,type:"number",readonly:"",class:"rounded-l-lg flex-1",id:"piece_id",modelValue:y.value,"onUpdate:modelValue":s[2]||(s[2]=o=>y.value=o)},null,8,["error","modelValue"]),u(N,{class:"rounded-r-lg",onClick:s[3]||(s[3]=o=>P()),disabled:y.value!==void 0},{default:b(()=>s[11]||(s[11]=[V("Generar")])),_:1},8,["disabled"])]))]),i("div",ee,[s[16]||(s[16]=i("h5",null,"Dimensiones",-1)),i("div",se,[i("div",le,[s[13]||(s[13]=i("label",{for:"piece_dimensions_length"},"Largo (cm)",-1)),u(c,{error:((t=(e=l.value)==null?void 0:e.dimensions.length)==null?void 0:t.length)>0,class:"rounded-lg flex-1",type:"number",id:"piece_dimensions_length",modelValue:n.value,"onUpdate:modelValue":s[4]||(s[4]=o=>n.value=o),step:"1"},null,8,["error","modelValue"])]),i("div",ie,[s[14]||(s[14]=i("label",{for:"piece_dimensions_width"},"Ancho (cm)",-1)),u(c,{error:((f=l.value)==null?void 0:f.dimensions.width.length)>0,class:"rounded-lg flex-1",type:"number",id:"piece_dimensions_width",modelValue:T.value,"onUpdate:modelValue":s[5]||(s[5]=o=>T.value=o),step:"1"},null,8,["error","modelValue"])]),i("div",ne,[s[15]||(s[15]=i("label",{for:"piece_dimensions_thickness"},"Grosor (cm)",-1)),u(c,{error:((x=l.value)==null?void 0:x.dimensions.thickness.length)>0,class:"rounded-lg flex-1",type:"number",id:"piece_dimensions_thickness",modelValue:L.value,"onUpdate:modelValue":s[6]||(s[6]=o=>L.value=o),step:"1"},null,8,["error","modelValue"])])])]),i("div",de,[s[17]||(s[17]=i("label",{for:"piece_color"},"Color chapado",-1)),u(c,{error:((d=l.value)==null?void 0:d.color.length)>0,class:"rounded-lg flex-1",type:"text",id:"piece_color",modelValue:E.value,"onUpdate:modelValue":s[7]||(s[7]=o=>E.value=o)},null,8,["error","modelValue"])]),i("div",oe,[u(c,{type:"checkbox",id:"piece_bothFaces",modelValue:C.value,"onUpdate:modelValue":s[8]||(s[8]=o=>C.value=o)},null,8,["modelValue"]),s[18]||(s[18]=i("label",{for:"piece_bothFaces"},"¿Ambas caras?",-1))]),i("div",te,[u(c,{type:"checkbox",id:"piece_cut",modelValue:$.value,"onUpdate:modelValue":s[9]||(s[9]=o=>$.value=o)},null,8,["modelValue"]),s[19]||(s[19]=i("label",{for:"piece_cut"},"¿Cortada?",-1))])],64)}}},ae={class:"space-y-1"},ue={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},me={class:"flex gap-3 items-center"},pe={key:1,class:"flex-1 flex gap-0"},fe={class:"flex gap-3 items-center"},ce={class:"flex gap-3 items-center"},ve={class:"flex gap-3 items-center"},ge={class:"flex-1"},he={class:"flex gap-3 items-center"},be={class:"col-span-full flex items-center gap-3"},ye={key:0,class:"flex-1 text-red-700"},Ve={class:"col-span-full grid grid-cols-1 divide-y-2 divide-gold-sand-500"},ke={class:"col-span-full flex gap-3 mb-3"},we={__name:"add",props:{id:String},setup(v){const z=H(),S=R(),y=v,k=Q(),n=G(k.find(y.id));n.value.served=n.value.serverd!==void 0;function T(){n.value.id=k.generateOrderId()}function L(){return n.value.id!==void 0}const E=L();function C(){var t,f;if(((f=(t=n.value)==null?void 0:t.pieces)==null?void 0:f.length)<1)return"Todavia no se han agregado piezas al pedido";let m=k.process(n.value);return`${m===void 0?"¿?":m.toLocaleString(Intl.Locale,{style:"percent"})}`}function $(){return n.value.id!==void 0}const l=G({invalid:[],id:[],client:[],orderDate:[],pieces:[]});function B(m){l.value.pieces[m]===void 0&&(l.value.pieces[m]={id:[],dimensions:{length:[],width:[],thickness:[]},color:[]})}function P(){n.value.pieces.push({order:n.value.id,dimensions:{},bothFaces:!1,cut:!1})}const g=A(()=>{let m=!0;for(let e in l.value){if(e==="pieces"){l.value[e].forEach(t=>{for(let f in t){if(f==="dimensions")for(let x in t[f])t[f][x].length>0&&(m=!1);t[f].length>0&&(m=!1)}});continue}l.value[e].length>0&&(m=!1)}return m});function s(){delete l.value.invalid,n.value.id===void 0||!Number.isInteger(n.value.id)?l.value.id=['Genera un Número de pedido usando el botón de "Generar" y consta de números enteros']:l.value.id=[],typeof n.value.client!="string"||n.value.client.length<5?l.value.client=["Se debe poner el nombre y apellidos de cliente y debe tener como mínimo 5 letras"]:l.value.client=[];const m=new Date(n.value.orderDate);isNaN(m.getTime())||new Date().getTime()<m.getTime()?l.value.orderDate=["La fecha no tiene un formato válido y no puede ser una fecha posterior a la fecha actual"]:l.value.orderDate=[],n.value.pieces.length<1?l.value.piecesEmpty=["Se debe poner como mínimo una pieza en el pedido"]:l.value.piecesEmpty=[],n.value.pieces.length>0&&n.value.pieces.forEach((e,t)=>{e.id===void 0||!Number.isInteger(e.id)?l.value.pieces[t].id=['Genera un Número para pieza usando el botón de "Generar"']:l.value.pieces[t].id=[],e.dimensions.length===void 0||!Number.isInteger(e.dimensions.length)||e.dimensions.length<1?l.value.pieces[t].dimensions.length=["El largo de la pieza tiene que estar definido ser un número entero y mayor que 0"]:l.value.pieces[t].dimensions.length=[],e.dimensions.width===void 0||!Number.isInteger(e.dimensions.width)||e.dimensions.width<1?l.value.pieces[t].dimensions.width=["El ancho de la pieza tiene que estar definido ser un número entero y mayor que 0"]:l.value.pieces[t].dimensions.width=[],e.dimensions.thickness===void 0||!Number.isInteger(e.dimensions.thickness)||e.dimensions.thickness<1?l.value.pieces[t].dimensions.thickness=["El grosor de la pieza tiene que estar definido ser un número entero y mayor que 0"]:l.value.pieces[t].dimensions.thickness=[]})}function w(){k.add(n.value),z.push({name:"order_details",params:{id:n.value.id}})}return S.title=E?"Editar pedido":"Crear pedido",(m,e)=>{var t,f,x;return a(),p(U,null,[!g.value&&!l.value.invalid?(a(),M(W,{key:0,type:"error"},{title:b(()=>e[9]||(e[9]=[V(" El formulario contiene errores ")])),default:b(()=>[(a(!0),p(U,null,D(l.value,(d,o)=>(a(),p("div",ae,[o!=="pieces"?(a(!0),p(U,{key:0},D(d,r=>(a(),p("div",null,F(r),1))),256)):I("",!0)]))),256))]),_:1})):I("",!0),i("form",ue,[e[19]||(e[19]=i("h2",{class:"col-span-full"},"Datos del pedido",-1)),i("div",me,[e[11]||(e[11]=i("label",{for:"order_id"},"Nº de pedido",-1)),q(E)?(a(),M(c,{key:0,type:"number",readonly:"",class:"rounded-lg flex-1",id:"order_id",modelValue:n.value.id,"onUpdate:modelValue":e[0]||(e[0]=d=>n.value.id=d)},null,8,["modelValue"])):(a(),p("div",pe,[u(c,{error:l.value.id.length>0,type:"number",readonly:"",class:"rounded-l-lg flex-1",id:"order_id",modelValue:n.value.id,"onUpdate:modelValue":e[1]||(e[1]=d=>n.value.id=d)},null,8,["error","modelValue"]),u(N,{class:"rounded-r-lg",onClick:e[2]||(e[2]=d=>T()),disabled:n.value.id!==void 0},{default:b(()=>e[10]||(e[10]=[V("Generar")])),_:1},8,["disabled"])]))]),i("div",fe,[e[12]||(e[12]=i("label",{for:"order_client"},"Cliente",-1)),u(c,{error:l.value.client.length>0,type:"text",class:"rounded-lg flex-1",id:"order_client",modelValue:n.value.client,"onUpdate:modelValue":e[3]||(e[3]=d=>n.value.client=d)},null,8,["error","modelValue"])]),i("div",ce,[e[13]||(e[13]=i("label",{for:"order_date"},"Fecha pedido",-1)),u(c,{error:l.value.orderDate.length>0,type:"datetime-local",class:"rounded-lg flex-1",id:"order_date",modelValue:n.value.orderDate,"onUpdate:modelValue":e[4]||(e[4]=d=>n.value.orderDate=d)},null,8,["error","modelValue"])]),i("div",ve,[e[14]||(e[14]=i("label",null,"Procesado",-1)),i("div",ge,F(C()),1)]),i("div",he,[u(c,{type:"checkbox",class:"rounded-lg",id:"order_served",modelValue:n.value.served,"onUpdate:modelValue":e[5]||(e[5]=d=>n.value.served=d)},null,8,["modelValue"]),e[15]||(e[15]=i("label",{for:"order_served"},"Servido",-1))]),e[20]||(e[20]=i("h3",{class:"col-span-full"},"Piezas encargadas",-1)),i("div",be,[u(N,{onClick:e[6]||(e[6]=d=>P()),"button-style":$()?"success":"warning",class:"rounded-lg",icon:!0,disabled:!$()},{default:b(()=>[u(J,{width:"24"}),V(" "+F($()?"Añadir pieza":"Crea un ID para el pedido"),1)]),_:1},8,["button-style","disabled"]),((f=(t=l.value)==null?void 0:t.piecesEmpty)==null?void 0:f.length)>0?(a(),p("div",ye,F(l.value.piecesEmpty[0]),1)):I("",!0)]),i("div",Ve,[(a(!0),p(U,null,D(n.value.pieces,(d,o)=>(a(),p("div",{key:o,class:"grid grid-cols-3 gap-3 py-3"},[V(F(B(o))+" ",1),u(re,{isEdit:q(E),id:d.id,"onUpdate:id":r=>d.id=r,"dimensions-length":d.dimensions.length,"onUpdate:dimensionsLength":r=>d.dimensions.length=r,"dimensions-width":d.dimensions.width,"onUpdate:dimensionsWidth":r=>d.dimensions.width=r,"dimensions-thickness":d.dimensions.thickness,"onUpdate:dimensionsThickness":r=>d.dimensions.thickness=r,color:d.color,"onUpdate:color":r=>d.color=r,"both-faces":d.bothFaces,"onUpdate:bothFaces":r=>d.bothFaces=r,cut:d.cut,"onUpdate:cut":r=>d.cut=r,errors:l.value.pieces[o],"onUpdate:errors":r=>l.value.pieces[o]=r},null,8,["isEdit","id","onUpdate:id","dimensions-length","onUpdate:dimensionsLength","dimensions-width","onUpdate:dimensionsWidth","dimensions-thickness","onUpdate:dimensionsThickness","color","onUpdate:color","both-faces","onUpdate:bothFaces","cut","onUpdate:cut","errors","onUpdate:errors"])]))),128))]),i("div",ke,[e[18]||(e[18]=i("div",{class:"flex-1"},null,-1)),u(N,{class:"rounded-lg",onClick:e[7]||(e[7]=d=>s())},{default:b(()=>e[16]||(e[16]=[V("Validar datos")])),_:1}),u(N,{"button-style":"success",class:"rounded-lg",disabled:!g.value||((x=l.value.invalid)==null?void 0:x.length)===0,onClick:e[8]||(e[8]=d=>w())},{default:b(()=>e[17]||(e[17]=[V("Guardar pedido")])),_:1},8,["disabled"])])])],64)}}};export{we as default};
//# sourceMappingURL=add-pUeqWkmd.js.map

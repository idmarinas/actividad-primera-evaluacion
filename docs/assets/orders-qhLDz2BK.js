import{B as v,l as p,C as O}from"./index-DH_JJOkS.js";const h=v("pieces-private",()=>{let n=m("pieces-private");const e=p(n);function u(){localStorage.setItem("pieces-private",JSON.stringify(e.value))}function i(a){let s=!1;return a.forEach(l=>{const f=e.value.indexOf(l);f>-1&&(e.value.splice(f,1),s=!0)}),s}function o(a){const s=e.value.indexOf(a);return s>-1?(e.value.splice(s,1),!0):!1}return{state:e,save:u,delPiecesOfOrder:i,remove:o}}),g=v("pieces",()=>{const n=h(),e=S();function u(t){let c=t.length*t.width*t.thickness;return c=c/1e6,c}function i(t,c){let d=c?2:1;return t.length*t.width*d/1e4}function o(){return n.state}function a(){n.save()}function s(t){return n.delPiecesOfOrder(t)?(n.save(),!0):!1}function l(t){return n.remove(t)?((n.state.filter(d=>d.order===t.order)||[]).length<1&&e.remove(e.findById(t.order)),n.save(),!0):!1}function f(t){return e.findById(t)}function r(t){return n.state.filter(c=>c.order===t)||[]}return{volume:u,area:i,all:o,save:a,delPiecesOfOrder:s,remove:l,findOrderOfPiece:f,findPiecesOfOrder:r}});function m(n){let e=localStorage.getItem(n);try{e=JSON.parse(e)}catch{e=!1}return e}const M={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1};function N(){const n=g(),e=p({opened:!1,item:{},order:{}});function u(o){e.value.opened=!0,e.value.item=o,e.value.order=n.findOrderOfPiece(o.order)}function i(){e.value.opened=!1,e.value.item={},e.value.order={}}return{modal:e,openModal:u,closeModal:i}}const P=v("orders-private",()=>{let n=m("orders-private");const e=p(n);function u(){localStorage.setItem("orders-private",JSON.stringify(e.value))}function i(o){const a=e.value.indexOf(o);return a>-1?(e.value.splice(a,1),!0):!1}return{state:e,save:u,remove:i}}),S=v("orders",()=>{const n=P(),e=g();function u(r){if(r.served===!0)return 1;r=s(r.id);let t=r.pieces.length;return r.pieces.filter(d=>d.cut===!0).length/t}function i(){return n.state}function o(){n.save()}function a(r){return r=s(r.id),(r.pieces.length<1||e.delPiecesOfOrder(r.pieces))&&n.remove(r)?(n.save(),!0):!1}function s(r){r=Number.parseInt(r);let t=l(r)||{};return t.pieces=e.findPiecesOfOrder(r),t}function l(r){return r=Number.parseInt(r),n.state.find(t=>t.id===r)}function f(){let r=O();for(console.log(l(r));l(r)!==void 0;)r=O();return r}return{process:u,all:i,save:o,remove:a,find:s,findById:l,generateOrderId:f}});export{N as a,M as b,g as c,S as u};

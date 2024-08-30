import{r as d,u as A,j as e}from"./index-BT5q1uEO.js";import{a as x}from"./index-BGnvf19c.js";import{F as r}from"./index.es-VUnbs4BQ.js";import{f as S,a as f,b as C,c as k,d as w,e as N}from"./index-DB5IPdYf.js";import{a as T}from"./CContainer-Dpcs0q8E.js";import{C as E,a as v,b as p,c as n,d as D,e as s}from"./CTable-DU8yYtLA.js";import{T as o}from"./Tooltip-zbgOvh9Q.js";import"./clsx-B-dksMZM.js";import"./DefaultLayout-CyWxgDsf.js";import"./index.esm-tvL4Yql9.js";import"./BillingInfo-b7LCQT_k.js";import"./cil-lock-locked-DmxpJbVL.js";const V=()=>{const[h,j]=d.useState([]),i=A();d.useEffect(()=>{c()},[]);const g=()=>{i("/ShopDetails")},c=async()=>{const t=localStorage.getItem("vendorID"),l=await x.get(`http://localhost:3002/api/ShopDetails/shop/${t}`);j(l.data)},b=async t=>{await x.delete(`http://localhost:3002/api/ShopDetails/deleteShop/${t}`),c()},m=async t=>{i("/listing",{state:{shopId:t}})},u=async t=>{i("/SpeciesSelect",{state:{id:t}})},y=async t=>{i("/Extension",{state:{id:t}})},a=async t=>{i("/Subscription",{state:{shopId:t}})};return e.jsxs("div",{className:"container mt-4",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("h2",{children:"Shop Listings"}),e.jsx(T,{color:"primary",className:"px-4",onClick:g,children:"Add Shops"})]}),e.jsxs(E,{className:"table mt-3",children:[e.jsx(v,{children:e.jsxs(p,{children:[e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"S.No"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Shop Name"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Owner Name"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Owner Email"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Contact Number"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Available From"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Available To"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Address"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Shop Logo"}),e.jsx(n,{scope:"col",style:{textAlign:"center"},children:"Action"})]})}),e.jsx(D,{children:h.map((t,l)=>e.jsxs(p,{children:[e.jsx(s,{style:{textAlign:"center"},children:l+1}),e.jsx(s,{style:{textAlign:"center"},children:t.shopName}),e.jsx(s,{style:{textAlign:"center"},children:t.ownerName}),e.jsx(s,{style:{textAlign:"center"},children:t.ownerEmail}),e.jsx(s,{style:{textAlign:"center"},children:t.contactNumber}),e.jsx(s,{style:{textAlign:"center"},children:t.availableFrom}),e.jsx(s,{style:{textAlign:"center"},children:t.availableTo}),e.jsx(s,{style:{textAlign:"center"},children:t.address}),e.jsx(s,{style:{textAlign:"center"},children:t.shopLogo?e.jsx("img",{src:`http://localhost:3002/${t.shopLogo}`,alt:"Shop Logo",style:{width:"50px",height:"50px"}}):"null"}),e.jsxs(s,{children:[e.jsx(o,{title:"Vies Species",children:e.jsx("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:()=>m(t._id),children:e.jsx(r,{icon:S,style:{color:"#007bff",fontSize:"20px"}})})}),e.jsx("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:()=>b(t._id),children:e.jsx(r,{icon:f,style:{color:"#fd2b2b",fontSize:"20px"}})}),t.isSubscription&&!t.isSubscriptionExpired?e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Add Species",children:e.jsx("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:()=>u(t._id),children:e.jsx(r,{icon:C,style:{color:"#28a745",fontSize:"20px"}})})}),e.jsx(o,{title:"Add Extensions",children:e.jsx("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:()=>y(t._id),children:e.jsx(r,{icon:k,fade:!0})})})]}):e.jsx(e.Fragment,{children:t.isSubscription&&t.isSubscriptionExpired?e.jsx(o,{title:"Upgrade Subscription",children:e.jsx("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:()=>a(t._id),children:e.jsx(r,{icon:w,style:{marginRight:"5px"}})})}):e.jsx(o,{title:"Go to Subscription",children:e.jsx("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:()=>a(t._id),children:e.jsx(r,{icon:N,style:{marginRight:"5px"}})})})})]})]},t.id))})]})]})};export{V as default};

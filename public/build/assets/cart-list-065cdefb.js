import{k as s,a as r,j as n,q as o,a5 as l,p as c,I as i}from"./app-cf1a612d.js";import{D as d}from"./Divider-7d3e5e4e.js";import{G as a}from"./Grid-d9a27d0e.js";import{D as x}from"./Delete-ec998d7c.js";import"./bootstrap-03a53c9f.js";import"./dividerClasses-73c3313b.js";const u=s(r("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle"),g=s(r("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle"),v={mb:2,p:2,borderRadius:3,bgcolor:"rgb(246,248,252)","& img":{width:"100%",height:200,borderRadius:3,boxShadow:10},"& .form-container":{p:2,borderRadius:2,mt:"auto",bgcolor:"rgba(255,255,255,0.7)"},"& .info-container":{display:"flex",flexDirection:"column"}},h=new Intl.NumberFormat,f=({model:e})=>{const[,{increase:t,decrease:m,remove:p}]=l();return r("div",{children:n(c,{sx:{display:"flex",alignItems:"center","& .amount":{width:30,textAlign:"center"}},children:[n(o,{variant:"caption",fontWeight:"bolder",color:"textSecondary",sx:{mr:"auto"},children:["Rp ",h.format(e.amount*e.price)]}),r(i,{onClick:()=>t(e),children:r(u,{color:"secondary"})}),r(o,{className:"amount",children:e.amount}),r(i,{onClick:()=>m(e),children:r(g,{color:"secondary"})}),r(i,{color:"error",onClick:()=>p(e),children:r(x,{})})]})})},b=({model:e})=>r(c,{sx:v,children:n(a,{container:!0,spacing:1,children:[r(a,{item:!0,xs:2,children:r("img",{src:e.img,alt:""})}),r(a,{item:!0,xs:10,className:"info-container",children:n(c,{sx:{px:3},children:[r(o,{variant:"h5",color:"textSecondary",children:e.title}),r(d,{sx:{mb:2}}),n(o,{fontWeight:"bolder",color:"textSecondary",children:["@ Rp ",h.format(e.price)]}),r("div",{className:"form-container",children:r(f,{model:e})})]})})]})}),y=()=>{const[e]=l();return n("div",{children:[e.map(t=>r(b,{model:t},t.id)),e.length?null:r(o,{align:"center",color:"textSecondary",children:"Keranjang anda kosong"})]})},D=e=>n("div",{children:[r(o,{variant:"h6",color:"textSecondary",children:"Keranjang belanja"}),r(d,{sx:{my:1}}),r(y,{})]});export{D as CartList};

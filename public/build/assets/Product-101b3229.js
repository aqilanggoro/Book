import{k as u,a as e,a5 as f,o as y,j as r,F as v,b as S,p as o,t as p,ab as x,q as a,r as b,I as k,v as B}from"./app-cf1a612d.js";import{BookCard as C}from"./index-68f22c8b.js";import{G as i}from"./Grid-d9a27d0e.js";import{D as g}from"./Divider-7d3e5e4e.js";import{A as w}from"./ArrowBack-947320b4.js";import"./bootstrap-03a53c9f.js";import"./dividerClasses-73c3313b.js";const z=u(e("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share"),I=u(e("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag"),A={"& img":{},"& > .head .img":{m:5,boxShadow:20,borderRadius:0,display:"flex","& img":{width:"100%",height:"100%",m:0,bgcolor:"red"}}},D=({img:t})=>e("div",{className:"img",children:e("img",{style:{height:400},src:t,alt:""})}),h=({title:t,children:n})=>r(i,{item:!0,xs:6,children:[e(a,{variant:"caption",color:"textSecondary",children:t}),e(a,{color:"textSecondary",children:n})]}),T={my:2,mx:2,mb:5,textAlign:"justify",p:5,borderRadius:5,bgcolor:"rgb(245,247,251)","& .text":{transition:"all ease 0.2s"},"& button":{textTransform:"capitalize",mt:2}},j=({description:t})=>{const[n,c]=b.useState(!1);return r(o,{sx:T,children:[e(a,{className:`text ${n?"":"truncate-description"}`,children:t}),e(o,{sx:{textAlign:"right"},children:e(p,{onClick:()=>c(!n),variant:"outlined",size:"small",children:n?"Tutup deskripsi":"Baca selengkapnya"})})]})},E=t=>{t.preventDefault(),B.get(t.target.getAttribute("href"))},N=t=>{const{title:n,author:c,pages:s,publisher:l,issue:m,isbn:d,description:V}=t;return r("div",{children:[r(i,{container:!0,spacing:1,sx:{mt:2},children:[e(i,{item:!0,xs:10,children:e(a,{sx:{textDecoration:"none"},onClick:E,component:"a",href:route("search",{keyword:c}),variant:"h6",color:"textSecondary",children:c})}),e(i,{item:!0,xs:2,children:e(k,{children:e(z,{})})})]}),e(g,{sx:{mt:2}}),e(a,{fontWeight:"bold",sx:{my:2},variant:"h2",children:n}),r("div",{children:[e(a,{color:"textSecondary",fontWeight:"bolder",children:"Detail buku"}),e(g,{sx:{mb:1}}),r(i,{container:!0,spacing:2,children:[e(h,{title:"Jumlah halaman",children:s}),e(h,{title:"Penerbit",children:l}),e(h,{title:"Tanggal terbit",children:m}),e(h,{title:"ISBN",children:d})]})]})]})},R=()=>e("div",{children:e(k,{onClick:()=>window.history.back(),children:e(w,{})})}),$=({product:t,recomendations:n})=>{const{title:c}=t,[,{add:s,exist:l}]=f(),[,m]=y();return m.withHeadElement(R),r(v,{children:[e(S,{title:`${c}`}),r(o,{sx:A,children:[r(i,{className:"head",container:!0,spacing:2,children:[e(i,{item:!0,xs:12,md:4,lg:3,children:e(D,{img:t.gramedia_thumb})}),e(i,{item:!0,xs:12,md:10,lg:9,children:e(N,{...t})})]}),e(o,{sx:{textAlign:"center"},children:e(p,{disabled:l(x.make(t)),onClick:()=>s(x.make(t)),sx:{textTransform:"none"},color:"secondary",startIcon:e(I,{}),variant:"contained",size:"large",children:"Tambah ke keranjang"})}),e(j,{...t}),r(o,{sx:{px:2},children:[e(a,{variant:"h5",children:"Rekomendasi"}),e(g,{sx:{my:2}}),e(o,{sx:{p:2,borderRadius:2},children:e(i,{container:!0,spacing:2,children:n.map(d=>b.createElement(C,{...d,md:2,lg:2,key:d.id}))})})]})]})]})};export{$ as default};

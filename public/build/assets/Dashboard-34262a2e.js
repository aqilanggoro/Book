import{o as i,j as e,F as m,a as r,b as d,p as n,x as p}from"./app-cf1a612d.js";import{O as c}from"./OrderView-05d87fb3.js";import{B as l}from"./BackControl-f08379d9.js";import{G as o}from"./Grid-d9a27d0e.js";import"./bootstrap-03a53c9f.js";import"./Divider-7d3e5e4e.js";import"./dividerClasses-73c3313b.js";import"./ArrowBack-947320b4.js";const u=()=>{const{orders:s}=p().props;return r("div",{children:s.map(t=>r(c,{model:t},t.id))})};function D({auth:s,orders:t}){const[,a]=i();return a.withHeadElement(l),e(m,{children:[r(d,{title:"Dashboard"}),r(n,{sx:{px:2},children:e(o,{container:!0,sx:{mt:3},children:[r(o,{item:!0,xs:8,children:r(u,{})}),r(o,{item:!0,xs:4})]})})]})}export{D as default};

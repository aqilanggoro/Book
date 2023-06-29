import{c as U,g as _,r as c,s as d,M as K,N as X,h as t,_ as i,P,n as Y,O as H,d as V,Q,a as r,f,i as q,R as G,k as J,j as Z,t as ee}from"./app-cf1a612d.js";import{useOrderDetail as oe}from"./OrderDetailProvider-3532b69d.js";import{O as ae}from"./OrderView-05d87fb3.js";import"./bootstrap-03a53c9f.js";import"./Divider-7d3e5e4e.js";import"./dividerClasses-73c3313b.js";import"./Grid-d9a27d0e.js";function re(o){return _("MuiDialog",o)}const ie=U("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=ie,le=c.createContext({}),te=le,ne=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],se=d(K,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),pe=o=>{const{classes:e,scroll:a,maxWidth:l,fullWidth:s,fullScreen:u}=o,h={root:["root"],container:["container",`scroll${t(a)}`],paper:["paper",`paperScroll${t(a)}`,`paperWidth${t(String(l))}`,s&&"paperFullWidth",u&&"paperFullScreen"]};return q(h,re,e)},ce=d(X,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),de=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${t(a.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),ue=d(P,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${t(a.scroll)}`],e[`paperWidth${t(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`${o.breakpoints.values.xs}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),he=c.forwardRef(function(e,a){const l=Y({props:e,name:"MuiDialog"}),s=H(),u={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":h,"aria-labelledby":S,BackdropComponent:B,BackdropProps:M,children:$,className:w,disableEscapeKeyDown:W=!1,fullScreen:R=!1,fullWidth:T=!1,maxWidth:F="sm",onBackdropClick:C,onClose:m,open:D,PaperComponent:N=P,PaperProps:v={},scroll:A="paper",TransitionComponent:I=G,transitionDuration:y=u,TransitionProps:j}=l,O=V(l,ne),p=i({},l,{disableEscapeKeyDown:W,fullScreen:R,fullWidth:T,maxWidth:F,scroll:A}),x=pe(p),g=c.useRef(),z=n=>{g.current=n.target===n.currentTarget},E=n=>{g.current&&(g.current=null,C&&C(n),m&&m(n,"backdropClick"))},b=Q(S),L=c.useMemo(()=>({titleId:b}),[b]);return r(ce,i({className:f(x.root,w),closeAfterTransition:!0,components:{Backdrop:se},componentsProps:{backdrop:i({transitionDuration:y,as:B},M)},disableEscapeKeyDown:W,onClose:m,open:D,ref:a,onClick:E,ownerState:p},O,{children:r(I,i({appear:!0,in:D,timeout:y,role:"presentation"},j,{children:r(de,{className:f(x.container),onMouseDown:z,ownerState:p,children:r(ue,i({as:N,elevation:24,role:"dialog","aria-describedby":h,"aria-labelledby":b},v,{className:f(x.paper,v.className),ownerState:p,children:r(te.Provider,{value:L,children:$})}))})}))}))}),me=he,xe=J(r("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ve=()=>{const[{open:o,model:e},{close:a,prepare:l}]=oe();return r(me,{open:o,onClose:a,PaperProps:{sx:{bgcolor:"transparent",boxShadow:0}},children:e?Z("div",{children:[r("div",{style:{textAlign:"right"},children:r(ee,{onClick:a,size:"small",sx:{mb:2,borderRadius:2},color:"error",variant:"contained",startIcon:r(xe,{}),children:"Tutup"})}),r(ae,{model:e})]}):null})};export{ve as OrderDetailModal};
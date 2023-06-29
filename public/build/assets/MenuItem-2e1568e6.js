import{c as P,g as T,s as w,B as F,l as G,_ as r,y as C,m as d,z as x,r as c,n as S,d as U,L as $,A as _,C as j,a as I,f as M,i as z}from"./app-cf1a612d.js";import{d as O}from"./dividerClasses-73c3313b.js";function E(e){return T("MuiMenuItem",e)}const H=P("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),i=H,D=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,s)=>{const{ownerState:a}=e;return[s.root,a.dense&&s.dense,a.divider&&s.divider,!a.disableGutters&&s.gutters]},A=e=>{const{disabled:s,dense:a,divider:t,disableGutters:l,selected:p,classes:o}=e,n=z({root:["root",a&&"dense",s&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},E,o);return r({},o,n)},q=w(F,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:s})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${i.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${i.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${x.root}`]:{marginTop:0,marginBottom:0},[`& .${x.inset}`]:{paddingLeft:36},[`& .${C.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${C.root} svg`]:{fontSize:"1.25rem"}}))),J=c.forwardRef(function(s,a){const t=S({props:s,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:n=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:f,className:B}=t,V=U(t,D),v=c.useContext($),m=c.useMemo(()=>({dense:o||v.dense||!1,disableGutters:n}),[v.dense,o,n]),u=c.useRef(null);_(()=>{l&&u.current&&u.current.focus()},[l]);const L=r({},t,{dense:m.dense,divider:g,disableGutters:n}),b=A(t),N=j(u,a);let y;return t.disabled||(y=f!==void 0?f:-1),I($.Provider,{value:m,children:I(q,r({ref:N,role:R,tabIndex:y,component:p,focusVisibleClassName:M(b.focusVisible,k),className:M(b.root,B)},V,{ownerState:L,classes:b}))})}),X=J;export{X as M};

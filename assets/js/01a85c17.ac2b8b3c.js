"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8412],{9452:(e,t,s)=>{s.d(t,{c:()=>v});var a=s(1504),i=s(5456),r=s(7468),n=s(1432),l=s(867),c=s(4357),o=s(5592),m=s(3376);function d(e){const{pathname:t}=(0,o.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Sc)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=s(7624);function h(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.c)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.c)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.c)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.c,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var b=s(5168);function p(e){let{sidebar:t}=e;const s=d(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(b.Mx,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,n.U)();return t?.items.length?"mobile"===s?(0,g.jsx)(j,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...n}=e,l=t&&t.items.length>0;return(0,g.jsx)(r.c,{...n,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.c)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,g.jsx)("div",{className:"col col--2",children:s})]})})})}},3024:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(1504);var a=s(5456),i=s(4357);const r=()=>(0,i.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=s(5008),l=s(5864),c=s(9452),o=s(3020),m=s(4068);const d={tag:"tag_Nnez"};var u=s(7624);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(m.c,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(o.c,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var b=s(8712);function p(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(n.cr,{className:(0,a.c)(l.W.wrapper.blogPages,l.W.page.blogTagsListPage),children:[(0,u.jsx)(n.U7,{title:i}),(0,u.jsx)(b.c,{tag:"blog_tags_list"}),(0,u.jsxs)(c.c,{sidebar:s,children:[(0,u.jsx)(m.c,{as:"h1",children:i}),(0,u.jsx)(h,{tags:t})]})]})}},3020:(e,t,s)=>{s.d(t,{c:()=>l});s(1504);var a=s(5456),i=s(867);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(7624);function l(e){let{permalink:t,label:s,count:l}=e;return(0,n.jsxs)(i.c,{href:t,className:(0,a.c)(r.tag,l?r.tagWithCount:r.tagRegular),children:[s,l&&(0,n.jsx)("span",{children:l})]})}}}]);
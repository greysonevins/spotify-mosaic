(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{262:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(0),r=a.n(i),l=a(52),c=a(239),s=a(231),o=a(22),u=a.n(o),m=a(235),f=a(236),d=a(46),b=a(229),h=a(258),g=a(1),p=a(2),y=(a(5),a(3)),E=a(4),j=a(125),O=i.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,l=e.focusVisibleClassName,c=Object(p.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(j.a,Object(g.a)({className:Object(y.default)(n.root,r),focusVisibleClassName:Object(y.default)(l,n.focusVisible),ref:t},c),a,i.createElement("span",{className:n.focusHighlight}))})),k=Object(E.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(O),C=a(243),v=a(242),N=a(109),S=Object(N.a)((function(e){return{card:{maxWidth:500,margin:e.spacing(2)},media:{height:190}}}));function w(e){var t=e.setSearchState,a=e.data,n=S();return r.a.createElement(m.a,{className:n.card},r.a.createElement(f.a,{title:r.a.createElement(d.a,null,a.name),subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,a.owner.display_name," ",a.tracks.total),r.a.createElement(b.a,{href:a.external_urls.spotify,target:"_blank"},"Link Here"))}),r.a.createElement(h.a,{title:"Click to Create Mosaic from this Playlist","aria-label":"add"},r.a.createElement(k,{onClick:function(){return t({playlist:a.id,playlistInfo:a})}},r.a.createElement(C.a,{className:n.media,style:{height:0,paddingTop:"56.25%"},image:a.images&&a.images.length>0?a.images[0].url:null}),r.a.createElement(v.a,null,r.a.createElement(s.a,{onClick:function(){return t({playlist:a.id})},variant:"outlined"},"Click to Create Mosaic Fom Playlist")))))}function V(e){var t,a=e.query,o=e.type,m=e.Bearer,f=e.setSearchState,d=Object(i.useState)(""),b=Object(n.a)(d,2),h=b[0],g=b[1],p=Object(i.useState)(null),y=Object(n.a)(p,2),E=y[0],j=y[1],O=Object(i.useState)(0),k=Object(n.a)(O,2),C=k[0],v=k[1],N=Object(i.useState)(0),S=Object(n.a)(N,2),V=S[0],x=S[1];return Object(i.useEffect)((function(){if(a&&C!==V){var e=u.a.stringify({query:a,type:o,offset:C}),t=Object(l.c)(Object(l.b)(e,{Authorization:"Bearer ".concat(m)}));j(t),x(C)}else if(a&&a!==h){var n=u.a.stringify({query:a,type:o,offset:C}),i=Object(l.c)(Object(l.b)(n,{Authorization:"Bearer ".concat(m)}));j(i),g(a)}else j(null)}),[a,C]),E&&(t=E.read(),console.log(t,"ran")),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},!!t&&!!t.playlists&&t.playlists.items.length>0&&r.a.createElement(r.a.Fragment,null,t.playlists.items.map((function(e,t){return r.a.createElement(c.a,{item:!0,key:t,xs:12,md:4,lg:4},r.a.createElement(w,{key:t,setSearchState:f,data:e}))})))),!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(s.a,{disabled:0===C,onClick:function(){return v((function(e){return e-1}))}},"Last Page"),r.a.createElement(s.a,{disabled:20*(C+1)>=t.total,onClick:function(){return v((function(e){return e+1}))}},"Next Page"))))}a.d(t,"default",(function(){return V}))}}]);
//# sourceMappingURL=3.fa584bc4.chunk.js.map
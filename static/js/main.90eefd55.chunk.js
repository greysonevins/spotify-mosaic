(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{137:function(e,t,a){e.exports=a.p+"static/media/spotify_load_1.f63a638c.gif"},153:function(e,t,a){e.exports=a(247)},158:function(e,t,a){},159:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),c=(a(158),a(301)),o=a(302),s=a(251),u=a(48),m=a(285),p=a(281),h=a(282),d=a(288),f=(a(159),a(17)),g=a(13),y=a(27),E=a.n(y),b=a(33),v=a.n(b),S=a(56),w={},j={loading:!1,errorReq:!0,result:null,loaded:!1},O=function(e){var t=e.memoize,a=void 0!==t&&t,r=e.params,l=Object(n.useState)(null),i=Object(g.a)(l,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){var e=b.CancelToken.source(),t=S.a.get(void 0,{cancelToken:e.token}).then((function(e){o(e.data)})).catch((function(e){if(Object(b.isCancel)(e)||o(j),!Object(b.isCancel)(e))throw e}));return a&&(w[void 0]=t),function(){e.cancel()}}),[r]),{data:c,loading:null===c}},C=a(93),I=a.n(C),k=(a(179),{pictureId:null,pictureMosaic:null,firstLogin:!1,playlist:null,playlistSearch:"Your Top 2019 Songs",playlistId:null,pictureName:null,picture:null,type:"playlist",selectedPlaylist:null,page:0,code:null,Bearer:null,RefreshToken:null,playlistInfo:null,trueColor:!0,expires_at:null,tiles:12}),x={results:null,loading:!1},T={url:"/"},N=r.a.createContext(k),_=a(300),B=a(276);function F(e){e.setSearchState;var t="".concat("https://greysonevins.github.io/spotify-mosaic/#","/login");console.log(t);var a=E.a.stringify({client_id:"b12abcf1f76947fb93d3fb6946f1668f",client_secret:"f7e3e689144e49ca8aed031b425ca8f1",response_type:"code",redirect_uri:t,scope:"user-read-private user-read-email"}),n="https://accounts.spotify.com/authorize?".concat(a);return r.a.createElement(B.a,{href:n},r.a.createElement(s.a,{variant:"contained",style:{backgroundColor:"#1ed761",minWidth:"100%",minHeight:"5vh"}},"Login"))}var z=a(278),L=a(279),P=a(307),R=a(119),M=a(77),D=a.n(M),W=a(120),H=a(303),A=a(306),V=a(75),G=a.n(V),q=a(132),U=Object(R.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function Y(e){var t=e.setSearchState,a=U(),l=Object(n.useState)([]),i=Object(g.a)(l,2),c=i[0],o=(i[1],Object(n.useState)(!1)),u=Object(g.a)(o,2),m=u[0],p=u[1],h=Object(n.useState)(!1),d=Object(g.a)(h,2),f=d[0],y=d[1];return Object(n.useEffect)((function(){console.log(c)}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"raised-button-file",type:"file",onChange:function(e){var a=!0;p(!0),G.a.getData(e.target.files[0],(function(){var e=G.a.pretty(this);a=!!e})),a?Object(q.getBase64Strings)(e.target.files,{maxSize:2e3}).then((function(e){console.log(e),t({picture:e[0],pictureId:Object(A.a)()}),p(!1)})).catch((function(e){console.log(e),t({picture:null,pictureId:null}),y(!0),p(!1)})):function(e){var t=e.target.files[0];return new Promise((function(e,a){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.onerror=function(e){a(e)},n.readAsDataURL(t)}))}(e).then((function(e){t({picture:e,pictureId:Object(A.a)()}),p(!1)})).catch((function(e){t({picture:null,pictureId:null}),p(!1),y(!0)}))}}),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(s.a,{variant:"contained",color:"primary",component:"span"},"Upload")),r.a.createElement(z.a,{className:a.backdrop,open:m},r.a.createElement(L.a,{color:"inherit"})),r.a.createElement(P.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:f,autoHideDuration:6e3,onClose:function(){return y(!1)},action:r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return y(!1)}},r.a.createElement(D.a,{fontSize:"small"})))},r.a.createElement(H.a,{onClose:function(){return y(!1)},severity:"error"},"Error Uploading Selected Image")))}var J=a(143),$=a(284),K=a(283),Z=Object(R.a)((function(e){return{card:{maxWidth:345,margin:e.spacing(2)},media:{height:190}}})),Q=function(){var e=Z();return r.a.createElement(p.a,{className:e.card},r.a.createElement(h.a,{title:r.a.createElement(K.a,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:r.a.createElement(K.a,{animation:"wave",height:10,width:"40%"})}),r.a.createElement(K.a,{animation:"wave",variant:"rect",className:e.media}),r.a.createElement($.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(K.a,{animation:"wave",height:10,width:"80%"}))))};function X(){return console.log("Called"),r.a.createElement(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},Object(J.a)(Array(20)).map((function(e,t){return r.a.createElement(m.a,{key:t,item:!0,xs:12,md:6,lg:4},r.a.createElement(Q,null))})))}var ee=a(136),te=a.n(ee),ae=a(308),ne=a(309),re=a(310),le=a(287),ie=a(311),ce=a(289),oe=a(305),se=Object(R.a)((function(e){return{search:{width:"100%"}}}));function ue(e){var t=e.setSearchState,a=(e.playlistSearch,se()),l=Object(n.useState)(""),i=Object(g.a)(l,2),c=i[0],o=i[1];return r.a.createElement(oe.a,{className:a.search,value:c,placeholder:"Search Playlist",onChange:function(e){o(e.target.value),c&&t({playlistSearch:e.target.value})},onKeyDown:function(e){var a;"Enter"===(a=e).key&&a.target.value&&(o(""),t({playlistSearch:a.target.value}))}})}var me=Object(R.a)((function(e){return{card:{minWidth:"100%"},slider:{width:"100%"},media:{height:300},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function pe(e){var t=e.children,a=e.open,n=e.value;return r.a.createElement(ae.a,{open:a,enterTouchDelay:0,placement:"top",title:n},t)}var he=function(e){var t=e.loading,a=e.setSearchState,l=e.playlistSearchNeeded,i=void 0===l?null:l,c=e.playlistSearch,o=e.tiles,s=e.trueColor,p=e.classes,h=Object(n.useState)(o),f=Object(g.a)(h,2),y=(f[0],f[1]);return r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12},!t&&!!i&&r.a.createElement(ue,{setSearchState:a,playlistSearch:c})),r.a.createElement(m.a,{item:!0,xs:12,style:{paddingTop:10}},r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{id:"demo-simple-select-label",className:p.slider},"Number of Tiles : ",o," "),r.a.createElement(re.a,{className:p.slider,ValueLabelComponent:pe,min:3,max:100,onChange:function(e,t){return y(t)},onChangeCommitted:function(e,t){return a({tiles:t})},defaultValue:o}))),r.a.createElement(le.a,{style:{minWidth:300}}),r.a.createElement(m.a,{item:!0,xs:12,style:{margin:20}},r.a.createElement(ne.a,{id:"true-color"},"True Color Changes a random album cover to match the pixel color of the image"),r.a.createElement(d.a,null,r.a.createElement(u.a,null,"True Color: ",s?"On":"Off"),r.a.createElement(ie.a,{checked:s,onChange:function(){return a({trueColor:!s})},value:"checkedA"}))))};function de(e){e.picture;var t=e.src,a=e.setSearchState,l=e.tiles,i=e.playlistSearch,c=e.trueColor,o=Object(n.useState)(!1),m=Object(g.a)(o,2),f=m[0],y=(m[1],me());return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:y.card},r.a.createElement(d.a,null,r.a.createElement(s.a,{disabled:f,variant:"contained",color:"secondary",startIcon:r.a.createElement(te.a,null,"New Image"),onClick:function(e){return a({picture:null})}},"New Image")),r.a.createElement(h.a,{subheader:!!i&&r.a.createElement(u.a,null,r.a.createElement("b",null,"Current Search:")," ",i)}),f?r.a.createElement(K.a,{animation:"wave",variant:"rect",className:y.loadMedia}):r.a.createElement(ce.a,{style:{paddingTop:"56.25%",marginTop:"30"},className:y.media,image:t,title:"Your Image"}),r.a.createElement($.a,null,r.a.createElement(he,{loading:f,setSearchState:a,playlistSearchNeeded:!0,playlistSearch:i,tiles:l,trueColor:c,classes:y}))),r.a.createElement(z.a,{className:y.backdrop,open:f},r.a.createElement(L.a,{color:"inherit"})))}var fe=a(71),ge=a(130),ye=a(293),Ee=a(137),be=a.n(Ee),ve=a(140),Se=a.n(ve),we=a(141),je=a.n(we),Oe=a(139),Ce=a.n(Oe),Ie=a(294),ke=a(295),xe=a(91),Te=a.n(xe),Ne=a(92),_e=a.n(Ne),Be=a(138),Fe=a.n(Be),ze=Object(R.a)((function(e){return{card:{height:"100%",minHeight:"100%"},media:{height:"100%",width:"100%"},loadCard:{height:"100%",width:"100%"},loadMedia:{height:"100%",width:"100%"},slider:{width:"75%",margin:20}}}));function Le(e){var t=e.image,a=e.playlist,l=e.bearer,i=e.setSearchState,c=e.tiles,o=e.playlistInfo,s=e.trueColor,u=e.pictureId,m=Object(n.useState)(!1),p=Object(g.a)(m,2),h=p[0],d=p[1],f=Object(n.useState)(!1),y=Object(g.a)(f,2),b=(y[0],y[1]),S=Object(n.useState)(null),w=Object(g.a)(S,2),j=w[0],O=w[1],C=Object(n.useState)(!0),I=Object(g.a)(C,2),k=I[0],x=I[1],T=Object(n.useState)(!1),N=Object(g.a)(T,2),_=N[0],B=N[1];return Object(n.useEffect)((function(){if(t&&a&&l){x(!0);var e="createmosaic?"+E.a.stringify({playlist:a,bearer:l,tiles:c,trueColor:s,pictureId:u});d(!1),b(!1),v()({method:"POST",url:"".concat("https://greyson.pythonanywhere.com","/api/").concat(e),data:t,headers:{"Content-Type":"multipart/form-data; boundary=${form._boundary}"}}).then((function(e){O(e.data.pictureMosaic),i({pictureMosaic:e.data.pictureMosaic}),x(!1)})).catch((function(e){i({pictureMosaic:null}),x(!1),O(null),d(!0),b(!1)}))}else O(null)}),[t,a,l,c,s,u]),r.a.createElement(r.a.Fragment,null,!!j&&!k&&!h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{setSearchState:i,src:j,playlistInfo:o,fileName:j,loading:k,tiles:c,trueColor:s,error:!1,setViewImage:function(){return B(!0)}})),!j&&!k&&h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{setSearchState:i,src:"https://gifimage.net/wp-content/uploads/2018/11/funny-sad-face-gif-3.gif",playlistInfo:o,fileName:null,loading:k,tiles:c,trueColor:s,error:!0,setViewImage:!1})),!!k&&!h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,{setSearchState:null,src:null,playlistInfo:o,fileName:null,loading:k,tiles:null,trueColor:null,error:!1,setViewImage:null})),r.a.createElement(P.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:h,autoHideDuration:6e3,onClose:function(){return b(!1)},action:r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return b(!1)}},r.a.createElement(Te.a,{fontSize:"small"})))},r.a.createElement(_e.a,{onClose:function(){return b(!1)},severity:"error"},"Error with creating Mosaic, try new settings or start over")),!!j&&!k&&!h&&r.a.createElement(Fe.a,{imgs:[{src:j}],currImg:0,isOpen:_,onClose:function(){return B(!1)}}))}function Pe(e){var t=e.setSearchState,a=e.src,n=e.playlistInfo,l=(e.fileName,e.loading),i=void 0!==l&&l,c=e.tiles,o=void 0===c?null:c,f=e.trueColor,g=void 0===f?null:f,y=e.error,E=void 0!==y&&y,b=e.setViewImage,v=ze();return r.a.createElement(m.a,{container:!0,direction:"row",alignItems:"center",justify:"center",spacing:3,style:{padding:24}},r.a.createElement(m.a,{item:!0,xs:12,lg:8},r.a.createElement(p.a,{className:i?v.loadCard:v.card},i&&r.a.createElement(m.a,{container:!0,direction:i?"row":"column",alignItems:"center",justify:"center"},r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(h.a,{subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,"May take some time to load"))})),r.a.createElement(m.a,{xs:9},r.a.createElement(ce.a,{className:v.media,title:"Your Image",style:{height:0,paddingTop:"56.25%",marginTop:"30"},image:be.a}))),!i&&!E&&r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},r.a.createElement(m.a,{item:!0,xs:1},r.a.createElement(s.a,{startIcon:r.a.createElement(Ce.a,null,"Back"),onClick:function(){return t({playlist:null,playlistInfo:null})}},"Back")),!!a&!E&&r.a.createElement(m.a,{item:!0,xs:11,container:!0,justify:"flex-end"},r.a.createElement(m.a,{item:!0},r.a.createElement(Ie.a,null,r.a.createElement(s.a,{onClick:function(){return function(e){var t=document.createElement("a");t.href=e,t.download="mosaic.jpeg",t.click()}(a)},variant:"contained",color:"default",endIcon:r.a.createElement(Se.a,null,"Download")},"Download"),r.a.createElement(s.a,{onClick:b,variant:"contained",color:"primary",endIcon:r.a.createElement(je.a,null,"View")},"View")))))),!i&&!!n&&!E&&r.a.createElement(h.a,{subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,"Playlist: ",r.a.createElement(B.a,{href:n.external_urls.spotify},n.name)))}),!i&&!!E&&r.a.createElement(h.a,{subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,"There was an error creating this mosaic, try new settings or a new photo. Let me know. what happened"))}),!i&&r.a.createElement(he,{loading:i,setSearchState:t,playlistSearchNeeded:!1,playlistSearch:null,tiles:o,trueColor:g,classes:v}),!!a&&r.a.createElement(ke.a,{onClick:b},r.a.createElement(ce.a,{className:v.media,title:"Your Image",style:{height:0,paddingTop:"100%",marginTop:"30"},image:a})))))}var Re=a(304),Me=a(299),De=a(297),We=a(298),He=a(296),Ae=Object(R.a)((function(e){return{root:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3)}}}));function Ve(e){var t=e.firstLogin,a=(Ae(),Object(n.useState)(!1)),l=Object(g.a)(a,2),i=l[0],c=l[1];return Object(n.useEffect)((function(){c(t)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{title:"Get Info On App"},r.a.createElement(W.a,{size:"medium",color:"inherit",edge:"start"},r.a.createElement(D.a,{size:"medium",onClick:function(){return c(!0)}}))),r.a.createElement(Re.a,{open:i,onClose:function(){return c(!1)},scroll:"paper","aria-labelledby":"scroll-dialog-info"},r.a.createElement(He.a,null,"About Spotify Mosaic"),r.a.createElement(De.a,null,r.a.createElement(We.a,{dividers:!0},r.a.createElement(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(m.a,{item:3},r.a.createElement("b",null,"App by Greyson Nevins-Archer ")),r.a.createElement(le.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(m.a,{item:3},r.a.createElement(B.a,{href:"https://github.com/greysonevins/spotify-album-mosaic",target:"_blank"},"Git Repo")),r.a.createElement(le.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(m.a,{item:3},r.a.createElement(B.a,{href:"mailto:greyson.nevins@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email"))),r.a.createElement("br",null),r.a.createElement("p",{id:"app-info-description"},"This application uses your photo to create a mosaic from a selected Spotify playlist and image you provide. Spotify authentication is needed to get the seleced playlist you want. How it works is by taking your photo and dividing into tile values based on the number of tiles you want and generates an average color value for that pixel tile. Then based on that average color it will find the most similar cover photo average color to replace the image tile with an album cover. If you use True Color, a random cover album will be chosen and have a filter added to it to generate a more true color mosaic tile."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Playlist"),r.a.createElement("p",null,"Search for a playlist that you want to create a mosaic from and the application will grab all cover photos from this playlist to create the mosaic from. Playlist's with more songs will slow down the application speed but potenitally have more accurate colors to represent your image."),r.a.createElement("b",null,"Tiles"),r.a.createElement("p",null,"You can change the amount of tiles generated to see the mosaic represented in more or less cover photos."),r.a.createElement("br",null),r.a.createElement("b",null,"True Color"),r.a.createElement("p",null,"The True Color switch allows you to switch between two features of how the mosaic is created. Without True Color, the application generates tiles to match the destination image based on the provided cover photos from the playlist by finding the most similiar average color of the tile and the most similar average color of the playlist.",r.a.createElement("b",null,"With True Color")," instead of matching average color values, the tile is created by adding a filter to a random cover album photo to match the image's average color value for that pixel. This feature will alter the album cover photo but perserve the truest color of the original photo."),r.a.createElement("br",null))),r.a.createElement(Me.a,null,r.a.createElement(s.a,{onClick:function(){return c(!1)},color:"secondary"},"Close"))))}var Ge=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,312))})),qe=Object(fe.a)();qe=Object(ge.a)(qe);var Ue=Object(R.a)((function(e){return{card:{minHeight:200,minWidth:200,margin:e.spacing(2)},media:{height:300},appbar:{flexGrow:1},logout:{marginRight:e.spacing(2)},title:{flexGrow:1,marginRight:e.spacing(2),marginLeft:e.spacing(2)}}}));var Ye=function(e){var t=Ue(),a=Object(n.useContext)(N),l=a.searchState,i=a.updateState,f=(a.resultState,a.setResultsState,a.url),g=i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,null),r.a.createElement("div",{className:t.appbar},r.a.createElement(c.a,{position:"static",style:{color:"#000000",backgroundColor:"#bbdefb"}},r.a.createElement(o.a,null,l.code&&r.a.createElement(s.a,{color:"inherit",edge:"start",className:t.logout,onClick:function(){return g(null)}},"Logout"),r.a.createElement(ye.a,{theme:qe},r.a.createElement(u.a,{variant:"h6",className:t.title},"Spotify Mosaic")),r.a.createElement(Ve,{firstLogin:l.firstLogin&&("/login"===f.url||"/"===f.url)})))),!l.code&&r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"75vh",maxHeight:"100vh"}},r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{className:t.card},r.a.createElement(h.a,{title:r.a.createElement(u.a,{noWrap:!0},"Login To Spotify to Begin")}),r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(F,{setSearchState:g}))))))),l.Bearer&&!l.picture&&r.a.createElement(m.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"75vh",maxHeight:"100vh"}},r.a.createElement(m.a,{item:!0},r.a.createElement(p.a,{className:t.card},r.a.createElement(h.a,{title:r.a.createElement(u.a,null,"Upload Image to be Modified")}),r.a.createElement(d.a,null,r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:5},r.a.createElement(Y,{setSearchState:g}))))))),l.Bearer&&l.picture&&!l.playlist&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",style:{padding:24}},r.a.createElement(m.a,{item:!0,xs:12,md:4,lg:4},r.a.createElement(de,{picture:l.picture,src:l.picture,setSearchState:g,tiles:l.tiles,playlistSearch:l.playlistSearch,trueColor:l.trueColor}))),r.a.createElement(n.Suspense,{fallback:r.a.createElement(X,null)},r.a.createElement(Ge,{query:l.playlistSearch,type:l.type,Bearer:l.Bearer,setSearchState:g}))),!!l.Bearer&&!!l.picture&&!!l.playlist&&r.a.createElement(Le,{image:l.picture,playlist:l.playlist,bearer:l.Bearer,setSearchState:g,tiles:l.tiles,playlistInfo:l.playlistInfo,trueColor:l.trueColor,pictureId:l.pictureId}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=a(31),$e=a(144);a(243).config();var Ke=Object(Je.a)({basename:"spotify-mosaic/#"});i.a.render(r.a.createElement((function(e){var t=e.children.props.history,a=Object(n.useState)(k),l=Object(g.a)(a,2),i=l[0],c=l[1],o=Object(n.useState)(x),s=Object(g.a)(o,2),u=s[0],m=s[1],p=Object(n.useState)(T),h=Object(g.a)(p,2),d=h[0],y=h[1],b=O({memoize:!0,params:i}),v=b.data,S=b.loading;Object(n.useEffect)((function(){S?m((function(e){return Object(f.a)({},e,{loading:S})})):v&&m((function(e){return Object(f.a)({},e,{},v,{loading:S,errorReq:!1})}))}),[v,S]);var w=function(e){e||(c(Object(f.a)({},k)),t.push("/login")),c((function(t){return Object(f.a)({},t,{},e)})),I.a.isEqual(e,k)&&t.push("/login")};Object(n.useEffect)((function(){var e=null;return i.expires_at?e=setInterval((function(){var e=(new Date).getTime()/1e3;if(i.expires_at<=e)try{var t=(new Date).getTime()/1e3+3e3;console.log("Changed"),j({grant_type:"refresh_token",refresh_token:i.RefreshToken}).then((function(e){return w(Object(f.a)({},i,{Bearer:e.access_token,expires_at:t,firstLogin:!1}))})).catch((function(e){return c(Object(f.a)({},k))}))}catch(a){c(Object(f.a)({},k))}}),1e3):i.expires_at||clearInterval(e),function(){return clearInterval(e)}}),[i.expires_at]),Object(n.useEffect)((function(){var e=t.location.search.replace("?",""),a=t.location.pathname;if(console.log(t.location),"/spotify-mosaic/"!==a&&"/spotify-mosaic"!==a||t.location.hash)if(i.Bearer||e)if("/login"!==t.location.pathname&&"#%2Flogin"!==t.location.hash||!e)"/search"===t.location.pathname&&i.playlist?w(Object(f.a)({},i,{playlist:null,playlistInfo:null})):e||e.picture?!e&&e.picture?t.push("/createmosaic"):(c(Object(f.a)({},k)),t.push("/login")):t.push("/upload");else{var n=E.a.parse(e);console.log(n);var r=n.code,l=j({code:r,grant_type:"authorization_code"}),o=(new Date).getTime()/1e3+3e3;l.then((function(e){return c((function(t){return Object(f.a)({},t,{firstLogin:!1,code:r,Bearer:e.access_token,expires_at:o,RefreshToken:e.refresh_token})}))})),t.push("/upload")}else c(Object(f.a)({},k,{firstLogin:!0})),t.push("/login");else c(Object(f.a)({},k)),t.push("/login")}),[]);var j=function(e){var t=Object(f.a)({},e,{redirect_uri:"".concat("https://greysonevins.github.io/spotify-mosaic/#","/login"),client_id:"b12abcf1f76947fb93d3fb6946f1668f",client_secret:"f7e3e689144e49ca8aed031b425ca8f1"}),a=E.a.stringify(t);return fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:a}).then((function(e){return e.json()}))};return Object(n.useEffect)((function(){var e=t.location.search.replace("?",""),a=t.location.pathname;console.log(i);var n=function(e){var t=E.a.parse(e);return t.playlist=t.playlist?t.playlist:k.playlist,t.playlistSearch=t.playlistSearch?t.playlistSearch:k.playlistSearch,t.playlistId=t.playlistId?t.playlistId:k.playlistId,t.pictureName=t.pictureName?t.pictureName:k.pictureName,t.picture=t.picture?t.picture:k.picture,t.type=t.type?t.type:k.type,t.selectedPlaylist=t.selectedPlaylist?t.selectedPlaylist:k.selectedPlaylist,Object(f.a)({},i,{},t)}(e);if(!I.a.isEqual(n,i))if("/spotify-mosaic/"!==a&&"/spotify-mosaic"!==a||t.path.hash)if(i.Bearer)if(i.picture)if(i.playlist)if(i.playlist&&i.picture&&i.Bearer)y({url:"/createmosaic"}),t.push("/createmosaic");else{var r=E.a.stringify(i),l="?".concat(r);y({url:l}),t.push(l)}else y({url:"/search"}),t.push("/search");else y({url:"".concat("/spotify-mosaic","/upload")}),t.push("/upload");else y({url:"/login"}),t.push("/login");else y({url:"/login"}),t.push("/login")}),[i.playlist,i.picture,i.Bearer]),r.a.createElement(N.Provider,{value:{searchState:i,updateState:w,resultState:u,setResultsState:m,url:d}},e.children)}),null,r.a.createElement($e.a,{history:Ke},r.a.createElement(Ye,{history:Ke}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(17),r=a(33),l="https://greyson.pythonanywhere.com",i=a.n(r).a.create({baseURL:"".concat(l,"/api/")});function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"search",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l="".concat(r||"https://api.spotify.com/v1","/").concat(a,"?").concat(e);return fetch(l,{headers:Object(n.a)({"Content-Type":"application/json",Accept:"application/json"},t)}).then((function(e){return e.json()}))}function o(e){var t,a="pending",n=e.then((function(e){a="success",t=e}),(function(e){a="error",t=e}));return{read:function(){if("pending"===a)throw n;if("error"===a)throw t;if("success"===a)return t}}}}},[[153,1,2]]]);
//# sourceMappingURL=main.90eefd55.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,a){e.exports=a(202)},136:function(e,t,a){},137:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),c=(a(136),a(239)),o=a(231),s=a(235),u=a(236),m=a(46),p=a(242),h=(a(137),a(17)),d=a(12),f=a(22),g=a.n(f),y=a(33),E=a.n(y),b=a(52),v={},S={loading:!1,errorReq:!0,result:null,loaded:!1},j=function(e){var t=e.memoize,a=void 0!==t&&t,r=e.params,l=Object(n.useState)(null),i=Object(d.a)(l,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){var e=y.CancelToken.source(),t=b.a.get(void 0,{cancelToken:e.token}).then((function(e){o(e.data)})).catch((function(e){if(Object(y.isCancel)(e)||o(S),!Object(y.isCancel)(e))throw e}));return a&&(v[void 0]=t),function(){e.cancel()}}),[r]),{data:c,loading:null===c}},w=a(59),O=a.n(w),C=(a(157),{pictureId:null,pictureMosaic:null,firstLogin:!0,playlist:null,playlistSearch:"Your Top 2019 Songs",playlistId:null,pictureName:null,picture:null,type:"playlist",selectedPlaylist:null,page:0,code:null,Bearer:null,RefreshToken:null,playlistInfo:null,trueColor:!0,expires_at:null,tiles:75}),I={results:null,loading:!1},k={url:"https://greysonevins.github.io/spotify-mosaic/#"},x=r.a.createContext(C),T=a(252),_=a(229);function N(e){e.setSearchState;var t="".concat("https://greysonevins.github.io/spotify-mosaic/#","/login");console.log(t);var a=g.a.stringify({client_id:"b12abcf1f76947fb93d3fb6946f1668f",client_secret:"f7e3e689144e49ca8aed031b425ca8f1",response_type:"code",redirect_uri:t,scope:"user-read-private user-read-email"}),n="https://accounts.spotify.com/authorize?".concat(a);return r.a.createElement(_.a,{href:n},r.a.createElement(o.a,{variant:"contained",style:{backgroundColor:"#1ed761"}},"Login"))}var B=a(232),F=a(233),z=a(257),W=a(109),R=a(70),P=a.n(R),L=a(110),M=a(253),H=a(256),D=a(69),A=a.n(D),U=a(115),q=Object(W.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function Y(e){var t=e.setSearchState,a=q(),l=Object(n.useState)([]),i=Object(d.a)(l,2),c=i[0],s=(i[1],Object(n.useState)(!1)),u=Object(d.a)(s,2),m=u[0],p=u[1],h=Object(n.useState)(!1),f=Object(d.a)(h,2),g=f[0],y=f[1];return Object(n.useEffect)((function(){console.log(c)}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"raised-button-file",type:"file",onChange:function(e){var a=!0;p(!0),A.a.getData(e.target.files[0],(function(){var e=A.a.pretty(this);a=!!e})),a?Object(U.getBase64Strings)(e.target.files,{maxSize:2e3}).then((function(e){console.log(e),t({picture:e[0],pictureId:Object(H.a)()}),p(!1)})).catch((function(e){console.log(e),t({picture:null,pictureId:null}),y(!0),p(!1)})):function(e){var t=e.target.files[0];return new Promise((function(e,a){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.onerror=function(e){a(e)},n.readAsDataURL(t)}))}(e).then((function(e){t({picture:e,pictureId:Object(H.a)()}),p(!1)})).catch((function(e){t({picture:null,pictureId:null}),p(!1),y(!0)}))}}),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(o.a,{variant:"contained",color:"primary",component:"span"},"Upload")),r.a.createElement(B.a,{className:a.backdrop,open:m},r.a.createElement(F.a,{color:"inherit"})),r.a.createElement(z.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:g,autoHideDuration:6e3,onClose:function(){return y(!1)},action:r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return y(!1)}},r.a.createElement(P.a,{fontSize:"small"})))},r.a.createElement(M.a,{onClose:function(){return y(!1)},severity:"error"},"Error Uploading Selected Image")))}var G=a(120),J=a(238),V=a(237),$=Object(W.a)((function(e){return{card:{maxWidth:345,margin:e.spacing(2)},media:{height:190}}})),K=function(){var e=$();return r.a.createElement(s.a,{className:e.card},r.a.createElement(u.a,{title:r.a.createElement(V.a,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:r.a.createElement(V.a,{animation:"wave",height:10,width:"40%"})}),r.a.createElement(V.a,{animation:"wave",variant:"rect",className:e.media}),r.a.createElement(J.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{animation:"wave",height:10,style:{marginBottom:6}}),r.a.createElement(V.a,{animation:"wave",height:10,width:"80%"}))))};function Z(){return console.log("Called"),r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},Object(G.a)(Array(20)).map((function(e,t){return r.a.createElement(c.a,{key:t,item:!0,xs:6,md:4,lg:4},r.a.createElement(K,null))})))}var Q=a(258),X=a(259),ee=a(260),te=a(241),ae=a(261),ne=a(243),re=a(255);function le(e){var t=e.setSearchState,a=(e.playlistSearch,Object(n.useState)("")),l=Object(d.a)(a,2),i=l[0],c=l[1];return r.a.createElement(re.a,{value:i,placeholder:"Search Playlist",onChange:function(e){return c(e.target.value)},onKeyDown:function(e){var a;"Enter"===(a=e).key&&a.target.value&&(c(""),t({playlistSearch:a.target.value}))},style:{minWidth:300}})}var ie=Object(W.a)((function(e){return{card:{maxWidth:500,minWidth:400,margin:e.spacing(2)},media:{height:300},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function ce(e){var t=e.children,a=e.open,n=e.value;return r.a.createElement(Q.a,{open:a,enterTouchDelay:0,placement:"top",title:n},t)}var oe=function(e){var t=e.loading,a=e.setSearchState,l=e.playlistSearchNeeded,i=void 0===l?null:l,o=e.playlistSearch,s=e.tiles,u=e.trueColor,h=Object(n.useState)(s),f=Object(d.a)(h,2),g=(f[0],f[1]);return r.a.createElement(c.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(c.a,{item:!0,xs:12,style:{margin:20}},!t&&!!i&&r.a.createElement(le,{setSearchState:a,playlistSearch:o})),r.a.createElement(c.a,{item:!0,xs:12,style:{margin:20}},r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{id:"demo-simple-select-label"},"Number of Tiles : ",s," "),r.a.createElement(ee.a,{style:{minWidth:300},ValueLabelComponent:ce,min:3,max:100,onChange:function(e,t){return g(t)},onChangeCommitted:function(e,t){return a({tiles:t})},defaultValue:s}))),r.a.createElement(te.a,{style:{minWidth:300}}),r.a.createElement(c.a,{item:!0,xs:12,style:{margin:20}},r.a.createElement(X.a,{id:"true-color"},"Switch to True Color to keep albums matching original photo pixel"),r.a.createElement(p.a,null,r.a.createElement(m.a,null,"True Color: ",u?"On":"Off"),r.a.createElement(ae.a,{checked:u,onChange:function(){return a({trueColor:!u})},value:"checkedA"}))))};function se(e){e.picture;var t=e.src,a=e.setSearchState,l=e.tiles,i=e.playlistSearch,c=e.trueColor,h=Object(n.useState)(!1),f=Object(d.a)(h,2),g=f[0],y=(f[1],ie());return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:y.card},r.a.createElement(u.a,{subheader:!!i&&r.a.createElement(m.a,null,r.a.createElement("b",null,"Current Search:")," ",i)}),r.a.createElement(p.a,null,r.a.createElement(o.a,{disabled:g,variant:"contained",color:"secondary",onClick:function(e){return a({picture:null})}},"New Image")),g?r.a.createElement(V.a,{animation:"wave",variant:"rect",className:y.loadMedia}):r.a.createElement(ne.a,{className:y.media,image:t,title:"Your Image"}),r.a.createElement(J.a,null,r.a.createElement(oe,{loading:g,setSearchState:a,playlistSearchNeeded:!0,playlistSearch:i,tiles:l,trueColor:c}))),r.a.createElement(B.a,{className:y.backdrop,open:g},r.a.createElement(F.a,{color:"inherit"})))}var ue=a(84),me=a.n(ue),pe=a(85),he=a.n(pe),de=Object(W.a)((function(e){return{card:{height:"100%",width:"100%",margin:e.spacing(2)},media:{minHeight:"50vh",minWidth:"50vh",maxWidth:"75vh",maxHeight:"75vh"},loadCard:{minHeight:500,minWidth:400,margin:e.spacing(2)},loadMedia:{minHeight:300,minWidth:300}}}));function fe(e){var t=e.image,a=e.playlist,l=e.bearer,i=e.setSearchState,c=e.tiles,o=e.playlistInfo,s=e.trueColor,u=e.pictureId,m=Object(n.useState)(!1),p=Object(d.a)(m,2),h=p[0],f=p[1],y=Object(n.useState)(null),b=Object(d.a)(y,2),v=b[0],S=b[1],j=Object(n.useState)(!1),w=Object(d.a)(j,2),O=w[0],C=w[1];return Object(n.useEffect)((function(){if(t&&a&&l){C(!0);var e="createmosaic?"+g.a.stringify({playlist:a,bearer:l,tiles:c,trueColor:s,pictureId:u});E()({method:"POST",url:"".concat("https://greyson.pythonanywhere.com","/api/").concat(e),data:t,headers:{"Content-Type":"multipart/form-data; boundary=${form._boundary}"}}).then((function(e){i({pictureMosaic:e.data.pictureMosaic}),S(e.data.pictureMosaic),C(!1),f(!1)})).catch((function(e){i({pictureMosaic:null}),C(!1),S(null),f(!0)}))}else S(null)}),[t,a,l,c,s,u]),r.a.createElement(r.a.Fragment,null,!!v&&!O&&!h&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{setSearchState:i,src:v,playlistInfo:o,fileName:v,loading:O,tiles:c,trueColor:s,error:!1})),!v&&!O&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{setSearchState:i,src:"https://gifimage.net/wp-content/uploads/2018/11/funny-sad-face-gif-3.gif",playlistInfo:o,fileName:null,loading:O,tiles:c,trueColor:s,error:!0})),!!O&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{setSearchState:null,src:null,playlistInfo:o,fileName:null,loading:O,tiles:null,trueColor:null,error:!1})),r.a.createElement(z.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:h,autoHideDuration:6e3,onClose:function(){return f(!1)},action:r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return f(!1)}},r.a.createElement(me.a,{fontSize:"small"})))},r.a.createElement(he.a,{onClose:function(){return f(!1)},severity:"error"},"Error with creating Mosaic, try new settings or start over")))}function ge(e){var t=e.setSearchState,a=e.src,n=e.playlistInfo,l=e.fileName,i=e.loading,h=void 0!==i&&i,d=e.tiles,f=void 0===d?null:d,g=e.trueColor,y=void 0===g?null:g,E=e.error,b=void 0!==E&&E,v=de();return r.a.createElement(c.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{margin:30}},r.a.createElement(c.a,{item:!0},r.a.createElement(s.a,{className:h?v.loadCard:v.card,style:h?{}:{minHeight:"50vh",minWidth:"50vh"}},!h&&!!n&&!b&&r.a.createElement(u.a,{subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,"Playlist: ",r.a.createElement(_.a,{href:n.external_urls.spotify},n.name)))}),h&&r.a.createElement(u.a,{subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,"May Take some time to load"))}),!h&&!!b&&r.a.createElement(u.a,{subheader:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,"There was an error creating this mosaic, try new settings or a new photo. Let me know. what happened"))}),!h&&r.a.createElement(p.a,null,r.a.createElement(o.a,{onClick:function(){return t({playlist:null,playlistInfo:null})}},"Back"),!!a&!b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:function(){return function(e,t){fetch(e).then((function(e){e.blob().then((function(e){var a=window.URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download=t,n.click()}))}))}(a,l)}},"Download"),r.a.createElement(_.a,{href:a,target:"_blank"},"See Image"))),!h&&r.a.createElement(oe,{loading:h,setSearchState:t,playlistSearchNeeded:!1,playlistSearch:null,tiles:f,trueColor:y}),h?r.a.createElement(V.a,{animation:"wave",variant:"rect",className:v.loadMedia}):a?r.a.createElement(_.a,{href:a,target:"_blank"},r.a.createElement(ne.a,{className:v.media,title:"Your Image",style:{height:0,padding:"56.25%"},image:a})):null)))}var ye=a(254),Ee=a(251),be=a(249),ve=a(250),Se=a(248),je=Object(W.a)((function(e){return{root:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3)}}}));function we(e){var t=e.firstLogin,a=(je(),Object(n.useState)(t)),l=Object(d.a)(a,2),i=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{title:"Get Info On App"},r.a.createElement(L.a,{size:"medium"},r.a.createElement(P.a,{size:"medium",onClick:function(){return s(!0)}}))),r.a.createElement(ye.a,{open:i,onClose:function(){return s(!1)},scroll:"paper","aria-labelledby":"scroll-dialog-info"},r.a.createElement(Se.a,null,"About Spotify Mosiac"),r.a.createElement(be.a,null,r.a.createElement(ve.a,{dividers:!0},r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(c.a,{item:3},r.a.createElement("b",null,"App by Greyson Nevins-Archer ")),r.a.createElement(te.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(c.a,{item:3},r.a.createElement(_.a,{href:"https://github.com/greysonevins/spotify-album-mosaic",target:"_blank"},"Git Repo")),r.a.createElement(te.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(c.a,{item:3},r.a.createElement(_.a,{href:"mailto:greyson.nevins@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email"))),r.a.createElement("br",null),r.a.createElement("p",{id:"app-info-description"},"This application uses your photo to create a mosaic from a selected Spotify playlist and image you provide. There is no personal information saved for this application. Just spotify authentication is needed to get the seleced playlist you want. How it works is by taking your photo and dividing into tile values based on the number of tiles you want and generates an average color value for that pixel tile. Then based on that average color it will find the most similar cover photo average color to replace the image tile with an album cover. If you use True Color, a random cover album will be chosen and have a filter added to it to generate a more true color mosaic tile."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Playlist"),r.a.createElement("p",null,"Search for a playlist that you want to create a mosaic from and the application will grab all cover photos from this playlist to create the mosaic from. Playlist's with more songs will slow down the application speed but potenitally have more accurate colors to represent your image."),r.a.createElement("b",null,"Tiles"),r.a.createElement("p",null,"You can change the amount of tiles generated to see the mosaic represented in more or less cover photos."),r.a.createElement("br",null),r.a.createElement("b",null,"True Color"),r.a.createElement("p",null,"The True Color switch allows you to switch between two features of how the mosaic is created. Without True Color, the application generates tiles to match the destination image based on the provided cover photos from the playlist by finding the most similiar average color of the tile and the most similar average color of the playlist.",r.a.createElement("b",null,"With True Color")," instead of matching average color values, the tile is created by adding a filter to a random cover album photo to match the image's average color value for that pixel. This feature will alter the album cover photo but perserve the truest color of the original photo."),r.a.createElement("br",null))),r.a.createElement(Ee.a,null,r.a.createElement(o.a,{onClick:function(){return s(!1)},color:"secondary"},"Close"))))}var Oe=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,262))})),Ce=Object(W.a)((function(e){return{card:{minHeight:200,minWidth:200,margin:e.spacing(2)},media:{height:300}}})),Ie={pictureMosaic:null,pictureId:null,playlist:null,firstLogin:!0,playlistSearch:"Your Top 2019 Songs",playlistId:null,pictureName:null,picture:null,type:"playlist",selectedPlaylist:null,page:0,code:null,Bearer:null,RefreshToken:null,playlistInfo:null,trueColor:!0,expires_at:null,tiles:75};var ke=function(e){var t=Ce(),a=Object(n.useContext)(x),l=a.searchState,i=a.updateState,h=(a.resultState,a.setResultsState,a.url,i);return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement(c.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},l.code&&r.a.createElement(c.a,{item:!0,style:{padding:20}},r.a.createElement(o.a,{onClick:function(){return h(null)}},"Logout/Reset")),r.a.createElement(c.a,{item:!0},r.a.createElement(we,{firstLogin:O.a.isEqual(l,Ie)}))),!l.code&&r.a.createElement(c.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(c.a,{item:!0},r.a.createElement(s.a,{className:t.card},r.a.createElement(u.a,{title:r.a.createElement(m.a,{noWrap:!0},"Login To Spotify to Begin")}),r.a.createElement(p.a,null,r.a.createElement(c.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(c.a,{item:!0,xs:5},r.a.createElement(N,{setSearchState:h}))))))),l.Bearer&&!l.picture&&r.a.createElement(c.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(c.a,{item:!0},r.a.createElement(s.a,{className:t.card},r.a.createElement(u.a,{title:r.a.createElement(m.a,null,"Upload Image to be Modified")}),r.a.createElement(p.a,null,r.a.createElement(c.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(c.a,{item:!0,xs:5},r.a.createElement(Y,{setSearchState:h}))))))),l.Bearer&&l.picture&&!l.playlist&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(se,{picture:l.picture,src:l.picture,setSearchState:h,tiles:l.tiles,playlistSearch:l.playlistSearch,trueColor:l.trueColor}))),r.a.createElement(n.Suspense,{fallback:r.a.createElement(Z,null)},r.a.createElement(Oe,{query:l.playlistSearch,type:l.type,Bearer:l.Bearer,setSearchState:h}))),!!l.Bearer&&!!l.picture&&!!l.playlist&&r.a.createElement(fe,{image:l.picture,playlist:l.playlist,bearer:l.Bearer,setSearchState:h,tiles:l.tiles,playlistInfo:l.playlistInfo,trueColor:l.trueColor,pictureId:l.pictureId}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=a(30),Te=a(121);a(198).config();var _e=Object(xe.a)({basename:"spotify-mosaic/#"});i.a.render(r.a.createElement((function(e){var t=e.children.props.history,a=Object(n.useState)(C),l=Object(d.a)(a,2),i=l[0],c=l[1],o=Object(n.useState)(I),s=Object(d.a)(o,2),u=s[0],m=s[1],p=Object(n.useState)(k),f=Object(d.a)(p,2),y=f[0],E=f[1],b="/spotify-mosaic",v=j({memoize:!0,params:i}),S=v.data,w=v.loading;Object(n.useEffect)((function(){w?m((function(e){return Object(h.a)({},e,{loading:w})})):S&&m((function(e){return Object(h.a)({},e,{},S,{loading:w,errorReq:!1})}))}),[S,w]);var T=function(e){e||(c(Object(h.a)({},C)),t.push("/login")),c((function(t){return Object(h.a)({},t,{},e)})),O.a.isEqual(e,C)&&t.push("/login")};Object(n.useEffect)((function(){var e=null;return i.expires_at?e=setInterval((function(){var e=(new Date).getTime()/1e3;if(i.expires_at<=e)try{var t=(new Date).getTime()/1e3+3e3;console.log("Changed"),_({grant_type:"refresh_token",refresh_token:i.RefreshToken}).then((function(e){return T(Object(h.a)({},i,{Bearer:e.access_token,expires_at:t}))})).catch((function(e){return c(Object(h.a)({},C))}))}catch(a){c(Object(h.a)({},C))}}),1e3):i.expires_at||clearInterval(e),function(){return clearInterval(e)}}),[i.expires_at]),Object(n.useEffect)((function(){var e=t.location.search.replace("?",""),a=t.location.pathname;if(console.log(t.location),"/spotify-mosaic/"!==a&&"/spotify-mosaic"!==a||t.location.hash)if(i.Bearer||e)if("/login"!==t.location.pathname&&"#%2Flogin"!==t.location.hash||!e)"/search"===t.location.pathname&&i.playlist?T(Object(h.a)({},i,{playlist:null,playlistInfo:null})):e||e.picture?!e&&e.picture?t.push("/createmosaic"):(c(Object(h.a)({},C)),t.push("/login")):t.push("/upload");else{var n=g.a.parse(e);console.log(n);var r=n.code,l=_({code:r,grant_type:"authorization_code"}),o=(new Date).getTime()/1e3+3e3;l.then((function(e){return T(Object(h.a)({},i,{code:r,Bearer:e.access_token,expires_at:o,RefreshToken:e.refresh_token}))})),t.push("/upload")}else c(Object(h.a)({},C)),t.push("/login");else c(Object(h.a)({},C)),t.push("/login")}),[]);var _=function(e){var t=Object(h.a)({},e,{redirect_uri:"".concat("https://greysonevins.github.io/spotify-mosaic/#","/login"),client_id:"b12abcf1f76947fb93d3fb6946f1668f",client_secret:"f7e3e689144e49ca8aed031b425ca8f1"}),a=g.a.stringify(t);return fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:a}).then((function(e){return e.json()}))};return Object(n.useEffect)((function(){var e=t.location.search.replace("?",""),a=t.location.pathname;console.log(i);var n=function(e){var t=g.a.parse(e);return t.playlist=t.playlist?t.playlist:C.playlist,t.playlistSearch=t.playlistSearch?t.playlistSearch:C.playlistSearch,t.playlistId=t.playlistId?t.playlistId:C.playlistId,t.pictureName=t.pictureName?t.pictureName:C.pictureName,t.picture=t.picture?t.picture:C.picture,t.type=t.type?t.type:C.type,t.selectedPlaylist=t.selectedPlaylist?t.selectedPlaylist:C.selectedPlaylist,Object(h.a)({},i,{},t)}(e);if(!O.a.isEqual(n,i))if("/spotify-mosaic/"!==a&&"/spotify-mosaic"!==a||t.path.hash)if(i.Bearer)if(i.picture)if(i.playlist)if(i.playlist&&i.picture&&i.Bearer)E({url:"/createmosaic"}),t.push("/createmosaic");else{var r=g.a.stringify(i),l="?".concat(r);E({url:l}),t.push(l)}else E({url:"/search"}),t.push("/search");else E({url:"".concat(b,"/upload")}),t.push("/upload");else E({url:"".concat(b,"/login")}),t.push("/login");else E({url:"".concat(b,"/login")}),t.push("/login")}),[i.playlist,i.picture,i.Bearer]),r.a.createElement(x.Provider,{value:{searchState:i,updateState:T,resultState:u,setResultsState:m,url:y}},e.children)}),null,r.a.createElement(Te.a,{history:_e},r.a.createElement(ke,{history:_e}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(17),r=a(33),l="https://greyson.pythonanywhere.com",i=a.n(r).a.create({baseURL:"".concat(l,"/api/")});function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"search",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l="".concat(r||"https://api.spotify.com/v1","/").concat(a,"?").concat(e);return fetch(l,{headers:Object(n.a)({"Content-Type":"application/json",Accept:"application/json"},t)}).then((function(e){return e.json()}))}function o(e){var t,a="pending",n=e.then((function(e){a="success",t=e}),(function(e){a="error",t=e}));return{read:function(){if("pending"===a)throw n;if("error"===a)throw t;if("success"===a)return t}}}}},[[131,1,2]]]);
//# sourceMappingURL=main.9493c9b8.chunk.js.map
const jo={};!function JetThemeScript(){var aA=window,an=document,b0=setTimeout,j=clearTimeout,aJ=Date,af=Math,bp=parseInt,cA=btoa,aq=escape,b3=unescape,aL=encodeURIComponent,aV=decodeURIComponent,u=RegExp,bg=XMLHttpRequest,bt=alert,p=localStorage,bk=JSON,ct=Image,cv=setInterval,av=clearInterval,M="forEach",ao="innerHTML",bL="tagName",b4="getElementById",bh="getElementsByClassName",bU="querySelector",cj="querySelectorAll",bR="documentElement",a6="childNodes",bz="createElement",C="className",F="replace",bb="indexOf",a9="lastIndexOf",cu="EventListener",aN="add",ab="remove",ba="id",bP="key",Z="type",y="parse",cl="length",bJ="call",v="slice",E="reset",bq="scroller",aU="push",ay="Time",n="Date",a0="Month",a="FullYear",aP="clientX",aM="clientY",aO="pageX",aK="pageY",ae="scrollLeft",aE="scrollTop",s="onreadystatechange",aX="readyState",cs="Attribute",ci="set",o="get",bd="post",cr="has",J="checked",aW="focus",ak="height",aR="offsetWidth",bi="offsetHeight",bm="toFixed",N="pageYOffset",cm="appendChild",m="firstChild",be="insert",aH="Before",I="value",cp="safe",T="match",bM="href",cf="src",bB="onload",bK="onerror",aw="target",a2="closest",at="location",W="split",bZ="trim",bj="open",b7="send",cn="random",am="status",bE="toString",g="parentElement",bO="activeElement",aF="preventDefault",ac="substr",cG="setRequestHeader",K="responseText",bn="response",O="body",aB="title",by="test",G="container",b="ceil",bC="floor",bT="round",z="min",cd="map",br="cookie",bF="contains",az="toUTCString",aS="textContent",bf="elementFromPoint",ax="Item",x="nextSibling",aa="load",bA="true",b5="false",k="valid",a7="scroll",Q="click",h="submit",r="blur",bG="mousemove",bl="mouseup",bQ="touchstart",d="mousedown",cq="change",a3="complete",ag="undefined",bI="function",bW="Content-Type",ch="text/html",f="application/x-www-form-urlencoded",aD="pagination",b9="loadCustomPosts",a1="custom_posts",cb="config",U="adsbygoogle",t="analytics",cy="jet",aT="https://",bS="www.blogger.com/",a8="-rw",aQ="devicePixelRatio",b1="mount",L=typeof isPreview!==ag?isPreview:false,ap=typeof siteUrl!==ag?siteUrl[ac](0,siteUrl[cl]-1)[F](/(^\w+:|^)\/\//,""):"",P=aT+ap,ai=typeof currentUrl!==ag?currentUrl:"",cx=typeof blogId!==ag?blogId:"",cz=typeof blogTitle!==ag?blogTitle:"",bN=typeof titleSeparator!==ag?titleSeparator:" - ",c=typeof pageTitle!==ag?pageTitle:"Page",cE=typeof analyticId!==ag?analyticId:false,cC=typeof caPubAdsense!==ag?caPubAdsense[F](/^\D+/g,""):false,ar=cC?"ca-pub-"+cC:false,bD=typeof innerAdsDelimiter!==ag?innerAdsDelimiter:"p,br,div",B=typeof ignoreAdsDelimiter!==ag?ignoreAdsDelimiter:"pre,ul,ol,table,blockquote",bw=typeof autoTOC!==ag?autoTOC:false,bH=typeof toc_temp===bI?toc_temp:false,bc=typeof positionTOC!==ag?positionTOC:false,ah=typeof jtCallback===bI?jtCallback:false;function aj(i,cH){return -1<(" "+i[C]+" ")[bb](" "+cH+" ")}function ad(cH,cI){var i;aj(cH,cI)||(""!=(i=cH[C])&&(cI=" "+cI),cH[C]=i+cI)}function bY(i,cH){i[C]=i[C][F](new u("(?:^|\\s)"+cH+"(?!\\S)"),"")[bZ]()}function bV(i,cH){(aj(i,cH)?bY:ad)(i,cH)}function Y(i,cH){ad(i,"d-block"),b0(function(){ad(i,cH)},100)}function e(cH,cI,i){bY(cH,cI),b0(function(){bY(cH,"d-block")},i||300)}function bs(cH,cI){for(var i=0;i<cH[cl];i++){if(cH[i]===cI){return !0}}return !1}function S(){return(af[cn]()+1)[bE](36)[ac](7)}function cB(i,cH){return !!(i=new u("[?&]"+i+"=([^&#=]*)"))[by](cH)&&cH[T](i)[1]}function bu(cK,cO,cM,cN){cK=bp(cK),cO=bp(cO),cM=bp(cM),cN=bp(cN);var cH,cI,cJ=af[b](cK/cM);cO<1?cO=1:cJ<cO&&(cO=cJ),cI=cJ<=cN?(cH=1,cJ):(cK=af[bC](cN/2),cM=af[b](cN/2)-1,cO<=cK?(cH=1,cN):cJ<=cO+cM?(cH=cJ-cN+1,cJ):(cH=cO-cK,cO+cM));for(var i=(cO-1)*cM,cN=af[z](i+cM-1,cK-1),cP=[],cL=0;cL<cI+1-cH;cL++){cP[aU](cL)}return cP=cP[cd](function(cQ){return cH+cQ}),{totalItems:cK,currentPage:cO,pageSize:cM,totalPages:cJ,startPage:cH,endPage:cI,startIndex:i,endIndex:cN,pages:cP}}function b6(cH){for(var cK=cH.slice(),cI=cK[cl]-1;0<cI;cI--){var cJ=af[bC](af[cn]()*(cI+1)),i=cK[cI];cK[cI]=cK[cJ],cK[cJ]=i}return cK}function aI(i){try{return bk[y](i)}catch(i){return !1}}!function(i){var cH=new ct;cH[bB]=cH[bK]=function(){i(2==cH[ak])},cH[cf]="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}(function(i){i||(a8="")});var cg=an[b4]("header"),aZ=an[b4]("search-toggle"),bx=an[b4]("search-header"),aG=an[b4]("navbar-toggle"),cw=an[b4]("navbar"),a5=an[b4]("back-to-top"),co=an[b4]("dark-toggler"),l=an[bU]("html"),aY=an[b4]("comment-button"),q=an[b4]("threaded-comment-form"),cF=an[b4]("comment-editor"),cD=an[b4]("comment-editor-src"),b8=an[b4]("comment-script"),bX=an[cj](".comment-reply"),X=an[cj](".entry-text noscript"),bo=an[cj](".contact-form-blogger"),D=an[b4]("ads-post"),a4=an[b4]("post-body"),V=an[bU](".related-posts"),al=an[bU](".related-inline"),w=cB("page",ai),aC=null!==p&&1==p[o+ax]("lazy");!function(i){aA[aN+cu](a7,function(){var cH,cI=this[N];cI<i&&aj(cg,"header-hidden")?cH=b0(function(){bY(cg,"header-hidden")},500):i<cI&&aj(cg,"header-animate")&&(j(cH),ad(cg,"header-hidden")),i=cI},!1)}(0);var H=function(cK){var cN,cL,cM,cH,cI,cJ,i,cO;"IMG"==cK[bL]&&((cO=cK[o+cs]("data-src"))[T](/(bp.blogspot|googleusercontent)/)?(i=aC?aA[aQ]&&1<aA[aQ]?aA[aQ]:1.5:1,cN=(cK[aR]*i)[bm](0),cL=(cK[g][aR]*i)[bm](0),cM=(cK[g][g][aR]*i)[bm](0),cH=(cK[bi]*i)[bm](0),cI=cO[W]("/"),cJ=cO[a9]("=")+1,i="",i=aj(cK[g],"ratio")?"w"+cN+"-h"+cH+"-c"+a8:"s"+(i=cN<30?cL<30?cM:cL:cN)+a8,cO=cO[T](/(img\/a|proxy\/)/)?cJ?cO[v](0,cJ)+i:cO+"="+i:cO[F](cI[cI[cl]-2],i),cK[ci+cs]("data-src",cO)):cO[T](/(img.youtube|i.ytimg)/)&&(cO=cO[ac](0,cO[a9]("/"))+"/mqdefault.jpg",cK[ci+cs]("data-src",cO)))},R=function(cJ){var i,cH,cP,cM,cL,cO,cK,cN;function cI(cR,cT,cU){var cS=an[bz]("li"),cQ=an[bz]("span");return ad(cQ,"btn btn-sm rounded-pill jt-icon-center"),cQ[ao]=cU||cR,cQ[ci+cs]("data-page",cR),cR==cT?ad(cQ,"jt-btn-primary"):(ad(cQ,"jt-btn-light hover-btn-primary"),cQ[aN+cu](Q,function(cW){var cV;cW[aF](),1==(cN=cQ[o+cs]("data-page"))?(cV=cH?P+"/search"+cM+"?max-results="+i+"&page="+cN:P,aA[at][bM]=cV):(cV=(cN-1)*i,Defer.js(P+"/feeds/posts/summary/"+cP+"?start-index="+cV+"&alt=json&callback=jo."+aD+"_date&max-results=1"))})),cS[cm](cQ),cS}cJ[o+cs]("data-pagination")!=b5?(i=cJ[o+cs]("data-posts"),cH=cJ[o+cs]("data-label"),cP=(cH=aL(cH))?"-/"+cH+"/":"",cM=cH?"/label/"+cH:"",Defer.js(P+"/feeds/posts/summary/"+cP+"?alt=json&callback=jo."+aD+"_"+bP+"&max-results=1"),cL=cB("max-results",ai),cO=cB("page",ai),cK=cL||i,cN=cO||1,jo[aD+"_"+bP]=function(cQ){var cT=cQ.feed,cU=bp(cT.openSearch$totalResults.$t);if(i<cU){var cQ=bu(cU,cN,cK,5),cS=an[bz]("ul"),cT=cQ.totalPages;1!=cQ.currentPage&&(cU=cI(cQ.currentPage-1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'),cS[cm](cU)),bs(cQ.pages,1)||(cR=cI(1,cQ.currentPage,"1 . ."),cS[cm](cR));for(var cV=0;cV<cQ.pages[cl];cV++){var cR=cI(cQ.pages[cV],cQ.currentPage);cS[cm](cR)}bs(cQ.pages,cT)||(cR=cI(cT,cQ.currentPage,". . "+cT),cS[cm](cR)),cQ.currentPage!=cT&&(cT=cI(cQ.currentPage+1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'),cS[cm](cT)),cJ[ao]="",ad(cS,"pagination mb-0"),cJ[cm](cS),bY(cJ,"visually-hidden")}},jo[aD+"_date"]=function(cQ){cQ=cQ.feed.entry[0],cQ=(cQ=cQ.published.$t[ac](0,19)+cQ.published.$t[ac](23,29))[F]("+","%2B"),cQ=P+"/search"+cM+"?updated-max="+cQ+"&max-results="+cK+"&page="+cN;aA[at][bM]=cQ}):bY(cJ,"visually-hidden")};function au(cH,cI){var i=new bg;i[bj](o,cH),i[cG](bW,ch),i[b7](null),i[aN+cu](aa,function(){var cJ=i[K][T](/<title>(.*?)<\/title>/);cI[ao]=cJ[1][F](bN+cz,"")})}jo[b9]=function(cN){var cI=S(),cM=cN[o+cs]("data-label"),cK=cN[o+cs]("data-title"),cR=cN[o+cs]("data-items"),cL=cN[o+cs]("data-shuffle"),cJ=cN[o+cs]("data-no-item"),cH=cN[o+cs]("data-func"),cQ=cN[o+cs]("data-callback"),i=cJ?bp(cR)+1:cR,cO=cM||cN[ao],cP=cO[W](","),cM="",cM=1<cP[cl]?cO?"-/"+aL(cP[af[bC](af[cn]()*cP[cl])])+"/?":"?":cO&&cO!=b5?"-/"+aL(cO[bZ]())+"/?":"?";Defer.js(P+"/feeds/posts/summary/"+cM+"alt=json&callback=jo."+a1+"_"+bP+"_"+cI+"&max-results="+i),jo[a1+"_"+bP+"_"+cI]=function(c2){var cV=bp(c2.feed.openSearch$totalResults.$t),cT=c2.feed.category;if(0<cV){for(var cU={title:cK,posts:[],categories:cT},cX=c2.feed.entry,cZ=0,c0=0;c0<cX[cl];++c0){var cY,cW,cS=cX[c0],c1=cS.link[cS.link[cl]-1][bM];if(cZ==cR){break}c1!=cJ&&(cZ++,(cY={}).grup_id=cI,cY.url=c1,cY.title=cS[aB].$t,cY.summary=cS.summary.$t[bZ](),cY.img=cS.media$thumbnail&&cS.media$thumbnail.url,cY.author=cS.author[0].name.$t,cY.comment=cS.thr$total&&cS.thr$total.$t,cY.label=cS.category,cW=cS.published.$t,cS=(c1=new aJ(cW))[o+n](),cW=c1[o+a0]()+1,c1=c1[o+a](),cY.date=c1+"/"+cW+"/"+cS,cU.posts[aU](cY))}c2=aA[cH];typeof c2===bI&&0<cU.posts[cl]&&(cL&&(cU.posts=b6(cU.posts)[v](0,cL)),cN[ao]=c2(cU)[bZ](),bY(cN,"visually-hidden"),Defer.dom(".lazy-"+cI,1,"loaded",H),!cQ||typeof(c2=aA[cQ])===bI&&c2())}}};var ca=function(i){for(var cK=i[cj]("a"),cI=0;cI<cK[cl];++cI){var cJ=cK[cI],cL=cJ[bM],cH=an[bz]("span");ad(cH,"d-block fw-bold pt-2 jt-text-primary"),cJ[cm](cH),au(cL,cH)}};function bv(){(aZ&&aZ[J]||aG&&aG[J]?bY:ad)(cg,"header-animate")}function ce(i,cI){function cH(cK){i[bF](cK[aw])||(cI(),cJ())}var cJ=function(){an[ab+cu](Q,cH)};an[aN+cu](Q,cH)}function ck(i){i!=cD[bM]&&(ad(q,"loader"),cD[bM]=i,cF[cf]=i),aj(q,"d-none")&&(bY(q,"d-none"),i=b8[I][T](/<script.*?src='(.*?)'/)[1],Defer.js(i,"comment-js",500,function(){BLOG_CMT_createIframe(aT+bS+"rpc_relay.html")}))}aZ&&aZ[aN+cu](cq,function(){bv(),this[J]&&b0(function(){an[b4]("search-input")[aW]()},100),ce(bx,function(){aZ[J]=!1,bv()})}),aG&&aG[aN+cu](cq,function(){bv(),this[J]?(Y(cw,"show"),ce(cw,function(){aG[J]=!1,bv(),e(cw,"show")})):e(cw,"show")}),co&&co[aN+cu](Q,function(i){i[aF](),bV(l,"dark-mode"),null!==p&&p[ci+ax]("theme",aj(l,"dark-mode")?"dark":"light")}),aA[aN+cu](a7,function(){(1<=this[N]&&null!==cg?ad:bY)(cg,"shadow-sm"),(1000<=this[N]&&null!==a5?bY:ad)(a5,"d-none")},!1),cF&&cF[aN+cu](aa,function(i){bY(q,"loader")}),aY&&aY[aN+cu](Q,function(i){i[aF](),ck(this[bM]),"add-comment"!=q[g][ba]&&an[b4]("add-comment")[cm](q)});for(var A=0;A<bX[cl];++A){bX[A][aN+cu](Q,function(i){i[aF]();i=this[o+cs]("data-comment-id");ck(this[bM]),q[g][ba]!="c"+i&&an[b4]("c"+i)[cm](q)})}for(A=0;A<bo[cl];++A){var cc=bo[A];cc[aN+cu](h,function(cH){cH[aF]();var i=cH[aw];ad(i,"loading");var cI=new FormData(i),cJ="blogID="+cx;cI[M](function(cL,cK){cJ+="&"+aL(cK)+"="+aL(cL)});cH=aT+bS+"contact-form.do",cI=new bg;cI[bj](bd,cH),cI[cG](bW,f),cI[b7](cJ),cI[s]=function(){var cK;bY(i,"loading"),4===this[aX]&&200===this[am]&&""!=this[bn]&&((cK=aI(this[K][bZ]()))&&"true"==cK.details.emailSentStatus?(i[E](),bY(i,"send-error"),ad(i,"send-success")):(bY(i,"send-success"),ad(i,"send-error")))}})}function b2(cW){if(cW&&(an[ab+cu](bG,b2),an[ab+cu](bQ,b2),an[ab+cu](a7,b2)),Defer.dom(".custom-posts",1,null,jo[b9],null,{rootMargin:"200%"}),0<X[cl]){for(var cL=0;cL<X[cl];++cL){var cI=X[cL],cJ=cI[ao],cN=an[bz]("textarea");cN[ao]=cJ[F](/src="(.*?)"/g,'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');cJ=an[bz]("div");cJ[ao]=cN.value,0==cL&&ad(cJ,"feature-image full-width"),cI[g][be+aH](cJ,cI)}Defer.dom('[lazyload="true"]',1,"loaded",H,null,{rootMargin:"200%"})}if(null!==a4){if(null!==V&&null!==al&&(al[ao]=V[ao],al[ci+cs]("data-no-item",V[o+cs]("data-no-item"))),null!==D){for(var cP=a4[cj](bD+","+B),cR=D[a6],cO=cR[cl],cM=[],cL=0;cL<cP[cl];cL++){var i=cP[cL][a2](B);i&&cP[cL]!=i||cM[aU](cP[cL])}for(var cS,cL=0;cL<cO;cL++){cL==cO-1?a4[cm](cR[0]):(cS=cL==cO-1?cM[cl]-1:af[bT](cM[cl]/cO)*cL,(cS=0==cL?cM[0]:cM[cS][x])&&cS[g][be+aH](cR[0],cS))}}if(bw&&bw!=b5&&bH&&null!==a4[m]){for(var cH=a4[cj]("h2,h3,h4,h5,h6"),cQ=an[bz]("div"),cW=a4[bU](bc),cU=[],cL=0;cL<cH[cl];cL++){var cK=cH[cL],cV=cK[aS][F](/[^\w!?]/g,"_")[F](/__/g,"_"),cT=bp(cK[bL][F]("H",""));cK[ba]=cV,cU[aU]({level:cT,title:cK[aS],id:cV})}null===cW?cW=a4[m]:cW[x]&&(cW=cW[x]),0<cU[cl]&&(cQ[ao]=bH(cU)[bZ](),cW&&cW[g][be+aH](cQ,cW))}}L||(ar&&(typeof adsbygoogle===ag&&(adsbygoogle=[]),Defer.js(aT+"pagead2.googlesyndication.com/pagead/js/"+U+".js?client="+ar,U,100)),cE&&cE!=b5&&Defer.js(aT+"www.googletagmanager.com/gtag/js?id="+cE,t,100,function(){function cX(){dataLayer[aU](arguments)}cX("js",new Date),cX(cb,cE)}),ah&&ah()),cx&&Defer.css(aT+bS+"dyn-css/authorization.css?targetBlogID="+cx)}w&&(an[aB]=an[aB][F](bN,bN+c+" "+w+bN)),Defer.dom(".lazyload",1,"loaded",H),Defer.dom("#post-pager",1,null,ca,null,{rootMargin:"200%"}),Defer.dom("#pagination",1,null,R,null,{rootMargin:"200%"}),aC?b2(!1):(null!==p&&p[ci+ax]("lazy",1),an[aN+cu](bG,b2),an[aN+cu](bQ,b2),an[aN+cu](a7,b2))}();var scrollTimer=null;$(window).scroll(function(){var f=$(this).height(),h=f/$(document).height()*f,e=$(this).scrollTop()/($(document).height()-f),g=e*(f-h)+h/2-$("#scroll").height()/2;$("#scroll").css("top",g).text(" ("+Math.round(e*100)+"%)").fadeIn(100);if(scrollTimer!==null){clearTimeout(scrollTimer)}scrollTimer=setTimeout(function(){$("#scroll").fadeOut()},1500)});!function(){function t(){return"cf-marker-"+Math.random().toString().slice(2)}function U(){for(var z=[],q=0;q<arguments.length;q++){z[q]=arguments[q]}(F=console.warn||console.log).call.apply(F,[console,"[ROCKET LOADER] "].concat(z));var F}function n(z,q){var F=q.parentNode;F&&f(z,F,q)}function r(z,q){f(z,q,q.childNodes[0])}function o(z){var q=z.parentNode;q&&q.removeChild(z)}function g(z){var q=z.namespaceURI===E?"xlink:href":"src";return z.getAttribute(q)}function P(z,q){var F=z.type.substr(q.length);return !(F&&!M[F.trim()])&&((!j||!z.hasAttribute("nomodule"))&&!(!j&&"module"===F))}function S(q){return P(q,"")}function s(z,q){return function(F){if(q(),z){return z.call(this,F)}}}function w(z,q){z.onload=s(z.onload,q),z.onerror=s(z.onerror,q)}function p(z){var J=document.createElementNS(z.namespaceURI,"script");J.async=z.hasAttribute("async"),J.textContent=z.textContent;for(var F=0;F<z.attributes.length;F++){var q=z.attributes[F];try{q.namespaceURI?J.setAttributeNS(q.namespaceURI,q.name,q.value):J.setAttribute(q.name,q.value)}catch(G){}}return J}function k(z,q){var F=new a(q);z.dispatchEvent(F)}function T(G){var z=G.namespaceURI===E,J=t();G.setAttribute(J,"");var K=z?"<svg>"+G.outerHTML+"</svg>":G.outerHTML;c.call(document,K);var q=document.querySelector("["+J+"]");if(q){q.removeAttribute(J);var F=z&&q.parentNode;F&&o(F)}return q}function b(z){if(z&&"handleEvent" in z){var q=z.handleEvent;return"function"==typeof q?q.bind(z):q}return z}function f(z,G,F){var q=F?function(J){return G.insertBefore(J,F)}:function(J){return G.appendChild(J)};Array.prototype.slice.call(z).forEach(q)}function x(){return/chrome/i.test(navigator.userAgent)&&/google/i.test(navigator.vendor)}function D(z,q){function F(){this.constructor=z}N(z,q),z.prototype=null===q?Object.create(q):(F.prototype=q.prototype,new F)}function l(q){return q instanceof Window?["load"]:q instanceof Document?["DOMContentLoaded","readystatechange"]:[]}function R(z){var q=z.getAttribute(v);if(!q){return null}var F=q.split(C);return{nonce:F[0],handlerPrefixLength:+F[1],bailout:!z.hasAttribute("defer")}}function e(z){var q=H+z.nonce;Array.prototype.forEach.call(document.querySelectorAll("["+q+"]"),function(F){F.removeAttribute(q),Array.prototype.forEach.call(F.attributes,function(G){/^on/.test(G.name)&&"function"!=typeof F[G.name]&&F.setAttribute(G.name,G.value.substring(z.handlerPrefixLength))})})}function B(){var q=window;"undefined"!=typeof Promise&&(q.__cfQR={done:new Promise(function(z){return W=z})})}function y(z){var q=new h(z),F=new I(q);q.harvestScriptsInDocument(),new aa(q,{nonce:z,blocking:!0,docWriteSimulator:F,callback:function(){}}).run()}function A(z){var G=new h(z),F=new I(G);G.harvestScriptsInDocument();var q=new aa(G,{nonce:z,blocking:!1,docWriteSimulator:F,callback:function(){window.__cfRLUnblockHandlers=!0,q.removePreloadHints(),u(z)}});q.insertPreloadHints(),d.runOnLoad(function(){q.run()})}function u(z){var q=new m(z);d.simulateStateBeforeDeferScriptsActivation(),q.harvestDeferScriptsInDocument(),new aa(q,{nonce:z,blocking:!1,callback:function(){d.simulateStateAfterDeferScriptsActivation(),W&&W()}}).run()}var E="http://www.w3.org/2000/svg",M={"application/ecmascript":!0,"application/javascript":!0,"application/x-ecmascript":!0,"application/x-javascript":!0,"text/ecmascript":!0,"text/javascript":!0,"text/javascript1.0":!0,"text/javascript1.1":!0,"text/javascript1.2":!0,"text/javascript1.3":!0,"text/javascript1.4":!0,"text/javascript1.5":!0,"text/jscript":!0,"text/livescript":!0,"text/x-ecmascript":!0,"text/x-javascript":!0,module:!0},j=void 0!==document.createElement("script").noModule,a=function(){var q=window;return q.__rocketLoaderEventCtor||Object.defineProperty(q,"__rocketLoaderEventCtor",{value:Event}),q.__rocketLoaderEventCtor}(),c=document.write,O=document.writeln,N=Object.setPrototypeOf||{__proto__:[]} instanceof Array&&function(z,q){z.__proto__=q}||function(z,q){for(var F in q){q.hasOwnProperty(F)&&(z[F]=q[F])}},L=function(){function q(z){this.nonce=z,this.items=[]}return Object.defineProperty(q.prototype,"hasItems",{get:function(){return this.items.length>0},enumerable:!0,configurable:!0}),q.prototype.pop=function(){return this.items.pop()},q.prototype.forEach=function(z){this.items.forEach(function(G){var F=G.script;return z(F)})},q.prototype.harvestScripts=function(z,J){var F=this,K=J.filter,G=J.mutate;Array.prototype.slice.call(z.querySelectorAll("script")).filter(K).reverse().forEach(function(Q){G(Q),F.pushScriptOnStack(Q)})},q.prototype.pushScriptOnStack=function(z){var G=z.parentNode,F=this.createPlaceholder(z),J=!!g(z);G.replaceChild(F,z),this.items.push({script:z,placeholder:F,external:J,async:J&&z.hasAttribute("async"),executable:S(z)})},q.prototype.hasNonce=function(z){return 0===(z.getAttribute("type")||"").indexOf(this.nonce)},q.prototype.removeNonce=function(z){z.type=z.type.substr(this.nonce.length)},q.prototype.makeNonExecutable=function(z){z.type=this.nonce+z.type},q.prototype.isPendingDeferScript=function(z){return z.hasAttribute("defer")||z.type===this.nonce+"module"&&!z.hasAttribute("async")},q}(),h=function(z){function q(){return null!==z&&z.apply(this,arguments)||this}return D(q,z),q.prototype.harvestScriptsInDocument=function(){var F=this;this.harvestScripts(document,{filter:function(G){return F.hasNonce(G)},mutate:function(G){F.isPendingDeferScript(G)||F.removeNonce(G)}})},q.prototype.harvestScriptsAfterDocWrite=function(G){var F=this;this.harvestScripts(G,{filter:S,mutate:function(J){F.isPendingDeferScript(J)&&F.makeNonExecutable(J)}})},q.prototype.createPlaceholder=function(F){return document.createComment(F.outerHTML)},q}(L),m=function(z){function q(){return null!==z&&z.apply(this,arguments)||this}return D(q,z),q.prototype.harvestDeferScriptsInDocument=function(){var F=this;this.harvestScripts(document,{filter:function(G){return F.hasNonce(G)&&F.isPendingDeferScript(G)},mutate:function(G){return F.removeNonce(G)}})},q.prototype.createPlaceholder=function(G){var F=p(G);return this.makeNonExecutable(F),F},q}(L),I=function(){function q(z){this.scriptStack=z}return q.prototype.enable=function(z){var F=this;this.insertionPointMarker=z,this.buffer="",document.write=function(){for(var J=[],G=0;G<arguments.length;G++){J[G]=arguments[G]}return F.write(J,!1)},document.writeln=function(){for(var J=[],G=0;G<arguments.length;G++){J[G]=arguments[G]}return F.write(J,!0)}},q.prototype.flushWrittenContentAndDisable=function(){document.write=c,document.writeln=O,this.buffer.length&&(document.contains(this.insertionPointMarker)?this.insertionPointMarker.parentNode===document.head?this.insertContentInHead():this.insertContentInBody():U("Insertion point marker for document.write was detached from document:","Markup will not be inserted"))},q.prototype.insertContentInHead=function(){var J=new DOMParser,G="<!DOCTYPE html><head>"+this.buffer+"</head>",F=J.parseFromString(G,"text/html");if(this.scriptStack.harvestScriptsAfterDocWrite(F),n(F.head.childNodes,this.insertionPointMarker),F.body.childNodes.length){for(var K=Array.prototype.slice.call(F.body.childNodes),z=this.insertionPointMarker.nextSibling;z;){K.push(z),z=z.nextSibling}document.body||c.call(document,"<body>"),r(K,document.body)}},q.prototype.insertContentInBody=function(){var z=this.insertionPointMarker.parentElement,F=document.createElement(z.tagName);F.innerHTML=this.buffer,this.scriptStack.harvestScriptsAfterDocWrite(F),n(F.childNodes,this.insertionPointMarker)},q.prototype.write=function(z,G){var F=document.currentScript;F&&g(F)&&F.hasAttribute("async")?(J=G?O:c).call.apply(J,[document].concat(z)):this.buffer+=z.map(String).join(G?"\n":"");var J},q}(),i=function(){function q(){var z=this;this.simulatedReadyState="loading",this.bypassEventsInProxies=!1,this.nativeWindowAddEventListener=window.addEventListener;try{Object.defineProperty(document,"readyState",{get:function(){return z.simulatedReadyState}})}catch(F){}this.setupEventListenerProxy(),this.updateInlineHandlers()}return q.prototype.runOnLoad=function(z){var F=this;this.nativeWindowAddEventListener.call(window,"load",function(G){if(!F.bypassEventsInProxies){return z(G)}})},q.prototype.updateInlineHandlers=function(){this.proxyInlineHandler(document,"onreadystatechange"),this.proxyInlineHandler(window,"onload"),document.body&&this.proxyInlineHandler(document.body,"onload")},q.prototype.simulateStateBeforeDeferScriptsActivation=function(){this.bypassEventsInProxies=!0,this.simulatedReadyState="interactive",k(document,"readystatechange"),this.bypassEventsInProxies=!1},q.prototype.simulateStateAfterDeferScriptsActivation=function(){var z=this;this.bypassEventsInProxies=!0,k(document,"DOMContentLoaded"),this.simulatedReadyState="complete",k(document,"readystatechange"),k(window,"load"),this.bypassEventsInProxies=!1,window.setTimeout(function(){return z.bypassEventsInProxies=!0},0)},q.prototype.setupEventListenerProxy=function(){var z=this;("undefined"!=typeof EventTarget?[EventTarget.prototype]:[Node.prototype,Window.prototype]).forEach(function(F){return z.patchEventTargetMethods(F)})},q.prototype.patchEventTargetMethods=function(z){var G=this,F=z.addEventListener,J=z.removeEventListener;z.addEventListener=function(Y,V){for(var Q=[],Z=2;Z<arguments.length;Z++){Q[Z-2]=arguments[Z]}var ab=l(this),K=V&&V.__rocketLoaderProxiedHandler;if(!K){var X=b(V);"function"==typeof X?(K=function(ac){if(G.bypassEventsInProxies||ab.indexOf(Y)<0){return X.call(this,ac)}},Object.defineProperty(V,"__rocketLoaderProxiedHandler",{value:K})):K=V}F.call.apply(F,[this,Y,K].concat(Q))},z.removeEventListener=function(X,V){for(var K=[],Q=2;Q<arguments.length;Q++){K[Q-2]=arguments[Q]}var Y=V&&V.__rocketLoaderProxiedHandler||V;J.call.apply(J,[this,X,Y].concat(K))}},q.prototype.proxyInlineHandler=function(z,J){try{var F=z[J];if(F&&!F.__rocketLoaderInlineHandlerProxy){var K=this;z[J]=function(Q){if(K.bypassEventsInProxies){return F.call(this,Q)}},Object.defineProperty(z[J],"__rocketLoaderInlineHandlerProxy",{value:!0})}}catch(G){return void console.warn("encountered an error when accessing "+J+" handler:",G.message)}},q}(),d=function(){var q=window;return q.__rocketLoaderLoadProgressSimulator||Object.defineProperty(q,"__rocketLoaderLoadProgressSimulator",{value:new i}),q.__rocketLoaderLoadProgressSimulator}(),aa=function(){function q(z,F){this.scriptStack=z,this.settings=F,this.preloadHints=[]}return q.prototype.insertPreloadHints=function(){var z=this;this.scriptStack.forEach(function(J){if(P(J,z.settings.nonce)){var F=g(J),K=x()&&J.hasAttribute("integrity");if(F&&!K){var G=document.createElement("link");G.setAttribute("rel","preload"),G.setAttribute("as","script"),G.setAttribute("href",F),J.crossOrigin&&G.setAttribute("crossorigin",J.crossOrigin),document.head.appendChild(G),z.preloadHints.push(G)}}})},q.prototype.removePreloadHints=function(){this.preloadHints.forEach(function(z){return o(z)})},q.prototype.run=function(){for(var z=this,G=this;this.scriptStack.hasItems;){var F=function(){var J=G.settings.docWriteSimulator,Q=G.scriptStack.pop();J&&!Q.async&&J.enable(Q.placeholder);var K=G.activateScript(Q);return K?Q.external&&Q.executable&&!Q.async?(w(K,function(){z.finalizeActivation(Q),z.run()}),{value:void 0}):void G.finalizeActivation(Q):(J&&J.flushWrittenContentAndDisable(),"continue")}();if("object"==typeof F){return F.value}}this.scriptStack.hasItems||this.settings.callback()},q.prototype.finalizeActivation=function(z){this.settings.docWriteSimulator&&!z.async&&this.settings.docWriteSimulator.flushWrittenContentAndDisable(),d.updateInlineHandlers(),o(z.placeholder)},q.prototype.activateScript=function(Q){var F=Q.script,K=Q.placeholder,J=Q.external,V=Q.async,z=K.parentNode;if(!document.contains(K)){return U("Placeholder for script \n"+F.outerHTML+"\n was detached from document.","Script will not be executed."),null}var G=this.settings.blocking&&J&&!V?T(F):p(F);return G?(z.insertBefore(G,K),G):(U("Failed to create activatable copy of script \n"+F.outerHTML+"\n","Script will not be executed."),null)},q}(),v="data-cf-settings",C="|",H="data-cf-modified-",W=void 0;!function(){var z=document.currentScript;if(z){var q=R(z);q?(o(z),e(q),d.updateInlineHandlers(),q.bailout?y(q.nonce):(B(),A(q.nonce))):U("Activator script doesn't have settings. No scripts will be executed.")}else{U("Can't obtain activator script. No scripts will be executed.")}}()}();

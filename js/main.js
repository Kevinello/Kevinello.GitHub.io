"use strict";function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function H(t){t&&(n=document.getElementById("site-name").offsetWidth,t=document.querySelectorAll("#menus .menus_item"),o=0,t.length&&t.forEach(function(t){o+=t.offsetWidth}),t=document.querySelector("#search-button"),i=t?t.offsetWidth:0,j=document.getElementById("nav")),window.innerWidth<768||n+o+i>j.offsetWidth-120?j.classList.add("hide-menu"):j.classList.remove("hide-menu")}function e(){var t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),R=!1}var n,o,i,j,a,R=!1;function M(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){var e,n,o=t.target.id?t.target:t.target.parentNode;switch(o.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":e=o,(n=document.getElementById("rightside-config-hide").classList).toggle("show"),e.classList.contains("show")&&(n.add("status"),setTimeout(function(){n.remove("status")},300)),e.classList.toggle("show");break;case"mobile-toc-button":"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close();break;case"readmode":!function(){var e=document.body;e.classList.add("read-mode");var n=document.createElement("button");n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n),n.addEventListener("click",function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)})}();break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200),"function"==typeof runMermaid&&window.runMermaid();break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")}}),window.refreshFn=function(){var o,i,a,c,r,l,s,t,e,n,d,u,m,f,y,h,g,p,b,L,v,E,S,w,A,_,I,G,O,B,C,T,k;function N(t,e,n){var o,i=document.createDocumentFragment();u&&((o=document.createElement("div")).className="highlight-tools ".concat(g),o.innerHTML=y+t+h,o.addEventListener("click",b),i.appendChild(o)),d&&e.offsetHeight>d+30&&((o=document.createElement("div")).className="code-expand-btn",o.innerHTML='<i class="fas fa-angle-double-down"></i>',o.addEventListener("click",L),i.appendChild(o)),"hl"===n?e.insertBefore(i,e.firstChild):e.parentNode.insertBefore(i,e)}H(!0),j.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(v=GLOBAL_CONFIG.noticeOutdate,(t=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=v.limitDay&&((e=document.createElement("div")).className="post-outdate-notice",e.textContent=v.messagePrev+" "+t+" "+v.messageNext,t=document.getElementById("article-container"),"top"===v.position?t.insertBefore(e,t.firstChild):t.appendChild(e))),GLOBAL_CONFIG.relativeDate.post&&M(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&M(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(e=document.getElementById("runtimeshow"))&&(n=e.getAttribute("data-publishDate"),e.innerText=btf.diffDate(n)+" "+GLOBAL_CONFIG.runtime),(n=document.getElementById("last-push-date"))&&(m=n.getAttribute("data-lastPushDate"),n.innerText=btf.diffDate(m,!0)),(m=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&m.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),C=GLOBAL_CONFIG_SITE.isToc,T=GLOBAL_CONFIG.isAnchor,(k=document.getElementById("article-container"))&&(C||T)&&(C&&(S=document.getElementById("card-toc"),A=(w=S.getElementsByClassName("toc-content")[0]).querySelectorAll(".toc-link"),_=S.querySelector(".toc-percentage"),I=w.classList.contains("is-expand"),G=function(t){var e=k.clientHeight,n=document.documentElement.clientHeight,t=(t-k.offsetTop)/(n<e?e-n:document.documentElement.scrollHeight-n),n=100<(n=Math.round(100*t))?100:n<=0?0:n;_.textContent=n},window.mobileToc={open:function(){S.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:function(){S.style.animation="toc-close .2s",setTimeout(function(){S.style.cssText="opacity:''; animation: ''; right: ''"},100)}},w.addEventListener("click",function(t){t.preventDefault();var e=t.target.classList;e.contains("toc-content")||(t=e.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close())}),E=function(t){var e=t.getBoundingClientRect().top,t=w.scrollTop;e>document.documentElement.clientHeight-100&&(w.scrollTop=t+150),e<100&&(w.scrollTop=t-150)}),O=k.querySelectorAll("h1,h2,h3,h4,h5,h6"),B="",window.tocScrollFn=function(){return btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop;C&&G(t),function(n){if(0!==n){var o="",i="";if(O.forEach(function(t,e){n>btf.getEleTop(t)-80&&(t=t.id,o=t?"#"+encodeURI(t):"",i=e)}),B!==i&&(T&&btf.updateAnchor(o),B=i,C&&(w.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),""!==o))){var t=A[i];if(t.classList.add("active"),setTimeout(function(){E(t)},0),!I)for(var e=t.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}(t)},100)()},window.addEventListener("scroll",tocScrollFn)),!GLOBAL_CONFIG_SITE.isHome||(D=document.getElementById("scroll-down"))&&D.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(v=GLOBAL_CONFIG.highlight)&&(t=v.highlightCopy,e=v.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink,d=v.highlightHeightLimit,u=t||e||void 0!==n,m="highlighjs"===v.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(u||d)&&m.length&&(f="prismjs"===v.plugin,g=!(h=y="")===n?"closed":"",void 0!==n&&(y='<i class="fas fa-angle-down expand '.concat(g,'"></i>')),t&&(h='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),p=function(t){var e=t.parentNode;e.classList.add("copy-true");var n,o=window.getSelection(),i=document.createRange();f?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),e.classList.remove("copy-true")},b=function(t){var e=t.target.classList;e.contains("expand")?(t=_toConsumableArray(this.parentNode.children).slice(1),this.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach(function(t){t.style.display="block"}):t.forEach(function(t){t.style.display="none"})):e.contains("copy-button")&&p(this)},L=function(){this.classList.toggle("expand-done")},e?f?m.forEach(function(t){var e=t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure",{class:"highlight"}),N(e,t)}):m.forEach(function(t){var e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code"),N('<div class="code-lang">'.concat(e,"</div>"),t,"hl")}):f?m.forEach(function(t){btf.wrap(t,"figure",{class:"highlight"}),N("",t)}):m.forEach(function(t){N("",t,"hl")}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode,o=t.title||t.alt;o&&!n.parentNode.classList.contains("justified-gallery")&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=o,n.insertBefore(e,t.nextSibling))}),l=document.getElementById("rightside"),s=window.innerHeight+56,document.body.scrollHeight<=s?l.style.cssText="opacity: 1; transform: translateX(-58px)":(i=!(o=0),a=document.getElementById("page-header"),c="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,n=o<e;56<(o=e)?(n?(a.classList.contains("nav-visible")&&a.classList.remove("nav-visible"),r&&!0===i&&(chatBtnHide(),i=!1)):(a.classList.contains("nav-visible")||a.classList.add("nav-visible"),c&&!1===i&&(chatBtnShow(),i=!0)),a.classList.add("nav-fixed"),"0"===window.getComputedStyle(l).getPropertyValue("opacity")&&(l.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===e&&a.classList.remove("nav-fixed","nav-visible"),l.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=s&&(l.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200)()},window.addEventListener("scroll",scrollCollect));var x,F,q,D=document.querySelectorAll("#article-container .fj-gallery");D.length&&((x=D).forEach(function(t){t.querySelectorAll("img").forEach(function(t){var e=t.getAttribute("data-lazy-src");e&&(t.src=e),btf.wrap(t,"div",{class:"fj-gallery-item"})})}),window.fjGallery?setTimeout(function(){btf.initJustifiedGallery(x)},100):((q=document.createElement("link")).rel="stylesheet",q.href=GLOBAL_CONFIG.source.justifiedGallery.css,document.body.appendChild(q),getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(function(){btf.initJustifiedGallery(x)}))),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(q=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&q.forEach(function(t){btf.wrap(t,"div",{class:"table-wrap"})}),(q=document.querySelectorAll("#article-container .hide-button")).length&&q.forEach(function(t){t.addEventListener("click",function(t){this.classList.add("open");var e=this.nextElementSibling.querySelectorAll(".fj-gallery");e.length&&btf.initJustifiedGallery(e)})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .fj-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),F=!1,(q=document.querySelector("#comment-switch > .switch-btn"))&&q.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),F||"function"!=typeof loadOtherComment||(F=!0,loadOtherComment())}),document.getElementById("toggle-menu").addEventListener("click",function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),R=!0})},refreshFn(),window.addEventListener("resize",function(){H(!1),btf.isHidden(document.getElementById("toggle-menu"))&&R&&e()}),document.getElementById("menu-mask").addEventListener("click",function(t){e()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(a=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>a.limitCount?e+"\n\n\n"+a.languages.author+"\n"+a.languages.link+window.location.href+"\n"+a.languages.source+"\n"+a.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});
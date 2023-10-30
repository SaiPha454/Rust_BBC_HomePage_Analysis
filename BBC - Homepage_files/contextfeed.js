(()=>{"use strict";var t,e;(e=t||(t={})).CONTEXT_NOT_LOADED="0",e.CONTEXT_LOADED="1",e.LAZY_LOADING_ENABLED="1",e.LAZY_LOADING_ROOT_MARGIN="100",e.STICKY_AD="1",e.PARTNER_TCF_STATUS="2.0";var n,a,i=(n={id:"data-dianomi-context-id",done:"data-dianomi-context-done",host:{attribute:"data-dianomi-context-hostname",default:"www.dianomi.com",allowedValues:["dev.dianomi.com"]},endpoint:{attribute:"data-dianomi-context-endpoint",default:"context.pl",allowedValues:["bidcore-context.pl"]},affiliate:"data-dianomi-context-affiliate",cfTest:"data-dianomi-cf-test",clickMacro:"data-dianomi-click-macro",consent:"data-dianomi-consent",darkmodeOverride:"data-dianomi-darkmode-override",pageDomain:"data-dianomi-page-domain",referrer:"data-referrer-url"},Object.keys(n).map((function(t){var e=n[t];return"string"==typeof e?e:e.attribute})));function o(){var t=document.querySelectorAll(".dianomi_context"),e=!0,n=!1,a=void 0;try{for(var o,c=function(t,e){var n,a=e.value,o=a.getAttribute("data-dianomi-context-id");if("1"===a.getAttribute("data-dianomi-complete")||!o)return"continue";var c="".concat(o,"-").concat(Math.round(1e3*Math.random())),l=function(t){var e=document.createElement("iframe");return e.classList.add("dianomi-parent-iframe"),e.title="Dianomi ad container (".concat(t,")"),e.id=t,e.style.width="100%",e.style.overflow="hidden",e.style.border="none",e}(c);a.appendChild(l);var m,u=function(t,e){var n=document.createElement("div");n.classList.add("dianomi-context"),n.id="dianomi-context-wrapper",n.setAttribute("data-dianomi-parent-iframe-id",e);var a=function(t){var e=t.getAttribute("data-dianomi-context-hostname")||"www.dianomi.com",n="https://".concat(e,"/js/contextfeed/contextfeed-frame.js"),a=document.createElement("script");return a.type="text/javascript",a.src=n,a}(t),o=document.createElement("div");return o.classList.add("dianomi_context"),i.forEach((function(e){var n=t.getAttribute(e);n&&o.setAttribute(e,n)})),n.appendChild(o),n.appendChild(a),n}(a,c);if(!u)return"continue";"complete"!==(null===(n=l.contentDocument)||void 0===n?void 0:n.readyState)?l.onload=function(){var t;null===(t=l.contentDocument)||void 0===t||t.body.appendChild(u),d()}:(null===(m=l.contentDocument)||void 0===m||m.body.appendChild(u),d()),a.setAttribute("data-dianomi-complete","1"),window.addEventListener("message",r)},l=t[Symbol.iterator]();!(e=(o=l.next()).done);e=!0)c(0,o)}catch(t){n=!0,a=t}finally{try{e||null==l.return||l.return()}finally{if(n)throw a}}}function d(){var t=setInterval((function(){return c()}),100);setTimeout((function(){clearInterval(t)}),5e3)}function r(t){var e,n,a,i,o,d,r,l;"dianomi-parent-resize"===(null===(e=t.data)||void 0===e?void 0:e.type)&&c(),"dianomi-iframebuster"===(null===(n=t.data)||void 0===n?void 0:n.type)&&(i=0,o=window.setInterval((function(){if(window.frameElement){var t=window.parent.document.getElementById(window.frameElement.id);if(t&&"IFRAME"===t.tagName&&t.contentWindow===window){t.style.width="100%",t.style.display="block";var e=document.body.scrollHeight;t.style.height="".concat(20+e,"px")}}10==++i&&window.clearInterval(o)}),1e3)),"dianomi-parent-collapse"===(null===(a=t.data)||void 0===a?void 0:a.type)&&(r=null===(d=t.data)||void 0===d?void 0:d.frameId,(l=document.getElementById(r))&&l.remove())}function c(){var t=document.querySelectorAll(".dianomi-parent-iframe"),e=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var d=i.value,r=d.contentDocument,c=null==r?void 0:r.getElementById("dianomi-context-wrapper");d.height="".concat((null==c?void 0:c.scrollHeight)||0,"px")}}catch(t){n=!0,a=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw a}}}a=o,"loading"!==document.readyState?a():document.addEventListener("DOMContentLoaded",(function(){a()})),window.dianomiReloadContext=o})();
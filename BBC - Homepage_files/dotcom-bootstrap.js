/*! "1.240.0-20231019-131300-5672e64" */!function(){"use strict";const o=o=>{if("undefined"==typeof document||!o)return"";const e=`; ${document.cookie}`.split(`; ${encodeURIComponent(o)}=`);let t="";return 2===e.length&&(t=decodeURIComponent(e.pop().split(";").shift())),t},e=(o,e,t)=>{if("undefined"==typeof document||!o)return;const n=new Date(Date.now()+864e5*t);document.cookie=`${encodeURIComponent(o)}=${encodeURIComponent(e)}; expires=${n.toGMTString()}; domain=.bbc.com; path=/`},t=o=>{window.dotcom.consent=o},n=o=>{if("object"==typeof window.dotcom.vendorConsent&&null!==window.dotcom.vendorConsent&&void 0!==o)return window.dotcom.vendorConsent[o]},i=(o,e)=>{"object"==typeof window.dotcom.vendorConsent&&null!==window.dotcom.vendorConsent&&void 0!==o&&(window.dotcom.vendorConsent[o]=e)},a=["AT","AX","BE","BG","BL","CY","CZ","DE","DK","EE","ES","EU","FI","FR","GB","GF","GG","GI","GP","GR","HR","HU","IE","IM","IS","IT","JE","LI","LT","LU","LV","MF","MT","MQ","NL","NO","PL","PM","PT","RE","RO","SE","SI","SK","YT"],d=()=>"undefined"!=typeof window&&/[?|&]ads-debug/.test(window.location.href),s=()=>"undefined"!=typeof live&&"test"===live||-1!==window.location.href.indexOf("test.api.bbc.co.uk")||/(localhost|sandbox|int|test)(.dev)*.bbc.co*/.test(window.location.href)||/web.(int|test).bbcx.test.api.bbc.com/.test(window.location.href),c=()=>!0===window.dotcom.userinfo.notUkIp&&!0===window.dotcom.userinfo.ads,r=()=>d()||c()&&window.dotcom.flags.state>0&&window.dotcom.flags.adverts,w=o=>{var e;window.dotcom.userinfo.country=o["X-Country"],window.dotcom.userinfo.notUkIp="no"===o["X-Ip_is_uk_combined"],window.dotcom.userinfo.ads="yes"===o["X-Ip_is_advertise_combined"],!0===window.dotcom.userinfo.notUkIp&&(window.dotcom.userinfo.eea=!!(e=window.dotcom.userinfo.country)&&-1!==a.indexOf(e.toUpperCase()))},l=(o,e)=>{e||(delete o.adverts,delete o.analytics),Object.keys(o).forEach((e=>{let t=o[e];t="true"===t||t,t="false"!==t&&t,window.dotcom.flags[e]=t})),"www.bbc.com"!==window.location.hostname||"/news/uk/the_queen"!==window.location.pathname&&"/news/live/uk-62902778"!==window.location.pathname&&"/news/topics/c8nq32jwn4rt"!==window.location.pathname&&"/news/topics/cq23pdgvr7rt"!==window.location.pathname||(window.dotcom.flags.adverts=!1)},p=async(o,e)=>fetch(o).then((o=>{if(o.ok)return o.json();throw new Error(e)})),m=async()=>{const o="Error fetching flags",e=await p(s()?"https://gn-flagpoles.test.api.bbci.co.uk/ngas":"https://gn-flagpoles.api.bbci.co.uk/ngas",o).catch((()=>{throw window.dotcom.flags.state=-2,new Error(o)}));l(e,!1),window.dotcom.flags.state=2};let u=[];const f={isAdsDebug:d,isTestEnv:s,isStageEnv:()=>/stage.bbc.co*/.test(window.location.href)||/web.stage.bbcx.test.api.bbc.com/.test(window.location.href),isSignedIn:()=>o("ckns_id"),isDotcomAllowed:c,syncAdsEnabled:()=>r(),isAdsEnabled:()=>new Promise((o=>{window.dotcom.userinfo.state<0||window.dotcom.flags.state<0?o(r()):0===window.dotcom.userinfo.state||0===window.dotcom.flags.state?u.push(o):o(r())})),checkCookies(){t(1);const n=o("ckns_policy");(d()||n&&"1"===n.charAt(2))&&t(2),n||window.dotcom.userinfo.eea||(t(2),e("ckns_policy","111",365),e("ckns_explicit","0",365))},async init(){const o=new URLSearchParams(window.location.search);try{d()?(window.dotcom.userinfo.notUkIp=!0,window.dotcom.userinfo.ads=!0,window.dotcom.flags.adverts=!0,window.dotcom.flags.analytics=!0,window.dotcom.userinfo.state=1,await m()):(await(async()=>{const o="Error fetching userinfo",{userinfo:e={}}=window.dotcom.config;if(e["X-Country"]&&e["X-Ip_is_uk_combined"]&&e["X-Ip_is_advertise_combined"])return w(e),void(window.dotcom.userinfo.state=2);const t=await p("https://www.bbc.com/userinfo",o).catch((()=>{throw window.dotcom.userinfo.state=-1,new Error(o)}));w(t),window.dotcom.userinfo.state=1})(),c()?window.dotcom.config.opsFlags&&!o.has("force-client-flagpoles")?(l(window.dotcom.config.opsFlags,!0),l(window.dotcom.config.ngasFlags,!1),window.dotcom.flags.state=2):(await(async()=>{const o="Error fetching gnlops flags",e=await p(s()?"https://gn-flagpoles.test.api.bbci.co.uk/gnlops":"https://gn-flagpoles.api.bbci.co.uk/gnlops",o).catch((()=>{throw window.dotcom.flags.state=-1,new Error(o)}));l(e,!0),window.dotcom.flags.state=1})(),!0!==window.dotcom.flags.adverts&&!0!==window.dotcom.flags.analytics||await m()):window.dotcom.flags.state=-3)}finally{u&&u.length>0&&(u.forEach((o=>o(r()))),u=[])}},reset(){u=[]}},g=()=>window.dotcom.data,h=new RegExp("^(/)?(afaanoromoo|afrique|amharic|arabic|azeri|bengali|burmese|gahuza|gujarati|hausa|hindi|igbo|indonesia|korean|kyrgyz|japanese|marathi|mundo|naidheachdan|nepali|pashto|persian|pidgin|portuguese|punjabi|russian|serbian|sinhala|somali|swahili|tajik|tamil|telugu|thai|tigrinya|turkce|ukchina|ukrainian|urdu|uzbek|vietnamese|yoruba|zhongwen)"),b=new RegExp("^/ws/av-embeds/"),y=o=>{const e=o||window.location.pathname;return h.test(e)||b.test(e)},_=()=>{const o=g().channel;return"future"===o||"worklife"===o||"travel"===o||"culture"===o},v=()=>!!window.dotcom?.config?.xPlatform,E=y,k=()=>"japanese"===g().channel,L=_,x=()=>"reel"===g().channel,U=()=>"storyworks"===g().channel,C=()=>{const o=window.location.pathname;return("/"===o||"/wwhp"===o)&&!window.dotcom.config?.xPlatform},I=v,j=()=>!(window.orbitData||v||y||"sport"!==g().channel&&"news"!==g().channel),S={name:"ozone",url:()=>I()?"https://prebid.the-ozone-project.com/hw2/OZONEBBC4784/1500000107/current/ozpb.min.js":"https://prebid.the-ozone-project.com/hw2/OZONEBBC4784/8890582654/current/ozpb.min.js",meetsRequirements:o=>void 0!==o.ozone&&o.ozone&&!E(),id:"adunits_loader"},T="log",A={enabled:!1};("undefined"!=typeof window&&/[?|&]ads-debug/.test(window.location.href)||"undefined"!=typeof document&&-1!==document.cookie.indexOf("ads-debug="))&&(A.enabled=!0);const R=function(o){return(e,t=T)=>{A.enabled&&console[t](`dotcom:${o} ${e}`)}},z=(new URLSearchParams(window.location.search),R("sourcepoint")),P={name:"sourcepoint",url:()=>"https://cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js",preLoad:()=>{function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}!function(){for(var e,t,n=[],i=window,a=i;a;){try{if(a.frames.__tcfapiLocator){e=a;break}}catch(e){}if(a===i.top)break;a=i.parent}e||(function o(){var e=i.document,t=!!i.frames.__tcfapiLocator;if(!t)if(e.body){var n=e.createElement("iframe");n.style.cssText="display:none",n.name="__tcfapiLocator",e.body.appendChild(n)}else setTimeout(o,5);return!t}(),i.__tcfapi=function(){for(var o=arguments.length,e=new Array(o),i=0;i<o;i++)e[i]=arguments[i];if(!e.length)return n;"setGdprApplies"===e[0]?e.length>3&&2===parseInt(e[1],10)&&"boolean"==typeof e[3]&&(t=e[3],"function"==typeof e[2]&&e[2]("set",!0)):"ping"===e[0]?"function"==typeof e[2]&&e[2]({gdprApplies:t,cmpLoaded:!1,cmpStatus:"stub"}):n.push(e)},i.addEventListener("message",(function(e){var t="string"==typeof e.data,n={};if(t)try{n=JSON.parse(e.data)}catch(e){}else n=e.data;var i="object"===o(n)?n.__tcfapiCall:null;i&&window.__tcfapi(i.command,i.version,(function(o,n){var a={__tcfapiReturn:{returnValue:o,success:n,callId:i.callId}};e&&e.source&&e.source.postMessage&&e.source.postMessage(t?JSON.stringify(a):a,"*")}),i.parameter)}),!1))}(),function(){var o=window,e=document;function t(e){var t="string"==typeof e.data;try{var n=t?JSON.parse(e.data):e.data;if(n.__cmpCall){var i=n.__cmpCall;o.__uspapi(i.command,i.parameter,(function(o,n){var a={__cmpReturn:{returnValue:o,success:n,callId:i.callId}};e.source.postMessage(t?JSON.stringify(a):a,"*")}))}}catch(n){}}!function t(){if(!o.frames.__uspapiLocator)if(e.body){var n=e.body,i=e.createElement("iframe");i.style.cssText="display:none",i.name="__uspapiLocator",n.appendChild(i)}else setTimeout(t,5)}(),"function"!=typeof __uspapi&&(o.__uspapi=function(){var o=arguments;if(__uspapi.a=__uspapi.a||[],!o.length)return __uspapi.a;"ping"===o[0]?o[2]({gdprAppliesGlobally:!1,cmpLoaded:!1},!0):__uspapi.a.push([].slice.apply(o))},__uspapi.msgHandler=t,o.addEventListener("message",t,!1))}(),window._sp_queue=[],window._sp_={config:{accountId:1786,baseEndpoint:"https://cdn.privacy-mgmt.com",consentLanguage:"en",ccpa:{},gdpr:{},events:{onConsentReady:function(o){const e=new Event("ngas:consentReady"),{dotcom:{userinfo:{eea:t}}}=window;"gdpr"===o&&t&&window.dispatchEvent(e),"ccpa"!==o||t||window.dispatchEvent(e)},onError:function(){z(`onError', ${JSON.stringify(arguments)}`)}}}}},meetsRequirements:o=>window.location===window.parent.location&&(void 0!==o.cmp&&o.cmp)},$=o=>{const e=o?o.replace(/(_|-|\/)[0-9]{7,8}$/,""):"";let t=e.indexOf("/")>-1?e.split("/"):[e];return t=t.filter((o=>""!==o)),{path:e,sectionsArr:t}},q=()=>{document.onreadystatechange=()=>{"complete"===document.readyState&&setTimeout((()=>{(()=>{let o;const e=window.dotcomConfig&&window.dotcomConfig.pageData;e&&(e&&e.collection&&e.collection.length&&(o=e.collection.map((o=>o.title.toLowerCase().replace(/ /g,"_"))).join(","),window.dotcom.data.newKeyValues.coll=o),e&&e.destination&&e.destination.length&&(o=e.destination.map((o=>o.title.toLowerCase().replace(/ /g,"_"))).join(","),window.dotcom.data.newKeyValues.destination=o),e&&e.topics&&e.topics.length&&(o=e.topics.map((o=>o.title.toLowerCase().replace(/ /g,"_"))).join(","),window.dotcom.data.newKeyValues.top_tags=o),e&&e.urn&&(window.dotcom.data.newKeyValues.page_id=e.urn),e&&e.type&&(window.dotcom.data.newKeyValues.page_type=e.type.replace("indexPage","index")),window.dotcom.config.adCampaign&&(window.dotcom.data.newKeyValues.leg_n_keyword=window.dotcom.config.adCampaign),window.dotcom.config.topics&&window.dotcom.config.topics.length&&(window.dotcom.data.newKeyValues.leg_n_topic=window.dotcom.config.topics))})()}),200)}},X=o=>{const{pathname:e,hostname:t,search:n}=window.location,i=(o=>{const e={AV:"media_asset",INDEX:"index",FIX:"index",STY:"story"};let t;const n=window?.SIMORGH_DATA?.pageData?.metadata?.type;return void 0===t&&n&&(t=e[n]),void 0===t&&(t=/[0-9]{7,8}$/.test(o)?"story":"index",(o.includes("/articles/")||o.includes("/article/"))&&(t="story")),/\/(sport|news)\/live\//.test(o)&&(t="live_event"),t})(e),{adCampaign:a,topics:d=[]}=window.dotcom.config,s=(o=>{const e=o.split("/");return"wwhp"===e[1]?"homepage":e[1]||"homepage"})(e),c=(o=>{let e=/[0-9]{7,8}$/.test(o)?"content":"index";return(o.includes("/articles/")||o.includes("/article/"))&&(e="content"),e})(e),r=(()=>{let o="nonbbc";const e=document.referrer.split("https://www.bbc.com/");return 2===e.length&&(o=encodeURIComponent(e[1].replace(/-|\/|_/g,"")),o.length>64&&(o="")),o})(),w=(o=>{const{path:e,sectionsArr:t}=$(o);return e===o&&1===t.length?"homepage":t[1]?t[1]:""})(e),l=(o=>{const{sectionsArr:e}=$(o);return e[2]?e[2]:""})(e),p=(o=>{let e;if(o){const t=o.split("/");4===t.length&&"article"===t[2]?e=t[3]:(/([0-9]{7,8})$/.test(o)&&(e=RegExp.$1),/(\/articles\/)(c[0-9a-hj-np-z]{10,}o$)/.test(o)&&(e=RegExp.$2))}return e})(e),m=((o,e)=>{if("worldservice"!==e)return"";let t;return t=o.split("/").pop().split("_"),t.shift(),t=t.join("_"),t})(e,s),u=(o=>{const{top:e,self:t}=window,n=e!==t?e.location.search:o;return new URLSearchParams(n)})(n);window.dotcom.data={adUnit:"",channel:s,section:w,subsection:l,asset_type:i,adCampaign:a,topics:d,story_id:p??"",urlParams:u,keyValues:{asset_type:i,channel:s,ctype:c,sectn:w,...l&&{subsect:l},domain:t,referrer:r,...p&&{story_id:p},...m&&{title:m}},newKeyValues:{page_id:"",grp:"",pas_tags:"",top_tags:"",fran_tags:"",prod:"bbccom",ref_pillar:"",coll:"",destination:"",pillar:"",sect:"",page_type:"",fed_id:"",leg_v_col:"",leg_t_dest:"",leg_n_keyword:"",leg_n_topic:"",leg_adunit2:"",domain:t,referrer:r}},o&&Object.keys(o).forEach((e=>{"tags"===e&&(o[e]=encodeURIComponent(o[e])),window.dotcom.data.keyValues[e]=o[e]})),I()&&q()},O=()=>window.dotcom.data,D="tkn-exp";let B,G,N;window.dotcom=window.dotcom||{},window.dotcom.idcta=window.dotcom.idcta||{};const M=async()=>{let e="https://idcta.api.bbc.com/idcta/config";f.isTestEnv(window.location.href)&&(e="https://idcta.test.api.bbc.com/idcta/config"),f.isStageEnv(window.location.href)&&(e="https://idcta.stage.api.bbc.com/idcta/config");const t=(o=>{let e=`${o.toUpperCase()}_GNL`;return L()&&(e="FEATURES_SITE_GNL"),E()&&(e="NEWS_LANGUAGES_GNL"),f.isTestEnv()&&(e=`${e}_TEST`),e})(window.dotcom.data.channel),n=`${window.location.href.split("?")[0]}?zephr-REPLACETYPE`,i=`${e}?userOrigin=${t}&ptrt=${encodeURIComponent(n)}`,a=await fetch(i,{cache:"no-store"});if(!a.ok)throw new Error(`ID CTA Config Endpoint returned ${a.status}`);if(B=await a.json(),window.dotcom.idcta.signout=()=>{window.dotcom.idcta.signedIn&&(window.dotcom.idcta.signedIn=!1,window.location.href=`${B.signout_url}?ptrt=${window.location.href}`)},G=o(B.identity.idSignedInCookieName),G){window.dotcom.idcta.signedIn=!0;const o=window.atob(G);N=JSON.parse(o)}return window.dotcom.idcta.signin_url=B.signin_url,window.dotcom.idcta.register_url=B.register_url,window.dotcom.idcta.signout_url=B.signout_url,"GREEN"===B["id-availability"]},V=R("xpel"),K=((o=window.location.href)=>f.isTestEnv(o)?"https://xproxy.test.api.bbc.com":f.isStageEnv(o)?"https://xproxy.stage.api.bbc.com":"https://xproxy.api.bbc.com")(),F=()=>{const e=o("blaize_jwt"),t=window.dotcom.idcta?.signedIn||!1,n=O().keyValues||{};return n.topics=window.dotcom.config?.topics?.toString(),n.country=window.dotcom.userinfo.country,n.under16=o("ckns_under16"),n.marketing=o("ckns_marketing"),n.signin_url=window.dotcom.idcta?.signin_url,n.register_url=window.dotcom.idcta?.register_url,n.signedIn=t,!!window.dotcom.flags.zephr&&(window.zephrBrowser&&window.zephrBrowser.run({cdnApi:K,jwt:e,customData:n}),!0)},J=()=>{const e=o("blaize_jwt"),t=o("ckns_marketing"),n={credentials:"include",method:"POST"};if(window.dotcom.flags.xproxy&&window.dotcom.flags.idcta&&window.dotcom.idcta.signedIn){if(t)n.body=JSON.stringify({marketingOptIn:t});else if(e)return void F();fetch(`${K}/zephr-token`,n).then((()=>{var o;V("fetch xproxy success"),t&&(o="ckns_marketing","undefined"!=typeof document&&o&&(document.cookie=`${encodeURIComponent(o)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.bbc.com; path=/`)),F()})).catch((()=>{V("fetch xproxy fail"),F()}))}},Q=()=>{window.dotcom.flags.idcta&&window.dotcom.idcta.signedIn&&(async o=>{const{[D]:e}=N,t=new Date(e-6e5);if(Date.now()<t&&!o)return"ensureTokens success - token still valid";const n=await fetch(B.signin_url,{credentials:"include",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error(`ensureTokens fail - ${B.signin_url} returned ${n.status}`);return"ensureTokens success - token refreshed!"})(!0).then((o=>{V(o),J(),window.dotcom.xpel={callProxy:J}})).catch((o=>{V(o)}))},Y=()=>{window.dotcom.flags.zephr&&((()=>{const o=(o,e)=>{const t=document.createElement("div");t.setAttribute("class",o),e?document.body.insertBefore(t,document.body.firstChild):document.body.appendChild(t)};0===document.getElementsByClassName(`zephr_${O().asset_type}`).length&&o(`zephr_${O().asset_type}`),0===document.getElementsByClassName("zephr_meter").length&&o("zephr_meter"),window.dotcom.flags.beta&&!I()&&(o("zephr_join_beta",!0),o(`zephr_join_beta_${O().asset_type}`))})(),(()=>{if(window.Reverb)window.dotcom.reverbInstance=window.Reverb;else try{window.__reverb.__reverbLoadedPromise.then((o=>{window.dotcom.reverbInstance=o}))}catch(o){V("Fail to initiate reverb fallback")}})()),f.isSignedIn()||(window.dotcom.flags.xproxy=!1),window.dotcom.flags.xproxy?Q():window.dotcom.flags.zephr&&F()},Z="https://assets.zephr.com/zephr-browser/1.5.2/zephr-browser.umd.js",H=o=>{window.zephrBrowser=o,Y()},W={name:"zephr",url:()=>Z,preLoad:()=>{window.zephrBrowser=window.zephrBrowser||{}},meetsRequirements:()=>window.dotcom.flags.zephr,onLoad:()=>{H(window.zephrBrowser)},requirejs:()=>{window.requirejs([Z],(o=>{H(o)}))}},oo=R("loader");window.dotcom=window.dotcom||{},window.dotcom.loader=window.dotcom.loader||{loading:[],loaded:[],failed:[],waiting:[]};const eo=({src:o,onLoad:e,onError:t,firstParty:n,legacy:i,id:a})=>{const d=document.createElement("script");d.type="text/javascript",d.async=!0,d.src=o,d.onload=e,d.onerror=t,i?(d.defer=!0,d.nomodule=!0):n&&(d.type="module"),a&&d.setAttribute("id",a),document.head.appendChild(d)},to=({src:o,onLoad:e,onError:t})=>{const n=new Image(1,1);n.onload=e,n.onerror=t,n.src=o},no=({name:o,src:e,onLoad:t,onError:n})=>{const{require:i}=window;i.config({paths:{[o]:e}}),i([o],(o=>t(o)),(()=>n()))},io=(o,e)=>{window.dotcom.loader.waiting[o].forEach((({resolve:t,reject:n})=>{e?t(`${o} has loaded`):n(new Error(`${o} failed to load`))}))},ao=({name:o,url:e,urlParams:t,requireUrl:n,preLoad:i,onLoad:a,isImage:d,id:s},c,r)=>{const{requirejs:w,dotcom:l}=window;l.loader.loading.push(o),l.loader.waiting[o]=[],"function"==typeof i&&i();const p="function"==typeof t?t():"",m=w&&n?n():e(p);let u=eo;d&&(u=to),w&&n&&(u=no),u({name:o,src:m,onLoad:e=>{const t=`load success > ${o}`;oo(t),l.loader.loaded.push(o),"function"==typeof a&&a(e),c&&c(t),io(o,!0)},onError:()=>{const e=`load fail > ${o}`;oo(e),l.loader.failed.push(o),r&&r(new Error(e)),io(o,!1)},firstParty:!1,legacy:!1,id:s})},so=({name:o,url:e,urlParams:t,requireUrl:n,meetsRequirements:i,preLoad:a,onLoad:d,image:s=!1,id:c=null})=>{!window.dotcom.loader.loading.includes(o)&&i(window.dotcom.flags)&&ao({name:o,url:e,urlParams:t,requireUrl:n,preLoad:a,onLoad:d,image:s,id:c})},co=({name:o,url:e,urlParams:t,requireUrl:n,meetsRequirements:i,preLoad:a,onLoad:d,image:s=!1,id:c=null})=>new Promise(((r,w)=>{window.dotcom.loader.loaded.includes(o)?r(`${o} was already loaded`):window.dotcom.loader.failed.includes(o)?w(new Error(`${o} failed to load`)):window.dotcom.loader.loading.includes(o)?window.dotcom.loader.waiting[o].push({resolve:r,reject:w}):i(window.dotcom.flags)?ao({name:o,url:e,urlParams:t,requireUrl:n,preLoad:a,onLoad:d,image:s,id:c},r,w):w(new Error(`${o} doesn't meet requirements`))})),ro=o=>{o.forEach((o=>{so(o)}))},wo=(o,e)=>{eo({src:o,onLoad:()=>{},onError:()=>{},firstParty:!0,legacy:e})},lo=(o,e)=>new Promise(((t,n)=>{eo({src:o,onLoad:t,onError:n,firstParty:!0,legacy:e})})),po=(o,e,t,n,i)=>{if(!e){e=e||{},window.permutive=e,e.q=[],e.config=i||{},e.config.projectId=t,e.config.apiKey=n,e.config.environment=e.config.environment||"production";for(var a=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],d=0;d<a.length;d++){var s=a[d];e[s]=function(o){return function(){var t=Array.prototype.slice.call(arguments,0);e.q.push({functionName:o,arguments:t})}}(s)}}},mo="e488cdb0-e7cb-4d91-9648-60d437d8e491",uo={name:"permutive",url:()=>`https://cdn.permutive.com/${mo}-web.js`,preLoad:()=>{po(document,window.permutive,mo,"1bb84885-9325-4fef-adda-a208032b2715",{consentRequired:!0})},meetsRequirements:o=>!(E()&&!k())&&(void 0!==o.permutive&&o.permutive)},fo={name:"grapeshot",urlParams:()=>({pageUrl:window.location.href.split("?")[0]}),url:o=>{let e=o.pageUrl;return e.indexOf("/ws/av-embeds/cps/")>0&&(e=`${e.split("ws/av-embeds/cps/")[0]}${e.split("/ws/av-embeds/cps/")[1].split("/").splice(0,2).join("/")}`),e=encodeURIComponent(e),`https://bbc.gscontxt.net/?url=${e}`},meetsRequirements:o=>void 0!==o.grapeshot&&o.grapeshot},go=o=>{const e=void 0!==n("covatic")?n("covatic"):2===window.dotcom.consent;o.Client("U2FsdGVkX18EsRRiop2bz2RGRCxBsCIBgDXwov3o+yGa10gNZfD5U7y683Ja4/kuLsfa+sKCaGH8ZcR8as78SpmuJAsleZqjKzAxgG7cEz/OQevd0xUqQG4rb5GczlQa4Be1qBGI5X+1BWz+JoFUmfikRq12Pm0Q+t1MV37ddCQYEAD+WXDeJsdGvnadtPAqREhsxQpplDcbh42OBugDVqXmVsXU72lXzfJK1swkenta+rGoVMQXSXOb4g6YkUP3"),e&&o.notifyConsent(!0),window.dotcom.covaticBrowserSDK=window.dotcom.covaticBrowserSDK||o},ho={name:"covatic",url:()=>"https://browser.covatic.io/sdk/v1/latest.js",requireUrl:()=>"https://browser.covatic.io/sdk/v1/latest",onLoad:o=>{if(o?.Client)return void go(o);const{covaticBrowserSDK:e}=window;if(e?.Client)return void go(e);R("covatic")("SDK failed to load","error")},meetsRequirements:o=>"us"===window.dotcom.userinfo.country&&void 0!==o.covatic&&o.covatic},bo={name:"ias",url:()=>"https://cdn.adsafeprotected.com/iasPET.1.js",preLoad:()=>{window.__iasPET=window.__iasPET||{},window.__iasPET.queue=window.__iasPET.queue||[],window.__iasPET.pubId="9708"},meetsRequirements:o=>!E()&&(-1!==window.location.search.indexOf("ias_publisher")||void 0!==o.ias_publisher&&o.ias_publisher)},yo={name:"theMediaTrust",url:()=>"https://scripts.webcontentassessor.com/scripts/64ca3dfd44dd68a629e2e51a27e7ccd960974b5961e4ca2897139d14bf10be8b",meetsRequirements:o=>void 0!==o.tmt_media_filter&&o.tmt_media_filter},_o={name:"gpt",url:()=>"https://securepubads.g.doubleclick.net/tag/js/gpt.js",meetsRequirements:o=>void 0!==o.adverts&&o.adverts&&window.dotcom.config.pageAds},vo=(new URLSearchParams(window.location.search),{name:"speedcurve",preLoad:()=>{LUX=function(){function o(){return Date.now?Date.now():+new Date}var e,t=o(),n=window.performance||{},i=n.timing||{navigationStart:(null===(e=window.LUX)||void 0===e?void 0:e.ns)||t};function a(){return n.now?(e=n.now(),Math.floor(e)):o()-i.navigationStart;var e}(LUX=window.LUX||{}).ac=[],LUX.addData=function(o,e){return LUX.cmd(["addData",o,e])},LUX.cmd=function(o){return LUX.ac.push(o)},LUX.getDebug=function(){return[[t,0,[]]]},LUX.init=function(){return LUX.cmd(["init"])},LUX.mark=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];if(n.mark)return n.mark.apply(n,o);var t=o[0],i=o[1]||{};void 0===i.startTime&&(i.startTime=a()),LUX.cmd(["mark",t,i])},LUX.markLoadTime=function(){return LUX.cmd(["markLoadTime",a()])},LUX.measure=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];if(n.measure)return n.measure.apply(n,o);var t,i=o[0],d=o[1],s=o[2];(t="object"==typeof d?o[1]:{start:d,end:s}).duration||t.end||(t.end=a()),LUX.cmd(["measure",i,t])},LUX.send=function(){return LUX.cmd(["send"])},LUX.ns=t;var d=LUX;if(window.LUX_ae=[],window.addEventListener("error",(function(o){window.LUX_ae.push(o)})),window.LUX_al=[],"function"==typeof PerformanceObserver&&"function"==typeof PerformanceLongTaskTiming){var s=new PerformanceObserver((function(o){for(var e=o.getEntries(),t=0;t<e.length;t++)window.LUX_al.push(e[t])}));try{s.observe({type:"longtask"})}catch(o){}}return d}()},url:()=>"https://cdn.speedcurve.com/js/lux.js?id=4446653400",meetsRequirements:o=>{let e=void 0!==o.speedcurve&&o.speedcurve&&100*Math.random()<5;const t=I()?"dotcom":L()?"features":x()?"reel":C()||j()&&!0===window.dotcom.userinfo.notUkIp?"wwhp":"";return!(!e||!t)&&(window.LUX=window.LUX||{},LUX.label=t,!0)}}),Eo={name:"piano",url:()=>"//cdn.tinypass.com/api/tinypass.min.js",meetsRequirements:o=>void 0!==o.piano&&o.piano&&"news"===O().channel||-1!==window.location.search.indexOf("piano-debug"),onLoad:()=>{const{tp:o}=window;f.isAdsDebug()&&o.push(["setDebug",!0]),o.push(["setAid","7I7hmRshpe"]),o.push(["setEndpoint","https://buy-eu.piano.io/api/v3"]),o.push(["setCxenseSiteId","3606632254074155369"]),o.push(["init",function(){o.experience.init()}])}};window.performance.mark("bootstrap-js-load");const ko="https://gn-web-assets.api.bbc.com/ngas";let Lo="";Lo="latest/";let xo="";const Uo=`${ko}/${Lo}dotcom-ads.js`,Co=`${ko}/${Lo}dotcom-analytics.js`,Io=`${ko}/${Lo}dotcom-preroll.js`,jo=()=>{["https://securepubads.g.doubleclick.net","https://pagead2.googlesyndication.com","https://prebid.the-ozone-project.com","https://elb.the-ozone-project.com","https://bbc.gscontxt.net","https://cdn.permutive.com","https://api.permutive.com","https://cdn.adsafeprotected.com","https://static.adsafeprotected.com"].forEach((o=>{const e=document.createElement("link");e.href=o,e.rel="preconnect",document.head.appendChild(e)}))},So=()=>!0===window.dotcom.flags.adverts&&!0===window.dotcom.config.allowAdvertising,To=()=>{window.__tcfapi&&window.__tcfapi("getTCData",2,((o,e)=>{e&&(o.gdprApplies?window._sp_.gdpr.loadPrivacyManagerModal("779247"):window.__uspapi("getUSPData",1,(o=>{-1===JSON.stringify(o).indexOf("---")&&window._sp_.ccpa.loadPrivacyManagerModal("648383")})))}))};window.dotcom=window.dotcom||{},window.dotcom.cmd=window.dotcom.cmd||[],window.dotcom.userinfo={state:0,eea:!0,country:"gb",ads:!1,notUkIp:!1,...window.dotcom.userinfo},window.dotcom.flags={state:0,adverts:!1,idcta:!1,...window.dotcom.flags},window.dotcom.vendorConsent={},window.dotcom.showSourcePointMessage=To,window.dotcom.openPrivacyManagerModal=To;const Ao=Object.freeze({pageAds:!0,playerAds:!0,lang:"en",adCampaign:"",topics:[],allowAdvertising:!0,opsFlags:"",ngasFlags:"",userinfo:"",xPlatform:!1,comscorekw:"",adsSubsection:""});window.dotcom.config={...Ao,...window.dotcom.config};const Ro=(o,e)=>{if(null===e)return;const t=(o=>Object.keys(Ao).find((e=>e.toLowerCase()===o.toLowerCase())))(o);void 0!==t?window.dotcom.config[t]=e:f.isAdsDebug()&&console.log(`dotcom invalid config key: ${o}`)};window.dotcom.setConfig=Ro;let zo=[],Po=[];if(window.dotcom.ads&&window.dotcom.ads.resolves){const{resolves:o}=window.dotcom.ads;o&&(o.getAdTag&&(zo=o.getAdTag.slice()),o.enabled&&(Po=o.enabled.slice()),delete window.dotcom.ads.resolves)}const $o=(o,e)=>{window.googletag.cmd.push((()=>{window.googletag.pubads().setTargeting(o,e)}))};window.dotcom.ads={instances:{},resetAds:()=>{},destroySlot:()=>{},registerSlot:(o,e,t,n)=>{So()&&window.dotcom.cmd.push((()=>{window.dotcom.ads.registerSlot(o,e,t,n)}))},enabled:f.isAdsEnabled,setTargeting:(o,e)=>{window.googletag?$o(o,e):window.dotcom.cmd.push((()=>{$o(o,e)}))},getAdTag:()=>new Promise((o=>{var e;void 0!==window.dotcom.ads.adTag?(e=[fo,bo],new Promise((o=>{let t=0,n=[];e.forEach((i=>{co(i).then((o=>{n=[...n,o]})).catch((o=>{n=[...n,o]})).then((()=>{t+=1,t===e.length&&o(n)}))}))}))).then((()=>window.dotcom.ads.adTag())).then((e=>{o(e)})):So()&&window.dotcom.config.playerAds?zo.push(o):o("")}))};const qo={};if(window.bbcdotcom){const o=window.bbcdotcom;o.pubsub.on=(o,e)=>{qo[o]||(qo[o]=[]),qo[o].push(e)},o.pubsub.off=(o,e)=>{if(qo[o]){const t=qo[o].indexOf(e);-1!==t&&qo[o].splice(t,1)}},o.pubsub.trigger=(o,e)=>{qo[o]&&qo[o].forEach((o=>o(e)))}}const Xo=(o=!0)=>{zo.length>0&&(zo.forEach((e=>e(o?window.dotcom.ads.getAdTag():""))),zo=[])},Oo=()=>{So()?(ro([uo,bo,ho]),lo(Uo,xo).then((()=>{!0===window.dotcom.flags.analytics&&wo(Co,xo),so(Eo),(()=>{const o=()=>so(vo);window.requestIdleCallback?window.requestIdleCallback(o):setTimeout(o,2e3)})()})),window.dotcom.config.playerAds?lo(Io,xo).then(Xo):Xo(!1)):(Xo(!1),(()=>{let o;if(window.bbcdotcom){if("news"===O().channel){const o=document.getElementsByClassName("nw-c-leaderboard-ad");o.length&&(o[0].style.height="0px")}"sport"===O().channel&&(o=document.getElementById("bbccom_leaderboard_1_2_3_4"),o&&(o.style.height="0px",o.style.paddingBottom="0px"))}else o=document.getElementById("dotcom-leaderboard"),o&&(o.style.height="0px")})(),!0===window.dotcom.flags.analytics&&wo(Co,xo)),window.performance.mark("bootstrap-js-complete"),window.performance.measure("bootstrap-js-duration","bootstrap-js-load","bootstrap-js-complete")},Do=()=>{if(!0===window.dotcom.userinfo.notUkIp&&!0===window.dotcom.userinfo.ads){if(f.checkCookies(),X(),window.location.hostname&&window.location.hostname.includes(".co.uk"))return window.dotcom.flags.adverts=!1,window.dotcom.flags.analytics=!1,window.dotcom.flags.zephr=!1,window.dotcom.flags.xproxy=!1,void Oo();So()&&ro([S,fo,yo,_o]),co(P).then((()=>{if(E()){const o=document.body.querySelector("header");o&&o.style.setProperty("z-index","2147483643")}new Promise((o=>{const e=(e,t)=>{t&&(e.gdprApplies?(window.dotcom.gdprApplies=!0,window.dotcom.vc=e.vendor.consents,i("comscore",e.vendor.consents[77]),i("permutive",e.vendor.consents[361]),i("nielsen",e.vendor.consents[373]&&e.vendor.consents[812]),o(!0)):(window.__uspapi("getUSPData",1,(o=>{-1===JSON.stringify(o).indexOf("---")&&(window.dotcom.ccpaApplies=!0,window.dotcom.ccpaString=o.uspString,0===o.uspString.indexOf("1YY")&&(i("comscore",!1),i("permutive",!1),i("nielsen",!1),i("covatic",!1)))})),o(!0)),o(!0)),o(!0)};window.addEventListener("ngas:consentReady",(()=>{window.__tcfapi("addEventListener",2,e,[77,164,361,373,812])}))})).then((()=>{Oo()}))})).catch((o=>{console.log(`Failed to load sourcepoint - ${o}`),Oo()})),E()||U()||I()||!window.dotcom.flags.zephr&&!window.dotcom.flags.xproxy?(window.dotcom.flags.zephr=!1,window.dotcom.flags.xproxy=!1):M().then((o=>{window.dotcom.flags.idcta=o,o?window.dotcom.flags.zephr?window.requirejs?W.requirejs():so(W):Y():(window.dotcom.flags.zephr=!1,window.dotcom.flags.xproxy=!1)})).catch((()=>{console.log("Fail to initiate idcta"),window.dotcom.flags.zephr=!1,window.dotcom.flags.xproxy=!1}))}};var Bo;window.dotcom.featuresInited=!1,window.dotcom.locationChange=o=>{var e;f.syncAdsEnabled()&&(L()&&window.dotcom.featuresInited&&(O().keyValues.pageType!==o.keyValues.pageType&&window.dotcom.ads.destroySlots(),O().channel!==o.keyValues.channel&&window.dotcom.ads.destroySlots()),e=o?o.keyValues:null,delete window.dotcom.data,X(e),L()||(window.dotcom.ads.resetAds(),window.dotcom.reinitAds()))},Bo=window.dotcomConfig||{},Object.keys(Bo).forEach((o=>{Ro(o,Bo[o])})),Ro("lang",document.documentElement.lang||window.dotcom.config.lang||Ao.lang),(async()=>{await f.init().catch((o=>{console.log(o)})),f.isDotcomAllowed()&&So()&&jo(),window.dotcom.userinfo.state>0&&window.dotcom.flags.state>0?Do():window.dotcom.userinfo.state<0||window.dotcom.flags.state,Po.length&&Po.forEach((o=>{f.isAdsEnabled().then((e=>{o(e)}))}))})()}();
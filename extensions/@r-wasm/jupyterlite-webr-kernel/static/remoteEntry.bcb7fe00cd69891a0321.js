var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,f,s,d,c,p,h,v,m,b,g,y,w={548:(e,r,t)=>{var n={"./index":()=>t.e(924).then((()=>()=>t(924))),"./extension":()=>t.e(924).then((()=>()=>t(924))),"./style":()=>t.e(631).then((()=>()=>t(631)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},k={};function S(e){var r=k[e];if(void 0!==r)return r.exports;var t=k[e]={exports:{}};return w[e](t,t.exports,S),t.exports}S.m=w,S.c=k,S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{43:"fadaec40722488dbf52a",631:"8327ddf7c0470286cc7f",683:"68fd35c0a8dbf70b3952",924:"cd25f308b1d12761d6b3"}[e]+".js?v="+{43:"fadaec40722488dbf52a",631:"8327ddf7c0470286cc7f",683:"68fd35c0a8dbf70b3952",924:"cd25f308b1d12761d6b3"}[e],S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@r-wasm/jupyterlite-webr-kernel:",S.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],i="@r-wasm/jupyterlite-webr-kernel",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@r-wasm/jupyterlite-webr-kernel","0.3.0",(()=>S.e(924).then((()=>()=>S(924))))),l("webr","0.3.0",(()=>Promise.all([S.e(43),S.e(683)]).then((()=>()=>S(43)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==d?l>n&&!a:""==d!=a);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=n){if(f!=e[l])return!1}else{if(a?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||s<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",f=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||d(u(e,t,a,n)),c(e[t][a])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,a){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,n,a)):e(r,S.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),v=p(((e,r,t,n,a)=>{var o=r&&S.o(r,t)&&s(r,t,n);return o?c(o):a()})),m={},b={348:()=>v("default","webr",[2,0,3,0],(()=>Promise.all([S.e(43),S.e(683)]).then((()=>()=>S(43))))),620:()=>h("default","@jupyterlite/kernel",[2,0,3,0,,"rc",1])},g={924:[348,620]},y={},S.f.consumes=(e,r)=>{S.o(g,e)&&g[e].forEach((e=>{if(S.o(m,e))return r.push(m[e]);if(!y[e]){var t=r=>{m[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}};y[e]=!0;var n=r=>{delete m[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var a=b[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}}))},(()=>{var e={89:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=S.p+S.u(r),i=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);l&&l(S)}for(r&&r(t);u<o.length;u++)a=o[u],S.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_r_wasm_jupyterlite_webr_kernel=self.webpackChunk_r_wasm_jupyterlite_webr_kernel||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var j=S(548);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@r-wasm/jupyterlite-webr-kernel"]=j})();
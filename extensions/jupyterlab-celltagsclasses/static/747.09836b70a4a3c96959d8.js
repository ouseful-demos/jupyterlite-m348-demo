"use strict";(self.webpackChunkjupyterlab_celltagsclasses=self.webpackChunkjupyterlab_celltagsclasses||[]).push([[747],{150:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n\n.cell-tag-celltagsclasses-test1 {\n  padding: 10px;\n  border: 2.5px black solid;\n  border-radius: 10px;\n\n  /* could be overridden if cell is active */\n  background-color: yellow !important;\n}\n\n.cell-tag-celltagsclasses-test2 {\n  /* see how it goes if cell is active */\n  background-color: red;\n}\n\n.cell-tag-celltagsclasses-test1.cell-tag-celltagsclasses-test2 {\n  background-color: orange !important;\n}\n\n/* hide the 6-buttons toolbar */\n.cell-tag-celltagsclasses-test2 .jp-cell-toolbar {\n  display: none;\n}\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(s[l]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var l=e[c],i=r.base?l[0]+r.base:l[0],u=o[i]||0,p="".concat(i," ").concat(u);o[i]=u+1;var d=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:v,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var l=r(e,a),i=0;i<o.length;i++){var u=n(o[i]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},747:(e,t,n)=>{n.r(t);var r=n(379),a=n.n(r),o=n(795),s=n.n(o),c=n(569),l=n.n(c),i=n(565),u=n.n(i),p=n(216),d=n.n(p),f=n(589),v=n.n(f),h=n(150),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),a()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals}}]);
"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3604],{60808:(e,o,n)=>{n.r(o),n.d(o,{main:()=>L});var t=n(20977),r=n(88688),a=n(22857),l=(n(11555),n(1892)),i=n.n(l),s=n(95760),p=n.n(s),A=n(38311),u=n.n(A),c=n(58192),b=n.n(c),h=n(38060),f=n.n(h),d=n(54865),j=n.n(d),m=n(14364),y={};y.styleTagTransform=j(),y.setAttributes=b(),y.insert=u().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=f(),i()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals,n(29486),n(65573),n(95456),n(86466);var g=n(39352),B={};B.styleTagTransform=j(),B.setAttributes=b(),B.insert=u().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=f(),i()(g.Z,B),g.Z&&g.Z.locals&&g.Z.locals;var C=n(41919),x={};x.styleTagTransform=j(),x.setAttributes=b(),x.insert=u().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=f(),i()(C.Z,x),C.Z&&C.Z.locals&&C.Z.locals,n(39739),n(94395),n(48808),n(18934),n(24017),n(72867),n(36309),n(91532),n(17363),n(9755),n(58169),n(15055),n(76838),n(53109),n(3727),n(22090),n(26053),n(84221),n(87967),n(73801),n(79589),n(16388),n(37609),n(49733),n(74958);var E=n(12563),v={};v.styleTagTransform=j(),v.setAttributes=b(),v.insert=u().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=f(),i()(E.Z,v),E.Z&&E.Z.locals&&E.Z.locals,n(94453);var w=n(59988),T={};T.styleTagTransform=j(),T.setAttributes=b(),T.insert=u().bind(null,"head"),T.domAPI=p(),T.insertStyleElement=f(),i()(w.Z,T),w.Z&&w.Z.locals&&w.Z.locals;var k=n(1555),F={};F.styleTagTransform=j(),F.setAttributes=b(),F.insert=u().bind(null,"head"),F.domAPI=p(),F.insertStyleElement=f(),i()(k.Z,F),k.Z&&k.Z.locals&&k.Z.locals;var D=n(94298),P={};P.styleTagTransform=j(),P.setAttributes=b(),P.insert=u().bind(null,"head"),P.domAPI=p(),P.insertStyleElement=f(),i()(D.Z,P),D.Z&&D.Z.locals&&D.Z.locals;const Z=[n.e(58144).then(n.t.bind(n,58144,23))],S=["@jupyterlab/application-extension:dirty","@jupyterlab/application-extension:info","@jupyterlab/application-extension:layout","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:mode-switch","@jupyterlab/application-extension:notfound","@jupyterlab/application-extension:paths","@jupyterlab/application-extension:property-inspector","@jupyterlab/application-extension:shell","@jupyterlab/application-extension:status","@jupyterlab/application-extension:top-bar","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:kernel-status","@jupyterlab/apputils-extension:palette-restorer","@jupyterlab/apputils-extension:print","@jupyterlab/apputils-extension:resolver","@jupyterlab/apputils-extension:running-sessions-status","@jupyterlab/apputils-extension:splash","@jupyterlab/apputils-extension:workspaces","@jupyterlab/console-extension:kernel-status","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:path-status","@jupyterlab/docmanager-extension:saving-status","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/filebrowser-extension:widget","@jupyterlab/fileeditor-extension:editor-syntax-status","@jupyterlab/fileeditor-extension:language-server","@jupyterlab/fileeditor-extension:search","@jupyterlab/help-extension:about","@jupyterlab/help-extension:open","@jupyterlab/notebook-extension:execution-indicator","@jupyterlab/notebook-extension:kernel-status","@jupyterlab/notebook-extension:language-server","@jupyterlab/notebook-extension:search","@jupyterlab/notebook-extension:toc","@jupyterlab/notebook-extension:update-raw-mimetype","@jupyter-notebook/application-extension:logo","@jupyter-notebook/application-extension:opener","@jupyter-notebook/application-extension:path-opener","@jupyter-notebook/help-extension:about"];async function M(e,o){try{return(await window._JUPYTERLAB[e].get(o))()}catch(n){throw console.warn(`Failed to create module: package: ${e}; module: ${o}`),n}}async function L(){const e=[],o=[],l=[],i=[],s=[],p=[],A=JSON.parse(a.PageConfig.getOption("federated_extensions")),u=new Set;function*c(e){let o;o=e.hasOwnProperty("__esModule")?e.default:e;let n=Array.isArray(o)?o:[o];for(let e of n)a.PageConfig.Extension.isDisabled(e.id)||S.includes(e.id)||S.includes(e.id.split(":")[0])||(yield e)}A.forEach((e=>{e.liteExtension?p.push(M(e.name,e.extension)):(e.extension&&(u.add(e.name),o.push(M(e.name,e.extension))),e.mimeExtension&&(u.add(e.name),l.push(M(e.name,e.mimeExtension))),e.style&&i.push(M(e.name,e.style)))}));const b=[];if(!u.has("@jupyterlab/javascript-extension"))try{let e=n(76616);for(let o of c(e))b.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/json-extension"))try{let e=n(99944);for(let o of c(e))b.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/vega5-extension"))try{let e=n(31092);for(let o of c(e))b.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlite/iframe-extension"))try{let e=n(73247);for(let o of c(e))b.push(o)}catch(e){console.error(e)}if((await Promise.allSettled(l)).forEach((e=>{if("fulfilled"===e.status)for(let o of c(e.value))b.push(o);else console.error(e.reason)})),!u.has("@jupyterlab/application-extension"))try{let o=n(69690);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/apputils-extension"))try{let o=n(93172);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/cell-toolbar-extension"))try{let o=n(39146);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/codemirror-extension"))try{let o=n(53332);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/completer-extension"))try{let o=n(33195);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/console-extension"))try{let o=n(4367);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/csvviewer-extension"))try{let o=n(36454);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/docmanager-extension"))try{let o=n(1954);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/filebrowser-extension"))try{let o=n(42605);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/fileeditor-extension"))try{let o=n(3209);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/help-extension"))try{let o=n(63649);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/imageviewer-extension"))try{let o=n(95083);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mainmenu-extension"))try{let o=n(80304);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mathjax-extension"))try{let o=n(60972);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/metadataform-extension"))try{let o=n(40690);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/notebook-extension"))try{let o=n(68092);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/rendermime-extension"))try{let o=n(29252);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/settingeditor-extension"))try{let o=n(54430);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/shortcuts-extension"))try{let o=n(24331);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-extension"))try{let o=n(60211);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let o=n(25702);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-light-extension"))try{let o=n(4778);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/tooltip-extension"))try{let o=n(33599);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/translation-extension"))try{let o=n(14345);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlab/ui-components-extension"))try{let o=n(39604);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/application-extension"))try{let o=n(99411);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/console-extension"))try{let o=n(25427);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/docmanager-extension"))try{let o=n(56877);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/help-extension"))try{let o=n(58630);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyter-notebook/tree-extension"))try{let o=n(30364);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlite/application-extension"))try{let o=n(91243);for(let n of c(o))e.push(n)}catch(e){console.error(e)}if(!u.has("@jupyterlite/notebook-application-extension"))try{let o=n(94202);for(let n of c(o))e.push(n)}catch(e){console.error(e)}(await Promise.allSettled(o)).forEach((o=>{if("fulfilled"===o.status)for(let n of c(o.value))e.push(n);else console.error(o.reason)})),(await Promise.all(Z)).forEach((e=>{for(let o of c(e))s.push(o)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let o of c(e.value))s.push(o);else console.error(e.reason)})),(await Promise.allSettled(i)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const h=new r.JupyterLiteServer({});h.registerPluginModules(s),await h.start();const{serviceManager:f}=h,d=new t.NotebookApp({mimeExtensions:b,serviceManager:f});d.name=a.PageConfig.getOption("appName")||"JupyterLite",d.registerPluginModules(e),"true"===(a.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=d),await d.start(),await d.restored}},14364:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=l},41919:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-DropdownMenu,\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-ToolbarButton,\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-CommandToolbarButton {\n  border: solid 1px var(--jp-border-color2);\n  margin: 1px;\n  padding: 0px;\n}\n\n.jp-FileBrowser-toolbar > .jp-Toolbar-item.jp-ToolbarButton:hover,\n.jp-FileBrowser-toolbar > .jp-Toolbar-item.jp-CommandToolbarButton:hover,\n.jp-FileBrowser-toolbar > .jp-Toolbar-item.jp-DropdownMenu:hover {\n  background: var(--neutral-fill-stealth-hover);\n}\n\n.jp-FileBrowser-toolbar .lm-MenuBar-item {\n  height: var(--jp-private-toolbar-height);\n  display: inline-flex;\n  align-items: center;\n}\n\n.jp-FileBrowser-toolbar .jp-ToolbarButtonComponent {\n  height: var(--jp-flat-button-height);\n}\n\n.jp-FileBrowser-toolbar jp-button.jp-ToolbarButtonComponent:hover {\n  background: inherit;\n}\n\n.jp-FileBrowser-filterBox {\n  padding: 0;\n  flex: 0 0 auto;\n}\n\n.jp-FileBrowser-filterBox input {\n  line-height: 24px;\n}\n\n.jp-DirListing-content .jp-DirListing-checkboxWrapper {\n  visibility: visible;\n}\n\n/* Action buttons */\n\n.jp-FileBrowser-toolbar > .jp-FileAction > .jp-ToolbarButtonComponent > svg {\n  display: none;\n}\n\n.jp-FileBrowser-toolbar > #fileAction-delete {\n  background-color: var(--jp-error-color1);\n}\n\n.jp-FileBrowser-toolbar\n  .jp-ToolbarButtonComponent[data-command='filebrowser:delete']\n  .jp-ToolbarButtonComponent-label {\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-FileBrowser-toolbar .jp-FileAction {\n  border: solid 1px var(--jp-border-color2);\n  margin: 1px;\n  min-height: var(--jp-private-toolbar-height);\n}\n","",{version:3,sources:["webpack://./../node_modules/@jupyter-notebook/tree-extension/style/base.css"],names:[],mappings:"AAAA;;;;8EAI8E;;AAE9E;;;EAGE,yCAAyC;EACzC,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,6CAA6C;AAC/C;;AAEA;EACE,wCAAwC;EACxC,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;AACf;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;;;EAGE,uCAAuC;AACzC;;AAEA;EACE,yCAAyC;EACzC,WAAW;EACX,4CAA4C;AAC9C",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-DropdownMenu,\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-ToolbarButton,\n.jp-FileBrowser-toolbar .jp-Toolbar-item.jp-CommandToolbarButton {\n  border: solid 1px var(--jp-border-color2);\n  margin: 1px;\n  padding: 0px;\n}\n\n.jp-FileBrowser-toolbar > .jp-Toolbar-item.jp-ToolbarButton:hover,\n.jp-FileBrowser-toolbar > .jp-Toolbar-item.jp-CommandToolbarButton:hover,\n.jp-FileBrowser-toolbar > .jp-Toolbar-item.jp-DropdownMenu:hover {\n  background: var(--neutral-fill-stealth-hover);\n}\n\n.jp-FileBrowser-toolbar .lm-MenuBar-item {\n  height: var(--jp-private-toolbar-height);\n  display: inline-flex;\n  align-items: center;\n}\n\n.jp-FileBrowser-toolbar .jp-ToolbarButtonComponent {\n  height: var(--jp-flat-button-height);\n}\n\n.jp-FileBrowser-toolbar jp-button.jp-ToolbarButtonComponent:hover {\n  background: inherit;\n}\n\n.jp-FileBrowser-filterBox {\n  padding: 0;\n  flex: 0 0 auto;\n}\n\n.jp-FileBrowser-filterBox input {\n  line-height: 24px;\n}\n\n.jp-DirListing-content .jp-DirListing-checkboxWrapper {\n  visibility: visible;\n}\n\n/* Action buttons */\n\n.jp-FileBrowser-toolbar > .jp-FileAction > .jp-ToolbarButtonComponent > svg {\n  display: none;\n}\n\n.jp-FileBrowser-toolbar > #fileAction-delete {\n  background-color: var(--jp-error-color1);\n}\n\n.jp-FileBrowser-toolbar\n  .jp-ToolbarButtonComponent[data-command='filebrowser:delete']\n  .jp-ToolbarButtonComponent-label {\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-FileBrowser-toolbar .jp-FileAction {\n  border: solid 1px var(--jp-border-color2);\n  margin: 1px;\n  min-height: var(--jp-private-toolbar-height);\n}\n"],sourceRoot:""}]);const i=l},39352:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,".jp-FileBrowser {\n  height: 100%;\n}\n\n.lm-TabPanel {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabPanel-tabBar {\n  overflow: visible;\n  min-height: 32px;\n  border-bottom: unset;\n  height: var(--jp-private-toolbar-height);\n}\n\n.jp-TreePanel .lm-TabBar-content {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tab {\n  flex: 0 1 auto;\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tabLabel {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {\n  width: unset;\n}\n\n.jp-FileBrowser-toolbar > .jp-Toolbar-item {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.jp-DropdownMenu .lm-MenuBar-itemIcon svg {\n  vertical-align: sub;\n}\n\njp-button[data-command='filebrowser:refresh'] .jp-ToolbarButtonComponent-label {\n  display: none;\n}\n\n.jp-TreePanel .lm-TabBar-tabIcon svg {\n  vertical-align: sub;\n}\n","",{version:3,sources:["webpack://./../node_modules/@jupyter-notebook/tree/style/base.css"],names:[],mappings:"AAAA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,wCAAwC;AAC1C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,+BAA+B;EAC/B,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:[".jp-FileBrowser {\n  height: 100%;\n}\n\n.lm-TabPanel {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabPanel-tabBar {\n  overflow: visible;\n  min-height: 32px;\n  border-bottom: unset;\n  height: var(--jp-private-toolbar-height);\n}\n\n.jp-TreePanel .lm-TabBar-content {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tab {\n  flex: 0 1 auto;\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tabLabel {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {\n  width: unset;\n}\n\n.jp-FileBrowser-toolbar > .jp-Toolbar-item {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.jp-DropdownMenu .lm-MenuBar-itemIcon svg {\n  vertical-align: sub;\n}\n\njp-button[data-command='filebrowser:refresh'] .jp-ToolbarButtonComponent-label {\n  display: none;\n}\n\n.jp-TreePanel .lm-TabBar-tabIcon svg {\n  vertical-align: sub;\n}\n"],sourceRoot:""}]);const i=l},12563:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=l},59988:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const i=l},1555:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/notebook-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=l},94298:(e,o,n)=>{n.d(o,{Z:()=>i});var t=n(20559),r=n.n(t),a=n(93476),l=n.n(a)()(r());l.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const i=l},7413:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=3604.377cc83.js.map
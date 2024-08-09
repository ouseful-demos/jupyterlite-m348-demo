"use strict";(self.webpackChunk_r_wasm_jupyterlite_webr_kernel=self.webpackChunk_r_wasm_jupyterlite_webr_kernel||[]).push([[924],{924:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n,i,r,s=a(620),o=a(348),w=function(e,t,a,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,a):i?i.value=a:t.set(e,a),a},c=function(e,t,a,n){if("a"===a&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?n:"a"===a?n.call(e):n?n.value:t.get(e)};const h="0.3.0",l="4.3.3";class p extends s.BaseKernel{constructor(e){super(e),n.set(this,void 0),i.set(this,void 0),r.set(this,null),w(this,n,new o.Console({stdout:e=>console.log(e),stderr:e=>console.error(e),prompt:e=>this.inputRequest({prompt:e,password:!1})}),"f"),this.webR=c(this,n,"f").webR,this.init=this.setupEnvironment(),w(this,i,document.createElement("canvas"),"f")}async setupEnvironment(){await this.webR.init(),this.shelter=await new this.webR.Shelter,await this.webR.evalRVoid('\n      options(device = function(...){\n        pdf(...)\n        dev.control("enable")\n      }, webr.plot.new = FALSE)\n    '),await this.webR.evalRVoid('\n      setHook("grid.newpage", function() {\n        options(webr.plot.new = TRUE)\n      }, "replace")\n      setHook("plot.new", function() {\n        options(webr.plot.new = TRUE)\n      }, "replace")\n    '),await this.webR.evalRVoid("\n      options(webr.fig.width = 7, webr.fig.height = 5.25)\n    "),await this.webR.evalRVoid("\n      webr::shim_install()\n    ")}inputReply(e){"ok"===e.status&&c(this,n,"f").stdin(e.value)}async kernelInfoRequest(){return await this.init,{status:"ok",protocol_version:"5.3",implementation:"webr",implementation_version:h,language_info:{name:"R",version:l,mimetype:"text/x-rsrc",file_extension:".R"},banner:`webR v${h} - R v${l}`,help_links:[{text:"WebAssembly R Kernel",url:"https://github.com/r-wasm/jupyterlite-webr-kernel"}]}}async executeRequest(e){await this.init;try{const t=await this.shelter.captureR("\n        withVisible({\n          eval(parse(text = code), envir = globalenv())\n        })\n      ",{env:{code:e.code},captureGraphics:!1});t.output.forEach((async e=>{switch(e.type){case"stdout":this.stream({name:"stdout",text:e.data+"\n"});break;case"stderr":this.stream({name:"stderr",text:e.data+"\n"});break;case"message":{const t=e.data,a=await t.get("message");this.stream({name:"stderr",text:await a.toString()+"\n"});break}case"warning":{const t=e.data,a=await t.get("message");this.stream({name:"stderr",text:"Warning message:\n"+await a.toString()+"\n"});break}}}));const a=await t.result.get("visible");if(await a.toBoolean()){const e=await t.result.get("value"),a=await this.shelter.evalR("\n          capture.output(print(value))\n        ",{env:{value:e}});this.publishExecuteResult({execution_count:this.executionCount,data:{"text/plain":[await(await a.toArray()).join("\n")]},metadata:{}})}return await this.plotOutput(),{status:"ok",execution_count:this.executionCount,user_expressions:{}}}catch(e){const t=e.message;return this.stream({name:"stderr",text:"Error: "+t+"\n"}),{status:"error",execution_count:this.executionCount,ename:"error",evalue:t,traceback:[]}}finally{await this.shelter.purge()}}async plotOutput(){var e;const t=await this.webR.evalRNumber("dev.cur()"),a=await this.webR.evalRBoolean('getOption("webr.plot.new")');if(t>1){const n=(await this.shelter.captureR(`\n        try({\n          w <- getOption("webr.fig.width")\n          h <- getOption("webr.fig.height")\n          webr::canvas(width = 72 * w, height = 72 * h, capture = TRUE)\n          capture_dev = dev.cur();\n\n          dev.set(${t})\n          dev.copy(which = capture_dev)\n          dev.off(capture_dev)\n        }, silent = TRUE)\n      `)).images[0];c(this,i,"f").width=n.width,c(this,i,"f").height=n.height,null===(e=c(this,i,"f").getContext("bitmaprenderer"))||void 0===e||e.transferFromImageBitmap(n);const s=c(this,i,"f").toDataURL("image/png");(a||s!==c(this,r,"f"))&&(w(this,r,s,"f"),this.displayData({data:{"image/png":s.split(",")[1],"text/plain":[`<Figure of size ${c(this,i,"f").width}x${c(this,i,"f").height}>`]},metadata:{"image/png":{width:3*c(this,i,"f").width/4,height:3*c(this,i,"f").height/4}}}),await this.webR.evalRVoid("options(webr.plot.new = FALSE)"))}}async completeRequest(){throw new Error("Unimplemented")}async inspectRequest(){throw new Error("Unimplemented")}async isCompleteRequest(){throw new Error("Unimplemented")}async commInfoRequest(){throw new Error("Unimplemented")}async commOpen(){throw new Error("Unimplemented")}async commMsg(){throw new Error("Unimplemented")}async commClose(){throw new Error("Unimplemented")}}n=new WeakMap,i=new WeakMap,r=new WeakMap;const u=a.p+"c0aaa09171ee16729b12a148c532baa8.png",d=a.p+"da1166e72a7daee41c4b332dd06e206d.png",m=[{id:"@jupyterlite/webr-kernel-extension:kernel",autoStart:!0,requires:[s.IKernelSpecs],activate:(e,t)=>{t.register({spec:{name:"webR",display_name:"R (webR)",language:"R",argv:[],spec:{argv:[],env:{},display_name:"R (webR)",language:"R",interrupt_mode:"message",metadata:{}},resources:{"logo-32x32":u,"logo-64x64":d}},create:async e=>new p({...e})})}}]}}]);
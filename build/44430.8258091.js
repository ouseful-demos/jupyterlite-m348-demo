(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[44430],{44430:e=>{var t;self,t=()=>(()=>{"use strict";var e,t={};return e=t,Object.defineProperty(e,"__esModule",{value:!0}),e.FitAddon=void 0,e.FitAddon=class{activate(e){this._terminal=e}dispose(){}fit(){const e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;const t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal)return;if(!this._terminal.element||!this._terminal.element.parentElement)return;const e=this._terminal._core,t=e._renderService.dimensions;if(0===t.css.cell.width||0===t.css.cell.height)return;const r=0===this._terminal.options.scrollback?0:e.viewport.scrollBarWidth,s=window.getComputedStyle(this._terminal.element.parentElement),i=parseInt(s.getPropertyValue("height")),n=Math.max(0,parseInt(s.getPropertyValue("width"))),l=window.getComputedStyle(this._terminal.element),a=i-(parseInt(l.getPropertyValue("padding-top"))+parseInt(l.getPropertyValue("padding-bottom"))),o=n-(parseInt(l.getPropertyValue("padding-right"))+parseInt(l.getPropertyValue("padding-left")))-r;return{cols:Math.max(2,Math.floor(o/t.css.cell.width)),rows:Math.max(1,Math.floor(a/t.css.cell.height))}}},t})(),e.exports=t()}}]);
//# sourceMappingURL=44430.8258091.js.map
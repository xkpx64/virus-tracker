(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,i=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=o},"8oxB":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var a,c=[],l=!1,h=-1;function d(){l&&a&&(l=!1,a.length?c=a.concat(c):h=-1,c.length&&p())}function p(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(a=c,c=[];++h<t;)a&&a[h].run();h=-1,t=c.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||l||u(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),i=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},aeIR:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return r("mnIH")}])},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,u=t.optimizeForSpeed,a=void 0===u?n:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,s,u,a=e.prototype;return a.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(u){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),u&&r(t,u),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},mnIH:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),s=r("7vrA"),o=r("3Z9Z"),u=r("JI6e"),a=r("wx14"),c=r("zLVn"),l=r("TSYQ"),h=r.n(l),d=r("JCAc"),p=r("vUet"),f=r("ILyh"),m=i.a.createContext(null);var v=i.a.forwardRef((function(e,t){var r=e.as,s=void 0===r?"button":r,o=e.children,u=e.eventKey,l=e.onClick,h=Object(c.a)(e,["as","children","eventKey","onClick"]),d=function(e,t){var r=Object(n.useContext)(m),i=Object(n.useContext)(f.a);return function(n){i(e===r?null:e,n),t&&t(n)}}(u,l);return i.a.createElement(s,Object(a.a)({ref:t,onClick:d},h),o)})),_=r("vYJ8"),y=i.a.forwardRef((function(e,t){var r=e.children,s=e.eventKey,o=Object(c.a)(e,["children","eventKey"]),u=Object(n.useContext)(m);return i.a.createElement(_.a,Object(a.a)({ref:t,in:u===s},o),i.a.createElement("div",null,i.a.Children.only(r)))}));y.displayName="AccordionCollapse";var S=y,g=i.a.forwardRef((function(e,t){var r=Object(d.a)(e,{activeKey:"onSelect"}),n=r.as,s=void 0===n?"div":n,o=r.activeKey,u=r.bsPrefix,l=r.children,v=r.className,_=r.onSelect,y=Object(c.a)(r,["as","activeKey","bsPrefix","children","className","onSelect"]);return u=Object(p.a)(u,"accordion"),i.a.createElement(m.Provider,{value:o},i.a.createElement(f.a.Provider,{value:_},i.a.createElement(s,Object(a.a)({ref:t},y,{className:h()(v,u)}),l)))}));g.Toggle=v,g.Collapse=S;var w=g,b=r("ds/u"),C=r("MX0m"),R=r.n(C),j=r("6xyR"),T=i.a.createElement,x=function(e){var t=e.anchor,r=e.title,n=e.children;return T(j.a,{className:"shadow mb-4 collapsible-card"},T(w.Toggle,{as:j.a.Header,eventKey:t,className:"d-block py-3","data-toggle":"collapse","aria-expanded":"true"},T("h6",{className:"jsx-3719953696 m-0 font-weight-bold text-primary"},r)),T(w.Collapse,{eventKey:t},T(j.a.Body,null,n)),T(R.a,{id:"3719953696"},[".collapsible-card .card-header{cursor:pointer;}"]))},F=i.a.createElement;t.default=function(){return F(b.a,null,F(s.a,{fluid:!0},F("div",{className:"d-sm-flex align-items-center justify-content-between mt-4"},F("h1",{className:"h3 mb-0 text-gray-800"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442")),F(o.a,{className:"mt-3"},F(u.a,null,F(w,{bsPrefix:"custom-accordion"},F(x,{anchor:"policy",title:"\u041a\u0430\u043a\u0432\u0430 \u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u043d\u0438 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430?"},"\u041d\u0438\u0435 \u043f\u0440\u0438\u0435\u043c\u0430\u043c\u0435 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0441\u0438 \u0438\u0437\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0441\u0435\u0440\u0438\u043e\u0437\u043d\u043e \u0438 \u043d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0410\u043d\u0433\u0430\u0436\u0438\u0440\u0430\u043c\u0435 \u0441\u0435 \u0434\u0430 \u0441\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0412\u0438 \u043d\u0430 \u043b\u0438\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u043d\u043e\u0441\u0442. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u0441\u0442\u0440\u0430\u043d\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0430 \u0441\u0430\u043c\u043e \u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043e \u0430\u043a\u043e \u0442\u044f \u0435 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0430 \u043e\u0442 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0442\u043d\u0438 \u043e\u0440\u0433\u0430\u043d\u0438, \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0438\u0442\u0435 \u043f\u043e\u0441\u043e\u0447\u0435\u043d\u0438 \u0432 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u0442\u0430 \u0443\u0440\u0435\u0434\u0431\u0430 \u043d\u0430 \u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f."),F(x,{anchor:"data",title:"\u041a\u0430\u043a\u0432\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u043e\u0442 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435?"},"\u0417\u0430 \u0432\u0441\u0435\u043a\u0438 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0449\u0430 \u0442\u0438\u043f \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u0442\u043e, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u0432\u0435\u0440\u0441\u0438\u044f \u0438 \u043c\u043e\u0434\u0435\u043b \u043d\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438\u044f \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u043f\u0440\u0435\u043a\u0430\u0440\u0430\u043d\u043e \u0432\u0440\u0435\u043c\u0435 \u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438\u0442\u0435, \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440. \u0417\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0442\u0430, \u0438\u0437\u0432\u044a\u0440\u0448\u0435\u043d\u0438 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430, \u0441\u0435 \u0437\u0430\u043f\u0430\u0437\u0432\u0430 \u0438 IP \u0430\u0434\u0440\u0435\u0441\u044a\u0442 \u043d\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f. \u041d\u0435 \u0441\u0435 \u0441\u044a\u0445\u0440\u0430\u043d\u044f\u0432\u0430 \u0434\u0435\u043c\u043e\u0433\u0430\u0444\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043e\u0442 \u0442\u0438\u043f\u0430 \u043d\u0430 \u043f\u043e\u043b, \u0432\u044a\u0437\u0440\u0430\u0441\u0442, \u0438\u0437\u043f\u043e\u0432\u044f\u0434\u0432\u0430\u043d\u0430 \u0440\u0435\u043b\u0438\u0433\u0438\u044f, \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0438, \u043c\u043e\u0434\u0435\u043b\u0438 \u0437\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440."),F(x,{anchor:"usage",title:"\u0417\u0430 \u043a\u0430\u043a\u0432\u0438 \u0446\u0435\u043b\u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430?"},"\u0421\u044a\u0431\u0438\u0440\u0430\u043d\u0430\u0442\u0430 \u043e\u0442 \u043d\u0430\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u0447\u0435\u0442\u0438 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430."),F(x,{anchor:"cookies",title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438"},'\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0431\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438 ("Cookies"), \u0437\u0430 \u0434\u0430 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043c\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u043e\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u0438\u043c \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0438. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u043c\u0430\u043b\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u0412\u0430\u0448\u0438\u044f \u0443\u0435\u0431 \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u0438 \u043f\u043e \u043d\u0438\u043a\u0430\u043a\u044a\u0432 \u043d\u0430\u0447\u0438\u043d \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043d\u0430\u0432\u0440\u0435\u0434\u044f\u0442 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0412\u0438 \u0438\u043b\u0438 \u0434\u0430 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u0442 \u0432\u0440\u0435\u0434\u0435\u043d \u0441\u043e\u0444\u0442\u0443\u0435\u0440. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0438 \u0438 \u0434\u043e\u0441\u0442\u044a\u043f\u0435\u043d\u0438 \u0441\u0430\u043c\u043e \u043e\u0442 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430, \u043e\u0442 \u043a\u043e\u0439\u0442\u043e \u0441\u0430 \u0438\u0437\u0434\u0430\u0434\u0435\u043d\u0438.'),F(x,{anchor:"partners",title:"\u041d\u0430 \u043a\u043e\u0433\u043e \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0432\u0430\u0448\u0438\u0442\u0435 \u043b\u0438\u0447\u043d\u0438 \u0434\u0430\u043d\u043d\u0438?"},"\u041d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0412\u044a\u043f\u0440\u0435\u043a\u0438 \u0442\u043e\u0432\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u044a\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0430, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u043e\u0441\u044a\u0449\u0435\u0441\u0442\u0432\u044f\u0432\u0430 \u043a\u043e\u0433\u0430\u0442\u043e \u0412\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0412\u0430\u0448\u0435\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435.",F("ul",null,F("li",null,"Google Ireland Ltd. - Google Analytics, Google Tag Manager -",F("a",{href:"https://safety.google/privacy/",target:"_blank",rel:"noopener noreferrer"},"https://safety.google/privacy/")))),F(x,{anchor:"changes",title:"\u041f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"},"\u0417\u0430\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u0441\u0438 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0434\u0430 \u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u043c\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442. \u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u043e\u043f\u043e\u0432\u0435\u0441\u0442\u044f\u0432\u0430\u043d\u0438 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430. \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u0442 \u0441\u043b\u0435\u0434\u0432\u0430 \u043f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0434\u0430 \u0441\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u0430 \u0437\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u043d\u0430\u0442\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442.")),F("div",{className:"mb-3"},F("small",null,"\u0414\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430: 13.03.2020\u0433."))))))}}},[["aeIR",0,2,1,3]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n("q1tI")),s=n("8L3h"),u=n("jwwS"),l=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function p(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=f(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function m(e,t){return i.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function h(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:m,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!d&&"function"===typeof n.webpack){var o=n.webpack();c.push((function(e){var t=!0,n=!1,r=void 0;try{for(var i,s=o[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return a()}}catch(l){n=!0,r=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}))}var l=function(e,t){a();var o=i.default.useContext(u.LoadableContext),l=s.useSubscription(r);return i.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),l.loading||l.error?i.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:r.retry}):l.loaded?n.render(l.loaded,e):null};return l.preload=function(){return a()},l.displayName="LoadableComponent",i.default.forwardRef(l)}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return h(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(p,e)},v.preloadAll=function(){return new Promise((function(e,t){y(l).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};y(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady,t.default=v},"3Z9Z":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),u=n.n(s),l=n("vUet"),c=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.noGutters,s=e.as,c=void 0===s?"div":s,d=e.className,f=Object(a.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(l.a)(n,"row");return u.a.createElement(c,Object(r.a)({ref:t},f,{className:i()(d,p,o&&"no-gutters")}))}));c.displayName="Row",c.defaultProps={noGutters:!1},t.a=c},JI6e:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),u=n.n(s),l=n("vUet"),c=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.as,d=void 0===s?"div":s,f=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(n,"col"),m=[],h=[];return c.forEach((function(e){var t,n,r,a=f[e];if(delete f[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+i:""+p+i+"-"+t),null!=r&&h.push("order"+i+"-"+r),null!=n&&h.push("offset"+i+"-"+n)})),m.length||m.push(p),u.a.createElement(d,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[o].concat(m,h))}))}));d.displayName="Col",t.a=d},"T/rR":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),u=n.n(s),l=n("vUet"),c=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,s=e.animation,c=e.size,d=e.children,f=e.as,p=void 0===f?"div":f,m=e.className,h=Object(a.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),b=(n=Object(l.a)(n,"spinner"))+"-"+s;return u.a.createElement(p,Object(r.a)({ref:t},h,{className:i()(m,b,c&&b+"-"+c,o&&"text-"+o)}),d)}));c.displayName="Spinner",t.a=c},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("2qu3")),i=!1;function s(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return a.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=o.default.Map;var a={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=a}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)}},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.LoadableContext=a.createContext(null)},kYXx:function(e,t,n){"use strict";var r=n("o0o1"),a=n.n(r),o=n("q1tI"),i=n.n(o),s=n("8Kt/"),u=n.n(s),l=n("a6RD"),c=n.n(l),d=n("ffb8"),f=n("vcXL"),p=n.n(f),m=n("7vrA"),h=n("3Z9Z"),b=n("JI6e"),v=n("T/rR"),y=n("BIX1"),_=n.n(y),g=n("ds/u"),w=i.a.createElement,O=c()((function(){return Promise.all([n.e(16),n.e(9)]).then(n.bind(null,"CGeP"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["CGeP"]},modules:["../components/CasesMap/CasesMap"]}});t.a=function(){var e=_()().t,t=Object(o.useState)(!0),n=t[0],r=t[1],i=Object(o.useState)({}),s=i[0],l=i[1],c=Object(o.useState)(7),f=c[0],y=c[1];return Object(o.useEffect)((function(){!function(){var e;a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(p()("https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/GeoDataset.json"));case 3:return e=t.sent,t.t0=l,t.next=7,a.a.awrap(e.json());case 7:t.t1=t.sent,(0,t.t0)(t.t1),r(!1),t.next=14;break;case 12:t.prev=12,t.t2=t.catch(0);case 14:case"end":return t.stop()}}),null,null,[[0,12]],Promise)}()}),[]),w(g.a,null,w(u.a,null,w("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""})),w(d.NextSeo,{title:e("map:seo.title"),description:e("map:seo.description"),openGraph:{images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=".concat("SmOijDBliBVFnqaPu8-xO"),width:1200,height:630,alt:e("map:seo.description")}]}}),w(m.a,{fluid:!0},w("div",{className:"d-sm-flex align-items-center justify-content-between my-4"},w("h1",{className:"h3 mb-0 text-gray-800"},e("map:page_title"))),w(h.a,{className:"mt-3"},w(b.a,{style:{height:"400px"}},n?w(v.a,{animation:"border",variant:"primary"}):w(O,{data:s,zoom:f,whenReady:function(){document.documentElement.clientWidth<=768&&y(6)},zoomSnap:.5})))))}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}}]);
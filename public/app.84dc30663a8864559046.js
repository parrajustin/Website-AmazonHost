webpackJsonp([0],[,function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t,n){void 0===n&&(n=y);var r,i=/(?:\?([^#]*))?(#.*)?$/,a=e.match(i),c={};if(a&&a[1])for(var u=a[1].split("&"),s=0;s<u.length;s++){var l=u[s].split("=");c[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}e=o(e.replace(i,"")),t=o(t||"");for(var p=Math.max(e.length,t.length),h=0;h<p;h++)if(t[h]&&":"===t[h].charAt(0)){var d=t[h].replace(/(^\:|[+*?]+$)/g,""),m=(t[h].match(/[+*?]+$/)||y)[0]||"",f=~m.indexOf("+"),g=~m.indexOf("*"),b=e[h]||"";if(!b&&!g&&(m.indexOf("?")<0||f)){r=!1;break}if(c[d]=decodeURIComponent(b),f||g){c[d]=e.slice(h).map(decodeURIComponent).join("/");break}}else if(t[h]!==e[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function a(e,t){var n=e.attributes||y,r=t.attributes||y;return n.default?1:r.default?-1:c(n.path)-c(r.path)||n.path.length-r.path.length}function o(e){return u(e).split("/")}function c(e){return(u(e).match(/\/+/g)||"").length}function u(e){return e.replace(/(^\/+|\/+$)/g,"")}function s(e){return null!=e.__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")]}function l(e,t){void 0===t&&(t="push"),w&&w[t]?w[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}function p(){var e;return e=w&&w.location?w.location:w&&w.getCurrentLocation?w.getCurrentLocation():"undefined"!=typeof location?location:_,""+(e.pathname||"")+(e.search||"")}function h(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),d(e)&&l(e,t?"replace":"push"),m(e)}function d(e){for(var t=k.length;t--;)if(k[t].canRoute(e))return!0;return!1}function m(e){for(var t=!1,n=0;n<k.length;n++)!0===k[n].routeTo(e)&&(t=!0);for(var r=q.length;r--;)q[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return h(t)}}function g(e){if(0==e.button)return f(e.currentTarget||e.target||this),b(e)}function b(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function v(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")&&s(t)){if(t.hasAttribute("native"))return;if(f(t))return b(e)}}while(t=t.parentNode)}}function j(){N||("function"==typeof addEventListener&&(w||addEventListener("popstate",function(){return m(p())}),addEventListener("click",v)),N=!0)}n.d(t,"b",function(){return A}),n.d(t,"a",function(){return C});var O=n(0),y={},w=null,k=[],q=[],_={},N=!1,A=function(e){function t(t){e.call(this,t),t.history&&(w=t.history),this.state={url:t.url||p()},j()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){return this.getMatchingChildren(this.props.children,e,!1).length>0},t.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},t.prototype.componentWillMount=function(){k.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;w&&(this.unlisten=w.listen(function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))})),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),k.splice(k.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.slice().sort(a).map(function(e){var a=e.attributes||{},o=a.path,c=i(t,o,a);if(c){if(!1!==n){var u={url:t,matches:c};return r(u,c),Object(O.cloneElement)(e,u)}return e}return!1}).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,i=t.url,a=this.getMatchingChildren(n,i,!0),o=a[0]||null;this._didRoute=!!o;var c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof r&&r({router:this,url:i,previous:c,active:a,current:o})),o},t}(O.Component),C=function(e){return Object(O.h)("a",r({onClick:g},e))},P=function(e){return Object(O.h)(e.component,e)};A.subscribers=q,A.getCurrentUrl=p,A.route=h,A.Router=A,A.Route=P,A.Link=C},function(e,t,n){"use strict";var r=n(0);t.a=function(e){return Object(r.h)("div",{className:"card"},e.children)}},function(e,t,n){"use strict";function r(){a=n(6).default,document.getElementById("loading-txt").remove(),document.getElementById("loading-svg").remove(),i=Object(o.render)(a,document.getElementById("root"),i)}Object.defineProperty(t,"__esModule",{value:!0});var i,a,o=n(0),c=n(4),u=n(5);n.n(u);r(),"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/service-worker.js"),window.ga=new c.a("UA-XXXXXXXX-X")},function(e,t,n){"use strict";function r(e){var t,n="https://www.google-analytics.com/collect?v=1";for(t in e)e[t]&&(n+="&"+t+"="+encodeURIComponent(e[t]));return n}function i(e,t){t=t||{},this.args=Object.assign({tid:e,cid:o},t),this.send("pageview")}var a=navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack,o=localStorage["ga:user"]=localStorage["ga:user"]||Math.random()+"."+Math.random();i.prototype.send=function(e,t){if(!a){"pageview"!==e||t||(t={dl:location.href,dt:document.title});var n=Object.assign({t:e},this.args,t,{z:Date.now()});(new Image).src=r(n)}},t.a=i},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),a=n(7),o=n(8),c=n(10),u=n(11),s=n(12),l=n(13),p=function(e){return window.ga&&ga.send("pageview",{dp:e.url})};t.default=Object(r.h)(o.a,null,Object(r.h)(i.b,{onChange:p},Object(r.h)(a.a,{path:"/"}),Object(r.h)(l.a,{path:"/blog"}),Object(r.h)(c.a,{path:"/blog/:title"}),Object(r.h)(s.a,{path:"/credit"}),Object(r.h)(u.a,{default:!0})))},function(e,t,n){"use strict";var r=n(0);n(1),n(2);t.a=function(){return Object(r.h)("div",{className:"page page__home"},Object(r.h)("div",{className:"home-container"},Object(r.h)("div",{className:"home-img"},Object(r.h)("img",{alt:"portrait",src:"portrait.webp"})),Object(r.h)("div",{className:"home-txt"},"Justin Ruben Parra Software Engineer"),Object(r.h)("div",{className:"home-body"},Object(r.h)("p",null,"I'm an undergraduate senior at the University of Texas at El Paso, where I look to graduate Spring 2018, approximately May. I'm an engineering student going for a computer science major. I currently work at the AT&T co-op project, as well as being stipend by UTEP for my work as a student researcher."))))}},function(e,t,n){"use strict";var r=n(0),i=n(9);t.a=function(e){return Object(r.h)("div",{id:"app"},Object(r.h)(i.a,null),Object(r.h)("main",{id:"content"},e.children))}},function(e,t,n){"use strict";var r=n(0),i=n(1);t.a=function(){return Object(r.h)("header",{className:"header"},Object(r.h)("div",{className:"header-container"},Object(r.h)("div",{className:"header-spacer"}),Object(r.h)("div",{className:"header-title"},"Justin Parra"),Object(r.h)("div",{className:"header-spacer"}),Object(r.h)("div",{className:"header-nav"},Object(r.h)("nav",null,Object(r.h)(i.a,{href:"/"},"Home"))),Object(r.h)("div",{className:"header-spacer"})))}},function(e,t,n){"use strict";var r=n(0),i=n(1),a=n(2);t.a=function(e){var t=e.title;return Object(r.h)("div",{className:"page page__article"},Object(r.h)(a.a,null,Object(r.h)("h1",null,t,": ",Object(r.h)("small",null,"A killer story")),Object(r.h)(i.a,{href:"/blog",className:"back"},"Back to Blog"),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro."),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro."),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro."),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro."),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro."),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maiores necessitatibus nihil quo, cupiditate consectetur voluptatem cumque ipsum consequuntur aut repellat repellendus eligendi, placeat inventore perspiciatis dolores ipsa voluptates porro.")))}},function(e,t,n){"use strict";var r=n(0),i=n(2);t.a=function(e){return Object(r.h)("div",{className:"page page__404"},Object(r.h)(i.a,null,Object(r.h)("h1",null,"404 Page"),Object(r.h)("p",null,"Looks like you were given a bad link ;-)"),Object(r.h)("pre",null,e.url)))}},function(e,t,n){"use strict";var r=n(0),i=n(2),a=[{name:"lukeed/preact-starter",desc:"A Webpack2 starter for building SPA / PWA / offline front-end apps with Preact",href:"https://github.com/lukeed/preact-starter"},{name:"developit/preact",desc:"Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.",href:"https://www.npmjs.com/package/preact"},{name:"developit/preact-router",desc:"URL router for Preact.",href:"https://www.npmjs.com/package/preact-router"},{name:"webpack/webpack",desc:"A bundler for javascript and friends. Allows for code splitting & asynchronous lazy-loading.",href:"https://github.com/webpack/webpack"},{name:"zeit/now",desc:"Free (OSS) realtime global deployments",href:"https://zeit.co/now"},{name:"zeit/serve",desc:"Single-command HTTP directory listing and file serving",href:"https://github.com/zeit/serve"}];t.a=function(){return Object(r.h)("div",{className:"page page__credit"},Object(r.h)(i.a,null,Object(r.h)("h1",null,"Credits:"),Object(r.h)("p",null,"Resources used within boilerplate:")),Object(r.h)("nav",null,a.map(function(e){return Object(r.h)("a",{className:"card",href:e.href,target:"_blank",rel:"noopener"},Object(r.h)("strong",null,e.name),Object(r.h)("em",null,e.desc))})))}},function(e,t,n){"use strict";var r=n(0),i=n(2),a=n(14);t.a=function(){return Object(r.h)("div",{className:"page page__blog"},Object(r.h)(i.a,null,Object(r.h)("h1",null,"Blog"),Object(r.h)("p",null,"Please select an Article to read.")),Object(r.h)("nav",null,[1,2,3,4,5,6,7,8,9,10].map(function(e){return Object(r.h)(a.a,{href:"/blog/article"+e},Object(r.h)("strong",null,"Article #",e),Object(r.h)("em",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore enim, natus. Beatae ducimus quasi doloremque ad quam qui dolor, architecto repellendus provident rem nostrum accusamus, magnam voluptate vel voluptas iste."))})))}},function(e,t,n){"use strict";var r=n(0),i=n(1);t.a=function(e){return Object(r.h)(i.a,{href:e.href,className:"card"},e.children)}}],[3]);
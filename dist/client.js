!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define("Selz",["exports"],e):e(t.Selz={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(t){return null!=t?t.constructor:null},u=function(t){return Array.isArray(t)},s=function(t){return a(t)===Object},l=function(t){return a(t)===String},f=function(t){return null==t},d=function(t){return f(t)||(l(t)||u(t))&&!t.length||s(t)&&!Object.keys(t).length},h={array:u,object:s,number:function(t){return a(t)===Number&&!Number.isNaN(t)},string:l,boolean:function(t){return a(t)===Boolean},function:function(t){return a(t)===Function},nullOrUndefined:f,objectId:function(t){return l(t)&&/^[a-f\d]{24}$/i.test(t)},currencyCode:function(t){return l(t)&&/^[A-z]{3}$/.test(t)},url:function(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(function(t,e){return!!(t&&e&&t instanceof e)}(t,window.URL))return!0;var n=t;e||/^https?:\/\/*/.test(t)||(n="http://".concat(t));try{return!d(new URL(n).hostname)}catch(t){return!1}},empty:d},v=function(t){return"https://".concat(h.empty(t)?"sdk.selz.com":"".concat(t,"/sdk"),"/")},g={product:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"products/find?url=").concat(e)},products:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"",i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1;return"".concat(v(t),"products/all/").concat(e,"?q=").concat(n,"&c=").concat(r,"&p=").concat(i)},categories:function(t,e){return"".concat(v(t),"categories/").concat(e)},store:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return h.number(e)?"".concat(v(t),"store/find/").concat(e):"".concat(v(t),"store/find?url=").concat(e)},createCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"cart/create/").concat(e)},getCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"cart/").concat(e)},checkCarts:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"cart/verify?ids=").concat(e)},addToCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"cart/add/").concat(e)},updateCartItemQuantity:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"cart/updateitemquantity/").concat(e)},removeFromCart:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return"".concat(v(t),"cart/remove/").concat(e)}},y=null,p=function t(e){n(this,t),Object.assign(this,e)},m=function t(e){n(this,t),Object.assign(this,e)},b=function t(e){n(this,t),Object.assign(this,e),this.cover=new m(e.cover)},w=function t(e){n(this,t),Object.assign(this,e)},j=function t(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";n(this,t),Object.assign(this,e),this.selected=e.id===r},C=function t(e,r){n(this,t),this.id=e,this.label=r},k=function t(e){n(this,t),Object.assign(this,e),this.options=Object.keys(e.options).map(function(t){return new C(t,e.options[t])})},O=function(){function t(e,r){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";if(n(this,t),h.object(r)){if(y=e,Object.assign(this,r),this.store=y.store,h.object(r.urls)&&(this.urls=new p(r.urls)),h.object(r.media)&&(this.media=new b(r.media)),h.array(r.images)&&(this.images=r.images.map(function(t){return new m(t)})),h.array(r.files)&&(this.files=r.files.map(function(t){return new w(t)})),r.hasVariants){var o=h.empty(i)?r.variants[0].id:i;this.variants=r.variants.map(function(t){return new j(t,o)})}r.hasVariantAttributes&&(this.variantAttributes=r.variantAttributes.map(function(t){return new k(t)}))}}return i(t,[{key:"selectedVariant",get:function(){return h.empty(this.variants)?null:this.variants.find(function(t){return t.selected})}}]),t}(),S=null,I=function t(e,r){n(this,t),this.cartId=r,Object.assign(this,e),this.product=new O(S,e.product,e.variantId)},A=function t(e){n(this,t),this.productId=null,this.variantId=null,this.quantity=1,this.discountCode=null,this.buyersUnitPrice=null,(function(t){return!h.empty(t)&&t instanceof O}(e)||h.object(e))&&(this.productId=e.id,this.variantId=h.objectId(e.variant)?e.variant:null)},E=function(){function t(e,r){var i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];n(this,t),null===r||(S=e,Object.assign(this,r),this.store=S.store,this.active=i,this.items=Array.from(r.items).map(function(t){return new I(t,r.id)}))}return i(t,[{key:"add",value:function(t){return S.addToCart(this.id,t)}},{key:"remove",value:function(t){return S.removeFromCart(this.id,t)}}]),t}(),P=function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;n(this,t),h.object(e)&&Object.assign(this,e)},q=function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;n(this,t),h.object(e)&&Object.assign(this,e)};function U(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();return h.object(i)?(Object.keys(i).forEach(function(e){h.object(i[e])?(!Object.keys(t).includes(e)&&Object.assign(t,o({},e,{})),U(t[e],i[e])):Object.assign(t,o({},e,i[e]))}),U.apply(void 0,[t].concat(n))):t}function T(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"),n.toString())}var _=function(){var t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0,i=2<arguments.length?arguments[2]:void 0,o=r||new FormData,c=null;try{c=function(t){return JSON.parse(JSON.stringify(t))}(n)}catch(t){return o}return h.object(c)?(Object.keys(c).forEach(function(r){t=i?"".concat(i,"[").concat(r,"]"):r,"object"!==e(n[r])||n[r]instanceof File?o.append(function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").toString();return t=T(t,"-"," "),t=T(t,"_"," "),T(t=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}(t)," ","")}(t),n[r]):_(n[r],o,r)}),o):o};function N(t){var e=t;/^https?:\/\/*/.test(t)||(e="http://".concat(t));try{return new URL(e)}catch(t){return null}}var x="2.0.0-beta.1",L={type:"GET",body:{},responseType:"json"};function R(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=U({},L,e),r=n.type,i=n.body,o=n.responseType;return new Promise(function(e,n){try{var c=new XMLHttpRequest;if(!("withCredentials"in c)){var a=new Error("No CORS support");throw a.request=c,a}var u=function(){var t=new Error(c.status);t.request=c,n(t)};c.addEventListener("load",function(){var t=c.response;return 400<=c.status?void u():void("json"===o?function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,n){try{e(JSON.parse(t))}catch(t){n(t)}})}(t).then(function(t){if(t.success)e(t.data);else{var r=new Error("Request failed");r.errors=t.errors,n(r)}}).catch(n):e(t))}),c.addEventListener("error",u);var s=N(t);s.searchParams.set("v",x),c.open(r,s,!0),"json"!==o&&(c.responseType=o),c.send(_(i))}catch(t){n(t)}})}var F={},D=function(t){if(!Object.keys(F).includes(t)){F[t]=R(t);var e=function(){delete F[t]};F[t].then(e).catch(e)}return F[t]},z=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return console.warn("POST",e),R(t,{type:"POST",body:e})};var J=new Map,$=function(t){if(null===t)return null;var e=N(t);return null===e?null:"".concat(e.host).concat(e.pathname).replace(/\/$/,"")},M=function(){function t(e){n(this,t),this.config=Object.assign({keys:{root:"selz-js-sdk",carts:"carts",stores:"stores"},ttl:3600,schema:new Date("2018-07-02").getTime()},e),this.purge()}return i(t,[{key:"get",value:function(e){var n=J.get(this.config.keys.root);if(t.supported){var r=window.localStorage.getItem(this.config.keys.root);h.empty(r)||(n=JSON.parse(r))}return h.empty(n)?null:h.empty(e)?n:Object.keys(n).includes(e)?n[e]:null}},{key:"set",value:function(e,n){var r=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=this.get()||{};if(i[e]=r&&Object.keys(i).includes(e)?U(i[e],n):n,J.set(this.config.keys.root,i),t.supported){i.schema=this.config.schema;try{window.localStorage.setItem(this.config.keys.root,JSON.stringify(i))}catch(t){}}}},{key:"purge",value:function(){var t=this.get();if(!h.empty(t)){if(+t.schema!==this.config.schema)return void window.localStorage.removeItem(this.config.keys.root);var e=this.get(this.config.keys.stores)||[];h.empty(e)||this.set(this.config.keys.stores,e.filter(function(t){var e=+t.ttl;return 0<e&&e>Date.now()}))}}},{key:"getCarts",value:function(t){var e=this.get(this.config.keys.carts)||{};return h.empty(e)?null:h.number(t)?Object.keys(e).includes(t.toString())?e[t.toString()]:null:e}},{key:"getCart",value:function(t,e){var n=this.getCarts(t);return h.empty(n)?null:h.string(e)?Object.keys(n).includes(e.toUpperCase())?n[e.toUpperCase()]:null:n}},{key:"setCart",value:function(t,e,n){this.set(this.config.keys.carts,o({},t,o({},e.toUpperCase(),{id:n.id,active:n.active})),!0)}},{key:"setCarts",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.set(this.config.keys.carts,o({},t,e))}},{key:"getStore",value:function(t){var e=null;if(!h.number(t)&&!h.url(t))return null;var n=this.get(this.config.keys.stores)||[];if(h.number(t))e=n.find(function(e){return h.object(e.data)&&e.data.id===t});else if(h.url(t)){var r=$(t);if(null===r)return null;e=n.find(function(t){return h.array(t.urls)&&t.urls.includes(r)})}if(!h.object(e))return null;var i=+e.ttl;return 0<i&&i<Date.now()?(this.purge(),null):new q(e.data)}},{key:"setStore",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=$(e),r=this.get(this.config.keys.stores)||[],i=null;h.empty(r)||(i=r.find(function(e){return e.data.id===t.id}));var o=Date.now()+this.config.ttl;if(h.object(i)){if(Object.assign(i,{data:t,ttl:o}),null!==n){h.array(i.urls)?i.urls.push(n):i.urls=[n];var c=function(t){return h.array(t)?t.filter(function(e,n){return t.indexOf(e)===n}):t}(i.urls);Object.assign(i,{urls:c})}}else{var a={data:t,ttl:o};null!==n&&Object.assign(a,{urls:[n]}),r.push(a)}this.set(this.config.keys.stores,r)}}],[{key:"supported",get:function(){if(!window.localStorage)return!1;try{return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(t){return!1}}}]),t}(),Q=function(){function t(e){n(this,t);var r=e.env,i=e.store,o=e.source;if(this.env=h.empty(r)?"":r,this.store=i,this.source=o,!h.url(i)&&!h.number(i))throw Error("A store ID or URL is required to create a client");this.storage=new M}return i(t,[{key:"getStoreId",value:function(){var t=this;return new Promise(function(e,n){return h.number(t.store)?void e(t.store):t.store instanceof q?void e(t.store.id):(!h.url(t.store)&&n(new Error("Url is required for user lookup")),void t.getStore().then(function(t){e(t.id)}).catch(n))})}},{key:"getStore",value:function(){var t=this;return new Promise(function(e,n){if(h.number(t.store)||h.url(t.store)){var r=t.storage.getStore(t.store);if(null!==r&&r instanceof q)return void e(r)}if(t.store instanceof q)e(t.store);else{var i=g.store(t.env,t.store);D(i).then(function(n){t.setStore(n),e(t.store)}).catch(n)}})}},{key:"setStore",value:function(t){if(h.object(t)){var e=h.url(this.store)?this.store:null;this.store=new q(t),this.storage.setStore(this.store,e)}}},{key:"getProduct",value:function(t){var e=this;return new Promise(function(n,r){D(g.product(e.env,t)).then(function(t){e.store instanceof q||e.setStore(t.store),n(new O(e,t))}).catch(r)})}},{key:"getProducts",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(i,o){t.getStoreId().then(function(c){D(g.products(t.env,c,h.empty(e)?"":e,h.string(n)?n:"",!h.number(r)||1>r?1:r)).then(function(e){i(Object.assign({},e,{products:e.products.map(function(e){return new O(t,e)})}))}).catch(o)}).catch(o)})}},{key:"getCategories",value:function(){var t=this;return new Promise(function(e,n){t.getStoreId().then(function(r){D(g.categories(t.env,r)).then(function(t){e(Object.assign({},t,{categories:t.categories.map(function(t){return new P(t)})}))}).catch(n)}).catch(n)})}},{key:"createCart",value:function(t,e){var n=this;return new Promise(function(r,i){return h.empty(t)?void i(new Error("currency is required")):void n.getStoreId().then(function(o){var c=t.toUpperCase();z(g.createCart(n.env,o),{currency:c,discount:h.empty(e)?null:e,source:n.source}).then(function(t){var e=new E(n,t);n.storage.setCart(o,c,e),r(e)}).catch(i)}).catch(i)})}},{key:"getCartId",value:function(t){var e=this;return new Promise(function(n,r){return h.currencyCode(t)?void e.getStoreId().then(function(i){var o=t.toUpperCase(),c=e.storage.getCart(i,o);h.empty(c)?e.createCart(o).then(function(t){return n(t.id)}).catch(r):n(c.id)}).catch(r):void r(new Error("A valid currency code is required"))})}},{key:"getCart",value:function(t){var e=this;return new Promise(function(n,r){var i=h.currencyCode(t),o=h.objectId(t);if(i||o)if(i){var c=t.toUpperCase();e.getCartId(c).then(function(t){return h.empty(t)?void r(new Error("Could not find matching cart for currency code '".concat(c,"'"))):void e.getCart(t).then(function(t){e.setStore(t.store),n(t)}).catch(r)}).catch(r)}else D(g.getCart(e.env,t)).then(function(t){var r=e.getActiveCart(),i=new E(e,t,t.id===r);e.setStore(i.store),n(i)}).catch(r);else r(new Error("A valid currency code or cart id are required"))})}},{key:"getCarts",value:function(){var t=this,e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(h.empty(o))n(null);else if(e){var a=Object.keys(o).map(function(t){return o[t].id});D(g.checkCarts(t.env,a.join(","))).then(function(e){Object.entries(e).forEach(function(t){var e=c(t,2),n=e[0];if(!e[1]){var r=Object.keys(o).find(function(t){return o[t].id===n});delete o[r]}}),t.storage.setCarts(i,o),Object.values(o).find(function(t){return t.active})?n(o):t.setActiveCart().then(n).catch(r)}).catch(r)}else n(o)}).catch(r)})}},{key:"setActiveCart",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(n,r){t.getStoreId().then(function(i){t.getCarts(!1).then(function(o){var c=o;if(h.empty(c))n(null);else{if(h.currencyCode(e)){var a=e.toUpperCase(),u=Object.keys(c);if(!u.includes(a))return void r(new Error("No carts for ".concat(a)));u.forEach(function(t){c[t].active=t===a})}else{var s=h.objectId(e)?e:c[Object.keys(c)[0]].id;Object.keys(c).forEach(function(t){var e=c[t];e.active=e.id===s})}t.storage.setCarts(i,c),n(c)}})}).catch(r)})}},{key:"getActiveCart",value:function(){var t=this,e=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(Object.keys(o).length){var c=Object.values(o).find(function(t){return t.active});return c?e?void t.getCart(c.id).then(n).catch(r):void n(c.id):void n(null)}n(null)}).catch(r)})}},{key:"addToCart",value:function(t,e){var n=this;return new Promise(function(r,i){if(h.objectId(t))if(h.empty(e))i(new Error("A cart item is required"));else{var o=e;(h.object(e)||e instanceof O)&&(o=new A(e)),o instanceof A||i(new Error("A valid cart item is required")),z(g.addToCart(n.env,t),o).then(function(t){var e=new E(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}).catch(i)}else i(new Error("A valid id is required"))})}},{key:"updateCartItemQuantity",value:function(t,e){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(i,o){return h.objectId(t)?h.empty(e)?void o(new Error("A valid index is required")):void z(g.updateCartItemQuantity(n.env,t),{index:e,quantity:r}).then(function(t){var e=new E(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){i(e)}).catch(o)}).catch(o):void o(new Error("A valid id is required"))})}},{key:"removeFromCart",value:function(t,e){var n=this;return new Promise(function(r,i){return h.objectId(t)?h.empty(e)?void i(new Error("A valid index is required")):void z(g.removeFromCart(n.env,t),{index:e}).then(function(t){if(h.empty(t))n.getCarts().then(function(){return r(null)}).catch(i);else{var e=new E(n,t,!0);n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}}).catch(i):void i(new Error("A valid id is required"))})}}]),t}();t.Product=O,t.Category=P,t.Cart=E,t.CartItem=I,t.CartAddItem=A,t.Store=q,t.default=Q,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=client.js.map

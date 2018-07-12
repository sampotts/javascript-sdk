var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function unwrapExports(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},client=createCommonjsModule(function(t,e){!function(t){var e=function(t){return null!==t&&void 0!==t?t.constructor:null},n=function(t){return Array.isArray(t)},r=function(t){return e(t)===Object},i=function(t){return e(t)===String},o=function(t){return null===t||void 0===t},a=function(t){return o(t)||(i(t)||n(t))&&!t.length||r(t)&&!Object.keys(t).length},u={array:n,object:r,number:function(t){return e(t)===Number&&!Number.isNaN(t)},string:i,boolean:function(t){return e(t)===Boolean},function:function(t){return e(t)===Function},nullOrUndefined:o,objectId:function(t){return i(t)&&/^[a-f\d]{24}$/i.test(t)},currencyCode:function(t){return i(t)&&/^[A-z]{3}$/.test(t)},url:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(t,e){return Boolean(t&&e&&t instanceof e)}(t,window.URL))return!0;var n=t;e||/^https?:\/\/*/.test(t)||(n="http://"+t);try{return!a(new URL(n).hostname)}catch(t){return!1}},empty:a};function c(t){return"https://"+(u.empty(t)?"":t+"-")+"selz.com/sdk/"}var s={product:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"products/find?url="+e},products:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return c(t)+"products/all"+e+"?q="+n+"&p="+r},store:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u.number(e)?c(t)+"store/find/"+e:c(t)+"store/find?url="+e},createCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"cart/create/"+e},getCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"cart/"+e},checkCarts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"cart/verify?ids="+e},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"cart/add/"+e},updateCartItemQuantity:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"cart/updateitemquantity/"+e},removeFromCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return c(t)+"cart/remove/"+e}},l="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof(t)},f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),h=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},v=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},y=null,g=function t(e){f(this,t),Object.assign(this,e)},p=function t(e){f(this,t),Object.assign(this,e)},m=function t(e){f(this,t),Object.assign(this,e),this.cover=new p(e.cover)},w=function t(e){f(this,t),Object.assign(this,e)},b=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";f(this,t),Object.assign(this,e),this.selected=e.id===n},C=function t(e){f(this,t),Object.assign(this,e),this.options=Object.keys(e.options).map(function(t){return new function t(e,n){f(this,t),this.id=e,this.label=n}(t,e.options[t])})},j=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(f(this,t),u.object(n)){if(y=e,Object.assign(this,n),this.store=y.store,u.object(n.urls)&&(this.urls=new g(n.urls)),u.object(n.media)&&(this.media=new m(n.media)),u.array(n.images)&&(this.images=n.images.map(function(t){return new p(t)})),u.array(n.files)&&(this.files=n.files.map(function(t){return new w(t)})),n.has_variants){var i=u.empty(r)?n.variants[0].id:r;this.variants=n.variants.map(function(t){return new b(t,i)})}n.has_variant_attributes&&(this.variant_attributes=n.variant_attributes.map(function(t){return new C(t)}))}}return d(t,[{key:"featured_image",get:function(){return this.images.find(function(t){return t.is_featured})}},{key:"is_sold_out",get:function(){return 0===this.quantity_available}},{key:"selected_variant",get:function(){return u.empty(this.variants)?null:this.variants.find(function(t){return t.selected})}}]),t}(),k=null,S=function t(e,n){var r=this;f(this,t),this.cartId=n;var i=e.quantity;Object.assign(this,e,{_setQuantity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;i=t,k.updateCartItemQuantity(r.cartId,r.index,t)},_getQuantity:function(){return i},get quantity(){return this._getQuantity()},set quantity(t){this._setQuantity(t)}}),this.product=new j(k,e.product,e.variant_id)},O=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];f(this,t),null!==n&&(k=e,Object.assign(this,n),this.store=k.store,this.active=r,this.items=Array.from(n.items).map(function(t){return new S(t,n.id)}))}return d(t,[{key:"add",value:function(t){return k.addToCart(this.id,t)}},{key:"remove",value:function(t){return k.removeFromCart(this.id,t)}}]),t}(),E=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;f(this,t),u.object(e)&&Object.assign(this,e)};function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())}var I=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],r=arguments[2],i=n||new FormData,o=void 0;return u.object(e)?(Object.keys(e).forEach(function(n){o=r?r+"["+n+"]":n,"object"!==l(e[n])||e[n]instanceof File?i.append(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return _(t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}(t=_(t=_(t,"-"," "),"_"," "))," ","")}(o),e[n]):t(e[n],i,n)}),i):i};function P(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();return u.object(i)?(Object.keys(i).forEach(function(e){u.object(i[e])?(Object.keys(t).includes(e)||Object.assign(t,h({},e,{})),P(t[e],i[e])):Object.assign(t,h({},e,i[e]))}),P.apply(void 0,[t].concat(n))):t}var A={type:"GET",body:{},responseType:"json"};function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=P({},A,e),r=n.type,i=n.body,o=n.responseType;return new Promise(function(e,n){try{var a=new XMLHttpRequest;if(!("withCredentials"in a)){var u=new Error("No CORS support");throw u.request=a,u}a.addEventListener("load",function(){var t=a.response;"json"===o?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,n){try{e(JSON.parse(t))}catch(t){n(t)}})}(t).then(function(t){if(!t.success){var n=new Error("Request failed");throw n.errors=t.errors,n}e(t.data)}).catch(n):e(t)}),a.addEventListener("error",function(){var t=new Error(a.status);throw t.request=a,t}),a.open(r,t,!0),"json"!==o&&(a.responseType=o),a.send(I(i))}catch(u){n(u)}})}var U={},T=function(t){if(!Object.keys(U).includes(t)){U[t]=q(t);var e=function(){delete U[t]};U[t].then(e).catch(e)}return U[t]},x=function(t){return q(t,{type:"POST",body:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})},L=new Map,N=function(t){if(null===t)return null;var e=function(t){var e=t;/^https?:\/\/*/.test(t)||(e="http://"+t);try{return new URL(e)}catch(t){return null}}(t);return null===e?null:(""+e.host+e.pathname).replace(/\/$/,"")},M=function(){function t(e){f(this,t),this.config=Object.assign({keys:{root:"selz-js-sdk",carts:"carts",stores:"stores"},ttl:3600,schema:new Date("2018-07-02").getTime()},e),this.purge()}return d(t,[{key:"get",value:function(e){var n=L.get(this.config.keys.root);if(t.supported){var r=window.localStorage.getItem(this.config.keys.root);u.empty(r)||(n=JSON.parse(r))}return u.empty(n)?null:u.empty(e)?n:Object.keys(n).includes(e)?n[e]:null}},{key:"set",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.get()||{};if(r&&Object.keys(i).includes(e)?i[e]=P(i[e],n):i[e]=n,L.set(this.config.keys.root,i),t.supported){i.schema=this.config.schema;try{window.localStorage.setItem(this.config.keys.root,JSON.stringify(i))}catch(t){}}}},{key:"purge",value:function(){var t=this.get();if(!u.empty(t))if(Number(t.schema)===this.config.schema){var e=this.get(this.config.keys.stores)||[];u.empty(e)||this.set(this.config.keys.stores,e.filter(function(t){var e=Number(t.ttl);return e>0&&e>Date.now()}))}else window.localStorage.removeItem(this.config.keys.root)}},{key:"getCarts",value:function(t){var e=this.get(this.config.keys.carts)||{};return u.empty(e)?null:u.number(t)?Object.keys(e).includes(t.toString())?e[t.toString()]:null:e}},{key:"getCart",value:function(t,e){var n=this.getCarts(t);return u.empty(n)?null:u.string(e)?Object.keys(n).includes(e.toUpperCase())?n[e.toUpperCase()]:null:n}},{key:"setCart",value:function(t,e,n){this.set(this.config.keys.carts,h({},t,h({},e.toUpperCase(),{id:n.id,active:n.active})),!0)}},{key:"setCarts",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.set(this.config.keys.carts,h({},t,e))}},{key:"getStore",value:function(t){var e=null;if(!u.number(t)&&!u.url(t))return null;var n=this.get(this.config.keys.stores)||[];if(u.number(t))e=n.find(function(e){return u.object(e.data)&&e.data.id===t});else if(u.url(t)){var r=N(t);if(null===r)return null;e=n.find(function(t){return u.array(t.urls)&&t.urls.includes(r)})}if(!u.object(e))return null;var i=Number(e.ttl);return i>0&&i<Date.now()?(this.purge(),null):new E(e.data)}},{key:"setStore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=N(e),r=this.get(this.config.keys.stores)||[],i=null;u.empty(r)||(i=r.find(function(e){return e.data.id===t.id}));var o,a=Date.now()+this.config.ttl;if(u.object(i)){if(Object.assign(i,{data:t,ttl:a}),null!==n){u.array(i.urls)?i.urls.push(n):i.urls=[n];var c=(o=i.urls,u.array(o)?o.filter(function(t,e){return o.indexOf(t)===e}):o);Object.assign(i,{urls:c})}}else{var s={data:t,ttl:a};null!==n&&Object.assign(s,{urls:[n]}),r.push(s)}this.set(this.config.keys.stores,r)}}],[{key:"supported",get:function(){if(!window.localStorage)return!1;var t="___test";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}}]),t}(),R=function(){function t(e){f(this,t);var n=e.env,r=e.store;if(this.env=u.empty(n)?"":n,this.store=r,!u.url(r)&&!u.number(r))throw Error("A store ID or URL is required to create a client");this.storage=new M}return d(t,[{key:"getStoreId",value:function(){var t=this;return new Promise(function(e,n){u.number(t.store)?e(t.store):t.store instanceof E?e(t.store.id):(u.url(t.store)||n(new Error("Url is required for user lookup")),t.getStore().then(function(t){e(t.id)}).catch(n))})}},{key:"getStore",value:function(){var t=this;return new Promise(function(e,n){if(u.number(t.store)||u.url(t.store)){var r=t.storage.getStore(t.store);if(null!==r&&r instanceof E)return void e(r)}if(t.store instanceof E)e(t.store);else{var i=s.store(t.env,t.store);T(i).then(function(n){t.setStore(n),e(t.store)}).catch(n)}})}},{key:"setStore",value:function(t){if(u.object(t)){var e=u.url(this.store)?this.store:null;this.store=new E(t),this.storage.setStore(this.store,e)}}},{key:"getProduct",value:function(t){var e=this;return new Promise(function(n,r){T(s.product(e.env,t)).then(function(t){e.store instanceof E||e.setStore(t.store),n(new j(e,t))}).catch(r)})}},{key:"getProducts",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(r,i){t.getStoreId().then(function(o){T(s.products(t.env,o,e,n<1?1:n)).then(function(e){r(e.map(function(e){return new j(t,e)}))}).catch(i)}).catch(i)})}},{key:"createCart",value:function(t,e){var n=this;return new Promise(function(r,i){u.empty(t)?i(new Error("currency is required")):n.getStoreId().then(function(o){var a=t.toUpperCase();x(s.createCart(n.env,o),{currency:a,discount:u.empty(e)?null:e}).then(function(t){var e=new O(n,t);n.storage.setCart(o,a,e),r(e)}).catch(i)}).catch(i)})}},{key:"getCartId",value:function(t){var e=this;return new Promise(function(n,r){u.currencyCode(t)?e.getStoreId().then(function(i){var o=t.toUpperCase(),a=e.storage.getCart(i,o);u.empty(a)?e.createCart(o).then(function(t){return n(t.id)}).catch(r):n(a.id)}).catch(r):r(new Error("A valid currency code is required"))})}},{key:"getCart",value:function(t){var e=this;return new Promise(function(n,r){var i=u.currencyCode(t),o=u.objectId(t);if(i||o)if(i){var a=t.toUpperCase();e.getCartId(a).then(function(t){u.empty(t)?r(new Error("Could not find matching cart for currency code '"+a+"'")):e.getCart(t).then(function(t){e.setStore(t.store),n(t)}).catch(r)}).catch(r)}else T(s.getCart(e.env,t)).then(function(t){var r=e.getActiveCart(),i=new O(e,t,t.id===r);e.setStore(i.store),n(i)}).catch(r);else r(new Error("A valid currency code or cart id are required"))})}},{key:"getCarts",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(u.empty(o))n(null);else if(e){var a=Object.keys(o).map(function(t){return o[t].id});T(s.checkCarts(t.env,a.join(","))).then(function(e){Object.entries(e).forEach(function(t){var e=v(t,2),n=e[0];if(!e[1]){var r=Object.keys(o).find(function(t){return o[t].id===n});delete o[r]}}),t.storage.setCarts(i,o),Object.values(o).find(function(t){return t.active})?n(o):t.setActiveCart().then(n).catch(r)}).catch(r)}else n(o)}).catch(r)})}},{key:"setActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(n,r){t.getStoreId().then(function(i){t.getCarts(!1).then(function(o){var a=o;if(u.empty(a))n(null);else{if(u.currencyCode(e)){var c=e.toUpperCase(),s=Object.keys(a);if(!s.includes(c))return void r(new Error("No carts for "+c));s.forEach(function(t){a[t].active=t===c})}else{var l=u.objectId(e)?e:a[Object.keys(a)[0]].id;Object.keys(a).forEach(function(t){var e=a[t];e.active=e.id===l})}t.storage.setCarts(i,a),n(a)}})}).catch(r)})}},{key:"getActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(Object.keys(o).length){var a=Object.values(o).find(function(t){return t.active});a?e?t.getCart(a.id).then(n).catch(r):n(a.id):n(null)}else n(null)}).catch(r)})}},{key:"addToCart",value:function(t,e){var n=this;return new Promise(function(r,i){u.objectId(t)?u.empty(e)?i(new Error("A valid product is required")):x(s.addToCart(n.env,t),e).then(function(t){var e=new O(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}).catch(i):i(new Error("A valid id is required"))})}},{key:"updateCartItemQuantity",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(i,o){u.objectId(t)?u.empty(e)?o(new Error("A valid index is required")):x(s.updateCartItemQuantity(n.env,t),{index:e,quantity:r}).then(function(t){var e=new O(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){i(e)}).catch(o)}).catch(o):o(new Error("A valid id is required"))})}},{key:"removeFromCart",value:function(t,e){var n=this;return new Promise(function(r,i){u.objectId(t)?u.empty(e)?i(new Error("A valid index is required")):x(s.removeFromCart(n.env,t),{index:e}).then(function(t){if(u.empty(t))n.getCarts().then(function(){return r(null)}).catch(i);else{var e=new O(n,t,!0);n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}}).catch(i):i(new Error("A valid id is required"))})}}]),t}();t.Product=j,t.Cart=O,t.Store=E,t.default=R,Object.defineProperty(t,"__esModule",{value:!0})}(e)}),Client=unwrapExports(client);document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("output");function e(e,n){var r=document.createElement("details"),i=document.createElement("summary");i.innerHTML=e,r.appendChild(i);var o=document.createElement("div"),a=document.createElement("pre");a.classList.add("prettyprint"),a.innerHTML=JSON.stringify(n,null,4),o.appendChild(a),r.appendChild(o),t.appendChild(r),window.prettyPrint()}function n(t,n){return n instanceof Error?e(t+" (error)",{error:n.toString()}):e(t+" (failed)",n)}var r=new Client({store:"local.sampotts.me",env:"local"});function i(t){var i;(i=t.currency_code,new Promise(function(t,n){window.cart?t(window.cart):r.getCart(i).then(function(n){e("Get cart",n),window.cart=n,t(n)}).catch(function(t){return n(t)})})).then(function(r){var i=null;"string"==typeof t.variant&&t.variant.length?i=t.variant:t.variants&&t.variants.length&&(i=t.variants[0].id),r.add({id:t.id,quantity:2,variant_id:i}).then(function(t){e("Add to cart",t),window.cart=t}).catch(function(t){return n("Add to cart",t)})}).catch(function(t){return n("Get cart",t)})}window.client=r,e("Client",r);r.getProduct("http://selz.co/1MaSYRU").then(function(t){e("Product",t),window.product=t,i(t)}).catch(function(t){return n("Product",t)})});

//# sourceMappingURL=scripts.js.map

var getConstructor=function(t){return null!==t&&void 0!==t?t.constructor:null},instanceOf=function(t,e){return Boolean(t&&e&&t instanceof e)},isArray=function(t){return Array.isArray(t)},isObject=function(t){return getConstructor(t)===Object},isNumber=function(t){return getConstructor(t)===Number&&!Number.isNaN(t)},isString=function(t){return getConstructor(t)===String},isBoolean=function(t){return getConstructor(t)===Boolean},isFunction=function(t){return getConstructor(t)===Function},isNullOrUndefined=function(t){return null===t||void 0===t},isObjectId=function(t){return isString(t)&&/^[a-f\d]{24}$/i.test(t)},isCurrencyCode=function(t){return isString(t)&&/^[A-z]{3}$/.test(t)},isEmpty=function(t){return isNullOrUndefined(t)||(isString(t)||isArray(t))&&!t.length||isObject(t)&&!Object.keys(t).length},isUrl=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(instanceOf(t,window.URL))return!0;var r=t;e||/^https?:\/\/*/.test(t)||(r="http://"+t);try{return!isEmpty(new URL(r).hostname)}catch(t){return!1}},is={array:isArray,object:isObject,number:isNumber,string:isString,boolean:isBoolean,function:isFunction,nullOrUndefined:isNullOrUndefined,objectId:isObjectId,currencyCode:isCurrencyCode,url:isUrl,empty:isEmpty};function getBase(t){return"https://"+(is.empty(t)?"":t+"-")+"selz.com/sdk/"}var config={urls:{product:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"products/find?url="+e},products:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return getBase(t)+"products/all"+e+"?q="+r+"&p="+n},store:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return is.number(e)?getBase(t)+"store/find/"+e:getBase(t)+"store/find?url="+e},createCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"cart/create/"+e},getCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"cart/"+e},checkCarts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"cart/verify?ids="+e},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"cart/add/"+e},updateCartItemQuantity:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"cart/updateitemquantity/"+e},removeFromCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return getBase(t)+"cart/remove/"+e}}},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),defineProperty=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},slicedToArray=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){i=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw s}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),client=null,ProductUrls=function t(e){classCallCheck(this,t),Object.assign(this,e)},ProductImage=function t(e){classCallCheck(this,t),Object.assign(this,e)},ProductMedia=function t(e){classCallCheck(this,t),Object.assign(this,e),this.cover=new ProductImage(e.cover)},ProductFile=function t(e){classCallCheck(this,t),Object.assign(this,e)},ProductVariant=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";classCallCheck(this,t),Object.assign(this,e),this.selected=e.id===r},ProductVariantAttributeOption=function t(e,r){classCallCheck(this,t),this.id=e,this.label=r},ProductVariantAttribute=function t(e){classCallCheck(this,t),Object.assign(this,e),this.options=Object.keys(e.options).map(function(t){return new ProductVariantAttributeOption(t,e.options[t])})},Product=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(classCallCheck(this,t),is.object(r)){if(client=e,Object.assign(this,r),this.store=client.store,is.object(r.urls)&&(this.urls=new ProductUrls(r.urls)),is.object(r.media)&&(this.media=new ProductMedia(r.media)),is.array(r.images)&&(this.images=r.images.map(function(t){return new ProductImage(t)})),is.array(r.files)&&(this.files=r.files.map(function(t){return new ProductFile(t)})),r.has_variants){var i=is.empty(n)?r.variants[0].id:n;this.variants=r.variants.map(function(t){return new ProductVariant(t,i)})}r.has_variant_attributes&&(this.variant_attributes=r.variant_attributes.map(function(t){return new ProductVariantAttribute(t)}))}}return createClass(t,[{key:"featured_image",get:function(){return is.empty(this.images)?null:this.images.find(function(t){return t.is_featured})}},{key:"is_sold_out",get:function(){return 0===this.quantity_available}},{key:"selected_variant",get:function(){return is.empty(this.variants)?null:this.variants.find(function(t){return t.selected})}}]),t}(),client$1=null,CartItem=function t(e,r){classCallCheck(this,t),this.cartId=r,Object.assign(this,e),this.product=new Product(client$1,e.product,e.variant_id)},Cart=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];classCallCheck(this,t),null!==r&&(client$1=e,Object.assign(this,r),this.store=client$1.store,this.active=n,this.items=Array.from(r.items).map(function(t){return new CartItem(t,r.id)}))}return createClass(t,[{key:"add",value:function(t){return client$1.addToCart(this.id,t)}},{key:"remove",value:function(t){return client$1.removeFromCart(this.id,t)}}]),t}(),Store=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;classCallCheck(this,t),is.object(e)&&Object.assign(this,e)};function replaceAll(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),r.toString())}function toTitleCase(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}function toPascalCase(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return replaceAll(t=toTitleCase(t=replaceAll(t=replaceAll(t,"-"," "),"_"," "))," ","")}var buildFormData=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1],n=arguments[2],i=r||new FormData,s=void 0;return is.object(e)?(Object.keys(e).forEach(function(r){s=n?n+"["+r+"]":r,"object"!==_typeof(e[r])||e[r]instanceof File?i.append(toPascalCase(s),e[r]):t(e[r],i,r)}),i):i};function extend(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(!r.length)return t;var i=r.shift();return is.object(i)?(Object.keys(i).forEach(function(e){is.object(i[e])?(Object.keys(t).includes(e)||Object.assign(t,defineProperty({},e,{})),extend(t[e],i[e])):Object.assign(t,defineProperty({},e,i[e]))}),extend.apply(void 0,[t].concat(r))):t}function parseJSON(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,r){try{e(JSON.parse(t))}catch(t){r(t)}})}var defaults$1={type:"GET",body:{},responseType:"json"};function fetch(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=extend({},defaults$1,e),n=r.type,i=r.body,s=r.responseType;return new Promise(function(e,r){try{var o=new XMLHttpRequest;if(!("withCredentials"in o)){var a=new Error("No CORS support");throw a.request=o,a}o.addEventListener("load",function(){var t=o.response;"json"===s?parseJSON(t).then(function(t){if(!t.success){var r=new Error("Request failed");throw r.errors=t.errors,r}e(t.data)}).catch(r):e(t)}),o.addEventListener("error",function(){var t=new Error(o.status);throw t.request=o,t}),o.open(n,t,!0),"json"!==s&&(o.responseType=s),o.send(buildFormData(i))}catch(a){r(a)}})}var queue={},http={get:function(t){if(!Object.keys(queue).includes(t)){queue[t]=fetch(t);var e=function(){delete queue[t]};queue[t].then(e).catch(e)}return queue[t]},post:function(t){return fetch(t,{type:"POST",body:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})}};function dedupe(t){return is.array(t)?t.filter(function(e,r){return t.indexOf(e)===r}):t}function parseUrl(t){var e=t;/^https?:\/\/*/.test(t)||(e="http://"+t);try{return new URL(e)}catch(t){return null}}var storage=new Map,getKey=function(t){if(null===t)return null;var e=parseUrl(t);return null===e?null:(""+e.host+e.pathname).replace(/\/$/,"")},Storage=function(){function t(e){classCallCheck(this,t),this.config=Object.assign({keys:{root:"selz-js-sdk",carts:"carts",stores:"stores"},ttl:3600,schema:new Date("2018-07-02").getTime()},e),this.purge()}return createClass(t,[{key:"get",value:function(e){var r=storage.get(this.config.keys.root);if(t.supported){var n=window.localStorage.getItem(this.config.keys.root);is.empty(n)||(r=JSON.parse(n))}return is.empty(r)?null:is.empty(e)?r:Object.keys(r).includes(e)?r[e]:null}},{key:"set",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.get()||{};if(n&&Object.keys(i).includes(e)?i[e]=extend(i[e],r):i[e]=r,storage.set(this.config.keys.root,i),t.supported){i.schema=this.config.schema;try{window.localStorage.setItem(this.config.keys.root,JSON.stringify(i))}catch(t){}}}},{key:"purge",value:function(){var t=this.get();if(!is.empty(t))if(Number(t.schema)===this.config.schema){var e=this.get(this.config.keys.stores)||[];is.empty(e)||this.set(this.config.keys.stores,e.filter(function(t){var e=Number(t.ttl);return e>0&&e>Date.now()}))}else window.localStorage.removeItem(this.config.keys.root)}},{key:"getCarts",value:function(t){var e=this.get(this.config.keys.carts)||{};return is.empty(e)?null:is.number(t)?Object.keys(e).includes(t.toString())?e[t.toString()]:null:e}},{key:"getCart",value:function(t,e){var r=this.getCarts(t);return is.empty(r)?null:is.string(e)?Object.keys(r).includes(e.toUpperCase())?r[e.toUpperCase()]:null:r}},{key:"setCart",value:function(t,e,r){this.set(this.config.keys.carts,defineProperty({},t,defineProperty({},e.toUpperCase(),{id:r.id,active:r.active})),!0)}},{key:"setCarts",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.set(this.config.keys.carts,defineProperty({},t,e))}},{key:"getStore",value:function(t){var e=null;if(!is.number(t)&&!is.url(t))return null;var r=this.get(this.config.keys.stores)||[];if(is.number(t))e=r.find(function(e){return is.object(e.data)&&e.data.id===t});else if(is.url(t)){var n=getKey(t);if(null===n)return null;e=r.find(function(t){return is.array(t.urls)&&t.urls.includes(n)})}if(!is.object(e))return null;var i=Number(e.ttl);return i>0&&i<Date.now()?(this.purge(),null):new Store(e.data)}},{key:"setStore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=getKey(e),n=this.get(this.config.keys.stores)||[],i=null;is.empty(n)||(i=n.find(function(e){return e.data.id===t.id}));var s=Date.now()+this.config.ttl;if(is.object(i)){if(Object.assign(i,{data:t,ttl:s}),null!==r){is.array(i.urls)?i.urls.push(r):i.urls=[r];var o=dedupe(i.urls);Object.assign(i,{urls:o})}}else{var a={data:t,ttl:s};null!==r&&Object.assign(a,{urls:[r]}),n.push(a)}this.set(this.config.keys.stores,n)}}],[{key:"supported",get:function(){if(!window.localStorage)return!1;var t="___test";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}}]),t}(),Client=function(){function t(e){classCallCheck(this,t);var r=e.env,n=e.store;if(this.env=is.empty(r)?"":r,this.store=n,!is.url(n)&&!is.number(n))throw Error("A store ID or URL is required to create a client");this.storage=new Storage}return createClass(t,[{key:"getStoreId",value:function(){var t=this;return new Promise(function(e,r){is.number(t.store)?e(t.store):t.store instanceof Store?e(t.store.id):(is.url(t.store)||r(new Error("Url is required for user lookup")),t.getStore().then(function(t){e(t.id)}).catch(r))})}},{key:"getStore",value:function(){var t=this;return new Promise(function(e,r){if(is.number(t.store)||is.url(t.store)){var n=t.storage.getStore(t.store);if(null!==n&&n instanceof Store)return void e(n)}if(t.store instanceof Store)e(t.store);else{var i=config.urls.store(t.env,t.store);http.get(i).then(function(r){t.setStore(r),e(t.store)}).catch(r)}})}},{key:"setStore",value:function(t){if(is.object(t)){var e=is.url(this.store)?this.store:null;this.store=new Store(t),this.storage.setStore(this.store,e)}}},{key:"getProduct",value:function(t){var e=this;return new Promise(function(r,n){http.get(config.urls.product(e.env,t)).then(function(t){e.store instanceof Store||e.setStore(t.store),r(new Product(e,t))}).catch(n)})}},{key:"getProducts",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(n,i){t.getStoreId().then(function(s){http.get(config.urls.products(t.env,s,e,r<1?1:r)).then(function(e){n(e.map(function(e){return new Product(t,e)}))}).catch(i)}).catch(i)})}},{key:"createCart",value:function(t,e){var r=this;return new Promise(function(n,i){is.empty(t)?i(new Error("currency is required")):r.getStoreId().then(function(s){var o=t.toUpperCase();http.post(config.urls.createCart(r.env,s),{currency:o,discount:is.empty(e)?null:e}).then(function(t){var e=new Cart(r,t);r.storage.setCart(s,o,e),n(e)}).catch(i)}).catch(i)})}},{key:"getCartId",value:function(t){var e=this;return new Promise(function(r,n){is.currencyCode(t)?e.getStoreId().then(function(i){var s=t.toUpperCase(),o=e.storage.getCart(i,s);is.empty(o)?e.createCart(s).then(function(t){return r(t.id)}).catch(n):r(o.id)}).catch(n):n(new Error("A valid currency code is required"))})}},{key:"getCart",value:function(t){var e=this;return new Promise(function(r,n){var i=is.currencyCode(t),s=is.objectId(t);if(i||s)if(i){var o=t.toUpperCase();e.getCartId(o).then(function(t){is.empty(t)?n(new Error("Could not find matching cart for currency code '"+o+"'")):e.getCart(t).then(function(t){e.setStore(t.store),r(t)}).catch(n)}).catch(n)}else http.get(config.urls.getCart(e.env,t)).then(function(t){var n=e.getActiveCart(),i=new Cart(e,t,t.id===n);e.setStore(i.store),r(i)}).catch(n);else n(new Error("A valid currency code or cart id are required"))})}},{key:"getCarts",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return new Promise(function(r,n){t.getStoreId().then(function(i){var s=t.storage.getCarts(i);if(is.empty(s))r(null);else if(e){var o=Object.keys(s).map(function(t){return s[t].id});http.get(config.urls.checkCarts(t.env,o.join(","))).then(function(e){Object.entries(e).forEach(function(t){var e=slicedToArray(t,2),r=e[0];if(!e[1]){var n=Object.keys(s).find(function(t){return s[t].id===r});delete s[n]}}),t.storage.setCarts(i,s),Object.values(s).find(function(t){return t.active})?r(s):t.setActiveCart().then(r).catch(n)}).catch(n)}else r(s)}).catch(n)})}},{key:"setActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(r,n){t.getStoreId().then(function(i){t.getCarts(!1).then(function(s){var o=s;if(is.empty(o))r(null);else{if(is.currencyCode(e)){var a=e.toUpperCase(),c=Object.keys(o);if(!c.includes(a))return void n(new Error("No carts for "+a));c.forEach(function(t){o[t].active=t===a})}else{var u=is.objectId(e)?e:o[Object.keys(o)[0]].id;Object.keys(o).forEach(function(t){var e=o[t];e.active=e.id===u})}t.storage.setCarts(i,o),r(o)}})}).catch(n)})}},{key:"getActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(r,n){t.getStoreId().then(function(i){var s=t.storage.getCarts(i);if(Object.keys(s).length){var o=Object.values(s).find(function(t){return t.active});o?e?t.getCart(o.id).then(r).catch(n):r(o.id):r(null)}else r(null)}).catch(n)})}},{key:"addToCart",value:function(t,e){var r=this;return new Promise(function(n,i){is.objectId(t)?is.empty(e)?i(new Error("A valid product is required")):http.post(config.urls.addToCart(r.env,t),e).then(function(t){var e=new Cart(r,t,!0);r.setStore(e.store),r.setActiveCart(e.id).then(function(){n(e)}).catch(i)}).catch(i):i(new Error("A valid id is required"))})}},{key:"updateCartItemQuantity",value:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(i,s){is.objectId(t)?is.empty(e)?s(new Error("A valid index is required")):http.post(config.urls.updateCartItemQuantity(r.env,t),{index:e,quantity:n}).then(function(t){var e=new Cart(r,t,!0);r.setStore(e.store),r.setActiveCart(e.id).then(function(){i(e)}).catch(s)}).catch(s):s(new Error("A valid id is required"))})}},{key:"removeFromCart",value:function(t,e){var r=this;return new Promise(function(n,i){is.objectId(t)?is.empty(e)?i(new Error("A valid index is required")):http.post(config.urls.removeFromCart(r.env,t),{index:e}).then(function(t){if(is.empty(t))r.getCarts().then(function(){return n(null)}).catch(i);else{var e=new Cart(r,t,!0);r.setActiveCart(e.id).then(function(){n(e)}).catch(i)}}).catch(i):i(new Error("A valid id is required"))})}}]),t}();export default Client;export{Product,Cart,Store};

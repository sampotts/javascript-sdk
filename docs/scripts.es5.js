document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("output");function n(n,e){var r=document.createElement("details"),a=document.createElement("summary");a.innerHTML=n,r.appendChild(a);var c=document.createElement("div"),o=document.createElement("pre");o.classList.add("prettyprint"),o.innerHTML=JSON.stringify(e,null,4),c.appendChild(o),r.appendChild(c),t.appendChild(r),window.prettyPrint()}function e(t,e){return e instanceof Error?(console.error(e),n(t+" (error)",{error:e.toString()})):n(t+" (failed)",e)}var r=new SelzClient({storeId:13,env:"local",colors:{buttons:{background:"#559cda",text:"#fff"},checkout:{background:"#559cda",text:"#fff"}}});function a(t){var a,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(a=t.currency_code,new Promise(function(t,e){window.cart?t(window.cart):r.getCart(a).then(function(e){n("Get cart",e),window.cart=e,t(e)}).catch(function(t){return e(t)})})).then(function(r){var a=null;"string"==typeof t.variant&&t.variant.length?a=t.variant:t.variants&&t.variants.length&&(a=t.variants[0].id),r.add({id:t.id,quantity:2,variant_id:a}).then(function(t){n("Add to cart",t),window.cart=t,c&&t.checkout()}).catch(function(t){return e("Add to cart",t)})}).catch(function(t){return e("Get cart",t)})}window.client=r,n("Client",r);r.getProduct("http://selz.co/1rvbhT6").then(function(t){n("Product",t),window.product=t,a(t,!0)}).catch(function(t){return e("Product",t)}),window.addEventListener("message",function(t){var n=JSON.parse(t.data);"add-to-cart"===n.key&&a(n.data)})});

//# sourceMappingURL=scripts.es5.js.map

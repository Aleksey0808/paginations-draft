!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequireccc1;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequireccc1=i),i.register("iE7OH",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var i={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),i[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.3fe1993e.js","kxKJ3":"symbol-defs.d1c9842b.svg"}'));var o="https://api.themoviedb.org/3/movie/popular",c="002008aca7b79d6606168d582d26d735";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat(o,"?api_key=").concat(c,"&page=").concat(t);return fetch(e).then((function(t){return t.json()}))}i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("kxKJ3");var l=document.querySelector(".pagination"),u=0;function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,n="",r=t-2,i=t-1,o=t+1,c=t+2;if(u=t,t>1&&(n+="<li><a href=\"#\" class='arrow-left'>left</a></li>",n+="<li>1</li>"),t>4&&(n+="<li>...</li>"),t>3&&(n+="<li>".concat(r,"</li>")),t>2&&(n+="<li>".concat(i,"</li>")),n+="<li><span class='currentPage'>".concat(t,"</span></li>"),t>=e)return l.innerHTML=n;e-1>t&&o<=e&&(n+="<li>".concat(o,"</li>")),e-2>t&&c<=e&&(n+="<li>".concat(c,"</li>")),e-3>t&&(n+="<li>...</li>"),(e>t||e<t)&&(n+="<li>".concat(e,"</li>"),n+="<li><a href=\"#\" class='arrow-right'>right</a></li>"),l.innerHTML=n}l.addEventListener("click",(function(t){if(console.log(t.target.textContent),"LI"!==t.target.nodeName&&"A"!==t.target.nodeName)return;if("..."===t.target.textContent)return;if("left"===t.target.textContent)return console.log("Hello im left"),void a(u-=1).then((function(t){d(t.results),s(t.page,g)})).catch((function(t){}));if("right"===t.target.textContent)return console.log("Hello im right"),void a(u+=1).then((function(t){d(t.results),s(t.page,g)})).catch((function(t){}));a(t.target.textContent).then((function(t){d(t.results),s(t.page,g)})).catch((function(t){}))}));var f=document.querySelector(".cards"),g=500;function d(t){var e=t.reduce((function(t,e){var n=e.title,r=e.vote_average,i=e.poster_path;return t+'<li class="cards-item"><img class=\'movieImag\' src="https://image.tmdb.org/t/p/w500'.concat(i,"\" alt=\"\"> <div class='description_box'><p class='title'>").concat(n,"</p><p class='grade'>").concat(r,"</p></div></li>")}),"");f.innerHTML=e}a().then((function(t){d(t.results),s(t.page,g)}))}();
//# sourceMappingURL=index.3fe1993e.js.map
function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequireccc1;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequireccc1=i),i.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.af48da88.js","9v6fF":"symbol-defs.d1c9842b.svg"}'));function o(e=1){return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=002008aca7b79d6606168d582d26d735&page=${e}`).then((e=>e.json()))}new URL(i("kyEFX").resolve("9v6fF"),import.meta.url).toString();const l=document.querySelector(".pagination");let a=0;function s(e,t=u){let r="",n=e+1,i=e+2;if(a=e,e>1&&(r+="<li><a href=\"#\" class='arrow-left'>left</a></li>",r+="<li>1</li>"),e>4&&(r+="<li>...</li>"),e>3&&(r+=`<li>${e-2}</li>`),e>2&&(r+=`<li>${e-1}</li>`),r+=`<li><span class='currentPage'>${e}</span></li>`,e>=t)return l.innerHTML=r;t-1>e&&n<=t&&(r+=`<li>${n}</li>`),t-2>e&&i<=t&&(r+=`<li>${i}</li>`),t-3>e&&(r+="<li>...</li>"),(t>e||t<e)&&(r+=`<li>${t}</li>`,r+="<li><a href=\"#\" class='arrow-right'>right</a></li>"),l.innerHTML=r}l.addEventListener("click",(function(e){if(console.log(e.target.textContent),"LI"!==e.target.nodeName&&"A"!==e.target.nodeName)return;if("..."===e.target.textContent)return;if("left"===e.target.textContent)return console.log("Hello im left"),void o(a-=1).then((e=>{d(e.results),s(e.page,u)})).catch((e=>{}));if("right"===e.target.textContent)return console.log("Hello im right"),void o(a+=1).then((e=>{d(e.results),s(e.page,u)})).catch((e=>{}));o(e.target.textContent).then((e=>{d(e.results),s(e.page,u)})).catch((e=>{}))}));const c=document.querySelector(".cards"),u=500;function d(e){const t=e.reduce(((e,{title:t,vote_average:r,poster_path:n})=>e+`<li class="cards-item"><img class='movieImag' src="https://image.tmdb.org/t/p/w500${n}" alt=""> <div class='description_box'><p class='title'>${t}</p><p class='grade'>${r}</p></div></li>`),"");c.innerHTML=t}o().then((e=>{d(e.results),s(e.page,u)}));
//# sourceMappingURL=index.af48da88.js.map
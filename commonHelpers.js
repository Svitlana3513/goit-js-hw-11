import"./assets/vendor-db7463ae.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function l(t){const o="https://pixabay.com/api/",i=new URLSearchParams({key:"43044208-9f5714c3237b37b2f1db9f248",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${o}?${i}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(response.status);return e.json()})}function c(t){return`<li class="image-item">
           <a class="image-link" href="${t.largeImageURL}">
             <img
               class="image-photo"
               width="1280"
               height="152"
               src="${t.webformatURL}"
               data-source="${t.largeImageURL}"
               alt="${t.tags}"
             />
             </a>
             <ul class="image-description">
             <li><h3>Likes</h3><p>${t.likes}</p>
             </li>
             <li><h3>Views</h3><p>${t.views}</p>
               </li>
               <li><h3>Comments</h3><p>${t.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${t.downloads}</p>
                   </li>
             </ul>
           </li>`}function a(t){return t.map(c).join("")}l().then(t=>{const o=a(t);console.log(o)});
//# sourceMappingURL=commonHelpers.js.map

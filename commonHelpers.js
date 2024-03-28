import{S as u,i as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(s){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"43044208-9f5714c3237b37b2f1db9f248",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${t}?${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(response.status);return e.json()})}const p=s=>s.map(t=>`<li class="image-item">
           <a class="image-link" href="${t.largeImageURL}">
             <img
               class="image-photo"
               width="360"
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
           </li>`).join(""),l=document.querySelector(".form"),c=document.querySelector(".gallery"),h=document.querySelector(".loader"),d=new u(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const t=s.target.elements.image.value;t?(h.classList.remove(".is-hidden"),m(t).then(o=>{o.hits.length||n.error({position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",height:"88",message:"Sorry, there are no images matching your search query. Please try again!"});const i=p(o.hits);c.innerHTML=i,h.classList.add(".is-hidden"),d.refresh()}).catch(o=>console.log(o))):n.error({position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",height:"88",message:"Please, fill the form!"}),l.reset()});
//# sourceMappingURL=commonHelpers.js.map

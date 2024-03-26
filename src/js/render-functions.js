  


function imageTemplate(image) {
        return `<li class="image-item">
           <a class="image-link" href="${image.largeImageURL}">
             <img
               class="image-photo"
               width="1280"
               height="152"
               src="${image.webformatURL}"
               data-source="${image.largeImageURL}"
               alt="${image.tags}"
             />
             </a>
             <ul class="image-description">
             <li><h3>Likes</h3><p>${image.likes}</p>
             </li>
             <li><h3>Views</h3><p>${image.views}</p>
               </li>
               <li><h3>Comments</h3><p>${image.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${image.downloads}</p>
                   </li>
             </ul>
           </li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}; 
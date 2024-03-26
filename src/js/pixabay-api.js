export function getImages(query){
  const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: "43044208-9f5714c3237b37b2f1db9f248",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
  })  
  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(res => {
    if(!res.ok){
        throw new Error(response.status);
    }
    return res.json();
  });
}





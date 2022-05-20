// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }



export const getFlickrImages = async (searchTag, pageNumber) => {
  // console.log('### tag pgNum', searchTag, pageNumber)

  const apiKey = '63c1305a88cdb1f8f1354bfb8615e8f1';

  const data = {
    method: 'flickr.photos.search',
    api_key: apiKey,
    tags: searchTag,
    sort: 'interestingness-desc',
    per_page: 15,
    page: pageNumber,
    extras: 'owner_name, date_taken, description',
    format: 'json',
    nojsoncallback: 1,
  };

  const parameters = new URLSearchParams(data);

  const flickrURL = `https://api.flickr.com/services/rest/?${parameters}`
  // console.log('### url ', flickrURL)

  try {
    const response = await fetch(flickrURL);
    const json = await response.json();
    console.log('### flickr data ', json.photos)
    return json.photos;
  } catch (error) {
    console.error(error);
  }
};

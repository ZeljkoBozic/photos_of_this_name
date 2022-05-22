export const getFlickrImages = async (searchTag, pageNumber) => {
  const apiKey = '63c1305a88cdb1f8f1354bfb8615e8f1';

  const data = {
    method: 'flickr.photos.search',
    api_key: apiKey,
    tags: searchTag,
    sort: 'desc',
    per_page: 15,
    page: pageNumber,
    extras: 'owner_name, date_taken, description',
    format: 'json',
    nojsoncallback: 1,
  };

  const parameters = new URLSearchParams(data);

  const flickrURL = `https://api.flickr.com/services/rest/?${parameters}`;

  try {
    const response = await fetch(flickrURL);
    const json = await response.json();
    return json.photos;
  } catch (error) {
    console.error(error);
  }
};

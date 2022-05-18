// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

// TODO: pass page number, tag

const flickrURL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9077ed96f15f70a86798aca3402a9f5a&tags=cats&extras=owner_name%2C+date_taken%2C+description&page=44&format=json&nojsoncallback=1&auth_token=72157720843817160-d931fd5430d42d37&api_sig=8aac62cae914a1b9fd4b11d0ee7eabf3"

export const getFlickrImages = async () => {
  try {
    const response = await fetch(flickrURL);
    const json = await response.json();
    console.log('### flickr data ', json.photos)
    return json.photos;
  } catch (error) {
    console.error(error);
  }
};

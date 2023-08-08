console.log('fetch01');

const url = "https://codingapple1.github.io/price.json";

fetch(url)
   .then((resp) => {
      if(!resp.ok) {
         throw new Error('400 또는 500 Error');
      }
      return resp.json();
   })
   .then((json) => {
      console.log('🙂',json);
      console.log('😀',json['price']);
   })
   .catch((error) => {
      console.error('😨',error);
   })
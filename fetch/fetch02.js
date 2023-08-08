console.log('fetch02');

async function getRequset(){
   const response = await fetch("https://codingapple1.github.io/price.json");
   if(!response.ok){
      throw new Error('400 또는 500 Error');
   }
   
   response.json().then( (json) => {
      console.log('price',json['price']);
   });
}

getRequset();
getRequset();
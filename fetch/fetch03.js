console.log('fetch02');

async function getRequset(){
   let obj = {name : '아무개', age : 20 };
   console.log(obj, JSON.stringify(obj));
   const url = "https://codingapple1.github.io/price.json";
   const msg = {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(obj)
   };

   const response = await fetch(url, msg);
   if(!response.ok){
      throw new Error('400 또는 500 Error');
   }
   
   response.json().then( (json) => {
      console.log('price',json['price']);
   });
}

getRequset();
getRequset();
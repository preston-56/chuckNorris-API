const divElement = document.getElementsByClassName('card-body');
async function getJoke(){
  let url = 'http://localhost:3000/categories'
   await fetch(url)
  .then((res)=>res.json())
  .then((data)=>console.log(`data`, data))
  console.log();
  }
  getJoke()
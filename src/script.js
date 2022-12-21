 async function generateJoke() {
  let url;
  let category =  document.getElementById("select-list").value;

  if(category !== "select category") {
    url ="https://api.chucknorris.io/jokes/random?category=" + category;
  } else {
       url ="https://api.chucknorris.io/jokes/random";
  }
  await fetch(url)
    .then((res) => res.json())
    //get raw json data
    .then((obj) => {
      this.obj = obj;
      console.log('hapa..', this.obj.value);
      // display the joke when the webpage loads
      //document.getElementById("image").src = this.obj.icon_url;
      document.getElementById("joke").innerHTML = this.obj.value;
    })
    .catch(function () {
      console.log("error");
    });
}

window.onload = async function (e) {
  generateJoke();
  e.preventDefault()
  document.getElementById("generate").addEventListener('click', generateJoke);
};


console.log(`Hello from script!`);

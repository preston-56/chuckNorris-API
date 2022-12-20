
//setup your event handlers here
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

})
async function getJoke() {
  let url = 'http://localhost:3000/jokes' 
      await fetch(url)
         .then((res) => res.json())
         .then((data) => {
          for (let item of data) {
            console.log(data);
            form.innerHTML += `
    <div class="card p-2 mt-2 w-75" id="new-joke">
    
    <h4 id="content">
    <p><button class="btn btn-primary btn-sm btn-lg float-end" id="delete-btn">Delete</button></p>
    <i class="fas fa-quote-left"></i>
    <p id="random-joke">${item.value} </p>
    <i class="fas fa-quote-right"></i>
    
    
    <h4>
    
    </div>
   
    `;
          }
        });

  }

getJoke()

  // async function createJoke(item) {}


const deleteButton = document.getElementById('delete-btn');
  deleteButton.addEventListener("click", function(event) {
    if (event.target.id === 'delete-btn') {
    fetch(`http://localhost:3000/categories/dev`, {
    method: "DELETE",
    headers: {
    "content-type": "application/json",
    accept: "application/json"
    }
  }).then(resp => resp.json())
  .then(() => {
  // form.innerHTML = "";
  // form.remove();
  document.getElementById('content').innerHTML = "";
  deleteButton.style.display = "none";
  })
}
})

// fetch resources from the local server
async function getJoke() {
  const jokesDiv = document.getElementById('jokes-list')
  let url = 'http://localhost:3000/jokes' 
      await fetch(url)
         .then((res) => res.json())
         .then((data) => {
          // console.log(`data`, data);
          for (let item of data) {
            jokesDiv.innerHTML += `
    <div class="card p-2 mt-2 mb-2 w-75" id="new-joke">
    
    <h4 id="content">
    <i class="fas fa-quote-left"></i>
   <p><button class="btn btn-primary btn-sm btn-lg float-end" id="delete-btn" onclick="handleDelete(${item.id})" >Delete</button></p>
    <p id="random-joke">${item.value} </p>
    <i class="fas fa-quote-right"></i>
    <h4>
    </div>
    `;
          }
        });
  }

document.addEventListener('DOMContentLoaded', (e) => {
   getJoke();
})
//setup  event handlers 
form.addEventListener('submit', e => {
  e.preventDefault();

  let url = "http://localhost:3000/jokes";
  const formData = new FormData(form);
  const newJoke = Object.fromEntries(formData);
  fetch(url).then((resp) => resp.json()).then((data) => {
    const lastJoke = data[data.length -1]
   fetch(url, { 
    method: 'POST', 
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({ id: String(parseInt(lastJoke.id) + 1), value: newJoke.joke})})
    .then(response => response.json())
    .then( function (data){
      document.innerHTML = data["id"]

    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
  })
  
})

// delete resource
    handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/jokes/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

console.log(`Hello from pseudo!`);

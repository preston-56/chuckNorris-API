// fetch resources from the local server
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
    <i class="fas fa-quote-left"></i>
    <p id="random-joke">${item.value} </p>
    <i class="fas fa-quote-right"></i>
    <h4>
    </div>
    `;
          }
        });
/*
btn pseudo code
<p><button class="btn btn-primary btn-sm btn-lg float-end" id="delete-btn">Delete</button></p>
*/
  }

getJoke()

// submit data to the server
/*
                   pseudo code
async function submitData() {
  let data = {
    "id": "6",
    "value": "Check up on Chuck Norris, He's not that tough!"
  }

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }
  
  return fetch("http://localhost:3000/jokes", configurationObject)
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    document.innerHTML = data["id"]["value"];
    })
  .catch(function (error){
    document.innerHTML = error.message;
  })
 }
 */
 
//setup  event handlers 
const msg = document.getElementById('form');
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
      
      /*
      pseudo code for confirm submit
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
      msg.innerHTML = ""

        }, 1000)
        */

       
    

        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
  })
  
})

 // form validation to handle empty entry

 /* 
     pseudo code for validation
 function IsEmpty() {
  let input = document.forms["Form"]["Joke"].value;
  
  if ( input === "" || input === null) {
    return false;
  }
}
IsEmpty();
*/


// delete request deletes resources at the local server
const deleteButton = document.getElementById('delete-btn');
  deleteButton.addEventListener("click", function(event) {
    if (event.target.id === 'delete-btn') {
    fetch(`http://localhost:3000/jokes`, {
    method: "DELETE",
    headers: {
    "content-type": "application/json",
    accept: "application/json"
    }
  }).then(resp => resp.json())
  .then(() => {
  document.getElementById('content').innerHTML = "";
  deleteButton.style.display = "visible";
  })
}
})


console.log(`Hello from pseudo!`);

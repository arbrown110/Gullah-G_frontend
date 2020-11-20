
const endPoint= "http://localhost:3000/api/v1/collections"

document.addEventListener('DOMContentLoaded', () => {
  console.log("Dom is Loaded");
  
  getCollections()

    const createCollectionForm = document.querySelector("#create-collection-form")
    createCollectionForm.addEventListener("submit", (e) => createFormHandler(e))


})

function getCollections() {
  //event.preventDefault
  clearScreen()
  fetch(endPoint)
  .then(response => response.json())
  .then(collections => {
    collections.data.forEach(collection => {
      // nested data in console and over each rending attributes
      
      let newCollection = new Collection(collection, collection.attributes)
      
      document.querySelector('#collection-container').innerHTML += newCollection.renderCollectionCard()
    document.querySelectorAll('#delete').forEach(collection => collection.addEventListener('click', removeCollection))
        })
    })
}

function clearScreen(){
  document.querySelector('#collection-container').innerHTML = ""
}

function createFormHandler(e) {
    e.preventDefault()
    //console.log(e);
    const nameInput = document.querySelector('#input-name').value
    const imageInput = document.querySelector('#input-url').value
    const descriptionInput = document.querySelector('#input-description').value
    const sourceInput = document.querySelector('#input-source-url').value
    const categoryInput = document.querySelector('#categories').value
    const categoryId = parseInt(categoryInput)
    postFetch(nameInput, imageInput, descriptionInput, sourceInput, categoryId)
  }
  
  function postFetch(name, image_url, description, source_url, category_id) {
    // confirm these values are coming through properly
    console.log(name, image_url, description, source_url, category_id);
    // build body object
    const bodyData = {name, image_url, description, source_url, category_id}
    
    fetch(endPoint, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(collection => {
      console.log(collection);
      const collectionData = collection.data
      let newCollection = new Collection(collectionData, collectionData.attributes)
      
      document.querySelector('#collection-container').innerHTML += newCollection.renderCollectionCard() //error possbily due to "name" attribute
    })
  }
  
  function removeCollection(event){
    event.preventDefault()
   let id = event.target.dataset.id
   const collect = document.getElementById("collection-container") 
   
   fetch(`http://localhost:3000/api/v1/collections/${id}`, {
     method: 'DELETE',
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
      }
    
  })
  .then(data => {
    
   const piece = document.querySelector(`button[data-id = '${id}']`).parentElement.parentElement
  piece.remove()
      
      
      
      
  getCollections()
  })
}
 // collection id as an arguement ---> access Id through collection-card -- inside on-click attribute
  

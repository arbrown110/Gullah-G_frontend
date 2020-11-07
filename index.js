const endPoint= "http://localhost:3000/api/v1/collections"

document.addEventListener('DOMContentLoaded', () => {
    getCollections()

    let createCollectionForm = document.querySelector("#create-collection-form")

    createCollectionForm.addEventListener("submit", (e) => createFormHandler(e))
});


   function getCollections() {
    fetch (endPoint)
    .then(response => response.json())
    .then(collections => {
        collections.data.forEach(collection => {

            // nested data in console and over each rending attributes
            const collectionMarkup = `
          <div data-id=${collection.id}>
            <img src=${collection.attributes.image_url} height="200" width="250">
            <h3>${collection.attributes.name}</h3>
            <p>${collection.attributes.category.name}</p>
            <button data-id=${collection.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#collection-container').innerHTML += collectionMarkup
      })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const imageInput = document.querySelector('#input-url').value
    const descriptionInput = document.querySelector('#input-description').value
    const sourceInput = document.querySelector('#input-source-url').value
    const categoryInput = document.querySelector('#categories').value
    const categoryId = parseInt(categoryInput)
    postCollection(nameInput, imageInput, descriptionInput, sourceInput, categoryInput)
  }

  function postCollection(name, image_url, description, source_url, category_id) {
    // confirm these values are coming through properly
    //console.log(name, image_url, description, source_url, category_id);
    // build body object
    let bodyData = {name, image_url, description, source_url, category_id}
  
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
        const collectionMarkup = `
        <div data-id=${collection.id}>
            <img src=${collection.attributes.image_url} height="200" width="250">
            <h3>${collection.attributes.name}</h3>
            <p>${collection.attributes.category.name}</p>
            <button data-id=${collection.id}>edit</button>
        </div>
        <br><br>`;
        document.querySelector('#collection-container').innerHTML += collectionMarkup
    })
}

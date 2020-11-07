const endPoint= "http://localhost:3000/api/v1/collections"

document.addEventListener('DOMContentLoaded', () => {
    getCollections()
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
            <p>${collection.attributes.description}</p>
            <p>${collection.attributes.source_url}</p>
            <p>${collection.attributes.category.name}</p>
            <button data-id=${collection.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#collection-container').innerHTML += collectionMarkup
      })
    })
}
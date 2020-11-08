class Collection {
    constructor(collection, collectionAttributes) {
        this.id = collection.id
        this.name = collectionAttributes.name
        // NAME IS COMING UP UNKNOWN ATTRIBUTE
        this.image_url = collectionAttributes.image_url
        this.description = collectionAttributes.description
        this.source_url = collectionAttributes.source_url
        this.category = collectionAttributes.category
        Collection.all.push(this)
    }
    renderCollectionCard() {
        debugger
     return `
       <div data-id=${this.id}>
         <img src=${this.image_url} height="200" width="250">
         <h3>${this.name}</h3>
         <p>${this.category.name}</p>
         <button data-id=${this.id}>edit</button>
       </div>
       <br><br>`;
    }
}
// ES6 sugar class collection
Collection.all = []; //global scope
// not able pull up in console due to "name" not working
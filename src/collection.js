class Collection {
    constructor(collection, collectionAttributes) {
        this.id = collection.id
        this.name = collectionAttributes.name
        this.image_url = collectionAttributes.image_url
        this.description = collectionAttributes.description
        this.source_url = collectionAttributes.source_url
        this.category = collectionAttributes.category
        Collection.all.push(this)
        //console.log(this);
    }
    renderCollectionCard() {
        //debugger
        return `
        <div class="dropdown">
            <img src=${this.image_url} alt="input-image-url" width="200" height="90">
            <div class="dropdown-content">
                <img src=${this.image_url} alt="input-image-url" width="300" height="200">
                <div class="desc">
                 ${this.name}
                 <br></br>
                 ${this.description}
                 <br></br>
                 ${this.source_url}
                  <br></br>
                  <small class="text-muted">Category: ${this.category.name}</small> 
                </div>
            </div>
        </div>
        `

        
    }
}
// ES6 sugar class collection
Collection.all = []; //global scope
// not able pull up in console due to "name" not working
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
        //debugger
    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-name">${this.name}</h5>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                 <small class="text-muted">Category: ${this.category.name}</small>
                </div>
            </div>
        </div>
    </div>
    `   
     // return `//
    //   <div data-id=${this.id}>
    //     <img src=${this.image_url} height="200" width="250">
    //     <h3>${this.name}</h3>
    //     <button data-id=${this.id}>edit</button>
    //   </div>
    //   <br><br>`;
    }
}
// ES6 sugar class collection
Collection.all = []; //global scope
// not able pull up in console due to "name" not working
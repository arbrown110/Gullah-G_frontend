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
                             <button type="button" class="btn btn-success" data-toggle="collapse" data-target="#collection">All About</button>
                                <span class="glyphicon glyphicon-collapse-down"></span>
                                <div id="collection" class="collapse in">
                                ${this.description}
                                <br></br>
                                <p>Source :</p>
                                ${this.source_url}
                                <br></br>
                                <small class="text-muted">Category: ${this.category.name}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
}
// ES6 sugar class collection
Collection.all = []; //global scope
// not able pull up in console due to "name" not working
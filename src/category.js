class Category {
    static all = []
    constructor(category) {
        this.id = category.id
        this.name = category.name
        Category.all.push(this);
        //console.log(this);
    }

   renderCategoryToCard () {
      return (`
      <option  id= "${this.id}"> ${this.name} </option>
 
   `)
   }
}

class Category {
    static all = []
   constructor(category) {
       this.id = category.id
       this.name = category.name
       //this.categoryDropDown = document.getElementById("categories");
       //this.renderCategoryToCard();
       Category.all.push(this);
       //console.log(this);
    }
    renderCategoryToCard () {
 //     return (`
 //     <option  id= "${this.id}"> ${this.name} </option>
 
 //  `)
     let option = document.createElement("option")
       option.value = category.attributes.id
       option.innerHTML = category.attributes.name
       this.categoryDropDown.appendChild(option)
    }
  }


//   populateCategoryDropDown(data) {
//       let option = document.createElement("option")
//       option.value = category.attributes.id
//       option.innerHTML = category.attributes.name
//       this.categoryDropDown.appendChild(option)
//     }
//  }
 

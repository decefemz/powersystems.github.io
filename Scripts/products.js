
async function getAllCategories() {
    try {
      let response = await 
        fetch("products.json" )
      const data = await response.json()
        var productData = data.categories;
      
      for (let i = 0; i < productData.length; ++i) {

        const categoryMobile = document.createElement('option')
        const category = document.createElement("a")


        const node = document.createTextNode(productData[i])

        categoryMobile.innerHTML = node.textContent

        category.appendChild(node)
        

        categoryMobile.value = node.textContent
  

        category.id = productData[i]
        category.className = "categoryLinks"
        const categories = document.getElementById("categories")
        categories.appendChild(category)

        const categoriesMobile = document.getElementById('selectCate')
        categoriesMobile.appendChild(categoryMobile)
    }

  
      // productData = data.categories;
    } catch (err) {
      console.log(err);
    }

}


// async function getAllMakes() {
//     try {
//       let response = await 
//         fetch("products.json" )
//       const data = await response.json()
//         var productData = data.makes;
      
//       for (let k = 0; k < productData.length; ++k) {

//         // <option value="All">All</option>

//         const category = document.createElement("a")

//         const inpuut = document.createElement("input")
//         inpuut.type = 'checkbox'

//         const node = document.createTextNode(productData[k])

//         category.appendChild(inpuut)

//         category.appendChild(node)
       
//         category.id = productData[k]
//         category.className = "categoryMakes"
//         const categories = document.getElementById("makes")
//         categories.appendChild(category)

     
//     }

  
//       productData = data.categories;
//     } catch (err) {
//       console.log(err);
//     }

// }


function generateProductCard(productID, picturePath, productTitle){
    var productCard = ("<div class = 'product-card' id = " + productID + ">"+
                            "<div class = 'product-image'>"+
                                "<img src = " + picturePath +">"+
                            "</div>"+
                            "<div class='product-info'>"+
                                "<h5>"+productTitle+"</h5><br>"+
                                "<button style = 'width:100%'>ADD TO QUOTE</button>"+
 			                "</div>"+
                        "</div>")

    return productCard
}

async function getAllProducts(categoryPath){
    try {
        let response = await
        fetch(categoryPath)
        const data = await response.json()


       
        var allProducts = ""

        for (let j = 0; j < data.Category.length; j++) {
             allProducts = generateProductCard("id", data.Category[j].path, data.Category[j].title) + allProducts
        }

        products.innerHTML = allProducts;

    } catch (err) {
      console.log(err);
    }


}




getAllCategories()





getAllProducts('Products/All.json')



// document.getElementById('selectCate').value = 'Cables'
// const categoriesMobile = document.getElementById('selectCate')
// categoriesMobile.value = 'Cables'
// document.querySelector('#selectCate').value = 'Solar'





if (!(localStorage.getItem("sideBarVar") == " ")){
  getAllProducts('Products/' + localStorage.getItem("sideBarVar") + '.json')
  // document.getElementById('selectCate').value = localStorage.getItem("sideBarVar")

  try {
    //If localStorage supports with the browser
    if (localStorage) {
        
        localStorage.setItem(" ", sideBarVar);
        console.log("un-cached")
    }
}
catch (err) {
    console.log(err)
}
}

$(document).on('click','.categoryLinks', function(){
   
    getAllProducts('Products/' +this.id+'.json')
  

  });

  function getChosen(chosen) {
      getAllProducts('/Products/' +chosen+'.json')
  }



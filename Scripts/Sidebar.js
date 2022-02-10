
async function getAllCategoriesSidebar() {
    try {
      let response = await 
        fetch("products.json" )
      const data = await response.json()
        var productData = data.categories;
      
      for (let i = 0; i < productData.length; ++i) {

        const category = document.createElement("a")


        const node = document.createTextNode(productData[i])


        category.appendChild(node)
        

  

        category.id = productData[i]
        category.className = "sidebarcategoryLinks"
        const categories = document.getElementById("sideBarCate")
        categories.appendChild(category)        
    }

  
      // productData = data.categories;
    } catch (err) {
      console.log(err);
    }

}

getAllCategoriesSidebar()


    




var sideBarVar;
$(document).on('click','.sidebarcategoryLinks', function
   sidebarCateChosen(){
        location.href = "products.html";

        try {
            //If localStorage supports with the browser
            if (localStorage) {
                sideBarVar = this.id
                localStorage.setItem("sideBarVar", sideBarVar);
                console.log("cached")
            }
        }
        catch (err) {
            console.log(err)
        }

   }
  
  

  );
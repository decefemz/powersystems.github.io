let cartItems = []




$(document).on('click','.addToCartButton', function(){

    let productTitle = this.parentNode.children[0].innerHTML
    let productPrice = this.parentNode.children[1].innerHTML.substring(2)
    let productPath = this.parentNode.parentNode.children[0].children[0].src
   
    let cartItem = {
       "productTitle":productTitle,
       "productPrice":productPrice,
       "productPath":productPath
    }

    if (this.active){
        this.style = 'background-color:var(--mainRed);border-color: var(--mainRed);'
        this.innerHTML = 'ADD TO QUOTE'
        this.active = false;

        var ident = this.id
        var index 

        for (let i = 0; i < cartItems.length; i++) {
            if (ident === cartItems[i].productTitle){
                var index = i
            }
        }
        console.log(index)
        cartItems.splice(index,1)

    }else
    {
        this.active = true;
        this.style = 'background-color:var(--mainBlue);border-color: var(--mainBlue);'
        this.innerHTML = 'ADDED'
        cartItems.push(cartItem)

  }
  


  
  });




function generateCartListItem(index, itemPath, itemTitle, itemPrice){
   
        return ("<div id='cartListItem' index = '"+index+"' >"+
                    "<div id='cartItemImage'>"+
                        '<img src="'+itemPath+'">'+
                    "</div>"+
                    "<div id='cartItemDesc'>"+
                        "<h1>"+itemTitle+"</h1>"+
                        "<div class='quantCont' id = '"+index+"' >"+
                            "<label>QUANTITY</label>"+
                            "<input type='number' class = 'inputNo'value=1>"+
                            "<h5>$ "+itemPrice+"</h5"+
                        "</div>"+
                    "</div>"+
                "</div></div>")
                  
}

function getTotal(){
    var total = 0.0
    for (let i = 0; i < cartItems.length; i++) {

            total = total + parseFloat($('.quantCont h5')[i].innerHTML.substring(2))
    }
    return total.toFixed(2)
}

$(document).on('click','#cart', function(){
    document.getElementById('total').innerHTML = getTotal()

})

$(document).on('input','.inputNo', function(){
    // const thisPrice = parseFloat(this.parentNode.children[2].innerHTML.substring(1))
    const thisPrice = parseFloat(cartItems[this.parentNode.id].productPrice)

    this.parentNode.children[2].innerHTML = "$ " + (thisPrice * (this.value)).toFixed(2)
    document.getElementById('total').innerHTML = getTotal()
})

function generateList(){
    var innerContent = ''
    for (let i = 0; i < cartItems.length; i++) {
        innerContent = generateCartListItem(i, cartItems[i].productPath, cartItems[i].productTitle, cartItems[i].productPrice) + innerContent       

    }
    document.getElementById('cartListInner').innerHTML = innerContent

}



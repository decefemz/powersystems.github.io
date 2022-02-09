function generateThumbnail(featuredPath, featuredCategory, featuredDescription,featuredTitle){

    var featuredProduct = ("<li class='span3'>"+
                                "<div class='thumbnail'>"+
                                    "<a><img src=" + featuredPath + "></a>" +
                                "</div>"+
                                "<div class='caption'>"+
                                    "<h4>"+featuredTitle+"</h4>"+
                                    "<p>"+featuredDescription+"</p>"+
                                    "<button id = 'featuredButton'>See More "+ featuredCategory+"</>"+
                                "</div>"+
                            "</li>")
    return featuredProduct
}




async function generateItem(){
    try {
        let response = await
        fetch('/Products/Featured.json')
        const data = await response.json()
        var featuredProducts = data.featuredList
        var featuredItem = ''

        for (let i = 0; i < 5; i++) {
            featuredItem = generateThumbnail(featuredProducts[i].path, "todo", "descr", featuredProducts[i].title) + featuredItem

        }
        document.getElementById('featuredProducts').innerHTML = featuredItem

        } catch (err) {
      console.log(err);
    }


}
function move_up() {
    var cellWidth = (1)
    document.getElementById('featuredProducts').scrollLeft += cellWidth;
  }

  function move_down(cellWidth) {
    document.getElementById('featuredProducts').scrollLeft -= cellWidth;
  }

// var intervalID = window.setInterval(move_up, 60)
generateItem()
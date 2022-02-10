

function revealQuoteForm(){
    document.body.style.overflowY = 'hidden'
    document.getElementById('getQuoteCont').style.display = 'initial'

}

function revealsideMenu(){
    // $(".sideBar").style.display = 'initial'
    // $(".sideBar").style.animation = 'sidebarAnimation linear'
    document.body.style.overflowY = 'hidden'

    document.getElementById('sideBar').style.display = 'initial'
    document.getElementById('darkenBG').style.display = 'initial'
    document.getElementById('sideBar').style.animation = 'sidebarAnimation var(--mainTransition)'
    document.getElementById('darkenBG').style.animation = 'darken var(--mainTransition)'
    setTimeout(() => {
    document.getElementById('darkenBG').style.animation = 'unset' }, 200)


}


function hidesideMenu(){
    document.body.style.overflowY = 'scroll'

    document.getElementById('darkenBG').style.animation = 'darken var(--mainTransition) reverse'

    document.getElementById('sideBar').style.animation = 'sidebarAnimation2 var(--mainTransition)'

    setTimeout(() => { document.getElementById('sideBar').style.display = 'none';
                       document.getElementById('darkenBG').style.display = 'none'
                    }, 200)
   
}


function openProductsPage(){
    location.href = "products.html";
}
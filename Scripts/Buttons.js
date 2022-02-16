var isSidebarOpen;



function revealsideMenu(){
    // $(".sideBar").style.display = 'initial'
    // $(".sideBar").style.animation = 'sidebarAnimation linear'
    isSidebarOpen = true;
    document.body.style.overflowY = 'hidden'

    document.getElementById('sideBar').style.display = 'initial'
    document.getElementById('darkenBG').style.display = 'initial'
    document.getElementById('sideBar').style.animation = 'sidebarAnimation var(--mainTransition)'
    document.getElementById('darkenBG').style.animation = 'darken var(--mainTransition)'
    setTimeout(() => {
    document.getElementById('darkenBG').style.animation = 'unset' }, 200)


}


function hidesideMenu(){
    isSidebarOpen = false;
    document.body.style.overflowY = 'scroll'

    document.getElementById('darkenBG').style.animation = 'darken var(--mainTransition) reverse'

    document.getElementById('sideBar').style.animation = 'sidebarAnimation2 var(--mainTransition)'

    setTimeout(() => { document.getElementById('sideBar').style.display = 'none';
                       document.getElementById('darkenBG').style.display = 'none'
                    }, 200)
   
}



function openGetQuote(){
    document.body.style.overflowY = 'hidden'

    document.getElementById('getQuoteCont').style.display = 'flex';
    document.getElementById('getQuoteCont').style.animation = 'getQuoteAnimatiom var(--mainTransition)'
    setTimeout(() => {
        document.getElementById('getQuoteCont').style.animation = 'unset' }, 200)
}

function closeGetQuote(){
    document.body.style.overflowY = 'scroll'
    document.getElementById('getQuoteCont').style.animation = 'getQuoteAnimatiom var(--mainTransition) reverse'

    setTimeout(() => {document.getElementById('getQuoteCont').style.display = 'none';},200)
}
function openProductsPage(){
    // location.href = "products.html";
    window.location.href = 'products.html';
}
function openAboutPage(){
    window.location.href = 'about.html';

}


 $(window).resize(function() {
    if (($(window).width() > 900)&&isSidebarOpen) {
       hidesideMenu()
    }})


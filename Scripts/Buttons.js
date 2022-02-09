function revealsideMenu(){
    // $(".sideBar").style.display = 'initial'
    // $(".sideBar").style.animation = 'sidebarAnimation linear'

    document.getElementById('sideBar').style.display = 'initial'
    document.getElementById('sideBar').style.animation = 'sidebarAnimation .1s'
    document.getElementById('sidebarCont').style.display = 'initial'
    document.getElementById('sidebarCont').style.backgroundColor = '#00000044'
    document.getElementById('body').style.overflowX = 'hidden'


}


function hidesideMenu(){
    document.getElementById('sideBar').style.animation = 'sidebarAnimation2 .1s'
    document.getElementById('sideBar').style.display = 'none'

    document.getElementById('sidebarCont').style.display = 'none'
    document.getElementById('sidebarCont').style.backgroundColor = 'none'

}
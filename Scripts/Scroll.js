function smoothScroll(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000)
  }
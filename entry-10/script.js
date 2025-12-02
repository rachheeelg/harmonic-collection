document.querySelectorAll('.carousel').forEach(function(carousel) {
  new Flickity(carousel, {
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false
  });
});
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: false,
    direction: 'vertical',
    multiplier: 0.5,
    inertia: 0.8,
    repeat: false,
  })


function updateLoco() {
    scroll.update();
    console.log('loco scroll updated');
}


window.onresize = updateLoco;

window.addEventListener('load', function() {
    initScript();
});

new ResizeObserver(() => locoScroll.update()).observe(document.querySelector("[data-scroll-container]"))

// Scroll update all pages

document.addEventListener('DOMContentLoaded', function() {

  function ScrollUpdateDelay() {
      setTimeout(function(){ locoScroll.update(); }, 500);
 
  }

  ScrollUpdateDelay();
});

$(document).ready(function() {
  $(".gal").slice(0, 1).show();
  $("#loadMore").on("click", function(e) {
      e.preventDefault();
      $(".gal:hidden").slice(0, 1).fadeIn(1000);
      if ($(".gal:hidden").length == 0) {
          $("#loadMore").text("").addClass("noContent");
      }
  });

})




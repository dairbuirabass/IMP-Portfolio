$( document ).ready( function () {
  $( ".portfolio-item" ).mouseenter(function() {
    console.log("we")
    TweenLite.to(this, 0.2, {
      scale: 1.1
    })
  })
})

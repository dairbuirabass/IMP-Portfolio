$( document ).ready(function () {
  //Zoom in info
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $( "#searchBtn" ).click(function() {
    $( "#images" ).empty();
    if ( $( "#searchInput" ).val() != null ) {
      $.getJSON( flickerAPI, {
        tags: $( "#searchInput" ).val(),
        tagmode: "any",
        format: "json"
      })
        .done(function( data ) {
          $.each( data.items, function( i, item ) {
            var img = $( "<img>" )
              .addClass( "img-fluid rounded" )
              .attr("src", item.media.m)

            img.click(function() {
              $('#imgModal').on('show.bs.modal', function () {
                var src = img.attr("src");
                $("#imgModal .img-fluid").attr("src", src);
              });
              $('#imgModal').modal('toggle');
            });

            var div = $( "<div>").addClass( "class=\"img-wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12\"").appendTo( "#images");
            img.appendTo(div);
          });
        });
    }
  });
});

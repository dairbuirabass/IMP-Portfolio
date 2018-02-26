$( document ).ready(function () {
  $( "#addPersonBtn" ).click(function() {
    if ( $( "#nameInput" ).val() != null ) {
      $( "#listOfPersons" ).prepend( "<li>" + $( "#nameInput" ).val() + "</li>");
    }
  });
});

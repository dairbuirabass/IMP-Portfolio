$( document ).ready(function () {
  $( "#getPersonsBtn" ).click(function() {
    $.ajax({
        url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
        jsonp: "jsonCallback",
        dataType : "jsonp"
      });
  });
});

function jsonCallback(json){
  for (var i in json) {
    $( "#listOfPersons" ).append("<li>" + json[i].name +
    " email: <a href=\"mailto:" + json[i].email +
    "\">" + json[i].email + "</a></li>");
  }
}

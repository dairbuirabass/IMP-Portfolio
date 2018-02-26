function addPerson() {
  var name = document.getElementById("nameInput").value;

  if (name.length > 0 ) {
    var li = document.createElement("li");
    li.append(name);
    document.getElementById("listOfPersons").prepend( li );
  }
}

function requestAddPerson() {
  var name = document.getElementById("nameInput").value;
  if (name.length != 0) {
    controllerAddPerson(name);
  }
}

function renderList(listArray) {
  var text = "";
  for (var i=listArray.length-1; i>=0; i--) {
    text += "<li>" + listArray[i] + "</li>";
  }
  document.getElementById("listOfPersons").innerHTML = text;
}

var personsModel = new PersonsModel();
var listArray = [];

function checkLocalStorage() {
  if(!localStorage.getItem("array")) {
    registerListeners();
  } else {
    listArray = JSON.parse(localStorage.getItem("array"));
    listArray.forEach(function(element) {
      controllerAddPerson(element);
    });
    updatePersonsList();
    registerListeners();
  }
}

function controllerAddPerson(newName) {
  personsModel.addNewPerson(newName);
}

function registerListeners() {
  personsModel.addNewListener(updatePersonsList);
}

function updatePersonsList() {
  var tempListArray = [];
  personsModel.allPersons.forEach(function(element) {
    tempListArray.push(element);
  });
  localStorage.setItem("array", JSON.stringify(tempListArray));
  renderList(tempListArray);
}

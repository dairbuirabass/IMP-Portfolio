var personsModel = new PersonsModel();
registerListeners();

function controllerAddPerson(newName) {
  personsModel.addNewPerson(newName);
}

function registerListeners() {
  personsModel.addNewListener(updatePersonsList);
}

function updatePersonsList() {
  var listArray = [];
  personsModel.allPersons.forEach(function(element) {
    listArray.push(element);
  });
  renderList(listArray);
}

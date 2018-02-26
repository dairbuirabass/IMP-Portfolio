var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com");
var connectionCheck = setInterval(checkConnectionStatus, 200);
var connectionStatus = "";

function checkConnectionStatus() {
  switch (connection.readyState) {
    case 0:
      connectionStatus = "Connecting...";
      break;
    case 1:
      connectionStatus = "Connected!";
      break;
    case 2:
      connectionStatus = "Closing...";
      break;
    case 3:
      connectionStatus = "Closed";
      break;
    default:
      connectionStatus = "Connecting...";
  }
  var connectionStatusField = document.getElementById("connectionStatus");
  connectionStatusField.innerHTML = connectionStatus;
}

function sendMessage() {
  var messageText = document.getElementById("messageInput");
  connection.send(messageText.value);
  messageText.value = "";
  document.getElementById('messageInput').focus();
}

connection.onmessage = function (event) {
  var chatBox = document.getElementById("chatBox");
  var message = "<li>" + event.data + "</li>";
  chatBox.innerHTML += message;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function keyPressed(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
}

document.addEventListener('keyup', keyPressed);

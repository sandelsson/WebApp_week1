document.getElementById("add-comment").onclick = function () {
  var node = document.createElement("Li");
  var text = document.getElementById("user_input").value;
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
};

document.getElementById("remove-comments").onclick = function () {
  var txt;
  var r = confirm("Are you sure you want to clear the list?");
  if (r === true) {
    txt = "List has been cleared!";
    var ul = document.getElementById("list");
    while (ul.firstChild) ul.removeChild(ul.firstChild);
  } else {
    txt = "Cancelled!";
  }
  document.getElementById("demo").innerHTML = txt;
};

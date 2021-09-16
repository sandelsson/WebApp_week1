document.getElementById("add-comment").onclick = function () {
  //creating new comment-class
  var commentDIV = document.createElement("div");
  commentDIV.className = "comment";
  commentDIV.id = "comment";
  document.body.appendChild(commentDIV);

  //creating child element for rate-restaurant
  var newDiv = document.createElement("div");
  var rate = document.getElementById("rate-restaurant").value;
  var ratenode = document.createTextNode(rate);
  //document.body.appendChild(ratenode);
  newDiv.appendChild(ratenode);
  ratenode.className = "comment-rating";
  document.getElementById("comment").appendChild(newDiv);

  //creating child element for rate-text
  var newDiv2 = document.createElement("div");
  var rate_text = document.getElementById("user_input").value;
  var rate_textnode = document.createTextNode(rate_text);
  newDiv2.appendChild(rate_textnode);
  rate_textnode.className = "comment-text";
  document.getElementById("comment").appendChild(newDiv2);
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

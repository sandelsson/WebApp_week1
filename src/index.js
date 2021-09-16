document.getElementById("add-comment").onclick = function () {
  var all_comments = document.getElementById("comments");
  var comment = document.createElement("div");
  //all_comments.appendChild(comment);

  var comment_rating_div = document.createElement("div");
  var comment_rating_textnode = document.createTextNode(
    document.getElementById("rate-restaurant").value
  );
  comment_rating_div.appendChild(comment_rating_textnode);
  comment.appendChild(comment_rating_div);

  var comment_text_div = document.createElement("div");
  var comment_text_textnode = document.createTextNode(
    document.getElementById("user_input").value
  );
  comment_text_div.appendChild(comment_text_textnode);
  comment.appendChild(comment_text_div);

  all_comments.appendChild(comment);
};
//tässä kohtaa oon jo vääntäny niin kauan tätä paskaa, että kun
//mulla oli varmaa 100 rivii kommentoituna tätä funktioo
//ni poistin kaikki, suljin kaikki välilehdet ja kirjotin ykkösellä oikein koko koodin
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

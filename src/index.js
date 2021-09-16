document.getElementById("add-comment").onclick = function () {
  var all_comments = document.getElementById("comments");
  var comment = document.createElement("div");
  comment.className = "comment";
  //all_comments.appendChild(comment);

  var comment_rating_div = document.createElement("div");
  var comment_rating_textnode = document.createTextNode(
    document.getElementById("rate-restaurant").value
  );
  comment_rating_div.appendChild(comment_rating_textnode);
  comment.appendChild(comment_rating_div);
  comment_rating_div.className = "comment-rating";

  var comment_text_div = document.createElement("div");
  var comment_text_textnode = document.createTextNode(
    document.getElementById("user_input").value
  );
  comment_text_div.appendChild(comment_text_textnode);
  comment.appendChild(comment_text_div);
  comment_text_div.className = "comment-text";

  all_comments.appendChild(comment);
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

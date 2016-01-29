var colorList = ["red", "black", "white", "blue", "ocher", "yellow", "pink"];
var imageList = new Array();
imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";


//hook into the thumbs div
var thumbsDiv = document.getElementById("thumbs");

thumbsDiv.innerHTML = '<img src="' + imageList[1] + '" />';

window.onload = function () {
  buildThumbnails();//use or "fire off" this function
};
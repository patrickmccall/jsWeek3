﻿var colorList = ["red", "black", "white", "blue", "ocher", "yellow", "pink"];

// variables IN funceion (function scope) can see global variables

  var imageList = new Array();
  imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
  imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
  imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
  imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
  imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
  imageList[5] = "images/drawing/thumbs/artwork_6.jpg";


//create the build thumbnails function
function buildThumbnails() {
    //hook into the thumbs div
  var thumbsDiv = document.getElementById("thumbs");

  //create and output variable
  var output = "";

  for (var i = 0; i < imageList.length; i++) {

    output += '<img src="' + imageList[i] + '" />';
    thumbsDiv.innerHTML = output;

    //thumbsDiv.innerHTML += '<img src="' + imageList[i] + '" />'
  }

  //thumbsDiv.innerHTML = '<img src="' + imageList[0] + '" />'
  //                    + '<img src="' + imageList[1] + '" />'
  //                    + '<img src="' + imageList[2] + '" />'
  //                    + '<img src="' + imageList[3] + '" />';
}





window.onload = function () {
  buildThumbnails();    //use or "fire off" or invoke this function
};


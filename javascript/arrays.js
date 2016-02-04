var colorList = ["red", "black", "white", "blue", "ocher", "yellow", "pink"];

// variables IN funceion (function scope) can see global variables

  var imageList = new Array();
  imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
  imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
  imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
  imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
  imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
  imageList[5] = "images/drawing/thumbs/artwork_6.jpg";


//create the build thumbnails function
  //function buildDrawingThumbnails() {
  //    //hook into the thumbs div
  //    var thumbsDiv = document.getElementById("drawingImages");

  //    //create and output variable
  //    var output = "";

  //    for (var i = 0; i < imageList.length; i++) {

  //        output += '<li><img src="' + imageList[i] + '" /></li>';
  //        thumbsDiv.innerHTML = output;

  //        //thumbsDiv.innerHTML += '<img src="' + imageList[i] + '" />'
  //    }

  //    //thumbsDiv.innerHTML = '<img src="' + imageList[0] + '" />'
  //    //                    + '<img src="' + imageList[1] + '" />'
  //    //                    + '<img src="' + imageList[2] + '" />'
  //    //                    + '<img src="' + imageList[3] + '" />';
  //};

  var drawingImageCount = 25;
  function buildDrawingThumbnails() {
      var output = "";
      var drawingThumbsUL = document.getElementById("drawingImages");
      //built the output
      for (var i = 1; i < drawingImageCount + 1; i++) {
          output += '<li><img src="images/drawing/thumbs/artwork_' + i + '.jpg" /></li>';
      }
      //use the output
      drawingThumbsUL.innerHTML = output;

  };

  var oilImageCount = 8;
  function buildOilThumbnails() {
      var output = "";
      var oilThumbsUL = document.getElementById("oilPaintingImages");
      //built the output
      for (var i = 1; i < oilImageCount + 1; i++) {
          output += '<li><img src="images/oil/thumbs/artwork_' + i + '.jpg" /></li>';
      }
      //use the output
      oilThumbsUL.innerHTML = output;

  };

  var waterColorImageCount = 10;
  function buildwatercolorThumbnails() {
      var output = "";
      var watercolorThumbsUL = document.getElementById("watercolorImages");
      //built the output
      for (var i = 1; i < waterColorImageCount + 1; i++) {
          output += '<li><img src="images/watercolor/thumbs/artwork_' + i + '.jpg" /></li>';
      }
      //use the output
      watercolorThumbsUL.innerHTML = output;

  };
window.onload = function () {
    buildDrawingThumbnails();    //use or "fire off" or invoke this function
    buildOilThumbnails();
    buildwatercolorThumbnails();
};


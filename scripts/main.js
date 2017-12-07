var OVERLAY_SEL = '[data-overlay]';
var CLOSER_SEL = '[data-overlay-closer]';
// var MAIN_IMG_SEL = '[data-overlay-image]';
// var THUMBNAIL_CONTAINER_SEL = '[data-thumbnail-container]';
var ALL_THUMBNAILS_SEL = '[data-trigger]';

var images = [
  "http://i0.kym-cdn.com/photos/images/facebook/001/037/295/4fe.jpg",
  "http://www.calgaryherald.com/cms/binary/10035261.jpg?size=640x420",
  "https://pbs.twimg.com/profile_images/848471660860538880/pevXVsIp.jpg",
];

// var overlayElement = document.querySelector(OVERLAY_SEL);
$overlayElement = $('[data-overlay]');
// var thumbnailContainer = document.querySelector(THUMBNAIL_CONTAINER_SEL);
var $thumbnailContainer = $('[data-thumbnail-container]');
// var thumbnailItems = document.querySelectorAll(ALL_THUMBNAILS_SEL);
// var closer = document.querySelector(CLOSER_SEL);
var $closer = $('[data-overlay-closer]');
// var mainImage = document.querySelector(MAIN_IMG_SEL);
$mainImage = $('[data-overlay-image]');

function createThumbnail(imgUrl) {
  // var imgEl = document.createElement('img');
  var $imgEl = $('<img>', {'src': imgUrl});
  // imgEl.setAttribute('src', imgUrl);

  // var anchorEl = document.createElement('a');
  // anchorEl.setAttribute('href', imgUrl);
  // anchorEl.setAttribute('data-trigger', '');
  var $anchorEl = $('<a>', {'href': imgUrl, 'data-trigger': ''})
  $anchorEl.append($imgEl);

  // var imgFrame = document.createElement('div');
  // imgFrame.classList.add('thumbnail-item');
  // imgFrame.appendChild(anchorEl);
  var $imgFrame = $('<div>');
  $imgFrame.addClass('thumbnail-item');
  $imgFrame.append($anchorEl);

  return $imgFrame;
}

function appendFrameToContainer($imgFrame) {
  // thumbnailContainer.appendChild($imgFrame);
  $thumbnailContainer.append($imgFrame);
}

function drawThumbnails(imgArray) {
  imgArray.map(createThumbnail)
        .forEach(appendFrameToContainer);
}

function openOverlayWithImage(imgUrl) {
  // mainImage.setAttribute('src', imgUrl);
  $mainImage.attr('src', imgUrl);
  $overlayElement.removeClass('hidden');
}

function addThumbnailClickListeners() {
  // var thumbnailItems = document.querySelectorAll(ALL_THUMBNAILS_SEL);
  var $thumbnailItems = $('[data-trigger]');
  $thumbnailItems.each(function (index, thumb) {
    var $thumb = $(thumb);
    var $url = $thumb.attr('href');
    $thumb.on('click', function (event) {
    //thumb.on('click', function (event) {
      event.preventDefault(); 
      openOverlayWithImage($url);
    })
    console.log('done with addEventListener');
  })
  console.log('done with forEach');
  console.log('done with addThumbnailClickListeners');
}

function addCloserListener() {
  $closer.on('click', function (event) {
    event.preventDefault();
    $overlayElement.addClass('hidden');
  })
}

function main() {
  drawThumbnails(images);
  addThumbnailClickListeners();
  // $(THUMBNAIL_CONTAINER_SEL).on('click', 'a', function (event) {
  //   event.preventDefault();
  //   console.log('got a click');
  //   // openOverlayWithImage(url);
  // });
  addCloserListener();
}

main();

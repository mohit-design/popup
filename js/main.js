$(function() {
 // Popup - 1 JS
 $(".btn-popup-1").click(function() {
		$("body").addClass("active");
		$(".bg-blur").addClass("active");
		$(".box-popup-1").addClass("active");
  });
  $(".bg-popup-close-1").click(function() {
    $("body").removeClass("active");
    $(".bg-blur").removeClass("active");
    $(".box-popup-1").removeClass("active");
  });
  // Popup - 2 JS
  $(".btn-popup-2").click(function () {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".box-popup-2").addClass("active");
  });
  $(".bg-popup-close-2").click(function () {
    $("body").removeClass("active");
    $(".bg-blur").removeClass("active");
    $(".box-popup-2").removeClass("active");
  });
  // Popup - 3 JS
  $(".btn-popup-3").click(function () {
    $("body").addClass("active");
    $(".bg-blur").addClass("active");
    $(".box-popup-3").addClass("active");
  });
  $(".bg-popup-close-3").click(function () {
    $("body").removeClass("active");
    $(".bg-blur").removeClass("active");
    $(".box-popup-3").removeClass("active");
  });
});
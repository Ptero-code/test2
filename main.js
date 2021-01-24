$(document).ready(function() {
  $('.menu-burger__header').click(function() {
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});


function Selected(a) {
  var label = a.value;
    if (label=="Open") {
       document.getElementById("Block1").style.display='block';
   } else {
       document.getElementById("Block1").style.display='none';
   } 
}
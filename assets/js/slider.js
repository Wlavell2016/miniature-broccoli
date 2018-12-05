var $slider = document.getElementById('slider');
$slider.addEventListener('click', function() {
  toggle();
});
function toggle() {
  var isOpen = $slider.classList.contains('slide-in');
  $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');}

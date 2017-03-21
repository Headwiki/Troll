$(function() {
  // Show the dropdown menu of the clicked list item
  $('nav ul li > a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
  // Close dropdown by clicking anywhere on the site
  $('html').click(function() {
    $('.nav-dropdown').hide();
  });
  // Toggle open and close nav styles on click
  $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
  });
  // Hamburger to X toggle
  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
  });
});

// When the CSS path nav ul li > a:not(:only-child) is clicked on…
// Toggle (change the display property of) that specific nav-dropdown class.

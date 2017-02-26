$(function() {
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
      $('aside').toggleClass('open');
    });

});

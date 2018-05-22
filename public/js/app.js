$(document).ready(function() {


    // Menu mobile
    $('.btn-hamburger').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('menu-header-open');
    });


    // Gallery
    $(function() {
        $(".image").click(function() {
            var image = $(this).attr("rel");
            $('#image').hide();
            $('#image').fadeIn('slow');
            $('#image').html('<img src="' + image + '"/>');
            return false;
        });
    });


});
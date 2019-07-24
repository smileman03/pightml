$(document).ready(function(){
 $('.header').height($(window).height());
})
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
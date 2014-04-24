var menu;

$(document).ready(function(){


    $(".menuitem").hide();

    $(".img").click(function () {
        menu = $("#" + $(this).data("menu"));
        $(".menuitem:not(#" + menu.attr("id") + ")").slideUp(180);
        menu.slideToggle();
    });

    $(".home").click(function(){
	$(".menuitem").slideUp(180);
    });

    $(".navbar ul li a").click(function(e) {
    e.preventDefault();
    $(".navbar ul li a").removeClass("selected");
    $(this).addClass("selected");
    });

});


$('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
});

$(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
});

function menu(id) {
    if (document.getElementById(id).style.dispaly == "block") {
        document.getElementById(id).style.dispaly = "none";
    } else {
        document.getElementById(id).style.dispaly = "block";
    }
}

// ============= teste paginação

// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

$(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
});
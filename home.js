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

function menu(id) {
    if (document.getElementById(id).style.dispaly == "block") {
        document.getElementById(id).style.dispaly = "none";
    } else {
        document.getElementById(id).style.dispaly = "block";
    }
}
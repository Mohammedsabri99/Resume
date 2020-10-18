// Navbar
// ===========================================================
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

// Typewriter
// ===========================================================
var i = 0;
var txt = "I believe that there's no definition of impossible, impossible is just for the weaks";
var speed = 50;

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);

        i++;

        setTimeout(typeWriter, speed);
    }
}

// Wow js
// ===========================================================
$(function(){
    new WOW().init();
});

// Typed JS
// ===========================================================
$(function(){
    var typed = new Typed(".type", {
        strings: [
            "Hi there",
            "My Name is Mohammed Sabri",
            "I'm a Front End Developer",
            "Let's take a tour in my resume",
            "Enjoy!"
        ],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true
    });
});


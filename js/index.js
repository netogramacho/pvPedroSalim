var interval;


function abrirCheckout() {
    window.location.href = "https://payment.hotmart.com/Q53278902U?checkoutMode=10";
}

$(document).ready(function() {

    numVagas = localStorage.getItem('numVagas');

    if (numVagas == undefined) {
        numVagas = 422;
        localStorage.setItem('numVagas', numVagas);
    }

    controlarVagas(localStorage.getItem('numVagas'));


    interval = setInterval(() => {
        controlarVagas(localStorage.getItem('numVagas'));
    }, 5000);

    if (window.innerWidth < 768) {
        setTimeout(() => {
            slickImgs();
        }, 500);
    }

});


function controlarVagas(nv) {
    nv--;

    if (nv >= 0) {
        localStorage.setItem('numVagas', nv);
        $('.num-vagas').html(nv);
    }

    if (nv <= 0) {
        clearInterval(interval);
        $('.num-vagas').html('0');
    }
}

function slickImgs() {
    $('.grade-fotos').slick({
        arrows: false
    });
}

function nextSlick() {
    $('.grade-fotos').slick('slickNext')
}

function prevSlick() {
    $('.grade-fotos').slick('slickPrev');
}
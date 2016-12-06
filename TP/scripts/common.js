$(document).ready(function () {

    $("#playa").hover(function(){
        $(".link3").fadeOut(1);
        $(".link4").fadeOut(1);
        $(".link2").fadeIn(100);
    });

    $("#food").hover(function(){
        $(".link2").fadeOut(1);
        $(".link4").fadeOut(1);
        $(".link3").fadeIn(100);
    });

        $("#music").hover(function(){
        $(".link2").fadeOut(1);
        $(".link3").fadeOut(1);
        $(".link4").fadeIn(1000);
    });

        $("#menu").on("click", function() {

        // mostrar nav.computadora
        $(".navcel").slideToggle(500);
        // Para ocultar: .hide()
    });

            setInterval(function(){
        $(".imusic").toggleClass("colores");
    }, 2000);



function iniciarCarousel() {

        // Consigo la imagen que se esté mostrando
        var imagenActual = $("#carousel .selected");
        imagenActual.fadeOut(500);
        imagenActual.removeClass("selected");

        //consigo el número de esa imagen
        var idImagenActual = imagenActual.attr("id");
        idImagenActual = idImagenActual.substr(-1);
        idImagenActual = parseInt(idImagenActual);

        //verifico no estar en la última imagen
        if (idImagenActual == $(".carousel-item").length) {
            idImagenActual = 0;
        }

        //consigo ID de la próxima imagen y la muestro
        var idProximaImagen = "#item-" + (idImagenActual+1);
        $(idProximaImagen).fadeIn(500);
        $(idProximaImagen).addClass("selected");

    }

    var carousel = setInterval(iniciarCarousel, 3000);


    $("#carousel button").on("click", function () {

//consigo el número de este boton
        var idBotonClickeado = $(this).attr("id");
        idBotonClickeado = idBotonClickeado.substr(-1);

        //ocultar imagen actual
        $("#carousel .selected").fadeOut(500);
        $("#carousel .selected").removeClass("selected");

        // mostrar imagen correspondiente al boton
        $("#item-" + idBotonClickeado).fadeIn(500);
        $("#item-" + idBotonClickeado).addClass("selected");

        // frenamos el carousel
        clearInterval(carousel);
        carousel = setInterval(iniciarCarousel, 3000);

    });

    $("#p1").hover(function(){
      $("#p1desc").show(2000);
});

    $("#p2").hover(function(){
      $("#p2desc").show(2000);
});

      $("#p3").hover(function(){
      $("#p3desc").show(2000);
});

       $("#p4").hover(function(){
      $("#p4desc").show(2000);
});

    $("#email").on("focusin", function () {

        // Cambiar clase para cambiar color!
        $(this).addClass("select");

    });

    $("#email").on("focusout", function () {

        // Cambiar clase para volver al color aburrido
        $(this).removeClass("select");

    });

        $("#name").on("focusin", function () {

        // Cambiar clase para cambiar color!
        $(this).addClass("select");

    });

    $("#name").on("focusout", function () {

        // Cambiar clase para volver al color aburrido
        $(this).removeClass("select");

    });

        $("textarea").on("focusin", function () {

        // Cambiar clase para cambiar color!
        $(this).addClass("select");

    });

    $("textarea").on("focusout", function () {

        // Cambiar clase para volver al color aburrido
        $(this).removeClass("select");

    });

    $("#t1").on("click", function() {

        // mostrar nav.computadora
        $(".p1").show();
        // Para ocultar: .hide()
    });

        $("#t2").on("click", function() {

        // mostrar nav.computadora
        $("#p2").show();
        // Para ocultar: .hide()
    });

        $("#t3").on("click", function() {

        // mostrar nav.computadora
        $("#p3").show();
        // Para ocultar: .hide()
    });



    });
$(document).ready(function () {

    $("#hideButton").click(function () {
        // hide()   show()
        // $("p").toggle()

        // $("p").addClass('para');
        // $("p").removeClass('para');

    })

    $("#slider").click(function () {

        // $(".para").slideDown(2000 , function(){

        //     $(".para").addClass('bg-warning');



        // })
        // $(".para").slideToggle(2000, function () {

        //     $(".para").addClass('bg-warning');



        // })
        $(".para").fadeToggle(4000, function () {

            $(".para").addClass('bg-warning');



        })




    });



});



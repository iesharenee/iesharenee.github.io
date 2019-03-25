$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#clutch-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#clutch-modal").toggleClass("visible");
         $(".carrot").toggleClass("visible");
        });
}); 

// Button to close a modal
$(document).ready(function (){
    $('#clutch-close').click(function() {
        $("#clutch-modal").toggleClass("visible");
        $(".carrot").toggleClass("visible");
        });
});





$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#break-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#break-modal").toggleClass("visible");
         $(".carrot").toggleClass("visible");
    });
}); 

// Button to close a modal
$(document).ready(function (){
    $('#break-close').click(function() {
        $("#break-modal").toggleClass("visible")
        $(".carrot").toggleClass("visible");
       });
});





// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#gas-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#gas-modal").toggleClass("visible");
         $(".carrot").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#gas-close').click(function() {
        $("#gas-modal").toggleClass("visible")
        $(".carrot").toggleClass("visible");
       });
});







//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#place-button-name-here').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#place-modal-name-here").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#place-modal_close-icon-name-here').click(function() {
        $("#place-modal-name-here").toggleClass("visible")
        });
});


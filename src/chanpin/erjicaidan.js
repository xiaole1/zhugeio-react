import $ from 'jquery';
$(document).ready(function(){
    $(".yiji").mouseenter(function(){
        $(this).children("ul").slideDown(300);
    });
    $(".yiji").mouseleave(function(){
        $(this).children("ul").slideUp(300);
    })

})
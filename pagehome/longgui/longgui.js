$(document).ready(function(){
    setTimeout(show,1000);
    $(document).on('click','.skip',function(){
        document.cookie = true;
        console.log(document.cookie)
    })

    $(document).on('click','.dontshow',function(){
    })

    if(document.cookie.localeCompare('true') == 0){
        $('.popup-background').remove();
    }
})

function show(){
    $('.popup-background').show();
    $('html body').css('overflow','hidden'); //Ngăn cuộn    
}


function hide(){
    $('.popup-background').hide();
    
    $('html body').css('overflow','scroll'); 
}
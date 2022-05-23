{
    jQuery('.tablinks a').click(function(event){
        event.preventDefault();
        jQuery('.tablinks a').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.tabcontent').removeClass('active');
        var id = jQuery(this).attr('data-id');
        jQuery('#'+id).addClass('active');
    });
    
}
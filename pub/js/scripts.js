
$(document).ready(function(){$('[data-toggle=offcanvas]').click(function() {
  $('.row-offcanvas').toggleClass('active');
});

$('.btn-toggle').click(function() {
  $(this).find('.btn').toggleClass('active').toggleClass('btn-default').toggleClass('btn-primary');
});

});

// Initiate popovers
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'left',
				html : 'true'				
    });
		
// Set Active Tab
$('.nav-tabs > li > a').click( function() {
    $('.nav-tabs > li.active').removeClass('active');
    $(this).parent().addClass('active');
} );
		
});





(function($){
  $(function(){

  	// side nav
    $('.button-collapse').sideNav();

	// modal
	$('.modal-trigger').leanModal();

	// select box
	$('select').material_select();

	// advanced search toggle
	$('#advancedSearch').addClass('hide'); 
	$('.advanced-search-toggle').on('click', function() {
        $('#advancedSearch').toggleClass('hide');
	});

	// advanced search button toggle
	$(".read-more-btn-content").click(function () {
	$(this).text(function(i, text){
          return text === "Advanced Search" ? "Hide Advanced Search" : "Advanced Search";
        })
	});


  }); // end of document ready
})(jQuery); // end of jQuery name space








    
    



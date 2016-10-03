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
	$(".advanced-search-btn-content").click(function () {
	$(this).text(function(i, text){
          return text === "Advanced Search" ? "Hide Advanced Search" : "Advanced Search";
        })
	});

	// material box (image popup)
	$('.materialboxed').materialbox();

	// scrollspy (follow me links)
	$('.scrollspy').scrollSpy();

	// push pin
	$('.pushpin-wrapper .row').pushpin({ top: $('.pushpin-wrapper').offset().top });

	// article image toggle
	$('.image-reveal').addClass('hide');
	$('.image-reveal-toggle').on('click', function() {
		$('.image-reveal').toggleClass('hide');
	});

	// article read more button toggle
	$(".view-more-btn-content").click(function () {
		$(this).text(function(i, text){
			return text === "View More" ? "View Less" : "View More";
		})
	});

	// article carousel on large screens
	if (document.documentElement.clientWidth < 993) {
		$('.owl-carousel').slider({full_width: false});
	}

	// article read more toggle
	$('.read-more-content').addClass('hide');
	$('.read-more-toggle').on('click', function() {
		$('.read-more-content').toggleClass('hide');
	});

	// article read more button toggle
	$(".read-more-btn-content").click(function () {
		$(this).text(function(i, text){
			return text === "Read More" ? "Read Less" : "Read More";
		})
	});

  });
})(jQuery);

// compare

// toast 'compare added' 
var displayCustomHTMLToast = function() {
	var $toastContent = $('<span><i class="material-icons">compare</i> Set added to compare <br /></span>');
	Materialize.toast($toastContent, 4000);
}

// toast 'compare removed'
var displayCustomHTMLToastRemove = function() {
	var $toastContentRemove = $('<span><i class="material-icons">compare</i> Set removed to compare <br /></span>');
Materialize.toast($toastContentRemove, 4000);
}




    
    



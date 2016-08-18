jQuery(document).ready(function() {
	jQuery(".unselectable").attr("unselectable", "on").select(function() {return false}).css({
	  "-moz-user-select": "-moz-none",
	  "-o-user-select": "none",
	  "-khtml-user-select": "none",
	  "-webkit-user-select": "none",
	  "user-select": "none"
	});
	
	//Табы
	jQuery(".js_tabs_block > a:first-child").addClass("active");
	jQuery(".js_tabs_content > div").hide();
	jQuery(".js_tabs_content > div:first-child").show();
	jQuery(".js_tabs_block > a").click(function(){
		jQuery(".js_tabs_block > a").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".js_tabs_content > div").hide();
		jQuery(jQuery(this).attr("href")).show();
		return false;
	});

	var _dropdown;
	var settings = {
		autoReinitialise: true,
		showArrows: true
	};
	jQuery("input[type=checkbox], select").styler({
		selectSearch: true,
		onFormStyled: function(){
			_dropdown = jQuery('.jq-selectbox__dropdown');
			_dropdown.find('ul').wrap('<div class="scroll-pane" ></div>');
		},
		onSelectOpened: function(){
			var _ul = jQuery(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.jScrollPane(settings);
		}
	});

	jQuery(".range-slider").noUiSlider({
		start: [10000, 123000],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 200000
		},
		format: wNumb({
			decimals: 0,
			thousand: ' '
		})
	});
	jQuery(".range-slider").Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
		jQuery(this).html(
			'<span>' + value + '</span>'
		);
	});
	jQuery(".range-slider").Link('upper').to('-inline-<div class="tooltip"></div>', function (value) {
		jQuery(this).html(
			'<span>' + value + '</span>'
		);
	});

	var wow = new WOW(
		{
			animateClass: 'animated',
			offset:       150,
			mobile:       false
		}
	);
	wow.init();

	PxScrollTop();
	jQuery(window).scroll(function(){
		PxScrollTop();
	});
	jQuery("body").on("click", ".scrollTop:not(.disabled)", function() {
		jQuery("html:not(:animated)" +( !jQuery.browser.opera ? ",body:not(:animated)" : "")).animate({ scrollTop: 0}, 500 );
		return false;
	});

});

function PxScrollTop() {
	if (jQuery(".scrollTop").length == 0) {
		jQuery("body").append("<div class=\"scrollTop\"><span class=\"site-icon-arrow-up\"></span></div>");
	}
	(jQuery(window).scrollTop() > 300) ? jQuery(".scrollTop").removeClass("disabled") : jQuery(".scrollTop").addClass("disabled");
}
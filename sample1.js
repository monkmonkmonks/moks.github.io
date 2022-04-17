
$('.gallery').slick({
	infinite: true, 
	fade: true, 
	arrows: true,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	asNavFor: '.choice-btn', 
});


$('.choice-btn').slick({
	infinite: true, 
	slidesToShow: 4, 
	focusOnSelect: true, 
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	asNavFor: '.gallery', 
});
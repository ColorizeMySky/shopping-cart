//all img to one height
equalHeightImg();

function equalHeightImg() {
	let height = 0;

	$('.wrapper-img').each(function() {
		if ($(this).height() > height ) {
			height = $(this).height();
		}
	});
	$('.wrapper-img').height(height);
}

/*
$('.for-more').on('click', playForward);

function playForward() {
	$(this).parent().addClass('change-view');
	$(this).siblings('.shadow-for-holder').addClass('invisible');
	$(this).siblings('.backside').removeClass('invisible');
	$(this).delay(1500).queue(function (){
		$(this).text('Back');
		$(this).removeClass('for-more');
		$(this).addClass('for-back');
		$(this).on('click', playBack);
	});
}
function playBack() {
	$(this).parent().removeClass('change-view');
	$(this).parent().addClass('change-view-back');
	$(this).siblings('.backside').addClass('invisible');
	$(this).text('Click for details');
	$(this).delay(2000).queue(function (){
		$(this).siblings('.shadow-for-holder').removeClass('invisible');
		$(this).removeClass('for-back');
		$(this).addClass('for-more');
		//$(this).on('click', playForward);
		$('.for-more').on('click', playForward);
	});
}
*/

$('.details').on('click', function() {
	if ($(this).parent().hasClass('change-view-back') || $(this).parent().hasClass('change-view')) {
		$(this).parent().toggleClass('change-view');
		$(this).parent().toggleClass('change-view-back');
	}
	else {
		$(this).parent().addClass('change-view');
	}

	if ($(this).siblings('.shadow-for-holder').hasClass('invisible')) {
		$(this).siblings('.shadow-for-holder').delay(3000).queue(function (){
			$(this).removeClass('invisible');
			$(this).siblings('.details').text('Click for details');
			console.log($(this).text());
		});
	}
	else {
		$(this).siblings('.shadow-for-holder').addClass('invisible');
		$(this).text('Back');
		console.log($(this).text());
	}

	$(this).siblings('.backside').toggleClass('invisible');
});
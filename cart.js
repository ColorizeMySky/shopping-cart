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
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
		});
	}
	else {
		$(this).siblings('.shadow-for-holder').addClass('invisible');
		$(this).text('Back');
	}

	$(this).siblings('.backside').toggleClass('invisible');
});


//SHOPPING CART

class Cart {
	constructor() {
		this.subtotal = 0;
		this.tax = 0;
		this.total = 0;
		this.items = {
			'deathstar': {
				price: 20,
				pieces: 0
			},
			'infinitygauntlet': {
				price: 230,
				pieces: 0
			},
			'tyrantvirus': {
				price: 5,
				pieces: 0
			},
			'ddd': {
				price: 100,
				pieces: 0
			},
			'realitybomb': {
				price: 400,
				pieces: 0
			},
			'halo': {
				price: 13,
				pieces: 0
			},
			'littledoctor': {
				price: 90,
				pieces: 0
			},
			'crowbar': {
				price: 500,
				pieces: 0
			}
		}
	}

	interact() {
		if ($('.shopping').hasClass('d-none') || $('.shopping').hasClass('disappearCart')) {
			this.appearCart();
		}

		this.showInfo();
		this.summ();
	}

	addItem(item) {
		this.items[item].pieces += 1;
		this.interact();
	}
	removeItem(item) {
		this.items[item].pieces -= 1;

		if (this.items[item].pieces <= 0) {
			this.items[item].pieces = 0;
			$('#' + item + '-info').addClass('d-none');
		}

		this.interact();
	}
	showInfo() {
		for (var key in this.items) {
			if (this.items[key].pieces > 0) {
				$('#' + key + '-info').removeClass('d-none');
				$('#' + key + '-info .money').text(this.items[key].price * this.items[key].pieces + ' bln');
				$('#' + key + '-info .pieses').text(this.items[key].pieces);
			}
		}
	}
	summ() {
		var subtotal = 0;
		for (var key in this.items) {
			//do with key;
			//do with Object[key];
			subtotal += this.items[key].price * this.items[key].pieces;
		}
		$('.subtotal span').text(subtotal + ' bln');

		//try tax 10%
		$('.tax span').text(subtotal * 0.1 + ' bln');
		$('.total span').text(subtotal + subtotal * 0.1 + ' bln');

		if (subtotal <= 0) {
			this.disappearCart();
		}
	}

	appearCart() {
		$('.shopping').removeClass('d-none');
		$('.shopping').removeClass('disappearCart');
		$('.shopping').addClass('appearCart')
	}
	disappearCart() {
		$('.shopping').removeClass('appearCart')
		$('.shopping').addClass('disappearCart');
	}

	clearCart() {
		for (var key in this.items) {
			this.items[key].pieces = 0;
			$('#' + key + '-info').addClass('d-none');
		}

		this.interact();
	}
}

var myCart = new Cart;

$('.cart').each(function() {
	let chooseId = $(this).attr('id');
	if(chooseId == 'halo') {
		$(this).on('click', function() {
			$('#message-text').text('Sorry, temporarily out of stock!');
			$('#message').modal();
		});		
	}
	else {
		$(this).on('click', function() {
			myCart.addItem(chooseId);
		});
	}
})

$('.plus').each(function() {
	let chooseId = $(this).parent().parent().attr('id');
	chooseId =  chooseId.replace(/(\w+)-info/, '$1');
	$(this).on('click', function() {
			myCart.addItem(chooseId);
		});
});

$('.minus').each(function() {
	let chooseId = $(this).parent().parent().attr('id');
	chooseId =  chooseId.replace(/(\w+)-info/, '$1');
	$(this).on('click', function() {
			myCart.removeItem(chooseId);
		});
});


$('#shipping').submit(function(event) {
	event.preventDefault();
	$('#close-shipping').trigger('click');
	myCart.clearCart();
	$('#message-text').text('Thank you for order! Have a nice day!');
	$('#message').modal();
});
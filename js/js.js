//всплывающие окна
(function(document) {
	//ищем кнопки
	var orders = [document.querySelector('.show-room__request'), document.querySelector('.footer__request')];
	var callbacks = [document.querySelector('.show-room__callback'), document.querySelector('.footer__callback')];
	var reviews = [document.querySelector('.feedback__write')];
	
	//ищем формы
	var order__form = document.querySelector('.form--order_fixed');
	var callback__form = document.querySelector('.form--callback');
	var review__form = document.querySelector('.form--review');
	
	//открытие формы заказа
	for (var i = 0; i < orders.length; i++) {
		var order = orders[i];
		
		order.addEventListener('click', function(event) {
			event.preventDefault();
			if (order__form.classList.contains('popup-show') != true) {
				order__form.classList.add('popup-show');
			}			
		})
	}
	
	//открытие формы обратной связи
	for (var i = 0; i < callbacks.length; i++) {
		var callback = callbacks[i];
		
		callback.addEventListener('click', function(event) {
			event.preventDefault();
			if (callback__form.classList.contains('popup-show') != true) {
				callback__form.classList.add('popup-show');
			}			
		})
	}
	
	//открытие формы отзыва
	for (var i = 0; i < reviews.length; i++) {
		var review = reviews[i];
		
			if (review != null) {  //проверка на наличие данного класса на странице
			review.addEventListener('click', function(event) {
				event.preventDefault();
				if (review__form.classList.contains('popup-show') != true) {
					review__form.classList.add('popup-show');
				}			
			})
		}
	}
	
	//закрытие окон
	var esc = document.querySelectorAll('.form__esc');
	
	for (var i = 0; i < esc.length; i++) {
		esc[i].addEventListener('click', function(event) {
			event.preventDefault();
			
			var close = this.parentNode;
			close.classList.remove('popup-show');
		})
	}
})(document);



//(function(document) {
//
//})(document);







//(function(document) {
//	
//})(document)
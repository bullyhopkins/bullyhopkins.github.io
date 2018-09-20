$(function(){

	var $preloader = $('#preloader');

	$("#tabs").on("click", ".tab", function(){

		var tabs = $("#tabs .tab");

		// Удаляем классы active
		tabs.removeClass("active_panel");
		// Добавляем классы active
		$(this).addClass("active_panel");

		// return false;

		/*AJAX*/

		var tabRel = $(this).attr("rel");
		//Получаем контент страницы на который был произведен клик
		var info = $(this).attr("href") + " #" + tabRel;
		//Даем текущему контенту класс с анимацией
		$(".content").addClass("hide_content");
		
		//Показываем прелоадер
		function showLoader () {
			$("#preloader").addClass('pre_show');
			setTimeout(progressBar, 500);
			setTimeout(loadContent, 300);
		}

		//Preloader

		//Запускаем функцию showLoader через 300мс после клика
		setTimeout(showLoader, 300);

		//Запускаем прогрессбар
		function progressBar () {
			$("#progress").addClass('pre_progress_an');
			setTimeout(function(){
				$("#preloader").removeClass('pre_show');
				$("#progress").removeClass('pre_progress_an');
				$(".content").addClass('show_content');
				$(".content").removeClass('hide_content');
			}, 1500);
		}
		
		//Меняем контент AJAX
		function loadContent () {
			$(".content").load(info, "", function () {
				$(".content").show("normal")
			})
		}

		//Preloader End

		return false;

		/*AJAX END*/
	});

	//Mobile Menu
	$('.open-menu').on('click', function(){
		$('.list_menu').toggleClass('mobile-menu-an');
	});
	//Mobile Menu End

});
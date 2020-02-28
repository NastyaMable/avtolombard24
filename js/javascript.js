//маски телефонов
$("#exampleInputPhone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$("#AppPhone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$("#request-phone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#passport_series").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#wu_series").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#wu_number").mask("999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#passport_number").mask("999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-year").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-date").mask("99.99.9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-phone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});


//слайдер занятий
$(document).ready(function() {
    var owl = $('.owl-carousel.advantages');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});

//слайдер логотипов
$(document).ready(function() {
    var owl = $('.owl-carousel.category-car');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//переключатель
jQuery(function($) {
    var $links, $switcher;
    $links = $('[data-show]');
    $switcher = $('.switch-js');
    $switcher.children().not(':first').hide();
    $links.click(function() {
        var id;
        id = '[data-switch="' + $(this).data('show') + '"]';
        $switcher.children(id).show();
        $switcher.children().not(id).hide();
    });
});

$(document).ready(function() {
    $('.switcher li').on('click', changeClass);
});
function changeClass() {
    $('.switcher li').removeClass('selected');
    $(this).addClass('selected');
}

//плавная прокрутка якорей
$(document).ready(function(){
    $("#menu-header-animate").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
	
	$("#menu-footer-animate").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
	
	$("#menu-slidebar-animate").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

//валидатор формы
/*var form = document.querySelector('#requestForm');
var fields = document.querySelectorAll('.field-field');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	var errors = form.querySelectorAll('.error');

	Node.prototype.insertAfter = function(newNode, referenceNode) {
		return referenceNode.parentNode.insertBefore(
			newNode, referenceNode.nextSibling);
	};

	for (var i = 0; i < errors.length; i++) {
		errors[i].remove()
	}
	
	for (var i = 0; i < fields.length; i++) {
		if (!fields[i].value) {
			var parent = fields[i].parentNode;

			var txt = document.createTextNode("Поле обязательно для заполнения");

			var error = document.createElement('div');
			error.className = 'error';
			error.appendChild(txt);

			parent.insertAfter(error, fields[i]);
		}
	}
  
	if($("#requestСheckbox").is(":checked")){
		return true;
	}
	else{
		$('label.pr').addClass('error-label');
		return false;
	};
});
*/
//валидатор формы 
$(function(){
 $('#requestСheckbox').on('change', function(){
	if($('#requestСheckbox').prop('checked')){
		$('#requestSubmit').attr('disabled', false);
	}else{
		$('#requestSubmit').attr('disabled', true);
	}
 });
});
$(function() {
    $('#requestForm').validate({
        ignore: ":disabled",
        rules: {
            requestСheckbox: {
                required: true
            },
            requestInputName: {
                required: true
            },
			requestInputPhone: {
                required: true
            }
        },
        messages:{
			requestInputName: {
                required : "Поле обязательно для заполнения"
            },
			requestInputPhone: {
                required : "Поле обязательно для заполнения"
            }
        }
    });
});

//валидатор "Подать заявку"
$(function(){
 $('#callСheckbox').on('change', function(){
	if($('#callСheckbox').prop('checked')){
		$('#callSubmit').attr('disabled', false);
	}else{
		$('#callSubmit').attr('disabled', true);
	}
 });
});
$(function() {
    $('#callForm').validate({
        ignore: ":disabled",
        rules: {
            callСheckbox: {
                required: true
            },
            callInputName: {
                required: true
            },
			callInputPhone: {
                required: true
            }
        },
        messages:{
			callInputName: {
                required : "Поле обязательно для заполнения"
            },
			callInputPhone: {
                required : "Поле обязательно для заполнения"
            }
        }
    });
});

//валидатор modal
$(function(){
 $('#exampleСheckbox').on('change', function(){
	if($('#exampleСheckbox').prop('checked')){
		$('#exampleSubmit').attr('disabled', false);
	}else{
		$('#exampleSubmit').attr('disabled', true);
	}
 });
});
$(function() {
    $('#ApplicationForm').validate({
        ignore: ":disabled",
        rules: {
            exampleСheckbox: {
                required: true
            },
            exampleInputName: {
                required: true
            },
			exampleInputPhone: {
                required: true
            }
        },
        messages:{
			exampleInputName: {
                required : "Поле обязательно для заполнения"
            },
			exampleInputPhone: {
                required : "Поле обязательно для заполнения"
            }
        }
    });
});

function slidebarCanvas() {
    $('body').removeClass('off-canvas-sidebar-open');
}

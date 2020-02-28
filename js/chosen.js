var config = {
	'.chosen-select': {}
}
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

//выбор региона с подгузкой его городов (для вакансий)
$("select").change(function(){
	var selected = $(this).val();
	//var region_vacancy;
	var all_address;
	all_address = [
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-md-12'>Вывод адресов</div>",
		"<div class='col-sm-12'><div class='address-contact'><div class='location-item'>г. Батайск, ул. Максима Горького, 285г</div><div>Пн-Вс 9:00-19:00</div></div></div><div class='col-sm-12'><div class='address-contact'><div class='location-item'>г. Батайск, ул. Максима Горького, 285г</div><div>Пн-Вс 9:00-19:00</div></div></div><div class='col-sm-12'><div class='address-contact'><div class='location-item'>г. Батайск, ул. Максима Горького, 285г</div><div>Пн-Вс 9:00-19:00</div></div></div>"
	];

	$(".all_address").html(all_address[selected]);
});

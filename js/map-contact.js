ymaps.ready(init);
	var myMap, 
		myPlacemark;

	function init(){ 
		myMap = new ymaps.Map("map", {
			center: [47.22970534, 39.71761920],
			zoom: 12
		}); 
		
		rostov_1 = new ymaps.Placemark([47.24992857427097,39.693048999999995], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, пр. Ленина, д. 57<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [42, 50],
			iconImageOffset: [-13, -42]
		});
		rostov_2 = new ymaps.Placemark([47.26520918424819,39.67737417051694], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, ул. Таганрогская, д. 43<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [42, 50],
			iconImageOffset: [-13, -42]
		});
		rostov_3 = new ymaps.Placemark([47.227556613404985,39.722609625553105], {
			hintContent: 'Ростов-на-Дону',
			balloonContent: 'г. Ростов-на-Дону, пер. Чехова, д. 76, 2 этаж офис 1а<br/> Тел.:+7(863) 123-45-67'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/map-pointer.png',
			iconImageSize: [42, 50],
			iconImageOffset: [-13, -42]
		});
		

		myMap.geoObjects.add(rostov_1)
		.add(rostov_2)
		.add(rostov_3)

		.add("zoomControl")
		.add("mapTools")
		.add("searchControl");	
	}
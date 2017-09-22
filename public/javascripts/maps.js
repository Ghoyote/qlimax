// Google Maps
function initMap() {
	var uluru = {lat: 5.5825608, lng: -0.1664819};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: uluru,
		scrollwheel: false,
		navigationControl: true,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

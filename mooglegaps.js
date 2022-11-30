
google.charts.load('current', {
	'packages': ['map'],
	// Note: you will need to get a mapsApiKey for your project.
	// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
	'mapsApiKey': ''

});

google.charts.setOnLoadCallback(drawMap);

var textBoxForAddess = document.createElement('input')
textBoxForAddess.type='text'
textBoxForAddess.id = 'tb2'
document.body.appendChild(textBoxForAddess)
textBoxForAddess.setAttribute('size','10')
textBoxForAddess.setAttribute('placeholder', 'Address')

var buttonForTBAddress = document.createElement('button')
buttonForTBAddress.innerHTML = 'Search'
document.body.appendChild(buttonForTBAddress)
buttonForTBAddress.addEventListener('click', drawMap)


function drawMap() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Population'],
		[textBoxForAddess.value, 'Home: Dee\'s Nuts'],
	]);

	var options = {
		zoomLevel: 20,
		enableScrollWheel: true,
		showTooltip: true,
		showInfoWindow: true,
		icons: {
            default: {
              normal: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png',
              selected: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Right-Azure-icon.png'
            }
		}
	};

	var map = new google.visualization.Map(document.getElementById('chart_div'));

	map.draw(data, options);
};

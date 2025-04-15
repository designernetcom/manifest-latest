function get_location_on_map(location='mumbai') {
  var location_lat_long = [{'location':'mumbai','latitude':'19.1376588802915','longitude':'72.83660328029151'},
                          {'location':'delhi','latitude':'28.644800','longitude':'77.216721'},
                          {'location':'bengaluru','latitude':'12.9716','longitude':'77.5946'},
                          {'location':'chennai','latitude':'13.0827','longitude':'80.2707'},
                          {'location':'hyderabad','latitude':'17.3850','longitude':'78.4867'},
                          {'location':'ahmedabad','latitude':'23.0225','longitude':'72.5714'},
                          {'location':'vizag','latitude':'17.6868','longitude':'83.2185'}];
  var selected_loc_counter = 0;
  for (var i = 0; i < location_lat_long.length; i++) {
    if (location == location_lat_long[i].location) {
      selected_loc_counter++;
      $('.map-location').removeClass('active');
      $('#loc-'+location).addClass('active');
      var mapProp= {
        center:new google.maps.LatLng(location_lat_long[i].latitude,location_lat_long[i].longitude),
        zoom:12,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
  }

  if (selected_loc_counter <= 0) {
    var html = '<div class="row mt-4">';
    html += '<div class="col-md-2 ml-4 city"><span id="loc-mumbai" class="map-location" onclick="get_location_on_map(\'mumbai\')">Mumbai</span></div>';
    html += '<div class="col-md-2 city"><span id="loc-delhi" class="map-location" onclick="get_location_on_map(\'delhi\')">Delhi</span></div>';
    html += '<div class="col-md-2 city"><span id="loc-bengaluru" class="map-location" onclick="get_location_on_map(\'bengaluru\')">Bengaluru</span></div>';
    html += '<div class="col-md-2 city"><span id="loc-chennai" class="map-location" onclick="get_location_on_map(\'chennai\')">Chennai</span></div>';
    html += '<div class="col-md-2 city"><span id="loc-hyderabad" class="map-location" onclick="get_location_on_map(\'hyderabad\')">Hyderabad</span></div></div>';
    html += '<div class="row mt-4"><div class="col-md-2 ml-4 city"><span id="loc-ahmedabad" class="map-location" onclick="get_location_on_map(\'ahmedabad\')">Ahmedabad</span></div>';
    html += '<div class="col-md-2 city"><span id="loc-vizag" class="map-location" onclick="get_location_on_map(\'vizag\')">Vizag</span></div></div>';
    $('#map-location-div').html(html);
    get_location_on_map(location='mumbai');
  }
}
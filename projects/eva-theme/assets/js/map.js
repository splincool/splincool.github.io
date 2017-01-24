function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(50.084479, 14.418880),
        zoom: 17,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var myLatlng = new google.maps.LatLng(50.084479, 14.418880);
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Point"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
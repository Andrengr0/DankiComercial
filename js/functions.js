window.onload = function(){


    var map;
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-6.806260342518722, -35.077957749126114),
            scrollWhell: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"), mapProp);

        function addMarker(lat, long, icon, content){
            var LatLng = {'lat': lat, 'lng': long};

            var marker = new google.maps.Marker({
                'position': LatLng,
                'map': map,
                'icon': icon
            });

            var infoWindow = new google.maps.InfoWindow({
                'content': content,
                'maxWidth': 200,
                'pixelOffset': new google.maps.Size(0, 20)
            });

            infoWindow.open(map, marker);
        }

    }
    initialize()

    var conteudo = '<p style="color:#000; font-size:13px; padding:8px 0">Meu endereço personalizado</p>';
    addMarker (-6.806260342518723, -35.077957749126115, "", conteudo);
    
}
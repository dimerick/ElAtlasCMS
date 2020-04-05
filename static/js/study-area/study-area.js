
var controlSearchIniatilized = false;
var url_data = '/app/main-actors/?level';
var globalGroupsMap;
var globalMarkers;
var globalQuebradasMap = [];
        var numGroups = 0;
        //providers
        //   var providers = {};
        layers = [];


//        var crs3116 = new L.Proj.CRS('EPSG:3116',
//            '+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

        openStreet = {
            title: 'Osm',
            icon: '/media/filer_public/32/7d/327dff9d-a8b9-4ded-8208-a48df14a8742/openstreetmap.png',
            layer: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
        };
        layers.push(openStreet);
        esriWorldImagery = {
            title: 'World Imagery',
            icon: '/media/filer_public/1b/32/1b32d17c-1901-4615-88ad-bd7c942b9b32/satellite.png',
            layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            })
        };
        layers.push(esriWorldImagery);

        CartoDB_DarkMatter = 
        {

            title: 'CartoDB DarkMatter',
            icon: '/static/images/carto_dark.png',
            layer: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'    
            })
};
layers.push(CartoDB_DarkMatter);

        // L.control.iconL
        var map = L.map('map', {
            center: [6.2552985, -75.6078625],
            zoom: 11,
            maxZoom: 18,
            minZoom: 3,
            // layers: [openStreet, esriWorldImagery],
            zoomControl: true,
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: 'topleft'
            }
        });



        // añado un logo al mapa
//
//        var logo = L.Control.extend({
//            options: {
//                position: 'topright'
//            },
//
//            onAdd: function (map) {
//                // create the control container with a particular class name
//                var container = L.DomUtil.create('div', 'logo');
//
//                container.innerHTML =
//                    '<img id=logo src="/media/filer_public/c4/8e/c48e171e-9a24-4419-9d49-f53a22f6ccfe/logo_final.png">';
//                return container;
//            }
//        });
//
//        map.addControl(new logo());

        L.control.iconLayers(layers).addTo(map);

        jQuery("#button-search-map").click(
            function(){
                var level = jQuery("#text-search-map").val();
                if(level == ''){
                url_data = '/app/main-actors/?level';
                }else{
                url_data = '/app/main-actors/?level'+'='+level;
                }
                getGroups();
            });

        //proj4.defs('EPSG:3116', '+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        proj4.defs('EPSG:4326', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees');

        
        var opt = {
            'maxHeight' : 300
        };

        
        
        
        function getHonda(){
            dataJson = JSON.parse(JSON.stringify(honda));

            var hondaMap = L.Proj.geoJson(dataJson,{
                        onEachFeature: eachHonda
                    });

            makeLines();

            map.addLayer(hondaMap);
        }

        function eachHonda(feature, layer){
            if(layer != null){

            console.log(layer._latlngs);
            globalQuebradasMap.push(layer._latlngs);

            var styleG2 = {
            fill: false,
            fillColor:'#f0e428',
            fillOpacity: 1.0,
            color : '#59abd5',
            weight: 3
            };

            //L.Util.setOptions(layer, { style: styleG2 });

                var title = '<h4>Honda</h4>';
                var content = '<div class="content-info-marker">' + title;
                    
                
                content = content +'</div>';


            layer.setStyle(styleG2);


                layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
            }
        };

function makeLines() {

    for(var i=0;i < globalQuebradasMap.length;i++){

        var line = L.polyline.antPath(globalQuebradasMap[i], {color : '#0455a7', weight: 3, snakingSpeed: 200});
        line.addTo(map).snakeIn();
        
    }
}

function eachHonda(feature, layer){
            if(layer != null){

            var styleG2 = {
            fill: false,
            fillColor:'#f0e428',
            fillOpacity: 1.0,
            color : '#59abd5',
            weight: 3
            };

            //L.Util.setOptions(layer, { style: styleG2 });

                var title = '<h4>Honda</h4>';
                var content = '<div class="content-info-marker">' + title;
                    
                
                content = content +'</div>';


            layer.setStyle(styleG2);


                layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
            }
        };


        function eachAreaHonda(feature, layer){
            if(layer != null){
                globalQuebradasMap.push(layer._latlngs);
            var styleG2 = {
            fill: false,
            fillColor:'#f0e428',
            fillOpacity: 1.0,
            color : '#50514f',
            weight: 3
            };

            //L.Util.setOptions(layer, { style: styleG2 });

                var title = '<h4>Area Honda</h4>';
                var content = '<div class="content-info-marker">' + title;
                    
                
                content = content +'</div>';


            layer.setStyle(styleG2);


                layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
            }
        };

        getHonda();



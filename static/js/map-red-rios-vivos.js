
var controlSearchIniatilized = false;
var url_data = '/app/spatial-objects/?mapa=rios-riparios';
var globalGroupsMap;
var globalMarkers;
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
                var category = jQuery("#text-search-map").val();
                if(category == ''){
                url_data = '/app/main-actors/?mapa';
                }else{
                url_data = '/app/main-actors/?mapa'+'='+category;
                }
                getGroups();
            });

        //proj4.defs('EPSG:3116', '+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        proj4.defs('EPSG:4326', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees');

        
        var opt = {
            'maxHeight' : 300
        };

var antioquiaMap = L.Proj.geoJson(antioquia,{
                        onEachFeature: eachAntioquia
                    });
map.addLayer(antioquiaMap);

        function getNetwork(){

var dash_straight = {
        color: 'rgb(145, 146, 150)',
        fillColor: 'rgb(145, 146, 150)',
        dashArray: 8,
        opacity: 0.8,
        weight: '5',
    };


        L.bezier({
        path: [
[{"lng": -75.8142, "lat": 6.8574, slide: 'RIGHT_ROUND'}, {"lng": -75.6825, "lat": 6.9211, slide: 'LEFT_ROUND'}],
[{"lng": -75.8142, "lat": 6.8574}, {"lng": -75.9094, "lat": 7.0211}],
[{"lng": -75.6825, "lat": 6.9211}, {"lng": -75.6922, "lat": 7.0106}],
[{"lng": -75.9094, "lat": 7.0211}, {"lng": -75.6922, "lat": 7.0106}],
[{"lng": -75.9094, "lat": 7.0211}, {"lng": -75.7640, "lat": 7.1706}],
[{"lng": -75.6922, "lat": 7.0106}, {"lng": -75.5507, "lat": 7.1191}],
[{"lng": -75.7640, "lat": 7.1706}, {"lng": -75.5507, "lat": 7.1191}],
[{"lng": -75.5507, "lat": 7.1191}, {"lng": -75.4399, "lat": 7.1686}],
[{"lng": -75.4399, "lat": 7.1686}, {"lng": -75.3936, "lat": 7.2885}],
[{"lng": -75.7640, "lat": 7.1706}, {"lng": -75.3936, "lat": 7.2885}],
[{"lng": -75.7640, "lat": 7.1706}, {"lng": -75.4399, "lat": 7.1686}],
[{"lng": -75.7640, "lat": 7.1706}, {"lng": -75.6922, "lat": 7.0106}],
[{"lng": -75.7640, "lat": 7.1706}, {"lng": -75.6825, "lat": 6.9211}],
[{"lng": -75.7640, "lat": 7.1706}, {"lng": -75.8142, "lat": 6.8574}],

],

        icon: {
            path: '/static/images/icon-transparent.png'
        }
    }, dash_straight).addTo(map);

/*
            jQuery.ajax({
                url:   '/app/network-spatial-objects/?mapa=rios-riparios',
                type:  'get',
                beforeSend: function (){
                },
                success: function (data, textStatus, jqXHR){
                    // console.log(data);
                    // dataJson = JSON.parse(data);
                                       
                    dataJson = JSON.stringify(data);
                    dataJson = JSON.parse(dataJson);
                    console.log(dataJson);



                    //Add lines to Map



                    

                    jQuery("#img-search-map").html("");
                    // map.addLayer(groupsMap);
                    // map.addLayer(hondaMap);


                   
                },
                error: function(jqXHR, text){
                    console.log(jqXHR);
                    console.log(text);
                },
                complete: function () {

                }
            });

            */

        }




                
        function getGroups(){
            jQuery.ajax({
                url:   url_data,
                type:  'get',
                beforeSend: function () {
                    jQuery("#img-search-map").html("<img src=\"/static/images/loading.gif\">");
                    
                    console.log("Procesando, espere por favor...");
                },
                success: function (data, textStatus, jqXHR){
                    // console.log(data);
                    // dataJson = JSON.parse(data);
                    if (map.hasLayer(globalGroupsMap)){
                        map.removeLayer(globalGroupsMap);
                    }
                     if (map.hasLayer(globalMarkers)){
                         map.removeLayer(globalMarkers);
                    }
                    
                   
                    dataJson = JSON.stringify(data);
                    dataJson = JSON.parse(dataJson);
                    console.log(dataJson);


//                    L.geoJson(dataJson,{
//                    onEachFeature: eachSitio
//                }).addTo(map);

//                    var sitiosMap = L.geoJson(dataJson,{
//                    onEachFeature: eachSitio
//                });

//                    var sitiosMap = L.Proj.geoJson(dataJson,{
//                        onEachFeature: eachSitio
//                    }).addTo(map);

                    var groupsMap = L.Proj.geoJson(dataJson,{
                        onEachFeature: eachGroup
                    });

                    var hondaMap = L.Proj.geoJson(honda,{
                        onEachFeature: eachHonda
                    });


                    // var hondaMap = L.Proj.geoJson(honda,{
                    //     onEachFeature: eachHonda
                    // });
//
                     var markers = L.markerClusterGroup({
                         iconCreateFunction: function(cluster) {
                             return L.divIcon({ html: '<div class="icon-map"><div>' + cluster.getChildCount() + '</div></div>' });
                         }
                     });

                    globalGroupsMap = groupsMap;
                    globalMarkers = markers;
                    markers.addLayer(groupsMap);
                    map.addLayer(groupsMap);
                    map.addLayer(hondaMap);


                    //Add lines to Map

/*

                    var dash_straight = {
        color: 'rgb(145, 146, 150)',
        fillColor: 'rgb(145, 146, 150)',
        dashArray: 8,
        opacity: 0.8,
        weight: '1',
    };

                    L.bezier({
        path: [
            [
                {lat: 7.17063, lng: -75.763980},//Sri Lanka
                {lat: 7.01057, lng: -75.69216}//Japan
            ]
        ],

        icon: {
            path: '/static/images/plane.png'
        }
    }, dash_straight).addTo(map);
*/
                    jQuery("#img-search-map").html("");
                    // map.addLayer(groupsMap);
                    // map.addLayer(hondaMap);


                    /*setTimeout(function(){
                        if(!controlSearchIniatilized){
                            // codigo para implementar la barra de busqueda
                            globalSearchControl = new L.Control.Search({
                                layer: markers,
                                propertyName: 'perception',
                                marker: false,
                                initial: false,
                                moveToLocation: function(latlng, title, map) {
                                    var zoom = map.getBoundsZoom(L.latLngBounds([latlng,latlng]));
                                  console.log(zoom);
                                    map.setView(latlng, zoom); // access the zoom
                                }
                            });

                            globalSearchControl.on('search:locationfound', function(e){
                                map.addLayer(e.layer);
                                if(e.layer._popup)
                                    e.layer.openPopup();
                                e.layer.on('popupclose', function (a) {
                                    // map.removeLayer(e.layer);
                                    markers.refreshClusters();

                                });

                            }).on('search:collapsed', function(e) {
                                console.log('collapsed');
                                markers.refreshClusters();
                            });
                            map.addControl(globalSearchControl);  //inizialize search control
                            controlSearchIniatilized = true;
                        }


                    }, 3300);*/


                },
                error: function(jqXHR, text){
                    console.log(jqXHR);
                    console.log(text);
                },
                complete: function () {

                }
            });
        }

        function eachGroup(feature, layer){
            numGroups++;
            if(layer != null){
                // var lat = feature.geometry.coordinates[1];
                // var lon = feature.geometry.coordinates[0];
//                console.log(layer);

var urlIcon = '/static/images/map-icon-red.png';
if (feature.properties.icon != null){
var urlIcon = feature.properties.icon;
}

                var myIcon = L.icon({
                    iconUrl: urlIcon,
                    iconSize: [32, 39],
                    iconAnchor: [16, 39],
                    popupAnchor: [16, -20]
                });



                var title = '<h4>'+feature.properties.name.toUpperCase()+'</h4>';
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +
                    '<li> <i class="fa fa-caret-right"></i> <span id="id">'+' '+feature.properties.category+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span id="id">'+' '+feature.properties.description+'</span></li>' +
                    '</ul>';
                if(feature.properties.image != null){
                    content = content + '<img src="'+feature.properties.image+'">';
                }


                content = content +'</div>';


//                 var myIcon = L.icon({
//                     iconUrl: urlIcon,
//                     iconSize: [32, 39],
//                     iconAnchor: [16, 18]
//                 });
                layer.setIcon(myIcon);


                layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
            }
        };


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

        function eachAntioquia(feature, layer){
            if(layer != null){

            var styleG2 = {
            fill: false,
            fillColor:'#f0e428',
            fillOpacity: 1.0,
            color : '#59abd5',
            weight: 3
            };

            //L.Util.setOptions(layer, { style: styleG2 });

                var title = '<h4>Antioquia</h4>';
                var content = '<div class="content-info-marker">' + title;
                    
                
                content = content +'</div>';


            layer.setStyle(styleG2);


                layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
            }
        };

getNetwork();
        getGroups();




var controlSearchIniatilized = false;
var url_data = '/app/spatial-objects/?mapa=redes_cooperacion';
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
            center: [6.25387182486021, -75.56156158447267],
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



        function getNetwork(){

            var dash_straight = {
        color: '#f25f5c',
        fillColor: '#f25f5c',
        dashArray: 0,
        opacity: 0.8,
        weight: '4',
    };


var dash_straight2 = {
        color: '#007bff',
        fillColor: '#007bff',
        dashArray: 0,
        opacity: 0.8,
        weight: '3',
    };





        L.bezier({
        path: [
[{"lng":-75.603086, "lat":6.226215}, {"lng":-75.585193, "lat":6.315423}],[{"lng":-75.603086, "lat":6.226215}, {"lng":-75.576052, "lat":6.316724}],[{"lng":-75.603086, "lat":6.226215 }, {"lng":-75.579410, "lat":6.317390}],[{"lng":-75.603086, "lat":6.226215}, {"lng":-75.583038, "lat":6.313379}],
[{"lng":-75.579897, "lat":6.315317}, {"lng":-75.579410, "lat":6.317390}],
[{"lng":-75.648759, "lat":6.293240}, {"lng":-75.620968, "lat":6.255805}],
[{"lng":-75.572615, "lat":6.280455}, {"lng":-75.573102, "lat":6.249598}],
[{"lng":-75.561489, "lat":6.256363}, {"lng":-75.566363, "lat":6.257418}],
[{"lng":-75.563768, "lat":6.258703}, {"lng":-75.541188, "lat":6.237351}],
[{"lng":-75.563768, "lat":6.258703}, {"lng":-75.554639, "lat":6.295187}],
[{"lng":-75.563768, "lat":6.258703}, {"lng":-75.557719, "lat":6.247849}],
[{"lng":-75.563768, "lat":6.258703}, {"lng":-75.564583, "lat":6.276571}],
[{"lng":-75.540389, "lat":6.340389}, {"lng":-75.579904, "lat":6.283387}],
[{"lng":-75.575593, "lat":6.313478}, {"lng":-75.574936, "lat":6.312548}],
[{"lng":-75.571973, "lat":6.343697}, {"lng":-75.570700, "lat":6.343767}],
[{"lng":-75.581382, "lat":6.312960}, {"lng":-75.583260, "lat":6.303339}],
[{"lng":-75.559683, "lat":6.245496}, {"lng":-75.634875, "lat":6.091855}],
[{"lng":-75.578026, "lat":6.285569}, {"lng":-75.575300, "lat":6.280268}],
[{"lng":-75.588602, "lat":6.252364}, {"lng":-75.570421, "lat":6.278062}],
[{"lng":-75.564733, "lat":6.252908}, {"lng":-75.564717, "lat":6.252772}],
[{"lng":-75.556905, "lat":6.248031}, {"lng":-75.557719, "lat":6.247977}],
[{"lng":-75.544955, "lat":6.264835}, {"lng":-75.557312, "lat":6.264757}],
[{"lng":-75.575690, "lat":6.214948}, {"lng":-75.580777, "lat":6.194380}],
[{"lng":-75.556935, "lat":6.274151}, {"lng":-75.559909, "lat":6.274492}],
[{"lng":-75.577150, "lat":6.224173}, {"lng":-75.564775, "lat":6.319428}],
[{"lng":-75.558984, "lat":6.304065}, {"lng":-75.559455, "lat":6.306639}],
[{"lng":-75.648602, "lat":6.093263}, {"lng":-75.635576, "lat":6.091825}],
[{"lng":-75.562417, "lat":6.259883}, {"lng":-75.566429, "lat":6.256997}],
[{"lng":-75.602952, "lat":6.253005}, {"lng":-75.600024, "lat":6.258692}],
[{"lng":-75.639665, "lat":6.253005}, {"lng":-75.642777, "lat":6.157626}],
[{"lng":-75.608448, "lat":6.253005}, {"lng":-75.593750, "lat":6.246063}],
[{"lng":-75.560522, "lat":6.253005}, {"lng":-75.560628, "lat":6.293139}],

],

        icon: {
            path: '/static/images/icon-transparent.png'
        }
    }, dash_straight).addTo(map);





        L.bezier({
        path: [
[{"lng":-75.575103, "lat":6.200051}, {"lng":-75.579410, "lat":6.317390}],
[{"lng":-75.575103, "lat":6.200051}, {"lng":-75.541722, "lat":6.293181}],
[{"lng":-75.575103, "lat":6.200051}, {"lng":-75.547122, "lat":6.302157}],
[{"lng":-75.575103, "lat":6.200051}, {"lng":-75.583038, "lat":6.313379}],

[{"lng":-75.599129, "lat":6.241425}, {"lng":-75.603520, "lat":6.244375}],
[{"lng":-75.599129, "lat":6.241425}, {"lng":-75.393524, "lat":6.412167}],
[{"lng":-75.599129, "lat":6.241425}, {"lng":-75.564679, "lat":6.252761}],


[{"lng":-75.583038, "lat":6.313379}, {"lng":-75.564679, "lat":6.252761}],
[{"lng":-75.583038, "lat":6.313379}, {"lng":-75.534977, "lat":6.333988}],
[{"lng":-75.583038, "lat":6.313379}, {"lng":-75.575103, "lat":6.200051}],
[{"lng":-75.583038, "lat":6.313379}, {"lng":-75.581174, "lat":6.299762}],

[{"lng":-75.573075, "lat":6.270587}, {"lng":-75.570421, "lat":6.278062}],

[{"lng":-75.557728, "lat":6.268760}, {"lng":-75.546761, "lat":6.303259}],

],

        icon: {
            path: '/static/images/icon-transparent.png'
        }
    }, dash_straight2).addTo(map);

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

                    
                    var valleAburraMap = L.Proj.geoJson(valleAburra,{
                        onEachFeature: eachValleAburra
                    });

                    var medellinMap = L.Proj.geoJson(medellin,{
                        onEachFeature: eachMedellin
                        });

                    // var hondaMap = L.Proj.geoJson(honda,{
                    //     onEachFeature: eachHonda
                    // });
//
                     // var markers = L.markerClusterGroup({
                     //     iconCreateFunction: function(cluster) {
                     //         return L.divIcon({ html: '<div class="icon-map"><div>' + cluster.getChildCount() + '</div></div>' });
                     //     }
                     // });

                    
                    //markers.addLayer(groupsMap);
                    
                    map.addLayer(valleAburraMap);
                    map.addLayer(medellinMap);
                    map.addLayer(groupsMap);



                    jQuery("#img-search-map").html("");



                    setTimeout(function(){
                        if(!controlSearchIniatilized){
                            // codigo para implementar la barra de busqueda
                            globalSearchControl = new L.Control.Search({
                                layer: groupsMap,
                                propertyName: 'name',
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


                    }, 3300);


                },
                error: function(jqXHR, text){
                    console.log(jqXHR);
                    console.log(text);
                },
                complete: function () {
                    getNetwork();

                }
            });
        }

        function eachGroup(feature, layer){
            numGroups++;
            if(layer != null){
                // var lat = feature.geometry.coordinates[1];
                // var lon = feature.geometry.coordinates[0];
//                console.log(layer);

// var urlIcon = '/static/images/map-icon-red.png';
// if (feature.properties.icon != null){
// var urlIcon = feature.properties.icon;
// }

//                 var myIcon = L.icon({
//                     iconUrl: urlIcon,
//                     iconSize: [32, 39],
//                     iconAnchor: [16, 39],
//                     popupAnchor: [16, -20]
//                 });

var size = 15;

    var myIcon = L.divIcon({
          className: "div-icon color31",
          //html: feature.properties.level,
          iconSize: [size, size],
          iconAnchor: [size/2, size/2]

        });



                var title = '<h4>'+feature.properties.name.toUpperCase()+'</h4>';
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +
                    '<li> <i class="fa fa-caret-right"></i> <span id="id">'+' '+feature.properties.coords[0]+' | '+feature.properties.coords[1]+'</span></li>' +
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


function eachValleAburra(feature, layer){
            if(layer != null){
            // console.log(feature);
            
            var style1 = {
                    fill: true,
                    fillColor:'#33ff90',
                    fillOpacity: 1,
                    color : ' #777777',
                    weight: 2
                };


            var title = '<h4>'+feature.properties.NOMBRE_MPI.toUpperCase()+'</h4>';
                
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +

                    '</ul>';
                


                content = content +'</div>';

                layer.setStyle(style1);


            layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
        }
        };

function eachMedellin(feature, layer){
            if(layer != null){
            // console.log(feature);
            
            var style1 = {
                    fill: true,
                    fillColor:'#33ff90',
                    fillOpacity: 1,
                    color : '#777777',
                    weight: 2
                };


            var title = '<h4>'+feature.properties.NOMBRE.toUpperCase()+'</h4>';
                
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +

                    '</ul>';
                


                content = content +'</div>';

                layer.setStyle(style1);


            layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
        }
        };


getGroups();







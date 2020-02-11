
var controlSearchIniatilized = false;
var url_data = '/app/perceptions/?key_word';
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
                var word = jQuery("#text-search-map").val();
                if(word == ''){
                url_data = '/app/perceptions/?key_word';
                }else{
                url_data = '/app/perceptions/?key_word'+'='+word;
                }
                getGroups();
            });

        //proj4.defs('EPSG:3116', '+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        proj4.defs('EPSG:4326', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees');

        
        var opt = {
            'maxHeight' : 300
        };

        jQuery("#searchtext9").keypress(function() {
  console.log( "Handler for .keypress() called." );
});
        
function getComuna5(){
var comuna5Map = L.Proj.geoJson(comuna5,{
                        onEachFeature: eachComuna5
                    });
map.addLayer(comuna5Map);

}

function getNetwork(){

var dash_straight1 = {
        color: '#f25f5c',
        fillColor: '#f25f5c',
        dashArray: 0,
        opacity: 0.8,
        weight: '3',
    };

    L.bezier({
        path: [
[{"lng":-75.573344361037, "lat": 6.27334973009 }, {"lng":-75.5751136, "lat": 6.2831388}],[{"lng":-75.574239045382, "lat":6.2836716184527 }, {"lng":-75.577456355095, "lat":6.2842901520802 }],
[{"lng":-75.57763338089, "lat":6.2848580292889 }, {"lng":-75.576636940241, "lat":6.2850473215541 }],
[{"lng":-75.575766563416, "lat":6.285599201427 }, {"lng":-75.573466569185, "lat":6.2866496378281}],
[{"lng":-75.5858977, "lat":6.2880783}, {"lng":-75.570756196976, "lat":6.2901795151634}],[{"lng":-75.569474101067, "lat":6.2908140373998}, {"lng":-75.5674369, "lat":6.2906412}],[{"lng":-75.569044947624, "lat":6.2917551550886}, {"lng":-75.571839809418, "lat":6.2917684853553}],[{"lng":-75.5709437, "lat":6.2922379}, {"lng":-75.569565296173, "lat":6.2922137160645}],
[{"lng":-75.5668415, "lat":6.2936189}, {"lng":-75.572049021721, "lat":6.2936267211779}],[{"lng":-75.575090646744, "lat":6.2956529104826}, {"lng":-75.5728743, "lat":6.2987183}],[{"lng":-75.56644320488, "lat":6.2993080293524}, {"lng":-75.5603757, "lat":6.2990224}],[{"lng":-75.5657351017, "lat":6.3039548719758}, {"lng":-75.558401942253, "lat":6.3066661774425}],
[{"lng":-75.565016269684, "lat":6.3065702022698}, {"lng":-75.567223727703, "lat":6.3089306531508}],
],

        icon: {
            path: '/static/images/icon-transparent.png'
        }
    }, dash_straight1).addTo(map);

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
                    // if (map.hasLayer(globalGroupsMap)){
                    //     map.removeLayer(globalGroupsMap);
                    // }
                    //  if (map.hasLayer(globalMarkers)){
                    //      map.removeLayer(globalMarkers);
                    // }
                    
                   
                    dataJson = JSON.stringify(gruposJson);
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

                    


                    // var hondaMap = L.Proj.geoJson(honda,{
                    //     onEachFeature: eachHonda
                    // });

                    // var areaHondaMap = L.Proj.geoJson(area_honda,{
                    //     onEachFeature: eachAreaHonda
                    // });

                    // var hondaMap = L.Proj.geoJson(honda,{
                    //     onEachFeature: eachHonda
                    // });
//
                     var markers = L.markerClusterGroup({
                         iconCreateFunction: function(cluster) {
                             return L.divIcon({ html: '<div class="icon-map"><div>' + cluster.getChildCount() + '</div></div>' });
                         }
                     });

                    
                    markers.addLayer(groupsMap);
                    
                    map.addLayer(groupsMap);
                    
                    // map.addLayer(hondaMap);
                    // map.addLayer(groupsMap);

                    

    

                    jQuery("#img-search-map").html("");
                    // map.addLayer(groupsMap);
                    // map.addLayer(hondaMap);


                    setTimeout(function(){
                        if(!controlSearchIniatilized){
                            // codigo para implementar la barra de busqueda
                            globalSearchControl = new L.Control.Search({
                                layer: groupsMap,
                                propertyName: 'nombre',
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

                }
            });
        }


function eachComuna5(feature, layer){
            if(layer != null){
            // console.log(feature);
            
            var style1 = {
                    fill: true,
                    fillColor:'#22d6f1',
                    fillOpacity: 1,
                    color : '#fff',
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

        function eachGroup(feature, layer){
            numGroups++;
            if(layer != null){

                

                // var lat = feature.geometry.coordinates[1];
                // var lon = feature.geometry.coordinates[0];
//                console.log(layer);
                
                var urlIcon = '/media/filer_public/eb/9f/eb9fe327-9052-4862-a3a8-f79810e28027/map-icon-red.png';
                
                console.log(urlIcon);

                var myIcon = L.icon({
                    iconUrl: urlIcon,
                    iconSize: [32, 39],
                    iconAnchor: [16, 35],
                    popupAnchor: [16, -20]
                });
                var title = '<h4>'+feature.geometry.properties.nombre.toUpperCase()+'</h4>';
                
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +
                    '<li> <i class="fa fa-caret-right"></i> <span>'+' '+feature.geometry.coordinates[0]+' | '+feature.geometry.coordinates[1]+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>No Integrantes: </b>'+' '+feature.geometry.properties.num_integrantes+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Comuna: </b>'+' '+feature.geometry.properties.id_comuna+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Telefono: </b>'+' '+feature.geometry.properties.telefono+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Email: </b>'+' '+feature.geometry.properties.email+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Dirección: </b>'+' '+feature.geometry.properties.direccion+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Facebook: </b>'+' '+feature.geometry.properties.facebook+'</span></li>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Actividades: </b>'+' '+feature.geometry.properties.actividades+'</span></li>' +
                    '</ul>';
                


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


// function eachHonda(feature, layer){
//             if(layer != null){

//             var styleG2 = {
//             fill: false,
//             fillColor:'#f0e428',
//             fillOpacity: 1.0,
//             color : '#59abd5',
//             weight: 3
//             };

//             //L.Util.setOptions(layer, { style: styleG2 });

//                 var title = '<h4>Honda</h4>';
//                 var content = '<div class="content-info-marker">' + title;
                    
                
//                 content = content +'</div>';


//             layer.setStyle(styleG2);


//                 layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
//             }
//         };


//         function eachAreaHonda(feature, layer){
//             if(layer != null){

//             var styleG2 = {
//             fill: false,
//             fillColor:'#f0e428',
//             fillOpacity: 1.0,
//             color : '#50514f',
//             weight: 3
//             };

//             //L.Util.setOptions(layer, { style: styleG2 });

//                 var title = '<h4>Area Honda</h4>';
//                 var content = '<div class="content-info-marker">' + title;
                    
                
//                 content = content +'</div>';


//             layer.setStyle(styleG2);


//                 layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
//             }
//         };

        getComuna5();
        getGroups();
        getNetwork();




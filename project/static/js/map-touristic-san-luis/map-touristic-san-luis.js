
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
            center: [6.090032158646045, -74.92229461669923],
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

        proj4.defs('EPSG:3116', '+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        //proj4.defs('EPSG:4326', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees');

        
        var opt = {
            'maxHeight' : 300
        };

        jQuery("#searchtext9").keypress(function() {
  console.log( "Handler for .keypress() called." );
});
        
        function getSitios(){
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
                    
                   
                    dataJson = JSON.stringify(sitios);
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

                    var sitiosMap = L.Proj.geoJson(dataJson,{
                        onEachFeature: eachSitio
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

                    
                    
                    markers.addLayer(sitiosMap);
                    
                    map.addLayer(markers);
                    // map.addLayer(hondaMap);
                    // map.addLayer(groupsMap);

                    

    

                    jQuery("#img-search-map").html("");
                    // map.addLayer(groupsMap);
                    // map.addLayer(hondaMap);


                    setTimeout(function(){
                        if(!controlSearchIniatilized){
                            // codigo para implementar la barra de busqueda
                            globalSearchControl = new L.Control.Search({
                                layer: markers,
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

                }
            });
        }

        function eachSitio(feature, layer){
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
                    iconAnchor: [0, 39],
                    popupAnchor: [16, -20]
                });
                var title = '<h4>'+feature.properties.name.toUpperCase()+'</h4>';
                
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>Descripción: </b>'+' '+feature.properties.description+'</span></li>' +
                    '</ul>' + 
                    '<img src="'+feature.properties.image+'">'

                    ;
                


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

        getSitios();



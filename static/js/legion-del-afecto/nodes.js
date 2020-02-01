
var controlSearchIniatilized = false;
var url_data = '/app/perceptions/?key_word';
var globalGroupsMap;
var globalMarkers;

var local_ids = [[378, 369,368,411], [428, 465,474,435,390,523,505,408,406,375,395,401,449], [544, 438,452,522], [212, 178,219,202], [640, 615], [1108, 557,1107,605,607,544], [756, 697, 613], [872, 848, 890, 869, 832, 877], [879, 827, 893, 868, 976, 1023, 822], [725, 685, 587, 710, 714, 693, 591, 563], [773, 748, 755, 752, 778], [387, 293, 298, 184, 163, 1119, 277, 235], [917, 1031, 970, 991, 961, 931, 953, 1027, 1045, 994, 997, 1028], [816, 799, 801, 901, 884, 642, 935, 984, 921], [723, 762, 784, 758, 639], [514, 535, 493, 527, 534, 515, 503, 520, 568, 540, 565, 402], [259, 198, 196, 233, 199, 200, 252, 258], [180, 131, 241, 181], [22, 6, 87, 109, 136, 149], [77, 100, 139, 78, 85, 112, 142, 99, 1093, 137, 155, 145, 159], [104, 86, 90, 1104, 91, 72, 123], [80, 37, 81, 74, 73]];
var idClasses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 21, 16, 17, 0, 11, 15, 22, 23, 19, 20, 10, 18];


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
        
        function getNodes(){
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
                    
                   
                    dataJson = JSON.stringify(nodes);
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

                    var nodesMap = L.Proj.geoJson(dataJson,{
                        onEachFeature: eachNode
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
                     // var markers = L.markerClusterGroup({
                     //     iconCreateFunction: function(cluster) {
                     //         return L.divIcon({ html: '<div class="icon-map"><div>' + cluster.getChildCount() + '</div></div>' });
                     //     }
                     // });

                    // markers.addLayer(nodesMap);
                    
                    map.addLayer(nodesMap);
                    // map.addLayer(hondaMap);
                    // map.addLayer(groupsMap);

                    

    

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

        function getLocalNetworks() {
    // dataJson = JSON.parse(localNetwork);
    dataJson = localNetwork;
                // console.log(dataJson);
                //
                

                var localNetworksMap = L.geoJson(dataJson,{
                    onEachFeature: eachLocalNetwork
                });

                map.addLayer(localNetworksMap);
                //
                
    
}

function getNationalNetworks() {
        
        // dataJson = JSON.parse(nacionalNetwork);
        dataJson = nacionalNetwork;
                // console.log(dataJson);
                //
                

                var nationalNetworksMap = L.geoJson(dataJson,{
                    onEachFeature: eachNationalNetwork
                });

                map.addLayer(nationalNetworksMap);
                //
                
        
    }

    function eachLocalNetwork(feature, layer){
        if(layer != null){
            // console.log(feature);
            var content = '<div class="content-info-marker">' + feature.properties.nombre + '</div>';

            // layer.defaultOptions.riseOnHover = true;

            layer.setStyle({color:"#59abd5", weight:2, className:"line-fluor"});
            layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300});
        }
    };


    function eachNationalNetwork(feature, layer){
        if(layer != null){
            // console.log(feature);
            var content = '<div class="content-info-marker">' + feature.properties.nombre + '</div>';

            // layer.defaultOptions.riseOnHover = true;

            layer.setStyle({color:"#59abd5", weight:2, className:"line-fluor"});
            layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300});
        }
    };


        function eachNode(feature, layer){
            if(layer != null){
            // console.log(feature);
            var urlIcon = 'images/categories/icon-otra.svg';
            var lat = feature.geometry.coordinates[1];
            var long = feature.geometry.coordinates[0];
            


            var title = '<h4>'+feature.properties.nombre_mpi.toUpperCase()+'</h4>';
                
                var content = '<div class="content-info-marker">' + title +
                    '<ul>' +
                    '<li> <i class="fa fa-caret-right"></i> <span><b>No Actividades Realizadas: </b>'+' '+feature.properties.num+'</span></li>' +

                    '</ul>';
                


                content = content +'</div>';

        num = feature.properties.num;
                    if(num >= 0 && num < 10){
                        size = 13;
                        color = "#CEE3F6"
                    }else if(num >= 10 && num < 20){
                        size = 14;
                    }else if(num >= 20 && num < 30){
                        size = 15;
                    }else if(num >= 30 && num < 40){
                        size = 16;
                    }else if(num >= 40 && num < 50){
                        size = 17;
                    }else if(num >= 50 && num < 60){
                        size = 18;
                    }else if(num >= 60 && num < 70){
                        size = 19;

                    }else if(num >= 70 && num < 80){
                        size = 20;

                    }else if(num >= 80 && num < 90){
                        size = 21;

                    }else if(num >= 90 && num < 100){
                        size = 22;

                    }else if(num >= 100 && num < 110){
                        size = 23;

                    }else if(num >= 110 && num < 120){
                        size = 24;

                    }else if(num >= 120 && num < 130){
                        size = 25;

                    }else if(num >= 130 && num < 140){
                        size = 26;
                    }else if(num >= 140 && num < 150){
                        size = 27;
                    }else if(num >= 150 && num < 160){
                        size = 28;
                    }else if(num >= 160 && num < 170){
                        size = 29;
                    }else if(num >= 170 && num < 180){
                        size = 30;
                    }else if(num >= 180 && num < 190){
                        size = 31;
                    }else if(num >= 190 && num < 200){
                        size = 32;
                    }else if(num >200){
                        size = 33;
                    }
                    var valZ = "second-z"
                    if(num > 100){
                        valZ = "main-z"
                    }
            var theClass = getClassColor(feature.properties.id);
            var idGroup = getIdGroup(feature.properties.id);
            // console.log("idGropup: ", idGroup);
            // arrNodosLocales[idGroup].addLayer(layer);
            var myIcon = L.divIcon({
                className: "div-icon "+theClass,
                html: "",
                iconSize: [size, size],
                iconAnchor: [5, 5],
                // style: "z-index: "+toString(num)+";!important"

            });

            // console.log(myIcon);
            layer.setIcon(myIcon);
            // console.log(layer);
            // layer.defaultOptions.riseOnHover = true;


            layer.bindPopup(content, {maxWidth:300, minWidth: 200, maxHeight:300})
        }
        };


function getClassColor(id) {
        for(var i=0;i < local_ids.length; i++){
            if(local_ids[i].indexOf(id) != -1){
                return "color"+i;
            }
        }
        return "color1";
    }

    function getIdGroup(id){
        for(var i=0;i < local_ids.length; i++){
            if(local_ids[i].indexOf(id) != -1){
                return i;
            }
        }
        return 0;
    }

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

        getNodes();
        getLocalNetworks();
        getNationalNetworks();



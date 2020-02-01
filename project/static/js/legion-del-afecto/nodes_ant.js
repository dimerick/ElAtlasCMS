
  var windowAnt = null;
  var numRequestData = 0;
  var controlSearchIniatilized;
  var globalNodesMap;
  var globalNodesMarkersMap;
  var globalNodesSearchControl;

  var globalLocalNetworksMap;
    var globalNationalNetworksMap;

    var local_ids = [[378, 369,368,411], [428, 465,474,435,390,523,505,408,406,375,395,401,449], [544, 438,452,522], [212, 178,219,202], [640, 615], [1108, 557,1107,605,607,544], [756, 697, 613], [872, 848, 890, 869, 832, 877], [879, 827, 893, 868, 976, 1023, 822], [725, 685, 587, 710, 714, 693, 591, 563], [773, 748, 755, 752, 778], [387, 293, 298, 184, 163, 1119, 277, 235], [917, 1031, 970, 991, 961, 931, 953, 1027, 1045, 994, 997, 1028], [816, 799, 801, 901, 884, 642, 935, 984, 921], [723, 762, 784, 758, 639], [514, 535, 493, 527, 534, 515, 503, 520, 568, 540, 565, 402], [259, 198, 196, 233, 199, 200, 252, 258], [180, 131, 241, 181], [22, 6, 87, 109, 136, 149], [77, 100, 139, 78, 85, 112, 142, 99, 1093, 137, 155, 145, 159], [104, 86, 90, 1104, 91, 72, 123], [80, 37, 81, 74, 73]];
    var idClasses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 21, 16, 17, 0, 11, 15, 22, 23, 19, 20, 10, 18];
    // var crs = new L.Proj.CRS('EPSG:4326',
    //     '+proj=longlat +datum=WGS84 +no_defs',
    //     {
    //         resolutions: [
    //             8192, 4096, 2048, 1024, 512, 256, 128
    //         ],
    //         origin: [0, 0]
    //     });

  // funcion encargada de obtener los grupos registrados

  function getNodes() {
	 // dataJson = JSON.parse(nodes);
	 dataJson = nodes;
              // console.log(dataJson);
              //
              if(map.hasLayer(globalNodesMap)){
                  map.removeLayer(globalNodesMap);
              }
              if(map.hasLayer(globalNodesMarkersMap)){
                  map.removeLayer(globalNodesMarkersMap);
              }
              if(map.hasLayer(globalNodesSearchControl)){
                  map.removeLayer(globalNodesSearchControl);

              }

              var nodesMap = L.geoJson(dataJson,{
                  onEachFeature: eachNode
              });

              map.addLayer(nodesMap);

              globalNodesMap= nodesMap;


              // var markersActivities = L.markerClusterGroup();
              // markersActivities.addLayer(activitiesMap);
              // console.log(markersActivities);
              // map.addLayer(markersActivities);
              //
              // globalMarkersActivitiesMap = markersActivities;
              //
              setTimeout(function(){
                  if(!controlSearchIniatilized){
                      // codigo para implementar la barra de busqueda
                      globalSearchControl = new L.Control.Search({
                          layer: nodesMap,
                          propertyName: 'nombre_mpi',
                          marker: false,
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
                              // globalMarkersMap.refreshClusters();

                          });

                      }).on('search:collapsed', function(e) {
                          // map.removeLayer(e.layer);
                          // globalMarkersMap.refreshClusters();
                      });
                      map.addControl(globalSearchControl);  //inizialize search control
                      controlSearchIniatilized = true;
                  }


              }, 3300); 
	  
  }

  // function getNodes() {
      // console.log("Trayendo actividades");
      // $.ajax({
          // url:   'http://18.221.62.96:8000/redes-afectivas/nodes',
          // url:   'http://18.221.62.96:8000/redes-afectivas/municipios',
          // type:  'get',
          // beforeSend: function () {
              // console.log("Procesando, espere por favor...");
          // },
          // success: function (data, textStatus, jqXHR){
              // dataJson = JSON.parse(data);
              // console.log(dataJson);
              
              // if(map.hasLayer(globalNodesMap)){
                  // map.removeLayer(globalNodesMap);
              // }
              // if(map.hasLayer(globalNodesMarkersMap)){
                  // map.removeLayer(globalNodesMarkersMap);
              // }
              // if(map.hasLayer(globalNodesSearchControl)){
                  // map.removeLayer(globalNodesSearchControl);

              // }

              // var nodesMap = L.geoJson(dataJson,{
                  // onEachFeature: eachNode
              // });

              // map.addLayer(nodesMap);

              // globalNodesMap= nodesMap;


              // var markersActivities = L.markerClusterGroup();
              // markersActivities.addLayer(activitiesMap);
              // console.log(markersActivities);
              // map.addLayer(markersActivities);
              
              // globalMarkersActivitiesMap = markersActivities;
              
              // setTimeout(function(){
                  // if(!controlSearchIniatilized){
                      // codigo para implementar la barra de busqueda
                      // globalSearchControl = new L.Control.Search({
                          // layer: nodesMap,
                          // propertyName: 'nombre_mpi',
                          // marker: false,
                          // moveToLocation: function(latlng, title, map) {
                              // var zoom = map.getBoundsZoom(L.latLngBounds([latlng,latlng]));
                              // console.log(zoom);
                              // map.setView(latlng, zoom); // access the zoom
                          // }
                      // });

                      // globalSearchControl.on('search:locationfound', function(e){
                          // map.addLayer(e.layer);
                          // if(e.layer._popup)
                              // e.layer.openPopup();
                          // e.layer.on('popupclose', function (a) {
                              // map.removeLayer(e.layer);
                              // globalMarkersMap.refreshClusters();

                          // });

                      // }).on('search:collapsed', function(e) {
                          // map.removeLayer(e.layer);
                          // globalMarkersMap.refreshClusters();
                      // });
                      // map.addControl(globalSearchControl);  //inizialize search control
                      // controlSearchIniatilized = true;
                  // }


              // }, 3300);

          // },
          // error: function(jqXHR, text){
              // console.log(jqXHR);
              // console.log(text);
          // },
          // complete: function () {
              // console.log("Traida de actividades finalizada");

          // }
      // });
  // }

function getLocalNetworks() {
	// dataJson = JSON.parse(localNetwork);
	dataJson = localNetwork;
                // console.log(dataJson);
                //
                if(map.hasLayer(globalLocalNetworksMap)){
                    map.removeLayer(globalLocalNetworksMap);
                }

                var localNetworksMap = L.geoJson(dataJson,{
                    onEachFeature: eachLocalNetwork
                });

                map.addLayer(localNetworksMap);
                //
                globalLocalNetworksMap = localNetworksMap;
	
}

    // function getLocalNetworks() {
        // console.log("Trayendo actividades");
        // $.ajax({
            // url:   'http://18.221.62.96:8000/redes-afectivas/local-networks',
            // url:   'http://18.221.62.96:8000/redes-afectivas/municipios',
            // type:  'get',
            // beforeSend: function () {
                // console.log("Procesando, espere por favor...");
            // },
            // success: function (data, textStatus, jqXHR){
                // dataJson = JSON.parse(data);
                // console.log(dataJson);
                
                // if(map.hasLayer(globalLocalNetworksMap)){
                    // map.removeLayer(globalLocalNetworksMap);
                // }

                // var localNetworksMap = L.geoJson(dataJson,{
                    // onEachFeature: eachLocalNetwork
                // });

                // map.addLayer(localNetworksMap);
                
                // globalLocalNetworksMap = localNetworksMap;
                

                // var markersActivities = L.markerClusterGroup();
                // markersActivities.addLayer(activitiesMap);
                // console.log(markersActivities);
                // map.addLayer(markersActivities);
                
                // globalMarkersActivitiesMap = markersActivities;
                


            // },
            // error: function(jqXHR, text){
                // console.log(jqXHR);
                // console.log(text);
            // },
            // complete: function () {
                // console.log("Local Networks Finalizo");

            // }
        // });
    // }
	
	function getNationalNetworks() {
		
		// dataJson = JSON.parse(nacionalNetwork);
		dataJson = nacionalNetwork;
                // console.log(dataJson);
                //
                if(map.hasLayer(globalNationalNetworksMap)){
                    map.removeLayer(globalNationalNetworksMap);
                }

                var nationalNetworksMap = L.geoJson(dataJson,{
                    onEachFeature: eachNationalNetwork
                });

                map.addLayer(nationalNetworksMap);
                //
                globalNationalNetworksMap = nationalNetworksMap;
		
	}

    // function getNationalNetworks() {
        // console.log("Trayendo actividades");
        // $.ajax({
            // url:   'http://18.221.62.96:8000/redes-afectivas/nacional-networks',
            // type:  'get',
            // beforeSend: function () {
                // $("#loading").html("<img src=\"images/loader.gif\">");
                // console.log("Procesando, espere por favor...");
            // },
            // success: function (data, textStatus, jqXHR){
                // dataJson = JSON.parse(data);
                // console.log(dataJson);
                
                // if(map.hasLayer(globalNationalNetworksMap)){
                    // map.removeLayer(globalNationalNetworksMap);
                // }

                // var nationalNetworksMap = L.geoJson(dataJson,{
                    // onEachFeature: eachNationalNetwork
                // });

                // map.addLayer(nationalNetworksMap);
                
                // globalNationalNetworksMap = nationalNetworksMap;
                

                // var markersActivities = L.markerClusterGroup();
                // markersActivities.addLayer(activitiesMap);
                // console.log(markersActivities);
                // map.addLayer(markersActivities);
                
                // globalMarkersActivitiesMap = markersActivities;
                


            // },
            // error: function(jqXHR, text){
                // console.log(jqXHR);
                // console.log(text);
            // },
            // complete: function () {
                // console.log("Local Networks Finalizo");
                // $("#loading").html("");

            // }
        // });
    // }

   

    function eachNode(feature, layer){
        if(layer != null){
            // console.log(feature);
            var urlIcon = 'images/categories/icon-otra.svg';
            var lat = feature.geometry.coordinates[1];
            var long = feature.geometry.coordinates[0];
            var title = '<h4>'+feature.properties.nombre_mpi.toUpperCase()+'</h4>';
            var content = '<div class="content-info-marker">'+
                        '<ul id="data-group">' +
                        '<li title="Lugar"> <i class="fa fa-globe"> </i> <span id="place">'+' '+feature.properties.nombre_mpi+'</span></li>' +
            '<li title="No. Actividades"> <i class="fa fa-globe"> </i> <span id="place">'+' '+feature.properties.num+'</span></li>' +
                    '</ul>'+
                    '<ul id="categories-group">';

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
//providers
//   var providers = {};
layers = [];


  openStreet = {
    title: 'Osm',
    icon: 'images/icons/openstreetmap_mapnik.png',
    layer: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})
  };
  layers.push(openStreet);
  esriWorldImagery = {
    title: 'World Imagery',
    icon: 'images/icons/esri_worldterrain.png',
    layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })
  };
  layers.push(esriWorldImagery);
  // var openStreet = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});

  // var openStreetMapHOT = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
  // });

  // var esriWorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  //   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  // });

  // var esriWorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  //   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
  // });
  //
  //
  // var thunderforestTransportDark = L.tileLayer('http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=016cef82fca146f2a068c31ae2b17d12', {
  //   attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   maxZoom: 22,
  //   apikey: '<your apikey>'
  // });
  //
  // var cartoDBDarkMatter = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  //   subdomains: 'abcd',
  //   maxZoom: 19
  // });
  //
  //
  // var openStreetMapBlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
  //   maxZoom: 18,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // });
  //
  // var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
  //   attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
  //   bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
  //   minZoom: 1,
  //   maxZoom: 8,
  //   format: 'jpg',
  //   time: '',
  //   tilematrixset: 'GoogleMapsCompatible_Level'
  // });
L.control.iconL
    var map = L.map('map', {
        center: [4.96871620165794, -73.93611395955086],
        zoom: 3,
        maxZoom: 18,
        minZoom: 3,
        // layers: [openStreet, esriWorldImagery],
        zoomControl: false,
    });



// añado un logo al mapa

  var logo = L.Control.extend({
    options: {
      position: 'topright'
    },

    onAdd: function (map) {
      // create the control container with a particular class name
      var container = L.DomUtil.create('div', 'logo');

      container.innerHTML =
        '<img id=logo src="images/logo-elatlas.png">';
      return container;
    }
  });

  map.addControl(new logo());



    // controles para reducir y aumentar el zoom del mapa


    $("#lessZoom").click(function () {
        console.log("Has dado click");
        map.zoomOut();

    });
    $("#moreZoom").click(function () {
        console.log("Has dado click");
        map.zoomIn();
    });




  // var baseMaps = {
  //   "OpenStreetMap": openStreet,
  //   // "OpenStreetMap.HOT": openStreetMapHOT,
  //   "Esri.WorldImagery": esriWorldImagery
  //   // "Esri.WorldStreetMap": esriWorldStreetMap,
  //   // "Thunderforest.TransportDark": thunderforestTransportDark,
  //   // "CartoDB.DarkMatter": cartoDBDarkMatter,
  //   // "OpenStreetMap.BlackAndWhite": openStreetMapBlackAndWhite,
  //   // "NASAGIBS.ViirsEarthAtNight2012": NASAGIBS_ViirsEarthAtNight2012
  // };

  // L.control.layers(baseMaps).addTo(map);

  L.control.iconLayers(layers).addTo(map);


    /*<MODALS>*/
    //Modal para mostrar informacion sobre el programa
    var info = $("#info-el-atlas").html();

    L.DomEvent
        .on(document.querySelector('.open-modal-info'), 'click', function() {
            map.fire('modal', {
                title: '',
                content: info,
                template: ['<div class="modal-header"><h2>{title}</h2></div>',
                    '<hr>',
                    '<div class="modal-body">{content}</div>'
                    // '<div class="modal-footer">',
                    // '<button class="topcoat-button--large {OK_CLS}">{okText}</button>',
                    // '<button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
                    // '</div>'
                ].join(''),

                okText: 'Ok',
                cancelText: 'Cancel',
                OK_CLS: 'modal-ok',
                CANCEL_CLS: 'modal-cancel',

                //width: 600,

                // onShow: function(evt) {
                //     var modal = evt.modal;
                //     L.DomEvent
                //         .on(modal._container.querySelector('.modal-ok'), 'click', function() {
                //             // alert('you pressed ok');
                //             modal.hide();
                //         })
                //         .on(modal._container.querySelector('.modal-cancel'), 'click', function() {
                //             // alert('You pressed cancel');
                //             modal.hide();
                //         });
                // }
            });
        });





    //Codigo Modals
//Modal para mostrar informacion sobre el programa
    var info_menu = $("#gallery-menu").html();
    console.log(info);
    L.DomEvent
        .on(document.querySelector('.open-modal-gallery'), 'click', function() {
            map.fire('modal', {
                title: '',
                content: info_menu,
                template: ['<div class="modal-header"><h2>{title}</h2></div>',
                    '<hr>',
                    '<div class="modal-body">{content}</div>'
                    // '<div class="modal-footer">',
                    // '<button class="topcoat-button--large {OK_CLS}">{okText}</button>',
                    // '<button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
                    // '</div>'
                ].join(''),

                okText: 'Ok',
                cancelText: 'Cancel',
                OK_CLS: 'modal-ok',
                CANCEL_CLS: 'modal-cancel',

                //width: 600,

                // onShow: function(evt) {
                //     var modal = evt.modal;
                //     L.DomEvent
                //         .on(modal._container.querySelector('.modal-ok'), 'click', function() {
                //             // alert('you pressed ok');
                //             modal.hide();
                //         })
                //         .on(modal._container.querySelector('.modal-cancel'), 'click', function() {
                //             // alert('You pressed cancel');
                //             modal.hide();
                //         });
                // }
            });
        });

    /*</MODALS>*/


 getNodes();
  getLocalNetworks();
    getNationalNetworks();




var num = 0;
var ant, active;
var paro = [
  {
    fecha: "Junio 19",
    tiempos: [{
      hora: "",
      incidentes: [
        {
          id: "june19-1",
          title: "Intento de quema de un bus",
          tipo: "bus-fire",
          img: "movilizacion.jpg",
          coords: "2207, 1961",
          descripcion: "En la carrera 79 con calle 91 se presenta un bloqueo en la vía, e intento de quema de un bus"
        },
        {
          id: "june19-2",
          title: "Tachuelas en toda la via",
          tipo: "tachuelas-via",
          img: "",
          coords: "1777, 1901",
          descripcion: "Carrera 74 * calle 104, tachuelas en toda la via"
        },
        {
          id: "june19-3",
          title: "Disturbios y amenaza de petardo",
          tipo: "disturbio",
          img: "",
          coords: "1706, 1747",
          descripcion: "Carrera 65 x calle 104, disturbios y amenazas de colocar petardo en la alcaldía comunal N 2"
        },
        {
          id: "june19-4",
          title: "Tachuelas en toda la via",
          tipo: "tachuelas-via",
          img: "",
          coords: "1339, 1532",
          descripcion: "Autopista medellin Bogotá, tachuelas en toda la via."
        },
        {
          id: "june19-5",
          title: "Disturbios y amenaza de petardo",
          tipo: "disturbio",
          img: "",
          coords: "1706, 1747",
          descripcion: "Carrera 65 * calle 104, disturbios y amenaza de colocar petardo en la alcaldía comunal nro 2."
        }
      ]
    }
    ]
},
  {
    fecha: "Junio 20",
    tiempos: [{
      hora: "6 am a 9:30 am",
      incidentes: [
        {
          id: "june20-1",
          title: "Muere un agente de la policía ",
          tipo: "muerte",
          img: "",
          coords: "2296, 2068",
          descripcion: "En la calle 80a  con carrera 86, a las 6: 20 am, muere un agente de la policía por herida de Bala, Argiro Díaz Guerrero"
        }
      ]
    },
      {
        hora: "9: 30 a 10:30 am",
        incidentes: [
          {
            id: "june20-2",
            title: "Barricadas y llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "2216, 2015",
            descripcion: "A las 10:35 en la calle 91 con carrera 80, ruta de buses, colocaron barricadas y llantas incendiadas"
          },
          {
            id: "june20-3",
            title: "Quema vehículo de valores",
            tipo: "car-fire",
            img: "",
            coords: "1985, 1772",
            descripcion: "b)	Carrera 68 entre calles 95 y 98 se presenta quema de un vehículo perteneciente a valorización, de placas OM5977, por 50 hombres armados del M-19"
          }
        ]
      },
      {
        hora: "11:30 a 12:15",
        incidentes: [
          {
            id: "june20-4",
            title: "Explosión petardo",
            tipo: "petardo",
            img: "",
            coords: "2194, 2308",
            descripcion: "Estallo un petardo en una casa finca en Villa Claret colocado por un joven de nombre Guillermo, residente en la calle 90 n 95 – 5, moreno, delgado, viste camisa blanca."
          },
          {
            id: "june20-5",
            title: "Pedreas",
            tipo: "disturbio",
            img: "",
            coords: "2092, 1794",
            descripcion: "Carrera 70 con calle 94 – pedreas"
          },
          {
            id: "june20-6",
            title: "Joven herido",
            tipo: "herido",
            img: "",
            coords: "2023, 2033",
            descripcion: "c)	Carrera 80 con calle 97 A fue herido por un agente de la policía el joven Gonzalo de J Mejía Quintero, de 18 años de edad."
          }
        ]
      },
      {
        hora: "12:30 a 2:00 pm",
        incidentes: [
          {
            id: "june20-7",
            title: "Barricadas con llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "1862, 1928",
            descripcion: "Calle 101B + carrera 74, barricadas con llantas encendidas"
          },
          {
            id: "june20-8",
            title: "Llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "2228, 1864",
            descripcion: "Carera 72 B, cerca del hospital la María incendio de llantas"
          }
        ]
      },
      {
        hora: "2 a 3:30 pm",
        incidentes: [
          {
            id: "june20-9",
            title: "Llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "2165, 1897",
            descripcion: "Calle 92 * 74, llantas encendidas"
          }
        ]
      },
      {
        hora: "3:30 a 5 pm",
        incidentes: [
          {
            id: "june20-10",
            title: "Barricadas con llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "2161, 1823",
            descripcion: "Barricadas con llantas incendiadas en la carrera 72 con calle 92"
          },
          {
            id: "june20-11",
            title: "Barricadas con llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "2166, 1899",
            descripcion: "Barricadas con llantas incendiadas y cobrando peaje en la carrera 74 con calle 92"
          }
        ]
      },
      {
        hora: "5 a 7 pm",
        incidentes: [
          {
            id: "june20-12",
            title: "Pedreas a vehiculos",
            tipo: "disturbio",
            img: "",
            coords: "2307, 1981",
            descripcion: "Calle 81 * carrera 80 – pedreas a vehículos"
          }
        ]
      },
      {
        hora: "7 a 8 pm",
        incidentes: [
          {
            id: "june20-13",
            title: "Explosión petardo",
            tipo: "petardo",
            img: "",
            coords: "1778, 1918",
            descripcion: "Calle 104 por 74 petardos"
          },
          {
            id: "june20-14",
            title: "Explosión petardo",
            tipo: "petardo",
            img: "",
            coords: "2088, 1776",
            descripcion: "Calle 94 por 69 petardos "
          },
          {
            id: "june20-15",
            title: "Explosión petardo",
            tipo: "petardo",
            img: "",
            coords: "1930, 1780",
            descripcion: "Carrera 68 entre 98 y 99 petardos"
          },
          {
            id: "june20-16",
            title: "Bomba",
            tipo: "bomba",
            img: "",
            coords: "2014, 1624",
            descripcion: "Barrio tricentenario, bomba cerca  a la cancha"
          },
          {
            id: "june20-17",
            title: "Explosión petardo",
            tipo: "petardo",
            img: "",
            coords: "1846, 1705",
            descripcion: "Calle 102 por 64 C, puente de belalcazar, petardo que estalló"
          },
          {
            id: "june20-18",
            title: "Llantas piedras y gasolina",
            tipo: "llantas-fire",
            img: "",
            coords: "1847, 1659",
            descripcion: "Calle 102 entre 64 C y 63 E, llantas piedras, gasolina"
          },
          {
            id: "june20-19",
            title: "Disturbios, piedra, bala y barricadas",
            tipo: "llantas-fire",
            img: "",
            coords: "2222, 1783",
            descripcion: "Alfonso López, disturbios, piedra, bala, barricadas. "
          }
        ]
      },
      {
        hora: "8 a 9 pm",
        incidentes: [
          {
            id: "june20-20",
            title: "Buseta abaleada",
            tipo: "arma",
            img: "",
            coords: "2217, 1694",
            descripcion: "En el barrio Francisco Antonio Zea, abalearon una buseta"
          },
          {
            id: "june20-21",
            title: "Iglesia apedreada",
            tipo: "disturbio",
            img: "",
            coords: "1814, 1903",
            descripcion: "La iglesia la balbanera, ubicada en la calles 103 con 74 los feligreses fueron sacados por la sacristía, ya que fue apedreada por manifestantes"
          },
          {
            id: "june20-22",
            title: "Barricadas",
            tipo: "llantas-fire",
            img: "",
            coords: "1753, 1931",
            descripcion: "En pedregal en la carrera 74 c con calle 105 a, 105b, 105f, barricadas"
          },
          {
            id: "june20-23",
            title: "Buseta apedreada",
            tipo: "disturbio",
            img: "",
            coords: "1789, 1727",
            descripcion: "Buseta placas TN 10-70 del barrio Florencia, fue apedreada en la antigua plaza de mercado, los pasajeros fueron bajados del mismo."
          },
          {
            id: "june20-24",
            title: "Tachuelas",
            tipo: "tachuelas-via",
            img: "",
            coords: "1776, 1896",
            descripcion: "Tachuelas en la cra 74 con la 104"
          },
          {
            id: "june20-25",
            title: "2 Agentes heridos",
            tipo: "herido",
            img: "",
            coords: "2001, 1687",
            descripcion: "Terminal del viejo diamante, aporrearon dos agentes, hay piedras, bombas y llantas."
          }
        ]
      },
      {
        hora: "9 a 10 pm",
        incidentes: [
          {
            id: "june20-26",
            title: "Llantas incendiadas",
            tipo: "llantas-fire",
            img: "",
            coords: "1606, 1912",
            descripcion: "Belalcazar, llantas incendiadas, carrera 74 entre calle 108 y 115, jóvenes tirando piedras"
          },
          {
            id: "june20-27",
            title: "Apagon",
            tipo: "apagon",
            img: "",
            coords: "1612, 2049",
            descripcion: "Cra 77 E, terminal barrio Santander, no hay luz"
          },
          {
            id: "june20-28",
            title: "Barricada",
            tipo: "llantas-fire",
            img: "",
            coords: "1775, 1899",
            descripcion: "Calle 104 con carrera 74, unas 200 personas, barricada"
          }
        ]
      },
      {
        hora: "10 a 11 pm",
        incidentes: [
          {
            id: "june20-29",
            title: "Ataque a puesto de salud",
            tipo: "petardo",
            img: "",
            coords: "1775, 1899",
            descripcion: "En la calle 104 * por carrera 74, hay barricadas y están arrojando petardos, se tomaron toda la carrera 74 hasta la calle 113 y están atacando el puesto de salud."
          },
          {
            id: "june20-30",
            title: "Explosion petardos en puente",
            tipo: "petardo",
            img: "",
            coords: "1770, 1715",
            descripcion: "Otros dos petardos en el puente peatonal del barrio belalcazar."
          },
          {
            id: "june20-31",
            title: "Buseta abaleada",
            tipo: "arma",
            img: "",
            coords: "1641, 1911",
            descripcion: "En la vía Florencia abalearon buseta, ocasionándole varias perforaciones y rupturas de vidrios. No hubo heridos. La buseta fue abandonada en la Alcaldía comunal Nro. 2"
          }
        ]
      }
    ]
  }
]


jQuery(".controls a").click(function () {
  console.log("Hass dado click");
});
function loadNav(){
  var text = '';
  jQuery.each(paro, function( i1, dia ) {
    text += '<div class="day">';
text += '<h3 class="accordion"><i class="fa fa-calendar" aria-hidden="true"></i> '+dia.fecha+'</h3>';
text += '<div class="panel">';
jQuery.each(dia.tiempos, function( i2, tiempo ) {
      text += '<div class="time">' +
        '<h4><i class="fa fa-clock-o" aria-hidden="true"></i> '+tiempo.hora+'</h4>';
      text += '<ul>';
      jQuery.each(tiempo.incidentes, function( i3, incidente ) {
text += '<li><div class="controls"> <a href="#" rel="'+incidente.id+'"><i class="fa fa-angle-right" aria-hidden="true"></i> '+incidente.title+'</a> </div> </li>';
      });
      text += '</ul>';
      text += '</div>';
    });
text += '</div>';
    text += '</div>';
  });
  jQuery("#nav-paro-1985").html(text);
}

loadNav();

function loadPoints(){
  var text = '';
  jQuery.each(paro, function( i1, dia ) {

    jQuery.each(dia.tiempos, function( i2, tiempo ) {

      jQuery.each(tiempo.incidentes, function( i3, incidente ) {
text += ' <div class="marker '+incidente.tipo+'" id="'+incidente.id+'" data-coords="'+incidente.coords+'">' +
  '<h3>'+incidente.title+'</h3>' +
  '<img src="images/'+incidente.img+'">' +
  '<div class="description" style="margin-top:10px">' +
  '<span class="text-white mini-description " >'+incidente.descripcion+'</span></div></div>';
      });

    });

  });
  jQuery("#content-demo2").html(text);
  jQuery("#demo2 .imgContent").attr("style", "z-index: 1; position: absolute; width: 5380px; height: 2816px; top: -1552.71px; left: -1297.28px;");
}
loadPoints();

jQuery(".controls a").click(function () {
  var id = jQuery(this).attr("rel");
  var style;
  active = document.getElementById(id);
  if(num != 0){
    style = ant.getAttribute("style");
    console.log(style);
    style = style.replace("z-index: 100", "z-index: 2");
    console.log(style);
    ant.setAttribute("style", style);
  }
  style = active.getAttribute("style");
  style = style.replace("z-index: 2", "z-index: 100");
  active.setAttribute("style", style);
  ant = active;
  num++;
});
jQuery(document).ready(function () {

});



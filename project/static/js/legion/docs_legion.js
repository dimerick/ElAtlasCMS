var url_data = 'http://localhost:8000/es/legion/documento/';

jQuery(document).on('click','.cmsms_tabs_list_item',function(){
    console.log(jQuery(this).attr("id"));
    var num = jQuery(this).attr("id").replace("cmsms_tabs_list_item_", "");
    jQuery(".cmsms_tabs_list_item.current_tab").removeClass("current_tab");
    jQuery(this).addClass("current_tab");
    var tabActive = jQuery(".cmsms_tab.active_tab");
    tabActive.removeClass("active_tab");
    tabActive.attr("style", "display: none;");

    var tabActiveNew = jQuery("#cmsms_tab_"+num);
    tabActiveNew.addClass("active_tab");
    tabActiveNew.attr("style", "display: block;");

    console.log(num);
//alert("Has dado clic en tab");
});

jQuery("#button-search").click(function () {
    //alert("Has dado clic");
    var key_word = jQuery("#input-search-doc").val();
    //alert("Busqueda: " + key_word);

    jQuery.ajax({
        url: url_data + "?key_word=" + key_word,
        type: 'get',
        beforeSend: function () {
            jQuery("#img-search-map").html("<img src=\"/static/images/loading.gif\">");
            jQuery("#nav-tabs-docs").html("");
            jQuery("#tabs-docs").html("");
        },
        success: function (data, textStatus, jqXHR) {
            var htmlNav = '';
            var htmlTabs = '';
            jQuery.each(data.data, function (i, val) {
                console.log(i);
                htmlNav += `
                <li id="cmsms_tabs_list_item_${i}" class="cmsms_tabs_list_item${((i == 0) ? ' current_tab' : '')}">

                                <a href="#"><span>${val.titulo}</span></a>

                            </li>
                `;

                htmlTabs += `
                <div id="cmsms_tab_${i}" class="cmsms_tab${((i == 0) ? ' active_tab' : '')}" ${((i == 0) ? 'style="display: block;"' : 'style="display: none;"')}>

                                <div class="cmsms_tab_inner">

                                <p>
                                <b>Titulo: </b>${val.titulo}<br/>
                                <b>Fecha: </b>${val.fecha}<br/>
                                <b>Autor: </b>${val.autor}<br/>
                                <b>Tipo: </b>${val.tipo}<br/>
                                </p>
                                <p>
                                ${val.texto.replace(/\n/g, "<br />")}
                                </p>
                                    

                                </div>

                            </div>
                `;


                // htmlTabs += `<div class="tab-content clearfix" id="tabs-${i}">
                // <p>
                // <b>Titulo:</b>${val.titulo}<br/>
                // <b>Fecha:</b>${val.fecha}<br/>
                // <b>Autor:</b>${val.autor}<br/>
                // <b>Autor:</b>${val.tipo}<br/>
                // </p>
                // <p>
                // ${val.texto.replace(/\n/g, "<br />")}
                // </p>
                // </div>`;
            });
            jQuery("#nav-tabs-docs").html(htmlNav);
            jQuery("#tabs-docs").html(htmlTabs);

            // console.log(data);
            // jQuery("#p-data-docs").html(data.data[0].texto.replace(/\n/g, "<br />"));
            // console.log(data);


        },
        error: function (jqXHR, text) {
            console.log(jqXHR);
            console.log(text);
        },
        complete: function () {
            jQuery("#img-search-map").html("");
        }
    });
});


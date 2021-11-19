var url_data = 'http://localhost:8000/es/legion/documento/';

jQuery("#button-search").click(function () {
    var key_word = jQuery("#input-search-doc").val();
    alert("Busqueda: " + key_word);

    jQuery.ajax({
        url: url_data + "?key_word=" + key_word,
        type: 'get',
        beforeSend: function () {
            jQuery("#img-search-map").html("<img src=\"/static/images/loading.gif\">");

        },
        success: function (data, textStatus, jqXHR) {

            console.log(data);


        },
        error: function (jqXHR, text) {
            console.log(jqXHR);
            console.log(text);
        },
        complete: function () {

        }
    });
});


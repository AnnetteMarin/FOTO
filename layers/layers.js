var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RVN_2023_1 = new ol.format.GeoJSON();
var features_RVN_2023_1 = format_RVN_2023_1.readFeatures(json_RVN_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVN_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVN_2023_1.addFeatures(features_RVN_2023_1);
var lyr_RVN_2023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RVN_2023_1, 
                style: style_RVN_2023_1,
                interactive: true,
    title: 'RVN_2023<br />\
    <img src="styles/legend/RVN_2023_1_0.png" /> Primaria<br />\
    <img src="styles/legend/RVN_2023_1_1.png" /> Ruta Travesía<br />\
    <img src="styles/legend/RVN_2023_1_2.png" /> Secundaria<br />\
    <img src="styles/legend/RVN_2023_1_3.png" /> Terciaria<br />\
    <img src="styles/legend/RVN_2023_1_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RVN_2023_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RVN_2023_1];
lyr_RVN_2023_1.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_RVN_2023_1.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'TextEdit', 'ZONA': 'TextEdit', 'Canton': 'TextEdit', 'Jerarquia': 'TextEdit', 'Rve_Descri': 'TextEdit', 'OBJECTID': 'Range', 'RUTA_1': 'TextEdit', 'SC': 'TextEdit', 'ORDEN': 'TextEdit', 'TIPO': 'TextEdit', 'LONG__KM_': 'TextEdit', 'ACUMULADA_': 'TextEdit', 'KM_INI': 'TextEdit', 'KM_FIN': 'TextEdit', 'ZONA_DE_CO': 'TextEdit', 'TIPO_DE_SU': 'TextEdit', 'DESCRIPCI': 'TextEdit', });
lyr_RVN_2023_1.set('fieldLabels', {'RUTA': 'header label - always visible', 'SECCION': 'no label', 'ZONA': 'no label', 'Canton': 'no label', 'Jerarquia': 'inline label - always visible', 'Rve_Descri': 'no label', 'OBJECTID': 'no label', 'RUTA_1': 'inline label - always visible', 'SC': 'no label', 'ORDEN': 'inline label - always visible', 'TIPO': 'no label', 'LONG__KM_': 'inline label - always visible', 'ACUMULADA_': 'no label', 'KM_INI': 'no label', 'KM_FIN': 'no label', 'ZONA_DE_CO': 'no label', 'TIPO_DE_SU': 'no label', 'DESCRIPCI': 'no label', });
lyr_RVN_2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
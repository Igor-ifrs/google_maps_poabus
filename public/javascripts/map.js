let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -30.10239968132273, lng: -51.19711784332094 }
    });
    map.data.loadGeoJson('/javascripts/ida_volta_restinga_210.json');
    /* 
    bairro-centro preto
    centro-bairro vermelho
    */
    map.data.setStyle(function (feature) {
        let sentido = feature.getProperty('color');
        let color = sentido === 'blue' ? '/images/ida.png' : '/images/volta.png';
        return {
            icon: color,
            clickable: true
        };
    });
    map.data.addListener('click', function (event) {
                
    });
    
}
/*
TIPOS DE DESENHO
MODIFICAR ARQUIVO JSON
MultiPoint 
LineString
*/

/*
strokeColor: color, cor da linha 
strokeWeight: 3,    grossura hum...
strokeOpacity: .6   opacidade

map.data.addListener('mouseover', function (event) {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { strokeOpacity : 1 });
});
map.data.addListener('mouseout', function (event) {
    map.data.revertStyle();
});
*/

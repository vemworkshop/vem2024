var map = L.map("map").setView([-25.45178882969198, -49.25108401840972], 15) // Set the view to London, zoom level 13

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 25,
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

L.marker([-25.45178882969198, -49.25108401840972])
    .addTo(map)
    .bindPopup(
        "PUCPR - Pontifícia Universidade Católica do Paraná, R. Imac. Conceição, 1155 - Prado Velho, Curitiba - PR, 80215-901"
    )

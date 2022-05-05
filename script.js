const key = config.SECRET_API_KEY;
const id = config.MAP_ID;

function initMap() {
    const nijigen = { lat: 34.575579649578586, lng: 135.00460266984453 };
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: id,
      center: nijigen,
      zoom: 20,
      fullscreenControl: false,

    });

    const markers = [
        [
            "Ramen",
            34.575473642821244,
            135.0043465188933,
            "ramen.png",
            50,
            50,
        ],
        [
            "Naruto x Boruto park Nijigen no mori",
            34.575579649578586,
            135.00460266984453,
            "icons8-naruto-300.svg",
            60,
            60,
        ]
    ];

    for (let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2] },
            map: map,
            title: currentMarker[0],
            icon: {
                url: currentMarker[3],
                scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5]),
            },
            animation: google.maps.Animation.DROP,
        });
    
        const infowindow = new google.maps.InfoWindow({
        content: currentMarker[0],
        });
    
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
        });
    }

    
}

// 34.575579649578586, 135.00460266984453 34.575473642821244, 135.0043465188933
  
  window.initMap = initMap;

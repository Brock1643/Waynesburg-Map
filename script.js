let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.8994, lng: -80.1862 },
    zoom: 16,
    styles:
    [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e3eed3"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#83a5b0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bdcdd3"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b5cbe4"
            }
        ]
    }
]

  });
const buhl = new google.maps.Marker({
    position: { lat: 39.89935178276836, lng: -80.18544165015726 },
    map,
    title: "Buhl Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const buhlInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      buhl.addListener("click", () => {
    buhlInfoWindow.open({
      anchor: buhl,
      map,
      shouldFocus: false,
    });
});
const GPACCoords = [
    { lat: 39.899798691516175, lng: -80.18772088849907 },
    { lat: 39.900024009656114, lng: -80.18770881855936 },
    { lat: 39.90003429813799, lng: -80.18801056705247 },
    { lat: 39.899808980031864, lng: -80.1880226369922 },
    { lat: 39.899798691516175, lng: -80.18772088849907 },
  ];
  const GPACPolygon = new google.maps.Polygon({
    paths: GPACCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.00,

  });
GPACPolygon.setMap(map);
  const ChapelCoords = [
    { lat: 39.90050350139576, lng: -80.18703761802918 },
    { lat: 39.90093921420085, lng: -80.18702420698504 },
    { lat: 39.90094435837325, lng: -80.187309191673 },
    { lat: 39.90050916002141, lng: -80.18732327326934 },
    { lat: 39.90050350139576, lng: -80.18703761802918 },
    ];
     const ChapelPolygon = new google.maps.Polygon({
    paths: ChapelCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  ChapelPolygon.setMap(map);
  const eberlyCoords = [

{ lat: 39.899922770354294, lng: -80.18553282853959 },

{ lat: 39.8999222559294, lng: -80.18550600644919 },

{ lat: 39.89994283292212, lng: -80.18550533589693 },

{ lat: 39.89994283292212, lng: -80.18549728926982 },

{ lat: 39.9000524053043, lng: -80.18549326595624 },

{ lat: 39.90005034760858, lng: -80.18533702727966 },

{ lat: 39.90004417452111, lng: -80.18533635672739 },

{ lat: 39.90004160240115, lng: -80.18518950578245 },

{ lat: 39.89993923194808, lng: -80.18519285854521 },

{ lat: 39.89993768867374, lng: -80.1851861530226 },

{ lat: 39.899848178703685, lng: -80.18518816467937 },

{ lat: 39.89984658769828, lng: -80.1851625027092 },

{ lat: 39.89970049070834, lng: -80.18516786712725 },

{ lat: 39.899702548414545, lng: -80.18530600089281 },

{ lat: 39.89968402905644, lng: -80.18530600089281 },

{ lat: 39.89968505790979, lng: -80.18535025734197 },

{ lat: 39.899704606120686, lng: -80.18535025734197 },

{ lat: 39.8997071782536, lng: -80.18550381380766 },

{ lat: 39.89981932314095, lng: -80.1854997904941 },

{ lat: 39.89981932314235, lng: -80.18550783712094 },

{ lat: 39.89984247229349, lng: -80.18550582546415 },

{ lat: 39.89984350114448, lng: -80.18553398865906 },

{ lat: 39.899922770354294, lng: -80.18553282853959 },
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  eberlyPolygon.setMap(map);
  const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429},
    ];
    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.0,
    });
        ThayerPolygon.setMap(map);
        const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  southpolygon.setMap(map);

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  westpolygon.setMap(map);

   const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  eastpolygon.setMap(map);
  const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#00000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

    hannaPolygon.setMap(map);
const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#00000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  CREDPolygon.setMap(map);
const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  nestPolygon.setMap(map);

const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

  const buhlPolygon = new google.maps.Polygon({
    paths: BuhlhallCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });

  buhlPolygon.setMap(map);
const millerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888},
];
      const millerPolygon = new google.maps.Polygon({
    paths: millerCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
});
      millerPolygon.setMap(map);
      const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222},
    ];
const stoverPolygon = new google.maps.Polygon({
    paths: StoverCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
});
      stoverPolygon.setMap(map);
const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
const stewartPolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
});
      stewartPolygon.setMap(map);
      const WILEYCoords = [
    { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: -80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 }, 
  ];

  const wilypolygon = new google.maps.Polygon({
    paths: WILEYCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.0,
  });
wilypolygon.setMap(map);
 const cjCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];
    const cjHouse = new google.maps.Polygon({
        paths: cjCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.0,
    });
    cjHouse.setMap(map);
    const CafCoords = [
{ lat: 39.900590997830925, lng: -80.18815567971573 },
{ lat: 39.9005889401514, lng: -80.18809130669877 },
{ lat: 39.90067536263846, lng: -80.18808661283293 },
{ lat: 39.90067124728441, lng: -80.18796457232162 },
{ lat: 39.900584310372246, lng: -80.18796926618744 },
{ lat: 39.9005745363928, lng: -80.18770171583846 },
{ lat: 39.900187698665945, lng: -80.18772553440714 },
{ lat: 39.900203131352356, lng: -80.18817815717938 },
{ lat: 39.900590997830925, lng: -80.18815567971573 },
];
const cafePolygon = new google.maps.Polygon({
        paths: CafCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.0,
    });
    cafePolygon.setMap(map);
    const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  ];
  const willisonpolygon = new google.maps.Polygon({
        paths: willisonCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.0,
        });
    willisonpolygon.setMap(map);
    const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    ];
    const fieldhousepolygon = new google.maps.Polygon({
        paths: fieldhouseCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.0,
        });
    fieldhousepolygon.setMap(map);

    const library = new google.maps.Marker({
    position: { lat: 39.89985167325873, lng: -80.18532419663134 },
    map,
    title: "Eberly Library!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const libraryInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      library.addListener("click", () => {
    libraryInfoWindow.open({
      anchor: library,
      map,
      shouldFocus: false,


});

});
      const thayerpop = new google.maps.Marker({
    position: { lat: 39.89950758736811, lng: -80.1842338272139 },
    map,
    title: "Thayer Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const thayerpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      thayerpop.addListener("click", () => {
    thayerpopInfoWindow.open({
      anchor: thayerpop,
      map,
      shouldFocus: false,


});

});
       const eastpop = new google.maps.Marker({
    position: { lat: 39.90038044722429, lng: -80.18551352519899 },
    map,
    title: "East Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const eastpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      eastpop.addListener("click", () => {
    eastpopInfoWindow.open({
      anchor: eastpop,
      map,
      shouldFocus: false,


});

});
       const southpop = new google.maps.Marker({
    position: { lat: 39.90028913290763, lng: -80.18593182649265 },
    map,
    title: "South Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const southpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      southpop.addListener("click", () => {
    southpopInfoWindow.open({
      anchor: southpop,
      map,
      shouldFocus: false,


});

});
      const westpop = new google.maps.Marker({
    position: { lat: 39.90038218654523, lng: -80.18631952035159 },
    map,
    title: "West Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const westpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      westpop.addListener("click", () => {
    westpopInfoWindow.open({
      anchor: westpop,
      map,
      shouldFocus: false,


});

});
      const stoverpop = new google.maps.Marker({
    position: { lat: 39.899895253819366, lng: -80.18617113723306 },
    map,
    title: "Stover Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const stoverpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      stoverpop.addListener("click", () => {
    stoverpopInfoWindow.open({
      anchor: stoverpop,
      map,
      shouldFocus: false,


});

});
      const chapelpop = new google.maps.Marker({
    position: { lat: 39.900720380877615, lng: -80.18718111056042 },
    map,
    title: "Roberts Chapel!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const chapelpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      chapelpop.addListener("click", () => {
    chapelpopInfoWindow.open({
      anchor: chapelpop,
      map,
      shouldFocus: false,


});

});
      const cafepop = new google.maps.Marker({
    position: { lat: 39.90038382877349, lng: -80.18795059658143 },
    map,
    title: "Benedum Dinning Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const cafepopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      cafepop.addListener("click", () => {
    cafepopInfoWindow.open({
      anchor: cafepop,
      map,
      shouldFocus: false,


});

});
      const gpacpop = new google.maps.Marker({
    position: { lat: 39.899907278013686, lng: -80.1878734658447 },
    map,
    title: "Goodwin Performing Arts Center!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const gpacpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      gpacpop.addListener("click", () => {
    gpacpopInfoWindow.open({
      anchor: gpacpop,
      map,
      shouldFocus: false,


});

});
      const csipop = new google.maps.Marker({
    position: { lat: 39.90035085534552, lng: -80.18887877234188 },
    map,
    title: "CSI House!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const csipopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      csipop.addListener("click", () => {
    csipopInfoWindow.open({
      anchor: csipop,
      map,
      shouldFocus: false,


});

});
      const wileypop = new google.maps.Marker({
    position: { lat: 39.89317346490144, lng: -80.1815134556858 },
    map,
    title: "John F. Wiley Stadium!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const wileypopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      wileypop.addListener("click", () => {
    wileypopInfoWindow.open({
      anchor: wileypop,
      map,
      shouldFocus: false,


});

});
       const millerpop = new google.maps.Marker({
    position: { lat: 39.89947236778786, lng: -80.18751761101865 },
    map,
    title: "Miller Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const millerpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      millerpop.addListener("click", () => {
    millerpopInfoWindow.open({
      anchor: millerpop,
      map,
      shouldFocus: false,


});

});
       const hannapop = new google.maps.Marker({
    position: { lat: 39.89947082450262, lng: -80.18705425942896 },
    map,
    title: "Hanna Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const hannapopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      hannapop.addListener("click", () => {
    hannapopInfoWindow.open({
      anchor: hannapop,
      map,
      shouldFocus: false,


});

});
      const rudypop = new google.maps.Marker({
    position: { lat: 39.89809693468687, lng: -80.18755103526031 },
    map,
    title: "Rudy Marisa Fieldhouse!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const rudypopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      rudypop.addListener("click", () => {
    rudypopInfoWindow.open({
      anchor: rudypop,
      map,
      shouldFocus: false,


});

});
       const stewpop = new google.maps.Marker({
    position: { lat: 39.89795401330608, lng: -80.1866221064007 },
    map,
    title: "Stewart Science Center!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const stewpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      stewpop.addListener("click", () => {
    stewpopInfoWindow.open({
      anchor: stewpop,
      map,
      shouldFocus: false,


});

});
        const credpop = new google.maps.Marker({
    position: { lat: 39.89811346298946, lng: -80.1862520556287 },
    map,
    title: "CRED!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const credpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      credpop.addListener("click", () => {
    credpopInfoWindow.open({
      anchor: credpop,
      map,
      shouldFocus: false,


});

});
      const nestpop = new google.maps.Marker({
    position: { lat: 39.898119296509144, lng: -80.18539789725564 },
    map,
    title: "The Nest!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const nestpopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      nestpop.addListener("click", () => {
    nestpopInfoWindow.open({
      anchor: nestpop,
      map,
      shouldFocus: false,


});

});
      const willipop = new google.maps.Marker({
    position: { lat: 39.89730404454635, lng: -80.18630226633626 },
    map,
    title: "Willison Hall!",
    icon: "https://i.imgur.com/i0ftGjT.png",   
  });
 const willipopInfoWindow = new google.maps.InfoWindow({
    content: "Waynesburg",
  });
      willipop.addListener("click", () => {
    willipopInfoWindow.open({
      anchor: willipop,
      map,
      shouldFocus: false,


});

});

  }
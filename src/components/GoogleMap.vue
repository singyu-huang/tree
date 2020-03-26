<template>
    <div id="tree-map">
        <div class="google-map" id="google-map"></div>
    </div>
</template>
<script>
export default {
    name: 'GoogleMap',
    props: {
        msg: String
    },
    data() {
        return {
            map: null
        };
    },
    mounted() {
        this.initMap();
        this.setPos();
    },
    methods: {
        initMap() {
            const google = window.google;
            this.map = new google.maps.Map(document.getElementById('google-map'), {
                zoom: 10,
                styles: [{
                        "featureType": "all",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "weight": "2.00"
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#9c9c9c"
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text",
                        "stylers": [{
                            "visibility": "on"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#eeeeee"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#7b7b7b"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#c8d7d4"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#070707"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }
                ]
            });
            this.map.data.setStyle({
                fillColor: 'green',
                strokeColor: 'green',
                strokeWeight: 3
            });
            this.map.data.loadGeoJson('./treeMap.json');
            const that = this;
            this.map.data.addListener('mouseover', function(event) {
                that.map.data.revertStyle();
                that.map.data.overrideStyle(event.feature, { fillColor: '#000', strokeColor: '#000' });
                that.addInfoWindow(event.feature);
                console.log("mouseover!");
            });
            this.map.data.addListener('mouseout', function() {
                that.data.revertStyle();
            });
        },
        setPos() {
            var map = this.map;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(pos);
                });
            }
        },
        addInfoWindow: function(feature) {
            console.log(feature);
        }
    }
}
</script>
<style scoped>
#tree-map {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.7)
}

#google-map {
    height: 70%;
    width: 80%;
    display: table;
    margin: 0 auto;
}
</style>
<template>
    <div class="google-map" id="map"></div>
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
    },
    methods: {
        initMap() {
            const google = window.google
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            });
        }
    }
}
</script>
<style scoped>
#map {
    height: 100%;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
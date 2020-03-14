<template>
    <div id="app">
        <GoogleMap msg="123" />
    </div>
</template>
<script>
import GoogleMap from './components/GoogleMap.vue'

export default {
    name: 'App',
    components: {
        GoogleMap
    }
}
</script>
<style>
#app {
    height: 100%;
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
<template>
    <div id="app">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">MAP</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">ARTICLE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">PTT</a>
            </li>
        </ul>
        <full-page :options="options" id="fullpage">
            <div class="section">
                <Page1 />
            </div>
            <div class="section">
                <GoogleMap />
            </div>
        </full-page>
    </div>
</template>
<script>
import Page1 from './components/Page1.vue'
import GoogleMap from './components/GoogleMap.vue'

export default {
    name: 'App',
    components: {
        Page1,
        GoogleMap
    },
    data() {
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                navigationTooltips: ['台灣好植地', '行動地圖'],
                showActiveTooltip: true,
                anchors: ['page1', 'tree_map'],
                normalScrollElements: '.google-map'
            }
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;900&display=swap');

#app {
    height: 100%;
    margin: 0;
    padding: 0;
}

html,
body,
div {
    margin: 0;
    padding: 0;
    font-family: 'Noto Serif TC', serif !important;
}

#menu-line {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 159px;
    height: 2px;
    background: #fff;
}

#menu {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    letter-spacing: 1px;
    font-size: 1.1em;
}

#menu li {
    display: inline-block;
    margin: 10px 0px;
    position: relative;
}

#menu a {
    color: #fff;
    padding: 0 1.1em 1.1em 1.1em;
}

#menu li.active a:after {
    content: '';
    margin: 0 1.1em 0 1.1em;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    display: block;
}

#fp-nav {
    margin-top: 0 !important;
    height: 100%;
    top: 0 !important;
    right: 30px !important;
}

#fp-nav ul {
    display: inline-block;
    margin-right: -50%;
}

#fp-nav .fp-tooltip {
    top: -65% !important;
    margin-right: 20px;
    font-size: 20px !important;
}

#fp-nav li {
    margin: 20px auto !important;
}

#fp-nav::after {
    content: "";
    height: 100%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    display: inline-flex;
    align-items: center;
}

#fp-nav ul li a span {
    background: #ffffff;
}
</style>
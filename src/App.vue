<template>
    <div id="app">
        <ul id="menu">
            <li data-menuanchor="page1"><a href="#page1">Section 1</a></li>
            <li data-menuanchor="page2"><a href="#page2">Section 2</a></li>
            <li data-menuanchor="tree_map"><a href="#tree_map">Section 3</a></li>
        </ul>
        <full-page :options="options" id="fullpage">
            <div class="section">
                <h3>Section 1</h3>
            </div>
            <div class="section">
                <h3>Section 2</h3>
            </div>
            <div class="section">
                <GoogleMap />
            </div>
        </full-page>
    </div>
</template>
<script>
import GoogleMap from './components/GoogleMap.vue'

export default {
    name: 'App',
    components: {
        GoogleMap
    },
    data() {
        return {
            options: {
                afterLoad: this.afterLoad,
                navigation: true,
                navigationTooltips: ['頁面1', '頁面2', '地圖'],
                showActiveTooltip: true,
                anchors: ['page1', 'page2', 'tree_map'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
            }
        }
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
    margin: 0;
    padding: 0;
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
    margin-right: 20px;
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
</style>
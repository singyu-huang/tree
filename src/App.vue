<template>
    <div id="app">
        <ul id="menu">
            <li data-menuanchor="page1" class="active"><a href="#page1">Section 1</a></li>
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
                navigationTooltips: ['page1', 'page2', 'tree_map'],
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

#fp-nav.fp-right::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0px;
    height: 50vh;
    border-right: 2px solid #fff;
    top: 0;
}

#fp-nav.fp-right::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0px;
    height: 50vh;
    border-right: 2px solid #fff;
    bottom: 0;
}
</style>
import Vue from 'vue'
import App from './App.vue'
import Sidebar from './components/sidebar.vue'
import MainContent from './components/main-content.vue'
import HymnContent from './components/hymn-content.vue'

Vue.component('sidebar', Sidebar)
Vue.component('main-content', MainContent)
Vue.component('hymn-content', HymnContent)

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import Sidebar from './components/sidebar.vue'
import MainContent from './components/main-content.vue'

Vue.component('sidebar', Sidebar)
Vue.component('main-content', MainContent)

new Vue({
  el: '#app',
  render: h => h(App)
})

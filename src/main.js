import Vue from 'vue'
import App from './weather-app.vue'

Vue.config.productionTip =  false

new Vue({
    render: h =>h(App),
}).$mount('#weather-app')

// new Vue({
//     render: h => h(App),
// }).$mount('#weather-app')
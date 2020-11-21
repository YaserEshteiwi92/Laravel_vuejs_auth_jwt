require('./bootstrap');

window.Vue = require('vue');

import router from './router/index';
import store from './store/index';

Vue.component('Index' , require('./index.vue').default);

const app = new Vue({
    el: "#app",
    router,
    store,
});
import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import IdleVue from "idle-vue";

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 900000,
  startAtIdle: false
});
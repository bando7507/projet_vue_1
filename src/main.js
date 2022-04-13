import { createApp } from 'vue'
import router from './router'

import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue'



const app = createApp(App)

app.use(VueToast)
app.use(router)
app.mount('#app')
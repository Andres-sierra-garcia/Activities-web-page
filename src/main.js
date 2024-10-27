import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./routes/routes.js"
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import {createPinia} from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(Quasar, {
    plugins: {},
    })
    
app.use(router);
app.use(pinia);
app.mount('#app')
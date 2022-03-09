import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Field, Form } from 'vee-validate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(Field, Form)
app.mount('#app')

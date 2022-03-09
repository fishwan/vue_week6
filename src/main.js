import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, max } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.scss'
import '@/assets/scss/style.scss'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

configure({
  generateMessage: localize({ zhTW })
})

setLocale('zhTW')

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')

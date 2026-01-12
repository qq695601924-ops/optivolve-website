import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import 'virtual:uno.css'
import '@/styles/app.less'
import '@/styles/var.less'
import 'swiper/css'
import { i18n } from '@/i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(ToastPlugin, {
  position: 'top-right',
})

app.mount('#app')

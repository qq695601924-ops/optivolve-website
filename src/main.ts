import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'virtual:uno.css'
import '@/styles/app.less'
import '@/styles/var.less'
import "swiper/css";



const app = createApp(App)



app.use(router)
app.mount('#app')

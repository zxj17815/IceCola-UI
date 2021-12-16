import { createApp } from 'vue'
import App from './App.vue'
import IcContainer from './components/container'
import IcButton from './components/button'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = { size: 'large' }
app.use(IcContainer)
    .use(IcButton)
    .mount('#app')

import { App } from 'vue'
import ICButton from './Button.vue'

export default {
    install(app: App) {
        app.component(ICButton.name, ICButton)
    }
}
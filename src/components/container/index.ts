import { App } from 'vue'
import IcContainer from './Container.vue'
import IcHeader from './Header.vue'
import IcFooter from './Footer.vue'
import IcAside from './Aside.vue'
import IcMain from './Main.vue'

export default {
    install(app: App) {
        app.component(IcContainer.name, IcContainer)
        app.component(IcHeader.name, IcHeader)
        app.component(IcFooter.name, IcFooter)
        app.component(IcAside.name, IcAside)
        app.component(IcMain.name, IcMain)
    }
}
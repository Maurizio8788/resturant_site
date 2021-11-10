import { createApp } from 'vue'

import App from './App.vue'
import router from './components/router'
import i18n from './i18n'

createApp(App).use(i18n).use(router).mount('#app')

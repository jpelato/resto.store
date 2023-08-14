/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core-scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'

loadFonts()


// Create vue app
const app = createApp(App)

app.component('VDataTable', VDataTable)
app.component('VInfiniteScroll', VInfiniteScroll)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)

// Mount vue app
app.mount('#app')

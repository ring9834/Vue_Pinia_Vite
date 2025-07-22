import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Mounts the Vue application to a DOM element with the ID app (typically a <div id="app"> in the HTML file). 
// This renders the App.vue component and starts the application.
app.mount('#app')

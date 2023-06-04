import { createApp } from 'vue'
import { createRouter,createWebHistory, useRouter } from 'vue-router'
import App from './App.vue'

useRouter()
import './style.css'
// import routes from './routes'

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })
// createApp(App).use(router).mount('#app')


// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import routes from 'virtual:generated-pages'


// const app = createApp(App)
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// })
// app.use(router)
// app.mount('#app')
import registerApp from './entry'

window.registerApp = registerApp

export default registerApp
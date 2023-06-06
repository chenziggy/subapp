const routes = [
  { path: '/', component: () => import('./components/HelloWorld.vue') },
  { path: '/home', component: () => import('./components/HomePage.vue') },
]

export default routes
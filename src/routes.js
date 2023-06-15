const routes = [
  { path: '/zoom', redirect: '/zoom/hello',children: [
    { path: 'hello', name: 'hello',component: () => import('./components/HelloWorld.vue')},
    { path: 'home', name: 'home', component: () => import('./components/HomePage.vue') },
  ] ,
},
]

export default routes
import App from '@/App.vue'

const routes = [
  {
    path: 'zoom',
    name: 'zoom',
    component: App,
    children: [
      {
        path: 'helloworld',
        component: () => import('./components/HelloWorld.vue'),
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('./components/HomePage.vue'),
      },
    ],
  },
]

export default routes


const routes = [
  {
    path: 'zoom',
    name: 'zoom',
    children: [
      {
        path: 'helloworld',
        component: () => import('./components/ZoomPage.vue'),
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

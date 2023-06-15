import App from "@/App.vue";

const routes = [
  {
    path: "/zoom",
    component: App,
    children: [
      {
        path: "hello",
        name: "hello",
        component: () => import("./components/HelloWorld.vue"),
      },
      {
        path: "home",
        name: "home",
        component: () => import("./components/HomePage.vue"),
      },
    ],
  },
];

export default routes;

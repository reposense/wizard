import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import NotFound from './views/404.vue';

const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/authenticating',
      component: Auth,
    },
    {
      path: '/*',
      component: NotFound,
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL || '/wizard/',
  routes,
});

export default router;

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlayersView from '../views/PlayersView.vue'
import NewPlayerView from '../views/NewPlayerView.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
        path: '/players',
        name: 'PlayersView',
        component: PlayersView
    },
    {
        path: '/players/new',
        name: 'NewPlayer',
        component: NewPlayerView
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

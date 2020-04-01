import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store.js'

// import Hawaii from '../views/Hawaii';
// import Panama from '../views/Panama';
// import Jamaica from '../views/Jamaica';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  // {
  //   path: '/brazil',
  //   name: 'brazil',
  //   component: () => import(/* webpackChunkName: "brazil" */ '../views/Brazil'),
  // },

  {
    path: '/details/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails'),
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component:
          () => import(/* webpackChunkName: "ExperienceDetail" */ '../views/ExperienceDetails'),
      }
    ],

    beforeEnter: (to, from, next) => {
      const exist = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exist) {
        next()
      } else {
        next({ name: 'notFound' })
      }
    }
  },

  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound'),

  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

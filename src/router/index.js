import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UserHome from '../views/UserHome.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';
import Topics from '../views/Topics.vue';
import Articles from '../views/Articles.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/users/about',
    name: 'About',
    component: About
  },
  {
    path: '/users/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/users/topics',
    name: 'Topics',
    component: Topics
  },
  {
    path: '/users/articles',
    name: 'Articles',
    component: Articles
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && !store.state.authStatus) next({ name: 'Home' });
  else next();
});

export default router;

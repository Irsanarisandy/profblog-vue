import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BlogHome from './views/BlogHome.vue';
import BlogPost from './views/BlogPost.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/p/:slug',
      name: 'BlogHome',
      component: BlogHome
    }, {
      path: '/post/:slug',
      name: 'BlogPost',
      component: BlogPost
    }, {
      path: '/p',
      redirect: '/p/1'
    }, {
      path: '/post',
      redirect: '/p/1'
    }
  ]
});

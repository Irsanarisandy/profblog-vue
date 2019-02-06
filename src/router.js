import Vue from 'vue';
import VueHead from 'vue-head';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import BlogHome from './views/BlogHome.vue';
import BlogPost from './views/BlogPost.vue';

Vue.use(VueHead);
Vue.use(VueRouter);

export default new VueRouter({
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

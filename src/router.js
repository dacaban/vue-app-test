import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './components/MainPage';
import HistoryPage from './components/HistoryPage';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/history',
      component: HistoryPage
    }
  ]
});

export default router;

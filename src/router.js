import Vue from 'vue';
import Router from 'vue-router';
import Board from './components/Board';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Board
    }
  ]
});

export default router;

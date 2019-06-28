import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Index = () => import('../page/index.vue');
// const Home = () => import('/page/Home/home.vue');

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          component: Index,
          name: 'index',
          // redirect: '/home',
          // children: [
          //     {path: 'home', component: Home},
              // {path: 'goods', component: GoodS},
              // {path: 'goodsDetails', name: 'goodsDetails', component: goodsDetails},
              // {path: 'thanks', name: 'thanks', component: Thanks},
              // {path: '/refreshgoods', name: 'refreshgoods', component: RefreshGoods}
          // ]
      },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})

import Container from 'components/shared/Layout.vue'
import { RouteConfig } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Container,
    children: [
      {
        path: '',
        name: 'home-page',
        component: () => import(/* webpackChunkName: "Home-page" */ 'views/Home.vue')
      },
      {
        path: '/about',
        name: 'about-page',
        component: () => import(/* webpackChunkName: "about" */ 'views/About.vue')
      }
    ]
  }
] as RouteConfig[]

export default routes

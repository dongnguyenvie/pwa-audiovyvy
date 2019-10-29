import Container from 'components/shared/Layout.vue'
import { RouteConfig } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Container,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ 'views/About.vue')
      }
    ]
  }

] as RouteConfig[]

export default routes

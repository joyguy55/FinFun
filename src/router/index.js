import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/navigation'
import Scales from '@/components/scales'
import Fin from '@/components/fin'
import Filters from '@/components/filters'
import Stickers from '@/components/stickers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigation',
      component: Navigation,
      children: [
        {
          path: '/scales',
          component: Scales
        },
        {
          path: '/fin',
          component: Fin
        },
        {
          path: '/filters',
          component: Filters
        },
        {
          path: '/stickers',
          component: Stickers
        }
      ]
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/navigation'
import Size from '@/components/size'
import Scales from '@/components/scales'
import Fin from '@/components/fin'
import Filters from '@/components/filters'
import Stickers from '@/components/stickers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Size,
    },
    {
      path: '/customize',
      name: 'Navigation',
      component: Navigation,
      children: [
        {
          path: '/customize/scales',
          component: Scales
        },
        {
          path: '/customize/fin',
          component: Fin
        },
        {
          path: '/customize/filters',
          component: Filters
        },
        {
          path: '/customize/stickers',
          component: Stickers
        }
      ]
    },
  ]
})

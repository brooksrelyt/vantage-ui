import { createRouter, createWebHistory } from 'vue-router'

// Each route maps a URL path to a view component. `component: () => import(...)`
// is lazy-loading: Vite splits that view into its own JS chunk, which is only
// downloaded when the user actually navigates there — smaller initial bundle.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import('../views/ColorsView.vue'),
    },
    {
      path: '/typography',
      name: 'typography',
      component: () => import('../views/TypographyView.vue'),
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/ButtonsView.vue'),
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardsView.vue'),
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/FormsView.vue'),
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('../views/AlertsView.vue'),
    },
    {
      path: '/badges',
      name: 'badges',
      component: () => import('../views/BadgesView.vue'),
    },
    {
      path: '/tooltips',
      name: 'tooltips',
      component: () => import('../views/TooltipsView.vue'),
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../views/SwitchView.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../views/GridView.vue'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/ModalView.vue'),
    },
  ],
})

export default router


const routes = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue'),
    children: [{ path: '', component: () => import('pages/UserProfile.vue') }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/callback',
    component: () => import('pages/CallbackPage.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/silentRenew',
    component: () => import('pages/SilentRenew.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

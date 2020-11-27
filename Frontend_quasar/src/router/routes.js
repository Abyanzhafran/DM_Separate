const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '/', component: () => import('pages/dashboard.vue') },
      { path: '/play_demo', component: () => import('pages/play_demo.vue') },
      { path: '/overview', component: () => import('pages/Overview.vue') }
    ]
  },
  {
    path: '/employee',
    component: () => import('layouts/Main_employee.vue'),
    children: [
      { path: '/', component: () => import('pages/dashboard.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

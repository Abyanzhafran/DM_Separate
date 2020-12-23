const routes = [
  // MAIN_PAGE
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard.vue') },
      { path: '/play_demo', component: () => import('pages/play_demo.vue') },
      { path: '/overview', component: () => import('pages/Overview.vue') }
    ]
  },
  // MAKE an Assignment's Page
  {
    path: '/assignment',
    component: () => import('layouts/MainAssignment.vue'),
    children: [
      { path: '/assignment/leadership', component: () => import('pages/assignment/Leadership.vue') },
      { path: '/assignment/stakeholder', component: () => import('pages/assignment/Stakeholder.vue') },
      { path: '/assignment/event', component: () => import('pages/Event.vue') }
    ]
  },
  {
    path: '/front',
    component: () => import('layouts/MainFront.vue'),
    children: [
      { path: '/front/login', component: () => import('pages/Login.vue') },
      { path: '/front/welcome', component: () => import('pages/Welcome.vue') },

    ]
  },
  {
    path: '/access',
    component: () => import('layouts/userAccessLayouts/MainUserAccess.vue'),
    children: [
       { path: '/access/leadership', component: () => import('pages/userAccess/LeadershipAccess.vue') }
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

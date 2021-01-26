const routes = [
  // MAIN_PAGE
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      // { path: '/', component: () => import('pages/Dashboard.vue') },
      { path: '/play_demo', component: () => import('pages/play_demo.vue') },
      { path: '/overview', component: () => import('pages/Overview.vue') },
    ],
  },
  // MAKE an Assignment's Page
  {
    path: '/assignment',
    component: () => import('layouts/MainAssignment.vue'),
    children: [
      { path: '/assignment/leadership', component: () => import('pages/assignment/Leadership.vue') },
      { path: '/assignment/stakeholder', component: () => import('pages/assignment/Stakeholder.vue') },
      { path: '/assignment/event', component: () => import('pages/Event.vue') },
    ],
  },
  {
    path: '/bersamabisa',
    component: () => import('layouts/MainFront.vue'),
    children: [
      { path: '/bersamabisa/signup', component: () => import('pages/SignUp.vue') },

    ],
  },
  {
    path: '/access/leadership',
    component: () => import('layouts/MainUserAccessLayouts/UserAccessLeader.vue'),
    children: [
      { path: '/access/leadership', component: () => import('pages/userAccess/LeadershipAccess.vue') },
    ],
  },
  {
    path: '/access/stakeholder',
    component: () => import('layouts/MainUserAccessLayouts/UserAccessStakeholder.vue'),
    children: [
      { path: '/access/stakeholder', component: () => import('pages/userAccess/StakeholderAccess.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

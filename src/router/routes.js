const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':fileName', component: () => import('pages/ViewPage.vue'), props: route => ({ fileName: route.params.fileName }) },

      { path: ':catchAll(.*)*', alias: '', component: () => import('pages/ErrorPage.vue') }
    ]
  }
]

export default routes

import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/#',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/MeinProfil.vue'),
      },
      {
        path: '/blutgruppe',
        component: () => import('src/pages/ProfilBlutgruppe.vue'),
      },
      {
        path: '/datenschutz',
        component: () => import('src/pages/Datenschutz.vue'),
      },
      {
        path: '/meinprofil_2',
        component: () => import('pages/MeinProfil_2.vue'),
      },
      {
        path: '/informationen',
        component: () => import('pages/Informationen.vue'),
      },
      {
        path: '/spenden',
        component: () => import('src/pages/Spenden.vue'),
      },
      {
        path: '/fragebogen',
        component: () => import('src/pages/FrageBogen.vue'),
      },
      {
        path: '/fragebogen_gruppiert',
        component: () => import('src/pages/FrageBogen_gruppiert.vue'),
      },
      {
        path: '/check',
        component: () => import('src/pages/VorabCheck.vue'),
      },
      {
        path: '/termin',
        component: () => import('src/pages/TerminVereinbarung.vue'),
      },
      {
        path: '/barometer',
        component: () => import('src/pages/BlutspendeBarometer.vue'),
      },
      {
        path: 'upload',
        component: () => import('pages/Upload.vue')
      },
      {
        path: 'vorblutspende',
        component: () => import('pages/InfoPages/VorBlutspende.vue')
      },
      {
        path: 'nachblutspende',
        component: () => import('pages/InfoPages/NachBlutspende.vue')
      },
      {
        path: 'impressum',
        component: () => import('pages/Impressum.vue')
      },
      {
        path: 'spendezentrum',
        component: () => import('pages/BlutspendeZentren.vue')
      },
      {
        path: 'events',
        component: () => import('pages/BlutspendeEvents.vue')
      },
      {
        path: '/testpage',
        component: () => import('src/pages/TestPage.vue'),
      },
      {
        path: '/testpage_"',
        component: () => import('src/pages/TestPage_2.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

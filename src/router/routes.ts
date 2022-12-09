import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/meinprofil',
        component: () => import('pages/MeinProfil.vue'),
      },
      {
        path: '/personalien',
        component: () => import('pages/profil/ProfilPersonalien.vue'),
      },
      {
        path: '/blutgruppe',
        component: () => import('pages/profil/ProfilBlutgruppe.vue'),
      },
      {
        path: '/historie',
        component: () => import('pages/profil/ProfilHistorie.vue'),
      },
      {
        path: '/einstellungen',
        component: () => import('pages/profil/ProfilEinstellungen.vue'),
      },
      {
        path: '/datenschutz',
        component: () => import('pages/profil/ProfilDatenschutz.vue'),
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
        path: '/home',
        component: () => import('pages/Home.vue'),
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
        path: '/testpage',
        component: () => import('src/pages/TestPage.vue'),
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

<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header -->
    <!-- https://www.geeksforgeeks.org/how-to-convert-the-hamburger-icon-of-navigation-menu-to-x-on-click/ -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="" @click="toggleLeftDrawer" />

        <q-toolbar-title>MonSang</q-toolbar-title>



        <q-avatar rounded>
          <img src="../assets/logo/logo_4.png">
        </q-avatar>

      </q-toolbar>
    </q-header>

    <!-- Left Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>

      <q-list>



        <q-item-label header class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">Herzlich Willkommen
          <div backgroundcolor="primary">
            {{ (user.prefix ? user.prefix : '') + ' ' + user.givenName + ' ' +
    user.familyName
}}
          </div>

        </q-item-label>

        <q-separator spaced inset />
        <q-item clickable v-ripple to="/datenschutz">
          <q-item-section avatar>
            <q-icon name="lock"></q-icon>
          </q-item-section>
          <q-item-section>
            Datenschutz
          </q-item-section>
        </q-item>
        <q-separator spaced inset />
        <q-item clickable v-ripple to="/impressum">
          <q-item-section avatar>
            <q-icon name="verified_user"></q-icon>
          </q-item-section>
          <q-item-section>
            Impressum
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable v-ripple v-if="user.givenName" @click="logout">
          <q-item-section avatar>
            <q-icon name="logout" id="user-icon" />
          </q-item-section>
          <q-item-section>
            Ausloggen
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <!--q-item v-for="entry in menuEntries" :key="entry.to">
          <q-icon v-if="entry.icon" :name="'fas fa-' + entry.icon" class="menu-icon" />
          <router-link :to="entry.to" class="menu-link">{{ $t('layout.menu.' + entry.translateString) }}</router-link>
          <router-link :to="entry.to" class="menu-link">Link</router-link>
        </q-item>
        <q-item>
          <div v-if="user.givenName" @click="logout">
            Logout
            <q-icon name="fas fa-user-md" id="user-icon" />
          </div>
        </q-item-->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer>
      <q-tabs class="bg-primary text-white shadow-2">
        <q-route-tab to="/home" icon="home" label="Home" />
        <q-route-tab to="/spenden" icon="gas_meter" label="Spenden" />
        <q-route-tab to="/informationen" icon="info" label="Info" />
        <q-route-tab to="/meinprofil_2" icon="person" label="Profil" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginType } from 'src/model/interfaces';

/**
interface MenuEntry {
  to: string;
  translateString: string;
  icon?: string;
}
*/

export default defineComponent({
  name: 'MainLayout',
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
      user: {} as LoginType,

    };
  },

  mounted() {
    this.user = this.$store.getUser() || ({} as LoginType);
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    logout() {
      if (confirm('Möchten Sie sich wirklich ausloggen? Really')) {
        this.$store.logoutUser();
        location.reload();
      }
    },
  },
});
</script>

<style scoped lang="scss">

</style>

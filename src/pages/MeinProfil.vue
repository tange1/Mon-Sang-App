<!--template>
  <q-header elevated>
    <q-toolbar>
      <q-item to="/home" clickable>
        <q-btn flat dense round icon="arrow_back" aria-label="Menu" />
      </q-item>

      <q-toolbar-title> Mon Sang App </q-toolbar-title>

      <div class="q-pa-md q-gutter-sm">
        <q-avatar size="60px">
          <img class="logo" alt="Mon Sang App logo" src="../assets/logo/logo.png" style="width: 60px; height: 60px" />
        </q-avatar>
      </div>
    </q-toolbar>
  </q-header>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">


        <h5>Personalien</h5>
        <q-input v-model="text" label="Nachname" disable :dense="dense"></q-input>
        <q-input v-model="text" label="Vorname" :dense="dense"></q-input>
        <q-input v-model="text" label="Geburtsname" :dense="dense"></q-input>
        <q-input v-model="text" label="Geburtsdatum" :dense="dense"></q-input>
        <q-input v-model="text" label="Geschlecht" :dense="dense"></q-input>
        <q-input v-model="text" label="Beruf" :dense="dense"></q-input>

        <q-input v-model="text" label="Strasse" :dense="dense"></q-input>
        <q-input v-model="text" label="Nummer" :dense="dense"></q-input>
        <q-input v-model="text" label="Postleitzahl" :dense="dense"></q-input>
        <q-input v-model="text" label="Ort" :dense="dense"></q-input>
        <q-input v-model="text" label="Telefon Privat" :dense="dense"></q-input>
        <q-input v-model="text" label="Telefon Geschäft" :dense="dense"></q-input>
        <q-input v-model="text" label="Telefon Mobil" :dense="dense"></q-input>
        <q-input v-model="text" label="E-Mail" :dense="dense"></q-input>


        <h5>Blutgruppe</h5>
        <q-input v-model="text" label="Deine Blutgruppe" disable :dense="dense"></q-input>
      </div>
    </div>

    <div class="q-pa-md">
      <q-btn class="full-width" color="secondary" align="between" icon-right="arrow_right_alt" label="Personalien"
        @click="$router.push('/testpage')" />
      <br />
      <q-btn class="full-width" color="secondary" align="between" icon-right="arrow_right_alt" label="Blutgruppe"
        @click="$router.push('/testpage')" />
      <q-btn class="full-width" color="secondary" align="between" icon-right="arrow_right_alt"
        label="Blutspenden-Historie" @click="$router.push('/testpage')" />
      <q-btn class="full-width" color="secondary" align="between" icon-right="arrow_right_alt" label="Einstellungen"
        @click="$router.push('/einstellungen')" />
      <q-btn class="full-width" color="secondary" align="between" icon-right="arrow_right_alt" label="Datenschutz"
        @click="$router.push('/testpage')" />
    </div>
  </q>
</template-->

<template>
  <q-page padding>

    <q-list class="q-mb-md" bordered padding>

      <q-item-label header>Personalien</q-item-label>
      <q-item>
        <div class="row">
          <div>Vorname: </div>
          <div v-if="user.givenName">{{ (user.prefix ? user.prefix : '') + ' ' + user.givenName }}</div>
        </div>
        <div class="row">
          <div>Nachname: </div>
          <div v-if="user.givenName">{{ (user.prefix ? user.prefix : '') + ' ' + user.familyName }}</div>
        </div>
        <q-item-section>
          <q-item-label>Vorname</q-item-label>
          <div v-if="user.givenName">
            {{ (user.prefix ? user.prefix : '') + ' ' + user.givenName + ' ' + user.familyName }}
          </div>
          <q-item-label>Nachname</q-item-label>
          <q-item-label>Geburtsdatum</q-item-label>
          <q-item-label>Geschlecht</q-item-label>
          <q-item-label>Telefon</q-item-label>
          <q-item-label>E-Mail</q-item-label>
        </q-item-section>
      </q-item>

      <q-item-label header>Wohnort</q-item-label>
      <q-item>
        <q-item-section>
          <q-item-label>Strasse</q-item-label>
          <q-item-label>Strassennummer</q-item-label>
          <q-item-label>Postleitzahl</q-item-label>
          <q-item-label>Ort</q-item-label>
        </q-item-section>
      </q-item>

      <q-item-label header>Blutgruppe</q-item-label>
      <q-item>
        <q-item-section>
          <q-item-label>Blutgruppe: 0+</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

    <q-list class="q-mb-md" bordered padding>
      <q-item-label header>Einstellungen</q-item-label>
      <q-item to="/settings" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Push Notifikation zu Spende erhalten?</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="show12HourTimeFormat" color="blue" />
        </q-item-section>
      </q-item>
    </q-list>


    <q-list bordered padding>
      <q-item-label header>Less</q-item-label>
      <q-item to="/settings/help" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="show12HourTimeFormat" color="blue" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered padding>
      <q-item-label header>Spendenhistorie</q-item-label>
      <q-item to="/settings/help" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Meine letzte Spende</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <!--q-item @click="visitOurWebsite" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item-->

      <!--q-item @click="emailUs" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item-->

    </q-list>
  </q-page>
</template>

<script lang="ts">
import { LoginType } from 'src/model/interfaces';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {},
  el: '#q-app',
  data() {
    return {
      show12HourTimeFormat: true,
      user: {} as LoginType,
    };
  },
  mounted() {
    this.user = this.$store.getUser() || {} as LoginType;
  },
});
</script>

<style scoped>

</style>

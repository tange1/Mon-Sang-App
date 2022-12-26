<template>
  <q-page padding class="start">
    <div>
      <!-- 1. Card: Vorab-Check -->
      <div class="col-6">
        <q-card class="link-card" @click="$router.push('/check')">
          <q-card-section class="card-title">1. Vorab-Check durchführen</q-card-section>
          <q-card-section>
            <p>
              Der Vorab-Check prüft ob Du die wichtigsten Kriterien für die
              Blutspende erfüllst.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- 2. Card: Terminvereinbarung -->
      <div class="col-6">
        <q-card class="link-card" @click="$router.push('/termin')">
          <q-card-section class="card-title">2. Termin vereinbaren</q-card-section>
          <q-card-section>
            <p>
              Nach dem Du den Vorab-Check durchgeführst hast, kannst Du einen
              Termin in mit einem regionalen Blutspendezentrum vereinbaren.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- 3. Card: Fragebogen -->
      <div class="col-6">
        <q-card class="link-card" @click="$router.push('/fragebogen')">
          <q-card-section class="card-title">3. Fragebogen ausfüllen</q-card-section>
          <q-card-section>
            <p>
              Starte jetzt mit dem Fragebogen. Nach dem Ausfüllen wird ein
              QR-Code generiert, den Du dann im Blutspendezentrum vorweisen
              kannst. Bitte denke daran, dass dieser QR-Code nur 48 gültig sein
              wird.
            </p>
          </q-card-section>
        </q-card>
      </div>


    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>

<style>
.start {
  margin-top: 0pt;
}
</style>

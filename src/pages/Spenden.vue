<template>
  <q-page padding class="start">
    <div>
      <!-- 1. Card: Vorab-Check -->
      <div class="col-6">
        <q-card class="link-card" @click="confirm1 = true">
          <q-card-section class="card-title">1. Vorab-Check durchführen</q-card-section>
          <q-card-section>
            <p>
              Der Vorab-Check prüft ob Sie die wichtigsten Kriterien für die
              Blutspende erfüllen.
            </p>
          </q-card-section>
          <q-dialog v-model="confirm1" persistent>
            <q-card class="my-card">
              <q-card-section class="bg-secondary text-white">
                <q-avatar size="lg" class="align-center" icon="error_outline" color="primary"
                  text-color="white"></q-avatar>
                <div class="text-subtitle2">Füllen Sie den Vorab-Check jetzt aus.</div>
              </q-card-section>
              <q-card-actions align="around">
                <q-btn flat @click="$router.push('/check')">Weiter</q-btn>
                <q-btn flat v-close-popup>Abbrechen</q-btn>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card>
      </div>

      <!-- 2. Card: Terminvereinbarung -->
      <div class="col-6">
        <q-card class="link-card" @click="confirm2 = true">
          <q-card-section class="card-title">2. Termin vereinbaren</q-card-section>
          <q-card-section>
            <p>
              Nach dem Sie den Vorab-Check durchgeführt haben, können Sie einen
              Termin in mit einem regionalen Blutspendezentrum vereinbaren.
            </p>
          </q-card-section>
          <q-dialog v-model="confirm2" persistent>
            <q-card class="my-card">
              <q-card-section class="bg-secondary text-white">
                <q-avatar size="lg" class="align-center" icon="error_outline" color="primary"
                  text-color="white"></q-avatar>
                <div class="text-subtitle2">Eine Terminvereinbarung wird erst empfohlen, wenn der Vorab-Check
                  durchgeführt
                  wurde.</div>
              </q-card-section>
              <q-card-actions align="around">
                <q-btn flat @click="$router.push('/termin')">Weiter</q-btn>
                <q-btn flat v-close-popup>Abbrechen</q-btn>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card>
      </div>

      <!-- 3. Card: Fragebogen -->
      <div class="col-6">
        <q-card class="link-card" @click="confirm3 = true">
          <q-card-section class="card-title">3. Fragebogen ausfüllen</q-card-section>
          <q-card-section>
            <p>
              Starten Sie jetzt mit dem Fragebogen. Nach dem Ausfüllen wird ein
              QR-Code generiert, den Sie dann im Blutspendezentrum vorweisen
              können. Bitte denken Sie daran, dass dieser QR-Code nur am gleichen Tag gültig ist.
            </p>
          </q-card-section>
          <q-dialog v-model="confirm3" persistent>
            <q-card>
              <q-dialog v-model="confirm3" persistent>
                <q-card class="my-card">
                  <q-card-section class="bg-secondary text-white">
                    <q-avatar size="lg" class="align-center" icon="error_outline" color="primary"
                      text-color="white"></q-avatar>

                    <div class="text-subtitle2">Bitte füllen Sie den Fragebogen wahrheitsgetreu aus.</div>
                  </q-card-section>
                  <q-card-actions align="around">
                    <q-btn flat @click="$router.push('/fragebogen')">Weiter</q-btn>
                    <q-btn flat v-close-popup>Abbrechen</q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-card>
          </q-dialog>
        </q-card>
      </div>


    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  el: '#q-app',
  data() {
    return {
      confirm1: false,
      confirm2: false,
      confirm3: false,
    }
  }
})

</script>

<style>
.start {
  margin-top: 0pt;
}

.my-card {
  width: 100%;
  max-width: 250px;
}
</style>

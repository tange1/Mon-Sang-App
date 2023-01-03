<template>



  <q-page padding class="start">
    <div>
      <!-- 1. Card: Vorab-Check -->
      <div class="col-6">
        <q-card class="link-card">
          <q-card-section class="card-title">Wo werden meine Daten gespeichert?</q-card-section>
          <q-card-section>
            <p>
              Die Daten werden im EPD Playground abgelegt. Das EPD Playground soll das echte EPD imitieren.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- 2. Card: Terminvereinbarung -->
      <div class="col-6">
        <q-card class="link-card">
          <q-card-section class="card-title">Wer hat Zugriff auf meine Daten?</q-card-section>
          <q-card-section>
            <p>
              Nur der Benutzer hat Zugriff auf die Daten. Der Fragebogen wird mittels QR-Code vom Blutspendezentrum
              eingescannt.
              Dann hat das Blutspendezentrum die Antworten zum Fragebogen auch. Dies wird aber dann nicht an Dritte
              weitergegeben.
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- 3. Card: Fragebogen -->
      <div class="col-6">
        <q-card class="link-card">
          <q-card-section class="card-title">Ist die MonSang App ein Medizinprodukt?</q-card-section>
          <q-card-section>
            <p>
              Eine App ist ein Medizinprodukt, sobald sie Krankheiten erkennen oder behandeln kann, d.h., wenn sie eine
              medizinische Zweckbestimmung für eine Einzelperson besitzt und sie mehr tut, als Daten speichern,
              archivieren oder kommunizieren. Keine Medizinprodukte sind demnach Apps, die Fitnessdaten messen, oder
              Apps, die zu statistischen Auswertungen klinischer oder epidemiologischer Daten verwendet werden. Ebenso
              sind elektronische Patientenregister und Informationsplattformen keine Medizinprodukte.
            </p>
            <p>
              Quelle: https://www.spectra-online.ch/de/spectra/themen/wann-ist-eine-app-ein-medizinprodukt-719-10.html
            </p>
          </q-card-section>
        </q-card>
      </div>


    </div>
  </q-page>
</template>

<script lang="ts">
import { LoginType } from 'src/model/interfaces';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(true),
      user: {} as LoginType,
    };
  },
  mounted() {
    this.user = this.$store.getUser() || ({} as LoginType);
  },
});
</script>

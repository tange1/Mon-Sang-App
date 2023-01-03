<template>
  <q-page padding class="start">
    <div id="q-app">
      <q-card class="link-card">

        <q-card-section class="card-title">Informationen zur MonSang App</q-card-section>

        <q-item>
          <q-item-section>
            <q-item-label>Ziel der App</q-item-label>
            <q-item-label caption lines="3">Im Rahmen einer Bachelor-Thesis wurde die App entwickelt und eine mögliche
              Anbindung an das EPD Playground analysiert.</q-item-label>
          </q-item-section>

        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section>
            <q-item-label>Herausgeber</q-item-label>
            <q-item-label caption lines="3">Ein Medizininformatik-Studierender</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section>
            <q-item-label>Mitarbeit</q-item-label>
            <q-item-label caption lines="7">Diese Arbeit wurde mithilfe des Instituts für Medizininformatik (I4MI)
              entwickelt.
              Auch das Schweizerische Rote Kreuz (SRK) hat in Forms eines Interviews einen Beitrag geleistet.
            </q-item-label>
          </q-item-section>
        </q-item>

      </q-card>

    </div>


  </q-page>>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  el: '#q-app',
  data() {
    return {
      autoplay: true,
      slide: 'first',
      fullscreen: false,
    }
  }
});
</script>

<style>
.start {
  margin-top: 0pt;
}
</style>

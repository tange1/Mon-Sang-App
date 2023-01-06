<template>
  <q-page padding class="start">
    <div id="q-app">
      <q-card class="link-card">
        <q-card-section class="card-title">Wichtige Informationen nach der Blutspende:</q-card-section>

        <q-item>
          <q-item-section>
            <q-item-label>Alkohol</q-item-label>
            <q-item-label caption lines="3">Am Abend nach der Spende sollte auf
              Alkoholgenuß verzichtet werden.</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="liquor" color="primary" />
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section>
            <q-item-label>Trinken</q-item-label>
            <q-item-label caption lines="3">Nehmen Sie besonders nach der Spende
              reichlich Flüssigkeit zu sich.</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="local_drink" color="primary" />
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section>
            <q-item-label>Genügend Zeit</q-item-label>
            <q-item-label caption lines="7">Warten Sie mindestens 30 Minuten, bevor Sie den
              Blutspendedienst verlassen und 12 Stunden, bevor Sie eine Tätigkeit ausüben, bei
              der Sie durch einen Schwächeanfall sich und andere gefährden könnten (z.B.
              Busfahrer, Kranführer, Dachdecker).</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="watch_later" color="primary" />
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item>
          <q-item-section>
            <q-item-label>Sportliche Aktivität</q-item-label>
            <q-item-label caption lines="3">Schwere körperliche Belastungen werden für die
              ersten 24 Stunden nach einer Blutspende nicht empfohlen.</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="fitness_center" color="primary" />
          </q-item-section>
        </q-item>

      </q-card>

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

<template>
  <q-page padding class="start">

    <q-card class="col-6">
      <q-card-section class="card-title">Regionale Blutspendedienste</q-card-section>
      <q-separator></q-separator>
      <q-card-actions vertical>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Aargau-Solothurn</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Beider Basel</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Freiburg</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Genf</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Graubünden</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Bern / Waadt / Wallis</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Neuchâtel-Jura</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Ostschweiz</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Svizzera Italiana</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Zentralschweiz</q-btn>
        <q-btn flat icon-right="arrow_forward_ios" align="between">Zürich</q-btn>
      </q-card-actions>
    </q-card>
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

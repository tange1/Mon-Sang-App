<template>
  <q-card class="my-card">

    <q-card-section>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-select v-model="model" :options="options" label="Standard" />
        </div>
      </div>
    </q-card-section>

    <q-separator inset></q-separator>

    <q-card-section>
      <q-img src="../assets/pictures_blooddonation/BGBM_1.png"></q-img>
    </q-card-section>

    <q-card-section>
      <q-img src="../assets/pictures_blooddonation/BGBM_2.jpeg"></q-img>
    </q-card-section>

    <q-card-section>
      <q-img src="../assets/pictures_blooddonation/BGBM_3.jpg"></q-img>
    </q-card-section>




  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      model: ref(null),
      options: [
        'Genf', 'Freiburg', 'Basel', 'Neuenburg-Jura', 'Bern', 'Aargau-Solothurn', 'Zentralschweiz', 'Zürich', 'Ostschweiz', 'Graubünden', 'Tessin',
      ]
    }
  }


});
</script>

<style>

</style>

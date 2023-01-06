<template>
  <q-page padding class="start">
    <div>
      <!-- 1. Card: Vorab-Check -->
      <div class="col-6">
        <q-card class="link-card">
          <q-card-section class="card-title">Benachritugungen</q-card-section>
          <q-card-section>
            <p>
              Momentan hat es von Ihrer Blutgruppe genügend Blutkonserven.
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
  el: '#q-app',
  data() {
    return {

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

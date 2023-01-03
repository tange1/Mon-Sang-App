<template>
  <q-page padding>
    <div id="q-app">
      <div class="q-pa-md">
        <q-carousel arrows animated navigation infinite :autoplay="autoplay" transition-prev="slide-right"
          transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true" v-model="slide"
          v-model:fullscreen="fullscreen" height="510px" bordered class="rounded-borders">

          <!-- 1. Slide -->
          <q-carousel-slide name="first" @click="$router.push('/events')"
            img-src="../assets/pictures_blooddonation/Blutspende_1.webp">
            <div class="absolute-top custom-caption">
              <div class="text-h6">Nächster Blutspende-Event</div>
              <div class="text-subtitle1">Wo finden die nächsten Events statt?</div>
            </div>
          </q-carousel-slide>

          <!-- 2. Slide -->
          <q-carousel-slide name="second" @click="$router.push('/spendezentrum')"
            img-src="../assets/pictures_blooddonation/Blutspende_2.jpg">
            <div class="absolute-top custom-caption">
              <div class="text-h6">Regionale Blutspendezentren</div>
              <div class="text-subtitle1">Wo kann ich Blut spenden?</div>
            </div>
          </q-carousel-slide>

          <!-- 3. Slide -->
          <q-carousel-slide name="third" @click="$router.push('/barometer')"
            img-src="../assets/pictures_blooddonation/Blutgruppenbarometer_2.jpeg">
            <div class="absolute-top custom-caption">
              <div class="text-h6">Blutgruppen-Barometer</div>
              <div class="text-subtitle1">Wie sieht der aktuelle Blutgruppenbestand aus?</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  //components: {},
  el: '#q-app',
  data() {
    return {
      autoplay: true,
      slide: 'first',
      fullscreen: false,
    };
  },
});
</script>

<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>

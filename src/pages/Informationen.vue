<template>
  <q-page padding class="start">
    <div id="q-app">
      <q-card class="my-card">
        <q-card-section horizontal>

          <q-card-section @click="$router.push('/testpage')">
            <q-card-section class="card-title">Vor der Blutspende</q-card-section>
            <q-card-section>
              <p>So bereite ich mich optimal auf die Blut- spende vor.</p>
            </q-card-section>
          </q-card-section>

          <q-separator vertical></q-separator>

          <q-card-section>
            <q-card-section class="card-title">Nach der Blutspende</q-card-section>
            <q-card-section>
              <p>Auf folgendes muss ich nach der Blutspende achten.</p>
            </q-card-section>
          </q-card-section>

        </q-card-section>
      </q-card>

      <div class="q-pa-md">
        <q-carousel arrows animated navigation infinite :autoplay="autoplay" transition-prev="slide-right"
          transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true" v-model="slide"
          v-model:fullscreen="fullscreen" height="250px" bordered class="rounded-borders">

          <!-- 1. Slide -->
          <q-carousel-slide name="first" img-src="../assets/pictures_blooddonation/Blutspende_4.jpg">
            <div class="absolute-top custom-caption">
              <div class="text-h6">Erfahre mehr über die einzelnen Blutgruppen</div>
              <div class="text-subtitle1">text...</div>
            </div>
          </q-carousel-slide>

          <!-- 2. Slide -->
          <q-carousel-slide name="second" img-src="../assets/pictures_blooddonation/Blutspende_6.jpg">
            <div class="absolute-top custom-caption">
              <div class="text-h6">Weshalb ist deine Spende so wichtig?</div>
              <!--div class="text-subtitle1">Wo kann ich Blut spenden?</div-->
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

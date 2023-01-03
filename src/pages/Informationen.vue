<template>
  <q-page padding class="start">
    <div id="q-app">
      <q-card class="link-card">
        <q-card-section horizontal>

          <q-card-section @click="$router.push('/vorblutspende')">
            <q-card-section class="card-title">Vor der Blutspende</q-card-section>

            <q-card-section>
              <p>So bereite ich mich optimal auf die Blut- spende vor.</p>
            </q-card-section>
          </q-card-section>

          <q-separator vertical></q-separator>

          <q-card-section @click="$router.push('/nachblutspende')">
            <q-card-section class="card-title">Nach der Blutspende</q-card-section>
            <q-card-section>
              <p>Auf folgendes muss ich nach der Blutspende achten.</p>
            </q-card-section>
          </q-card-section>

        </q-card-section>
      </q-card>

    </div>


    <q-card class="link-card">
      <q-card-section class="card-title">Weshalb ist die Blutspende so wichtig?
      </q-card-section>
      <q-separator vertical></q-separator>
      <q-tabs v-model="tab">
        <q-tab label="Blutgruppen" name="one" />
        <q-tab label="Fakten" name="two" />
        <q-tab label="Sonstiges" name="three" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="one">
          <q-video src="https://www.youtube.com/embed/l1IgmkV-ebM" />
        </q-tab-panel>

        <q-tab-panel name="two">

          <q-item>
            <q-item-section>
              <q-item-label>4 von 5 Menschen brauchen mind. einmal im Leben fremdes Blut.</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="groups" color="primary" />
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <q-item-label>Die Schweiz ist täglich auf rund 700 Blutspenden angewiesen.</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="production_quantity_limits" color="primary" />
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <q-item-label>Das Blut kann nicht künstlich hergestellt werden.</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="bloodtype" color="primary" />
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <q-item-label>Mit einer Blutspende können bis zu 3 Leben gerettet werden.</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="volunteer_activism" color="primary" />
            </q-item-section>
          </q-item>

        </q-tab-panel>

        <q-tab-panel name="three">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Insta.
          <q-separator vertical></q-separator>
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
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
      tab: 'one',
    }
  }
});
</script>

<style>
.start {
  margin-top: 0pt;
}
</style>

<template>
  <q-page padding class="start">
    <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <q-expansion-item expand-separator icon="perm_identity" label="Personalien">
          <q-card>
            <q-card-section>
              <p>Vorname</p>
              <p>Nachname</p>

            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="bloodtype" label="Blutgruppe">
          <q-card>
            <q-card-section>
              <p>Blutgruppe</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="history" label="Spendehistorie">
          <q-card>
            <q-card-section>
              <p>Text</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="settings" label="Einstellungen">
          <q-card>
            <q-card-section>
              <div>
                <q-toggle v-model="value1" label="ich seit der letzten Spende wieder spenden darf." left-label />
              </div>
              <div>
                <q-toggle v-model="value2" label="der Bestand zu meiner Blutgruppe niedrig ist." left-label />
              </div>
              <div>
                <q-toggle v-model="value3" label="Ein Blutspende-Event in der Nähe statt finden wird." left-label />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="phonelink_lock" label="Datenschutz">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="grading" label="Impressum">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      tab: ref('personalien'),
      splitterModel: ref('20'),
      value1: ref(true),
      value2: ref(true),
      value3: ref(true),

    };
  },
});
</script>

<style>
.start {
  margin-top: 0pt;
}
</style>

<template>
  <div padding>
    <q-form @submit="submitForm" class="q-gutter-md">
      <div id="q-app">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="link-card">
            <q-card-section class="card-title">Vorab-Check:</q-card-section>
            <q-card-section>
              <p>1. Bist Du mindestens 50 kg schwer?</p>
              <q-btn-toggle type="submit" v-model="question_1" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>2. Fühlen Sie sich zurzeit gesund?</p>
              <q-btn-toggle v-model="question_2" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>
                3. Hatten Sie in den letzten 24 Std. eine dentalhygienische
                Behandlung?
              </p>
              <q-btn-toggle v-model="question_3" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>
                4. Hatten Sie in den letzten 4 Monaten eine Magen- und
                Darmspiegelung?
              </p>
              <q-btn-toggle v-model="question_4" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>5. Hatten Sie in den letzten 48 Stunden eine Blutentnahme?</p>
              <q-btn-toggle v-model="question_5" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>
                6. Haben Sie in den letzten 2 Wochen Antibiotika-Medikamente
                verwendet?
              </p>
              <q-btn-toggle v-model="question_6" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>
                7. Haben Sie in den letzten 48 Stunden eine Impfung erhalten?
              </p>
              <q-btn-toggle v-model="question_7" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>8. Hatten Sie in den letzten 4 Wochen einen Zeckenstich?</p>
              <q-btn-toggle v-model="question_8" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>
                9. Haben Sie sich in den letzten 4 Monaten ein Tattoo/Piercing
                stechen lassen?
              </p>
              <q-btn-toggle v-model="question_9" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
  { label: 'Ja', value: 'one' },
  { label: 'Nein', value: 'two' },
]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <q-btn label="Prüfe deine Antworten" class="full-width" color="primary" type="submit"
                @click="confirm = true"></q-btn>
            </q-card-section>
            <q-dialog v-model="confirm" persistent>
              <q-card class="my-card">
                <q-card-section class="bg-secondary text-white">
                  <q-avatar size="lg" class="align-center" icon="error_outline" color="primary"
                    text-color="white"></q-avatar>
                  <div class="text-h6">Our Changing Planet</div>
                  <div class="text-subtitle2">by John Doe</div>
                </q-card-section>
                <q-card-actions align="around">
                  <q-btn flat @click="$router.push('/termin')">Weiter</q-btn>
                  <q-btn flat v-close-popup>Abbrechen</q-btn>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-card>
          <q-card flat bordered class="q-mt-md bg-grey-2">
            <q-card-section>
              Submitted form contains empty formData.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  el: '#q-app',
  data() {
    return {
      question_1: null,
      question_2: null,
      question_3: null,
      question_4: null,
      question_5: null,
      question_6: null,
      question_7: null,
      question_8: null,
      question_9: null,
      confirm: ref(false),

    };
  },
  methods: {
    submitForm() {
      alert('well done')
    },

  }
});
</script>

<style>
.my-custom-toggle {
  border: 1px solid #027be3;
}
</style>

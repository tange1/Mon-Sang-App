<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated
        control-color="primary" class="rounded-borders">
        <!-- 1. Carousel -->
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div v-if="qData !== undefined">
            <QuestionComponent v-for="question in qData.getQuestions()" :key="question.id" :question="question"
              :language="lang" :onAnswer="qData.updateQuestionAnswers" :isSelected="qData.isAnswerOptionSelected" />
          </div>
          <div class="q-mt-md text-center">
            {{ qData.fhirQuestionnaire.id }}
          </div>
        </q-carousel-slide>

        <!-- 2. Carousel -->
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>

        <!-- 3. Carousel -->
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-mt-md text-center"></div>
        </q-carousel-slide>

        <!-- 4. Carousel -->
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" color="primary" size="56px" />
          <div class="q-mt-md text-center"></div>
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-center">
        <q-btn-toggle glossy v-model="slide" :options="[
  { label: 1, value: 'style' },
  { label: 2, value: 'tv' },
  { label: 3, value: 'layers' },
  { label: 4, value: 'map' },
]" />
      </div>
    </div>

    <div v-if="qData !== undefined">
      <QuestionComponent v-for="question in qData.getQuestions()" :key="question.id" :question="question"
        :language="lang" :onAnswer="qData.updateQuestionAnswers" :isSelected="qData.isAnswerOptionSelected" />
    </div>

    <!-- Buttons am Ende des Fragebogens -->
    <button :disabled="!qData" @click="qData?.resetResponse()">
      zurücksetzen
    </button>
    <button @click="setAnswers">Antworten speichern</button>

    <div id="q-app" style="min-height: 100vh;">
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Antworten speichern" color="primary" @click="confirm = true"></q-btn>
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="report" color="primary" text-color="white"></q-avatar>
              <span class="q-ml-sm">Dein Fragebogen wird im EPD Playground abgelegt und in einem QR-Code
                verpackt.</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Abbrechen" color="primary" v-close-popup></q-btn>
              <q-btn flat label="Bestätigen" color="primary" v-close-popup></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>

    <!-- RESPONSE MODAL-->
    <div v-if="response" class="modal" id="response-modal">
      <p>Hier ist die QuestionnaireResponse-Resource:</p>
      <textarea v-model="response"></textarea>
      <button @click="response = undefined">schliessen</button>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent from '../components/Question.vue';
import NEUSPENDER_GRUPPIERT from '../assets/questionnaires/neuspender-gruppiert.json';
import { Questionnaire } from '@i4mi/fhir_r4';
import { QuestionnaireData } from '@i4mi/fhir_questionnaire';
import { ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: { QuestionComponent },
  setup() {
    return {
      slide: ref('style'),
      lorem: 'text text text ...',
      confirm: ref(false)
    };
  },
  data() {
    return {
      lang: 'de',
      qData: new QuestionnaireData(NEUSPENDER_GRUPPIERT as Questionnaire, [
        'de',
      ]),
      response: undefined as string | undefined,
    };
  },

  methods: {
    setAnswers(): void {
      if (!this.qData) return;
      try {
        this.response = JSON.stringify(
          this.qData.getQuestionnaireResponse(this.lang, {
            reset: false,
            includeID: true,
          }),
          null,
          2
        );
      } catch (error) {
        console.log('Es ging etwas schief beim Questionnaire speichern', error);
      }
    },
  },
});
</script>

<style>
.modal {
  background-color: #ddd;
  width: 50%;
  height: 20em;
  position: fixed;
  top: 5%;
  color: black;
  z-index: 100;
  margin-left: 25%;
  padding: 1em;
}

.modal p {
  margin-top: 0;
}

button {
  margin: 0.5em;
  display: inline-block;
  width: 25%;
}

.modal textarea {
  width: 100%;
  height: 18em;
}
</style>

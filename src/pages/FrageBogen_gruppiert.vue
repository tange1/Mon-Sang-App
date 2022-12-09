<template>
  <br />
  <q-page padding>
    <div v-if="qData !== undefined">
      <QuestionComponent
        v-for="question in qData.getQuestions()"
        :key="question.id"
        :question="question"
        :language="lang"
        :onAnswer="qData.updateQuestionAnswers"
        :isSelected="qData.isAnswerOptionSelected"
      />
    </div>

    <!-- Buttons am Ende des Fragebogens -->
    <button :disabled="!qData" @click="qData?.resetResponse()">
      zurücksetzen
    </button>
    <button @click="setAnswers">Antworten speichern</button>

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
import { Questionnaire, QuestionnaireResponse } from '@i4mi/fhir_r4';
import { QuestionnaireData } from '@i4mi/fhir_questionnaire';

export default defineComponent({
  name: 'App',
  components: { QuestionComponent },
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

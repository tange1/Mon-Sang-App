<template>
  <q-page padding>
    <q-card>
      <div v-if="qData !== undefined">
        <QuestionComponent v-for="question in qData.getQuestions()" :key="question.id" :question="question"
          :language="lang" :onAnswer="qData.updateQuestionAnswers" :isSelected="qData.isAnswerOptionSelected" />
      </div>

      <!-- Buttons am Ende des Fragebogens -->
      <q-separator inset></q-separator>
      <q-card-section>
        <q-btn :disabled="!qData" @click="qData?.resetResponse()" class="full-width" color="primary">Antworten
          zurücksetzen</q-btn>
        <q-separator inset></q-separator>
        <q-btn @click="setAnswers" class="full-width" color="primary">Antworten speichern</q-btn>
      </q-card-section>

      <!--button :disabled="!qData" @click="qData?.resetResponse()">
        zurücksetzen
      </button>
      <button @click="setAnswers">Antworten speichern</button-->

      <!-- RESPONSE MODAL-->
      <div v-if="response" class="modal" id="response-modal">
        <p>Hier ist die QuestionnaireResponse-Resource:</p>
        <textarea v-model="response"></textarea>
        <button @click="response = undefined">schliessen</button>
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent from '../components/Question.vue';
import NEUSPENDER from '../assets/questionnaires/neuspender.json';
import { Questionnaire, Bundle, BundleType, Patient } from '@i4mi/fhir_r4';
import { QuestionnaireData } from '@i4mi/fhir_questionnaire';
import { Iti65DocumentBundle, useITI65, createIti65Bundle, Iti65Metadata, SystemCodeExtension } from '@i4mi/mhealth-proto-components';


export default defineComponent({
  name: 'App',
  components: { QuestionComponent },
  data() {
    return {
      lang: 'de',
      qData: new QuestionnaireData(NEUSPENDER as Questionnaire, ['de']),
      response: undefined as string | undefined,
      categorySelect: undefined as SystemCodeExtension | undefined,
    };
  },

  methods: {
    // beim Button: Antwort speichern
    setAnswers(): void {
      if (!this.qData) return;

      /**try {
        this.response = JSON.stringify( // stringify converts a JS value to a JSON string
          this.qData.getQuestionnaireResponse(this.lang, {
            reset: false,
            includeID: true,
          }),
          null,
          2
        );
      } catch (error) {
        console.log('Es ging etwas schief beim Questionnaire speichern', error);
      };*/
      const category = {
        system: 'http://snomed.info/sct',
        code: '184216000',
        display: 'Patient record type'
      };

      const type = {
        system: 'http://snomed.info/sct',
        code: '419891008',
        display: 'Record artifact (record artifact)'
      };

      const metadata = {
        title: 'QuestionnaireResponse',
        isFhir: true,
        description: 'Set of all responses, which have to be answered before donating blood',
        contentLanguage: 'de',
        sourceIdentifier: this.$store.getOids().app,
        categoryCoding: category,
        typeCoding: type,
        facilityCoding: {
          system: 'http://snomed.info/sct',
          code: '394778007',
          display: "Client's or patient's home (environment)",
        },
        practiceSettingCoding: {
          system: 'http://snomed.info/sct',
          code: '394802001',
          display: 'General medicine',
        }
        //authorRole: ITI_65_AUTHOR_ROLE.PAT

      } as Iti65Metadata;
      this.$fhirUtils.createIti65Bundle(this.$store.getUser(), new File([JSON.stringify(this.response)], 'Fragebogen.json',
        {
          type: 'application/fhir+json'
        }), metadata).then((result) => this.$epdUtils.useITI65(result))
        .then((result) => console.log(JSON.stringify(result)))
        .catch((error) => console.error(error));
    },
  },
});
</script>

<style>

</style>

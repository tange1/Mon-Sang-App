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
        <q-popup-proxy>
          <q-banner>
            <template v-slot:avatar>
              <q-icon name="signal_wifi_off" color="primary" />
            </template>
            Der Fragebogen wurde erfolgreich hochgeladen.
          </q-banner>
        </q-popup-proxy>
        <button @click="response = undefined">schliessen</button>
      </div>

      <!--div v-if="response" class="modal" id="response-modal">
        <p>Hier ist die QuestionnaireResponse-Resource:</p>
        <textarea v-model="response"></textarea>
        <button @click="response = undefined">schliessen</button>
      </div-->
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionComponent from '../components/Question.vue';
import NEUSPENDER from '../assets/questionnaires/neuspender.json';
import { Questionnaire, Bundle, BundleType, Patient, QuestionnaireResponse, ContactPointUse, ContactPointSystem, ContactPoint, HumanName, HumanNameNameUse } from '@i4mi/fhir_r4';
import { IAnswerOption, QuestionnaireData } from '@i4mi/fhir_questionnaire';
import EpdPlaygroundUtils, { ITI_93_ACTION } from '@i4mi/mhealth-proto-components';
import { Iti65DocumentBundle, Iti65Metadata, SystemCodeExtension } from '@i4mi/mhealth-proto-components';
import { response } from 'express';
import { QPage, QCard, QSeparator, QCardSection, QBtn, QPopupProxy, QBanner, QIcon } from 'quasar';


export default defineComponent({
  name: 'App',
  components: { QuestionComponent },
  data() {
    return {
      lang: 'de',
      qData: new QuestionnaireData(NEUSPENDER as Questionnaire, ['de']),
      response: undefined as QuestionnaireResponse | undefined,
      categorySelect: undefined as SystemCodeExtension | undefined,
    };
  },

  // hier die Personalien aus dem Fragebogen hinterlegen.
  beforeMount() {
    console.log(this.$store.getPatient());

    // Family Name
    const familyNameQuestion = this.qData.findQuestionById('P1', this.qData.getQuestions());
    if (familyNameQuestion) {
      this.qData.updateQuestionAnswers(familyNameQuestion, { answer: { de: 'Wyss' }, code: 'Wyss' } as IAnswerOption);
    }

    // Given Name
    const givenNameQuestion = this.qData.findQuestionById('P2', this.qData.getQuestions());
    if (givenNameQuestion) {
      this.qData.updateQuestionAnswers(givenNameQuestion, { answer: { de: 'Laura' }, code: 'Laura' } as IAnswerOption);
    }

    // E-Mail
    const emailQuestion = this.qData.findQuestionById('P11', this.qData.getQuestions());
    if (emailQuestion) {
      this.qData.updateQuestionAnswers(emailQuestion, { answer: { de: 'test@test.ch' }, code: 'test@test.ch' } as IAnswerOption);
    }

    // Phone Private
    const phonePrivateQuestion = this.qData.findQuestionById('P8', this.qData.getQuestions());
    if (phonePrivateQuestion) {
      this.qData.updateQuestionAnswers(phonePrivateQuestion, { answer: { de: '076 111 22 33' }, code: '076 111 22 33' } as IAnswerOption);
    }

  },

  methods: {
    // beim Button: Antwort speichern
    setAnswers(): void {
      if (!this.qData) return;

      try {
        this.response =
          this.qData.getQuestionnaireResponse(this.lang, {
            reset: false,
            includeID: true,
          })
      } catch (error) {
        console.log('Es ging etwas schief beim Questionnaire speichern', error);
      };

      // ergänze oder update alle nötigen
      const patientResource = this.$store.getPatient();

      // Familienname
      if (!patientResource.name) patientResource.name = [];
      const familyName = this.qData.getQuestions().find(question => question.id === 'P1')?.selectedAnswers[0].valueString;
      const familyNameContactPoint: HumanName = {
        family: familyName,
        use: HumanNameNameUse.USUAL
      };
      const familyNameIndex = patientResource.name.findIndex(name => name.use === HumanNameNameUse.USUAL);
      if (familyNameIndex === -1) {
        patientResource.name.push(familyNameContactPoint)
      } else {
        patientResource.name[familyNameIndex] = familyNameContactPoint
      };

      // Vorname
      if (!patientResource.name) patientResource.name = [];
      const givenName = this.qData.getQuestions().find(question => question.id === 'P2')?.selectedAnswers[0].valueString;
      const givenNameContactPoint: HumanName = {
        family: familyName,
        use: HumanNameNameUse.USUAL
      };
      const givenNameIndex = patientResource.name.findIndex(name => name.use === HumanNameNameUse.USUAL);
      if (givenNameIndex === -1) {
        patientResource.name.push(givenNameContactPoint)
      } else {
        patientResource.name[givenNameIndex] = givenNameContactPoint
      };

      // E-Mail
      if (!patientResource.telecom) patientResource.telecom = [];
      const email = this.qData.getQuestions().find(question => question.id === 'P11')?.selectedAnswers[0].valueString;
      const emailContactPoint: ContactPoint = {
        system: ContactPointSystem.EMAIL,
        value: email,
        use: ContactPointUse.HOME
      };
      const emailIndex = patientResource.telecom.findIndex(telecom => telecom.system === ContactPointSystem.EMAIL && telecom.use === ContactPointUse.HOME);
      if (emailIndex === -1) {
        patientResource.telecom.push(emailContactPoint)
      } else {
        patientResource.telecom[emailIndex] = emailContactPoint
      };

      // Telefon Privat
      const phonePrivate = this.qData.getQuestions().find(question => question.id === 'P8')?.selectedAnswers[0].valueString;
      const phoneContactPoint: ContactPoint = {
        system: ContactPointSystem.PHONE,
        value: phonePrivate,
        use: ContactPointUse.HOME
      };
      const phonePrivateIndex = patientResource.telecom.findIndex(telecom => telecom.system === ContactPointSystem.PHONE && telecom.use === ContactPointUse.HOME);
      if (phonePrivateIndex === -1) {
        patientResource.telecom.push(phoneContactPoint)
      } else {
        patientResource.telecom[phonePrivateIndex] = phoneContactPoint
      };



      // Adds or edits patient data
      this.$epdUtils.useITI93(this.$store.getPatient(), ITI_93_ACTION.UPDATE)

      const category = {
        system: 'http://snomed.info/sct',
        code: '417319006',
        display: 'Dokument zu gesundheitsrelevantem Ereignis'
      };

      const type = {
        system: 'http://snomed.info/sct',
        code: '445418005',
        display: 'Dokument ausserhalb des Behandlungskontextes'
      };

      // Mit createITI65Bundle() den Bundle erstellen und JSON-Datei hochladen.
      const metadata = {
        title: 'QuestionnaireResponse',
        isFhir: true,
        description: 'Ausgefüllter Fragebogen',
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
        },
        //authorRole: ITI_65_AUTHOR_ROLE.PAT

      } as Iti65Metadata;
      this.$fhirUtils.createIti65Bundle(this.$store.getPatient(), new File([JSON.stringify(this.response)], 'Fragebogen' + new Date() + '.json',
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

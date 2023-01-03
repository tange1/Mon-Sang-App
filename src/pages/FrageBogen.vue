<template>
  <q-page padding>
    <q-card>
      <q-card-section class="card-title">Fragebogen</q-card-section>
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
import { Questionnaire, Bundle, BundleType, Patient, QuestionnaireResponse, ContactPointUse, ContactPointSystem, ContactPoint, HumanName, HumanNameNameUse, code, PatientAdministrativeGender, AddressUse, AddressType, Address, IdentifierUse } from '@i4mi/fhir_r4';
import { IAnswerOption, QuestionnaireData } from '@i4mi/fhir_questionnaire';
import EpdPlaygroundUtils, { ITI_93_ACTION } from '@i4mi/mhealth-proto-components';
import { Iti65DocumentBundle, Iti65Metadata, SystemCodeExtension } from '@i4mi/mhealth-proto-components';
import { identifier, Identifier } from '@babel/types';
//import { response } from 'express';
//import { QPage, QCard, QSeparator, QCardSection, QBtn, QPopupProxy, QBanner, QIcon, date } from 'quasar';


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

    // Date of Birth
    const dateOfBirthQuestion = this.qData.findQuestionById('P4', this.qData.getQuestions());
    if (dateOfBirthQuestion) {
      this.qData.updateQuestionAnswers(dateOfBirthQuestion, { answer: { de: '03.01.1927' }, code: '03.01.1927' } as IAnswerOption);
    }

    // Gender
    const genderQuestion = this.qData.findQuestionById('P5', this.qData.getQuestions());
    if (genderQuestion) {
      this.qData.updateQuestionAnswers(genderQuestion, { answer: { de: 'weiblich' }, code: 'female' } as IAnswerOption);
    }

    // Address Street
    const addressLineQuestion = this.qData.findQuestionById('P7.1', this.qData.getQuestions());
    if (addressLineQuestion) {
      this.qData.updateQuestionAnswers(addressLineQuestion, { answer: { de: 'Oberdorfstrasse' }, code: 'Oberdorfstrasse' } as IAnswerOption);
    }
    // Address Street Number
    const addressLineNumberQuestion = this.qData.findQuestionById('P7.2', this.qData.getQuestions());
    if (addressLineNumberQuestion) {
      this.qData.updateQuestionAnswers(addressLineNumberQuestion, { answer: { de: '3' }, code: '3' } as IAnswerOption);
    }
    // Address Postal Code
    const addressPostalCodeQuestion = this.qData.findQuestionById('P7.3', this.qData.getQuestions());
    if (addressPostalCodeQuestion) {
      this.qData.updateQuestionAnswers(addressPostalCodeQuestion, { answer: { de: '4001' }, code: '4001' } as IAnswerOption);
    }
    // Address City
    const addressCityQuestion = this.qData.findQuestionById('P7.4', this.qData.getQuestions());
    if (addressCityQuestion) {
      this.qData.updateQuestionAnswers(addressCityQuestion, { answer: { de: 'Basel' }, code: 'Basel' } as IAnswerOption);
    }

    // Phone Private
    const phonePrivateQuestion = this.qData.findQuestionById('P8', this.qData.getQuestions());
    if (phonePrivateQuestion) {
      this.qData.updateQuestionAnswers(phonePrivateQuestion, { answer: { de: '076 111 22 33' }, code: '076 111 22 33' } as IAnswerOption);
    }
    // Phone Mobile
    const phoneMobileQuestion = this.qData.findQuestionById('P9', this.qData.getQuestions());
    if (phoneMobileQuestion) {
      this.qData.updateQuestionAnswers(phoneMobileQuestion, { answer: { de: '076 111 22 44' }, code: '076 111 22 44' } as IAnswerOption);
    }
    // Phone Work
    const phoneWorkQuestion = this.qData.findQuestionById('P10', this.qData.getQuestions());
    if (phoneWorkQuestion) {
      this.qData.updateQuestionAnswers(phoneWorkQuestion, { answer: { de: '076 111 22 55' }, code: '076 111 22 55' } as IAnswerOption);
    }
    // E-Mail
    const emailQuestion = this.qData.findQuestionById('P11', this.qData.getQuestions());
    if (emailQuestion) {
      this.qData.updateQuestionAnswers(emailQuestion, { answer: { de: 'laura@wyss.ch' }, code: 'laura@wyss.ch' } as IAnswerOption);
    }
    // Q1
    const Q1Question = this.qData.findQuestionById('Q1', this.qData.getQuestions());
    if (Q1Question) {
      this.qData.updateQuestionAnswers(Q1Question, { answer: { de: 'Ja' }, code: '373066001' } as IAnswerOption);
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
      const familyNameHumanName: HumanName = {
        family: familyName,
        use: HumanNameNameUse.USUAL
      };
      const familyNameIndex = patientResource.name.findIndex(name => name.use === HumanNameNameUse.USUAL);
      if (familyNameIndex === -1) {
        patientResource.name.push(familyNameHumanName)
      } else {
        patientResource.name[familyNameIndex] = familyNameHumanName
      };

      // HumanName
      if (!patientResource.name) patientResource.name = [];

      // Vorname
      const givenName = this.qData.getQuestions().find(question => question.id === 'P2')?.selectedAnswers[0].valueString;
      const givenNameHumanName: HumanName = {
        family: givenName,
        use: HumanNameNameUse.USUAL
      };
      const givenNameIndex = patientResource.name.findIndex(name => name.use === HumanNameNameUse.USUAL);
      if (givenNameIndex === -1) {
        patientResource.name.push(givenNameHumanName)
      } else {
        patientResource.name[givenNameIndex] = givenNameHumanName
      };

      // Date of Birth
      const dateOfBirth = this.qData.getQuestions().find(question => question.id === 'P4')?.selectedAnswers[0].valueString;
      if (dateOfBirth) {
        const birthDateDate: Date = new Date(dateOfBirth);
        patientResource.birthDate = birthDateDate.toISOString().substring(0, 10)
      }

      // Gender
      const gender = this.qData.getQuestions().find(question => question.id === 'P5')?.selectedAnswers[0].valueString;
      if (gender) {
        patientResource.gender = gender as PatientAdministrativeGender
      }

      // Address
      if (!patientResource.address) patientResource.address = [];
      // Address Street
      const addressLine = this.qData.getQuestions().find(question => question.id === 'P7.1')?.selectedAnswers[0].valueString;
      const lineAddress: Address = {
        text: addressLine,
        use: AddressUse.HOME,
        type: AddressType.BOTH
      };
      const addressLineIndex = patientResource.address.findIndex(address => address.use === AddressUse.HOME && address.type === AddressType.BOTH);
      if (addressLineIndex === -1) {
        patientResource.address.push(lineAddress)
      } else {
        patientResource.address[addressLineIndex] = lineAddress
      };
      // Address Street Number
      const addressLineNumber = this.qData.getQuestions().find(question => question.id === 'P7.2')?.selectedAnswers[0].valueString;
      const lineNumberAddress: Address = {
        text: addressLineNumber,
        use: AddressUse.HOME,
        type: AddressType.BOTH
      };
      const addressLineNumberIndex = patientResource.address.findIndex(address => address.use === AddressUse.HOME && address.type === AddressType.BOTH);
      if (addressLineNumberIndex === -1) {
        patientResource.address.push(lineNumberAddress)
      } else {
        patientResource.address[addressLineNumberIndex] = lineNumberAddress
      };
      // Address Postal Code
      const addressPostalCode = this.qData.getQuestions().find(question => question.id === 'P7.3')?.selectedAnswers[0].valueString;
      const postalCodeAddress: Address = {
        postalCode: addressPostalCode,
        use: AddressUse.HOME,
        type: AddressType.BOTH
      };
      const addressPostalCodeIndex = patientResource.address.findIndex(address => address.use === AddressUse.HOME && address.type === AddressType.BOTH);
      if (addressPostalCodeIndex === -1) {
        patientResource.address.push(postalCodeAddress)
      } else {
        patientResource.address[addressPostalCodeIndex] = postalCodeAddress
      };
      // Address Postal Code
      const addressCity = this.qData.getQuestions().find(question => question.id === 'P7.4')?.selectedAnswers[0].valueString;
      const cityddress: Address = {
        city: addressCity,
        use: AddressUse.HOME,
        type: AddressType.BOTH
      };
      const addressCityIndex = patientResource.address.findIndex(address => address.use === AddressUse.HOME && address.type === AddressType.BOTH);
      if (addressCityIndex === -1) {
        patientResource.address.push(cityddress)
      } else {
        patientResource.address[addressCityIndex] = cityddress
      };


      // ContactPoint
      if (!patientResource.telecom) patientResource.telecom = [];
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
      // Telefon Mobile
      const phoneMobile = this.qData.getQuestions().find(question => question.id === 'P9')?.selectedAnswers[0].valueString;
      const mobileContactPoint: ContactPoint = {
        system: ContactPointSystem.PHONE,
        value: phoneMobile,
        use: ContactPointUse.MOBILE
      };
      const phoneMobileIndex = patientResource.telecom.findIndex(telecom => telecom.system === ContactPointSystem.PHONE && telecom.use === ContactPointUse.MOBILE);
      if (phoneMobileIndex === -1) {
        patientResource.telecom.push(mobileContactPoint)
      } else {
        patientResource.telecom[phoneMobileIndex] = mobileContactPoint
      };
      // Telefon Work
      const phoneWork = this.qData.getQuestions().find(question => question.id === 'P10')?.selectedAnswers[0].valueString;
      const workContactPoint: ContactPoint = {
        system: ContactPointSystem.PHONE,
        value: phoneWork,
        use: ContactPointUse.WORK
      };
      const phoneWorkIndex = patientResource.telecom.findIndex(telecom => telecom.system === ContactPointSystem.PHONE && telecom.use === ContactPointUse.WORK);
      if (phoneWorkIndex === -1) {
        patientResource.telecom.push(workContactPoint)
      } else {
        patientResource.telecom[phoneWorkIndex] = workContactPoint
      };
      // E-Mail
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

      // Identifier Fragebogen
      // Q1
      /**const q1 = this.qData.getQuestions().find(question => question.id === 'Q1')?.selectedAnswers[0].valueString;
      const Q1Question: Identifier = {
        use: IdentifierUse.TEMP,
        value: q1,
        //type: IdentifierType.code
      };
      const q1QuestionIndex = patientResource.identifier.findIndex(identifier => identifier.use === IdentifierUse.TEMP);
      if (q1QuestionIndex === -1) {
        patientResource.identifier.push(q1QuestionIndex)
      } else {
        patientResource.identifier[q1QuestionIndex] = Q1Question
      };
      */

      // Adds or edit patient data
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

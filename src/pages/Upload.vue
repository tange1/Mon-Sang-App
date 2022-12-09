<template>
  <q-card class="about-card">
    <q-card-section class="card-title">Deine Fragebogen-Historie</q-card-section>
    <q-card-section>
      <DocumentUpload @upload-result="onUploaded" :patient="$store.getPatient()" :onDone="() => {}"
        :translations="documentUploadStrings" :fhirUtils="$fhirUtils" :epdPlaygroundUtils="$epdUtils" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DocumentUpload } from '@i4mi/mhealth-proto-components';

export default defineComponent({
  name: 'Upload-Page',
  components: { DocumentUpload },
  data() {
    return {
      documentUploadStrings: {
        titleLabel: this.$t('documents.uploadComponent.titleLabel'),
        titleInputLabel: this.$t('documents.uploadComponent.titleInput'),
        descriptionText: this.$t('documents.uploadComponent.descriptionText'),
        uploadButtonLabel: this.$t('documents.uploadComponent.uploadFile'),
        categoryLabel: this.$t('documents.uploadComponent.fileTypeCategory'),
        typeLabel: this.$t('documents.uploadComponent.fileType'),
        selectFile: this.$t('documents.uploadComponent.selectFile'),
        selectFileText: this.$t('documents.uploadComponent.selectFileText'),
        metadata: this.$t('documents.uploadComponent.metadata'),
        metadataText: this.$t('documents.uploadComponent.metadataText'),
        titleAndDescription: this.$t('documents.uploadComponent.titleAndDescription'),
        languageText: this.$t('documents.uploadComponent.languageText'),
        fileTypeText: this.$t('documents.uploadComponent.fileTypeText'),
        typeNotSufficient: this.$t('documents.uploadComponent.typeNotSufficient'),
        creatingInstitution: this.$t('documents.uploadComponent.creatingInstitution'),
        creatingInstitutionText: this.$t('documents.uploadComponent.creatingInstitutionText'),
        institution: this.$t('documents.uploadComponent.institution'),
        specialisation: this.$t('documents.uploadComponent.specialisation'),
        specialisationText: this.$t('documents.uploadComponent.specialisationText'),
        jsonFhir: this.$t('documents.uploadComponent.jsonFhir'),
        descriptionInputLabel: this.$t('common.description'),
        cancelButtonLabel: this.$t('common.cancel'),
        continue: this.$t('common.continue'),
        language: this.$t('common.language'),
        back: this.$t('common.back')
      }
    }
  },
  methods: {
    onUploaded() {
      this.$router.push('documents')
        .then(() => null)
        .catch(e => console.log(e));
    }
  }
});
</script>

<style scoped lang="scss">
.add-button {
  margin-top: 1em;
  align-self: end;
  display: block;
  margin-left: auto;
  margin-right: 0;
}
</style>

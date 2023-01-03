<template>
  <p>TestPage</p>
  <!--
  Forked from:
  https://quasar.dev/vue-components/toggle#example--native-form
-->
  <!--div id="q-app" style="min-height: 100vh;">
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="bg-grey-2 q-pa-sm rounded-borders">
          <q-toggle name="music_active" v-model="activateMusic" label="50 Kg?" true-value="YES"></q-toggle>
          <q-toggle name="light_active" v-model="activateLights" label="Zurzeit gesund?" true-value="YES"></q-toggle>
        </div>

        <div>
          <q-btn label="Submit" type="submit" color="primary"></q-btn>
        </div>
      </q-form>

      <q-card v-if="submitEmpty" flat bordered class="q-mt-md bg-grey-2">
        <q-card-section>
          Submitted form contains empty formData.
        </q-card-section>
      </q-card>

      <q-card v-else-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
        <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
        <q-separator></q-separator>
        <q-card-section class="row q-gutter-sm items-center">
          <div v-for="(item, index) in submitResult" :key="index"
            class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap">{{ item.name }} = {{
    item.value
            }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div-->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const submitEmpty = ref(false)
    const submitResult = ref([])

    return {
      activateMusic: ref(null),
      activateLights: ref(null),

      submitEmpty,
      submitResult,

      /**
            onSubmit() {
              const formData = new FormData(target)
              const data = []

              for (const [name, value] of formData.entries()) {
                data.push({
                  name,
                  value
                })
              }

              submitResult.value = data
              submitEmpty.value = data.length === 0
            }
            */
    }
  }
})




</script>

<style>

</style>

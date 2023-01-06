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
      <q-card-section class="card-title">Wissenswertes über die Blutspende
      </q-card-section>
      <q-separator vertical></q-separator>
      <q-tabs v-model="tab">
        <q-tab label="Blutgruppen" name="one" />
        <q-tab label="Fakten" name="two" />
        <q-tab label="FAQ" name="three" />
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
          <q-list>
            <q-expansion-item expand-separator label="Wem hilft meine Blutspende?" color="primary">
              <q-card-section>
                Eine Blutspende hilft vor allem Krebspatientinnen und -patienten. Aber auch bei Operationen,
                Erkrankungen oder Unfällen werden Blutspenden benötigt.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Wer kann Blut spenden?">
              <q-card-section>
                Blut spenden können grundsätzlich alle gesunden Menschen zwischen 18 und 75 Jahren, die über 50 kg
                wiegen. Bei der ersten Blutspende beträgt das maximale Alter 60 Jahre.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Was muss ich zur Blutspende mitgringen?">
              <q-card-section>
                Um sich auszuweisen, bringen Sie bitte zu jeder Blutspende Ihren Blutspendeausweis, Ihre Identitätskarte
                oder Ihren Pass mit.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Wie lange dauert eine Blutspende?">
              <q-card-section>
                Die Spende an sich dauert ca. 10 Minuten. Nach der Spende sollten Sie ein paar Minuten auf der Liege
                ruhen. Für alle Schritte der Blutspende inklusive Fragebogen und Gespräch vorab sowie die anschliessende
                Stärkung sollten Sie ungefähr 45 Minuten einplanen.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Ist Blut spenden schmerzhaft?">
              <q-card-section>
                Es wird ein kleiner Stich in den Finger gemacht, um den Blutfarbstoffgehalt (Hämoglobin) zu bestimmen.
                Für die Blutentnahme selbst ist ein Stich in die Vene erforderlich. Dies kann unangenehm sein, aber die
                Blutspende ist schmerzlos.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Wieviel Blut wird gespendet?">
              <q-card-section>
                In der Regel werden 450 Milliliter Blut abgenommen. Dies entspricht ca. 10 Prozent des Gesamtvolumens.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Wie häufig kann man Blut spenden?">
              <q-card-section>
                Frauen können 3x, Männer 4x im Jahr Blut spenden, mit einem Abstand von ca. 10 – 12 Wochen. Bei der
                Plasma- sowie der Thrombozytenspende können die Abstände kürzer sein. Voraussetzung für die alle Spenden
                ist, dass die spendende Person sich wohlfühlt und spendefähig ist.
              </q-card-section>
            </q-expansion-item>

            <q-expansion-item expand-separator label="Warum muss der Fragebogen jedes Mal ausgefüllt werden?">
              <q-card-section>
                Der Fragebogen dient zur Ermittlung des aktuellen Gesundheitszustandes. Er hilft, abzuklären, ob eine
                Blutspende möglich ist. Diese Massnahme dient sowohl der Sicherheit der Blutspenderin bzw. des
                Blutspenders als auch der Patienten.
              </q-card-section>
            </q-expansion-item>
          </q-list>
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

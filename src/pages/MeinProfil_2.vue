<template>
  <q-page padding class="start">
    <div>

      <q-card class="col-6">
        <q-card-section class="card-title">Profil</q-card-section>

        <q-list bordered class="rounded-borders">

          <q-expansion-item expand-separator icon="perm_identity" label="Personalien" color="primary">
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col">
                    Familienname
                  </div>
                  <div class="col">
                    {{ user.familyName }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    Vorname
                  </div>
                  <div class="col">
                    {{ user.givenName }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    Geburtsname
                  </div>
                  <div class="col">
                    {{ user.maidenName }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    Geburtsdatum
                  </div>
                  <div class="col">
                    {{ user.birthdate }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    Geschlecht
                  </div>
                  <div class="col">
                    {{ user.gender }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    Telefon
                  </div>
                  <div class="col">
                    {{ user.phone }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    E-Mail
                  </div>
                  <div class="col">
                    {{ user.username }}
                  </div>
                </div>
                <q-separator horizontal spaced />
                <div class="row">
                  <div class="col">
                    Spendernummer
                  </div>
                  <div class="col">
                    {{ user.donationNumber }}
                  </div>
                </div>


              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="bloodtype" label="Blutgruppe">
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col">
                    Blutgruppe
                  </div>
                  <div class="col">
                    0+
                  </div>
                </div>
                <q-separator horizontal spaced />
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="history" label="Spendehistorie">
            <q-card>
              <q-item>
                <q-item-section>
                  <q-item-label>Wann: 19.12.2022</q-item-label>
                  <q-item-label caption lines="3">Wo: Blutspendezentrum Bern
                    Murtenstrasse 137A
                    3009 Bern</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="emergency" color="primary" />
                </q-item-section>
              </q-item>
              <q-separator spaced inset />
              <q-item>
                <q-item-section>
                  <q-item-label>Wann: 03.08.2022</q-item-label>
                  <q-item-label caption lines="3">Wo: Blutspendezentrum Bern
                    Murtenstrasse 137A
                    3009 Bern</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="emergency" color="primary" />
                </q-item-section>
              </q-item>
              <q-separator spaced inset />
              <q-item>
                <q-item-section>
                  <q-item-label>Wann: 14.02.2022</q-item-label>
                  <q-item-label caption lines="3">Wo: Blutspendezentrum Bern
                    Murtenstrasse 137A
                    3009 Bern</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="emergency" color="primary" />
                </q-item-section>
              </q-item>

            </q-card>

          </q-expansion-item>

          <q-expansion-item expand-separator icon="settings" label="Einstellungen">
            <q-card>
              <q-list>
                <q-item tag="label">
                  <q-item-section>
                    <q-item-label>Spendetauglichkeit</q-item-label>
                    <q-item-label caption>Benachrichtigung erhalten, sobald nach der letzten Spenden wieder gespendet
                      werden darf.</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle color="primary" v-model="notifications" val="battery" />
                  </q-item-section>
                </q-item>

                <q-separator spaced inset />

                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Niedriger Blutgruppenbestand</q-item-label>
                    <q-item-label caption>Benachrichtigung erhalten, wenn es zu meiner Blutgruppe wenig Bestand
                      hat.</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle color="primary" v-model="notifications" val="friend" />
                  </q-item-section>
                </q-item>

                <q-separator spaced inset />

                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Kommende Blutspende-Events</q-item-label>
                    <q-item-label caption>Benachrichtigung erhalten, wenn Blutspende-Events in der Nähe
                      anstehen.</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                    <q-toggle color="primary" v-model="notifications" val="picture" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-expansion-item>

        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { LoginType } from 'src/model/interfaces';
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
      text: ref(''),
      user: {} as LoginType,
      notifications: ref(['friend']),

    };
  },
  mounted() {
    this.user = this.$store.getUser() || ({} as LoginType);
  },
});
</script>

<style>
.start {
  margin-top: 0pt;
}
</style>

<template>
  <router-view v-if="isLoggedIn" />
  <!--LoginMock v-else :acceptedLogins="logins" :onLogin="login" @message="displayMessage" :processing="processingLogin" /-->
  <LoginMock v-else :acceptedLogins="logins" :onLogin="login" @message="displayMessage" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Notify } from 'quasar';
import LoginMock from './components/LoginMock.vue';
import { LoginType, UIMessage, UIMessageType } from './model/interfaces';
import ACCEPTED_LOGINS from './assets/login/acceptedLogins.json';

// eslint-disable-next-line @typescript-eslint/ban-types
const toasts: Function[] = [];

export default defineComponent({
  name: 'App',
  components: { LoginMock },
  data() {
    return {
      isLoggedIn: false,
      processingLogin: false,
      logins: ACCEPTED_LOGINS as LoginType[],
    };
  },
  mounted() {
    this.isLoggedIn = this.$store.getUser() !== undefined;
  },
  methods: {
    /**
    login(user: LoginType): void {
      this.isLoggedIn = user !== undefined;
      this.$store.setUser(user);
      // hide toasts
      toasts.forEach((toast) => {
        toast();
      });
    },
    */
    login(user: LoginType): void {
      // hide toasts
      this.processingLogin = true;
      toasts.forEach((toast) => {
        toast();
      });
      if (user) {
        // Patientendaten aus dem EPD Playground abrufen.
        this.$epdUtils
          .useITI78({
            given: user.givenName,
            family: user.familyName,
          })
          .then((patientResources) => {
            if (patientResources.length === 0) {
              this.displayMessage({
                type: UIMessageType.ERROR,
                title: 'Gewöhnlicher Fehler',
                text: 'Es konnten keine passenden Daten im EPD Playground',
              });
              console.warn(
                'Es wurde keinen passenden Patienten für ' +
                user.givenName +
                ' ' +
                user.familyName +
                ' gefunden.'
              );
            } else {
              this.$store.setUser(user);
              this.$store.setPatient(patientResources[0]);
              this.processingLogin = false;
              this.isLoggedIn = true;
            }
          })
          .catch((error) => {
            this.displayMessage({
              type: UIMessageType.ERROR,
              title: 'Gewöhnlicher Fehler',
              text: 'Es konnte keine passenden Daten im EPD Playground',
            });
            console.warn('Something went wrong logging in', error);
          });
      }
    },

    displayMessage(message: UIMessage) {
      switch (message.type) {
        case UIMessageType.SMS:
          toasts.push(
            Notify.create({
              message: message.title,
              caption: message.text,
              position: 'top',
            })
          );
          break;
        case UIMessageType.ERROR:
          toasts.push(
            Notify.create({
              message: message.title,
              caption: message.text,
              type: 'negative',
            })
          );
          console.warn('ERROR - ' + message.title + ': ' + message.text);
      }
    },
  },
});
</script>

<style lang="scss">
.card-title {
  color: $primary;
  font-size: 1.2em;
  text-align: center;
  font-weight: bolder;
  border-bottom-color: gray;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  padding-bottom: 0.5em;
}

.q-card {
  margin: 1.5em;
}

.q-card p {
  margin-bottom: 0.4em;
  text-align: justify;
}

a:hover {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.q-table__title {
  font-size: 1.2em;
}
</style>

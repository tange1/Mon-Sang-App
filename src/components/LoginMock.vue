<template>
  <q-card class="login-card">
    <img class="horizontal-middle" alt="Mon Sang App logo" src="../assets/logo/logo_4.png" />


    <q-card-section class="card-title">Login</q-card-section>
    <template v-if="code === ''">
      <q-card-section class="login-text">
        <p>Willkommen in der Mon Sang App</p>
        <p>Melde dich mit deiner E-Mailadresse und Passwort an.</p>

        <form id="login-form">

          <q-input v-model="eId" label="Email" type="email" />

          <q-input v-model="password" label="Passwort" type="password" />
          <q-btn class="bottom-center" id="login-button" @click="login" type="submit" label="Anmelden"
            :disable="password === '' || eId === ''" />
        </form>

        <p v-if="invalidPassword" class="warning">Falsches Passwort</p>
      </q-card-section>
    </template>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LoginType } from '../model/interfaces';
//import EpdPlaygroundUtils, { Iti78Params, } from '@i4mi/mhealth-proto-components/src/utils/epdPlaygroundUtils';



// Mocks the login to the platform with a token displayed in the UI.
export default defineComponent({
  name: 'LoginMock',
  data() {
    return {
      code: '',
      codeInput: '',
      eId: '',
      password: '',
      user: {
        username: '',
        phone: '',
        password: '',
        familyName: '',
        givenName: '',
      } as LoginType,
      invalidPassword: false,
      invalidCode: false,
    };
  },


  props: {
    // Accepted username, password combinations for login.
    acceptedLogins: {
      type: Array as PropType<Array<LoginType>>,
      required: true,
    },

    // Function that returns user that was logged in.
    onLogin: {
      type: Function as PropType<(user: LoginType) => void>,
      required: false,
    },
  },

  methods: {

    login() {
      const login = this.$props.acceptedLogins.find(
        (login) => login.username === this.eId);
      if (login && login.password === this.password) {
        this.user = login;
        if (this.$props.onLogin) {
          this.$props.onLogin(this.user);
        }
      } else {
        this.invalidPassword = true;
      }
    },


    checkCode(e: Event) {
      e.preventDefault();
      if (this.code === this.codeInput) {
        if (this.$props.onLogin) {
          this.$props.onLogin(this.user);
        }
      } else {
        this.invalidCode = true;
      }
    },



  },
  watch: {
    eID(n: string, o: string): void {
      this.invalidPassword = n === o;
    },
    password(n: string, o: string): void {
      this.invalidPassword = n === o;
    },
  },
});
</script>

<style scoped lang="scss">
.login-card {
  width: 90vw;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10vh;
}

#login-form,
#code-form {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

#code-form>input {
  width: 5em;
  font-size: 2em;
}

#login-button,
#code-button {
  margin: 2em auto 0.5em;
  display: block;
  width: 50%;
}

.warning {
  color: $warning;
  text-align: center;
  margin-top: 1.5em;
}

.phonenumber {
  white-space: nowrap;
  font-weight: bold;
}

.resend-link {
  text-decoration: underline;
  cursor: pointer;
  color: $secondary;
}

.resend-link:hover {
  text-decoration: none;
  color: $primary;
}
</style>

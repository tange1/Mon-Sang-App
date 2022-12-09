import { boot } from 'quasar/wrappers';
import Store from 'src/services/storeService';
import { ENV } from '../assets/env.js';
import { FhirUtils, EpdPlaygroundUtils } from '@i4mi/mhealth-proto-components';

const fhirUtils = new FhirUtils('http://my-base.url');
const store = new Store();
const epdUtils = new EpdPlaygroundUtils(ENV, store.getOids());
// ... more utils;

// Type declaration
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $store: Store;
    $fhirUtils: FhirUtils;
    $epdUtils: EpdPlaygroundUtils;
    // ... more utils;
  }
}

export default boot(({ app }) => {
  // Set global variables
  app.config.globalProperties.$store = store;
  app.config.globalProperties.$fhirUtils = fhirUtils;
  app.config.globalProperties.$epdUtils = epdUtils;
});

export { store, fhirUtils };

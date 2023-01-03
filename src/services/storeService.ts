import { Organization, Patient } from '@i4mi/fhir_r4';
import { FhirUtils } from '@i4mi/mhealth-proto-components';
import { LoginType, Settings } from 'src/model/interfaces';
import { APP_LANGUAGES } from 'src/boot/i18n';

/**
 * storeService.ts
 *
 * Provides functions to access web storage, default settings, locale, mockup patients, etc.
 */

const STORAGE_KEY = 'EPD_USE_CASES_PT1';

interface LocalStoreObject {
  localPatients: Patient[];
  settings: Settings;
  patient: Patient;
  oids: Oids;
}

interface SessionStoreObject {
  user: LoginType | undefined;
}

export interface Oids {
  eprSpid: string;
  mpiId: string;
  local: string;
  ahv: string;
  app: string;
}

export default class Store {
  private user: LoginType | undefined;
  private patient: Patient = { resourceType: 'Patient' };
  private localPatients = new Array<Patient>();
  private settings = this.getDefaultSettings();
  private oids = this.getDefaultOids();

  constructor() {
    this.restoreFromStorage();
  }

  /**
   * Restores data from sessionStorage.
   */
  private restoreFromStorage(): void {
    const session = sessionStorage.getItem(STORAGE_KEY);
    const local = localStorage.getItem(STORAGE_KEY);
    if (session) {
      const storage = JSON.parse(session) as SessionStoreObject;
      this.user = storage.user;
    }
    if (local) {
      const storage = JSON.parse(local) as LocalStoreObject;
      this.localPatients = storage.localPatients;
      this.patient = storage.patient;
      this.settings = storage.settings || this.getDefaultSettings();
      this.oids = storage.oids || this.getDefaultOids();
    }
  }

  /**
   * Persists the content of the store to sessionStorage.
   */
  private persistToStorage(): void {
    console.log(this.user);
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        user: this.user,
      })
    );
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        localPatients: this.localPatients,
        patient: this.patient,
        settings: this.settings,
        oids: this.oids,
      })
    );
  }

  /**
   * @returns  Logged in user as LoginType or undefined if
   *           no user is stored as logged in.
   */
  getUser(): LoginType | undefined {
    return this.user;
  }

  /**
   * @param _user LoginType object of user that is logged in.
   */
  setUser(_user: LoginType): void {
    this.user = _user;
    this.persistToStorage();
  }

  /**
   * Sets the settings property
   * @param _settings the settings
   */
  setSettings(_settings: Settings) {
    this.settings = _settings;
    this.persistToStorage();
  }

  /**
   * Gets the settings from the store
   * @returns  the persisted settings
   */
  getSettings(): Settings {
    return this.settings;
  }

  /**
   * Gets the default settings
   * @returns  a set of default settings
   */

  getDefaultSettings(): Settings {
    return {
      language: APP_LANGUAGES.DE,
      organization: {
        resourceType: 'Organization',
        id: '1',
        identifier: [
          {
            system: 'urn:oid:2.16.756.5.30.1.178.1.1',
            value: 'Klinik Höheweg'
          }
        ],
        name: 'Klinik Höheweg',
        contact: [
          {
            name: {
              family: 'Loser',
              given: ['Marianne']
            }
          }
        ]
      },
      facilityType: {
        system: 'http://snomed.info/sct',
        code: '264358009',
        display: 'General practice premises'
      },
      practiceSetting: {
        system: 'http://snomed.info/sct',
        code: '394802001',
        display: 'General medicine'
      }
    }
  }


  /**
   * Returns the values as set for EPR SPID OID, MPI ID OID,
   * local system OID , AHV number OID
   * @returns a set of  Oids
   */
  getOids(): Oids {
    return this.oids;
  }

  /**
   * Set new values for OIDS (may break some functionality)
   * @param _oids object with properties
   *              - eprSpid,
   *              - mpiSpid,
   *              - local,
   *              - ahv
   *              as strings that have to start with 'urn:oid'
   * @throws      an Error if one of the properties does not start with 'urn:oid'
   */
  setOids(_oids: Oids): void {
    if (!_oids.ahv.includes('urn:oid'))
      throw new Error(
        'Provided AHV OID is not a valid OID, must start with urn:oid. (Provided: ' +
          _oids.ahv +
          ').'
      );
    if (!_oids.eprSpid.includes('urn:oid'))
      throw new Error(
        'Provided EPR SPID OID is not a valid OID, must start with urn:oid. (Provided: ' +
          _oids.eprSpid +
          ').'
      );
    if (!_oids.mpiId.includes('urn:oid'))
      throw new Error(
        'Provided MPI ID OID is not a valid OID, must start with urn:oid. (Provided: ' +
          _oids.mpiId +
          ').'
      );
    if (!_oids.local.includes('urn:oid'))
      throw new Error(
        'Provided local system OID is not a valid OID, must start with urn:oid. (Provided: ' +
          _oids.local +
          ').'
      );
    if (!_oids.app.includes('urn:oid'))
      throw new Error(
        'Provided app system OID is not a valid OID, must start with urn:oid. (Provided: ' +
          _oids.app +
          ').'
      );

    this.oids = _oids;
    this.persistToStorage();
  }

  /**
   * Returns the default values for EPR SPID OID, MPI ID OID,
   * local system OID (for KLINIK Höheweg), AHV number OID
   * @returns a set of default Oids
   */
  getDefaultOids(): Oids {
    return {
      eprSpid: 'urn:oid:2.16.756.5.30.1.127.3.10.3',
      mpiId: 'urn:oid:1.1.1.99.1',
      local: 'urn:oid:2.16.756.5.30.1.178.1.1',
      ahv: 'urn:oid:2.16.756.5.32',
      app: 'urn:oid:1.3.6.1.4.1.12559.11.13.2.5',
    };
  }

  /**
   * Sets the localPatients property
   * @param _patients an Array of Patient resources
   */

  setLocalPatients(_patients: Patient[]): void {
    this.localPatients = _patients;
    this.persistToStorage();
  }


  /**
   * Sets the patient property
   * @param _patient the Patient resource
   */
  setPatient(_patient: Patient): void {
    this.patient = _patient;
    this.persistToStorage();
  }

  /**
   * @returns an array of Patient resources if previously set,
   *          or an empty Array if not set before.
   *
   */

  getLocalPatients(): Patient[] {
    return this.localPatients;
  }

  getPatient(): Patient {
    return this.patient;
  }

  /**
   * Gets the organization as a useable FHIR resource.
   * @returns A FHIR resource representing the current organization
    */

  getOrganizationResource(): Organization {
    return this.settings.organization;
  }

  /**
   * Gets the currently set language.
   * @returns the set language
  */
  getLanguage(): APP_LANGUAGES {
    return this.settings.language;
  }


  // Removes all data from storage.
  clearAll(): void {
    this.user = undefined;
    this.localPatients = [];
    this.patient = { resourceType: 'Patient' };
    this.settings = this.getDefaultSettings();
    sessionStorage.clear();
    localStorage.clear();
  }

  /**
   * Resets the session (and thus clears the sessionStorage,
   * but not the localStorage)
   */
  resetSession(): void {
    this.user = undefined;
    sessionStorage.clear();
  }

  /**
   * Logs out the user and deletes his data.
   */
  logoutUser(): void {
    this.clearAll();
  }
}

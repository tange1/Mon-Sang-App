import { Coding, date, Organization } from '@i4mi/fhir_r4';
import { APP_LANGUAGES } from 'src/boot/i18n';

export interface LoginType {
  username: string;
  password: string;
  phone: string;
  prefix?: string;
  givenName: string;
  familyName: string;
  maidenName: string;
  birthdate: date;
  gender: string;
  donationNumber: string;
  bloodGroup: string;
}

export enum UIMessageType {
  SMS = 'sms',
  ERROR = 'error'
}

export interface UIMessage {
  type: UIMessageType;
  title: string;
  text: string;
}

export interface Settings {
  language: APP_LANGUAGES,
  organization: Organization,
  facilityType: Coding,
  practiceSetting: Coding
}

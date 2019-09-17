import { ConfirmSignUpOptions } from '@aws-amplify/auth/lib/types';

/*
  Email and username is the same.
  I set log in with email but AWS takes it as username anyways.
*/

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
}

export interface SignUpConfirmationParams {
  username: string;
  code: string;
  options?: ConfirmSignUpOptions;
}

export interface SignInPayload {
  email: string;
  password: string;
}

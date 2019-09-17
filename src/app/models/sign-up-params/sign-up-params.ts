import { ConfirmSignUpOptions } from '@aws-amplify/auth/lib/types';

export interface SignUpConfirmationParams {
  username: string;
  code: string;
  options?: ConfirmSignUpOptions;
}

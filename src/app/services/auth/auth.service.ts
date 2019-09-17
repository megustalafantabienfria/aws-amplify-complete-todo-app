import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

/* Models */
import { SignUpConfirmationParams } from '../../models/index';

import { SignUpParams, UsernamePasswordOpts } from '@aws-amplify/auth/lib/types';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  async signUp(payload: SignUpParams): Promise<void> {
    try {
      const signUpData = await Auth.signUp({
        username: payload.username,
        password: payload.password,
        attributes: payload.attributes
      });
      console.log(signUpData);
    } catch (error) {
      console.log(error);
    }
  }

  async confirmSignUp(params: SignUpConfirmationParams): Promise<void> {
    try {
      const confirmationData = await Auth.confirmSignUp(
        params.username,
        params.code,
        params.options
      );
      console.log(confirmationData);
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(params: UsernamePasswordOpts): Promise<void> {
    try {
      const signedIn = await Auth.signIn(params);
      console.log(signedIn);
    } catch (error) {
      console.log(error);
    }
  }

  get currentAuthenticatedUser(): Observable<any> {
    return from(Auth.currentUserInfo());
  }

  async signOut(): Promise<void> {}

}

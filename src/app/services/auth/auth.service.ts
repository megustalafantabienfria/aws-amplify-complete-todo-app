import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

/* Models */
import { SignUpConfirmationParams } from '../../models/index';

import { SignUpParams, UsernamePasswordOpts } from '@aws-amplify/auth/lib/types';

import { from, Observable, BehaviorSubject } from 'rxjs';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tempEmail = new BehaviorSubject<string>(undefined);

  constructor() {}

  async signUp(payload: SignUpParams): Promise<ISignUpResult | Error> {
    this.tempEmail.next(payload.username);

    try {
      const signedUpUser = await Auth.signUp({
        username: payload.username,
        password: payload.password,
        attributes: payload.attributes
      });

      return signedUpUser;
    } catch (error) {
      throw error;
    }
  }

  async confirmSignUp(params: SignUpConfirmationParams): Promise<any> {
    this.tempEmail.next(undefined);

    try {
      const confirmationData = await Auth.confirmSignUp(
        params.username,
        params.code,
        params.options
      );
      return confirmationData;
    } catch (error) {
      throw error;
    }
  }

  async signIn(params: UsernamePasswordOpts): Promise<any> {
    this.tempEmail.next(params.username);

    try {
      const signedInUser = await Auth.signIn(params);
      return signedInUser;
    } catch (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {}

  get tempEmailValue(): string {
    return this.tempEmail.value;
  }

  get existTempEmail$(): Observable<boolean> {
    return this.tempEmail
      .pipe(map(v => v !== undefined ? true : false));
  }

  get currentAuthenticatedUser(): Observable<any> {
    return from(Auth.currentUserInfo());
  }

}

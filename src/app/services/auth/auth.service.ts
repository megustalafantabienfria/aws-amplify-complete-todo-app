import { Injectable } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';

/* Models */
import { SignUpConfirmationParams } from '../../models/index';

import { SignUpParams, UsernamePasswordOpts } from '@aws-amplify/auth/lib/types';

import { from, Observable, BehaviorSubject, of } from 'rxjs';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tempEmail = new BehaviorSubject<string>(undefined);
  private session = new BehaviorSubject<CognitoUser>(null);

  constructor() {
    this.sessionListener();
  }

  private async sessionListener(): Promise<void> {
    this.session.next(await this.initSession.toPromise());
    Hub.listen('auth',
      c => this.session.next(c.payload.event === 'signOut' ? null : c.payload.data));
  }

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
    try {
      console.log(params);
      const confirmationData = await Auth.confirmSignUp(
        params.username,
        params.code,
        params.options
        );
      this.tempEmail.next(undefined);
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

  async signOut(): Promise<any> {
    try {
      await Auth.signOut();
    } catch (error) {
      throw error;
    }
  }

  get tempEmailValue(): string {
    return this.tempEmail.value;
  }

  get existTempEmail$(): Observable<boolean> {
    return this.tempEmail
      .pipe(map(v => v !== undefined ? true : false));
  }

  private get initSession(): Observable<CognitoUser> {
    return from(Auth.currentAuthenticatedUser()).pipe(catchError(err => of(null)));
  }

  get currentSession(): BehaviorSubject<CognitoUser> {
    return this.session;
  }

}

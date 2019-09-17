import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { ToolsService } from 'src/app/services/tools/tools.service';

import { SignUpParams } from '@aws-amplify/auth/lib/types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SignUpPayload } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  checkoutForm: FormGroup;
  canContinue: Observable<boolean>;

  constructor(
    private tools: ToolsService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    const formKeys = ['name', 'email', 'password'];
    const initialValues = ['', '', ''];
    const validatorsName = [Validators.required];
    const validatorsEmail = [Validators.required, Validators.email];
    const validatorsPwd = [Validators.required, Validators.minLength(8)];

    this.checkoutForm = this.tools.buildForm(formKeys, initialValues, validatorsName, validatorsEmail, validatorsPwd);
    this.canContinue = this.checkoutForm.statusChanges.pipe(map(v => v === 'VALID' ? true : false));
  }

  async signUp(): Promise<void> {
    const signUpPayload: SignUpPayload = this.checkoutForm.value;
    const userToSignUp: SignUpParams = {
      username: signUpPayload.email,
      password: signUpPayload.password,
      attributes: {
        name: signUpPayload.name
      }
    };

    this.checkoutForm.disable();
    try {
      await this.auth.signUp(userToSignUp);
      this.router.navigate(['confirmation']);
    } catch (error) {
      console.log(error);
      this.checkoutForm.enable();
    }
  }

}

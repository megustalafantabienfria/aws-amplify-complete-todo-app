import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, Validator } from '@angular/forms';

import { ToolsService } from 'src/app/services/tools/tools.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsernamePasswordOpts } from '@aws-amplify/auth/lib/types';
import { SignInPayload } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

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
    const formsKeys = ['email', 'password'];
    const initialValues = ['', ''];
    const validatorsEmail: Validators[] = [Validators.required, Validators.email];
    const validatorsPwd: Validators[] = [Validators.required, Validators.minLength(8)];

    this.checkoutForm = this.tools.buildForm(formsKeys, initialValues, validatorsEmail, validatorsPwd);
    this.canContinue = this.checkoutForm.statusChanges.pipe(map(v => v === 'VALID' ? true : false));
  }

  async signIn(): Promise<void> {
    const signInPayload: SignInPayload = this.checkoutForm.value;
    const userToSignIn: UsernamePasswordOpts = {
      username: signInPayload.email,
      password: signInPayload.password
    };

    this.checkoutForm.disable();
    try {
      await this.auth.signIn(userToSignIn);
      this.router.navigate(['']);
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        this.router.navigate(['confirmation']);
      } else {
        console.log(error);
        this.checkoutForm.enable();
      }

    }
  }

}

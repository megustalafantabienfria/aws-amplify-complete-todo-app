import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, Validator } from '@angular/forms';

import { ToolsService } from 'src/app/services/tools/tools.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  checkoutForm: FormGroup;
  canContinue: Observable<boolean>;

  constructor(
    private tools: ToolsService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    const formsKeys = ['email', 'password'];
    const initialValues = ['', ''];
    const validatorsEmail: Validators[] = [Validators.required, Validators.email];
    const validatorsPwd: Validators[] = [Validators.required, Validators.minLength(6)];

    this.checkoutForm = this.tools.buildForm(formsKeys, initialValues, validatorsEmail, validatorsPwd);
    this.canContinue = this.checkoutForm.statusChanges.pipe(map(v => v === 'VALID' ? true : false));
  }

  signIn(): void {
    alert('Not handled yet');
  }

}

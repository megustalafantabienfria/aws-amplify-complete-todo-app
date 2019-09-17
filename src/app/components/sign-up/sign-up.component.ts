import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  checkoutForm: FormGroup;
  canContinue: Observable<boolean>;

  constructor(
    private tools: ToolsService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    const initialKeys = ['name', 'email', 'password'];
    const initValues = ['', '', ''];
    const validatorsName = [Validators.required];
    const validatorsEmail = [Validators.required, Validators.email];
    const validatorsPwd = [Validators.required, Validators.minLength(6)];

    this.checkoutForm = this.tools.buildForm(initialKeys, initValues, validatorsName, validatorsEmail, validatorsPwd);
    this.canContinue = this.checkoutForm.statusChanges.pipe(map(v => v === 'VALID' ? true : false));
  }

  signUp(): void {
    console.log('Not implemented yet');
  }

}

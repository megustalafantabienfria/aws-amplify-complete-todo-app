import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { ToolsService } from 'src/app/services/tools/tools.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SignUpConfirmationParams } from 'src/app/models';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass']
})
export class ConfirmationComponent implements OnInit {

  checkoutForm: FormGroup;
  canContinue: Observable<boolean>;

  constructor(
    private tools: ToolsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    const formKeys = ['code'];
    const initialValues = [''];
    const codeValidators = [Validators.required, Validators.minLength(6), Validators.maxLength(6)];

    this.checkoutForm = this.tools.buildForm(formKeys, initialValues, codeValidators);
    this.canContinue = this.checkoutForm.statusChanges.pipe(map(x => x === 'VALID' ? true : false));
  }

  async verifyCode(): Promise<void> {
    const payloadCode = this.checkoutForm.value;
    const userToVerify: SignUpConfirmationParams = {
      code: payloadCode,
      username: this.auth.tempEmailValue
    };

    this.checkoutForm.disable();
    try {
      await this.auth.confirmSignUp(userToVerify);
    } catch (error) {
      console.log(error);
      this.checkoutForm.enable();
    }
  }

}

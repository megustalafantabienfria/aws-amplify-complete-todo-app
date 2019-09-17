import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildForm(keys: string[], initValues: string[], ...validators: any[]): FormGroup {
    const objGroup: object = {};

    keys.forEach((k, i) => objGroup[k] = [initValues[i], validators[i]]);

    return this.formBuilder.group(objGroup);
  }

}

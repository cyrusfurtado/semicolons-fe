// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dash-stepper',
//   templateUrl: './dash-stepper.component.html',
//   styleUrls: ['./dash-stepper.component.scss']
// })
// export class DashStepperComponent {

// }


import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-dash-stepper',
  templateUrl: './dash-stepper.component.html',
  styleUrls: ['./dash-stepper.component.scss']
})
export class DashStepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}

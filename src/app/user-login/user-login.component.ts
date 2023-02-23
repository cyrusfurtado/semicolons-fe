
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

/** @title Form field with error messages */
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) {

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    this.router.navigateByUrl('landing')
  }
}
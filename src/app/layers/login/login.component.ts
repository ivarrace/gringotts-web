import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export const passwordMatchingValidatior: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password?.value === confirmPassword?.value) {
    return null;
  } else {
    confirmPassword?.setErrors({ notmatched: true });
    return { notmatched: true };
  }
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, private authService: AuthService) {}

  loginform = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  hideLoginFormPassword = true;

  registerform = new FormGroup(
    {
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')
      ]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: passwordMatchingValidatior
    }
  );
  hideRegisterFormPassword = true;
  hideRegisterFormConfirmPassword = true;
  registerFormError: String = '';

  onSubmitLogin(): void {
    if (!this.loginform.valid) {
      return;
    }
    console.warn('Login form data', this.loginform.value);
    //this.loginform.reset();
    //this.authService.toggle();

    this.authService.login(this.loginform.value);
  }

  onSubmitRegister(): void {
    if (!this.registerform.valid) {
      this.registerFormError = 'Invalid form data';
      return;
    }
    this.registerFormError = '';
    console.warn('Register form data', this.registerform.value);
    //this.loginform.reset();
    //this.authService.toggle();

    //this.authService.login(this.loginform.value);
  }
}

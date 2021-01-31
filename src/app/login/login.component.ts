import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showErrors: boolean = false;
  public passwordError: string = ''
  public loginForm: FormGroup
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { 
    this.loginForm = new FormGroup({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    })
  }

  ngOnInit(): void {
  }


  submit(form: FormGroup): void {

    if (form.valid) {
      this._authService.login(form.value).subscribe(res => {
        console.log(res)
        if (res.message == 'incorrect password') {
          this.passwordError = res.message
        } else if ( res.message == "success") {
          window.sessionStorage.setItem('userToken', res.token);
          this._authService.saveCurrentUser()
          this._router.navigate(['/home'])
        }
      })
    }
    console.log(form)
  }
}

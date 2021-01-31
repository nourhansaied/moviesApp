import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public showErrors: boolean = false;
  public registerForm : FormGroup
  constructor(private _authService: AuthService, private _router: Router) { 
    this.registerForm = new FormGroup({
      "first_name": new FormControl('', [Validators.required]),
      "last_name": new FormControl('Ahmed', [Validators.required]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8), this.validPassword()]),
      "age": new FormControl('', [Validators.required, Validators.min(10), Validators.max(30)])
    })
  }

  ngOnInit(): void {
  }

  submit(form: FormGroup): void {
    if (form.valid) {
      // call endpoint
      this._authService.register(form.value).subscribe(response => {
        console.log(response)
        if (response.message == "success") {
          this._router.navigate(['/login'])
        }
      })
    } else {
      this.showErrors = true;
    }
    console.log(form)
  }
  validPassword() {
      return (control: AbstractControl) => {
        return null;
      }
  
  }
}

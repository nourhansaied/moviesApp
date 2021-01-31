import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLoggedUser: boolean = false;
  constructor(private _authService: AuthService, private _router: Router) { 
    this._authService.currentUser.subscribe(state => {
      console.log(state)
      if (state != null) {
        this.isLoggedUser = true
      } else {
        this.isLoggedUser = false
      }
    })

  }

  ngOnInit(): void {
  }

  logOut() {
    let token = window.sessionStorage.getItem('userToken');
    this._authService.logOut(token).subscribe(state => {
      if (state.message == "success") {
        window.sessionStorage.removeItem('userToken');
        this._authService.currentUser.next(null)
        this._router.navigate(['/login'])
        
      }
    })
  }
}

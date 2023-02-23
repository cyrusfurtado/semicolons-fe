import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  IsLoggedIn() 
  {
    return !!localStorage.getItem('demo_assist_token');
  }

  // Call this method to perform logout throughout this application.
  logout()
  {
    localStorage.removeItem('demo_assist_token');
    this.router.navigate(['login']);
  }
}

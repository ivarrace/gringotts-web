import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public router: Router) {}

  get isLoggedIn(): boolean {
    const authToken = sessionStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  login(loginData: any) {
    sessionStorage.setItem('access_token', JSON.stringify(loginData));
    sessionStorage.setItem('expires_at', new Date() + '');
    this.router.navigate(['/']);
  }

  logout() {
    const removeToken = sessionStorage.removeItem('access_token');
    if (removeToken == null) {
      sessionStorage.removeItem('expires_at');
      this.router.navigate(['login']);
    }
  }
}

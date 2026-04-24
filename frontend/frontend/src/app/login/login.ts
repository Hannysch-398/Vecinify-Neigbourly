import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; // Pfad prüfen!
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class Login {
  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    this.http.post<any>('http://localhost:8080/api/auth/login', this.loginData)
      .subscribe({
        next: (response) => {
          // AKZEPTANZKRITERIUM: Token speichern
          this.authService.saveToken(response.token);
          console.log('Token gespeichert!');
          this.router.navigate(['/api/test/secure']);
        },
        error: (err) => {
          alert('Login fehlgeschlagen: ' + err.error);
        }
      });
  }
}

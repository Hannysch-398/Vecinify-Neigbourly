import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(data: LoginRequest): Observable<any> {
    console.log('LOGIN payload:', data);

    return of({
      token: 'fake-jwt-token',
      user: {
        email: data.email
      }
    }).pipe(delay(500));
  }

  register(data: RegisterRequest): Observable<any> {
    console.log('REGISTER payload:', data);

    return of({
      success: true,
      user: {
        email: data.email
      }
    }).pipe(delay(500));
  }
}

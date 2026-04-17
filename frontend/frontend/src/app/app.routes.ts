import {RouterModule, Routes} from '@angular/router';
import {RegisterForm} from './Authentification/RegisterForm/RegisterForm';


export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile').then(m => m.Profile)
  }
];

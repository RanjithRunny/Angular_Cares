import { Routes } from '@angular/router';

import { LoginComponent } from '@components/login/login.component';
import { HomeComponent } from '@components/home/home.component';
import { LogoutComponent } from '@components/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard], // 🔐 Protected route
  },
];

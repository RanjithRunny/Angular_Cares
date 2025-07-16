import { Component } from '@angular/core';
import { LogoutComponent } from '@components/logout/logout.component';
import { HeaderComponent } from "@components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoutComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

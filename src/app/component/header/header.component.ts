import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '@components/logout/logout.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userEmail: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userEmail$.subscribe((email) => {
      this.userEmail = email;
    });
  }
}

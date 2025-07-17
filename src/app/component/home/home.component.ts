import { Component } from '@angular/core';
import { LogoutComponent } from '@components/logout/logout.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { SearchComponent } from 'app/container/search/search.component';
import { SearchFormComponent } from '@components/search-form/search-form.component';
import { InsertComponent } from '@components/insert/insert.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SearchFormComponent,
    InsertComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeTab: string = 'insert';
}

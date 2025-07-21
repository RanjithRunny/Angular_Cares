import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '@services/loader.service';

@Component({
  standalone: true,
  selector: 'app-loader',
  template: `
    <div class="overlay" *ngIf="loaderService.loading$ | async">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./loader.component.scss'],
  imports: [NgIf, AsyncPipe], // ✅ Add this line
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}

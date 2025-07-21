import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.scss',
})
export class InsertComponent {
  insertFrom: FormGroup;
  options = ['options1', 'option2'];
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.insertFrom = this.fb.group({
      caseId: ['', Validators.required],
      date: ['', Validators.required],
      casetype: ['', Validators.required],
    });
  }
  onSubmit() {
    this.api.postData('insert', this.insertFrom.value, this.onSuccess);
    this.insertFrom.reset();
  }
  onSuccess() {
    return 'successfully inserted';
  }

  get f() {
    return this.insertFrom.controls;
  }
}

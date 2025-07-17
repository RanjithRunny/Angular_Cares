// dynamic-search-form.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-dynamic-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SearchFormComponent {
  searchForm: FormGroup;
  isOpen = false;
  selected = 'Select option';
  options = ['Option A', 'Option B', 'Option C'];
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      date: [''],
      caseId: ['', [Validators.required]],
      casetype: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      console.log('Form submitted:', this.searchForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  get f() {
    return this.searchForm.controls;
  }

  toggleDropdown() {
    throw new Error('Method not implemented.');
  }

  selectOption(option: string) {
    this.selected = option;
    this.isOpen = false;
  }
}

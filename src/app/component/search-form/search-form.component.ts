// dynamic-search-form.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableViewComponent } from '@components/table-view/table-view.component';
import { ColumnConfig } from '@models/column-config.model';
import { USER_TABLE_COLUMNS } from 'app/constants/user-table-col';

@Component({
  standalone: true,
  selector: 'app-dynamic-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, TableViewComponent],
})
export class SearchFormComponent {
  columns: ColumnConfig[] = USER_TABLE_COLUMNS;

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

  users = [
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' },
    { id: 3, name: 'Charlie', email: 'charlie@email.com' },
  ];

  handleEdit(user: any) {
    const newName = prompt('Edit name:', user.name);
    if (newName !== null) {
      user.name = newName;
    }
  }

  handleDelete(user: any) {
    this.users = this.users.filter((u) => u !== user);
  }
}

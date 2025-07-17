// input-component.ts
import { Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from './formfield.model';

export interface InputComponent {
  field: FormField;
  group: FormGroup;
}

export interface InputComponentConfig {
  component: Type<any>;
  inputs?: Record<string, string>;
  outputs?: Record<string, string>;
}
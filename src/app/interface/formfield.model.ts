// form-field.model.ts
export interface FormField {
  type: 'text' | 'number' | 'dropdown' | string; // Allow for custom types
  label: string;
  key: string;
  value?: any;
  required?: boolean;
  validators?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    required?: boolean;
    custom?: any[];
  };
  options?: { value: any; label: string }[]; // For dropdown
  config?: any; // Additional configuration for custom components
}
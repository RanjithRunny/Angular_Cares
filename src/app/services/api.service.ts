import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {}

  postData(endPoint: string, data: any, onSuccess?: Function): void {
    this.httpClient.post(`${this.baseUrl}/${endPoint}`, data).subscribe({
      next: (resp) => {
        if (onSuccess) onSuccess(resp);
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong');
      },
    });
  }
  getData(endPoint: string, data: any) {
    this.httpClient.get(`${this.baseUrl}/${endPoint}`, data);
  }
  putData(endPoint: string, data: any) {
    this.httpClient.put(`${this.baseUrl}/${endPoint}`, data);
  }
  deleteData(endPoint: string, data: any) {
    this.httpClient.delete(`${this.baseUrl}/${endPoint}`, data);
  }
}

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Your Express backend URL

  // Shared user email across components
  private userEmailSubject = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmailSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        this.userEmailSubject.next(storedEmail);
      }
    }
  }

  register(userData: {
    email: string;
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  // Login user
  login(userData: {
    email: string;
    password: string;
    username: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData).pipe(
      tap((res: any) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userEmail', userData.username); // save email
        }
        this.userEmailSubject.next(userData.username); // broadcast email
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.clear(); // ✅ Clears all localStorage
      }
    }
    this.userEmailSubject.next(null); // clear user
  }

  isLoggedIn() {
    // if (isPlatformBrowser(this.platformId)) {
    return !!localStorage.getItem('token');
    //   }
  }
}

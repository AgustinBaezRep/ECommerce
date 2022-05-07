import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientLogin } from '../models/clientLogin';

@Injectable({
  providedIn: 'root',
})
export class PasswordRecoverService {
  user: clientLogin = { email: '', password: '' };
  url: string = '';

  constructor(private http: HttpClient) {}

  updateClientPassword(user: clientLogin): Observable<clientLogin> {
    return this.http.put<clientLogin>(this.url, user);
  }
}

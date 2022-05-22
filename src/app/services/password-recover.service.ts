import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLogin } from '../models/clientLogin';

@Injectable({
  providedIn: 'root',
})
export class PasswordRecoverService {
  user: ClientLogin = { email: '', password: '' };
  url: string = '';

  constructor(private http: HttpClient) {}

  updateClientPassword(user: ClientLogin): Observable<ClientLogin> {
    return this.http.put<ClientLogin>(this.url, user);
  }
}

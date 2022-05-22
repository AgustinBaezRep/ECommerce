import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../models/client';
import { UserToken } from '../models/userToken';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userTokenModel: UserToken = { email: '', token: ''};
  url: string = "https://localhost:44339/api/User";
  private userSubjetct: BehaviorSubject<UserToken>;
  public get userData(): UserToken {
    return this.userSubjetct.value;
  }

  constructor(private http: HttpClient) {
    this.userSubjetct = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('userWithToken') || ''));
  }

  LogIn(email: string, password: string): Observable<UserToken> {
    return this.http.post<UserToken>(`${this.url}/Login`, {email, password}, httpOption)
    .pipe(
      map(res => {
        if (res.token !== "") {
          const user: UserToken = res;
          localStorage.setItem('userWithToken', JSON.stringify(user));
          this.userSubjetct.next(user);
        }
        return res;
      })
    )
  }

  LogOut() {
    localStorage.removeItem('userWithToken');
    this.userSubjetct.next(null || this.userTokenModel);
  }

  GetUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/GetClients`);
  }

  CreateUser(user: Client): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/PostClient`, user);
  }
}

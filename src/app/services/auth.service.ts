import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../helpers/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private constants: Constants) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.constants.API_ENDPOINT + '', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, password: string): Observable<any> {
    return this.http.post(this.constants.API_ENDPOINT + '', {
      username,
      password
    }, httpOptions);
  }
}

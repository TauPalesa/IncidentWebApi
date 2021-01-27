import { Injectable } from '@angular/core'; import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



import { retry, catchError } from 'rxjs/operators';
import { User_Account } from 'src/app/modell/User-Account';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {


  private apiUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  private _users = new BehaviorSubject<User_Account[] | null>(null);
  users = this._users.asObservable();
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://localhost:64719/api/authenticate/register';
  }


  addUserData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

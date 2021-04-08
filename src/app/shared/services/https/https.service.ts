import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  saveData(params): Observable<Object>  {
    return this.http.post(this.baseUrl + 'leave', params);
  }

  getData(): Observable<Object>  {
    return this.http.get(this.baseUrl+ 'role/test/2');
  }

}
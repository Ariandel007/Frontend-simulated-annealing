import { Injectable } from '@angular/core';
import { Ram } from '../_models/ram';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRams(): Observable<Ram[]> {
    return this.http.get<Ram[]>(this.baseUrl + 'rams');
  }
}

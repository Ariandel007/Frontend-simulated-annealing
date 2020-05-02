import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Case } from '../_models/case';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(this.baseUrl + 'cases');
  }

}

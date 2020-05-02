import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuentePoder } from '../_models/fuente-poder';

@Injectable({
  providedIn: 'root'
})
export class FuentePoderService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFuentes(): Observable<FuentePoder[]> {
    return this.http.get<FuentePoder[]>(this.baseUrl + 'fuentepoder');
  }
}

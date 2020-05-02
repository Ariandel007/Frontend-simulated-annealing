import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disco } from '../_models/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDiscos(): Observable<Disco[]> {
    return this.http.get<Disco[]>(this.baseUrl + 'discos');
  }
}

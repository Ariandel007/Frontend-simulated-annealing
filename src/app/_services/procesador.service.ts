import { Injectable } from '@angular/core';
import { Procesador } from '../_models/procesador';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesadorService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProcesadores(): Observable<Procesador[]> {
    return this.http.get<Procesador[]>(this.baseUrl + 'procesadores');
  }
}

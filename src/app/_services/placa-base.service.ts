import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlacaBase } from '../_models/placa-base';

@Injectable({
  providedIn: 'root'
})
export class PlacaBaseService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlacas(): Observable<PlacaBase[]> {
    return this.http.get<PlacaBase[]>(this.baseUrl + 'plcacasbases');
  }
}

import { Injectable } from '@angular/core';
import { TarjetaGrafica } from '../_models/tarjeta-grafica';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaGraficaService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTarjetas(): Observable<TarjetaGrafica[]> {
    return this.http.get<TarjetaGrafica[]>(this.baseUrl + 'tarjetasgraficas');
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPresupuesto() {
    return this.http.get(this.baseUrl + 'mejorpc');
  }

  createPresupuesto(mejorpc: any) {
    return this.http.post(this.baseUrl + 'mejorpc', mejorpc);
  }

}

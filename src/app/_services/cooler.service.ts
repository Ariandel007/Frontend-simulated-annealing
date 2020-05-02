import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cooler } from '../_models/cooler';

@Injectable({
  providedIn: 'root'
})
export class CoolerService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCoolers(): Observable<Cooler[]> {
    return this.http.get<Cooler[]>(this.baseUrl + 'coolers');
  }
}

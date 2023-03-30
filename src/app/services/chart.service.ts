import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Charts } from '../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private httpClient: HttpClient) { }

  getChart(): Observable<any[]> {
    return this.httpClient.get<any[]>(`chart`);
  }
  
}

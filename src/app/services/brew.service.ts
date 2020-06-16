import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewService {
  constructor(private http: HttpClient) { }
  baseUrl: string = environment.API_URL;
  
  public getBeer(): Observable<any> {
    return this.http.get(this.baseUrl + '/breweries');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://example.com/api/';

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get(this.API_URL + endpoint);
  }

  post(endpoint: string, data: any) {
    return this.http.post(this.API_URL + endpoint, data);
  }

  put(endpoint: string, data: any) {
    return this.http.put(this.API_URL + endpoint, data);
  }

  delete(endpoint: string) {
    return this.http.delete(this.API_URL + endpoint);
  }
}

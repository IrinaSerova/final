import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    url: string = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=';
    apiKey = 'WZ9PZMWC38W4TEY9';
    constructor(private http: HttpClient) { }
  getData (){
    return this.http.get(`${this.url}${this.apiKey}`)
    
  }
}
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({providedIn: 'root'})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getWeights(){
    return this.http.get('http://localhost:8080/api/weights')
  }
}

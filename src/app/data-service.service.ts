import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weight} from "./Weight";



@Injectable({providedIn: 'root'})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  saveWeight(weight:Weight){
    return this.http.post('http://localhost:8080/api/weight',weight)
  }

  getWeights(){
    return this.http.get('http://localhost:8080/api/weights?email=o@gmail.com')
  }
}

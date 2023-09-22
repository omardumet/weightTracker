import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {Weight} from "./Weight";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weight:number = 0;
  boxes:Weight[] = [];

  constructor(private dataService:DataServiceService) {
  }

  addWeight(){

    let date:Date = new Date();
    let year:number = date.getFullYear();
    let month:number = date.getMonth()+1;
    let day:number = date.getDay()+1;

    let stringDate:string = month.toString()+'/'+day.toString()+'/'+year.toString();

    let w = new Weight('o@gmail.com', this.weight ,stringDate);

    this.dataService.saveWeight(w).subscribe(data=>{
      // @ts-ignore
      this.boxes.push(data)
    })
    this.weight = 0;
  }

  ngOnInit(): void {
    this.dataService.getWeights().subscribe(weights=>{
      // @ts-ignore
      weights.forEach((weight)=>{
        this.boxes.push(weight);
      })

    })
  }







}

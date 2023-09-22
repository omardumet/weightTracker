import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  weight:number = 0;
  boxes:number[] = [];

  constructor(private dataService:DataServiceService) {
  }

  addWeight(){
    this.boxes.push(this.weight);
  }

  ngOnInit(): void {
    this.dataService.getWeights().subscribe(data=>{
      // @ts-ignore
      this.boxes.push(data.number)
    })
  }






}

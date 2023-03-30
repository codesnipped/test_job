import { Component } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private chartService: ChartService){
    this.getChart()
  }

  getChart(){
    this.chartService.getChart().subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }

}

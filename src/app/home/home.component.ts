import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../services/chart.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('chartCanvas') chartCanvas: ElementRef | undefined;
  dataChart: any;
  month: any = []
  kwh: any = []
  temp: any = []

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

  lineChartMethod() {
    this.dataChart = new Chart(this.chartCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.month,
        datasets: [
          {
            label: 'ยอดขาย',
            //  lineTension: 0.2, 
            fill: false,
            backgroundColor: 'rgba(240, 173, 78,0.4)',
            borderColor: 'rgba(240, 173, 78,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(240, 173, 78,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(240, 173, 78,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.kwh,
            spanGaps: false,
          },
        ],
      },
    });
  }

}

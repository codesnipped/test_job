import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../services/chart.service';
import Chart from 'chart.js/auto';

const data = {
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: 'Avg kWh',
      data: [10, 20, 30, 25, 40],
      borderColor: '',
      backgroundColor: '',
      order: 1,
      yAxisID: 'y'
    },
    {
      label: 'Avg Low',
      data: [2, 2, 4, 8, 50],
      borderColor: '',
      backgroundColor: '',
      type: 'line',
      order: 0,
      yAxisID: 'y1'
    },
    {
      label: 'Avg Hight',
      data: [5, 7, 22, 25, 100],
      borderColor: '',
      backgroundColor: '',
      type: 'line',
      order: 0,
      yAxisID: 'y1'
    },
    {
      label: 'Avg',
      data: [20, 34, 64, 33, 12],
      borderColor: '',
      backgroundColor: '',
      type: 'line',
      order: 0,
      yAxisID: 'y1'
    }
  ]
}

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
        this.lineChartMethod(data)
      }
    })
  }

  lineChartMethod(datasets: any) {
    this.dataChart = new Chart(this.chartCanvas?.nativeElement, {
      type: 'bar',
      data: datasets,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'ทดสอบสมัครงาน'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
    });
  }

}

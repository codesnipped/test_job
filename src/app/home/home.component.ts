import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../services/chart.service';
import Chart from 'chart.js/auto';

const data = {
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: 'Avg kWh',
      data: [10, 20, 30, 25, 40],
      borderColor: '#454545',
      backgroundColor: '#454545',
      order: 3,
      yAxisID: 'y'
    },
    {
      label: 'Avg Low',
      data: [2, 2, 4, 8, 50],
      borderColor: '#5DADE2',
      backgroundColor: '#5DADE2',
      type: 'line',
      order: 0,
      yAxisID: 'y1'
    },
    {
      label: 'Avg Hight',
      data: [5, 7, 22, 25, 100],
      borderColor: '#E74C3C',
      backgroundColor: '#E74C3C',
      type: 'line',
      order: 1,
      yAxisID: 'y1'
    },
    {
      label: 'Avg',
      data: [20, 34, 64, 33, 12],
      borderColor: '#F4D03F',
      backgroundColor: '#F4D03F',
      type: 'line',
      order: 2,
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

  constructor(private chartService: ChartService) {
    this.getChart()
  }

  getChart() {
    this.chartService.getChart().subscribe({
      next: (res) => {

        this.lineChartMethod(data)
      }
    })
  }
  update(array: any, index: any, newValue: any) {
    array[index] = newValue;
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

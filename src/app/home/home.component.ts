import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../services/chart.service';
import Chart from 'chart.js/auto';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('chartCanvas') chartCanvas: ElementRef | undefined;
  dataChart: any;
  month: any = []
  avg_kwh: any = []
  avg_temp: any = []
  avg_temp_hight: any = []
  avg_temp_low: any = []

  constructor(private chartService: ChartService, private formBuilder: FormBuilder) {
    this.getChart()
  }

  getChart() {
    this.chartService.getChart().subscribe({
      next: async (res) => {
        this.month = await res.month
        this.avg_kwh = await res.avg_kwh
        this.avg_temp = await res.avg_temp
        this.avg_temp_hight = await res.avg_temp_hight
        this.avg_temp_low = await res.avg_temp_low
        this.lineChartMethod(this.month, this.avg_kwh, this.avg_temp, this.avg_temp_hight, this.avg_temp_low)
      }
    })
  }

  frm: FormGroup = this.formBuilder.group(
    {
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
    }
  );
  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.frm.controls;
  }
  getPeriod(){
    this.submitted = true;
    if (this.frm.invalid) {
      return;
    }
    this.dataChart.destroy();
    this.chartService.getPeriod(this.frm.value).subscribe({
      next:async (res)=>{
        this.month = await res.month
        this.avg_kwh = await res.avg_kwh
        this.avg_temp = await res.avg_temp
        this.avg_temp_hight = await res.avg_temp_hight
        this.avg_temp_low = await res.avg_temp_low
        this.lineChartMethod(this.month, this.avg_kwh, this.avg_temp, this.avg_temp_hight, this.avg_temp_low)
      }
    })
  }


  lineChartMethod(month: any, avg_kwh: any, avg_temp: any, avg_temp_hight: any, avg_temp_low: any) {
    this.dataChart = new Chart(this.chartCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: month,
        datasets: [
          {
            label: 'Avg kWh',
            data: avg_kwh,
            borderColor: '#454545',
            backgroundColor: '#454545',
            order: 3,
            yAxisID: 'y'
          },
          {
            label: 'Avg Low',
            data: avg_temp_low,
            borderColor: '#5DADE2',
            backgroundColor: '#5DADE2',
            type: 'line',
            order: 0,
            yAxisID: 'y1'
          },
          {
            label: 'Avg Hight',
            data: avg_temp_hight,
            borderColor: '#E74C3C',
            backgroundColor: '#E74C3C',
            type: 'line',
            order: 1,
            yAxisID: 'y1'
          },
          {
            label: 'Avg',
            data: avg_temp,
            borderColor: '#F4D03F',
            backgroundColor: '#F4D03F',
            type: 'line',
            order: 2,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'kWh history'
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

import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatGridListModule } from '@angular/material/grid-list';
import { getRelativePosition } from 'chart.js/helpers';
import { ChartsService } from 'src/app/Services/charts.service';
@Component({
  selector: 'app-mother-charts',
  templateUrl: './mother-charts.component.html',
  styleUrls: ['./mother-charts.component.css']
})
export class MotherChartsComponent {
  public chart: any;
  public chart2: any;
  public chart3: any;
  Mothers: any[] = [];
  Pregnants: any;
  Sellers: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  constructor(private chartsSrv: ChartsService) {
  
    this.chartsSrv.getMothersPerDay().subscribe((res) => {
      console.log(res)
      console.log(res.data)
      this.Mothers = res.data;
      if (this.Mothers != null) {
        this.Mothers.forEach(item => {

          this.labeldata.push(item._id)
          this.realdata.push(item.count)

        })
      }
      this.createChart(this.realdata,this.labeldata)
    })
  }



  createChart(realdata:any[],labeldata:any[]) {

    this.chart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [{
          label: 'No. of Registered Mothers Per day',
          data: realdata,
          borderWidth: 3,
          backgroundColor:  ['#0e8ccff3','#de2a90fa','#e17923ff','#76005f','#e86a26ff'],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio:true,
         
        layout:{
          padding:30
        },
        plugins:{
          title:{
            display:true,
            text:'Reg. Mothers Per Day',
            font:{
              size:30,
            }
          },
          legend:{
            labels:{
              color:'#920656ff'
              // font:
            },
            position:'bottom',
          }
        },
        animation: {
          duration: 3000,
          easing: 'linear'
        },
        scales: {
        x:{
          ticks:{
            font:{
              size:20
            }
          }
        },
          y: {
            beginAtZero: true,
            ticks:{
              font:{
                size:20
              }
            }
          }
                  
        }
      }
    });


    this.chart2 = new Chart("myChart2", {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [{
          label: 'No. of Registered Mothers Per day',
          data: realdata,
          borderWidth: 3,
          backgroundColor:  ['#0e8ccff3','#de2a90fa','#e17923ff','#76005f','#e86a26ff'],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio:true,
         
        layout:{
          padding:30
        },
        plugins:{
          title:{
            display:true,
            text:'Reg. Mothers Per Day',
            font:{
              size:30,
            }
          },
          legend:{
            labels:{
              color:'#920656ff'
              // font:
            },
            position:'bottom',
          }
        },
        animation: {
          duration: 3000,
          easing: 'linear'
        },
        scales: {
        x:{
          ticks:{
            font:{
              size:20
            }
          }
        },
          y: {
            beginAtZero: true,
            ticks:{
              font:{
                size:20
              }
            }
          }
                  
        }
      }
    });


  }
}

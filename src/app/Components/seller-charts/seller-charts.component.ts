import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartsService } from 'src/app/Services/charts.service';
@Component({
  selector: 'app-seller-charts',
  templateUrl: './seller-charts.component.html',
  styleUrls: ['./seller-charts.component.css']
})
export class SellerChartsComponent {


  public sellerChart: any;
  public sellerChart2: any;
   Mothers: any;
   sellers: any[]=[];
   pregnants: any;
   labeldata: any[] = [];
   realdata: any[] = [];
  constructor(private chartsSrv: ChartsService) {
    
    this.chartsSrv.getSellersPerDay().subscribe((res) => {
      console.log(res.data)
      this.sellers = res.data;
      if (this.sellers != null) {
        this.sellers.forEach(item => {

          this.labeldata.push(item._id)
          this.realdata.push(item.count)

        })
      }
      this.createChart(this.realdata,this.labeldata)
    })
  }
  createChart(realdata:any[],labeldata:any[]){
this.sellerChart= new Chart("myChart", {
  type: 'doughnut',
  data: {
    labels: labeldata,
    datasets: [{
      label: 'No. of Registered Mothers',
      data: realdata,
      borderWidth: 1, 
       backgroundColor: ['#6f95a974','#a96f9074','#a9976f74'],
    }],
  },
  options: {
    responsive: true,

    animation: {
      duration: 3000,
      easing: 'linear'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
this.sellerChart2=  new Chart("myChart2", {
    type: 'line',
    data: {
      labels: labeldata,
      datasets: [{
        label: '# of Votes',
        data: realdata,
        borderWidth: 1,
        backgroundColor: ['#a96f9074','#6f95a974','#a9976f74'],

      }],
    },
    options: {
      responsive: true,

      animation: {
        duration: 3000,
        easing: 'linear'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 
  }
}



import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { async } from 'rxjs';
import { RentService } from '../../services/rent.service';




@Component({
  selector: 'app-monthlybooking',
  templateUrl: './monthlybooking.component.html',
  styleUrls: ['./monthlybooking.component.scss']
})
export class MonthlybookingComponent implements OnInit {
  
  title='dashboard';
  chart:any=[];
  userData:any= new Array(12)
  months:any=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']
  

   
  bookingFrequency:any=[]
    constructor(private rentservice :RentService) { }

  ngOnInit(): void {
    this.getChart();
   
    



 setTimeout(()=>{
  this.chart=new Chart('canvas',{
    type:'line',
    data:{
      labels:this.months,
      datasets:[
        {
          label:"no of bookings",
          data:this.userData,
          backgroundColor:'gray',
          borderColor:'green',
          borderWidth:2,
          fill:false,
          
        }
      ]
    },
    options: {
      responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'No of bookings per month'
      }
    },
      scales: {
          y: {
              min: 0,
              max: 10
          }
      }
  }

  })},500)
  }
  
  getChart(){
    this.rentservice.getChart().subscribe((res: any) => {

      this.userData.fill(0)
      // res.forEach((value:any)=>console.log(value._id))
      res.forEach((value:any)=> this.userData.splice(value._id -1,1,value.count))

    console.log(this.userData)
    
    
    })
  }
  
  }


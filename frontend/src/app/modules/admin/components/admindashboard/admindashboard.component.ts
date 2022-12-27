import { Component, OnInit, } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  landLordList: any = {}
  tenantList: any = {}
  totalOccipiedRooms: any = {}
  totalAvailableRooms: any = {}
  roomTypes: any = new Array(3).fill(0)
  constructor(private adminService: AdminService) { }



  public doughnutChartLabels: string[] = ['1BHK', '2BHK', '3BHK'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';
  ngOnInit(): void {
    this.getLandLords()
    this.getTenants()
    this.getTotalOccupiedRooms()
    this.getTotalAvailableRooms()
    this.roomTypesChart()
  }
  /*
  [
      {
          "data": [
              1,
              2,
              2
          ]
      }
  ]
  */







  getLandLords() {

    this.adminService.getLandLords().subscribe((res: any) => {
      console.log('res----', res)
      this.landLordList = Object.keys(res).length
      console.log(this.landLordList)
    })

  }

  getTenants() {
    this.adminService.getTenants().subscribe((res: any) => {
      this.tenantList = Object.keys(res).length
    })
  }

  getTotalOccupiedRooms() {
    this.adminService.getTotalOccupiedRooms().subscribe((res: any) => {
      this.totalOccipiedRooms = Object.keys(res).length
    })
  }

  getTotalAvailableRooms() {
    this.adminService.getTotalAvailableRooms().subscribe((res: any) => {
      this.totalAvailableRooms = res
    })
  }
// below service call is for displaying pie chart
  roomTypesChart() {
    this.adminService.roomTypesChart().subscribe((res: any) => {
      console.log('Chart', res)
      
      const data = res.map((obj: any) => {
        return obj.count
      })
      console.log("data", data)
      this.doughnutChartData.datasets.push({ data: data })
      
    })
  }

}

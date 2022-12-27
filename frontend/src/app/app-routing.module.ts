import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AddRentComponent } from './modules/landlord/components/add-rent/add-rent.component';
import { EditRentComponent } from './modules/landlord/components/edit-rent/edit-rent.component';
import { ListRentDetailsComponent } from './modules/landlord/components/list-rent-details/list-rent-details.component';
import { ViewDetailsComponent } from './modules/tenant/components/view-details/view-details.component';
import { NotificationdetailsComponent } from './modules/landlord/components/notificationdetails/notificationdetails.component';
import { MonthlybookingComponent } from './modules/landlord/components/monthlybooking/monthlybooking.component';
import { AllotmentdetailsComponent } from './modules/landlord/components/allotmentdetails/allotmentdetails.component';
import { RoomdetailsComponent } from './modules/landlord/components/roomdetails/roomdetails.component';
import { DashboardComponent } from './modules/landlord/components/dashboard/dashboard.component';
import { SidenavbarComponent } from './modules/shared/components/sidenavbar/sidenavbar.component';
import { LandlordlistComponent } from './modules/admin/components/landlordlist/landlordlist.component';
import { TenantlistComponent } from './modules/admin/components/tenantlist/tenantlist.component';
import { RentlistComponent } from './modules/admin/components/rentlist/rentlist.component';
import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
import { ListTenantComponent } from './modules/admin/components/tenantlist/list-tenant/list-tenant.component';
import {MyBookingsComponent} from './modules/shared/components/my-bookings/my-bookings.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { HomeComponent } from './modules/shared/components/home/home.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'rent-details-list',component:ListRentDetailsComponent},
  {path:'addrent',component:AddRentComponent},
  {path:'editrent',component:EditRentComponent},
  {path:'viewdetails',component:ViewDetailsComponent},
  {path:'notification-dialog',component:NotificationdetailsComponent},
  {path:'monthlybooking',component:MonthlybookingComponent},
  {path:'allotmentdetails',component:AllotmentdetailsComponent},
  {path:'roomdetails',component:RoomdetailsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'sidenavbar',component:SidenavbarComponent},
  {path:'landlordlist',component:LandlordlistComponent}, 
  {path:'tenantlist',component:TenantlistComponent},
  {path:'rentlist',component:RentlistComponent},
  {path:'admindashboard',component:AdmindashboardComponent, canActivate:[AuthGuard]},
  {path:'list-all-tenants',component:ListTenantComponent},
  {path:'my-bookings',component:MyBookingsComponent},
  // {path: '**', redirectTo: 'login' }
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

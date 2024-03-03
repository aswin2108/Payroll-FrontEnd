import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmplyeeComponent } from './manage-emplyee.component';
import { DisplayEmployeeComponent } from './pages/display-employee/display-employee.component';



const routes: Routes = [
  
  { path: '', component: ManageEmplyeeComponent ,
    children:[{

      path: '', component: DisplayEmployeeComponent
    }]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageEmplyeeRoutingModule {}

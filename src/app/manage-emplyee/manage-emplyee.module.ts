import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEmplyeeRoutingModule } from './manage-emplyee-routing.module';
import { ManageEmplyeeComponent } from './manage-emplyee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './pages/display-employee/display-employee.component';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [
    ManageEmplyeeComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    CommonModule,
    ManageEmplyeeRoutingModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TagModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FormsModule ,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    PasswordModule
  ]
})
export class ManageEmplyeeModule { }

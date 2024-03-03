import { Injectable } from '@angular/core';
import { UserService } from '../userServiceService/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { JWTToken } from '../model/JWT';
import { Subject } from 'rxjs';
import { AthTableData, EmployeeDetails } from '../model/EmployeeDetails';

@Injectable({
  providedIn: 'root'
})
export class DisplayEmployeeService {

  constructor(private userService:UserService, private http:HttpClient) { }

  allEmployee$: Subject<EmployeeDetails[]> = new Subject<EmployeeDetails[]>();

  getAllEmployeeDetails(){
    this.http
      .get<EmployeeDetails[]>(
        'https://localhost:7125/api/Users/allUsers',
        {}
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.allEmployee$.next(response);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          
        },
        complete: () => {
          
        },
      });
  }

  deleteEmployee(userName:string){
    return this.http.delete(`https://localhost:7125/api/Users/user/delete?userName=${userName}`);
  }

  formatDate(dateString: string): string {
    // Parse the string into a Date object
    const date = new Date(dateString);
    // Format the date into "yyyy-mm-dd" format
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  createEmployee(employeeData:EmployeeDetails){
    employeeData.overTime=0;
    employeeData.excemptionAmt=0;
    employeeData.taxPercent=(employeeData.salary*12<250000?0:employeeData.salary*12<500000?5:employeeData.salary*12<1000000?20:30);
    employeeData.dob=this.formatDate(employeeData.dob);
    employeeData.nextPayDate=this.formatDate(employeeData.nextPayDate);
    return this.http.post<any>('https://localhost:7125/api/Users/add-user-details', employeeData);
    // console.log(employeeData);
    //  this.http
    //   .post<any>(
    //     'https://localhost:7125/api/Users/add-user-details',
    //     employeeData
    //   ).subscribe({
    //     next:(response)=>{
    //       console.log('Employee added');
    //     },
    //     error:(error: HttpErrorResponse)=>{
    //       console.log(error);
          
    //     }
    //   })
  }

  createAuthNewEmp(employeeAuth:AthTableData){
  console.log(employeeAuth);
    return this.http.post<any>('https://localhost:7125/api/AuthCred/createUser', employeeAuth);
  }

  editExistingUser(newData:EmployeeDetails){
    newData.dob=this.formatDate(newData.dob);
    newData.nextPayDate=this.formatDate(newData.nextPayDate);
    console.log(EmployeeDetails);
    return this.http.put<any>('https://localhost:7125/api/Users/userDetails/edit', newData);
    
    // this.http.put<any>('https://localhost:7125/api/Users/userDetails/edit', newData).subscribe({
    //   next:(response)=>{
    //     console.log("User Updated");
    //   },
    //   error:(error:HttpErrorResponse)=>{
    //     console.log(error);
    //   }
    // })
  }

}

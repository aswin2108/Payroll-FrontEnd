import { Component, OnInit } from '@angular/core';
import { JWTToken } from 'src/app/shared/model/JWT';
import { UserService } from 'src/app/shared/userServiceService/user.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string;
  role: string;
  items: MenuItem[];

  constructor(private userService: UserService, private route:Router) {}

  ngOnInit(): void {
    this.initializeValues();
    this.userService.userChange.subscribe((data)=>{
      this.initializeValues();
      console.log(data);
      
    
    })
    this.items = [
      {
        label: `${this.userName} (${this.role})`,
        icon: 'pi pi-user',
        items: [
          {
            label: 'Dashboard',
            command: (event) => {
              this.dashboardFunction();
            }
          },
          {
            label: 'Logout',
            command: (event) => {
              this.logoutFunction();
            }
          },
        ]
      }
    ];
  }

  initializeValues(){
    this.userName = this.userService.userName;
    this.role = this.userService.role;
    console.log(this.userName," haoii");
    
  }

  dashboardFunction() {
    // Function logic for the Dashboard item
    console.log('Dashboard clicked');
  }

  

  logoutFunction() {
    this.userService.logOut();
    this.route.navigate(['/authentication/login']);
    this.userName = undefined;
    this.role = undefined;
  }
}
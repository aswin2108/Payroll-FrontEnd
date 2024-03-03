import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/userServiceService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService:UserService, private router: Router){}
  ngOnInit(): void {
      const token=localStorage.getItem('jwtToken');
      const isTokenExpired=this.userService.isTokenExpired(token);

      if(token && !isTokenExpired){
        this.router.navigate(['/home']);
      }
  }
}

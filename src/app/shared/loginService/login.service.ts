import { Injectable } from '@angular/core';
import { AuthLogin } from '../model/Auth';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../userServiceService/user.service';
import { jwtDecode } from 'jwt-decode';
import { JWTToken } from '../model/JWT';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private userService: UserService,private router: Router) {}
   loginStatus:boolean=false;
  loginAuthentication(loginFormData: AuthLogin) {
    this.http
      .post<any>(
        'https://localhost:7125/api/AuthCred/tryLogging',
        loginFormData
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          // if (typeof response === 'object') {
          //   response = JSON.stringify(response); // Convert the response object to JSON string
          // }
          const decoded: JWTToken = jwtDecode(response);
          this.userService.tokenDetails = decoded;
          this.userService.userName=decoded.unique_name;
          this.userService.role=decoded.role;
          localStorage.setItem('jwtToken', response);
          this.router.navigate(['/home']);
          this.userService.userChange.next(true);
          console.log(decoded);
          
          if(response){
            console.log("token exist");

            
          }
          else{
            console.log("no token");
            
          }
          
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Handle unauthorized response
            console.log('Unauthorized');
            alert('userName or password is wrong');
            // Perform appropriate actions such as displaying an error message or redirecting to the login page
          } else {
            // Handle other error cases
            console.error('An error occurred:', error.error.message);
          }
        },
        complete: () => {
          
        },
      });
  }
}

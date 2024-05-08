import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Account/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any = {
    userName: '',
    password: ''
  };
  constructor(private http: HttpClient,private router: Router,private loginService:LoginService){}
  onSubmit(){

    this.loginService.postData(this.userData).subscribe({
      next:( (response)=>{
         
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        
      }

      ),
      error:((err)=>{
        this.router.navigate(['/login']);
      })
    })
  }
}

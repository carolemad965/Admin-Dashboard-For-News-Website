import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {RegisterService} from '../Services/Account/register.service'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userData: any = {
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    isAdmin:true
  };
  constructor(private http: HttpClient,private router: Router,private registerService:RegisterService){}
  onSubmit(){
    this.registerService.postData(this.userData).subscribe({
      next:((response:any)=>{
        console.log(response)
        if(response.isPass){
          this.router.navigate(['/login']);
        }
      }),
      error:((err:any)=>{
        console.log("error:"+err)
        this.router.navigate(['/register']);
      })
     })
  
    }
  }




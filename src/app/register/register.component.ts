import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    isAdmin:false
  };
  constructor(private http: HttpClient,private router: Router){}
  onSubmit(){
    console.log(this.userData)
    this.http.post<any>('https://localhost:44374/api/Account/register',this.userData).subscribe({
      next:( (response)=>{
        if(response.isPass){
          this.router.navigate(['/login']);
        }
      }

      ),
      error:((err)=>{console.log(err)})
    })
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  constructor(private http: HttpClient,private router: Router){}
  onSubmit(){
    console.log(this.userData)
    this.http.post<any>('https://localhost:44374/api/Account/login',this.userData).subscribe({
      next:( (response)=>{
          console.log(response)
          this.router.navigate(['/home']);
        
      }

      ),
      error:((err)=>{console.log(err)})
    })
  }
}

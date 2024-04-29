import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Response} from '../Interfaces/response'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './news-home.component.html',
  styleUrl: './news-home.component.css'
})

@Injectable({ providedIn: 'root' })
export class NewsHomeComponent {

  newsList: any = [];
  message:any=[];
  authorid:number=0;
 

  constructor(private http: HttpClient) {
    this.getNews();
   }

  getNews(): void {
    this.http.get<Response>('https://localhost:44374/api/News').subscribe({
      next:((response)=>{
        if(response.isPass==true){
          this.newsList=response.message
          console.log(this.newsList)
          this.newsList.forEach((item: any) => {
            item.isPast = new Date(item.publicationDate) < new Date();
          });
         
        }
        else{
        this.message=response.message
        }
      }),
      error:((err)=>{
        this.message=err
      })
         
  }
)

  }
}



import { Component } from '@angular/core';
import {RouterLink,ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import {Response} from '../Interfaces/response';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {
  newsId:string|null='';
  newsData: any;

  constructor(private route: ActivatedRoute,private http: HttpClient){

    this.route.paramMap.subscribe(params => { 
      this.newsId = params.get('id');
    
    });
    if(this.newsId!=null){

      this.getNews(this.newsId);
    }
  }
 

  getNews(Id: string) {
    const IdInt: number = Number(Id);
    this.http.get<Response>(`https://localhost:44374/api/News/${IdInt}`).subscribe({
      next:((response)=>{
     this.newsData = response.message;
     console.log(  this.newsData );
      }),
      error:((err)=>{
        this.newsData = err.message;
      })
    })
  }
  
}

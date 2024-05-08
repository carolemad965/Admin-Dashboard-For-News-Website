import { Component } from '@angular/core';
import { AuthorService } from '../Services/Author/author.service';
import {Response} from '../Interfaces/response'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-author-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-home.component.html',
  styleUrl: './author-home.component.css'
})
export class AuthorHomeComponent {
  authorData:any=[]
constructor(private authorService:AuthorService,private router: Router){}

ngOnInit(): void {
  this.authorService.getAll().subscribe({
    next:((response:Response)=>{
      this.authorData=response.message;
console.log(response.message)
    }),
    error:((error:any)=>{
  console.log(error)
    })
  });
}
deleteAuthor(id:number){
this.authorService.Delete(id).subscribe({
  next:((response:Response)=>{
    console.log(response)
    this.router.navigate(['/author']);
  })
})
}
updateAuthor(id:number){

}
}

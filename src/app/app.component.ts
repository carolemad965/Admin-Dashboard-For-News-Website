import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { AuthorHomeComponent } from './author-home/author-home.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,NewsHomeComponent,AuthorHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewsApp';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , IndexPageComponent , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maids.cc';
}

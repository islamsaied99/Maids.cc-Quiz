import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [ServiceService],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
  Allusers: any;
  Allusersdata: any;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getallusers().subscribe({
      next: (data) => {
        this.Allusers = data;
        this.Allusersdata = this.Allusers.data;
      }
    });
  }
}


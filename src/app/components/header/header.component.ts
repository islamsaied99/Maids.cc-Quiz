import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, RouterModule],
  providers: [ServiceService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  ID: any;
  user: any;
  usersData: any;
  userSupport: any;
  userUrl: any;
  searchterm: any;
  users: any;
  alldata: any;
  length = 0;
  
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getallusers().subscribe({
      next: (data) => {
        this.alldata = data;
        this.usersData = this.alldata.data;
      }
    });
  }

  senddata(event: any) {
    this.users = [];
    this.searchterm = event.target.value;
    for (let user of this.usersData) {
      if (this.searchterm == user.id) {
        this.users.push(user)
      }
    }
    this.length = this.users.length;
  }

  clear() {
    this.users = [];
    this.length = 0;
  }

  searchforuser() {
    console.log(this.length, this.users)
    if (this.ID != 0) {
      this.router.navigate(['/user', this.ID]);
    }
    this.clear();
  }
}


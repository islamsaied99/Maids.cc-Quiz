import { Component } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [ServiceService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any;
  ID: any;
  userData: any;
  userSupport: any;
  userUrl: any;
  userAvatar: any;
  userdataid: any;
  usertext: any;
  userf_name: any;
  userlname: any;
  useremail: any;

  constructor(private service: ServiceService, private myActivated: ActivatedRoute) {
    if (myActivated.snapshot.params["id"]) {
      this.ID = myActivated.snapshot.params["id"];
    }
    myActivated.params.subscribe(
      (params: Params) => {
        if (params['id'] != this.ID) {
          this.user = null;
          this.ID = myActivated.snapshot.params["id"];
          this.callingService();
        }
      });
  }

  ngOnInit(): void {
    this.callingService();
  }

  callingService() {
    this.service.getuserByID(this.ID).subscribe({
      next: (data) => {
        this.user = data;
        this.userData = this.user.data;
        this.userSupport = this.user.support;
        this.userAvatar = this.userData.avatar;
        this.userUrl = this.userSupport.url;
        this.userdataid = this.userData.id;
        this.usertext = this.userSupport.text;
        this.userf_name = this.userData.first_name;
        this.userlname = this.userData.last_name;
        this.useremail = this.userData.email;
      }
    });
  }
}

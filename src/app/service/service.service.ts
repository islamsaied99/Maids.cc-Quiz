import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private client: HttpClient) { }

  private url = "https://reqres.in/api/users?page={page}";
  private urluser = "https://reqres.in/api/users";

  getallusers() {
    return this.client.get(this.url);
  }

  getuserByID(id: number) {
    return this.client.get(this.urluser + "/" + id);
  }
}

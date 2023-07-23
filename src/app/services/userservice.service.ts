import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { User } from '../Model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient)  //injecting http dependency i e autowiring
   { }

  //adduser
  addUser(user:Object):Observable <Object>
  {
return this.http.post(`${baseUrl}/users/register`,user);  //calling backend using post method we are passing url and data in user
  }
}

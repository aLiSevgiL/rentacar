import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listresponcemodel';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl="https://localhost:44333/api/users/getall";
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl); 
  }
}

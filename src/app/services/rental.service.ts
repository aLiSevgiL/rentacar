import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listresponcemodel';
import { Rental } from '../models/rental';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44333/api/rental/";


  constructor(private httpClient:HttpClient) { }

 getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"getdetailall");
  }


  }

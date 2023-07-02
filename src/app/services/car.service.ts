import { Injectable } from '@angular/core';
import { CarDetail } from '../models/cardetail';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listresponcemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
cars:CarDetail []=[];
apiUrl="https://localhost:44333/api/cars/";

  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<CarDetail>>{
   let newPath = this.apiUrl +"getdetailall"
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
   

 getCarsBrand(branId :number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl + "getbrandid?brandid=" + branId
return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

 getCarsColor(colorId :number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl + "getcolorid?colorid=" + colorId
return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }



}

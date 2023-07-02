import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listresponcemodel';
import { CarImage } from '../models/carimage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl="https://localhost:44333/api/carimages/";

  constructor(private httpClient:HttpClient) { }


getCarImages():Observable<ListResponseModel<CarImage>>{
let newPath= this.apiUrl + "carimages/getall"
return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
}

  getCarImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}

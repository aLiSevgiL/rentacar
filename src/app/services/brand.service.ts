import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listresponcemodel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

apiUrl="https://localhost:44333/api/brands/";


  constructor(private httpCilent:HttpClient) { }

 getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpCilent.get<ListResponseModel<Brand>>(this.apiUrl+"getall");
  }

}

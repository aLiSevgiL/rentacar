import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarResponceModel } from 'src/app/models/carResponseModel';
import { CarDetail } from 'src/app/models/cardetail';
import {CarService} from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 

cars:CarDetail[]=[];



constructor(private carService:CarService,private activatedRoute:ActivatedRoute ){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
      if (params["brandid"]){
        this.getBrandId(params["brandid"]);
      }
      else  if (params["colorid"]){
        this.getColorId(params["colorid"]);
      }
      else 
      {
        this.getCars();
      }

   })

   this.getCars();
  }

  
getCars(){
  this.carService.getCars().subscribe(responce=>{
    this.cars=responce.data
  })
}


getBrandId(branid:number){
  this.carService.getCarsBrand(branid).subscribe(responce=>{
    this.cars=responce.data
  })
}

getColorId(colorid:number){
  this.carService.getCarsColor(colorid).subscribe(responce=>{
    this.cars=responce.data
  })
}


}
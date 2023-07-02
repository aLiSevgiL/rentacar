//import { Car } from "./car";
import { ResponseModel } from "./responseModel";
import { CarDetail } from "./cardetail";

export interface CarResponceModel extends ResponseModel {
    data:CarDetail[]

}
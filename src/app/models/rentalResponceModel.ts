import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentalReponceModel extends ResponseModel{
    data:Rental[]
}
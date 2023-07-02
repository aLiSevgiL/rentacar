import { Color } from "./color";
import { ResponseModel } from "./responseModel";

export interface ColorResponceModel extends ResponseModel{
    data:Color[]
}
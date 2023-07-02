import { ResponseModel } from "./responseModel";
import { User } from "./user";

export interface UserResponceModel extends ResponseModel{
    data:User[]
}
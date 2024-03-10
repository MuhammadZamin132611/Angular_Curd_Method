import { Patient_Address } from "./address";

export class Patient{
    id:string='';
    name:string='';
    gender:string='';
    age:number=0;
    date_of_birth!:Date;
    mobile_number:number=0;
    address!:Patient_Address;
}


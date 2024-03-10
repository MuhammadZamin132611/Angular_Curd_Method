import { Doctor } from "./doctor";
import { Patient } from "./patient";

// Entity Class 
export class Appointment {
    id: any;
    title:string;
    date: string;
    time: string;
    patient: Patient;
    reason: string;
    doctor: Doctor;
    description: string; 
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private getPatientbaseURL = 'http://localhost:8080/api/getPatient';
  private registerURL="http://localhost:8080/api/save";
  private getPatientByIdURL="http://localhost:8080/api/getPatient";
  private updateURL="http://localhost:8080/api/updatePatient";
  private deleteURL="http://localhost:8080/api/deletePatient";
  constructor(private httpclient: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.httpclient.get<Patient[]>(`${this.getPatientbaseURL}`);
  }

  registredPatient(patient:Patient):Observable<Object>{
    return this.httpclient.post(`${this.registerURL}`,patient)
  }

  getPatientByID(id:number):Observable<Patient>{
    return this.httpclient.get<Patient>(`${this.getPatientByIdURL}/${id}`)
  }

  updatePatient(id:number, patient:Patient):Observable<Object>{
    return this.httpclient.put(`${this.updateURL}/${id}`,patient)
  }

  deletePatient(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.deleteURL}/${id}`)
  }
}

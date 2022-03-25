import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../service/patient.service';


@Component({
  selector: 'app-pateintlist',
  templateUrl: './pateintlist.component.html',
  styleUrls: ['./pateintlist.component.css']
})
export class PateintlistComponent implements OnInit {
  patientss: Patient[] = [];
  imageURL:string="./assets/image/me.jpg"

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {

    this.getPatients();

  }

  public getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patientss = data;;

    },
      (error) => {
        //error
        console.log("error" + error);

        return;
      });
  }

  updatePatient(patient_id: number) {
    this.router.navigate(['update-patients', patient_id]);
  }

  deletePatient(patient_id: number) {
    this.patientService.deletePatient(patient_id).subscribe(data => {
      console.log(data)
      this.getPatients();
    })
  }
  gotoTotopatientDetails(patient_id: number){
    this.router.navigate(['patient-details', patient_id]);
  }

}

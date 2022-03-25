import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient_id:number=0;
  patient: Patient=new Patient()
  constructor(private route:ActivatedRoute, private patientService:PatientService) { }

  ngOnInit(): void {
      this.patient_id=this.route.snapshot.params['patient_id'];
      this.patientService.getPatientByID(this.patient_id).subscribe(data=>{
        this.patient=data
      },
      error=>{
        console.log(error)
      })

  }

}

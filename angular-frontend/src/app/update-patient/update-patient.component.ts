import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patient_id: number = 0;
  patient: Patient = new Patient();

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    // get id from patient list component
    this.patient_id = this.route.snapshot.params['patient_id'];

    this.patientService.getPatientByID(this.patient_id).subscribe(data => {
      this.patient = data
    });
  }

  // method for routing patient list componentns
  goToPatientList() {
    this.router.navigate(['/patients'])
  }

  onSubmit() {
    this.patientService.updatePatient(this.patient_id, this.patient).subscribe(data => {
      this.goToPatientList();
      console.log(data);
    },
    error=>{
      console.log(error);
    }
    )
  }
}

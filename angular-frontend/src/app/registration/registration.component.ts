import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../service/patient.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  patient: Patient = new Patient();
  url = "./assets/image/quiz.png";


  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {

  }

  savePatient() {
    if (this.patient.phone.length < 11 || this.patient.phone.length > 12) {
      console.log("mobile number must be eleven digit")
    } else {
      this.patientService.registredPatient(this.patient).subscribe(data => {
        console.log(data)
      },
        (error => {
          console.log(error)
        })
      )
    }


  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;

      }

    }

  }

  // method for routing patient list componentns
  goToPatientList() {
    this.router.navigate(['/patients'])
  }

  onSubmit() {
    this.savePatient();
    this.goToPatientList();
  }



}

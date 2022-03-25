import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PateintlistComponent } from './pateintlist/pateintlist.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  {path:'patients', component:PateintlistComponent},
  {path:'', redirectTo:'patients', pathMatch:'full'},
  {path:'registration', component:RegistrationComponent},
  {path:'update-patients/:patient_id', component:UpdatePatientComponent},
  {path:'patient-details/:patient_id', component:PatientDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

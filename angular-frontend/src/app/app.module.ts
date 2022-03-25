import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PateintlistComponent } from './pateintlist/pateintlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PateintlistComponent,
    RegistrationComponent,
    UpdatePatientComponent,
    PatientDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

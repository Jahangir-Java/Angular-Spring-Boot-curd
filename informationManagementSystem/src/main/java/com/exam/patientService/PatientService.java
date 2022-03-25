package com.exam.patientService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.exam.patientEntity.Patients;
import com.exam.patientRepository.PatientReopsitory;

@Service
public class PatientService {
	@Autowired
	private PatientReopsitory patientReo;
	
	public List<Patients> getPatients() {
		return patientReo.findAll();
	}
	
     public Patients registerPatient(Patients patients) {
		 patientReo.save(patients);
		 return patients;	
	}

	public Optional<Patients> getPatientById(int id) {
		Optional<Patients> patient= patientReo.findById(id);
		return patient;
	}
	
	
	public Patients updatePatient(int id, Patients patient){
		
		Optional<Patients> existingPatient= patientReo.findById(id);
		
		existingPatient.get().setPatient_name(patient.getPatient_name());
		existingPatient.get().setGender(patient.getGender());
		existingPatient.get().setAge(patient.getAge());
		existingPatient.get().setDob(patient.getDob());
		existingPatient.get().setPhone(patient.getPhone());
		existingPatient.get().setEmail(patient.getEmail());
		existingPatient.get().setAddress(patient.getAddress());
		existingPatient.get().setPhoto(patient.getPhoto());
	
		Patients updataPatient=patientReo.save(existingPatient.get());
		return updataPatient;
	}
     
	
	public void deletePatient(int id) {
		patientReo.deleteById(id);;
	}
  
}

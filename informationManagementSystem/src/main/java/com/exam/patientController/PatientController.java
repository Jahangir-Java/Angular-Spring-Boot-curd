package com.exam.patientController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.patientEntity.Patients;
import com.exam.patientService.PatientService;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class PatientController {
	@Autowired
	private PatientService patientService;

	// find all patient
	@GetMapping("/getPatient")
	public List<Patients> getAllPatinet() {
		return patientService.getPatients();
	}
	
	// find patient by id
	@GetMapping("/getPatient/{id}")
	public Optional<Patients> getPatinetById(@PathVariable int id) {
		Optional<Patients> p= patientService.getPatientById(id);
		return p;	
	}
	
	
	// update patient api
	@PutMapping("updatePatient/{id}")
	public Patients updatePatient(@PathVariable int id, @RequestBody Patients patient) {
		Patients p=patientService.updatePatient(id, patient);
		return p;	
	}
	
	
	// registration patients
	@PostMapping("/save")
	public Patients  savePatient(@RequestBody Patients patient) {
		return patientService.registerPatient(patient);
	}
	
	// registration patients
		@DeleteMapping("deletePatient/{id}")
		public void  deletePatient(@PathVariable int id) {
			 patientService.deletePatient(id);
		}
}

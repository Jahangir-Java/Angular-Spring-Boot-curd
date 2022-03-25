package com.exam.patientRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.patientEntity.Patients;

@Repository
public interface PatientReopsitory extends JpaRepository<Patients,Integer> {

	

}

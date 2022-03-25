package com.exam.patientEntity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Patients {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int patient_id;
	private String patient_name;
	private String gender;
	private String age;
	private String dob;
	private String phone;
	private String email;
	private String address;
	private String photo;
	
	
	public Patients() {
		super();
	}


	public Patients(int patient_id) {
		super();
		this.patient_id = patient_id;
	}


	public Patients( String patient_name, String gender, String age, String dob, String phone, String email, String address,
			String photo) {
		super();
		
		this.patient_name = patient_name;
		this.gender = gender;
		this.age = age;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.photo = photo;
	}
	
	


	public Patients(int patient_id, String patient_name, String gender, String age, String dob, String phone, String email,
			String address, String photo) {
		super();
		this.patient_id = patient_id;
		this.patient_name = patient_name;
		this.gender = gender;
		this.age = age;
		this.dob = dob;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.photo = photo;
	}


	


	

	public int getPatient_id() {
		return patient_id;
	}


	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}


	public String getPatient_name() {
		return patient_name;
	}


	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAge() {
		return age;
	}


	public void setAge(String age) {
		this.age = age;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photo) {
		this.photo = photo;
	}


	@Override
	public String toString() {
		return "Patient [patient_id=" + patient_id + ", patient_name=" + patient_name + ", gender=" + gender + ", age=" + age + ", dob="
				+ dob + ", phone=" + phone + ", email=" + email + ", address=" + address + ", photo=" + photo + "]";
	}
}

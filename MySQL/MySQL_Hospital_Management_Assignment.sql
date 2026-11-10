
/* Task 1: Database and Table Creation */

CREATE DATABASE HospitalManagement;
USE HospitalManagement;

CREATE TABLE Departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100) DEFAULT 'Main Block');

CREATE TABLE Patients (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10),
    city VARCHAR(100),
    phone VARCHAR(15) UNIQUE,
    email VARCHAR(100) UNIQUE,
    registration_date DATE DEFAULT (CURRENT_DATE));

CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    department_id INT,
    consultation_fee DECIMAL(10,2) NOT NULL,
    phone VARCHAR(15),
    FOREIGN KEY (department_id)
        REFERENCES Departments(department_id));

CREATE TABLE Appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_status VARCHAR(20) DEFAULT 'Scheduled',
    FOREIGN KEY (patient_id)
        REFERENCES Patients(patient_id),
    FOREIGN KEY (doctor_id)
        REFERENCES Doctors(doctor_id));

CREATE TABLE Bills (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    appointment_id INT NOT NULL UNIQUE,
    consultation_charge DECIMAL(10,2) NOT NULL,
    medicine_charge DECIMAL(10,2) DEFAULT 0,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'Pending',
    FOREIGN KEY (appointment_id)
        REFERENCES Appointments(appointment_id));

ALTER TABLE Patients ADD COLUMN address VARCHAR(255);
ALTER TABLE Patients MODIFY COLUMN phone VARCHAR(20);
ALTER TABLE Doctors RENAME COLUMN specialization TO specialty;
ALTER TABLE Departments DROP COLUMN location;

/* Task 2: Insert and Manage Records */

INSERT INTO Patients (patient_name, age, gender, city, phone, email, registration_date, address) VALUES
	('Arun Kumar', 25, 'Male', 'Trivandrum',
	 '9876543201', 'arun@gmail.com',
	 '2026-01-10', 'Kazhakuttam'),

	('Sneha Nair', 32, 'Female', 'Kochi',
	 '9876543202', 'sneha@gmail.com',
	 '2026-02-12', 'Edappally'),

	('Rahul Das', 55, 'Male', 'Kollam',
	 '9876543203', 'rahul@gmail.com',
	 '2026-03-15', 'Chinnakada'),

	('Sandra Thomas', 28, 'Female', 'Trivandrum',
	 '9876543204', 'sandra@gmail.com',
	 '2026-04-20', 'Pattom'),

	('Anjali Menon', 45, 'Female', 'Kochi',
	 '9876543205', 'anjali@gmail.com',
	 '2026-05-05', 'Kakkanad'),

	('Suresh Babu', 60, 'Male', 'Alappuzha',
	 '9876543206', 'suresh@gmail.com',
	 '2026-06-18', 'Cherthala'),

	('Kiran Raj', 22, 'Male', 'Thrissur',
	 '9876543207', 'kiran@gmail.com',
	 '2026-07-22', 'Punkunnam'),

	('Sanjay Mohan', 38, 'Male', 'Kottayam',
	 '9876543208', 'sanjay@gmail.com',
	 '2026-08-14', 'Ettumanoor'),

	('Meera Nair', 52, 'Female', 'Trivandrum',
	 '9876543209', 'meera@gmail.com',
	 '2026-09-09', 'Vellayambalam'),

	('Vishnu Prasad', 30, 'Male', 'Kochi',
	 '9876543210', NULL,
	 '2026-10-01', 'Vyttila');

INSERT INTO Departments (department_name) VALUES
	('Cardiology'),
	('Neurology'),
	('Orthopedics'),
	('Dermatology'),
	('Pediatrics');

INSERT INTO Doctors (doctor_name, specialty, department_id, consultation_fee, phone) VALUES
	('Dr. Arun', 'Cardiologist', 1, 800, '9000000001'),
	('Dr. Meera', 'Neurologist', 2, 900, '9000000002'),
	('Dr. Rahul', 'Orthopedic', 3, 600, '9000000003'),
	('Dr. Sneha', 'Dermatologist', 4, 500, '9000000004'),
	('Dr. Kiran', 'Cardiologist', 1, 750, '9000000005'),
	('Dr. Anjali', 'Neurologist', 2, 850, '9000000006'),
	('Dr. Suresh', 'Cardiologist', 1, 1000, '9000000007'),
	('Dr. Sandra', 'Pediatrician', 5, 450, '9000000008');

INSERT INTO Appointments (patient_id, doctor_id, appointment_date, appointment_status) VALUES
	(1, 1, '2026-10-01', 'Completed'),
	(2, 2, '2026-10-02', 'Scheduled'),
	(3, 3, '2026-10-03', 'Completed'),
	(4, 4, '2026-10-04', 'Scheduled'),
	(5, 5, '2026-10-05', 'Completed'),
	(6, 6, '2026-10-06', 'Scheduled'),
	(7, 7, '2026-10-07', 'Completed'),
	(8, 8, '2026-10-08', 'Scheduled'),
	(9, 1, '2026-10-09', 'Completed'),
	(1, 2, '2026-10-10', 'Scheduled'),
	(2, 3, '2026-10-11', 'Completed'),
	(3, 4, '2026-10-12', 'Scheduled'),
	(4, 5, '2026-10-13', 'Completed'),
	(5, 6, '2026-10-14', 'Scheduled'),
	(6, 7, '2026-10-15', 'Completed');

INSERT INTO Bills (appointment_id, consultation_charge, medicine_charge, total_amount, payment_status) VALUES
	(1, 800, 200, 1000, 'Paid'),
	(2, 900, 300, 1200, 'Pending'),
	(3, 600, 150, 750, 'Paid'),
	(4, 500, 100, 600, 'Pending'),
	(5, 750, 250, 1000, 'Paid'),
	(6, 850, 200, 1050, 'Pending'),
	(7, 1000, 400, 1400, 'Paid'),
	(8, 450, 100, 550, 'Pending'),
	(9, 800, 300, 1100, 'Paid'),
	(10, 900, 200, 1100, 'Pending');

INSERT INTO Patients (patient_name, age, gender, city, phone, email, registration_date, address) VALUES
	('Rohit Nair', 27, 'Male', 'Kollam',
	 '9876543211', 'rohit@gmail.com',
	 '2026-11-01', 'Kavanad');
INSERT INTO Departments (department_name) VALUES ('ENT');
INSERT INTO Doctors (doctor_name, specialty, department_id, consultation_fee, phone) VALUES
	('Dr. Vivek', 'ENT Specialist', 6, 650, '9000000009');
UPDATE Patients SET phone = '9999999999' WHERE patient_id = 1;
UPDATE Doctors SET consultation_fee = 950 WHERE doctor_id = 2;
UPDATE Appointments SET appointment_status = 'Completed' WHERE appointment_id = 2 AND appointment_status = 'Scheduled';
UPDATE Bills SET payment_status = 'Paid' WHERE bill_id = 2 AND payment_status = 'Pending';

DELETE FROM Patients WHERE NOT EXISTS (
    SELECT 1 FROM Appointments WHERE Appointments.patient_id = Patients.patient_id);
SELECT * FROM Patients;
SELECT * FROM Departments;
SELECT * FROM Doctors;
SELECT * FROM Appointments;
SELECT * FROM Bills;

/* Task 3: Filtering and Sorting */

SELECT * FROM Patients WHERE city = 'Trivandrum';
SELECT * FROM Patients WHERE age > 50;
SELECT * FROM Patients WHERE patient_name LIKE 'S%';
SELECT * FROM Patients WHERE patient_name LIKE '%an%';
SELECT * FROM Patients WHERE age BETWEEN 20 AND 40;
SELECT * FROM Doctors d JOIN Departments dep ON d.department_id = dep.department_id
	WHERE dep.department_name IN ('Cardiology', 'Neurology');
SELECT * FROM Patients WHERE email IS NOT NULL;
SELECT * FROM Doctors WHERE consultation_fee > 500;
SELECT * FROM Patients ORDER BY registration_date DESC;
SELECT * FROM Patients ORDER BY registration_date DESC LIMIT 5;
SELECT * FROM Appointments WHERE appointment_status = 'Scheduled';
SELECT * FROM Bills WHERE payment_status = 'Pending';

/* Task 4: Aggregate Functions */

SELECT COUNT(*) AS total_patients FROM Patients;
SELECT AVG(age) AS average_age FROM Patients;
SELECT MAX(consultation_fee) AS maximum_fee FROM Doctors;
SELECT MIN(consultation_fee) AS minimum_fee FROM Doctors;
SELECT SUM(total_amount) AS total_collected FROM Bills WHERE payment_status = 'Paid';
SELECT city, COUNT(*) AS patient_count FROM Patients GROUP BY city;
SELECT dep.department_name, COUNT(d.doctor_id) AS doctor_count 
	FROM Departments dep LEFT JOIN Doctors d ON dep.department_id = d.department_id
	GROUP BY dep.department_id, dep.department_name;
SELECT d.doctor_name, COUNT(a.appointment_id) AS total_appointments
	FROM Doctors d LEFT JOIN Appointments a
	ON d.doctor_id = a.doctor_id
	GROUP BY d.doctor_id, d.doctor_name;
SELECT dep.department_name, COUNT(d.doctor_id) AS doctor_count
	FROM Departments dep JOIN Doctors d
	ON dep.department_id = d.department_id
	GROUP BY dep.department_id, dep.department_name
	HAVING COUNT(d.doctor_id) > 2;
SELECT AVG(consultation_fee) AS average_fee FROM Doctors;

/* Task 5: Joins */

SELECT p.patient_name, a.appointment_date
	FROM Patients p INNER JOIN Appointments a
	ON p.patient_id = a.patient_id;
SELECT d.doctor_name, dep.department_name
	FROM Doctors d INNER JOIN Departments dep
	ON d.department_id = dep.department_id;
SELECT p.patient_name, d.doctor_name, a.appointment_date
	FROM Appointments a INNER JOIN Patients p
	ON a.patient_id = p.patient_id
	INNER JOIN Doctors d
	ON a.doctor_id = d.doctor_id;
SELECT p.patient_name, a.appointment_date
	FROM Patients p
	LEFT JOIN Appointments a
	ON p.patient_id = a.patient_id;
SELECT dep.department_name, d.doctor_name
	FROM Doctors d RIGHT JOIN Departments dep
	ON d.department_id = dep.department_id;
SELECT p.patient_name, b.total_amount
	FROM Patients p INNER JOIN Appointments a
	ON p.patient_id = a.patient_id
	INNER JOIN Bills b
	ON a.appointment_id = b.appointment_id;
SELECT d.doctor_name, COUNT(a.appointment_id) AS appointment_count
	FROM Doctors d LEFT JOIN Appointments a
	ON d.doctor_id = a.doctor_id
	GROUP BY d.doctor_id, d.doctor_name;
SELECT p.patient_name, d.doctor_name, a.appointment_status
	FROM Appointments a INNER JOIN Patients p
	ON a.patient_id = p.patient_id
	INNER JOIN Doctors d
	ON a.doctor_id = d.doctor_id;

/* Task 6: Subqueries */

SELECT * FROM Patients WHERE age > (SELECT AVG(age) FROM Patients);
SELECT * FROM Doctors WHERE consultation_fee = (SELECT MAX(consultation_fee) FROM Doctors);
SELECT * FROM Doctors WHERE consultation_fee > (SELECT AVG(consultation_fee) FROM Doctors);
SELECT * FROM Patients WHERE patient_id IN (
    SELECT patient_id FROM Appointments WHERE doctor_id IN (
        SELECT doctor_id FROM Doctors WHERE doctor_name = 'Dr. Arun'));
SELECT * FROM Bills WHERE total_amount > (SELECT AVG(total_amount) FROM Bills);

/* Task 7: SQL Built-in Functions */

SELECT UPPER(patient_name) AS uppercase_name FROM Patients;
SELECT LOWER(doctor_name) AS lowercase_name FROM Doctors;
SELECT patient_name, CHAR_LENGTH(patient_name) AS name_length FROM Patients;
SELECT CURDATE() AS current_date;
SELECT registration_date, YEAR(registration_date) AS registration_year FROM Patients;
SELECT patient_name, YEAR(registration_date) AS registration_year FROM Patients;
SELECT doctor_name, ROUND(consultation_fee, 0) AS rounded_fee FROM Doctors;
SELECT department_name, LEFT(department_name, 3) AS first_three_characters FROM Departments;
SELECT appointment_id, appointment_date, MONTH(appointment_date) AS appointment_month, MONTHNAME(appointment_date) AS month_name FROM Appointments;
SELECT bill_id, consultation_charge, medicine_charge, (consultation_charge + medicine_charge) AS calculated_total FROM Bills;



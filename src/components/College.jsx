import React, { useState } from "react";
import { data } from "../MOCK_DATA";
import StudentList from "./StudentList";

const College = () => {
	const [students, setStudents] = useState(data);

	const removeStudent = (id) => {
		setStudents((students) => {
			return students.filter((student) => student.id !== id);
		});
	};

	const addStudent = (first_name, last_name, email, course) => {
		if (first_name && last_name && email && course) {
			const newStudent = {
				id: students.reduce((id, student) => (id > student.id ? id : student.id)) + 1,
				first_name: first_name,
				last_name: last_name,
				email: email,
				course: course,
			};
			setStudents([...students, newStudent]);
		}
	};

	const handleStudentSubmit = (e) => {
		e.preventDefault();
		addStudent();
	};

	return (
		<div>
			<form onSubmit={handleStudentSubmit}>
				<div className='form-control'>
					<label htmlFor='first_name'>First Name: </label>
					<input
						type='text'
						name='first name'
						id='first_name'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='last_name'>Last Name: </label>
					<input
						type='text'
						name='last name'
						id='last_name'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='email'>Email: </label>
					<input
						type='email'
						name='email'
						id='email'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='course'>Course: </label>
					<input
						type='course'
						name='course'
						id='course'
					/>
				</div>
			</form>
			<StudentList
				students={students}
				removeStudent={removeStudent}
				addStudent={addStudent}
			/>
		</div>
	);
};

export default College;

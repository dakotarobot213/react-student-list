import React, { useState } from "react";
import { data } from "../MOCK_DATA";

const College = () => {
	const [students, setStudents] = useState(data);

	const removeStudent = (id) => {
		setStudents((students) => {
			return students.filter((student) => student.id !== id);
		});
	};

	const addStudent = (first_name, last_name, email, course) => {
		if (first_name && last_name && email && course) {
			let newStudent = {
				id: students.reduce((id, student) => (id > student.id ? id : student.id)) + 1,
				first_name: first_name,
				last_name: last_name,
				email: email,
				course: course,
			};
			setStudents(students.concat(newStudent));
		}
	};

	return (
		<>
			{students.map((person) => {
				const { id, first_name, last_name, email, course } = person;
				return (
					<div key={id}>
						<h4>
							Name: {first_name} {last_name}
						</h4>
						<p>Course: {course}</p>
						<p>Email: {email}</p>
					</div>
				);
			})}
		</>
	);
};

export default College;

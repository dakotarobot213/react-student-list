import React, { useState } from "react";
import { data } from "../MOCK_DATA";
import StudentList from "./StudentList";

const College = () => {
	// State to store students
	const [students, setStudents] = useState(data);
	// States for student creation
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [course, setCourse] = useState("");

	const removeStudent = (id) => {
		setStudents((students) => {
			return students.filter((student) => student.id !== id);
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (first_name && last_name && email && course) {
			const newStudent = {
				id: students.reduce((id, student) => (id > student.id ? id : student.id)) + 1,
				first_name: first_name,
				last_name: last_name,
				email: email,
				course: course,
			};
			setStudents([...students, newStudent]);
		} else {
			console.log("Missing values, please check the form for any blank boxes");
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="form"
			>
				<div className="form-control">
					<label htmlFor="first_name">First Name: </label>
					<input
						type="text"
						name="first_name"
						onChange={(e) => setFirst_name(e.target.value)}
						value={first_name}
						id="first_name"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="last_name">First Name: </label>
					<input
						type="text"
						name="last_name"
						onChange={(e) => setLast_name(e.target.value)}
						value={last_name}
						id="last_name"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						id="email"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="course">Course: </label>
					<input
						type="text"
						name="course"
						onChange={(e) => setCourse(e.target.value)}
						value={course}
						id="course"
					/>
				</div>
				<button type="submit">Add student</button>
			</form>
			<StudentList
				students={students}
				removeStudent={removeStudent}
			/>
		</div>
	);
};

export default College;

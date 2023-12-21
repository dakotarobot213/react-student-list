import React from "react";

const Student = ({ id, first_name, last_name, email, course, removeStudent }) => {
	return (
		<div className="student">
			<h3>
				Name: {first_name} {last_name}
			</h3>
			<h4>Email: {email}</h4>
			<h4>Course: {course}</h4>
			<button onClick={() => removeStudent(id)}>Delete student</button>
		</div>
	);
};

export default Student;

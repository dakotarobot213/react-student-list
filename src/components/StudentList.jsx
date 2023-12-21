import Student from "./Student";

const StudentList = ({ students, removeStudent }) => {
	return students.map((person) => (
		<Student
			Key={person.id}
			{...person}
			removeStudent={removeStudent}
		/>
	));
};

export default StudentList;

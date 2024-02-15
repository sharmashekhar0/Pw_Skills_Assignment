const students = [
	{
		id: 1,
		firstName: "John",
		lastName: "Doe",
		age: 20,
		grade: "A",
	},
	{
		id: 2,
		firstName: "Jane",
		lastName: "Smith",
		age: 22,
		grade: "B",
	},
	{
		id: 3,
		firstName: "Bob",
		lastName: "Johnson",
		age: 19,
		grade: "A",
	},
];

// Add new student function
function addStudent(newStudent) {
	students.push({ id: students.length, ...newStudent });
}

// Update student info function
function updateStudentInformation(id, newInfo) {
	const index = students.findIndex((student) => student.id === id);
	if (index === -1) {
		console.log("Id not found");
	}
	students[index] = { ...students[index], ...newInfo };
}

// Delete student data function
function deleteStudentData(id) {
	const index = students.findIndex((student) => student.id === id);
	if (index !== -1) {
		students.splice(index, 1);
	}
}

// Find students by grade function
function findStudentsByGrade(grade) {
	return students.filter((student) => student.grade === grade);
}

// Calculate average age function
function calculateAverageAge() {
	const totalAge = students.reduce((sum, student) => student.age + sum, 0);
	return totalAge / students.length;
}

// Adding new student
addStudent({
	firstName: "Wilson",
	lastName: "fisk",
	age: 21,
	grade: "C",
});

//Display all students
function displayAllStudentsData() {
	console.log(students);
}

updateStudentInformation(1, { firstName: "Charlie", lastName: "fox" });

deleteStudentData(2);
displayAllStudentsData();

console.log("Students with grade 'A':", findStudentsByGrade("A"));
console.log("Average Age:", calculateAverageAge());

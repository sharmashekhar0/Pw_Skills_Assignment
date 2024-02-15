const student = {
	name: "John",
	age: 25,
};

Object.preventExtensions(student);

const extensibleStatus = Object.isExtensible(student);

const teacher = {
	subject: "Math",
};

Object.seal(teacher);

const sealedStatus = Object.isSealed(teacher);

console.log("Extensible Status of student object:", extensibleStatus);
console.log("Sealed Status of teacher object:", sealedStatus);

// Define your data structure here
const students: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Implement any necessary functions or logic here

// Example usage:
function displayStudents() {
  students.forEach(student => console.log(student.name));
}

displayStudents();

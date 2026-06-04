// Synchronous output will be logged to the console instead of the DOM.
const studentDatabase = [
  { id: 1, firstName: 'Boipelo', lastName: 'Motileng', email: 'boipelomotileng@example.com', course: 'Computer Science', age: 20 },
  { id: 2, firstName: 'Kabi', lastName: 'Mthembu', email: 'kabimthembu@example.com', course: 'Web Design', age: 22 },
  { id: 3, firstName: 'Linah', lastName: 'Smith', email: 'linahsmith@example.com', course: 'React', age: 24 },
  { id: 4, firstName: 'Neo', lastName: 'Brown', email: 'neobrown@example.com', course: 'Node.js', age: 23 },
  { id: 5, firstName: 'Kabebelo', lastName: 'Mokgadi', email: 'kabebelomokgadi@example.com', course: 'HTML & CSS', age: 21 }
];

function demonstrateSyncExecution() {
  console.log('Step-1 - The function is starting');
  console.log('Step-2 - The Process is in action');
  console.log('Step-3 - The function reached the final stage');
}

function displayAllStudents() {
  console.log('Loading student records...');

  setTimeout(() => {
    const rows = studentDatabase.map(student => {
      return `ID: ${student.id} | ${student.firstName} ${student.lastName} | ${student.email} | ${student.course} | Age: ${student.age}`;
    });

    console.log('Student Database:\n' + rows.join('\n'));
  }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
  demonstrateSyncExecution();
  displayAllStudents();
});
const syncOutput = document.getElementById('sync-output');
const dbOutput = document.getElementById('db-output');

const studentDatabase = [
  { id: 1, firstName: 'Boipelo', lastName: 'Motileng', email: 'boipelomotileng@example.com', course: 'Computer Science', age: 20 },
  { id: 2, firstName: 'Kabi', lastName: 'Mthembu', email: 'kabimthembu@example.com', course: 'Web Design', age: 22 },
  { id: 3, firstName: 'Linah', lastName: 'Smith', email: 'linahsmith@example.com', course: 'React', age: 24 },
  { id: 4, firstName: 'Neo', lastName: 'Brown', email: 'neobrown@example.com', course: 'Node.js', age: 23 },
  { id: 5, firstName: 'Kabebelo', lastName: 'Mokgadi', email: 'kabebelomokgadi@example.com', course: 'HTML & CSS', age: 21 }
];

function demonstrateSyncExecution() {
  syncOutput.textContent = '';
  syncOutput.textContent += 'Step-1 - The function is starting\n';
  syncOutput.textContent += 'Step-2 - The Process is in action\n';
  syncOutput.textContent += 'Step-3 - The function reached the final stage\n';
}

function displayAllStudents() {
  dbOutput.textContent = 'Loading student records...';

  setTimeout(() => {
    const rows = studentDatabase.map(student => {
      return `ID: ${student.id} | ${student.firstName} ${student.lastName} | ${student.email} | ${student.course} | Age: ${student.age}`;
    });

    dbOutput.textContent = 'Student Database:\n' + rows.join('\n');
  }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
  demonstrateSyncExecution();
  displayAllStudents();
});
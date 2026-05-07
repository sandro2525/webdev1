const students = [
  { name: "Nina", score: 45 },
  { name: "Gio", score: 80 },
  { name: "Saba", score: 67 },
  { name: "Lia", score: 90 }
];

const result = students
  .filter(student => student.score >= 60)
  .sort((a, b) => b.score - a.score)
  .map(student => student.name);

console.log(result);
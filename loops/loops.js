let name = prompt("Enter player name:");
let age = Number(prompt("Enter player age:"));
let gender = prompt("Enter player gender:");
let isCaptainInput = prompt("Is the player a captain? (true/false)");

let player = {
  name: name,
  age: age,
  gender: gender,
  isCaptain: isCaptainInput === "true",
};

if (player.isCaptain) {
  console.log(
    "This player is the captain! Name: " +
      player.name +
      " and gender: " +
      player.gender,
  );
} else {
  console.log(
    "Regular team member: Name: " +
      player.name +
      " and gender: " +
      player.gender,
  );
}
// let game = {
//   teamA: 0,
//   teamB: 0,
// };

// let teamName = prompt("Enter team name (A or B):");

// if (teamName === "A") {
//   game.teamA++;
//   console.log("Point added to Team A");
// } else if (teamName === "B") {
//   game.teamB++;
//   console.log("Point added to Team B");
// } else {
//   console.log("Invalid team name");
// }

// console.log(game);

let students = [
  { name: "Nika", score: 80 },
  { name: "Luka", score: 55 },
  { name: "Ana", score: 92 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 60) {
    console.log(students[i].name + " passed");
  } else {
    console.log(students[i].name + " failed");
  }
}

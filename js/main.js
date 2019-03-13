let assignments = [
  {
    class: "semiotics",
    priority: "med",
    grade: "twenty",
    complete: "half",
    week: "four"
  },
  {
    class: "3dVis",
    priority: "low",
    grade: "five",
    complete: "none",
    week: "four"
  },
  {
    class: "semiotics",
    priority: "low",
    grade: "five",
    complete: "half",
    week: "ten"
  }
];

// let dropdown1 = {
//   task: `none`
// };

// let dropdown2 = {
//   task: `justStarted`
// };

// const tiles = [`assignment1`, `assignment2`, `assignment3`];
// console.log(tiles);

let htmlOutput = tiles
  .map(
    currentTile => `

    `
  )
  .join("");

document.getElementById("tiles").innerHTML = htmlOutput;

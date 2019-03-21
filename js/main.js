let assignInput = document.getElementById('assign')
let newAss = document.getElementById('newAssignment');



 let newAssignment = [
  { id: 0, name: `this` },
  { id: 1, name: "that" },
  { id: 2, name: "another thing" },
];


 let assign = [
  { id: 0, input:`blah` },
  { id: 1, input: "bloo" },
];

// const tiles = [`assignment1`, `assignment2`, `assignment3`];
// console.log(tiles);


//button functionality
//let btnElement = document.getElementById('newTi');
//btnElement.onclick =  createNewTile;
document.getElementById('newTi').addEventListener('click', createNewTile)


function createNewTile () {

  console.log(`blahblah`);
  // creating a new tile
  newAss.setAttribute('class', 'row2', );

// setting up the array
 let htmlOutput = newAssignment.map(tiles => `<input ${tiles.name} />`,`<select>${tiles.name}</select>`).join('');
 document.getElementById("newAssignment").innerHTML = htmlOutput;
}

//createNewTile ()

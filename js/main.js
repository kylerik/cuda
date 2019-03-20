var assign1 = document.getElementById('assign')
let newAss = document.getElementById('newAssignment');


 let newAssignment = [
  { id: 0, name:`#assign1` },
  { id: 1, name: "assign1" },
  { id: 2, name: "finish homework" },

];


// const tiles = [`assignment1`, `assignment2`, `assignment3`];
// console.log(tiles);
//newAssignment.style.visibilty = `hidden`


//button functionality
let btnElement = document.getElementById('newTi');
btnElement.onclick =  createNewTile;


function createNewTile () {

  console.log(`blahblah`);
  // creating a new tile
  newAss.setAttribute('class', 'row2');
// setting up the array

  let htmlOutput = newAssignment.map(tiles => `<p> ${tiles.name}</p>`).join('');
  document.getElementById("newAssignment").innerHTML = htmlOutput;
}


createNewTile ()

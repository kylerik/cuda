let assignments = [
  {
    class: "class2",
    priority: "med",
    grade: "grade45",
    complete: "just",
    week: "week6"
  },
  {
    class: "class1",
    priority: "low",
    grade: "grade15",
    complete: "none",
    week: week11
  },
  {
    class: "class3",
    priority: "high",
    grade: "grade1",
    complete: "half",
    week: "week8"
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
    <div class="row">
      <!-- ROW 3 -->

      <div class="dropButton">
        <button>
          <a href="dropdown.html">
            <img class="dropdown" src="img\dropdown.png" alt="" />
          </a>
        </button>
      </div>

      <div class="assign2">
        <input type="text" name="" value="" />
      </div>

      <div class="class2">
        <select>
          <option disabled selected value>Select</option>
          <option value="">Semiotics</option>
          <option value="">3-D Vis 2</option>
          <option value="">Immersive enviroments</option>
          <option value="">Interface Dev</option>
        </select>
      </div>

      <div class="prior2">
        <select>
          <option disabled selected value>Select</option>
          <option value=""class="lowV">Low</option>
          <option value=""class="medV">Medium</option>
          <option value="" class="hiV">High</option>
        </select>
      </div>

      <div class="grade2">
        <select>
          <option disabled selected value>Select</option>
          <option value="">5%</option>
          <option value="">10%</option>
          <option value="">15%</option>
          <option value="">20%</option>
          <option value="">25%</option>
          <option value="">30%</option>
          <option value="">35%</option>
          <option value="">40%</option>
          <option value="">45%</option>
          <option value="">50%</option>
        </select>
      </div>

      <div class="complete2">
        <select>
          <option disabled selected value>Select</option>
          <option value="">None</option>
          <option value="">Just started</option>
          <option value="">Half Way</option>
          <option value="">Almost Done</option>
        </select>
      </div>

      <div class="wDue2">
        <select>
          <option disabled selected value>Select</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
          <option value="">13</option>
          <option value="">14</option>
          <option value="">15</option>
        </select>
      </div>

      <div class="date2">
        <input type="text" name="" value="" />
      </div>

      <div class="notes2">
        <input type="text" name="" value="" />
      </div>
    </div>`
  )
  .join("");

document.getElementById("tiles").innerHTML = htmlOutput;

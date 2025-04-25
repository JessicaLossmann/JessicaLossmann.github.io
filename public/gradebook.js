// Fetch data from the PostgreSQL database (simulated via API)
function fetchGradeData() {
  console.log("Fetching grade data...");

  let xhr = new XMLHttpRequest();
  let apiRoute = "/api/grades";

  xhr.onreadystatechange = function () {
      let results;
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status !== 200) {
        console.error(`Could not get grades. 
                Status: ${xhr.status}`);
       }
      populateGradebook(JSON.parse(xhr.responseText));
      }
  }.bind(this);
  xhr.open("GET", apiRoute, true);
  xhr.send();
}

// Populate the table with grade data
function populateGradebook(data) {
  console.log("Populating gradebook with data:", data);
  let tableElm = document.getElementById("gradebook");
    data.forEach(function(assignment){
      let row = document.createElement("tr")

    row.appendChild(nameCell);
    row.appendChild(gradeCell);
    tableElm.appendChild(row);
  });
}


//TODO REMOVE THIS
//Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
//END REMOVE

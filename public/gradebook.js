// Fetch data from the PostgreSQL database (simulated via API)
function fetchGradeData() {
  console.log("Fetching grade data...");

  let xhr = new XMLHttpRequest();
  let apiRoute = "/api/grades";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status !== 200) {
        console.error(`Could not get grades. Status: ${xhr.status}`);
        return;
      }

      try {
        const data = JSON.parse(xhr.responseText);
        populateGradebook(data);
      } catch (e) {
        console.error("Failed to parse response JSON:", e);
      }
    }
  };

  xhr.open("GET", apiRoute, true);
  xhr.send();
}

// Populate the table with grade data
function populateGradebook(data) {
  console.log("Populating gradebook with data:", data);

  const tableElm = document.getElementById("gradebook");
  tableElm.innerHTML = ''; // Clear existing rows if any

  data.forEach(function (assignment) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.appendChild(
      document.createTextNode(`${assignment.last_name}, ${assignment.first_name}`)
    );

    const gradeCell = document.createElement("td");
    gradeCell.appendChild(
      document.createTextNode(assignment.total_grade)
    );

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

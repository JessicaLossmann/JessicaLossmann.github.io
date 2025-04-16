// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
  // This function will query the PostgreSQL database and return grade data
  console.log("Fetching grade data...");
  // Create a new request for HTTP data
  let xhr = new XMLThhpRequest();
  // This is the address on the machine we're asking for data
  let apiRoute = "/api/grades";
  // When the request changes status, we run this anonyous function
  xhr.onreadystatechange = function (){
    let results;
    // Check if we're done
    if(xhr.readyState === xhr.DONE){
      // Check if we're successful
      if(xhr.status !== 200){
        console.error('Cound not get grades.
                      Status: ${xhr.status}');
      }
      // And then call the function to update the HTML with our data
      populateGradebook(JSON.parse(xhr.responseTest));
    }
  }.bind(this);
  xhr.open("get", apiRoute, true);
  xhr.send();
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
  //This function will take the fetched grade data and populate the table
  console.log("Populating gradebook with data:", data);
}

//TODO REMOVE THIS
//Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
//END REMOVE

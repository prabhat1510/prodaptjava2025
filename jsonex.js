function submitData(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    let jsonData;
    //JS Object to hold the JSON data
    if(!firstName || !lastName){
        jsonData = {
            firstName: firstName,
            lastName: lastName
        };
    }else{
        jsonData = {
            firstName: firstName,
            lastName: lastName
        };
    }
    // Check if JSON data already exists in localStorage
    if(!localStorage.getItem("jsonData")){
        // If no data exists, create a new array to hold the JSON objects
        localStorage.setItem("jsonData", JSON.stringify([jsonData]));
    } else {
        // If data exists, retrieve it and add the new object to the array
        const existingData = JSON.parse(localStorage.getItem("jsonData"));
        existingData.push(jsonData);
        localStorage.setItem("jsonData", JSON.stringify(existingData)); 
    }
    
   
}
function retrieveData(event){
    event.preventDefault();
    // Retrieve the JSON data from localStorage and display it
    const jsonData = localStorage.getItem("jsonData");
    if(jsonData){
        const parsedData = JSON.parse(jsonData);
        document.getElementById("jsonData").textContent = JSON.stringify(parsedData, null, 2);
    }
}   
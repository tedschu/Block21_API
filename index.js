// async always has to be tied to a function
// async functions always have to return a "promise" -- some type of value - not just run a process
// await commands the function to wait untils omethign (like API) has loaded before calling it
// fetch is a JS function that goes and gets something from an API
// .json converts the API data into accessible array data that we can use in JS
// API status of 200 means it was a successful connection
// APIs will typically always return an object which will include arrays



// Pulls in database
async function getAllEvents() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
    return await response.json();
}

        // allows us to use the results of database
        getAllEvents().then((response)=> {
            response.data.forEach(item => {
                //console.log(item);  //tests that we're pulling in the object array (works)
                createEvent(item);
            });
        })



// LIST OF EVENTS: Creates each event listing div
function createEvent(info) {
    // Creates all HTML elements
    const results = document.getElementById('results'); //reference HTML wrapper div
    const rowEle = document.createElement("div");  //container for the event info
        const nameEle = document.createElement("h1");
        const descriptionEle = document.createElement("p");
        const dateTimeEle = document.createElement("p");
        const locationEle = document.createElement("p");
        const buttonEle = document.createElement("button");
            buttonEle.textContent="Delete event";
            buttonEle.id="deleteButton";    
    
    // Appends each element 
    results.appendChild(rowEle);
        rowEle.appendChild(nameEle);
        rowEle.appendChild(descriptionEle);
        rowEle.appendChild(dateTimeEle);
        rowEle.appendChild(locationEle);
        rowEle.appendChild(buttonEle);


    // Adds to HTML
    nameEle.innerHTML=info.name;
    descriptionEle.innerHTML=info.description;
    dateTimeEle.innerHTML=info.date;
    locationEle.innerHTML=info.location;
    
    // STYLE for dynamic elements
    rowEle.style.border="1px solid black";
        rowEle.style.margin="5px";
        rowEle.style.padding="5px";
        rowEle.style.boxSizing="border-box";

}


// Function to delete the row (delete button) when a user clicks on it    
    // Needs an event listener for the deleteButton (buttonEle)


// Function to accept inputs from the (4) fields and adding to the list of parties (push to API)






async function addEvent(){
        //Event listener for addEvent button
        document.getElementById("addEventButton").addEventListener("click", ()=> {
            const nameVal = document.getElementById("name").value;
            const descriptionVal = document.getElementById("description").value;
            const dateTimeVal = document.getElementById("dateTime").value;
            const locationVal = document.getElementById("location").value;

            async function addCharacter(){
                const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",{
                    method:"POST",
                    // send back information
                    body: JSON.stringify({
                        name:nameVal,
                        description:descriptionVal,
                        date:dateTimeVal,
                        location:locationVal,

                        })
                });
            
                return response
            }
            addCharacter()
        })
        
    }
       
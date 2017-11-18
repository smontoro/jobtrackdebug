//object creating using constructor notation
function jobApplied(company, dateApplied,  response, notes){
	this.company     = company
	this.dateApplied = dateApplied
	this.response    = response
	this.notes       = notes
};

//jobs applied to
var jobArray = [
	new jobApplied("SpaceX", "01/15/17", "In Person Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new jobApplied("Tesla", "01/16/17", "Phone Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new jobApplied("Solar City", "01/16/17", "Awaiting Response", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new jobApplied("Facebook", "01/17/17", "In Person Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new jobApplied("Google", "01/18/17", "Phone Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")
];

//not totally sure why its written this way but I understand it pulls the length of the jobArray
var originalLength = jobArray.length;

//reverses the jobArray so that the most recently added entry appears on top. 
jobArray.reverse();

//as it runs through the length of the jobArray, run the function that will plug them into elements. 
for (var i = 0; i < jobArray.length; i++) {
	createElements();
};

//document.getElementById('newTracker').addEventListener('click', newTracker(), false);


//function tracks newly applied jobs // It didn't like that the id name "newTracker" was the same as the function name
function newTracker() {
	var 	form        = document.getElementById('form')
	var		button      = document.getElementById('tracker')
	var		jobDiv      = document.getElementById('jobDiv')
	//gets the form values
	var		company     = document.getElementById('company').value
	var		dateApplied = document.getElementById('dateApplied').value
	var		response    = document.getElementById('response').value
	var		notes      = document.getElementById('notes').value

	//if all of the values are blank
	if( (company && dateApplied && response && notes) === ""){
		//turn button red
		button.className = "btn btn-danger"
		//alert the user 
		alert("Make sure all fields are filled!!")
		return;
	} else {
		button.className = "btn btn-primary"
	}
	//stores the new job in the variable
	var newApply = new jobApplied(company, dateApplied, response, notes)
	//if the newApply content does not equal previous content, push the new array 
	if (i != originalLength) {
		jobArray.push(newApply)
	}

	//runs the function to create a new entry by plugging all the stored variable info into the elements
	createElements(newApply)

	//resets the form
	form.reset()
};

//creates the html for the new entry using the content stored in the previous unctions newApply variable
function createElements(newApply) {
	var trackerDiv = document.createElement('div')
	var	divContain = document.createElement('div')
	var	divRow     = document.createElement('div')
	var	divCol     = document.createElement('div')
	var	h1Company  = document.createElement('h1')
	var	pDate      = document.createElement('p')
	var	pResponse  = document.createElement('p')
	var	pNotes     = document.createElement('p')

	divCol.className    = "col-sm-12"
	pDate.className     = "col-sm-4"
	pResponse.className = "col-sm-8"
	pNotes.className    = "col-sm-12"

	if (originalLength == i){
		var companyTextNode  = document.createTextNode(newApply.company)
		var dateTextNode     = document.createTextNode("Date: " + newApply.dateApplied)
		var responseTextNode = document.createTextNode("Response: " + newApply.response)
		var notesTextNode    = document.createTextNode("Notes: " + newApply.notes)

		jobDiv.insertBefore(divCol, jobDiv.childNodes[0])

		jobArray.unshift(newApply);
	} else {
		var companyTextNode  = document.createTextNode(jobArray[i].company)
		var dateTextNode     = document.createTextNode("Date: " + jobArray[i].dateApplied)
		var responseTextNode = document.createTextNode("Response: " + jobArray[i].response)
		var notesTextNode    = document.createTextNode("Notes: " + jobArray[i].notes)

		jobDiv.appendChild(divCol)
	}

	h1Company.appendChild(companyTextNode)
	pDate.appendChild(dateTextNode)
	pResponse.appendChild(responseTextNode)
	pNotes.appendChild(notesTextNode)

	divCol.appendChild(h1Company)
	divCol.appendChild(pDate)
	divCol.appendChild(pResponse)
	divCol.appendChild(pNotes)
};



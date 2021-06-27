//Always test your code to make sure it is linked up correctly 
// console.log("hello world");
let employees = [];
const searchDiv = document.querySelector('.search-container');
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const body =  document.querySelector('body');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close-btn');
const modalContainer = document.querySelector('.modal-container');
const modalBtnContainer = document.querySelector('.modal-btn-container');

fetch(urlAPI)
.then(res => res.json())
.then(res => res.results)
.then(displayEmployees)
.catch(err => console.log(err))

//Markup for the search box 
const searchHtml = `
<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
`;
searchDiv.insertAdjacentHTML('beforeend', searchHtml);

//This is the function that I am using to display emplyees
function displayEmployees(employeeData) {
employees = employeeData;
//This stores employee html as we create it.
employeeHtml = ''; 
//this loops through all the employee info and adds it to the html for that person
employees.forEach((employee, index) => {
let name = employee.name;
let email = employee.email;
let city = employee.location.city;
let picture = employee.picture;

//Displays all the employees from the api to the html
const employeeHtml = `
 <div class="card" data-index="${index}">
 <div class="card-img-container">
<img class="card-img" src="${picture.large}" alt="profile picture"/>
</div>
<div class="card-info-container">
<h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
<p class="card-text">${email}</p>
<p class="card-text cap">${city}</p>
</div>
</div> 
</div>
`
gallery.insertAdjacentHTML('beforeend',  employeeHtml);
})}

//This function displays the modal of the employees
function displayModal(index) {
    let { name, dob, phone, email, 
    location: {city, street, state, postcode
    }, picture } = employees[index];
    let date = new Date(dob.date);  

const modalHtml = `
<div class="modal-container"> 
<div class="modal">
<button type="button" id="gallery-btn" class="modal-close-btn"><strong>X</strong></button>
<div class="modal-info-container">
<img class="modal-img" src="${picture.large}"" alt="profile picture">
<h3 id="name" class="modal-name cap">${name.first} ${name.last}</h3>
<p class="modal-text">${email}</p>
<p class="modal-text cap">${city}</p>
<hr>
<p class="modal-text">${phone}</p>
<p class="modal-text">${street.name}, ${street.number} ${state} ${postcode}</p>
<p class="modal-text">${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
</div>
</div>
</div>`;

body.classList.remove("hidden");
body.insertAdjacentHTML("beforeend", modalHtml);
}

const skipButtons = 
`
<!-- <div class="modal-btn-container">  -->
<!-- <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
<button type="button" id="modal-next" class="modal-next btn">Next</button> --> 
<!-- </div>  -->
`;
modalBtnContainer.insertAdjacentHTML('beforeend', skipButtons);




// This function checks if if the grid container itself was clicked or a child element 
gallery.addEventListener('click', (e) => {
    if (e.target !== gallery) {
        // Select the card element based on its proximity to actual element clicked
        const clicked = e.target.closest(".card");
        const index = clicked.getAttribute("data-index");
        displayModal(index);
    } 
});













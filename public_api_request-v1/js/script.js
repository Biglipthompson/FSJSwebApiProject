//Always test your code to make sure it is linked up correctly 
// console.log("hello world");
let employees = [];
const searchDiv = document.querySelector('.search-container');
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const gallery = document.querySelector('.gallery');
// const body = document.querySelector('body');
const modalClose = document.querySelectorAll('.modal-close-btn');
const modalContainer = document.querySelector('.modal-container')

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
<h2 class="name">${name.first} ${name.last}</h2>
<p class="card-text">${email}</p>
<p class="card-text cap">${city.state}</p>
</div>
</div>
`;
gallery.insertAdjacentHTML("beforeEnd", employeeHtml);
})
}


//This function displays the modal of the employees
function displayModal(index) {
    let { name, dob, phone, email, 
    location: {city, street, state, postcode
    }, picture } = employees[index];
    let date = new Date(dob.date);  

    const modalHtml = `
    <img class="avatar" src="${picture.large}"/>
    <div class="text-container">
    <h2 class="name">${name.first} ${name.last}</h2>
    <p class="email">${email}</p>
    <p class="address">${city}</p>
    <hr />
    <p>${phone}</p>
    <p> ${street.name}, ${street.number} ${state} ${postcode}</p>
    <p>Birthday:${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
`;

gallery.classList.remove("hidden");
displayModal.innerHTML = modalHtml;
}

// This function checks if if the grid container itself was clicked or a child element 
gallery.addEventListener('click', (e) => {
    if (e.target !== gallery) {
        // Select the card element based on its proximity to actual element clicked
        const clicked = e.target.closest(".card");
        const index = clicked.getAttribute("data-index");
        displayModal(index);
    } 
});
// gallery.addEventListener('click', () => {
//     gallery.classList.add('hidden');
// });












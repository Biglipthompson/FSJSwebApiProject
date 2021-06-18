//Always test your code to make sure it is linked up correctly 
// console.log("hello world");
let employees = [];
const searchDiv = document.querySelector('.search-container');
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const gallery = document.querySelector('#gallery');

//Markup for the search box 
const searchHtml = `
<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
`;
searchDiv.insertAdjacentHTML('beforeend', searchHtml);

//Mark up for the gallery cards
const galleryCard = `
<div id="gallery" class="gallery">
<div class="card"> 
<div class="card-img-container">
<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
</div>
<div class="card-info-container">
<h3 id="name" class="card-name cap">first last</h3>
<p class="card-text">email</p>
<p class="card-text cap">city, state</p>
</div>
</div>
</div>
`;

gallery.insertAdjacentElement('beforeend', galleryCard);







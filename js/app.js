/*****Movie API Project******/


const API_KEY = 'e14973ec51e97520a7612995700950bb';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=e14973ec51e97520a7612995700950bb';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movies-searchable');


function movieSection(movies) {
	return movies.map((movie) => {
		if(movie.poster_path){return `<img 
		 src=${IMG_URL + movie.poster_path} 
		 data-movie-id=${movie.id}
		 />`;

		}
	})
}


function createMovieContainer(movies){
	const movieElement = document.createElement('div');
	movieElement.setAttribute('class', 'movie');


	img_list = movieSection(movies);
const movieTemplate = 
    `<section class="section">
        ${img_list.join("")}
    </section>`;


	movieElement.innerHTML = movieTemplate;
	return movieElement;
}


function renderSearchMovies(data){
	movieSearchable.innerHTML = '';
	const movies = data.results;
	const movieBlock = createMovieContainer(movies);
	movieSearchable.appendChild(movieBlock);
	console.log('Data: ', data);
}

buttonElement.onclick = function(event) {
	event.preventDefault();
	const value = inputElement.value;
	const newUrl = url + '&query=' + value;

	fetch(newUrl)
		.then((res) => res.json())
		.then(renderSearchMovies)
		.catch((error) => {
			console.log('Error: ', data)
		})

	inputElement.value = '';
	console.log('Value: ', value);
}

/********************************/

/********About Page Tabs*********/

function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  } 

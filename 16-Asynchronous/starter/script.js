"use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderCountry = function (data, className = "") {
// 	const html = `
//     <article class="country ${className}">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
// 				+data.population / 1000000
// 			).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
// 				Object.values(data.languages)[0]
// 			}</p>
//             <p class="country__row"><span>💰</span>${
// 				Object.keys(data.currencies)[0]
// 			}</p>
//           </div>
//         </article>
//     `;
// 	countriesContainer.insertAdjacentHTML("beforeend", html);
// 	countriesContainer.style.opacity = "1";
// };

// const renderError = function (message) {
// 	countriesContainer.insertAdjacentText("beforeend", message);
// countriesContainer.style.opacity = 1;
// };
// ///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText)[0];
//     console.log(data);

//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.keys(data.currencies)[0]
//             }</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };
// const getCountryAndNeighbor = function (country) {
// AJAX call
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText)[0];
//     console.log(data);

// Render country 1
//     renderCountry(data);

// Get neighbor country (2)
//     const neighbor = data.borders[0];

//     if (!neighbor) return;
// AJAX call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText)[0];
//         console.log(data2);

//         renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('portugal');

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//         console.log(response);
//         // to read data from promise, we use json() is asynchronous function, return a promise
//         return response.json();
//     // process when returning
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }

// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)

// The Complete JavaScript Course 31
// Test data:

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 		.then((response) => {
// 			if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
// 			return response.json()
// 		})
// 		.then((data) => {
// 			renderCountry(data[0]);
// 			const neighbour = data[0].borders[0];

// 			if (!neighbour) return;

// 			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// 		})
// 		// will be called when fulfilled
// 		.then((response) => response.json())
// 		.then((data) => renderCountry(data[0], "neighbour"))
// 		// any errors will run this one
// 		.catch((err) => {
// 			console.log(`${err}`);
// 			renderError("Something went wrong");
// 		})
// 		// call always
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// function sleep(ms) {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, ms);
// 	})
// }

// sleep(1000)
// 	.then(() => {
// 		console.log(1);
// 		return sleep(1000);
// 	})
// 	.then(() => {
// 		console.log(2);
// 		return sleep(1000)
// 	})
// 	.then(() => {
// 		console.log(3);
// 	})

// const promise1 = new Promise(function (resolve) {
// 	setTimeout(function () {
// 		resolve([1]);
// 	}, 1000);
// });

// const promise2 = new Promise(function (resolve) {
// 	setTimeout(function () {
// 		resolve([2, 3]);
// 	}, 2000);
// });

// Promise.all([promise1, promise2])
// 	.then(function ([result1, result2]) {
// 		console.log(result1.concat(result2));
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

// Promise.resolve('abs').then(x => console.log(x))
// Promise.reject('abs').catch(x => console.log(x))

// const users = [
// 	{
// 		id: 1,
// 		nameUser: "Kien Dam",
// 	},
// 	{
// 		id: 2,
// 		nameUser: "Son Dang",
// 	},
// 	{
// 		id: 3,
// 		nameUser: "Hung Dam",
// 	},
// ];

// const comments = [
// 	{
// 		id: 1,
// 		user_id: 1,
// 		content: "Anh chua ra video",
// 	},
// 	{
// 		id: 2,
// 		user_id: 2,
// 		content: "Anh ra roi em oi",
// 	},
// ];

// // 1. Get comments
// // 2. From comments get user_id, from user_id get user

// // Simulate fetching comments from server
// function getComments() {
// 	return new Promise(function (resolve) {
// 		setTimeout(function () {
// 			resolve(comments);
// 		}, 1000);
// 	});
// }

// // Simulate fetching users from server
// function getUserByIds(userIds) {
// 	return new Promise(function (resolve) {
// 		setTimeout(function () {
// 			var result = users.filter((user) => userIds.includes(user.id));
// 			resolve(result);
// 		}, 1000);
// 	});
// }

// getComments()
// 	.then(function (comments) {
// 		const userIds = comments.map((comment) => comment.user_id);

// 		return getUserByIds(userIds).then(function (users) {
// 			return {
// 				users: users,
// 				comments: comments,
// 			};
// 		});
// 	})
// 	.then(function (users) {
// 		console.log(users);
// 	});
// const courseApi = 'http://localhost:3000/course';

// fetch(courseApi).then(response => response.json()).then(data => console.log(data));

// const listCoursesBlock = document.querySelector("#list-courses");
// const coursesApi = "http://localhost:3000/course";

// function start() {
// 	getCourses(renderCourses);

// 	handleCreateForm();
// }

// start();

// /// Functions

// // receive renderCourse and call APIs
// function getCourses(callback) {
// 	fetch(coursesApi)
// 		.then((response) => response.json())
// 		.then(callback);
// }

// // receive data from form and renderCourse callback
// function createCourse(data, callback) {
// 	fetch(coursesApi, {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 	})
// 		.then((response) => response.json())
// 		.then(callback);
// }

// // receive id and delete course
// function deleteCourse(id) {
// 	fetch(coursesApi + "/" + id, {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	})
// 		.then((response) => response.json())
// 		.then(() => {
// 			document.querySelector(`.course-item-${id}`).remove();
// 		});
// }

// // receive id and insert content to input form
// function handleUpdateCourse(courseId) {
// 	const nameInput = document.querySelector('input[name="name"]');
// 	const descriptionInput = document.querySelector(
// 		'input[name="description"]'
// 	);
// 	const saveBtn = document.querySelector("#create");
// 	saveBtn.innerHTML = "Save";
// 	fetch(coursesApi + "/" + courseId)
// 		.then((response) => response.json())
// 		.then((course) => {
// 			nameInput.value = course.name;
// 			descriptionInput.value = course.description;

// 			// overlapped with previous feature
// 			saveBtn.onclick = function () {
// 				const newCourse = {
// 					id: courseId,
// 					name: nameInput.value,
// 					description: descriptionInput.value,
// 				};

// 				updateCourse(newCourse, renderCourses);
// 			};
// 		});
// }

// // receive course and render
// function updateCourse(data, callback) {
// 	const options = {
// 		method: "PUT",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	};
// 	fetch(coursesApi + "/" + data.id, options)
// 		.then((response = response.json()))
// 		.then(callback);
// }

// // receive array of courses and render
// function renderCourses(courses) {
// 	if (!courses) return;
// 	const htmls = courses.map(
// 		(course) =>
// 			`
//         <li class="course-item-${course.id}">
//             <h4>${course?.name}</h4>
//             <p>${course?.description}</p>
//             <button onclick="deleteCourse('${course?.id}')">Delete</button>
//             <button onclick="handleUpdateCourse('${course?.id}')">Edit</button>
//         </li>
//         `
// 	);
// 	listCoursesBlock.innerHTML = htmls.join("");
// }

// // get data from form => createCourse
// function handleCreateForm() {
// 	const createBtn = document.querySelector("#create");

// 	createBtn.onclick = function () {
// 		const name = document.querySelector('input[name="name"]').value;
// 		const description = document.querySelector(
// 			'input[name="description"]'
// 		).value;
// 		const formData = {
// 			name: name,
// 			description: description,
// 		};

// 		createCourse(formData, renderCourses);
// 	};
// }

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		// 	navigator.geolocation.getCurrentPosition(position, err);
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// getPosition().then(pos => console.log(pos));

// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own 😉
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution

// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// const wait = function (second) {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 1000 * second);
// 	});
// };

// const images = document.querySelector(".images");
// let currentImg;

// const createImg = function (imgPath) {
// 	return new Promise((resolve, reject) => {
// 		const img = document.createElement("img");
// 		img.src = imgPath;

// 		img.addEventListener("load", () => {
// 			images.append(img);
// 			resolve(img);
// 		});

// 		img.addEventListener("error", () => {
// 			reject(new Error("Image not found"));
// 		});
// 	});
// };

// createImg("./img/img-1.jpg")
// 	.then((img) => {
// 		currentImg = img;
// 		return wait(2)
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 		return createImg("./img/img-2.jpg")
// 	})
// 	.then((img) => {
// 		currentImg = img;
// 		return wait(2)
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 		return createImg("./img/img-3.jpg")
// 	})
// 	.catch((err) => console.error(err));

const whereAmI = async function(country) {
	await fetch(`https://restcountries.com/v3.1/name/${country}`);
}

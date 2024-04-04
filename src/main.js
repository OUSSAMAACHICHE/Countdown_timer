// dom elements 
let daysDisplay = document.querySelector('.days .timer');
let hoursDisplay = document.querySelector('.hours .timer');
let minutesDisplay = document.querySelector('.minutes .timer');
let secondsDisplay = document.querySelector('.seconds .timer');




let days = 8;
let hours = 23;
let minutes = 55;
let seconds = 41;



let setCount = setInterval(countDown, 1000);



function countDown() {
	// delete animation classes
	document.querySelectorAll('.timer').forEach(time => {
		time.classList.remove('effect')
		time.classList.remove('move')
	})

	seconds--;
	secondsDisplay.classList.add('effect')
	secondsDisplay.classList.add('move')

	if (seconds === 0) {
		minutes--;
		seconds = 59;
		minutesDisplay.classList.add('effect')
		minutesDisplay.classList.add('move')
	}
	if (minutes === 0) {
		hours--;
		minutes = 59;
		hoursDisplay.classList.add('effect')
		hoursDisplay.classList.add('move')
	}
	if (hours === 0) {
		days--;
		hours = 23;
		daysDisplay.classList.add('effect')
		daysDisplay.classList.add('move')
	}
	if (days === 0) {
		clearInterval(setCount);
	}


	let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
	let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
	let formattedHours = hours < 10 ? "0" + hours : hours;
	let formattedDays = days < 10 ? "0" + days : days;

	daysDisplay.innerText = formattedDays;
	hoursDisplay.innerText = formattedHours;
	minutesDisplay.innerText = formattedMinutes;
	secondsDisplay.innerText = formattedSeconds;

}

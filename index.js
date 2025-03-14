// Setting up the initial values for the scores
let HomeScore = document.getElementById("points-home");
HomeScore.textContent = 0;

let GuestScore = document.getElementById("guest-points");
GuestScore.textContent = 0;

// Increment function for the Home team
function increaseByOne() {
    HomeScore.textContent = parseInt(HomeScore.textContent) + 1;
    highlightHighestScore();
}
function increaseByTwo() {
    HomeScore.textContent = parseInt(HomeScore.textContent) + 2;
    highlightHighestScore();
}
function increaseByThree() {
    HomeScore.textContent = parseInt(HomeScore.textContent) + 3;
    highlightHighestScore();
}

// Increment function for the Guest team
function increaseGuestByOne() {
    GuestScore.textContent = parseInt(GuestScore.textContent) + 1;
    highlightHighestScore();
}
function increaseGuestByTwo() {
    GuestScore.textContent = parseInt(GuestScore.textContent) + 2;
    highlightHighestScore();
}
function increaseGuestByThree() {
    GuestScore.textContent = parseInt(GuestScore.textContent) + 3;
    highlightHighestScore();
}

// Reset function for the New Game button
function resetScores() {
    HomeScore.textContent = 0;
    GuestScore.textContent = 0;
    highlightHighestScore();
}

// Function to highlight the div with the highest score
function highlightHighestScore() {
    let homeScoreValue = parseInt(HomeScore.textContent);
    let guestScoreValue = parseInt(GuestScore.textContent);

    let homeScoreDiv = document.querySelector(".home .score");
    let guestScoreDiv = document.querySelector(".guest .score");

    if (homeScoreValue > guestScoreValue) {
        homeScoreDiv.classList.add("highlight");
        guestScoreDiv.classList.remove("highlight");
    } else if (guestScoreValue > homeScoreValue) {
        guestScoreDiv.classList.add("highlight");
        homeScoreDiv.classList.remove("highlight");
    } else {
        homeScoreDiv.classList.remove("highlight");
        guestScoreDiv.classList.remove("highlight");
    }
}
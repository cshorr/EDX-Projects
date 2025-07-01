function playBellSound() {
  const bell = document.getElementById("bellSound");
  bell.currentTime = 0;
  bell.play();
}

function changeColorRed() {
  const title = document.querySelector("#mainTitle");
  title.style.color = "red";
  playRedBell();
}

function changeColorOrange() {
  const title = document.querySelector("#mainTitle");
  title.style.color = "orange";
  playBellSound();
}
function changeBackgroundBlue() {
  document.body.style.backgroundColor = "cornflowerblue";
  playBellSound();
}
function changeBackgroundGreen() {
  document.body.style.backgroundColor = "lightgreen";
  playBellSound();
}

function favoritecolor() {
  playBellSound();
  let favoriteColor = prompt("whats your favorite color?");

  if
  const fact = " is a great choice for relaxing the eyes.";
  alert(favoriteColor + fact);
}

function playbellsound() {
  const bell = document.getElementById("bellsound");
  bell.currentTime = 0;
  bell.play();
}

function playRedBell() {
  const redBell = document.getElementById("redbellsound");
  redBell.currentTime = 0;
  redBell.play();
}

function checkFavoriteColor() {
  playBellSound();
  let favoriteColor = prompt("Whats your favorite color?");
  if (favoriteColor && favoriteColor.toLowerCase() === "red") {
    alert("Red is the color of champions!");
    console.log("Attempting redbell");
    playRedBellFancy(); //only plays if red is typed
  } else {
    alert(favoriteColor + " is..nice too.....I guess.");
  }
}
function playRedBellFancy() {
  const bell2 = document.getElementById("bellSound2");

  bell2.currentTime = 0;
  bell2.play();
  flashEffect();
  setTimeout(() => {
    playRedBell();
    flashEffect();
  }, 1000); //waits for bell2 to finish

  setTimeout(() => {
    bell2.currentTime = 0;
    bell2.play();
    flashEffect();
  }, 2000); //waits for redbell to finish
}
function flashEffect() {
  document.body.classList.add("flash");
  document.querySelector("#mainTitle").classList.add("flash-text");

  setTimeout(() => {
    document.body.classList.remove("flash");
    document.querySelector("#mainTitle").classList.remove("flash-text");
  }, 500); // length of animation
}
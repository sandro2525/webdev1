
function makebed(callback) {
  setTimeout(() => {
    console.log("bed is made");
      callback();
  }, 2000);
}

function cleanDesk(callback) {
  setTimeout(() => {
    console.log("desk is cleaned");
    callback();
  }, 4000);
}

function playVideogames(callback) {
  setTimeout(() => {
    console.log("playing video games");
    callback();
  }, 3000);
}

function sleep() {
  setTimeout(() => {
    console.log("going to sleep");
  }, 1000);
}


makebed(() => {
  cleanDesk(() => {
    playVideogames(() => {  sleep(); });
  });
}); 
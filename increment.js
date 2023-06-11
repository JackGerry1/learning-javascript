let myPoints = 3;

function add3points() {
  for (i = 1; i <= 3; i++) {
    myPoints += 3;
  }
}
add3points();

function removalPoint() {
  for (i = 1; i <= 2; i++) {
    myPoints--;
  }
}
removalPoint();

console.log(myPoints);

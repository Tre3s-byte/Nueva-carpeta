function catAndMouse(x, y, z) {
  let catADistance = Math.abs(x - z);
  let catBDistance = Math.abs(y - z);

  return catADistance == catBDistance ? "Mouse C" : catADistance < catBDistance ? "Cat A" : "Cat B";
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));

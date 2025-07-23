// D.Z. - 1

let startX = 4;
let startY = 2;
let adressX = 8;
let adressY = 4;

const deltaX = adressX - startX;
const deltaY = adressY - startY;

const deltaXsq = deltaX ** 2;
const deltaYsq = deltaY ** 2;

const distanceSq = deltaXsq + deltaYsq;

console.log(distanceSq);

// sq - square

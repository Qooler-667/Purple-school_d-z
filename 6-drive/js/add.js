const age = 17;
const isDrunk = false;
const hasLicense = true;
console.log(
  `Может сесть за руль: ${age >= 18 && !isDrunk && hasLicense ? "Да." : "Нет!"}`
);

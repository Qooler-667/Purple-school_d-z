function convert(sum, from, to) {
  if (from === to) {
    return sum;
  }
  if (from === "USD") {
    if (to === "EUR") {
      return sum * 0.85;
    } else if (to === "GBP") {
      return sum * 0.75;
    }
  } else if (from === "EUR") {
    if (to === "USD") {
      return sum / 0.85;
    } else if (to === "GBP") {
      return sum * 0.88;
    }
  } else if (from === "GBP") {
    if (to === "USD") {
      return sum / 0.75;
    } else if (to === "EUR") {
      return sum / 0.88;
    }
  }
  return null;
}
/* ------------ */

function convert1(sum, from, to) {
  if (from === "RUB" && to === "USD") {
    return sum / 78.32;
  }
  if (from === "USD" && to === "RUB") {
    return sum * 78.32;
  }
  if (from === "RUB" && to === "EUR") {
    return sum / 91.5;
  }
  if (from === "EUR" && to === "RUB") {
    return sum * 91.5;
  } else {
    return "Введите поддерживаемые валюты: RUB, USD, EUR.";
  }
}
console.log(convert1(100, "RUB", "USD")); // 1.276

export class Calculator {
  constructor(skinName) {
  this.skin = skinName;
}

pingPong(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

addnum(a, b) {
  return a + b;
}

subtractnum(a, b) {
  return a - b;
}

multiplynum(a, b) {
  return a * b;
}

dividenum(a, b) {
  return a / b;
}
}

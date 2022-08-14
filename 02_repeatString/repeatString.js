const repeatString = function (input, repeatTimes) {
  if (repeatTimes < 0) return "ERROR";

  let text = "";
  for (let index = 0; index < repeatTimes; index++) {
    text += input;
  }
  return text;
};

// Do not edit below this line
module.exports = repeatString;

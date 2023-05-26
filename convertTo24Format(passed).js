function timeConversion(s) {
  let am = s.indexOf("AM");
  let pm = s.indexOf("PM");

  if (s.hasOwnProperty(am)) {
    if (s.slice(0, am).split(":")[0] === "12") {
      let index = s.slice(0, am).split(":");
      index.shift();
      index.unshift("00");
      return console.log(index.join(":"));
    } else {
      return console.log(s.slice(0, am));
    }
  } else if (s.hasOwnProperty(pm)) {
    if (s.slice(0, pm).split(":")[0] === "12") {
      return s.slice(0, pm);
    } else {
      let index = 12;
      let arr = s.slice(0, pm).split(":");
      let hour = parseInt(arr.shift()) + index;
      arr.unshift(hour);
      return console.log(arr.join(":"));
    }
  }
}

console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("01:05:45AM"));
console.log(timeConversion("01:05:45PM"));
console.log(timeConversion("02:05:45PM"));
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("07:05:45PM"));

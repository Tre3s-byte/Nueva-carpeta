function plusMinus(arr) {
  let positives = 0;
  let equalToZero = 0;
  let negatives = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] > 0) {
      positives += 1;
    } else if (arr[i] == 0) {
      equalToZero += 1;
    } else if (arr[i] < 0) {
      negatives += 1;
    } else {
      return "Not a number";
    }
  }
  let positiveRatio = (positives / length).toFixed(6);
  let equalToZeroRatio = (equalToZero / length).toFixed(6);
  let negativesRatio = (negatives / length).toFixed(6);

  console.log(positiveRatio);
  console.log(negativesRatio);
  console.log(equalToZeroRatio);
}

plusMinus([-4, 3, -9, 0, 4, 1]);

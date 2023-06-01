// function gradingStudents(grades) {
//   let roundTo = Math.abs((grades % 5) - 5) + grades;
//   return grades < 40 ? grades : grades % 5 < 2 || grades % 5 == 0 ? grades : roundTo;
// }

// function gradingStudents(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] < 40 ? arr[i] : arr[i] % 5 <= 2 || arr[i] % 5 == 0 ? arr[i] : Math.abs((arr[i] % 5) - 5) + arr[i]);
//   }
// }

function gradingStudents(grades) {
  return grades.map((grade) => {
    const newGrade = grade < 37 ? grade : grade % 5 <= 2 || grade % 5 === 0 ? grade : Math.abs((grade % 5) - 5) + grade;
    return console.log(newGrade);
  });
}

gradingStudents([73, 67, 38, 33]);

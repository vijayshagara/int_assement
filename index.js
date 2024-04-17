function printPatternInRow(n) {
  for (let i = 0; i < n; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      console.log("* * * *");
    } else {
      console.log("# # # #");
    }
  }
}

// when n = 4
console.log("------------- n = 4 ------------------")
printPatternInRow(4);
// when n = 5
console.log("------------- n = 5 ------------------")
printPatternInRow(5);

console.log('---------------------------------------------------------');

function printPatternInColoum(n) {
  for (let i = 0; i < 4; i++) {
    let row = '';

    for (let j = 0; j < n; j++) {
      if (j % 4 === 0 || j % 4 === 1) {
        row += '* ';
      } else {
        row += '# ';
      }
    }

    console.log(row);
  }
}

// when n = 4
console.log("------------- n = 4 ------------------")
printPatternInColoum(4);
// when n = 5
console.log("------------- n = 5 ------------------")
printPatternInColoum(5);






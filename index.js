function generaterow(n) {
  let grid = "";

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      grid += "* ".repeat(n).trim() + "\n";
    } else if (i < 4) {
      grid += "# ".repeat(n).trim() + "\n";
    } else {
      grid += "* ".repeat(n).trim() + "\n";
    }
  }

  console.log(grid)
}

console.log('------------ n = 4 ---------')
generaterow(4);

console.log('------------ n = 5 ---------')
generaterow(5);

console.log('------------ n = 6 ---------')
generaterow(6);



function generatecolumn(n) {
  let grid = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < 2) {
        row += "* "; 
      } else if (j < 4) {
        row += "# "; 
      } else {
        row += "* ";
      }
    }
    grid += row + "\n";
  }

  console.log(grid);
}

console.log('------------ n = 4 ---------')
generatecolumn(4); 

console.log('------------ n = 5 ---------')
generatecolumn(5);

console.log('------------ n = 6 ---------')
generatecolumn(6);
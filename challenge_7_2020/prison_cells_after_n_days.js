var prisonAfterNDays = function (cells, N) {
  let state = undefined;
  let modN = undefined;
  let seen = {};
  let patterns = [];

  if (cells[0] === 1 || cells[cells.length - 1] === 1) {
    state = cycleCells(cells);
    modN = N - 1;
  } else {
    state = [...cells];
    modN = N;
  }

  while (!seen[state]) {
    seen[state] = true;
    patterns.push(state);
    state = cycleCells(state);
  }

  return patterns[modN % patterns.length];
};

var cycleCells = (cells) => {
  let newState = [];

  cells.forEach((_, i) => {
    let lastCell = cells[i - 1];
    let nextCell = cells[i + 1];
    let thisCell = lastCell === nextCell ? 1 : 0;
    newState.push(thisCell);
  });
  return newState;
};
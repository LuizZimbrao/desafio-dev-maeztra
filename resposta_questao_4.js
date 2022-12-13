
function checkYear(intervals) {
  const maxYear = Math.max(...[].concat(...intervals));
  const minYear = Math.min(...[].concat(...intervals));

  let workYears = []
  let count;
  let max = 0;
  for (let year = minYear; year <= maxYear; year++) {
    count = 0;
    intervals.forEach(interval => {
      if (year >= interval[0] && year <= interval[1]) {
        count++;
      }
    });
    if (count > max) {
      workYears = [year];
      max = count;
    } else if (count === max) {
      workYears.push(year);
    }
  }
  return workYears;
}

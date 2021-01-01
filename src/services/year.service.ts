
export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getListOfYears() {
  let firstYear = 2016;
  const currentYear = getCurrentYear();
  const list: string[] = [firstYear.toString()];

  do {
    firstYear++;
    list.push(firstYear.toString());
  } while (firstYear !== currentYear);

  return list.reverse();
}
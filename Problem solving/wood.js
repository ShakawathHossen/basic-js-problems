function wooCalculator(chair, table, bed) {
  const perChair = 3;
  const perTable = 10;
  const perBed = 50;

  const totalWoodForChair = chair * perChair;
  const totalWoodForTable = table * perTable;
  const totalWoodForBed = bed * perBed;
  const totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed;
  return totalWood;
}

const totalChair = 1;
const totalTable = 1;
const totalBed = 1;
const totalWood = wooCalculator(totalChair, totalTable, totalBed);
console.log(totalWood);

function umumiy(arr1, arr2) {

  let natija = [];

  arr1.map(x => arr2.includes(x) && natija.push(x));

  return natija;
}

console.log(umumiy([1, 2, 3], [2, 3, 4]));

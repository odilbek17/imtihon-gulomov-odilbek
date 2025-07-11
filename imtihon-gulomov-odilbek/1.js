function guruhAnagramlar(sozlar) {

  let guruh = {};

  for (let soz of sozlar) {

    let kalit = soz.split("").sort().join("");

    if (!guruh[kalit]) guruh[kalit] = [];

    guruh[kalit].push(soz);

  }

 
  return Object.values(guruh);

}
console.log(guruhAnagramlar(["eat", "tea", "tan", "ate", "nat", "bat"]));

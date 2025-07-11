function kopchilikElement(arr) {

  
    let hisob = {};
  
    for (let son of arr) {
  
        hisob[son] = (hisob[son] || 0) + 1;
  
    }
  
    let maxSoni = 0, javob = null;
  
    for (let key in hisob) {
  
        if (hisob[key] > maxSoni) {
      maxSoni = hisob[key];
      javob = Number(key);
    }
  }
  return javob;
}


console.log(kopchilikElement([3, 3, 4, 2, 3, 3, 3]));

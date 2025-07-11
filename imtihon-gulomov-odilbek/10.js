function harfniSanash(arr, belgi) {

  
    let hisob = 0;
  
    for (let str of arr) {
  
        for (let harf of str) {
  
            if (harf === belgi) hisob++;
  
        }
  }
  
  return hisob;
}



console.log(harfniSanash(["hello", "string hello", "woreld is beautiful"], "e"));



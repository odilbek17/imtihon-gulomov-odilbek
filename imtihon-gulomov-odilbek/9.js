
function juftIndexniQosh(arr) {
  
    let natija = arr.slice();
  
    for (let i = 0; i < arr.length; i += 2) {
  
        natija.push(arr[i]);
  
    }
  
    return natija;
}

console.log(juftIndexniQosh([1,2,3,4]));

function isomorfmi(s1, s2) {

  if (s1.length !== s2.length) return false;
  
  let xarita1 = {}, xarita2 = {};
  
  for (let i = 0; i < s1.length; i++) {
  
    if (xarita1[s1[i]] && xarita1[s1[i]] !== s2[i]) return false;
  
    if (xarita2[s2[i]] && xarita2[s2[i]] !== s1[i]) return false;
  
    xarita1[s1[i]] = s2[i];
  
    xarita2[s2[i]] = s1[i];
  
}
  return true;
}


console.log(isomorfmi("egg", "add")); 
console.log(isomorfmi("hello", "salom")); 

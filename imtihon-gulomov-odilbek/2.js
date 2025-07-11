function chastotaSort(arr) {
    
  let sonSoni = {};
  for (let son of arr) {

    sonSoni[son] = (sonSoni[son] || 0) + 1;
  }

  
  return arr.sort((a, b) => {
  
    if (sonSoni[b] === sonSoni[a]) return a - b;
  
    return sonSoni[b] - sonSoni[a];
  
});
}
console.log(chastotaSort([4,1,2,1,2,3,3,3]));
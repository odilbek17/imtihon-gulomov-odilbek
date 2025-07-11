function kichikRaqam(num, k) {
  
    let stack = [];
  
    for (let raqam of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > raqam) {
  
        stack.pop();
  
        k--;
  
    }
  
    stack.push(raqam);
  
}

while (k > 0) {

    stack.pop();

    k--;

}
  while (stack[0] === '0') stack.shift();

  return stack.length ? stack.join("") : "0";
}


console.log(kichikRaqam("1432119", 3));


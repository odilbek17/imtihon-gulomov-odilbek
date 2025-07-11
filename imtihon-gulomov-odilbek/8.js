function emailTekshir(email) {
    
  if (!email.includes("@")) return false;
  
  if (!email.includes(".")) return false;
  
  if (email.endsWith(".")) return false;
  
  return true;
}

console.log(emailTekshir("gulomovodilbek430@gmail.com"));

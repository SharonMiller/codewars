function validateUsr(username) {
  res =  /(?!.*[A-Z\s])\b\w{4,16}/g.test(username) 
  return res
}
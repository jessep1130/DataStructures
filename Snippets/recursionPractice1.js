// this is recursion practice

function power(base, exponent){
  if (exponent === 0) {
      return 1;
  } exponent--;
  console.log(exponent);
  return base * power(base,exponent)
}

console.log(power(2, 4));
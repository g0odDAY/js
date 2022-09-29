

//최대공약수
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);
console.log(gcd(12, 3 ), lcm(12, 3));
console.log(gcd(5, 2), lcm(5, 2));
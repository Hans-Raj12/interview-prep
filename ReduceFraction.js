function reduceFraction(numerator, denominator) {
    if (denominator === 0) {
      return 'Undefined'; // Division by zero is not allowed
    }
  
    // Find the greatest common divisor (GCD) using Euclidean algorithm
    const findGCD = (a, b) => {
      if (b === 0) {
        return a;
      }
      return findGCD(b, a % b);
    };
  
    const gcd = findGCD(numerator, denominator);
  
    // Reduce the fraction by dividing both numerator and denominator by GCD
    const reducedNumerator = numerator / gcd;
    const reducedDenominator = denominator / gcd;
  
    return `${reducedNumerator}/${reducedDenominator}`;
  }
  
  // Test cases
  console.log(reduceFraction(8, 4)); // Output: '2/1'
  console.log(reduceFraction(25, 15)); // Output: '5/3'
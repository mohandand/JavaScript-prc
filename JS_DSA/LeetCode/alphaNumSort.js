function customSort(a, b) {
    const getTypeOrder = (char) => {
      if (/[A-Z]/.test(char)) return 0; // Capitals
      if (/[a-z]/.test(char)) return 1; // Small letters
      if (/[0-9]/.test(char)) return 2; // Numbers
      //return 3; // Other characters
    };
  
    const typeOrderA = getTypeOrder(a);
    const typeOrderB = getTypeOrder(b);
  
    if (typeOrderA !== typeOrderB) {
      return typeOrderA - typeOrderB;
    } else {
      // Same type, use default order
      return 0;
    }
  }
  
  // Example usage with Array.prototype.sort()
  const inputString = "baA30aCaB1";
  const sortedString = inputString.split('').sort(customSort).join('');
  
  console.log(sortedString); // Output: ACBabaa301
  
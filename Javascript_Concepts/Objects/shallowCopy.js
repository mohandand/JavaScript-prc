// Original object
const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    },
    hobbies: ['reading', 'coding']
  };
  
  // Shallow copy using Object.assign
  const shallowCopy = Object.assign({}, originalObject);
  
  // Modify the shallow copy
  shallowCopy.name = 'Jane';
  shallowCopy.address.city = 'San Francisco';
  shallowCopy.hobbies.push('gardening');
  
  // Print the original and shallow copied objects
  console.log('Original Object:', originalObject);
  console.log('Shallow Copy:', shallowCopy);
  /*
  Object.assign({}, originalObject) creates a new object ({}) and assigns the properties of originalObject to the new object.

  It performs a shallow copy, meaning that the properties of the new object are copies of the properties of the original object, 
  but nested objects and arrays are still references to the same objects in memory.

  The spread operator is a concise way to create shallow copies of objects.
  const shallowCopy = { ...originalObject };

  The Object.create method creates a new object with the specified prototype object.
  const shallowCopy = Object.create(originalObject);

  */


const exampleObject = {
    name: "John",
    age: 25,
    city: "New York",
    job: "Engineer",
  };
  
  // Using for...in loop
  console.log("Using for...in loop:");
  for (let key in exampleObject) {
    console.log(`${key}: ${exampleObject[key]}`);
  }
  
  // Using Object.keys()
  console.log("\nUsing Object.keys():");
  const keys = Object.keys(exampleObject);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${exampleObject[key]}`);
  }
  
  // Using Object.values()
  console.log("\nUsing Object.values():");
  const values = Object.values(exampleObject);
  for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
  }
  
  // Using Object.entries()
  console.log("\nUsing Object.entries():");
  const entries = Object.entries(exampleObject);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    console.log(`${key}: ${value}`);
  }

  console.log("\nUsing Object.entries() approch2:");
  for (let [key, value] of Object.entries(exampleObject)) {
    console.log(`${key}: ${value}`);
  }
  

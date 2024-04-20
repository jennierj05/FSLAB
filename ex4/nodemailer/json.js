// Importing the built-in 'fs' module to read the JSON file
const fs = require('fs');

// Reading the JSON file containing the object
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parsing the JSON data to an object
  const jsonObject = JSON.parse(data);

  // Printing the properties of the original object
  console.log('Original object properties:');
  for (let prop in jsonObject) {
    console.log(prop, ':', jsonObject[prop]);
  }

  // Deleting the second property
  const keys = Object.keys(jsonObject);
  if (keys.length >= 2) {
    delete jsonObject[keys[1]];
    console.log('\nSecond property deleted.');
  } else {
    console.log('\nObject does not have enough properties to delete the second one.');
  }

  // Getting the length of the modified object
  const objectLength = Object.keys(jsonObject).length;
  console.log('\nLength of the modified object:', objectLength);
});


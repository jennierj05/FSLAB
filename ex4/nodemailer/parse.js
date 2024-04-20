const url = require('url');

// Example URL
const urlString = 'https://www.example.com:8080/path/to/resource?query=value';

// Parse the URL
const parsedUrl = new URL(urlString);

// Access different parts of the URL
console.log('Protocol:', parsedUrl.protocol); // 'https:'
console.log('Hostname:', parsedUrl.hostname); // 'www.example.com'
console.log('Port:', parsedUrl.port); // '8080'
console.log('Path:', parsedUrl.pathname); // '/path/to/resource'
console.log('Query:', parsedUrl.searchParams.get('query')); // 'value'

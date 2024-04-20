"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByProductId = void 0;
var readlineSync = require("readline-sync");
// Array of Product objects
var products = [
    { id: 1, name: "Boost", price: 10 },
    { id: 2, name: "Lays", price: 20 },
    { id: 3, name: "Horlicks", price: 30 }
];
// Function to get product by ID
function getByProductId(productId) {
    return products.find(function (product) { return product.id === productId; });
}
exports.getByProductId = getByProductId;
// Get productId from user
function getProductIdFromUser() {
    var input = readlineSync.question("Enter the product ID: ");
    var productId = parseInt(input);
    return productId;
}
// Example usage
var productIdToFind = getProductIdFromUser();
var foundProduct = getByProductId(productIdToFind);
if (foundProduct) {
    console.log("Product found:", foundProduct);
}
else {
    console.log("Product not found.");
}

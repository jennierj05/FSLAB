import * as readlineSync from 'readline-sync';

// Define the interface for Product
interface Product {
    id: number;
    name: string;
    price: number;
}

// Array of Product objects
const products: Product[] = [
    { id: 1, name: "Boost", price: 10 },
    { id: 2, name: "Lays", price: 20 },
    { id: 3, name: "Horlicks", price: 30 }
];

// Function to get product by ID
export function getByProductId(productId: number): Product | undefined {
    return products.find(product => product.id === productId);
}

// Get productId from user
function getProductIdFromUser(): number {
    const input = readlineSync.question("Enter the product ID: ");
    const productId = parseInt(input);
    return productId;
}

// Example usage
const productIdToFind = getProductIdFromUser();
const foundProduct = getByProductId(productIdToFind);

if (foundProduct) {
    console.log("Product found:", foundProduct);
} else {
    console.log("Product not found.");
}

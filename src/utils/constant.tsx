export const oneLakhs = 100000;

// Define the return type for the function
type CalculationResult = {
    actualPrice: string;
    taxAmount: string;
} | string; // Union type for valid result or error message

// Function with defined return type
function calculateActualPriceAndTax(mrp: number, taxPercentage: number): CalculationResult {
    // Validate inputs
    if (isNaN(mrp) || isNaN(taxPercentage)) {
        return "Invalid input. Please provide valid numbers.";
    }

    // Calculate actual price and tax amount
    const taxAmount = (mrp * taxPercentage) / 100;
    const actualPrice = mrp - taxAmount;

    // Return results directly
    return {
        actualPrice: actualPrice.toFixed(2),
        taxAmount: taxAmount.toFixed(2),
    };
}

// Example usage
const mrp = 120; // Replace with your MRP value // Maximum Retail Price
const taxPercentage = 10; // Replace with your tax percentage

// Destructure the result object
const result = calculateActualPriceAndTax(mrp, taxPercentage);

// Check the type of result and handle accordingly
if (typeof result === 'string') {
    console.log(result); // Handle error message
} else {
    const { actualPrice, taxAmount } = result;
    console.log(`MRP: $${mrp.toFixed(2)}`);
    console.log(`Actual Price: $${actualPrice}`);
    console.log(`Tax Amount: $${taxAmount}`);
}

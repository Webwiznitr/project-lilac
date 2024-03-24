// Import ProcessLogger from index.js file located in ../src/js directory
import ProcessLogger from "../src/js/index.js";

// Create a new instance of ProcessLogger
const logger = new ProcessLogger();

// Function to generate a random log object
function generateRandomLog() {
    // Generating a random orderId
    const orderId = Math.floor(Math.random() * 1000).toString();
    // Generating a random sessionId
    const sessionId = Math.random().toString(36).substring(7);
    // Generating a random processId
    const processId = Math.random().toString(36).substring(7);
    // Fixed value for functionName
    const functionName = "function";
    // Fixed value for type
    const type = "types";
    // Fixed value for body, represented as a JSON string
    const body = JSON.stringify({
        "orderId": "1",
        "sessionId": "abcdef123456",
        "processId": "obj",
        "functionName": "function",
        "type": "types",
        "body": "bodies"
    });

    // Return the generated log object
    return {
        orderId,
        sessionId,
        processId,
        functionName,
        type,
        body
    };
}

// Generate a random log object
const randomLog = generateRandomLog();

// Log the generated log using the logger instance
logger.log(randomLog);

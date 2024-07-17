// currencyConverter.js

import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// Initialize the FreeCurrencyAPI client with your API key
const freecurrencyapi = new Freecurrencyapi('fca_live_89Yk4m6Cwh5KtrmRa4TMhBs6Jffjo8KW6Q9P3gV6');

// Define an async function to convert currency
async function convertCurrency(fromCurrency, toCurrency, units) {
    try {
        // Fetch latest exchange rates
        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });
        
        // Extract the exchange rate multiplier
        const multiplier = res.data[toCurrency];
        
        // Calculate the converted amount
        const convertedAmount = multiplier * units;
        
        // Return the converted amount
        return convertedAmount;
    } catch (error) {
        // Handle any errors that occur during currency conversion
        console.error('Currency conversion error:', error);
        throw error; // Re-throw the error to propagate it
    }
}

// Export the convertCurrency function so that it can be used elsewhere
export { convertCurrency };

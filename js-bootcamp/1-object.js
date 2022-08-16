/**
 * convertFahrenheit - Function that returns object from a function
 * @fahrenheit : Argument passed to the function 
 * Returns : Variable objects 
 */
let convertFahrenheit = function(fahrenheit)
{
    let celsius;

    celsius = 5/9 * (fahrenheit - 32);
    let kelvin = (fahrenheit + 459.67) * 5/9;
    return {
        fahrenheit: `Fahrenheit value ${fahrenheit}`,
        celsius: `${celsius}`,
        kelvin: `${kelvin}`
    };
}

let result = convertFahrenheit(32);
console.log(result);
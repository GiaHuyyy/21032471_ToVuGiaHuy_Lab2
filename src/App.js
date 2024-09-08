import logo from './logo.svg';
import './App.css';

// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function distinctElements(arr) {
    return [...new Set(arr)];
}

// 28. Calculate the sum of first 100 prime numbers and return them in an array
function sumOfPrimes() {
    let primes = [];
    for(let i = 2; primes.length < 100; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.reduce((a, b) => a + b, 0);

    function isPrime(num) {
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }
}

// 29. Print the distance between the first 100 prime numbers
function primeDistances() {
    let primes = [];
    for(let i = 2; primes.length < 100; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.slice(1).map((num, i) => num - primes[i]);

    function isPrime(num) {
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }
}

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
function addLargeNumbers(num1, num2) {
    let result = BigInt(num1) + BigInt(num2);
    return result.toString();
}

// 31. Create a function that will return the number of words in a text
function wordCount(text) {
    return text.split(/\s+/).length;
}

// 32. Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.replace(/\b\w/g, l => l.toUpperCase());
}

// 33. Calculate the sum of numbers received in a comma delimited string
function sumOfNumbers(numbers) {
    return numbers.split(',').reduce((sum, num) => sum + Number(num), 0);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
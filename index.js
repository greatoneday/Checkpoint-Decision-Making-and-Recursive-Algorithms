function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400, hence a leap year
            } else {
                return false; // Divisible by 100 but not by 400, not a leap year
            }
        } else {
            return true; // Divisible by 4 but not by 100, a leap year
        }
    } else {
        return false; // Not divisible by 4, not a leap year
    }
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

////////////

function getTicketPrice(age) {
    if (age <= 12) {
        return 10; // Price for children
    } else if (age >= 13 && age <= 17) {
        return 15; // Price for teenagers
    } else {
        return 20; // Price for adults
    }
}

console.log(getTicketPrice(10)); // 10
console.log(getTicketPrice(15)); // 15
console.log(getTicketPrice(25)); // 20

////////////

function fibonacci(n) {
    if (n <= 1) {
        return n; // Base cases: F(0) = 0 and F(1) = 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

////////////

function isPalindrome(str) {
    // Preprocess the string: remove non-alphanumeric characters and convert to lowercase
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true; // Base case: if the pointers cross, it's a palindrome
        }
        if (s[left] !== s[right]) {
            return false; // Characters do not match
        }
        return checkPalindrome(s, left + 1, right - 1); // Recursive case
    }
    
    return checkPalindrome(processedStr, 0, processedStr.length - 1);
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false

////////////
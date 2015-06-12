# MaximumSubArray
Implementation of the maximum subarray problem algorithm presented in the MIT "Introduction to Algorithms" course. This is more or less a test bed for the exercises and pseudocode in the book.

## Example

```javascript
var arr = [ 13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 ];
var result = FindMaximumSubArray(arr, 0, arr.length - 1);

console.log(" Low index: ", result.low);
console.log("High index: ", result.high);
console.log("       Sum: ", result.sum);

```

## API

```javascript
var result = FindMaximumSubArray(arr, 0, arr.length - 1);

```

## Notes and References
* http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/
* Cormen, T. (2009). Introduction to algorithms (3rd ed.). Cambridge, Mass.: MIT Press.



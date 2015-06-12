// Input: the array A and the indices low, mid, and high.
// Returns: a tuple containing the indices demarcating a maximum subarray that
// crosses the midpoint, along with the sum of the values in a maximum subarray.
function FindMaxCrossingSubArray(arr, low, mid, high) {
    
    // Find a maximum subarray of the left half.
    // Must contain 'mid'.
    var sum = 0;    
    var leftSum = -Infinity;
    var maxLeft;
    
    for (var i = mid; i >= low; --i) {
        sum += arr[i];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }
    
    // Find a maximum subarray of the right half.
    // Must contain 'mid + 1'.
    sum = 0;    
    var rightSum = -Infinity;
    var maxRight;

    for (var i = mid + 1; i <= high; ++i) {
        sum += arr[i];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = i;
        }
    }

    return { low: maxLeft, high: maxRight, sum: leftSum + rightSum };
}

// Input: the array A and the indices low and high.
// Returns: a tuple containing the indices demarcating a maximum subarray
// along with the sum of the values in a maximum subarray.
function FindMaximumSubArray_Recursive(arr, low, high) {
    if (high == low) {
        return { low: low, high: high, sum: arr[low] };
    } else {
        var mid = Math.floor((low + high) / 2);
        var left = FindMaximumSubArray_Recursive(arr, low, mid);
        var right = FindMaximumSubArray_Recursive(arr, mid + 1, high);
        var cross = FindMaxCrossingSubArray(arr, low, mid, high);

        if ((left.sum >= right.sum) && (left.sum >= cross.sum)) {
            return { low: left.low, high: left.high, sum: left.sum };
        } else if ((right.sum >= left.sum) && (right.sum >= cross.sum)) {
            return { low: right.low, high: right.high, sum: right.sum };
        } else {
            return { low: cross.low, high: cross.high, sum: cross.sum };
        }
    }
}

// Input: the array A and the indices low and high.
// Returns: a tuple containing the indices demarcating a maximum subarray
// along with the sum of the values in a maximum subarray.
function FindMaximumSubArray_BruteForce(arr, low, high) {
    var maxSum = -Infinity;
    var maxRight;
    var maxLeft;

    for (var i = low; i <= high; ++i) {
        var sum = 0;
        for (var j = i; j <= high; ++j) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
                maxLeft = i;
                maxRight = j;
            }
        }
    }

    return { low: maxLeft, high: maxRight, sum: maxSum };
}

// Input: the array A and the indices low and high.
// Returns: a tuple containing the indices demarcating a maximum subarray
// along with the sum of the values in a maximum subarray.
function FindMaximumSubArray_Linear(arr, low, high) {
    var lowIndex = 0;
    var highIndex = 0;
    var i = 0;
    var j = 0;
    var sum = 0;
    var maxSum = -Infinity;

    while (j <= high) {
        sum += arr[j];

        if (sum > maxSum) {
            maxSum = sum;
            lowIndex = i;
            highIndex = j;
        }
        
        if (sum < 0) {
            i = j + 1;
            sum = 0;
        }

        j++;
    }

    return { low: lowIndex, high: highIndex, sum: maxSum };
}

//var arr = [-3, 10, 2, -1, 8, -4];
//var arr = [ 13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 ];
//var arr = [5, -6, 3, 8, -100];
//var arr = [-5];
//var arr = [-5, -10];
var arr = [-10, -5];
var result1 = FindMaximumSubArray_Recursive(arr, 0, arr.length - 1);
var result2 = FindMaximumSubArray_BruteForce(arr, 0, arr.length - 1);
var result3 = FindMaximumSubArray_Linear(arr, 0, arr.length - 1);
console.log("-------------------");
console.log("Recursive");
console.log("-------------------");
console.log(" Low index: ", result1.low);
console.log("High index: ", result1.high);
console.log("       Sum: ", result1.sum);
console.log("-------------------");
console.log("BruteForce");
console.log("-------------------");
console.log(" Low index: ", result2.low);
console.log("High index: ", result2.high);
console.log("       Sum: ", result2.sum);
console.log("-------------------");
console.log("Linear");
console.log("-------------------");
console.log(" Low index: ", result3.low);
console.log("High index: ", result3.high);
console.log("       Sum: ", result3.sum);
console.log("-------------------");
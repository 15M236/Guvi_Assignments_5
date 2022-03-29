//Do the below programs in anonymous function & IIFE

//Print odd numbers in an array
var a = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            console.log(arr[i])
        }
    }
}
let arrOdd = [1, 2, 3, 4, 5, 6, 7, 8];
a(arr)

//Convert all the strings to title caps in a string array
var result = function (arr1) {
    let tempArray = arr1.split(" ")
    let arr2 = ""
    for (let i = 0; i < tempArray.length; i++) {
        arr2 += (tempArray[i][0].toUpperCase() + "" + tempArray[i].slice(1, tempArray[i].length) + " ")
    }
    return arr2
}
console.log(result("geeks for geeks"))

//Sum of all numbers in an array
sumFunction = function (a) {
    let result = 0
    for (let i = 0; i < a.length; i++) {
        result += a[i]
    }
    console.log(result)
}
let a = [1, 4, 21, 23, 45, 56, 45]
sumFunction(a)

//Return all the prime numbers in an array
isPrime = function (a) {
    if (a === 0 || a === 1) {
        return false;
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return false
            }
        }
        return true
    }
}
let a = [2, 3, 4, 5, 6, 7, 8, 9, 11, 17]
for (let i = 0; i < a.length; i++) {
    if (isPrime(a[i])) {
        console.log(a[i])
    }
}

//Return all the palindromes in an array
isPalindrome = function (a) {
    if (a === a.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}
let arrP = ["abc", "car", "ada", "racecar", "cool"]
for (let i = 0; i < arrP.length; i++) {
    if (isPalindrome(arrP[i])) {
        console.log(arrP[i])
    }
}

//Return median of two sorted arrays of the same size
medianMethod = function (arr1, arr2) {
    let median1, median2 = 0
    if (arr1.length % 2 === 0) {
        median1 = (arr1[(arr1.length / 2) - 1] + arr1[(arr1.length / 2)]) / 2
        median2 = (arr2[(arr2.length / 2) - 1] + arr2[(arr2.length / 2)]) / 2
    } else {
        median1 = arr1[arr1.length / 2]
        median2 = arr2[arr2.length / 2]
    }
    console.log((median1 + median2) / 2)
}
let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [2, 4, 5, 6, 7, 8]
medianMethod(arr1, arr2)

//Remove duplicates from an array

removeDuplicates = function (a) {
    let a1 = a.split("")
    let uniqueChars = []
    a1.forEach(element => {
        if (!uniqueChars.includes(element)) {
            uniqueChars.push(element)
        }
    });
    console.log(uniqueChars.join(""))
}

let a = "raghavan"
removeDuplicates(a)

//Rotate an array by k times
rotateArray = function (arr, x) {
    let arr1 = arr.join("")
    let temp = x % arr1.length
    return (arr1.slice(temp, arr1.length) + "" + arr1.slice(0, temp)).split("")
}

let arr = ['a', 'f', 'v', 'r', 'b']
console.log(rotateArray(arr, 1))

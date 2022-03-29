//Print odd numbers in an array

filterOdd = (arrayOdd) => {
    for (let i = 0; i < arrayOdd.length; i++) {
        if (arrayOdd[i] % 2 === 1) {
            console.log(arrayOdd[i])
        }
    }
}

let arrayOdd = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//filterOdd(arrayOdd);

//Convert all the strings to title caps in a string array

changeTitle = (str) => {
    let arrStr = str.split(" ")
    let resultStr = ""
    for (let i = 0; i < arrStr.length; i++) {
        resultStr += arrStr[i][0].toUpperCase() + "" + arrStr[i].slice(1, arrStr[i].length) + " "

    }
    console.log(resultStr)
}

let str = "geeks for geeks"
//changeTitle(str)

//Sum of all numbers in an array
sumOfArray = (arrInt) => {
    let result = 0
    for (let i = 0; i < arrInt.length; i++) {
        result += arrInt[i]
    }
    console.log(result)
}
let arrInt = [2, 3, 4, 5, 6, 7, 8]
sumOfArray(arrInt)

//Return all the prime numbers in an array
isPrime = (temp) => {
    if (temp == 1 || temp == 0) {
        return false
    } else {
        for (let i = 2; i < temp; i++) {
            if (temp % i === 0) {
                return false
            }
        }
        return true
    }
}

let arrPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 97]
for (let i = 0; i < arrPrime.length; i++) {
    if (isPrime(arrPrime[i])) {
        console.log(arrPrime[i])
    }
}

//Return all the palindromes in an array
isPalindrome = (a) => {
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
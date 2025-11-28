function isPrime(n) {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0)
            return false;
    }

    return true;
}

function findPrime(n) {

    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < n; i++) {
        arr1.push(parseInt(prompt("Nhap so thu " + (i + 1) + ": ")));
    }

    for (let i = 0; i <= arr1.length - 1; i++) {
        if (isPrime(i)) {
            arr2.push(i);
        }
    }

    arr2.sort();

    return arr2;
}

let n = parseInt(prompt("Moi nhap so phan tu cua mang: "));
let primeArray = findPrime(n);
console.log("Mang cac so nguyen to tang dan la: ", primeArray);

function result(){
    let n = parseInt(prompt("Nhap so nguyen n (n <= 20): "));

    if (n > 20 || n <= 0) {
        console.log("Nhap sai so n");
        return;
    }

    let arr = [];
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < n; i++){
        arr.push(parseInt(prompt("Nhap so thu " + (i + 1) + ": ")));

        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    let result = sumEven - sumOdd;

    console.log("Mang vua nhap: ", arr);
    console.log("Tong cac so chan: ", sumOdd);
    console.log("Tong cac so le: ", sumEven);
    console.log("Ket qua la: ", result);
}

result();
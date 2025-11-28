function countUpperCase(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }

    if (count === 0) {
        return "The Strings is not contain upper char";
    }

    return count;
}

let str = prompt("Nhap day ki tu bat ki: ")
console.log(countUpperCase(str));

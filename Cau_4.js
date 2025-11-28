class Phone {
    code;
    name;
    brand;
    cost;

    constructor(code = "", name = "", brand = "", cost = 0) {
        this._code = code;
        this._name = name;
        this._brand = brand;
        this._cost = cost;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }

    get cost() {
        return this._cost;
    }

    set cost(value) {
        this._cost = value;
    }

    toString() {
        return `${this._code} ${this._name} ${this._brand} ${this._cost}`;
    }
}

let phoneList = [
    new Phone("P1", "Samsung A50", "Samsung", 10000000),
    new Phone("P2", "iPhone 11", "Apple", 15000000),
    new Phone("P3", "Huawei P30", "Huawei", 12000000),
    new Phone("P4", "Xiaomi Mi 10", "Xiaomi", 13000000)
];

function addPhone() {
    let newPhone = new Phone();
    newPhone.code = prompt("Nhap ma so: ") || "";
    newPhone.name = prompt("Nhap ten: ") || "";
    newPhone.brand = prompt("Nhap nha san xuat: ") || "";
    newPhone.cost = parseInt(prompt("Nhap gia: ")) || 0;
    phoneList.push(newPhone);
}

function printPhoneList(list) {
    list.sort((a, b) => {
        let nameA = (a.name || "").toLowerCase();
        let nameB = (b.name || "").toLowerCase();
        return nameA.localeCompare(nameB);
    });

    let i = 1;
    for (let phone of list) {
        console.log(`${i}. ${phone.toString()}`);
        i++;
    }
}

printPhoneList(phoneList);

let n = parseInt(prompt("Nhap so luong dien thoai muon them: "));
for (let i = 0; i < n; i++) {
    addPhone();
}

console.log("Danh sach dien thoai sau khi them:");
printPhoneList(phoneList);

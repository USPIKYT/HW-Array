let n = +prompt("Введіть скільки елементів буде в масиві")

let arr = []
let sum = 0;

for (let i = 0; i < n; i++) {
    const rnd = Math.floor(1 + Math.random() * 30);
    arr.push(rnd);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");   
}

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
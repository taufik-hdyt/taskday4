// For Each ==> method yang di gunakan untuk melakukan perulangan dr jumlah array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((item) => console.log("For Each", item));

// Map ==>
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const double = arr1.map((item) => console.log("MAP", item * 2));

// Filter ==> Method array yang berfungsi untuk mencari semua element yang di dalam array yang sesuai kriteria tertentu
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const eventNumber = arr2.filter((item) => item % 2 === 0);
console.log("filter", eventNumber);

// Reduce ==> Merubah array menjadi singke value
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = arr.reduce((total, item) => total + item, 0);
console.log("reduce", sum);

// ================== CALLBACKS =====================
function hello() {
  console.log("Hello world");
}
function godbye() {
  console.log("Selamat tinggal");
}

function print(callback) {
  callback();
}
print(hello);
print(godbye);

// Custom HOF

// custom hof that return another function
function multyPlyBy(n) {
  return function (x) {
    return x * n;
  };
}
const doubles = multyPlyBy(2);
console.log(doubles(5));

// custom hof that implement callbacks
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
function logNumber(n) {
  console.log(`The Number is ${n}`);
}
repeat(3, logNumber);

// const btnNav = document.querySelectorAll(".btn-nav"),
//   allSection = document.querySelectorAll(".section"),
//   totalSection = allSection.length;

// function active() {
//   btnNav.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
//   showSection(this);
// }
// btnNav.forEach((item) => {
//   item.addEventListener("click", active);
// });

//Array of Object

//Array
let mhs = ["taufik", "hidayat", "toni"];
// console.log(mhs);

//Object
let profile = {
  name: "taufik",
  alamat: "Cilacap",
  umur: 24,
};
// console.log(profile);

//Array Of Object
let mahasiswa = [
  {
    name: "Taufik",
    alamat: "Cilacap",
    umur: 24,
  },
  {
    name: "Hidayat",
    alamat: "Bandung",
    umur: 22,
  },
  {
    name: "Toni",
    alamat: "Jakarta",
    umur: 23,
  },
];
// console.log(mahasiswa);

let personil = [];
function addData() {
  let pers = {
    name: "Toni",
    alamat: "Jakarta",
    umur: 23,
  };
  personil.push(pers);
  console.log(personil);
}
addData();

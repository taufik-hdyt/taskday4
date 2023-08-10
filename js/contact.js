// let name = "Taufik Hidayat";
// let umur = 18;
// let isMuda = true;

// console.log(`nama saya ${name} umur ${umur} tahun `);
// console.log("nama saya", name, "Umur", umur);
// console.log("nama saya " + name + " Umur " + umur);

// let x = 20;
// let y = 19;
// let result = x + y;
// console.log(result);

// let nilai = 75;
// if (nilai > 70) {
//   console.log("Lulus");
// } else {
//   console.log("belum lulus");
// }

function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name === "") {
    return alert("Name is empty");
  } else if (email === "") {
    return alert("Email is empty");
  } else if (phone === "") {
    return alert("Phone is empty");
  } else if (subject === "") {
    return alert("Subject is empty");
  } else if (message === "") {
    return alert("Message is empty");
  }

  let emailReceiver = "taufikhdyt2599@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto: ${emailReceiver}?subject=${subject}&body= Halo Nama saya ${name}`;
  a.click();

  let data = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.log(data);
}

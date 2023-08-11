let dataBlog = [];

function addBlog(event) {
  event.preventDefault();
  let name = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-img").files;

  image = URL.createObjectURL(image[0]);
  const nodeJsIcon = '<i class="fa-brands fa-node-js fa-xl"></i>';
  const reactIcon = '<i class="fa-brands fa-react fa-xl"></i>';
  const phpIcon = '<i class="fa-brands fa-php fa-xl"></i>';
  const javascriptIcon = '<i class="fa-brands fa-js fa-xl"></i>';
  const durasi = duration(startDate, endDate);

  let nodejs = document.getElementById("check-nodejs").checked
    ? nodeJsIcon
    : "";
  let reactjs = document.getElementById("check-reactjs").checked
    ? reactIcon
    : "";
  let php = document.getElementById("check-nextjs").checked ? phpIcon : "";
  let javascript = document.getElementById("check-javascript").checked
    ? javascriptIcon
    : "";

  let blog = {
    name,
    startDate,
    endDate,
    description,
    image,
    durasi: durasi,
    nodejs,
    reactjs,
    php,
    javascript,
  };
  const splitDurasi = durasi.split(",");
  const resultDurasi = splitDurasi.map((e) => parseInt(e));
  if (resultDurasi < 0) {
    alert("Date is incorrect");
  } else {
    dataBlog.push(blog);
    renderBlog();
  }
}

function renderBlog() {
  document.getElementById("blog-post").innerHTML = "";
  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById("blog-post").innerHTML += `
          <div id="post" onclick="detailBlog()">
          <div class="card">
            <img class="img-cover" src=${dataBlog[i].image} alt="profile" />
            <p class="title">${dataBlog[i].name}</p>
            <p class="duration">durasi : ${dataBlog[i].durasi}</p>
            <p class="description">
            ${dataBlog[i].description}
            </p>
            <div class="icons">

            ${dataBlog[i].nodejs}
            ${dataBlog[i].reactjs}
            ${dataBlog[i].php}
            ${dataBlog[i].javascript}
            </div>
            <div class="btn-group">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        </div>
          `;
  }
}

function duration(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let selisihMiliSeconds = end - start;
  console.log(selisihMiliSeconds);
  const selisihHari = selisihMiliSeconds / (1000 * 60 * 60 * 24);
  if (selisihHari < 30) {
    return `${selisihHari} Hari`;
  } else if (selisihHari <= 360) {
    return `${Math.floor(selisihHari / 30)} Bulan`;
  } else if (selisihHari >= 360) {
    return `${Math.floor(selisihHari / 30 / 12)} Tahun`;
  }
}

function detailBlog() {
  const detail = document.getElementById("post");
  detail.addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = "projectdetail.html";
    a.click();
  });
}
let fileInput = document.querySelector("#input-img");
let fileName = document.querySelector(".file-name");
fileInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    fileName.textContent = selectedFile.name;
  }
});

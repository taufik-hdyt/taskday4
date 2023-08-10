let dataBlog = [];

function addBlog(event) {
  event.preventDefault();
  let name = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-img").files;

  image = URL.createObjectURL(image[0]);
  const durasi = duration(startDate, endDate);

  const nodeJsIcon = '<i class="fa-brands fa-node-js fa-xl"></i>';
  const reactIcon = '<i class="fa-brands fa-react fa-xl"></i>';
  const phpIcon = '<i class="fa-brands fa-php fa-xl"></i>';
  const javascriptIcon = '<i class="fa-brands fa-js fa-xl"></i>';

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

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("blog-post").innerHTML = "";
  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById("blog-post").innerHTML += `
    <div id="post">
    <div class="card">
      <img class="img-cover" src=${dataBlog[i].image} alt="profile" />
      <p class="title">${dataBlog[i].name}</p>
      <p class="duration">durasi : ${dataBlog[i].durasi} bulan</p>
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
  var start = new Date(startDate);
  var end = new Date(endDate);

  var year = end.getFullYear() - start.getFullYear();
  var month = end.getMonth() - start.getMonth();
  return year * 12 + month;
}

function detailBlog() {
  const detail = document.getElementById("post");
  detail.addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = "projectdetail.html";
    a.click();
  });
}

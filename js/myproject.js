let dataBlog = [];

function addBlog(event) {
  event.preventDefault();
  let name = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-img").files;

  image = URL.createObjectURL(image[0]);

  let blog = {
    name,
    startDate,
    endDate,
    description,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("post").innerHTML = "";
  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById("post").innerHTML += `
    <div id="post">
    <div class="card">
      <img class="img-cover" src=${dataBlog[i].image} alt="profile" />
      <p class="title">${dataBlog[i].name}</p>
      <p class="duration">durasi : 3 bulan</p>
      <p class="description">
      ${dataBlog[i].description}
      </p>

      <div class="icons">
        <img src="image/icons/playstore.png" alt="playstore" />
        <img src="image/icons/android-logo.png" alt="android" />
        <img src="image/icons/java-logo.png" alt="java" />
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

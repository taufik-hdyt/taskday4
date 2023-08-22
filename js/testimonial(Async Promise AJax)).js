const testimonials = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/6230eb57d753357ecf19", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error loading data");
    }
  };

  xhr.onerror = function () {
    reject("Network Error");
  };

  xhr.send();
});

async function allTestimonials() {
  try {
    const res = await testimonials;
    // console.log(res);
    let testimonialHTML = "";
    res.data.forEach(
      (item) =>
        (testimonialHTML += `
        <div class="card">
          <img src=${item.image} alt="" />
          <p class="description">"${item.quote}"</p>
          <p  class="name">- ${item.name}</p>
          <p class="rating-desc">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>
  `)
    );

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}
allTestimonials();

async function filterTestimonial(rating) {
  try {
    let testimonialHTML = "";
    const resFiltered = await testimonials;
    const testimonialFiltered = resFiltered.data.filter(
      (item) => item.rating === rating
    );

    if (testimonialFiltered.length === 0) {
      testimonialHTML = `<div class="empty">Data not found!</div>`;
    } else {
      testimonialFiltered.forEach(
        (item) =>
          (testimonialHTML += `
      <div class="card">
        <img src=${item.image} alt="" />
        <p class="description">"${item.quote}"</p>
        <p  class="name">- ${item.name}</p>
        <p class="rating-desc">${item.rating} <i class="fa-solid fa-star"></i></p>
      </div>
      `)
      );
    }
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}

// class Testimonial {
//   #quote = "";
//   #image = "";
//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }
//   get quote() {
//     return this.#quote;
//   }
//   get image() {
//     return this.#image;
//   }
//   // This is an abstract method that subclasses will implement
//   // Method abstraksi dari sub class
//   get author() {
//     throw new Error("getAuthor() method must be implemented");
//   }

//   // This is a polymorphic method than can take any subclass of Testimonial
//   // Method polymorphism dari subclass Testimonials
//   get testimonialHTML() {
//     return `
//     <div class="card">
//       <img style="width: 100%" src=${this.image} alt="" />
//       <p class="description">"${this.quote}"</p>
//       <p class="name">- ${this.author}</p>
//     </div>
//     `;
//   }
// }

// class AuthorTestimonial extends Testimonial {
//   #author = "";
//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   #company = "";
//   constructor(author, quote, image) {
//     super(author, quote, image);
//     this.#company = author;
//   }

//   get author() {
//     return this.#company + "Company";
//   }
// }

// const testimonial1 = new AuthorTestimonial(
//   "Alexander ",
//   "Mantap Sekali Jasanya!",
//   "image/testimonials/testimonial1.jpg"
// );
// const testimonial2 = new AuthorTestimonial(
//   "Surya Elizabet ",
//   "Keran lah Pokonya!",
//   "image/testimonials/testimonial2.jpg"
// );
// const testimonial3 = new AuthorTestimonial(
//   "Josep Alexandra",
//   "Sangat memuaskan hasilnya!",
//   "image/testimonials/testimonial3.jpg"
// );
// const testimonial4 = new AuthorTestimonial(
//   "Josep Alexandra",
//   "Sangat memuaskan hasilnya!",
//   "image/testimonials/testimonial4.jpg"
// );
// const testimonial5 = new AuthorTestimonial(
//   "Josep Alexandra",
//   "Sangat memuaskan hasilnya!",
//   "image/testimonials/testimonial5.jpg"
// );
// let testimonialData = [
//   testimonial1,
//   testimonial2,
//   testimonial3,
//   testimonial4,
//   testimonial5,
// ];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }
// document.getElementById("testimonials").innerHTML = testimonialHTML;

// Menggunakan HOF And Callbacks
const testimonialsData = [
  {
    name: "Alexandra",
    quote: "Mantap Sekali!",
    image: "image/testimonials/testimonial1.jpg",
    rating: 5,
  },
  {
    name: "Surya Eliza",
    quote: "Keren lah!",
    image: "image/testimonials/testimonial2.jpg",
    rating: 4,
  },
  {
    name: "John Stephany",
    quote: "Sedikit lagi!",
    image: "image/testimonials/testimonial3.jpg",
    rating: 2,
  },
  {
    name: "Josep ALexandra",
    quote: "Kerenlah jasanya!",
    image: "image/testimonials/testimonial4.jpg",
    rating: 5,
  },
  {
    name: "Andreanata",
    quote: "Kurang!",
    image: "image/testimonials/testimonial5.jpg",
    rating: 1,
  },
  {
    name: "Andreanata",
    quote: "Kurang!",
    image: "image/testimonials/testimonial5.jpg",
    rating: 3,
  },
];

function allTestimonials() {
  let testimonialHTML = "";
  testimonialsData.forEach(
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
}
allTestimonials();

function filterTestimonial(rating) {
  let testimonialHTML = "";
  const testimonialFiltered = testimonialsData.filter((item) => {
    return item.rating === rating;
  });
  console.log(testimonialFiltered);
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
}

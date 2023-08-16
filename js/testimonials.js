class Testimonial {
  #quote = "";
  #image = "";
  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }
  get quote() {
    return this.#quote;
  }
  get image() {
    return this.#image;
  }
  // This is an abstract method that subclasses will implement
  // Method abstraksi dari sub class
  get author() {
    throw new Error("getAuthor() method must be implemented");
  }

  // This is a polymorphic method than can take any subclass of Testimonial
  // Method polymorphism dari subclass Testimonials
  get testimonialHTML() {
    return `
    <div class="card">
      <img style="width: 100%" src=${this.image} alt="" />
      <p class="description">"${this.quote}"</p>
      <p class="name">- ${this.author}</p>
    </div>
    `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";
  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";
  constructor(author, quote, image) {
    super(author, quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + "Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Alexander ",
  "Mantap Sekali Jasanya!",
  "image/testimonials/testimonial1.jpg"
);
const testimonial2 = new AuthorTestimonial(
  "Surya Elizabet ",
  "Keran lah Pokonya!",
  "image/testimonials/testimonial2.jpg"
);
const testimonial3 = new AuthorTestimonial(
  "Josep Alexandra",
  "Sangat memuaskan hasilnya!",
  "image/testimonials/testimonial3.jpg"
);
const testimonial4 = new AuthorTestimonial(
  "Josep Alexandra",
  "Sangat memuaskan hasilnya!",
  "image/testimonials/testimonial4.jpg"
);
const testimonial5 = new AuthorTestimonial(
  "Josep Alexandra",
  "Sangat memuaskan hasilnya!",
  "image/testimonials/testimonial5.jpg"
);
let testimonialData = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}
document.getElementById("testimonials").innerHTML = testimonialHTML;

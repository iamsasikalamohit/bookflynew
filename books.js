// --- Services Data ---
const services = [
  {
    title: "📚 E-Book Publishing Package",
    description: `
      End-to-end eBook formatting and designing<br>
      ISBN allocation (optional)<br>
      Publishing on leading eBook platforms<br>
      Lifetime availability with global reach
    `
  },
  {
    title: "📖 Printed Book Publishing Package",
    description: `
      Professional book formatting & interior layout<br>
      Cover page design (customized for your book)<br>
      ISBN & barcode support<br>
      Print-on-demand and bulk printing options<br>
      Quick turnaround with fast publication support
    `
  },
  {
    title: "📝 Copyright & Legal Services",
    description: `
      Assistance with Indian Copyright Registration<br>
      Guidance on protecting your intellectual property<br>
      End-to-end handling of copyright application<br>
      Legal compliance for hassle-free publishing
    `
  }
];

// --- Books Data ---
const books = [
  {
    title: "AI for Beginners",
    author: "Dr. Sasikala",
    desc: "An introduction to Artificial Intelligence concepts in simple terms.",
    img: "images/book1.jpg"
  },
  {
    title: "Drones in Agriculture",
    author: "Dr. Sasikala",
    desc: "Exploring drone technology for precision farming and sustainability.",
    img: "images/book2.jpg"
  },
  {
    title: "Machine Learning Made Easy",
    author: "Author Name",
    desc: "Simplified approach to understanding ML concepts and applications.",
    img: "images/book3.jpg"
  },
  {
    title: "Sustainable AI Practices",
    author: "Author Name",
    desc: "Using AI responsibly for environment and society.",
    img: "images/book4.jpg"
  }
];

// --- Load Services ---
const serviceList = document.getElementById("service-list");
services.forEach(service => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
  serviceList.appendChild(card);
});

// --- Load Books ---
const bookGrid = document.getElementById("bookGrid");
books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <img src="${book.img}" alt="${book.title}" />
    <h3 class="book-title">${book.title}</h3>
    <p class="book-author">By ${book.author}</p>
    <p class="book-desc">${book.desc}</p>
  `;
  bookGrid.appendChild(card);
});

// --- Search Functionality ---
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function () {
  const query = searchBar.value.toLowerCase();
  const cards = document.querySelectorAll(".book-card");

  cards.forEach(card => {
    const title = card.querySelector(".book-title").textContent.toLowerCase();
    const author = card.querySelector(".book-author").textContent.toLowerCase();
    if (title.includes(query) || author.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

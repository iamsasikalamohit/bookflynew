const books = [
  {
    title: "AI for Beginners",
    author: "Dr. Sasikala",
    description: "An introduction to Artificial Intelligence concepts in simple terms.",
    image: "images/book1.jpg"
  },
  {
    title: "Drones in Agriculture",
    author: "Dr. Sasikala",
    description: "Exploring drone technology for precision farming and sustainability.",
    image: "images/book2.jpg"
  },
  {
    title: "Machine Learning Made Easy",
    author: "Author Name",
    description: "Simplified approach to understanding ML concepts and applications.",
    image: "images/book3.jpg"
  },
  {
    title: "Sustainable AI Practices",
    author: "Author Name",
    description: "Using AI responsibly for environment and society.",
    image: "images/book4.jpg"
  },
  {
    title: "Deep Learning Basics",
    author: "Author Name",
    description: "A step-by-step guide to deep learning fundamentals.",
    image: "images/book5.jpg"
  },
  {
    title: "Python for Data Science",
    author: "Author Name",
    description: "Learn Python programming with applications in data science.",
    image: "images/book6.jpg"
  },
  {
    title: "Neural Networks Explained",
    author: "Author Name",
    description: "Understanding the architecture and working of neural networks.",
    image: "images/book7.jpg"
  },
  {
    title: "AI in Healthcare",
    author: "Author Name",
    description: "Applications of artificial intelligence in the healthcare industry.",
    image: "images/book8.jpg"
  },
  {
    title: "Cloud Computing for Beginners",
    author: "Author Name",
    description: "Basics of cloud computing and its applications.",
    image: "images/book9.jpg"
  },
  {
    title: "Big Data Analytics",
    author: "Author Name",
    description: "Techniques and tools for handling and analyzing big data.",
    image: "images/book10.jpg"
  },
  {
    title: "Natural Language Processing",
    author: "Author Name",
    description: "Introduction to NLP concepts and real-world applications.",
    image: "images/book11.jpg"
  },
  {
    title: "Robotics and Automation",
    author: "Author Name",
    description: "Understanding robotics and its impact on modern industries.",
    image: "images/book12.jpg"
  }
];

function displayBooks(filteredBooks = books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  filteredBooks.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p><strong>${book.author}</strong></p>
      <p>${book.description}</p>
    `;

    bookList.appendChild(bookCard);
  });
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  displayBooks(filteredBooks);
});

// Initial display
displayBooks();

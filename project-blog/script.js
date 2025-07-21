let blogs = JSON.parse(localStorage.getItem("blogs")) || [
    {
      title: "Masala Dosa",
      author: "Chef Ravi",
      category: "South Indian",
      date: "2024-07-10",
      content: "A crispy and spicy dosa filled with potato masala...",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-1.jpg"
    },
    {
      title: "Delicious Pasta",
      author: "Chef Arya",
      category: "Italian",
      date: "2024-06-20",
      content: "This creamy garlic pasta is a quick and easy recipe...",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D"

    }
  ];
  
  let debounceTimer;
  const blogList = document.getElementById("blogList");
  const searchInput = document.getElementById("searchInput");
  const authorFilter = document.getElementById("authorFilter");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortBy = document.getElementById("sortBy");
  const blogForm = document.getElementById("blogForm");
  
  function displayBlogs(filteredBlogs) {
    blogList.innerHTML = "";
    if (filteredBlogs.length === 0) {
      blogList.innerHTML = "<p>No blogs found.</p>";
      return;
    }
  
    filteredBlogs.forEach(blog => {
      const blogDiv = document.createElement("div");
      blogDiv.className = "blog";
      blogDiv.innerHTML = `
      <img src="${blog.image || 'https://via.placeholder.com/180'}" alt="${blog.title}">

        <div class="blog-content">
          <h3>${blog.title}</h3>
          <p><strong>Author:</strong> ${blog.author}</p>
          <p><strong>Category:</strong> ${blog.category}</p>
          <p><strong>Date:</strong> ${blog.date}</p>
          <p>${blog.content}</p>
        </div>
      `;
      blogList.appendChild(blogDiv);
    });
  }
  
  function updateFilters() {
    const authors = [...new Set(blogs.map(b => b.author))];
    const categories = [...new Set(blogs.map(b => b.category))];
  
    authorFilter.innerHTML = `<option value="">All Authors</option>` +
      authors.map(a => `<option value="${a}">${a}</option>`).join('');
  
    categoryFilter.innerHTML = `<option value="">All Categories</option>` +
      categories.map(c => `<option value="${c}">${c}</option>`).join('');
  }
  
  function filterAndDisplay() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedAuthor = authorFilter.value;
    const selectedCategory = categoryFilter.value;
    const sortOrder = sortBy.value;
  
    let filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm) &&
      (selectedAuthor ? blog.author === selectedAuthor : true) &&
      (selectedCategory ? blog.category === selectedCategory : true)
    );
  
    filtered.sort((a, b) => {
      const dateA = new Date(a.date), dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  
    displayBlogs(filtered);
  }
  
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterAndDisplay, 300);
  });
  authorFilter.addEventListener("change", filterAndDisplay);
  categoryFilter.addEventListener("change", filterAndDisplay);
  sortBy.addEventListener("change", filterAndDisplay);
  
  blogForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value.trim();
    const date = document.getElementById("date").value;
    const content = document.getElementById("content").value.trim();
    const image = document.getElementById("image").value.trim();
  
    if (!title || !author || !category || !date || !content) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const newBlog = { title, author, category, date, content, image };
    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
  
    blogForm.reset();
    updateFilters();
    filterAndDisplay();
    toggleView('home');
  });
  
  function toggleView(view) {
    document.getElementById("homeView").classList.toggle("hidden", view !== 'home');
    document.getElementById("adminView").classList.toggle("hidden", view !== 'admin');
  }
  
  updateFilters();
  filterAndDisplay();
  
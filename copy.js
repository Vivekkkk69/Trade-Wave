<!-- searchResults.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results</title>
  <style>
    /* Add your CSS styles here */
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0px;
}

li {
  display: flex;
  flex-direction: column;

  border: 1px solid #f47171;
  margin-bottom: 20px;
  padding: 20px;
}

li:last-child {
  margin-bottom: 0;
}

h2 {
  margin-top: 0;
}

p {
  margin: 10px 0;
}

strong {
  font-weight: bold;
}

img {
  width: 200px;
  height: 200px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
  </style>
</head>
<body>
  <h1>Search Results</h1>
  
  <% if (products.length === 0) { %>
    <p>No results found.</p>
  <% } else { %>
    <ul>
      <% products.forEach(product => { %>
        <li>
          <h2><%= product.name %></h2>
          <p><strong>Category:</strong> <%= product.Brand %></p>
          <p><strong>Description:</strong> <%= product.Model %></p>
          <p><strong>Price:</strong> <%= product.Price %></p>
          <p><strong>Year Of Buy:</strong> <%= product.Year_ofBuy %></p>
          <p><strong>Description:</strong> <%= product.Description %></p>
          <p><strong>Image:</strong> <img src="<%= product.url %>" alt="photo"></p>
          <p><strong>Item Type:</strong> <%= product.itemType %></p>
          
          
        </li>
      <% }); %>
    </ul>
  <% } %>
</body>
</html>

// Retrieve request information
const url = window.location.href; // Get the current URL
const method = window.location.method; // Get the request method (e.g., GET, POST)
const headers = window.location.headers; // Get the request headers
const params = new URLSearchParams(window.location.search); // Get the query parameters

// Log the request information
console.log("URL:", url);
console.log("Method:", method);
console.log("Headers:", headers);
console.log("Query Parameters:", params);

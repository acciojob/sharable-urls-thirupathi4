// your code here
const form = document.getElementById("infoForm");
const urlDisplay = document.getElementById("url");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;

  // Construct the query string
  const baseUrl = "https://localhost:8080/";
  const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

  // Update the URL display
  urlDisplay.textContent = baseUrl + queryString;
});
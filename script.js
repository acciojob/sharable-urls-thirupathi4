const form = document.getElementById("infoForm");
const urlDisplay = document.getElementById("url");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent reload

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  const baseUrl = "https://localhost:8080/";
  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (year) params.append("year", year);

  // Construct final URL
  const finalUrl = params.toString() ? baseUrl + "?" + params.toString() : baseUrl;

  // Update display
  urlDisplay.textContent = finalUrl;
});

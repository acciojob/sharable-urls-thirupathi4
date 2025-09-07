const button = document.getElementById("button");
const urlDisplay = document.getElementById("url");

button.addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  const baseUrl = "https://localhost:8080/";
  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (year) params.append("year", year);

  const finalUrl = params.toString()
    ? baseUrl + "?" + params.toString()
    : baseUrl;

  urlDisplay.textContent = finalUrl;
});

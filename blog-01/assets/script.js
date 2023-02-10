const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementsByClassName("content");

searchInput.addEventListener("input", function() {
  const searchValue = searchInput.value.toLowerCase();
  let results = "";

  for (let item of data) {
    if (item.name.toLowerCase().includes(searchValue)) {
      results += `<div>${item.name}</div>`;
    }
  }

  resultsContainer.innerHTML = results;
});
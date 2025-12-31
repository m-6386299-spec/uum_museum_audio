const form = document.getElementById("ratingForm");
const avg = document.getElementById("avg");
const count = document.getElementById("count");

let ratings = JSON.parse(localStorage.getItem("ratings")) || [];

function updateStats() {
  if (ratings.length === 0) {
    avg.textContent = 0;
    count.textContent = 0;
    return;
  }
  const sum = ratings.reduce((a, b) => a + b, 0);
  avg.textContent = (sum / ratings.length).toFixed(1);
  count.textContent = ratings.length;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const selected = document.querySelector('input[name="rating"]:checked');
  if (!selected) return alert("Please select a rating ⭐");

  ratings.push(Number(selected.value));
  localStorage.setItem("ratings", JSON.stringify(ratings));
  form.reset();
  updateStats();
});

updateStats();

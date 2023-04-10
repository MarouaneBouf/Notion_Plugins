document.addEventListener("DOMContentLoaded", () => {
  let counter = parseInt(localStorage.getItem("counter")) || 0;
  let actual_value = document.querySelector("#box");
  actual_value.innerHTML = counter;

  document.querySelector("#energy").addEventListener("click", function () {
    counter++;
    localStorage.setItem("counter", counter);
    actual_value.innerHTML = counter;
  });
});

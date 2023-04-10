document.addEventListener("DOMContentLoaded", () => {
  let counter = parseInt(document.querySelector("#box").innerHTML);
  let actual_value = document.querySelector("#box");
  document.querySelector("#energy").addEventListener("click", function () {
    counter++;
    actual_value.innerHTML = counter;
  });
});

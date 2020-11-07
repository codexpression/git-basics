// We're going to make the button behave like a link
const gitButton = document.getElementById("git-button");

gitButton.addEventListener("click", function () {
  alert("You clicked me...Silly Baba");
  window.location.href = "https://www.github.com";
});

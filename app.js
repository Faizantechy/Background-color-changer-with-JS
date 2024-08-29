const Buttons = document.querySelector("#Buttons");
const button = document.querySelectorAll("button");

const body = document.querySelector("body");









button.forEach(function (val) {
  val.addEventListener("click", function (elem) {
    if (elem.target.id == "red") {
      body.style.backgroundColor = "red";
      body.style.color = "white";
    }

    if (elem.target.id == "blue") {
      body.style.backgroundColor = "blue";
      body.style.color = "white";
    }

    if (elem.target.id == "yellow") {
      body.style.backgroundColor = "yellow";
      body.style.color = "white";
    }

    if (elem.target.id == "purple") {
      body.style.backgroundColor = "purple";
      body.style.color = "white";
    }

    if (elem.target.id == "black") {
      body.style.backgroundColor = "black";
      body.style.color = "white";
    }

    if (elem.target.id == "skyblue") {
      body.style.backgroundColor = "skyblue";
      body.style.color = "white";
    }
  });
});

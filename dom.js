const container = document.querySelector("#container");

const red = document.createElement("p");
red.classList.add("red");
red.style.color = "red";
red.textContent = "Hey I'm red";

container.appendChild(red);

const blue = document.createElement("h3");
blue.classList.add("blue");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3";

container.appendChild(blue);

const blackdiv = document.createElement("div");
blackdiv.style.borderStyle = "solid";
blackdiv.style.borderColor = "black";
blackdiv.textContent = "Can you see me?";

const divinborder = document.createElement("h1")
divinborder.textContent = "I'm in a div"

const pinborder = document.createElement("p")
pinborder.textContent = "ME TOO!"

blackdiv.appendChild(divinborder);
blackdiv.appendChild(pinborder);
container.appendChild(blackdiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
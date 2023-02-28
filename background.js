const images = ["1.jpeg",
                "2.jpeg",
                "3.jpeg",
                "4.jpeg",
                "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const body = document.querySelector("body")

bgImage.src = `C:/Users/engli/OneDrive/Desktop/web-ToDoList/backimg/${chosenImage}`;
body.appendChild(bgImage);


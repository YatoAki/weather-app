import '../style/style.css';
import background from "../assets/background.png";
import API from "./api.js";

function setBackground() {
  document.body.style.backgroundImage = `url(${background})`;
}

setBackground();

console.log("hello");
API.start("Mandalay");

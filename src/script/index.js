import '../style/style.css';
import night from "../assets/night.jpg";
import day from "../assets/day.jpg";

function changeDayBackground() {
  document.body.style.backgroundImage = `url(${day})`;
}

function changeNightBackground() {
  document.body.style.backgroundImage = `url(${night})`;
}

changeDayBackground();

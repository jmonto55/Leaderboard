import getScores from "./api";

const refreshButton = document.querySelector('.refresh_button');
refreshButton.onclick = () => refreshScores();
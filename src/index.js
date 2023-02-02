import './style.css';
import { addToAPI, refreshScores } from './modules/tools.js';

const refreshButton = document.querySelector('.refresh_button');
const form = document.querySelector('#form');
const username = document.getElementById('name');
const score = document.getElementById('score');

form.onsubmit = (e) => {
  e.preventDefault();
  const scoreUsername = username.value;
  const scoreValue = score.value;
  addToAPI(scoreUsername, scoreValue);
  form.reset();
};

refreshButton.onclick = () => refreshScores();
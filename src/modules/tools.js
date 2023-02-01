import getScores from './api.js';

const refreshButton = document.querySelector('.refresh_button');

const refreshScores = async () => {
  const { data, stat } = await getScores();
  if (stat !== 200) return null;

  const scoresList = document.querySelector('.scores_list');
  scoresList.innerHTML = '';
  data.result.forEach((e) => {
    const score = document.createElement('li');
    score.classList.add('score');
    score.innerHTML = `${e.user}: ${e.score}`;
    scoresList.appendChild(score);
  });
  return scoresList;
};

refreshButton.onclick = () => refreshScores();
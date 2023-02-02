import { getScores, postScore } from './api.js';

export const refreshScores = async () => {
  const { data, stat } = await getScores();
  const scoresList = document.querySelector('.scores_list');
  if (stat !== 200) scoresList.innerHTML = `Error ${stat}: ${data.message}`;
  else {
    scoresList.innerHTML = '';
    data.result.forEach((e) => {
      const score = document.createElement('li');
      score.classList.add('score');
      score.innerHTML = `${e.user}: ${e.score}`;
      scoresList.appendChild(score);
    });
  }
};

export const addToDOM = (user, score) => {
  const scoreLi = document.createElement('li');
  scoreLi.innerHTML = `${user}: ${score}`;
  scoreLi.classList.add('score');
  document.querySelector('.scores_list').appendChild(scoreLi);
};

export const addToAPI = async (user, score) => {
  const { data, stat } = await postScore(user, score);
  if (stat !== 201) return `Error ${stat}: ${data.message}`;
  return addToDOM(user, score);
};

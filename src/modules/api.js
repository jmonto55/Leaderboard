// Game id = T7V7ogLg1WciER8lhmRb
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T7V7ogLg1WciER8lhmRb/scores';

const getScores = async () => {
  const res = await fetch(apiURL);
  const data = await res.json();
  const stat = res.status;
  return { data, stat };
};

const postScore = async (user, score) => {
  const res = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await res.json();
  const stat = res.status;
  return { data, stat };
};
export { getScores, postScore };
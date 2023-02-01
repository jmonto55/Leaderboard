// const id = 'T7V7ogLg1WciER8lhmRb';
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T7V7ogLg1WciER8lhmRb/scores';
const apiHeaders = {
  headers: {
    'content-type': 'application/json',
  },
};

const getScores = async () => {
  const res = await fetch(apiURL);
  const data = await res.json();
  const stat = res.status;
  if (stat !== 200) return 'Error';
  return { data, stat };
};

export default getScores;
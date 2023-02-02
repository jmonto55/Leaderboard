const testScores = [
  {
    user: 'Ana',
    score: '50',
  },
  {
    user: 'Bernie',
    score: '70',
  },
  {
    user: 'Javi',
    score: '100',
  },
];

const getScores = () => {
  const data = testScores;
  const stat = 200;
  return { data, stat };
};

export default getScores;
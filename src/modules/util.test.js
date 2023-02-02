/**
 * @jest-environment jsdom
 */
import { addToDOM, refreshScores } from './util.js';

jest.mock('./api.js');

describe('Toolbox functions Tests', () => {
  document.body.innerHTML = '<ul class="scores_list"></ul>';

  it('Should test if addToDOM is adding username and scores to the DOM', () => {
    addToDOM('Jose', '40');
    addToDOM('Salo', '30');
    const scoresArry = document.querySelectorAll('.score');
    expect(scoresArry).toHaveLength(2);
    expect(scoresArry[0].innerHTML).toBe('Jose: 40');
    expect(scoresArry[1].innerHTML).toBe('Salo: 30');
  });

  it('Should test if refreshScores is correctly displaying the scores list', async () => {
    await refreshScores();
    const scoresArry = document.querySelectorAll('.score');
    expect(scoresArry).toHaveLength(3);
    expect(scoresArry[0].innerHTML).toBe('Ana: 50');
    expect(scoresArry[2].innerHTML).toBe('Javi: 100');
  });
});
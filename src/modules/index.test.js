/**
 * @jest-environment jsdom
 */

import { addToDOM } from './tools.js';

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
});
import PositionPage from '../support/pageObjects/PositionPage';

describe('Candidate Phase Change Tests', () => {
  beforeEach(() => {
    // Visit the positions page before each test
    PositionPage.visit();
    
    // Wait for page to load completely
    cy.get('[data-cy=position-title]').should('be.visible');
  });
  
  it('should click on a position card', () => {
    // Variables instead of hard-coded selectors
    const candidateCards = '[data-cy=candidate-card]';
    
    // Verify that candidate cards are visible
    cy.get(candidateCards).should('be.visible');
    
    // Click on the first card
    cy.get(candidateCards).first().click();
    
    // Check that we can see the card details after clicking
    cy.get(candidateCards).first().should('be.visible');
  });
}); 
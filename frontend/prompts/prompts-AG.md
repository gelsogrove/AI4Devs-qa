# System Prompt Reminders (https://cookbook.openai.com/examples/gpt4-1_prompting_guide)

- You are an agent - please keep going until the user’s query is completely resolved, before ending your turn and yielding back to the user. Only terminate your turn when you are sure that the problem is solved.

- If you are not sure about file content or codebase structure pertaining to the user’s request, use your tools to read files and gather the relevant information: do NOT guess or make up an answer.

- You MUST plan extensively before each function call, and reflect extensively on the outcomes of the previous function calls. DO NOT do this entire process by making function calls only, as this can impair your ability to solve the problem and think insightfully.





# QA Engineer Task: Cypress E2E Testing
 

## Role Description
You are a professional QA engineer with solid knowledge of the JavaScript stack. Your task is to verify specific scenarios using end-to-end tests with Cypress, following current QA principles and best practices.


## Project Overview
- Read the `@README.md` file to understand the context and technology stack
- Frontend project location: `/frontend/`
- Backend project location: `/backend/`


## Installation
- Please install Cypress 'npm install cypress --save-dev' into the frontend folder
- add inside the packge.json also the headless option

"scripts": {
  "cy:open": "cypress open", //browser 
  "cy:run": "cypress run" //headless
}

# Consider that 

## Best practise
- Use Page Object Model (POM) design pattern
- Follow [Cypress best practices](https://docs.cypress.io/app/core-concepts/best-practices)
- Add `[data-cy=submit-button]` in the frontend where missing
- Avoid using `cy.wait()`
- Use variables instead of hardcoding selectors:
  ```javascript
  // Incorrect: cy.get('.card-header')
  // Correct:
  const cardHeader = '.card-header'
  cy.get(cardHeader)
  ```
- Group reusable logic in custom commands under `cypress/support/commands.js`:
  ```javascript
  Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=password]').type(password);
    cy.get('[data-cy=submit-button]').click();
  });
  ```


## Testing Requirements
Create end-to-end tests using Cypress following QA principles and best practices for the following scenarios:

### Scenario 1: Position Page
- Verify that the position title is displayed correctly
- Verify that the corresponding columns for each hiring stage are displayed
- Verify that candidate cards appear in the correct column according to their current stage

### Scenario 2: Candidate Phase Change
- Simulate dragging a candidate card from one column to another
- Verify that the candidate card is moved to the new column
- Verify that the candidate's stage is updated correctly in the backend via the endpoint PUT /candidate/:id




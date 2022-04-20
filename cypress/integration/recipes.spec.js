/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Recipes', () => {
  it('should display the recipes page', () => {
    cy.visit('/');
    cy.get("[data-cy='navbar']").should('be.visible');
  })

  it('should display the form page', () => {
    cy.visit('/');
    cy.get("[data-cy='form']").should('be.visible');
  })

  it('should display 10 recipes', () => {
    cy.visit('/');
    cy.get('[data-cy="recipe"]').should('have.length', 10);
  })

  it('should display 10 lemon recipes', () => {
    cy.visit('/');
    cy.get("[data-cy='form']").type('lemon');
    cy.get('[data-cy="button"]').click();

    cy.get('[data-cy="recipe"]').should('have.length', 10);
  })

  it('should display 10 apple recipes', () => {
    cy.visit('/');
    cy.get("[data-cy='form']").type('apple');
    cy.get('[data-cy="button"]').click();

    cy.get('[data-cy="recipe"]').should('have.length', 10);
  })
});

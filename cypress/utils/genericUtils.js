export const verifyElementVisible=(element)=>{
    cy.get(element).should('be.visible');
}

export const clickElement=(element)=>{
    cy.get(element).click();
}
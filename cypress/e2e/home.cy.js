describe('Home Page',()=>{
    it('should display the home page',()=>{
        cy.visit('/frontend/')
        cy.get('h1').should('contain','Home Page')
    })
})
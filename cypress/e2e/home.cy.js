describe('Home Page',()=>{
    it('should display the home page',()=>{
        cy.visit('https://witty-cliff-015ff9e10.3.azurestaticapps.net/')
        cy.get('h1').should('contain','Home Page')
    })
})
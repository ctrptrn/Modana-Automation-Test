describe("Cermati Register", function(){
	it("Positive Case", function(){

		cy.server()

		//scenario : Register Page
        cy.visit("https://www.cermati.com/gabung")
        cy.get('#email')
            .type('citra.ptrn@gmail.com')
        cy.get('#password')
            .type('kepodehanda123')
        cy.get('#confirm-password')
            .type('kepodehanda123')
        cy.get('#first-name')
            .type('Citra Putriana')
        cy.get('#last-name')
            .type('Basuki')
        cy.get('#mobile-phone')
            .type('085719401338')
        cy.get('#residence-city')
            .type('KOTA JAKARTA SELATAN')
        cy.get('#residence-city')
            .type('{enter}')
        cy.get(':nth-child(8) > .btn')
            .click()
    })
})

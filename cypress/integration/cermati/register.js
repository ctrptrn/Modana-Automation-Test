describe("Cermati Register", function(){
	it("check wording indonesia", function(){

		cy.server()

		//scenario : checking wording in indonesia
        cy.visit("https://www.cermati.com/gabung")
        cy.get('#email')
            .type('abc@email.com')
        cy.get('#password')
            .type('password12345')
        cy.get('#confirm-password')
            .type('password12345')
        cy.get('#first-name')
            .type('firstname')
        cy.get('#last-name')
            .type('lastname')
        // cy.get('#mobile-phone')
        //     .type('12345678910')
        cy.get('#residence-city')
            .type('KOTA JAKARTA SELATAN')
        cy.get('#residence-city')
            .type('{enter}')
        cy.get(':nth-child(8) > .btn')
            .click()
    })
})

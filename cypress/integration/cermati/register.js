describe("Cermati Register", function(){
	it("Positive Case", function(){

		cy.server()

		//scenario : Register Page
        cy.visit("https://www.cermati.com/gabung") // Goto URL: https://www.cermati.com/gabung
        cy.get('#email')    
            .type('123@gmail.com')   // Get field 'email' and type 'citra.ptrn@gmail.com'
        cy.get('#password')
            .type('citra123123')     // Get field 'password' and type 'kepodehanda123'
        cy.get('#confirm-password')
            .type('citra123123')     // Get field 'confirm-password' and type 'kepodehanda123'
        cy.get('#first-name')
            .type('citra')     // Get field 'first-name' and type 'Citra Putriana'
        cy.get('#last-name')
            .type('basuki')     // Get field 'last-name' and type 'Basuki'
        cy.get('#mobile-phone')
            .type('085719401231')       // Get field 'mobile-phone' and type '085719401338'
        cy.get('#residence-city')
            .type('KOTA JAKARTA SELATAN')       // Get field 'residence-city' and type 'KOTA JAKARTA SELATAN'
        cy.get('#residence-city')
            .type('{enter}')        // Get field 'residence-city' and click enter on keyboard
        cy.get(':nth-child(8) > .btn')      
            .click()        // Click button register
    })
})

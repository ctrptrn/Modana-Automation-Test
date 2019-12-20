describe("Investor Login", function(){
	it("Visit Investor Dashboard", function(){
		cy.visit("http://dev.modana.id")
		cy.get('.mod-form-item > .el-input__inner')
			.type('8122045352')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('test12345')
		cy.get('.el-button').click()
		cy.wait(2*1000)
		cy.get('.v-icon').click()
		cy.get('#Employees > .v-list__tile__content').click()
		/*
		cy.get('#Modanaku > .v-list__tile__content').click()
		cy.get('.v-dialog__content--active > .v-dialog > .el-form > .v-card > .v-card__text > .container > .layout > :nth-child(1) > .el-form-item > .el-form-item__content > .d-block > .el-input__inner')
			.type("123456")
		cy.get('.v-dialog__content--active > .v-dialog > .el-form > .v-card > .v-card__text > .container > .layout > .sm12 > .v-card__actions > .el-button--primary').click()
		*/
		/*
		cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
			.type("kelvindsmn@gmail.com")
		cy.get('input[name="password"]')
			.type("password")
		cy.get('.el-button').click()
		*/
	})
})

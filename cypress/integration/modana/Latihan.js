describe("Modana HR Login", function(){
	it("Visit Website", function(){
		cy.visit("http://dev.modana.id")
		cy.get('.mod-form-item > .el-input__inner')
			.type('8122045352')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('test12345')
		cy.get('.el-button').click()
		cy.wait(2*1500)
		cy.get('.v-icon').click()
		//Create Attendance
		cy.get('#Attendance > .v-list__tile__content').click()
		cy.wait(2*1500)
		cy.get(':nth-child(2) > .item').click()
		cy.get('.el-button-group > :nth-child(1)').click()
		cy.wait(2*1500)
		cy.get('.el-select__caret').click()
		cy.get('.el-scrollbar__view > :nth-child(6)').click()
		cy.wait(60)
		cy.get('.el-select > .el-input > .el-input__inner').click()
		cy.get('.el-date-editor > .el-input__inner').click()
		cy.get(':nth-child(4) > :nth-child(5) > div').click()
		cy.get(':nth-child(3) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')
		
		

		/*
		cy.get('#Employees > .v-list__tile__content').click()
		cy.wait(2*1500)
		cy.get('.el-button-group > :nth-child(1)').click()
		cy.get('.el-col-12 > .el-form-item > .el-form-item__content > .mod-form-item > .el-input__inner')
			.type("Jennie")
		cy.get('.el-form > :nth-child(1) > :nth-child(3) > .el-form-item > .el-form-item__content > .mod-form-item > .el-input__inner')
			.type("Kim")
		cy.get('[role="radio"][tabindex="-1"] > .el-radio__input > .el-radio__inner').click()
		cy.get('.el-col > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').click()
		cy.get(':nth-child(3) > :nth-child(4) > div').click()
		cy.get(':nth-child(4) > .el-col > .el-form-item > .el-form-item__content > .mod-form-item > .el-input__inner')
			.type("81219644314")
		cy.get(':nth-child(5) > .el-col > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret').select("Employee")
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

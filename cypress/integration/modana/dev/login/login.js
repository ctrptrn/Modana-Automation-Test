describe("Modana HR Login Fail", function(){
	it("log in with wrong password", function(){

		cy.server()

		//scenario : if log in with wrong password in indonesia
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		
		cy.visit("http://dev.modana.id")
		cy.get('.mod-form-item > .el-input__inner')
			.type('807654323')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('00000aaa')
		cy.get('.el-button')
			.click()

		cy.wait('@login')
		cy.get('@login').then(function (xhr) {
			expect(400).to.eq(xhr.status)
			expect("Nomor Handphone atau Password yang anda masukkan salah").to.eq(xhr.response.body.err.errors[0].message)
			expect("non_field_errors").to.eq(xhr.response.body.err.errors[0].field)
		  })
		cy.wait(2*1500)
	})
	it("log in with wrong phone number", function(){

		cy.server()

		//scenario : if log in with wrong phone number in indonesia
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		
		cy.visit("http://dev.modana.id")
		cy.get('.mod-form-item > .el-input__inner')
			.type('807654322')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('123123')
		cy.get('.el-button')
			.click()

		cy.wait('@login')
		cy.get('@login').then(function (xhr) {
			expect(400).to.eq(xhr.status)
			expect("Nomor Handphone atau Password yang anda masukkan salah").to.eq(xhr.response.body.err.errors[0].message)
			expect("non_field_errors").to.eq(xhr.response.body.err.errors[0].field)
		  })
		cy.wait(2*1500)
		
	})
	it("check wording indonesia", function(){

		cy.server()

		//scenario : check wording in indonesia
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		
		cy.visit("http://dev.modana.id")
		cy.get('.el-button')
			.click()
		cy.get('.el-message__content')
			.contains("Lengkapi Kolom yang kosong")
		cy.get(':nth-child(1) > .el-form-item__content > .el-form-item__error')
			.contains("Nomor telepon dibutuhkan")
		cy.get('.password-field > .el-form-item__content > .el-form-item__error')
			.contains("Kata Sandi dibutuhkan")
		cy.wait(2*1500)
	})
	it("change language to en", function(){

		cy.server()
		//scenario : change language to english
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		
		cy.visit("http://dev.modana.id")	
		cy.get('.el-select__caret')
			.click()
		cy.wait(2*1500)
		cy.get('.el-scrollbar__view > :nth-child(2) > span')
			.click()
		cy.wait(2*1500)
		//scenario : change tab while change language
		cy.get('.row > :nth-child(2)')
			.click()
		cy.get('.el-form > .el-button')
			.click()
		cy.server()
		cy.route('POST', 'http://147.139.134.250:8081/v1/company').as('register')
		cy.wait('@register')
        cy.get('@register').then(function (xhr) {
            expect(400).to.eq(xhr.status)
            expect("Phone number already registered.").to.eq(xhr.response.body.err)
            expect(400).to.eq(xhr.body.status)
        })
	})
	it("log in with wrong password", function(){

		cy.server()

		//scenario : log in with wrong password in english
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		cy.get('.mod-form-item > .el-input__inner')
			.type('807654323')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('00000aaa')
		cy.get('.el-button')
			.click()
		cy.wait('@login')
		cy.get('@login').then(function (xhr) {
			expect(400).to.eq(xhr.status)
			expect("Unable to log in with provided credentials.").to.eq(xhr.response.body.err.errors[0].message)
			expect("non_field_errors").to.eq(xhr.response.body.err.errors[0].field)
		  })
		cy.wait(2*1500)
	})
	it("log in with wrong phone number", function(){

		cy.server()

		//scenario : log in with wrong phone number in english
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		cy.visit("http://dev.modana.id")
		cy.get('.el-select__caret')
			.click()
		cy.wait(2*1500)
		cy.get('.el-scrollbar__view > :nth-child(2) > span')
			.click()
		cy.get('.mod-form-item > .el-input__inner')
			.type('807654322')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('123123')
		cy.get('.el-button')
			.click()

		cy.wait('@login')
		cy.get('@login').then(function (xhr) {
			expect(400).to.eq(xhr.status)
			expect("Unable to log in with provided credentials.").to.eq(xhr.response.body.err.errors[0].message)
			expect("non_field_errors").to.eq(xhr.response.body.err.errors[0].field)
		})
		cy.wait(2*1500)
	})
	it("check wording en", function(){

		cy.server()

		//scenario : check wording in english
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		cy.visit("http://dev.modana.id")
		cy.get('.el-select__caret')
			.click()
		cy.wait(2*1500)
		cy.get('.el-scrollbar__view > :nth-child(2) > span')
			.click()
		cy.get('.el-button')
			.click()
		cy.get(':nth-child(1) > .el-form-item__content > .el-form-item__error')
			.contains("Phone Number is required")
		cy.get('.password-field > .el-form-item__content > .el-form-item__error')
			.contains("Password is required")
		cy.get('[style="z-index: 2015;"] > .el-message__content')
			.contains("Complete missing Field")
		cy.wait(2*1500)
	})
	it("log in with wrong password", function(){

		cy.server()

		//scenario : login in indonesia
		cy.route('POST', 'http://147.139.134.250:8081/v1/authenticate').as('login')
		
		cy.visit("http://dev.modana.id")
		cy.get('.mod-form-item > .el-input__inner')
			.type('807654323')
		cy.get('.el-form-item__content > .el-input > .el-input__inner')
			.type('00000aaa')
		cy.get('.el-button')
			.click()

		cy.wait('@login')
		cy.get('@login').then(function (xhr) {
			expect(400).to.eq(xhr.status)
			expect("Nomor Handphone atau Password yang anda masukkan salah").to.eq(xhr.response.body.err.errors[0].message)
			expect("non_field_errors").to.eq(xhr.response.body.err.errors[0].field)
		  })
		cy.wait(2*1500)
	})
})

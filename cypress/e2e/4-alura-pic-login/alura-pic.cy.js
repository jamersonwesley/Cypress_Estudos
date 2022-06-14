describe('alura pic login',() =>{

    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    }
    );
    it.only('login valido', ()=>{
        cy.login('flavio','123');
        cy.contains('a','Logout').should('be.visible')

    })
    it.only('login invalido', ()=>{

   cy.login('jamerson','123')
    cy.on('window:alert' , (str)=>{
        expect(str).to.equal('Invalid user name or password')
    })

    })


})
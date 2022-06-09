describe('login na alura pic',() =>{
    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com/#/home');

    })

    it('verifica mensagens de validação',()=>{
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
         cy.contains('ap-vmessage','Full name is required!').should('be.visible');
          cy.contains('ap-vmessage','User name is required!').should('be.visible');
           cy.contains('ap-vmessage','Password is required!').should('be.visible');

    })
    it('verifica email',()=>{
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
         cy.contains('ap-vmessage','Full name is required!').should('be.visible');
          cy.contains('ap-vmessage','User name is required!').should('be.visible');
           cy.contains('ap-vmessage','Password is required!').should('be.visible');
           cy.get('input[formcontrolname="email"]').type('aaa');
             cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');



    })

})
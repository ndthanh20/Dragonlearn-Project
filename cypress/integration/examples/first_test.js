describe('My First Test', function(){
    it('Open game',function(){
        cy.visit('index.html')
        cy.contains('Move Objects Up or Down Part 1').click()
    })
})
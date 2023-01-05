const isSpelledCorrectly = (title, description, customword) => {
    cy.task("spelling", {string: title, desc: description, customword: customword}).then((resp) => {
        expect(resp.val, resp.message).to.be.true
    });
}

module.exports = {isSpelledCorrectly};
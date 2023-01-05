describe("Should verify correct and incorrect element spellings in the html html documents", function () {

    const wait = 1000;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // TITLE

    it("The title should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let title = e.find('title').text();
                cy.isSpelledCorrectly(title, "website title");
            });
        });
    });

    it("The title should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let title = e.find('title').text();
                cy.isSpelledCorrectly(title, "website title");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // H1

    it("The H1 should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h1 = e.find('h1').text();
                cy.isSpelledCorrectly(h1, "h1");
            });
        });
    });

    it("The H1 should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h1 = e.find('h1').text();
                cy.isSpelledCorrectly(h1, "h1");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // H2

    it("The H2 should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h2 = e.find('h2').text();
                cy.isSpelledCorrectly(h2, "h2");
            });
        });
    });

    it("The H2 should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h2 = e.find('h2').text();
                cy.isSpelledCorrectly(h2, "h2");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // H3

    it("The H3 should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h3 = e.find('h3').text();
                cy.isSpelledCorrectly(h3, "h3");
            });
        });
    });

    it("The H3 should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h3 = e.find('h3').text();
                cy.isSpelledCorrectly(h3, "h3");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // H4

    it("The H4 should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h4 = e.find('h4').text();
                cy.isSpelledCorrectly(h4, "h4");
            });
        });
    });

    it("The H4 should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h4 = e.find('h4').text();
                cy.isSpelledCorrectly(h4, "h4");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // H5

    it("The H5 should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h5 = e.find('h5').text();
                cy.isSpelledCorrectly(h5, "h5");
            });
        });
    });

    it("The H5 should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h5 = e.find('h5').text();
                cy.isSpelledCorrectly(h5, "h5");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // H6

    it("The H6 should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h6 = e.find('h6').text();
                cy.isSpelledCorrectly(h6, "h6");
            });
        });
    });

    it("The H6 should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let h6 = e.find('h6').text();
                cy.isSpelledCorrectly(h6, "h6");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // PARAGRAPH

    it("The paragraph text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('p').each((paragraph) => {
                let text = paragraph.text();
                cy.isSpelledCorrectly(text, `paragraph ("${text}")`);
            });
        });
    });

    it("The paragraph text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('p').each((paragraph) => {
                let text = paragraph.text();
                cy.isSpelledCorrectly(text, `paragraph ("${text}")`);
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ANCHOR

    it("The anchor text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let a = e.find('a').text();
                cy.isSpelledCorrectly(a, "anchor text");
            });
        });
    });

    it("The anchor text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let a = e.find('a').text();
                cy.isSpelledCorrectly(a, "anchor text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // SPAN

    it("The span text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let span = e.find('span').text();
                cy.isSpelledCorrectly(span, "span text");
            });
        });
    });

    it("The span text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let span = e.find('span').text();
                isSpelledCorrectly(span, "span text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // BOLD

    it("The bold text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let b = e.find('b').text();
                cy.isSpelledCorrectly(b, "bold text");
            });
        });
    });

    it("The bold text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let b = e.find('b').text();
                cy.isSpelledCorrectly(b, "bold text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // STRONG

    it("The strong text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let strong = e.find('strong').text();
                cy.isSpelledCorrectly(strong, "strong text");
            });
        });
    });

    it("The strong text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let strong = e.find('strong').text();
                cy.isSpelledCorrectly(strong, "strong text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ITALIC

    it("The italic text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let italic = e.find('i').text();
                cy.isSpelledCorrectly(italic, "italic text");
            });
        });
    });

    it("The italic text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let italic = e.find('i').text();
                cy.isSpelledCorrectly(italic, "italic text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // EMPHASIZED

    it("The emphasized text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let emphasized = e.find('em').text();
                cy.isSpelledCorrectly(emphasized, "emphasized text");
            });
        });
    });

    it("The emphasized text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let emphasized = e.find('em').text();
                cy.isSpelledCorrectly(emphasized, "emphasized text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // MARK

    it("The mark text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let mark = e.find('mark').text();
                cy.isSpelledCorrectly(mark, "mark text");
            });
        });
    });

    it("The mark text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let mark = e.find('mark').text();
                cy.isSpelledCorrectly(mark, "mark text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // SMALL

    it("The small text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let small = e.find('small').text();
                cy.isSpelledCorrectly(small, "small text");
            });
        });
    });

    it("The small text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('html').then(function (e) {
                let small = e.find('small').text();
                cy.isSpelledCorrectly(small, "small text");
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // ORDERED LIST

    it("The ordered list item text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('ol li').each((item) => {
                let text = item.text();
                cy.isSpelledCorrectly(text, `list item ("${text}")`);
            });
        });
    });

    it("The ordered list item text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('ol li').each((item) => {
                let text = item.text();
                cy.isSpelledCorrectly(text, `list item ("${text}")`);
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // UNORDERED LIST

    it("The unordered list item text should not contain any grammatical mistakes", () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('ul li').each((item) => {
                let text = item.text();
                cy.isSpelledCorrectly(text, `list item`);
            });
        });
    });

    it("The unordered list item text should contain a grammatical mistake", () => {
        cy.visit('cypress/e2e/html/has-spelling-mistakes.html').then(() => {
            cy.wait(wait);
            cy.get('ul li').each((item) => {
                let text = item.text();
                cy.isSpelledCorrectly(text, `list item`, ["test"]);
            });
        });
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

});
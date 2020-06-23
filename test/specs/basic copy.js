describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        browser.waitUntil( () => title !== undefined);
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser automation test framework for Node.js -');
    })
})
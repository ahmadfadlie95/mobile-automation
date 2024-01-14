describe('Sample', () => {
    it('Sample Test', async () => {
        await $('~Accessibility').click();
        await $('~Custom View').click();
        await driver.pause(5000);
    })
})
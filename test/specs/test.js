import assert from 'assert';
// require("mocha");
require('webdriverio');
// //require('moca');

describe('my awesome website', function() {
    it('should do some chai assertions', function() {
        browser.url('http://dev-bondblack.bondco.io/portal/log_in');
        browser.setValue('input[name="email"]', 'benjamin@bond.co')
            .setValue('input[name="password"]', '12341234')
            .click('.btn-primary')
            .screenshot();
        browser.getUrl().should.be.equal('Bond Black')

    });
});
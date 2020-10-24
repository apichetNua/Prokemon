var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(() => {
    $("~app-root").waitForDisplayed(100000, false)
  });

  it('Connect URL', async => {
    $('~url').setValue("https://www.google.com");

    $("~Connect").click();

    $("~Connectstatus").waitForDisplayed(11000);
    const status = $("~Connectstatus").getText();
    expect(status).to.equal('success');
  });
  it('Connect URL', async => {
    $('~url').setValue("https://www.google.com");
    $("~Connect").click();

    $("~Connectstatus").waitForDisplayed(11000);
    const status = $("~Connectstatus").getText();
    expect(status).to.equal('success');
  });


  
});
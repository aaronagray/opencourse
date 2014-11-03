  MochaWeb.testOnly(function(){
    describe("UI test", function(){
      it("should have a site logo", function(){
        var logo = $('.site-logo');
        chai.assert.equal(logo.hasClass('fa'), true);
      });
    });
  });

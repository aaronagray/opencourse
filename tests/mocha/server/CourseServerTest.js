"use strict";
MochaWeb.testOnly(function(){

  describe("Courses", function(){

    before(function() {
      Courses.remove({});
    });

    it("should save a course to the database.", function(){

      Courses.insert({
        title: 'Mocha Test',
        description: 'This is a test from Mocha',
        user: '1',
        public: true
      });

      chai.assert(Courses.find().count() === 1);
    });

    it("should require a user.", function(){
      chai.expect(function() {
        Courses.insert({
          title: 'Foo',
          description: 'Boo',
          public: false
        });
      }).to.throw(Error);
    });
  });
});

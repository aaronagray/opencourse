CoursesIndexController = RouteController.extend({
  data: {
    courses: function() {
      var scope = Router.current().params.user;
      if (scope) {
        return Courses.find({user: scope}, {sort: {title: 1}});
      }
      return Courses.find({}, {sort: {title: 1}});
    }
  },

  action: function () {
    this.render();
  }
});

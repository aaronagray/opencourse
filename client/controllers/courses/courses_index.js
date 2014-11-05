CoursesIndexController = RouteController.extend({
  data: {
    courses: function() {
      var scope = Router.current().params.user;
      if (scope) {
        Meteor.subscribe('my_courses', scope);
        return Courses.find({}, {sort: {title: 1}});
      } else {
         Meteor.subscribe('courses_index');
        return Courses.find({}, {sort: {title: 1}});
      }
    }
  },

  action: function () {
    this.render();
  }
});

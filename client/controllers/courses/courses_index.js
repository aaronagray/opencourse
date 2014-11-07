CoursesIndexController = RouteController.extend({
  data: {
    courses: function() {
      if (Session.get('my_courses')) {
        Meteor.subscribe('my_courses');
        return Courses.find();
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

EditCourseController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('course', {_id: this.params._id});
  },

  action: function () {
    this.render();
  }
});

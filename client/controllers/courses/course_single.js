CourseSingleController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
    return [
      Meteor.subscribe('course', {_id: this.params._id}),
      Meteor.subscribe('course_resources', this.params._id)
    ];
  },

  action: function () {
    this.render();
  }
});

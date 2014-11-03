EditResourceController = RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('courses_index'),
      Meteor.subscribe('resource', this.params._id)
    ]
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});

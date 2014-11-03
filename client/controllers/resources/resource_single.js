ResourceSingleController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('resource', this.params._id);
  },

  data: function () {
    return Meteor.subscribe('resource', this.params._id);
  },

  action: function () {
    this.render();
  }
});

NewResourceController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('courses_index');
  },

  data: function () {
  },

  action: function () {
    Session.set('FormAction', 'insert');
    this.render();
  }
});

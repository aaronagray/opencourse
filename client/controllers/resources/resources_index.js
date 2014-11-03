ResourcesIndexController = RouteController.extend({
  waitOn: function () {
  },

  data: {
    resources: function () {
       Meteor.subscribe('resources_index'),
       Meteor.subscribe('courses_index')
      var scope = Router.current().params.user;
      if (scope) {
        return Resources.find({user: scope}, {sort: {title: 1}});
      }
      return Resources.find({}, {sort: {title: 1}});
    }
  },

  action: function () {
    this.render();
  }
});

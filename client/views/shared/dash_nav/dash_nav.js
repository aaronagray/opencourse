
  Meteor.subscribe('userData');
/*****************************************************************************/
/* DashNav: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DashNav.events({
  'load': function (e, tmpl) {
  },
});

Template.DashNav.helpers({
  avatar: function() {
    var userSub = Meteor.subscribe('userData')
    if (userSub.ready()) {
      var url;
      if (Meteor.user().services.twitter) {
        url = Meteor.user().services.twitter.profile_image_url;
        url = url.split('_normal').shift() + '.jpeg';
      } else if (Meteor.user().services.github) {
        url = 'https://avatars1.githubusercontent.com/u/' + Meteor.user().services.github.id;
      }
      return url;
    }
  }
});

/*****************************************************************************/
/* DashNav: Lifecycle Hooks */
/*****************************************************************************/
Template.DashNav.created = function () {
};

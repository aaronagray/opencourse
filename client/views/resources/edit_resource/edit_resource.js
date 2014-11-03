/*****************************************************************************/
/* EditResource: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.EditResource.events({
  'change [name="course"]': function(e) {
    Session.set('ResourceFormCourse', e.target.value);
  }
});

Template.EditResource.helpers({
  resource: function() {
    return Resources.findOne();
  }
});

Template.EditResource.rendered = function () {
  var course = $('[name="course"]').val();
  Session.set('ResourceFormCourse', course);
};

/*****************************************************************************/
/* CourseSingle: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CourseSingle.events({
  'click .add-resource': function(e, tmpl) {
    var course = Courses.findOne();
    Session.set('SelectedCourse', course._id);
  },
  'click .complete-action': function(e, tmpl) {
    var resource = $(e.target).data('resource');
    Resources.update(resource, {$set: {complete: true}});
  },
  'click .undo-action': function(e, tmpl) {
    var resource = $(e.target).data('resource');
    Resources.update(resource, {$set: {complete: false}});
  },
});

Template.CourseSingle.helpers({
  course: function() {
    return Courses.findOne({}, {sort: {'resources.title': 1}});
  },
  courseResources: function() {
    return Resources.find();
  }
});

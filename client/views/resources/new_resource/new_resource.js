/*****************************************************************************/
/* NewResource: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NewResource.events({
  'submit form': function() {
    var course = Session.get('SelectedCourse');
    if (course) {
      Router.go('/course/' + course);
    } else {
      Router.go('/resources');
    }
  }
});

Template.NewResource.helpers({
  fromCourse: function() {
    if (Session.get('SelectedCourse')) {
      return true;
    } else {
      return false;
    }
  },
  fromCourseId: function() {
    var courseId = Session.get('SelectedCourse');
    var course = Courses.find(courseId);
    return {label: course.title, value: courseId};
  }
});

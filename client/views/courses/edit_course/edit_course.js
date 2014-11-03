
// Todo: Move this into form helper.o

Template.EditCourse.helpers({
  course: function() {
    return Courses.findOne();
  }
});

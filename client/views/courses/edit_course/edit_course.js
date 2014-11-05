Template.EditCourse.helpers({
  course: function() {
    return Courses.findOne();
  }
});

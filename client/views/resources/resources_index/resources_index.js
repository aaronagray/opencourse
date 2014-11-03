/*****************************************************************************/
/* ResourcesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ResourcesIndex.helpers({
  courseTitle: function (courseId) {
    var course = Courses.findOne(courseId);
    if (course) return course.title;
  }
});

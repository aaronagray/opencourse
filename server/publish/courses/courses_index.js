/*****************************************************************************/
/* CoursesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('courses_index', function () {
  return Courses.find({'public': true});
});

Meteor.publish('course', function(courseId) {
  return Courses.find(courseId);
});
